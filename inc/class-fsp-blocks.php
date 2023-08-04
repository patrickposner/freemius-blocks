<?php

namespace fsp;

class Blocks {

	/**
	 * Contains instance or null
	 *
	 * @var object|null
	 */
	private static $instance = null;

	/**
	 * Returns instance of PS_Block_Editor.
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
	 * Constructor for PS_Block_Editor
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_blocks' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'register_scripts' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'add_block_editor_assets' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'add_block_frontend_styles' ) );
	}

	/**
	 * Register blocks for Freemius
	 *
	 * @return void
	 */
	public function register_blocks(): void {
		// Register the block.
		register_block_type( FBP_PATH . '/build/buy-button' );
	}

	/**
	 * Register scripts for the individual blocks.
	 *
	 * @return void
	 */
	public function register_scripts(): void {
		// Buy Button Block
		$fbp_buy_button_asset_file = include( plugin_dir_path( __FILE__ ) . 'build/buy-button/index.asset.php' );
		wp_register_script( 'buy-button-script', plugins_url( 'build/buy-button/index.js', __FILE__ ), $fbp_buy_button_asset_file['dependencies'], $fbp_buy_button_asset_file['version'] );
	}

	/**
	 * Register Block styles and scripts.
	 *
	 * @return void
	 */
	function add_block_editor_assets(): void {
		$fbp_buy_button_asset_file = include( plugin_dir_path( __FILE__ ) . 'build/buy-button/index.asset.php' );

		wp_enqueue_script( 'buy-button-script', plugins_url( 'build/buy-button/index.js', __FILE__ ), $fbp_buy_button_asset_file['dependencies'], $fbp_buy_button_asset_file['version'] );
		wp_enqueue_style( 'buy-button-style', plugins_url( 'build/buy-button/index.css', __FILE__ ) );

		// Make the blocks translatable.
		if ( function_exists( 'wp_set_script_translations' ) ) {
			wp_set_script_translations( 'buy-button-script', 'freemius-blocks', plugin_dir_path( __FILE__ ) . 'languages' );
		}
	}

	function add_block_frontend_styles(): void {
		wp_enqueue_style( 'buy-button-style', plugins_url( 'build/buy-button/index.css', __FILE__ ) );
	}
}
