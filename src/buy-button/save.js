import {useBlockProps} from '@wordpress/block-editor';
import {Button} from "@wordpress/components";

export default function save({attributes}) {
    const blockProps = useBlockProps.save();

    return (
        <div { ...blockProps }>
            <Button
                variant="primary"
                id={`ps-${attributes.plugin_id}-${attributes.plan_id}-${attributes.billing_cycle}`}
                className="freemius-buy-button"
                data-key={attributes.public_key}
            >
                {attributes.buttonLabel}
            </Button>
        </div>
    );
}