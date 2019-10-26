<?php

namespace ElementorPro\Modules\LinkActions;

use ElementorPro\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	/**
	 * Get module name.
	 *
	 * Retrieve the module name.
	 *
	 * @since  2.3.0
	 * @access public
	 *
	 * @return string Module name.
	 */
	public function get_name() {
		return 'link-actions';
	}

	/**
	 * Create Action URL.
	 *
	 * @param string $action
	 * @param array  $settings Optional.
	 *
	 * @return string
	 */
	public static function create_action_url( $action, array $settings = [] ) {
		return '#' . rawurlencode( sprintf( 'elementor-action:action=%1$s settings=%2$s', $action, base64_encode( wp_json_encode( $settings ) ) ) );
	}
}
