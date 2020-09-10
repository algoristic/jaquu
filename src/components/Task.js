import React from 'react'

import TaskIcon from './TaskIcon'
import TaskName from './TaskName'
import TaskTimer from './TaskTimer'

function renderTaskWidget(task) {
    const { id, name, position, type } = task;
    return (
        <div key={id} className='task-widget'
            size={{width: 96, height: 96}}
            data-grid={{x: position.x, y: position.y, w: 1, h: 1, isResizable: false}}>
            <TaskName name={name} />
            <TaskIcon type={type} size={'3x'} />
            <TaskTimer task={task} />
        </div>
    );
}

function renderTaskWidgets(tasks) {
    return tasks.map(task => renderTaskWidget(task));
}

export {
    renderTaskWidget,
    renderTaskWidgets
}
