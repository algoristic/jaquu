import React from 'react'

import TaskName from './TaskName'

function renderTaskWidget({id, name, position}) {
    return (
        <div key={id} className='task-widget'
            size={{width: 96, height: 96}}
            data-grid={{x: position.x, y: position.y, w: 1, h: 1, isResizable: false}}>
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
