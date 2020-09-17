import React from 'react'

import './Input.css'

export default function({ id, value, placeholder, onChange, disabled, responsive }) {
    if(responsive !== false) {
        responsive = true;
    }
    return (
        <input id={id} type='text' className={'input' + (responsive ? ' responsive' : '')} disabled={disabled} value={value} onChange={onChange} placeholder={placeholder} />
    );
};
