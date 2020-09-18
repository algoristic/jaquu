import React from 'react'

import Icon from './Icon'
import types from '../assets/types'
import './TaskChoice.css'

export default function({ type, callback }) {
    return (
        <div className='choice-wrapper' onClick={() => callback(type.id)}>
            <div className='icon-wrapper'>
                <Icon name={type.icon} size='3x' />
            </div>
            <div className='type-wrapper'>{ type.name }</div>
        </div>
    );
};
