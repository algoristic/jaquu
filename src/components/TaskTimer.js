import React, { Component } from 'react'

import types from '../assets/types'
import './TaskTimer.css'

class TaskTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {time: '. . .'};
        const { task } = this.props;
        const { type } = task;
        const taskType = types[type];
        setInterval(() => {
            taskType.timerFunction(task, (res) => {
                this.setState({
                    time: res
                });
            });
        }, 1000);
    }
    render() {
        return (
            <div className='task-timer'>
                { this.state.time }
            </div>
        );
    }
}

export default TaskTimer;
