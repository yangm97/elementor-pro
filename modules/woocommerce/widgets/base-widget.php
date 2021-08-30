<?php
namespace ElementorPro\Modules\Woocommerce\Widgets;

use Elementor\Controls_Manager;
use Elementor\Controls_Stack;
use Elementor\Core\Breakpoints\Manager as Breakpoints_Manager;
use ElementorPro\Modules\Woocommerce\Classes\Products_Renderer;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

abstract class Base_Widget extends \ElementorPro\Base\Base_Widget {

	public function get_categories() {
		return [ 'woocommerce-elements-single' ];
	}

	protected function get_devices_default_args() {
		$devices_required = [];

		// Make sure device settings can inherit from larger screen sizes' breakpoint settings.
		foreach ( Breakpoints_Manager::get_default_config() as $breakpoint_name => $breakpoint_config ) {
			$devices_required[ $breakpoint_name ] = [
				'required' => false,
			];
		}

		return $devices_required;
	}

	protected function add_columns_responsive_control() {
		$this->add_responsive_control(
			'columns',
			[
				'label' => __( 'Columns', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'prefix_class' => 'elementor-grid%s-',
				'min' => 1,
				'max' => 12,
				'default' => Products_Renderer::DEFAULT_COLUMNS_AND_ROWS,
				'tablet_default' => '3',
				'mobile_default' => '2',
				'required' => true,
				'device_args' => $this->get_devices_default_args(),
				'min_affected_device' => [
					Controls_Stack::RESPONSIVE_DESKTOP => Controls_Stack::RESPONSIVE_TABLET,
					Controls_Stack::RESPONSIVE_TABLET => Controls_Stack::RESPONSIVE_TABLET,
				],
			]
		);
	}
}
