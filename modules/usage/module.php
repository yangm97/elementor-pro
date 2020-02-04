<?php
namespace ElementorPro\Modules\Usage;

use Elementor\Core\Base\Module as BaseModule;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Elementor usage module.
 */
class Module extends BaseModule {
	/**
	 * Get module name.
	 *
	 * Retrieve the usage module name.
	 *
	 * @access public
	 *
	 * @return string Module name.
	 */
	public function get_name() {
		return 'usage';
	}

	/**
	 * Get integrations usage.
	 *
	 * Check all integrations in settings tab, find out who are in use.
	 *
	 * @return array
	 */
	public function get_integrations_usage() {
		$usage = [];

		$settings_tab = \Elementor\Plugin::$instance->settings->get_tabs();
		$integrations = $settings_tab['integrations']['sections'];

		foreach ( $integrations as $integration_name => $integration_data ) {
			$integration_options = [];
			$integration_fields_count = count( $integration_data['fields'] );

			foreach ( $integration_data['fields'] as $field_name => $field_data ) {
				$integration_options [] = get_option( 'elementor_' . $field_name );
			}
			/**
			 * array_filter will clear all empty array values.
			 * if all the values filled then the count should be the same.
			 */
			if ( count( array_filter( $integration_options ) ) === $integration_fields_count ) {
				$usage[ $integration_name ] = true;
			}
		}

		return $usage;
	}

	/**
	 * Add's tracking data.
	 *
	 * Called on elementor/tracker/send_tracking_data_params.
	 *
	 * @param array $params
	 *
	 * @return array
	 */
	public function add_tracking_data( $params ) {
		$params['usages']['integrations'] = $this->get_integrations_usage();

		return $params;
	}

	/**
	 * Usage module constructor.
	 *
	 * Initializing Elementor usage module.
	 *
	 * @access public
	 */
	public function __construct() {
		add_filter( 'elementor/tracker/send_tracking_data_params', [ $this, 'add_tracking_data' ] );
	}
}
