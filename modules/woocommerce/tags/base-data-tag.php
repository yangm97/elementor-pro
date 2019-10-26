<?php
namespace ElementorPro\Modules\Woocommerce\Tags;

use Elementor\Core\DynamicTags\Data_Tag;
use ElementorPro\Modules\Woocommerce\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Base_Data_Tag extends Data_Tag {
	public function get_group() {
		return Module::WOOCOMMERCE_GROUP;
	}
}
