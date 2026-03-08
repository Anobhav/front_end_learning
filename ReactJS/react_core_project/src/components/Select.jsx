import React, {useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
}, ref) {

    const id = useId()

    return (
        <div className='w-full'>{label && <label htmlFor={id} className=''>
            <select {...props} id={id} ref={ref} className={className}>
            {options?.map((option) => (
                <option key={option} value={option}>
            {option}
            </option>
            ))}

            </select>
            </label>}</div>
    )
}

export default React.forwardRef(Select)
