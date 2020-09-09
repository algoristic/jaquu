import React from 'react'

import types from '../assets/types'
import Icon from './Icon'
import './TaskIcon.css'

export default function({type, size}) {
    return (
        <div className='task-icon-wrapper'>
            <span className='task-icon'>
                <Icon name={types[type].icon} size={size} />
            </span>
        </div>
    );
}
