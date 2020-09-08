import React, { Component } from 'react'

import VisualGrid from './VisualGrid'
import TaskGrid from './TaskGrid'
import Field from './Field'
import NewTaskWizard from './NewTaskWizard'
import TaskService from '../service/taskService'

class Board extends Component {
    constructor(props) {
        super(props);
        this.taskService = new TaskService();
        this.state = {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            createNew: false,
            tasks: this.taskService.getTasks()
        };

        this.addTask = this.addTask.bind(this);
        this.windowSize = this.windowSize.bind(this);
        this.cancelAddTask = this.cancelAddTask.bind(this);
        this.calcBoardDimensions = this.calcBoardDimensions.bind(this);
        window.addEventListener('resize', this.windowSize);
    }

    windowSize() {
        this.setState({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        });
    }

    calcBoardDimensions() {
        const columns = Math.floor(this.state.width / 96) + 1;
        const rows = Math.floor(this.state.height / 96) + 1;
        let xCorrection = (columns * 96) - this.state.width;
        let yCorrection = (rows * 96) - this.state.height;
        return {
            columns: columns,
            rows: rows,
            xCorrection: xCorrection + 1,
            yCorrection: yCorrection
        };
    }

    addTask({x, y}) {
        this.setState({
            addNew: true,
            newPosition: {
                x: x,
                y: y
            }
        });
    }

    cancelAddTask() {
        this.setState({
            addNew: false
        });
    }

    render() {
        const dimensions = this.calcBoardDimensions();
        let fields = [];
        for(let i = 0; i < (dimensions.columns * dimensions.rows); i++) {
            fields[i] = (
                <Field key={i} size={96}
                    boardDimensions={dimensions}
                    action={this.addTask} index={i}>
                </Field>
            );
        }
        return (
            <div className='board' style={{
                marginRight: -dimensions.xCorrection,
                marginBottom: -dimensions.yCorrection
            }}>
                <NewTaskWizard active={this.state.addNew}
                    position={this.state.newPosition}
                    cancel={this.cancelAddTask}>
                </NewTaskWizard>
                <TaskGrid columns={dimensions.columns - 1} tasks={this.state.tasks} />
                <VisualGrid fields={fields} />
            </div>
        );
    }
}

export default Board;
