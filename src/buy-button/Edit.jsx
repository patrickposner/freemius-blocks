import './editor.scss';
import {InspectorControls, useBlockProps} from "@wordpress/block-editor";
import {Button, PanelBody, TextControl} from "@wordpress/components";
import {useEffect} from "@wordpress/element";

const {__} = wp.i18n;

export default function Edit({attributes, setAttributes}) {
    const blockProps = useBlockProps();
    const {public_key, plugin_id, plan_id, buttonLabel} = attributes;

    const onChangePublicKey = (newPublicKey) => {
        setAttributes({public_key: newPublicKey});
    };

    const onChangePluginId = (newPluginId) => {
        setAttributes({plugin_id: newPluginId});
    };

    const onChangePlanId = (newPlanId) => {
        setAttributes({plan_id: newPlanId});
    };

    const onChangeButtonLabel = (newButtonLabel) => {
        setAttributes({buttonLabel: newButtonLabel});
    };

    useEffect(() => {
        if (!buttonLabel) {
            setAttributes({buttonLabel: __('Buy Now', 'freemius-blocks')});
        }
    }, []);

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('SDK Settings', 'content-protector')} initialOpen={true}>
                    <TextControl
                        {...blockProps}
                        label={__('Public Key', 'freemius-blocks')}
                        onChange={onChangePublicKey}
                        value={public_key}
                        id="freemius-public-key"
                    />
                    <TextControl
                        {...blockProps}
                        label={__('Plugin ID', 'freemius-blocks')}
                        onChange={onChangePluginId}
                        type="number"
                        value={plugin_id}
                        id="freemius-plugin-id"
                    />
                    <TextControl
                        {...blockProps}
                        label={__('Plan ID', 'freemius-blocks')}
                        onChange={onChangePlanId}
                        type="number"
                        value={plan_id}
                        id="freemius-plan-id"
                    />
                    <TextControl
                        {...blockProps}
                        label={__('Button Label', 'freemius-blocks')}
                        onChange={onChangeButtonLabel}
                        value={buttonLabel}
                        defaultValue={__('Buy Now', 'freemius-blocks')}
                    />
                </PanelBody>
            </InspectorControls>
            <div {...useBlockProps()}>
                <Button variant="primary" id={`ps-${plugin_id}--${plan_id}`} className="freemius-buy-button">
                    {buttonLabel}
                </Button>
            </div>
        </>
    );
}