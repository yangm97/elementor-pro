<?php
namespace ElementorPro\Modules\Woocommerce\Tags;

use Elementor\Core\DynamicTags\Tag;
use ElementorPro\Modules\Woocommerce\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Base_Tag extends Tag {
	public function get_group() {
		return Module::WOOCOMMERCE_GROUP;
	}

	public function get_categories() {
		return [ \Elementor\Modules\DynamicTags\Module::TEXT_CATEGORY ];
	}
}
