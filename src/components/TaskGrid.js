import React, { Component } from 'react'
import GridLayout from 'react-grid-layout';

import { renderTaskWidgets } from './Task'
import '../../node_modules/react-grid-layout/css/styles.css'
import '../../node_modules/react-resizable/css/styles.css'
import './Task.css'
import './TaskGrid.css';

class TaskGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startPosition: undefined
        };

        this.findTask = this.findTask.bind(this);
        this.moveTask = this.moveTask.bind(this);
    }

    findTask(position) {
        const { tasks } = this.props;
        const remain = tasks.filter(task => {
            return ((task.position.x === position.x1) && (task.position.y === position.y1));
        });
        return remain[0];
    }

    moveTask(endPosition) {
        const { startPosition } = this.state;
        const { updateTask } = this.props;
        const { x1, y1 } = startPosition;
        const { x2, y2 } = endPosition;
        if((x1 !== x2) || (y1 !== y2)) { //task has actually been moved
            const task = this.findTask({x1, y1});
            if(task) {
                task.position = {
                    x: x2,
                    y: y2
                };
                updateTask(task);
            }
        }
        this.setState({
            startPosition: undefined
        });
    }

    render() {
        const { columns, tasks } = this.props;
        const taskWidgets = renderTaskWidgets(tasks);
        return (
            <div className='task-grid' style={{width: columns * 96}}>
                <GridLayout cols={columns} width={columns * 96}
                    rowHeight={96} margin={[0, 0]}
                    preventollision={true}
                    compactType={null}
                    onDragStop={(_unused1, _unused2, {x, y}) => this.moveTask({x2: x, y2: y})}
                    onDragStart={(_unused1, {x, y}) => { this.setState({startPosition: { x1: x, y1: y }})}}>
                        { taskWidgets }
                </GridLayout>
            </div>
        );
    }
}

export default TaskGrid;
