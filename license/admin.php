<?php
namespace ElementorPro\License;

use Elementor\Settings;
use ElementorPro\Core\Connect\Apps\Activate;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Admin {

	const PAGE_ID = 'elementor-license';

	public static $updater = null;

	public static function get_errors_details() {
		$license_page_link = self::get_url();

		return [
			API::STATUS_EXPIRED => [
				'title' => __( 'Your License Has Expired', 'elementor-pro' ),
				'description' => sprintf( __( '<a href="%s" target="_blank">Renew your license today</a>, to keep getting feature updates, premium support and unlimited access to the template library.', 'elementor-pro' ), API::RENEW_URL ),
				'button_text' => __( 'Renew License', 'elementor-pro' ),
				'button_url' => API::RENEW_URL,
			],
			API::STATUS_DISABLED => [
				'title' => __( 'Your License Is Inactive', 'elementor-pro' ),
				'description' => __( '<strong>Your license key has been cancelled</strong> (most likely due to a refund request). Please consider acquiring a new license.', 'elementor-pro' ),
				'button_text' => __( 'Activate License', 'elementor-pro' ),
				'button_url' => $license_page_link,
			],
			API::STATUS_INVALID => [
				'title' => __( 'License Invalid', 'elementor-pro' ),
				'description' => __( '<strong>Your license key doesn\'t match your current domain</strong>. This is most likely due to a change in the domain URL of your site (including HTTPS/SSL migration). Please deactivate the license and then reactivate it again.', 'elementor-pro' ),
				'button_text' => __( 'Reactivate License', 'elementor-pro' ),
				'button_url' => $license_page_link,
			],
			API::STATUS_SITE_INACTIVE => [
				'title' => __( 'License Mismatch', 'elementor-pro' ),
				'description' => __( '<strong>Your license key doesn\'t match your current domain</strong>. This is most likely due to a change in the domain URL. Please deactivate the license and then reactivate it again.', 'elementor-pro' ),
				'button_text' => __( 'Reactivate License', 'elementor-pro' ),
				'button_url' => $license_page_link,
			],
		];
	}

	public static function deactivate() {
		API::deactivate_license();

		delete_option( 'elementor_pro_license_key' );
		delete_transient( 'elementor_pro_license_data' );
	}

	private function print_admin_message( $title, $description, $button_text = '', $button_url = '', $button_class = '' ) {
		?>
		<div class="notice elementor-message">
			<div class="elementor-message-inner">
				<div class="elementor-message-icon">
					<div class="e-logo-wrapper">
						<i class="eicon-elementor" aria-hidden="true"></i>
					</div>
				</div>

				<div class="elementor-message-content">
					<strong><?php echo $title; ?></strong>
					<p><?php echo $description; ?></p>
				</div>

				<?php if ( ! empty( $button_text ) ) : ?>
					<div class="elementor-message-action">
						<a class="elementor-button <?php echo $button_class; ?>" href="<?php echo esc_url( $button_url ); ?>"><?php echo $button_text; ?></a>
					</div>
				<?php endif; ?>
			</div>
		</div>
		<?php
	}

	private static function get_hidden_license_key() {
		$input_string = self::get_license_key();

		$start = 5;
		$length = mb_strlen( $input_string ) - $start - 5;

		$mask_string = preg_replace( '/\S/', 'X', $input_string );
		$mask_string = mb_substr( $mask_string, $start, $length );
		$input_string = substr_replace( $input_string, $mask_string, $start, $length );

		return $input_string;
	}

	public static function get_updater_instance() {
		if ( null === self::$updater ) {
			self::$updater = new Updater();
		}

		return self::$updater;
	}

	public static function get_license_key() {
		return trim( get_option( 'elementor_pro_license_key' ) );
	}

	public static function set_license_key( $license_key ) {
		return update_option( 'elementor_pro_license_key', $license_key );
	}

	public function action_activate_license() {
		check_admin_referer( 'elementor-pro-license' );

		if ( empty( $_POST['elementor_pro_license_key'] ) ) {
			wp_die( __( 'Please enter your license key.', 'elementor-pro' ), __( 'Elementor Pro', 'elementor-pro' ), [
				'back_link' => true,
			] );
		}

		$license_key = trim( $_POST['elementor_pro_license_key'] );

		$data = API::activate_license( $license_key );

		if ( is_wp_error( $data ) ) {
			wp_die( sprintf( '%s (%s) ', $data->get_error_message(), $data->get_error_code() ), __( 'Elementor Pro', 'elementor-pro' ), [
				'back_link' => true,
			] );
		}

		if ( API::STATUS_VALID !== $data['license'] ) {
			$error_msg = API::get_error_message( $data['error'] );
			wp_die( $error_msg, __( 'Elementor Pro', 'elementor-pro' ), [
				'back_link' => true,
			] );
		}

		self::set_license_key( $license_key );
		API::set_license_data( $data );

		wp_safe_redirect( $_POST['_wp_http_referer'] );
		die;
	}

	public function action_deactivate_license() {
		check_admin_referer( 'elementor-pro-license' );

		$this->deactivate();

		wp_safe_redirect( $_POST['_wp_http_referer'] );
		die;
	}

	public function register_page() {
		$menu_text = __( 'License', 'elementor-pro' );

		add_submenu_page(
			Settings::PAGE_ID,
			$menu_text,
			$menu_text,
			'manage_options',
			self::PAGE_ID,
			[ $this, 'display_page' ]
		);
	}

	public static function get_url() {
		return admin_url( 'admin.php?page=' . self::PAGE_ID );
	}

	public function display_page() {
		$license_key = self::get_license_key();

		$is_manual_mode = ( isset( $_GET['mode'] ) && 'manually' === $_GET['mode'] );

		if ( $is_manual_mode ) {
			$this->render_manually_activation_widget( $license_key );
			return;
		}

		?>
		<div class="wrap elementor-admin-page-license">
			<h2><?php _e( 'License Settings', 'elementor-pro' ); ?></h2>

			<form class="elementor-license-box" method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
				<?php wp_nonce_field( 'elementor-pro-license' ); ?>

				<?php if ( empty( $license_key ) ) : ?>

					<h3><?php _e( 'Activate License', 'elementor-pro' ); ?></h3>

					<p><?php echo $this->get_activate_message(); ?></p>

					<div class="elementor-box-action">
						<a class="button button-primary" href="<?php echo esc_url( $this->get_connect_url() ); ?>">
							<?php echo __( 'Connect & Activate', 'elementor-pro' ); ?>
						</a>
					</div>
				<?php else :
					$license_data = API::get_license_data( true ); ?>
					<h3><?php _e( 'Status', 'elementor-pro' ); ?>:
						<?php if ( API::STATUS_EXPIRED === $license_data['license'] ) : ?>
							<span style="color: #ff0000; font-style: italic;"><?php _e( 'Expired', 'elementor-pro' ); ?></span>
						<?php elseif ( API::STATUS_SITE_INACTIVE === $license_data['license'] ) : ?>
							<span style="color: #ff0000; font-style: italic;"><?php _e( 'Mismatch', 'elementor-pro' ); ?></span>
						<?php elseif ( API::STATUS_INVALID === $license_data['license'] ) : ?>
							<span style="color: #ff0000; font-style: italic;"><?php _e( 'Invalid', 'elementor-pro' ); ?></span>
						<?php elseif ( API::STATUS_DISABLED === $license_data['license'] ) : ?>
							<span style="color: #ff0000; font-style: italic;"><?php _e( 'Disabled', 'elementor-pro' ); ?></span>
						<?php else : ?>
							<span style="color: #008000; font-style: italic;"><?php _e( 'Active', 'elementor-pro' ); ?></span>
						<?php endif; ?>

						<small>
							<a class="button" href="https://go.elementor.com/my-account/">
								<?php echo __( 'My Account', 'elementor-pro' ); ?>
							</a>
						</small>
					</h3>

					<?php if ( API::STATUS_EXPIRED === $license_data['license'] ) : ?>
					<p class="e-row-divider-bottom elementor-admin-alert elementor-alert-danger"><?php printf( __( '<strong>Your License Has Expired.</strong> <a href="%s" target="_blank">Renew your license today</a> to keep getting feature updates, premium support and unlimited access to the template library.', 'elementor-pro' ), 'https://go.elementor.com/renew/' ); ?></p>
				<?php endif; ?>

					<?php if ( API::STATUS_SITE_INACTIVE === $license_data['license'] ) : ?>
					<p class="e-row-divider-bottom elementor-admin-alert elementor-alert-danger"><?php echo __( '<strong>Your license key doesn\'t match your current domain</strong>. This is most likely due to a change in the domain URL of your site (including HTTPS/SSL migration). Please deactivate the license and then reactivate it again.', 'elementor-pro' ); ?></p>
				<?php endif; ?>

					<?php if ( API::STATUS_INVALID === $license_data['license'] ) : ?>
					<p class="e-row-divider-bottom elementor-admin-alert elementor-alert-info"><?php echo __( '<strong>Your license key doesn\'t match your current domain</strong>. This is most likely due to a change in the domain URL of your site (including HTTPS/SSL migration). Please deactivate the license and then reactivate it again.', 'elementor-pro' ); ?></p>
				<?php endif; ?>

					<p class="e-row-stretch e-row-divider-bottom">
						<span>
						<?php
						$connected_user = $this->get_connected_account();

						if ( $connected_user ) :
							echo sprintf( __( 'You\'re connected as %s.', 'elementor-pro' ), '<strong>' . $this->get_connected_account() . '</strong>' );
						endif;
						?>

						<?php echo __( 'Want to activate this website by a different license?', 'elementor-pro' ); ?>
						</span>
						<a class="button button-primary" href="<?php echo esc_url( $this->get_switch_license_url() ); ?>">
							<?php echo __( 'Switch Account', 'elementor-pro' ); ?>
						</a>
					</p>

					<p class="e-row-stretch">
						<span><?php echo __( 'Want to deactivate the license for any reason?', 'elementor-pro' ); ?></span>
						<a class="button" href="<?php echo esc_url( $this->get_deactivate_url() ); ?>">
							<?php echo __( 'Disconnect', 'elementor-pro' ); ?>
						</a>
					</p>
				<?php endif; ?>
			</form>
		</div>
		<?php
	}

	private function is_block_editor_page() {
		$current_screen = get_current_screen();

		if ( method_exists( $current_screen, 'is_block_editor' ) && $current_screen->is_block_editor() ) {
			return true;
		}

		if ( function_exists( 'is_gutenberg_page' ) && is_gutenberg_page() ) {
			return true;
		}

		return false;
	}

	/**
	 * @deprecated 2.9.0 Use ElementorPro\License\API::is_license_about_to_expire() instead
	 *
	 * @return bool
	 */
	public function is_license_about_to_expire() {
		return Api::is_license_about_to_expire();
	}

	public function admin_license_details() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		if ( $this->is_block_editor_page() ) {
			return;
		}

		$renew_url = API::RENEW_URL;

		$license_key = self::get_license_key();

		if ( empty( $license_key ) ) {
			?>
			<div class="notice elementor-message">
				<div class="elementor-message-inner">
					<div class="elementor-message-icon">
						<div class="e-logo-wrapper">
							<i class="eicon-elementor" aria-hidden="true"></i>
						</div>
					</div>

					<div class="elementor-message-content">
						<strong><?php echo __( 'Welcome to Elementor Pro!', 'elementor-pro' ); ?></strong>
						<p><?php echo $this->get_activate_message(); ?></p>
					</div>

					<div class="elementor-message-action">
						<a class="elementor-button" href="<?php echo esc_url( $this->get_connect_url() ); ?>">
							<i class="dashicons dashicons-update" aria-hidden="true"></i>
							<?php echo __( 'Connect & Activate', 'elementor-pro' ); ?>
						</a>
					</div>

				</div>
			</div>
			<?php
			return;
		}

		$license_data = API::get_license_data();
		if ( empty( $license_data['license'] ) ) {
			return;
		}

		$errors = self::get_errors_details();

		if ( isset( $errors[ $license_data['license'] ] ) ) {
			$error_data = $errors[ $license_data['license'] ];
			$this->print_admin_message( $error_data['title'], $error_data['description'], $error_data['button_text'], $error_data['button_url'] );

			return;
		}

		if ( API::is_license_active() ) {
			if ( API::is_license_about_to_expire() ) {
				$title = sprintf( __( 'Your License Will Expire in %s.', 'elementor-pro' ), human_time_diff( current_time( 'timestamp' ), strtotime( $license_data['expires'] ) ) );

				if ( isset( $license_data['renewal_discount'] ) && 0 < $license_data['renewal_discount'] ) {
					$description = sprintf( __( '<a href="%1$s" target="_blank">Renew your license today</a>, and get an exclusive, time-limited %2$s discount.', 'elementor-pro' ), $renew_url, $license_data['renewal_discount'] . '%' );
				} else {
					$description = sprintf( __( '<a href="%s" target="_blank">Renew now and enjoy updates</a>, support and Pro templates for another year.', 'elementor-pro' ), $renew_url );
				}

				$this->print_admin_message( $title, $description, __( 'Renew License', 'elementor-pro' ), $renew_url );
			}
		}
	}

	public function filter_library_get_templates_args( $body_args ) {
		$license_key = self::get_license_key();

		if ( ! empty( $license_key ) ) {
			$body_args['license'] = $license_key;
			$body_args['url'] = home_url();
		}

		return $body_args;
	}

	public function handle_tracker_actions() {
		// Show tracker notice after 24 hours from Pro installed time.
		$is_need_to_show = ( $this->get_installed_time() < strtotime( '-24 hours' ) );

		$is_dismiss_notice = ( '1' === get_option( 'elementor_tracker_notice' ) );
		$is_dismiss_pro_notice = ( '1' === get_option( 'elementor_pro_tracker_notice' ) );

		if ( $is_need_to_show && $is_dismiss_notice && ! $is_dismiss_pro_notice ) {
			delete_option( 'elementor_tracker_notice' );
		}

		if ( ! isset( $_GET['elementor_tracker'] ) ) {
			return;
		}

		if ( 'opt_out' === $_GET['elementor_tracker'] ) {
			update_option( 'elementor_pro_tracker_notice', '1' );
		}
	}

	private function get_installed_time() {
		$installed_time = get_option( '_elementor_pro_installed_time' );

		if ( ! $installed_time ) {
			$installed_time = time();
			update_option( '_elementor_pro_installed_time', $installed_time );
		}

		return $installed_time;
	}

	public function plugin_action_links( $links ) {
		$license_key = self::get_license_key();

		if ( empty( $license_key ) ) {
			$links['active_license'] = sprintf( '<a href="%s" class="elementor-plugins-gopro">%s</a>', self::get_connect_url(), __( 'Connect & Activate', 'elementor-pro' ) );
		}

		return $links;
	}

	private function handle_dashboard_admin_widget() {
		add_action( 'elementor/admin/dashboard_overview_widget/after_version', function() {
			/* translators: %s: Elementor Pro version. */
			echo '<span class="e-overview__version">' . sprintf( __( 'Elementor Pro v%s', 'elementor-pro' ), ELEMENTOR_PRO_VERSION ) . '</span>';
		} );

		add_filter( 'elementor/admin/dashboard_overview_widget/footer_actions', function( $additions_actions ) {
			unset( $additions_actions['go-pro'] );

			return $additions_actions;
		}, 550 );
	}

	public function add_finder_item( array $categories ) {
		$categories['settings']['items']['license'] = [
			'title' => __( 'License', 'elementor-pro' ),
			'url' => self::get_url(),
		];

		return $categories;
	}

	private function render_manually_activation_widget( $license_key ) {
		?>
		<div class="wrap elementor-admin-page-license">
			<h2><?php _e( 'License Settings', 'elementor-pro' ); ?></h2>

			<form class="elementor-license-box" method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
				<?php wp_nonce_field( 'elementor-pro-license' ); ?>

				<h3>
					<?php _e( 'Activate Manually', 'elementor-pro' ); ?>
					<?php if ( empty( $license_key ) ) : ?>
						<small>
							<a href="<?php echo $this->get_connect_url(); ?>" class="elementor-connect-link">
								<?php _e( 'Connect & Activate', 'elementor-pro' ); ?>
							</a>
						</small>
					<?php endif; ?>
				</h3>

				<?php if ( empty( $license_key ) ) : ?>

					<p><?php _e( 'Enter your license key here, to activate Elementor Pro, and get feature updates, premium support and unlimited access to the template library.', 'elementor-pro' ); ?></p>

					<ol>
						<li><?php printf( __( 'Log in to <a href="%s" target="_blank">your account</a> to get your license key.', 'elementor-pro' ), 'https://go.elementor.com/my-license/' ); ?></li>
						<li><?php printf( __( 'If you don\'t yet have a license key, <a href="%s" target="_blank">get Elementor Pro now</a>.', 'elementor-pro' ), 'https://go.elementor.com/pro-license/' ); ?></li>
						<li><?php _e( 'Copy the license key from your account and paste it below.', 'elementor-pro' ); ?></li>
					</ol>

					<input type="hidden" name="action" value="elementor_pro_activate_license"/>

					<label for="elementor-pro-license-key"><?php _e( 'Your License Key', 'elementor-pro' ); ?></label>

					<input id="elementor-pro-license-key" class="regular-text code" name="elementor_pro_license_key" type="text" value="" placeholder="<?php esc_attr_e( 'Please enter your license key here', 'elementor-pro' ); ?>"/>

					<input type="submit" class="button button-primary" value="<?php esc_attr_e( 'Activate', 'elementor-pro' ); ?>"/>

					<p class="description"><?php printf( __( 'Your license key should look something like this: %s', 'elementor-pro' ), '<code>fb351f05958872E193feb37a505a84be</code>' ); ?></p>

				<?php else :
					$license_data = API::get_license_data( true ); ?>
					<input type="hidden" name="action" value="elementor_pro_deactivate_license"/>

					<label for="elementor-pro-license-key"><?php _e( 'Your License Key', 'elementor-pro' ); ?>:</label>

					<input id="elementor-pro-license-key" class="regular-text code" type="text" value="<?php echo esc_attr( self::get_hidden_license_key() ); ?>" disabled/>

					<input type="submit" class="button" value="<?php esc_attr_e( 'Deactivate', 'elementor-pro' ); ?>"/>

					<p>
						<?php _e( 'Status', 'elementor-pro' ); ?>:
						<?php if ( API::STATUS_EXPIRED === $license_data['license'] ) : ?>
							<span style="color: #ff0000; font-style: italic;"><?php _e( 'Expired', 'elementor-pro' ); ?></span>
						<?php elseif ( API::STATUS_SITE_INACTIVE === $license_data['license'] ) : ?>
							<span style="color: #ff0000; font-style: italic;"><?php _e( 'Mismatch', 'elementor-pro' ); ?></span>
						<?php elseif ( API::STATUS_INVALID === $license_data['license'] ) : ?>
							<span style="color: #ff0000; font-style: italic;"><?php _e( 'Invalid', 'elementor-pro' ); ?></span>
						<?php elseif ( API::STATUS_DISABLED === $license_data['license'] ) : ?>
							<span style="color: #ff0000; font-style: italic;"><?php _e( 'Disabled', 'elementor-pro' ); ?></span>
						<?php else : ?>
							<span style="color: #008000; font-style: italic;"><?php _e( 'Active', 'elementor-pro' ); ?></span>
						<?php endif; ?>
					</p>

					<?php if ( API::STATUS_EXPIRED === $license_data['license'] ) : ?>
					<p class="elementor-admin-alert elementor-alert-danger"><?php printf( __( '<strong>Your License Has Expired.</strong> <a href="%s" target="_blank">Renew your license today</a> to keep getting feature updates, premium support and unlimited access to the template library.', 'elementor-pro' ), 'https://go.elementor.com/renew/' ); ?></p>
				<?php endif; ?>

					<?php if ( API::STATUS_SITE_INACTIVE === $license_data['license'] ) : ?>
					<p class="elementor-admin-alert elementor-alert-danger"><?php echo __( '<strong>Your license key doesn\'t match your current domain</strong>. This is most likely due to a change in the domain URL of your site (including HTTPS/SSL migration). Please deactivate the license and then reactivate it again.', 'elementor-pro' ); ?></p>
				<?php endif; ?>

					<?php if ( API::STATUS_INVALID === $license_data['license'] ) : ?>
					<p class="elementor-admin-alert elementor-alert-info"><?php echo __( '<strong>Your license key doesn\'t match your current domain</strong>. This is most likely due to a change in the domain URL of your site (including HTTPS/SSL migration). Please deactivate the license and then reactivate it again.', 'elementor-pro' ); ?></p>
				<?php endif; ?>
				<?php endif; ?>
			</form>
		</div>
		<?php
	}

	public function on_deactivate_plugin( $plugin ) {
		if ( ELEMENTOR_PRO_PLUGIN_BASE !== $plugin ) {
			return;
		}

		wp_remote_post( 'https://my.elementor.com/api/v1/feedback-pro/', [
			'timeout' => 30,
			'body' => [
				'api_version' => ELEMENTOR_PRO_VERSION,
				'site_lang' => get_bloginfo( 'language' ),
			],
		] );
	}

	private function is_connected() {
		return $this->get_app()->is_connected();
	}

	public function get_connect_url( $params = [] ) {
		$action = $this->is_connected() ? 'activate_pro' : 'authorize';

		return $this->get_app()->get_admin_url( $action, $params );
	}

	private function get_switch_license_url() {
		return $this->get_app()->get_admin_url( 'switch_license' );
	}

	private function get_connected_account() {
		$user = $this->get_app()->get( 'user' );
		$email = '';
		if ( $user ) {
			$email = $user->email;
		}
		return $email;
	}

	private function get_deactivate_url() {
		return $this->get_app()->get_admin_url( 'deactivate' );
	}

	private function get_activate_message() {
		return __( 'Please activate your license to get feature updates, premium support and unlimited access to the template library.', 'elementor-pro' );
	}

	/**
	 * @return Activate
	 */
	private function get_app() {
		return Plugin::elementor()->common->get_component( 'connect' )->get_app( 'activate' );
	}

	public function __construct() {
		add_action( 'admin_menu', [ $this, 'register_page' ], 800 );
		add_action( 'admin_init', [ $this, 'handle_tracker_actions' ], 9 );
		add_action( 'admin_post_elementor_pro_activate_license', [ $this, 'action_activate_license' ] );
		add_action( 'admin_post_elementor_pro_deactivate_license', [ $this, 'action_deactivate_license' ] );

		add_action( 'admin_notices', [ $this, 'admin_license_details' ], 20 );

		add_action( 'deactivate_plugin', [ $this, 'on_deactivate_plugin' ] );

		// Add the license key to Templates Library requests
		add_filter( 'elementor/api/get_templates/body_args', [ $this, 'filter_library_get_templates_args' ] );
		add_filter( 'elementor/finder/categories', [ $this, 'add_finder_item' ] );
		add_filter( 'plugin_action_links_' . ELEMENTOR_PRO_PLUGIN_BASE, [ $this, 'plugin_action_links' ], 50 );

		$this->handle_dashboard_admin_widget();

		self::get_updater_instance();
	}
}
