<?php

namespace fsp;

/**
 * Class to handle meta for blocks.
 */
class Meta {
	/**
	 * Contains instance or null
	 *
	 * @var object|null
	 */
	private static $instance = null;

	/**
	 * Returns instance of Form_Meta.
	 *
	 * @return object
	 */
	public static function get_instance() {

		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Constructor for Form_Meta.
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_meta_fields' ) );
	}

	/**
	 * Register meta fields in WordPress.
	 *
	 * @return void
	 */
	public function register_meta_fields() {
		// I created a variable for that to make it more clear
		$schema = array(
			'type'  => 'array',
			'items' => array(
				'type'       => 'object',
				'properties' => array(
					'label'   => array( 'type' => 'number' ),
					'value' => array( 'type' => 'number' ),
				),
			)
		);

		register_meta(
			'post',
			'freemius_quantity',
			array(
				'type'         => 'array',
				'single'       => true,
				'default'      => array(),
				'show_in_rest' => array( 'schema' => $schema )
			)
		);


	}
}