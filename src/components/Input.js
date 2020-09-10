import React from 'react'

import './Input.css'

export default function({ value, onChange }) {
    return <input type='text' className='input' value={value} onChange={onChange} />
};
