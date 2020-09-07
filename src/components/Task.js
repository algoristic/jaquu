import React from 'react'

import TaskName from './TaskName'

function renderTaskWidget({id, name, x, y}) {
    return (
        <div key={id}
            className='task-widget'
            data-grid={{x: x, y: y, w: 1, h: 1, isResizable: false}}>
            <TaskName name={name} />
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
