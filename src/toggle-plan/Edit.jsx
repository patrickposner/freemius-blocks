import './editor.scss';
import {InspectorControls, useBlockProps} from "@wordpress/block-editor";
import {Button, PanelBody, TextControl} from "@wordpress/components";

const {__} = wp.i18n;

export default function Edit({attributes, setAttributes}) {
    const blockProps = useBlockProps();
    const {plan_a, plan_b} = attributes;

    const onChangePlanA = (newId) => {
        setAttributes({plan_a: newId});
    };

    const onChangePlanB = (newId) => {
        setAttributes({plan_b: newId});
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Plan Settings', 'freemius-blocks')} initialOpen={true}>
                    <TextControl
                        {...blockProps}
                        label={__('Plan A ID', 'freemius-blocks')}
                        onChange={onChangePlanA}
                        value={plan_a}
                    />
                    <TextControl
                        {...blockProps}
                        label={__('Plan B ID', 'freemius-blocks')}
                        onChange={onChangePlanB}
                        value={plan_b}
                    />
                </PanelBody>
            </InspectorControls>
            <div {...useBlockProps()}>
                    <Button variant="primary" id={plan_a}>
                        {__('Annual', 'freemius-blocks')}
                    </Button>
                    <Button variant="secondary" id={plan_b}>
                        {__('Lifetime', 'freemius-blocks')}
                    </Button>
            </div>
        </>
    );
}