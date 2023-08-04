<?php
/**
 * Plugin Name:       Freemius Blocks
 * Plugin URI:        https://patrickposner.dev
 * Description:       A powerful block plugin for integrating Freemius.
 * Version:           0.5
 * Author:            Patrick Posner
 * Author URI:        https://patrickposner.dev
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       freemius-blocks
 * Domain Path:       /languages
 *
 */

define( 'FBP_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'FBP_URL', untrailingslashit( plugin_dir_url( __FILE__ ) ) );
define( 'FBP_VERSION', '0.5' );

add_action( 'plugins_loaded', 'fbp_run_plugin' );

// run plugin.
if ( ! function_exists( 'fbp_run_plugin' ) ) {
	add_action( 'plugins_loaded', 'fbp_run_plugin' );

	/**
	 * Run plugin
	 *
	 * @return void
	 */
	function fbp_run_plugin(): void {
		// Localize the plugin.
		$textdomain_dir = plugin_basename( dirname( __FILE__ ) ) . '/languages';
		load_plugin_textdomain( 'freemius-blocks', false, $textdomain_dir );
	}
}

add_action( 'init', 'fbp_register_blocks' );

/**
 * Register blocks for Freemius
 *
 * @return void
 */
function fbp_register_blocks(): void {
	// Register the block.
	register_block_type( __DIR__ . '/build/buy-button' );
}

add_action( 'wp_enqueue_scripts', 'fbp_register_scripts' );


/**
 * Register scripts for the individual blocks.
 *
 * @return void
 */
function fbp_register_scripts(): void {
	// Buy Button Block
	$fbp_buy_button_asset_file = include( plugin_dir_path( __FILE__ ) . 'build/buy-button/index.asset.php' );
	wp_register_script( 'buy-button-script', plugins_url( 'build/buy-button/index.js', __FILE__ ), $fbp_buy_button_asset_file['dependencies'], $fbp_buy_button_asset_file['version'] );
}

add_action( 'enqueue_block_editor_assets', 'fbp_add_block_editor_assets' );

/**
 * Register Block styles and scripts.
 *
 * @return void
 */
function fbp_add_block_editor_assets(): void {
	$fbp_buy_button_asset_file = include( plugin_dir_path( __FILE__ ) . 'build/buy-button/index.asset.php' );

	wp_enqueue_script( 'buy-button-script', plugins_url( 'build/buy-button/index.js', __FILE__ ), $fbp_buy_button_asset_file['dependencies'], $fbp_buy_button_asset_file['version'] );
	wp_enqueue_style( 'buy-button-style', plugins_url( 'build/buy-button/index.css', __FILE__ ) );

	// Make the blocks translatable.
	if ( function_exists( 'wp_set_script_translations' ) ) {
		wp_set_script_translations( 'buy-button-script', 'freemius-blocks', plugin_dir_path( __FILE__ ) . 'languages' );
	}
}

add_action( 'wp_enqueue_scripts', 'fbp_add_block_frontend_styles' );

function fbp_add_block_frontend_styles(): void {
	wp_enqueue_style( 'buy-button-style', plugins_url( 'build/buy-button/index.css', __FILE__ ) );
}

