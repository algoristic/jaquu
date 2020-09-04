import React from 'react'
import GridLayout from 'react-grid-layout';

import Task from './Task'
import TaskName from './TaskName'


import '../../node_modules/react-grid-layout/css/styles.css'
import '../../node_modules/react-resizable/css/styles.css'
import './TaskGrid.css';

export default function({columns, tasks}) {
    const taskWidgets = tasks.map(task => {
        return (
            <div key={task.id}
                className='task-widget'
                data-grid={{x: task.x, y: task.y, w: 1, h: 1, isResizable: false}}>
                <TaskName name={task.name} />
            </div>
        )
    });
    return (
        <div className='task-grid' style={{width: columns * 96}}>
            <GridLayout cols={columns} width={columns * 96}
                rowHeight={96} margin={[0, 0]}
                preventollision={true}
                verticalCompact={false}
                onDrop={() => {
                    alert('LOL');
                }}>
                {
                    taskWidgets
                }
            </GridLayout>
        </div>
    );
}
