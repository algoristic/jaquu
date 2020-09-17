import React from 'react'

import Icon from './Icon'
import './Button.css'

export default function({ id, className, onClick, disabled, text, icon, title, severity, condition, small, style }) {
    let render = true;
    if(typeof condition === 'boolean') {
        render = condition
    } else if (typeof condition === 'function') {
        render = condition();
    }
    return render && (
        <button id={id} className={'btn ' + (
                severity ? ('btn-' + severity) : 'btn-info'
            ) + (
                small ? ' btn-small' : ''
            ) + (
                className ? (' ' + className) : ''
            )} onClick={onClick} disabled={disabled}
            title={title} style={style}>
            {icon && (
                <span className='btn-icon'>
                    <Icon name={icon} />
                </span>
            )}
            <span className='btn-text'>{ text }</span>
        </button>
    );
};
