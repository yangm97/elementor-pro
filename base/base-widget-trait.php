<?php
namespace ElementorPro\Base;

use ElementorPro\License\API as License_API;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

trait Base_Widget_Trait {

	public function is_editable() {
		$license_data = License_API::get_license_data();

		return in_array( $license_data['license'], [ License_API::STATUS_VALID, License_API::STATUS_EXPIRED ] );
	}
}
