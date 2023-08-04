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
		require_once( FBP_PATH . '/inc/class-fsp-blocks.php' );

		fsp\Blocks::get_instance();

		// Localize the plugin.
		$textdomain_dir = plugin_basename( dirname( __FILE__ ) ) . '/languages';
		load_plugin_textdomain( 'freemius-blocks', false, $textdomain_dir );
	}
}
