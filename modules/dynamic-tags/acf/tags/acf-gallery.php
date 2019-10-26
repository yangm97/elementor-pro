<?php
namespace ElementorPro\Modules\DynamicTags\ACF\Tags;

use Elementor\Controls_Manager;
use Elementor\Core\DynamicTags\Data_Tag;
use ElementorPro\Modules\DynamicTags\ACF\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class ACF_Gallery extends Data_Tag {

	public function get_name() {
		return 'acf-gallery';
	}

	public function get_title() {
		return __( 'ACF', 'elementor-pro' ) . ' ' . __( 'Gallery Field', 'elementor-pro' );
	}

	public function get_categories() {
		return [ Module::GALLERY_CATEGORY ];
	}

	public function get_group() {
		return Module::ACF_GROUP;
	}

	public function get_panel_template_setting_key() {
		return 'key';
	}

	public function get_value( array $options = [] ) {
		$key = $this->get_settings( 'key' );

		$images = [];

		if ( ! empty( $key ) ) {

			list( $field_key, $meta_key ) = explode( ':', $key );

			if ( 'options' === $field_key ) {
				$field = get_field_object( $meta_key, $field_key );
			} else {
				$field = get_field_object( $field_key, get_queried_object() );
			}

			if ( $field ) {
				$value = $field['value'];
			} else {
				// Field settings has been deleted or not available.
				$value = get_field( $meta_key );
			}

			if ( is_array( $value ) && ! empty( $value ) ) {
				foreach ( $value as $image ) {
					$images[] = [
						'id' => $image['ID'],
					];
				}
			}
		}

		return $images;
	}

	protected function _register_controls() {
		$this->add_control(
			'key',
			[
				'label' => __( 'Key', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'groups' => Module::get_control_options( $this->get_supported_fields() ),
			]
		);
	}

	protected function get_supported_fields() {
		return [
			'gallery',
		];
	}
}
