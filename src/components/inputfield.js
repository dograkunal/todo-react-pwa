import React from 'react'
function InputField({ type, placeholder, handleChange, value, name, minDate }) {
    if (minDate) {
        // 2021-11-27
        const date = new Date();
        minDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }
    return (
        <>
            <input
                type={type || 'text'}
                name={name}
                value={value}
                min={minDate ? minDate : ''}
                onChange={handleChange}
                placeholder={placeholder || 'fill details'}
            />
        </>
    )
}

export default InputField
