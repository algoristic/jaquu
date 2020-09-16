import React from 'react'

import './Input.css'

export default function({ id, value, placeholder, onChange }) {
    return (
        <input id={id} type='text' className='input' value={value} onChange={onChange} placeholder={placeholder} />
    );
};
