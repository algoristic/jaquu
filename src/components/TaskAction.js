import React from 'react'

import Icon from './Icon'
import './TaskAction.css'

export default function({ action, task }) {
    return action.visible(task) && (
        <div className='task-action' title={action.title}>
            <Icon name={action.icon} size='1x' />
        </div>
    )
}
