import React from 'react'
import GridLayout from 'react-grid-layout';

import Task from './Task'
import TaskName from './TaskName'


import '../../node_modules/react-grid-layout/css/styles.css'
import '../../node_modules/react-resizable/css/styles.css'
import './TaskGrid.css';

export default function({columns, rows}) {
    return (
        <div className='task-grid'>
            <GridLayout className='layout'
                cols={columns}
                rowHeight={96}
                width={columns * 96}
                preventollision={true}
                autoSize={true}
                verticalCompact={false}>
                <div key='1'
                    className='task-widget'
                    data-grid={{x: 4, y: 0, w: 1, h: 1, isResizable: false}}>
                    <TaskName name="task_1" />
                </div>
                <div key='2'
                    className='task-widget'
                    data-grid={{x: 7, y: 2, w: 1, h: 1, isResizable: false}}>
                    <TaskName name="task_2" />
                </div>
            </GridLayout>
        </div>
    );
}
