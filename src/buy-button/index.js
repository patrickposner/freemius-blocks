import {getBlockType, registerBlockType} from '@wordpress/blocks';
import './style.scss';

import Edit from './edit';
import save from './save';
import metadata from './block.json';

if (!getBlockType('freemius-blocks/buy-button')) {
    registerBlockType(metadata.name, {
        edit: Edit,
        save,
    });
}