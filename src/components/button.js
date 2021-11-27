import React from 'react'

function Button({ clickHandler, text, disabled }) {
    return (
        <>
            <button disabled={disabled} onClick={() => clickHandler()}>{text}</button>
        </>
    )
}

export default Button
