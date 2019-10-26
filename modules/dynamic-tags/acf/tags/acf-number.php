<?php
namespace ElementorPro\Modules\DynamicTags\ACF\Tags;

use Elementor\Controls_Manager;
use Elementor\Core\DynamicTags\Tag;
use ElementorPro\Modules\DynamicTags\ACF\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class ACF_Number extends Tag {

	public function get_name() {
		return 'acf-number';
	}

	public function get_title() {
		return __( 'ACF', 'elementor-pro' ) . ' ' . __( 'Number', 'elementor-pro' ) . ' ' . __( 'Field', 'elementor-pro' );
	}

	public function get_group() {
		return Module::ACF_GROUP;
	}

	public function get_categories() {
		return [
			Module::NUMBER_CATEGORY,
			Module::POST_META_CATEGORY,
		];
	}

	public function render() {
		$key = $this->get_settings( 'key' );
		if ( empty( $key ) ) {
			return;
		}

		list( $field_key, $meta_key ) = explode( ':', $key );

		if ( 'options' === $field_key ) {
			$field = get_field_object( $meta_key, $field_key );
		} else {
			$field = get_field_object( $field_key, get_queried_object() );
		}

		if ( $field && ! empty( $field['type'] ) ) {
			$value = $field['value'];
		} else {
			// Field settings has been deleted or not available.
			$value = get_field( $meta_key );
		} // End if().

		echo wp_kses_post( $value );
	}

	public function get_panel_template_setting_key() {
		return 'key';
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
			'number',
		];
	}
}
