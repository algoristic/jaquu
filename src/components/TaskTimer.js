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
            taskType.timerFunction(this.props.task, ({ time, notification }) => {
                if(this.state.time !== time) {
                    this.setState({
                        time: time
                    });
                    if(notification) {
                        Notification.requestPermission().then(permission => {
                            if(permission === 'granted') {
                                new Notification(this.props.task.name);
                            }
                        });
                    }
                }
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
