import React from 'react'
function TextAreaField({ placeholder, handleChange, name, value }) {
    return (
        <>
            <textarea
                placeholder={placeholder}
                rows="10" cols="30"
                onChange={handleChange}
                name={name}
                value={value}
            />
        </>
    )
}

export default TextAreaField
