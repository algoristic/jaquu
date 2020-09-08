import React from 'react'

import types from '../assets/types'
import Icon from './Icon'
import './TaskChoice.css'

export default function({type, callback}) {
    const choice = types[type];
    return (
        <div className='choice-wrapper' onClick={() => callback(type)}>
            <div className='icon-wrapper'>
                <Icon name={choice.icon} size='3x' />
            </div>
            <div className='type-wrapper'>{choice.name}</div>
        </div>
    );
}
