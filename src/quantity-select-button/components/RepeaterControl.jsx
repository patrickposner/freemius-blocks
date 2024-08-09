const {useSelect, useDispatch} = wp.data
const {TextControl, Button} = wp.components
const {__} = wp.i18n;

const RepeaterControl = (props) => {
    let repeaterValues = useSelect(
        select => select('core/editor').getEditedPostAttribute('meta')?.[props.meta_key]
    );

    if( !repeaterValues ) {
        repeaterValues = [];
    }

    const {editPost} = useDispatch('core/editor', [repeaterValues]);

    return <>
        {Array.isArray(repeaterValues) && repeaterValues.map((row, index) => {
            return <div style={{marginBottom: '30px'}}>

                <strong>{__('Pricing Plan', 'freemius-blocks')} {index + 1}</strong>

                <TextControl
                    label={__('Set Quantity', 'freemius-blocks')}
                    value={repeaterValues[index]['label']}
                    type={'number'}
                    onChange={(value) => {
                        repeaterValues = repeaterValues.map((row, innerIndex) => {
                            return innerIndex === index ? {...row, ['label']: value} : row
                        });
                        editPost({meta: {[props.meta_key]: repeaterValues}})
                    }}
                />
                <TextControl
                    label={__('Set Price', 'freemius-blocks')}
                    value={repeaterValues[index]['value']}
                    type={'number'}
                    onChange={(value) => {
                        repeaterValues = repeaterValues.map((row, innerIndex) => {
                            return innerIndex === index ? {...row, ['value']: value} : row
                        });
                        editPost({meta: {[props.meta_key]: repeaterValues}})
                    }}
                />

                {index > 0 && <Button isLink isDestructive onClick={() => {
                    repeaterValues = repeaterValues.filter((obj, loopIndex) => loopIndex !== index)
                    editPost({meta: {[props.meta_key]: repeaterValues}})
                }}>{__('Remove Pricing Plan', 'freemius-blocks')} {index + 1}
                </Button>}

            </div>
        })}
        <Button
            style={{marginBottom: '30px'}}
            variant="secondary"
            onClick={() => {
                repeaterValues.push({})
                repeaterValues = repeaterValues.splice(0)
                //dispatch('core/editor').editPost({meta: {[meta_key]: repeaterValuesCopy}})
                editPost({meta: {[props.meta_key]: repeaterValues}})
            }
            }>{__('Add Pricing Plan', 'freemius-blocks')}
        </Button>
    </>
};

export default RepeaterControl