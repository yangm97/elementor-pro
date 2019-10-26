<?php
namespace ElementorPro\Modules\Woocommerce\Widgets;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

abstract class Widget_Base extends \Elementor\Widget_Base {

	public function get_categories() {
		return [ 'woocommerce-elements-single' ];
	}
}
