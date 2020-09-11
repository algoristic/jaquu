import React from 'react'

import TaskIcon from './TaskIcon'
import TaskName from './TaskName'
import TaskTimer from './TaskTimer'
import TaskService from '../service/taskService'
import types from '../assets/types'

function getDefaultTaskName(type) {
    const service = new TaskService();
    const tasks = service.getTasks();
    let num = 1;
    tasks.forEach(task => {
        if(task.type === type) {
            num++;
        }
    })
    const taskType = types[type];
    const defaultName = `${taskType.name} #${num}`;
    return defaultName;
}

function createNewTask({ type, position }) {
    let task =  {
        id: null,
        name: getDefaultTaskName(type),
        position: position,
        type: type
    };
    task = decorate(task);
    return task;
}

function decorate(task) {
    switch(task.type) {
        case 'stopwatch':
            task.stopwatch = {
                stopped: true,
                measuredTime: 0,
                lastStop: 0
            }
            break;
        default:
            break;
    }
    return task;
}

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
    renderTaskWidgets,
    createNewTask
}
