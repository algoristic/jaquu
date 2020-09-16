import React, { Component } from 'react'

import ActionContext from '../context/ActionContext'
import Field from './Field'
import NewTaskWizard from './NewTaskWizard'
import TaskGrid from './TaskGrid'
import TaskService from '../service/taskService'
import VisualGrid from './VisualGrid'

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
        this.modifyTasks = this.modifyTasks.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
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
            edit: true,
            newPosition: {
                x: x,
                y: y
            }
        });
    }

    modifyTasks(fn) {
        let { tasks } = this.state;
        tasks = fn(tasks);
        this.setState({
            tasks: tasks
        });
        this.taskService.saveTasks(tasks);
    }

    saveTask(toBeSaved) {
        this.modifyTasks(tasks => {
            if(toBeSaved.id === null) {
                toBeSaved.id = tasks.length;
                tasks.push(toBeSaved);
            } else {
                tasks = tasks.map(task => {
                    if(task.id === toBeSaved.id) {
                        return toBeSaved;
                    } else {
                        return task;
                    }
                });
            }
            return tasks;
        });
    }

    deleteTask(toBeDeleted) {
        this.modifyTasks(tasks => {
            if(toBeDeleted.id !== null) {
                tasks = tasks.filter(task => task.id !== toBeDeleted.id)
            }
            return tasks;
        })
    }

    cancelAddTask() {
        this.setState({
            edit: false
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
                <ActionContext.Provider value={{
                    save: this.saveTask,
                    remove: this.deleteTask
                }}>
                    <NewTaskWizard active={this.state.edit}
                        position={this.state.newPosition}
                        cancel={this.cancelAddTask}
                        save={this.saveTask}>
                    </NewTaskWizard>
                    <TaskGrid tasks={this.state.tasks}
                        columns={dimensions.columns - 1}
                        updateTask={this.saveTask}>
                    </TaskGrid>
                    <VisualGrid fields={fields} />
                </ActionContext.Provider>
            </div>
        );
    }
}

export default Board;
