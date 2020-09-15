import React from 'react'

import TaskAction from './TaskAction'
import types from '../assets/types'
import './TaskActions.css'

export default function({ task }) {
    const actions = types[task.type].actions.map(action => <TaskAction action={action} task={task} />)
    return (
        <div className='task-actions'>
            { actions }
        </div>
    );
}
