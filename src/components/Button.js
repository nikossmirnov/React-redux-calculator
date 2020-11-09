import React from 'react'
import './Button.css'
const Button = (props) => {
    return (
        <div className='button' onClick={ () => props.handleClick(props.children)}>
            {props.children}
        </div>
    )
}

export default Button
