import './editor.scss';
import {InspectorControls, useBlockProps} from "@wordpress/block-editor";
import {Button, PanelBody, SelectControl, TextareaControl, TextControl} from "@wordpress/components";
import {useEffect, useState} from "@wordpress/element";
import RepeaterControl from "./components/RepeaterControl";

const {__} = wp.i18n;

export default function Edit({attributes, setAttributes}) {
    const blockProps = useBlockProps();
    const {plugin_name, plugin_id, plan_id, billing_cycle, buttonLabel, currency, description} = attributes;
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(0);
    const [pricingPlans, setPricingPlans] = useState([]);

    const getPricingPlans = () => {
        let pricingPlans = wp.data.select('core/editor').getEditedPostAttribute('meta').freemius_quantity;

        if (pricingPlans) {
            setPricingPlans(pricingPlans);

            let plan = pricingPlans.find(element => element.label == 1);
            setPrice(plan.value);
            setQuantity(plan.label);
        }
    }

    const onChangePluginName = (newName) => {
        setAttributes({plugin_name: newName});
    };

    const onChangePluginDescription = (newDescription) => {
        setAttributes({description: newDescription});
    };

    const onChangePluginId = (newPluginId) => {
        setAttributes({plugin_id: newPluginId});
    };

    const onChangePlanId = (newPlanId) => {
        setAttributes({plan_id: newPlanId});
    };

    const onChangeBillingCycle = (newBillingCycle) => {
        setAttributes({billing_cycle: newBillingCycle});
    };

    const onChangeButtonLabel = (newButtonLabel) => {
        setAttributes({buttonLabel: newButtonLabel});
    };

    useEffect(() => {
        if (!buttonLabel) {
            setAttributes({buttonLabel: __('Buy Now', 'freemius-blocks')});
        }

        // Get available pricing plans with quantity.
        getPricingPlans();

    }, []);

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('SDK Settings', 'freemius-blocks')} initialOpen={true}>
                    <TextControl
                        {...blockProps}
                        label={__('Plugin Name', 'freemius-blocks')}
                        onChange={onChangePluginName}
                        value={plugin_name}
                        id="freemius-plugin-name"
                    />
                    <TextareaControl
                        {...blockProps}
                        label={__('Description', 'freemius-blocks')}
                        onChange={onChangePluginDescription}
                        value={description}
                        id="freemius-plugin-description"
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
                    <RepeaterControl meta_key={"freemius_quantity"}/>
                    <SelectControl
                        label={__('Billing Cycle', 'freemius-blocks')}
                        value={billing_cycle}
                        options={[
                            {label: 'Annual', value: 'annual'},
                            {label: 'Monthly', value: 'monthly'},
                            {label: 'Lifetime', value: 'lifetime'},
                        ]}
                        onChange={onChangeBillingCycle}
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
                {plugin_id && plan_id && billing_cycle && options.public_key ?
                    <>
                        <span className={"freemius-price-value"}>{currency}{price}</span>
                        <span className={"freemius-interval"}>/ {billing_cycle}</span>
                        <p className={"freemius-short-description"}>An awesome WordPress plugin to handle amazing
                            features.</p>
                        <span className={"freemius-price-value"}>{currency}{price}</span>
                        <span className={"freemius-interval"}>
                            {billing_cycle === 'lifetime' ? ' One-time payment' : ''}
                            {billing_cycle === 'annual' ? ' per year' : ''}
                            {billing_cycle === 'monthly' ? ' per month' : ''}
                        </span>
                        <p>{description}</p>
                        <SelectControl
                            label="Number of websites"
                            value={price}
                            options={pricingPlans}
                            onChange={(newValue) => {
                                setPrice(newValue);
                                let plan = pricingPlans.find(element => element.value == newValue);
                                setQuantity(plan.label);
                            }}
                        />
                        <Button variant="primary"
                                id={`ps-${plugin_name}-${plugin_id}-${plan_id}-${billing_cycle}-${quantity}`}
                                className="freemius-buy-button">
                            {buttonLabel}
                        </Button>
                    </>
                    :
                    <>
                        <span className={"freemius-price-value"}>{currency}{price}</span>
                        <span className={"freemius-interval"}>
                            {billing_cycle === 'lifetime' ? ' One-time payment' : ''}
                            {billing_cycle === 'annual' ? ' per year' : ''}
                            {billing_cycle === 'monthly' ? ' per month' : ''}
                        </span>
                        <p className={"freemius-short-description"}>{description}</p>
                        <SelectControl
                            label="Number of websites"
                            value={price}
                            options={pricingPlans}
                            onChange={(newValue) => {
                                setPrice(newValue);
                                let plan = pricingPlans.find(element => element.value == newValue);
                                setQuantity(plan.label);
                            }}
                        />
                        <Button variant="primary" className="freemius-buy-button">
                            {buttonLabel}
                        </Button>
                    </>
                }
            </div>
        </>
    );
}