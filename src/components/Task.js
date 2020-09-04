import React from 'react'

import TaskName from './TaskName'

import './Task.css'

export default function(props) {
    let x = 0;
    let y = 0;
    return (
        <div key='a'
            className='task-widget'
            data-grid={{x: x, y: y, w: 1, h: 1, isResizable: false}}>
            <TaskName name="task_1" />
        </div>
    );
}
