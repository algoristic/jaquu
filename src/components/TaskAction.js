import React from 'react'

import ActionContext from '../context/ActionContext'
import Icon from './Icon'
import './TaskAction.css'

export default function({ action, task }) {
    return action.visible(task) && (
        <ActionContext.Consumer>
        {(actions) => {
            return (
                <div className='task-action' title={action.title} onClick={() => action.fn(task, actions)}>
                    <Icon name={action.icon} size='1x' />
                </div>
            )
        }}
        </ActionContext.Consumer>
    )
}
