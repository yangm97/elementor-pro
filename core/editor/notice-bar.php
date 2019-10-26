<?php
namespace ElementorPro\Core\Editor;

use Elementor\Core\Editor\Notice_Bar as Base_Notice_Bar;
use ElementorPro\License\API as License_API;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Notice_Bar extends Base_Notice_Bar {

	protected function get_init_settings() {
		$settings = [];

		$license_data = License_API::get_license_data();

		$license_admin = Plugin::instance()->license_admin;

		if ( License_API::STATUS_VALID === $license_data['license'] || License_API::STATUS_EXPIRED === $license_data['license'] ) {
			if ( License_API::STATUS_EXPIRED === $license_data['license'] || $license_admin->is_license_about_to_expire() ) {
				$settings = [
					'option_key' => '_elementor_pro_editor_renew_license_notice_dismissed',
					'message' => __( 'Renew Elementor Pro and enjoy updates, support and Pro templates for another year.', 'elementor-pro' ),
					'action_title' => __( 'Renew Now', 'elementor-pro' ),
					'action_url' => 'https://go.elementor.com/editor-notice-bar-renew',
					'muted_period' => 30,
				];
			}
		} else {
			$settings = [
				'option_key' => '_elementor_pro_editor_activate_license_notice_dismissed',
				'message' => __( 'Activate Your License and Get Access to Premium Elementor Templates, Support & Plugin Updates.', 'elementor-pro' ),
				'action_title' => __( 'Connect & Activate', 'elementor-pro' ),
				'action_url' => $license_admin->get_connect_url(),
				'muted_period' => 0,
			];
		}

		return $settings;
	}
}
