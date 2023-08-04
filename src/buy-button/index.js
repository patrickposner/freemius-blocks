import {getBlockType, registerBlockType} from '@wordpress/blocks';
import metadata from './block.json';

import Edit from './Edit';

if (!getBlockType('freemius-blocks/buy-button')) {
    registerBlockType(metadata.name, {
        title: "Freemius Buy Button",
        edit: Edit,
        save() {
            return null;
        },
    });
}