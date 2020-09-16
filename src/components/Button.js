import React from 'react'

import Icon from './Icon'
import './Button.css'

export default function({ id, onClick, disabled, text, icon, title }) {
    return (
        <button id={id} className='button' onClick={onClick} disabled={disabled} title={title}>
            {icon && (
                <span className='button-icon'>
                    <Icon name={icon} />
                </span>
            )}
            <span className='button-text'>{ text }</span>
        </button>
    );
};
