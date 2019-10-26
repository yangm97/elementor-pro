<?php
namespace ElementorPro\License;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Updater {

	public $plugin_version;
	public $plugin_name;
	public $plugin_slug;

	private $response_transient_key;

	public function __construct() {
		$this->plugin_version = ELEMENTOR_PRO_VERSION;
		$this->plugin_name = ELEMENTOR_PRO_PLUGIN_BASE;
		$this->plugin_slug = basename( ELEMENTOR_PRO__FILE__, '.php' );
		$this->response_transient_key = md5( sanitize_key( $this->plugin_name ) . 'response_transient' );

		$this->setup_hooks();
		$this->maybe_delete_transients();
	}

	private function setup_hooks() {
		add_filter( 'pre_set_site_transient_update_plugins', [ $this, 'check_update' ], 50 );
		add_action( 'delete_site_transient_update_plugins', [ $this, 'delete_transients' ] );
		add_filter( 'plugins_api', [ $this, 'plugins_api_filter' ], 10, 3 );

		remove_action( 'after_plugin_row_' . $this->plugin_name, 'wp_plugin_update_row' );
		add_action( 'after_plugin_row_' . $this->plugin_name, [ $this, 'show_update_notification' ], 10, 2 );
	}

	public function delete_transients() {
		$this->delete_transient( $this->response_transient_key );
	}

	private function maybe_delete_transients() {
		global $pagenow;

		if ( 'update-core.php' === $pagenow && isset( $_GET['force-check'] ) ) {
			$this->delete_transients();
		}
	}

	private function check_transient_data( $_transient_data ) {
		if ( ! is_object( $_transient_data ) ) {
			$_transient_data = new \stdClass();
		}

		if ( empty( $_transient_data->checked ) ) {
			return $_transient_data;
		}

		$version_info = $this->get_transient( $this->response_transient_key );
		if ( false === $version_info ) {
			$version_info = API::get_version();

			if ( is_wp_error( $version_info ) ) {
				$version_info = new \stdClass();
				$version_info->error = true;
			}

			$this->set_transient( $this->response_transient_key, $version_info );
		}

		if ( ! empty( $version_info->error ) ) {
			return $_transient_data;
		}

		// include an unmodified $wp_version
		include( ABSPATH . WPINC . '/version.php' );

		if ( version_compare( $wp_version, $version_info['requires'], '<' ) ) {
			return $_transient_data;
		}

		if ( version_compare( $this->plugin_version, $version_info['new_version'], '<' ) ) {
			$plugin_info = (object) $version_info;
			unset( $plugin_info->sections );

			$_transient_data->response[ $this->plugin_name ] = $plugin_info;
		}

		$_transient_data->last_checked = current_time( 'timestamp' );
		$_transient_data->checked[ $this->plugin_name ] = $this->plugin_version;

		if ( ! isset( $_transient_data->translations ) ) {
			$_transient_data->translations = [];
		}

		$_transient_data->translations = array_filter( $_transient_data->translations, function( $translation ) {
			return ( $translation['slug'] !== $this->plugin_slug );
		} );

		if ( ! empty( $version_info['translations'] ) ) {
			foreach ( $version_info['translations'] as $translation ) {
				$_transient_data->translations[] = [
					'type' => 'plugin',
					'slug' => $this->plugin_slug,
					'language' => $translation['language'],
					'version' => $version_info['new_version'],
					'updated' => $translation['updated'],
					'package' => $translation['package'],
					'autoupdate' => true,
				];
			}
		}

		return $_transient_data;
	}

	public function check_update( $_transient_data ) {
		global $pagenow;

		if ( ! is_object( $_transient_data ) ) {
			$_transient_data = new \stdClass();
		}

		if ( 'plugins.php' === $pagenow && is_multisite() ) {
			return $_transient_data;
		}

		return $this->check_transient_data( $_transient_data );
	}

	public function plugins_api_filter( $_data, $_action = '', $_args = null ) {
		if ( 'plugin_information' !== $_action ) {
			return $_data;
		}

		if ( ! isset( $_args->slug ) || ( $_args->slug !== $this->plugin_slug ) ) {
			return $_data;
		}

		$cache_key = 'elementor_pro_api_request_' . substr( md5( serialize( $this->plugin_slug ) ), 0, 15 );

		$api_request_transient = get_site_transient( $cache_key );

		if ( empty( $api_request_transient ) ) {
			$api_response = API::get_version();

			$api_request_transient = new \stdClass();

			$api_request_transient->name = 'Elementor Pro';
			$api_request_transient->slug = $this->plugin_slug;
			$api_request_transient->author = '<a href="https://elementor.com/">Elementor.com</a>';
			$api_request_transient->homepage = 'https://elementor.com/';
			$api_request_transient->requires = $api_response['requires'];
			$api_request_transient->tested = $api_response['tested'];

			$api_request_transient->version = $api_response['new_version'];
			$api_request_transient->last_updated = $api_response['last_updated'];
			$api_request_transient->download_link = $api_response['download_link'];
			$api_request_transient->banners = [
				'high' => 'https://ps.w.org/elementor/assets/banner-1544x500.png?rev=1494133',
				'low' => 'https://ps.w.org/elementor/assets/banner-1544x500.png?rev=1494133',
			];

			$api_request_transient->sections = unserialize( $api_response['sections'] );

			// Expires in 1 day
			set_site_transient( $cache_key, $api_request_transient, DAY_IN_SECONDS );
		}

		$_data = $api_request_transient;

		return $_data;
	}

	public function show_update_notification( $file, $plugin ) {
		if ( is_network_admin() ) {
			return;
		}

		if ( ! current_user_can( 'update_plugins' ) ) {
			return;
		}

		if ( ! is_multisite() ) {
			return;
		}

		if ( $this->plugin_name !== $file ) {
			return;
		}

		// Remove our filter on the site transient
		remove_filter( 'pre_set_site_transient_update_plugins', [ $this, 'check_update' ] );

		$update_cache = get_site_transient( 'update_plugins' );
		$update_cache = $this->check_transient_data( $update_cache );
		set_site_transient( 'update_plugins', $update_cache );

		// Restore our filter
		add_filter( 'pre_set_site_transient_update_plugins', [ $this, 'check_update' ] );
	}

	protected function get_transient( $cache_key ) {
		$cache_data = get_option( $cache_key );

		if ( empty( $cache_data['timeout'] ) || current_time( 'timestamp' ) > $cache_data['timeout'] ) {
			// Cache is expired.
			return false;
		}

		return $cache_data['value'];
	}

	protected function set_transient( $cache_key, $value, $expiration = 0 ) {
		if ( empty( $expiration ) ) {
			$expiration = strtotime( '+12 hours', current_time( 'timestamp' ) );
		}

		$data = [
			'timeout' => $expiration,
			'value' => $value,
		];

		update_option( $cache_key, $data, 'no' );
	}

	protected function delete_transient( $cache_key ) {
		delete_option( $cache_key );
	}
}
