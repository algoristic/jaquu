import React from 'react'
import GridLayout from 'react-grid-layout';

import { renderTaskWidgets } from './Task'
import TaskName from './TaskName'


import '../../node_modules/react-grid-layout/css/styles.css'
import '../../node_modules/react-resizable/css/styles.css'
import './Task.css'
import './TaskGrid.css';

export default function({columns, tasks}) {
    const taskWidgets = renderTaskWidgets(tasks);
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
