import React from 'react'

import Icon from './Icon'
import './TaskChoice.css'

export default function({icon, name, type, callback}) {
    return (
        <div className='choice-wrapper' onClick={() => callback(type)}>
            <div className='icon-wrapper'>
                <Icon name={icon} size='3x' />
            </div>
            <div className='type-wrapper'>{name}</div>
        </div>
    );
}
