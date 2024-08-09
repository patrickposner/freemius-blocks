import {getBlockType, registerBlockType} from '@wordpress/blocks';
import './style.scss';

import Edit from './edit';
import metadata from './block.json';

if (!getBlockType('freemius-blocks/quantity-select-button')) {
    registerBlockType(metadata.name, {
        edit: Edit,
        save() {
            return null;
        },
    });
}