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
		register_block_type( FBP_PATH . '/build/buy-button', array(
			'render_callback' => array( $this, 'render_buy_button' ),
		) );
	}

	/**
	 * Register scripts for the individual blocks.
	 *
	 * @return void
	 */
	public function register_scripts(): void {
		// Buy Button Block
		$fbp_buy_button_asset_file = include( FBP_PATH . '/build/buy-button/index.asset.php' );
		wp_register_script( 'buy-button-script', FBP_URL . '/build/buy-button/index.js', $fbp_buy_button_asset_file['dependencies'], $fbp_buy_button_asset_file['version'] );
	}

	/**
	 * Register Block styles and scripts.
	 *
	 * @return void
	 */
	function add_block_editor_assets(): void {
		$fbp_buy_button_asset_file = include( FBP_PATH . '/build/buy-button/index.asset.php' );

		wp_enqueue_script( 'buy-button-script', FBP_URL . '/build/buy-button/index.js', $fbp_buy_button_asset_file['dependencies'], $fbp_buy_button_asset_file['version'] );
		wp_enqueue_style( 'buy-button-style', FBP_URL . '/build/buy-button/index.css' );

		// Make the blocks translatable.
		if ( function_exists( 'wp_set_script_translations' ) ) {
			wp_set_script_translations( 'buy-button-script', 'freemius-blocks', FBP_PATH . '/languages' );
		}
	}

	function add_block_frontend_styles(): void {
		wp_enqueue_style( 'buy-button-style', FBP_URL . '/build/buy-button/index.css' );
	}

	/**
	 * Server-Side render for Freemius buy button.
	 *
	 * @param $attributes
	 *
	 * @return string
	 */
	public function render_buy_button( $attributes ): string {
		ob_start();
		?>
        <p>
            <button class="wp-block-button__link wp-element-button <?php echo esc_html( $attributes['className'] ); ?>"
                    id="freemius-buy-<?php echo esc_html( $attributes['plugin_id'] ); ?>-<?php echo esc_html( $attributes['plan_id'] ); ?>-<?php echo esc_html( $attributes['billing_cycle'] ); ?>">
				<?php echo esc_html( $attributes['buttonLabel'] ); ?>
            </button>
        </p>
        <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
        <script src="https://checkout.freemius.com/checkout.min.js"></script>
        <script>
            let handler = FS.Checkout.configure({
                plugin_id: '<?php echo esc_html( $attributes['plugin_id'] ); ?>',
                plan_id: '<?php echo esc_html( $attributes['plan_id'] ); ?>',
                public_key: '<?php echo esc_html( $attributes['public_key'] ); ?>',
            });

            $('#freemius-buy-<?php echo esc_html( $attributes['plugin_id'] ); ?>-<?php echo esc_html( $attributes['plan_id'] ); ?>-<?php echo esc_html( $attributes['billing_cycle'] ); ?>').on('click', function (e) {
                handler.open({
                    name: 'Passster',
                    billing_cycle: '<?php echo esc_html( $attributes['billing_cycle'] ); ?>',
                });
                e.preventDefault();
            });
        </script>
		<?php
		return ob_get_clean();
	}
}
