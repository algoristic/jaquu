import React from 'react'

import TaskAction from './TaskAction'
import types from '../assets/types'
import './TaskActions.css'

export default function({ task }) {
    return (
        <div className='task-actions'>
            { types[task.type].actions.map(action => <TaskAction key={action.id} action={action} task={task} />) }
        </div>
    );
};
