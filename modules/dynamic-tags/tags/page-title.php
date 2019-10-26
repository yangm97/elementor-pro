<?php
namespace ElementorPro\Modules\DynamicTags\Tags;

use Elementor\Controls_Manager;
use Elementor\Core\DynamicTags\Tag;
use ElementorPro\Classes\Utils;
use ElementorPro\Modules\DynamicTags\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Page_Title extends Tag {
	public function get_name() {
		return 'page-title';
	}

	public function get_title() {
		return __( 'Page Title', 'elementor-pro' );
	}

	public function get_group() {
		return Module::SITE_GROUP;
	}

	public function get_categories() {
		return [ Module::TEXT_CATEGORY ];
	}

	public function render() {
		if ( is_home() && 'yes' !== $this->get_settings( 'show_home_title' ) ) {
			return;
		}

		$include_context = 'yes' === $this->get_settings( 'include_context' );

		$title = Utils::get_page_title( $include_context );

		echo wp_kses_post( $title );
	}

	protected function _register_controls() {
		$this->add_control(
			'include_context',
			[
				'label' => __( 'Include Context', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
			]
		);

		$this->add_control(
			'show_home_title',
			[
				'label' => __( 'Show Home Title', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
			]
		);
	}
}
