=== Freemius Blocks - a collection of blocks to add Freemius to your website ===
Contributors: patrickposner
Tags: Gutenberg, Blocks
Requires at least: 6.2
Tested up to: 6.6
Stable tag: 0.6

== Description ==

Freemius Blocks - a collection of blocks to add Freemius to your website.

Add your Freemius Public Key as a constant in your wp-config.php file and start using the blocks:

define('FSP_PUBLIC_KEY', 'pk_XXX');

This plugin provides three blocks to add Freemius to your website:

1. Freemius Button

A simple button that opens the Freemius checkout modal with the given plan, quantity and additional arguments.

2. Freemius Quantity Select Combo Box

A combo box to select the quantity of a plan, which updates the price accordingly + a button to open the Freemius checkout modal + a description for the plugin.

3. Freemius Price Toggle

A simple toggle implementation to switch out group blocks in the block editor with different pricing plans. It's useful if you want to add a toggle switch for annual and lifetime plans.

== Installation ==

= Default Method =
1. Go to Settings > Plugins in your administrator panel.
2. Click `Add New`
3. Search for Freemius Blocks
4. Click install.

= Easy Method =
1. Download the zip file.
2. Login to your `Dashboard`
3. Open your plugins bar and click `Add New`
4. Click the `upload tab`
5. Choose `freemius-blocks` from your downloads folder
6. Click `Install Now`
7. All done, now just activate the plugin

= Old Method =
1. Upload `freemius-blocks` to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress

== Screenshots ==

1. Freemius Blocks Screenshot 1
1. Freemius Blocks Screenshot 2


== Changelog ==

= 0.6 =

* added quantity select combobox block
* updated all dependencies to the latest versions
* compatibility with WordPress 6.6
* some code impprovements for better performance

= 0.5 =

* Initial release