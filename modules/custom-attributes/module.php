<?php
namespace ElementorPro\Modules\CustomAttributes;

use Elementor\Controls_Stack;
use Elementor\Controls_Manager;
use Elementor\Element_Base;
use Elementor\Element_Column;
use Elementor\Element_Section;
use Elementor\Widget_Base;
use ElementorPro\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	public function __construct() {
		parent::__construct();

		$this->add_actions();
	}

	public function get_name() {
		return 'custom-attributes';
	}

	private function get_black_list_attributes() {
		static $black_list = null;

		if ( null === $black_list ) {
			$black_list = [ 'id', 'class', 'data-id', 'data-settings', 'data-element_type', 'data-widget_type', 'data-model-cid', 'onload', 'onclick', 'onfocus', 'onblur', 'onchange', 'onresize', 'onmouseover', 'onmouseout', 'onkeydown', 'onkeyup', 'onerror' ];

			/**
			 * Elementor attributes black list.
			 *
			 * Filters the attributes that won't be rendered in the wrapper element.
			 *
			 * By default Elementor don't render some attributes to prevent things
			 * from breaking down. But this list of attributes can be changed.
			 *
			 * @since 2.2.0
			 *
			 * @param array $black_list A black list of attributes.
			 */
			$black_list = apply_filters( 'elementor_pro/element/attributes/black_list', $black_list );
		}

		return $black_list;
	}

	/**
	 * @param $element    Controls_Stack
	 * @param $section_id string
	 */
	public function register_controls( Controls_Stack $element, $section_id ) {
		$required_section_id = '';
		if ( $element instanceof Element_Section || $element instanceof Widget_Base ) {
			$required_section_id = '_section_responsive';
		} elseif ( $element instanceof Element_Column ) {
			$required_section_id = 'section_advanced';
		}

		if ( $required_section_id !== $section_id ) {
			return;
		}

		$element->start_controls_section(
			'_section_attributes',
			[
				'label' => __( 'Attributes', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_ADVANCED,
			]
		);

		$element->add_control(
			'_attributes',
			[
				'label' => __( 'Custom Attributes', 'elementor-pro' ),
				'type' => Controls_Manager::TEXTAREA,
				'dynamic' => [
					'active' => true,
				],
				'placeholder' => __( 'key|value', 'elementor-pro' ),
				'description' => sprintf( __( 'Set custom attributes for the wrapper element. Each attribute in a separate line. Separate attribute key from the value using %s character.', 'elementor-pro' ), '<code>|</code>' ),
				'classes' => 'elementor-control-direction-ltr',
			]
		);

		$element->end_controls_section();

	}

	/**
	 * @param $element Element_Base
	 */
	public function render_attributes( Element_Base $element ) {
		$settings = $element->get_settings_for_display();

		if ( ! empty( $settings['_attributes'] ) ) {
			$attributes = explode( "\n", $settings['_attributes'] );

			$black_list = $this->get_black_list_attributes();

			foreach ( $attributes as $attribute ) {
				if ( ! empty( $attribute ) ) {
					$attr = explode( '|', $attribute, 2 );
					if ( ! isset( $attr[1] ) ) {
						$attr[1] = '';
					}

					if ( ! in_array( strtolower( $attr[0] ), $black_list ) ) {
						$element->add_render_attribute( '_wrapper', trim( $attr[0] ), trim( $attr[1] ) );
					}
				}
			}
		}
	}

	protected function add_actions() {
		add_action( 'elementor/element/after_section_end', [ $this, 'register_controls' ], 10, 2 );
		add_action( 'elementor/element/after_add_attributes', [ $this, 'render_attributes' ] );
	}
}
