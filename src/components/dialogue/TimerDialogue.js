import React, { Component } from 'react'

import Button from '../Button'
import TaskDialogue from '../TaskDialogue'
import TimerControl from '../TimerControl'
import TimerFunctionContext from '../../context/TimerFunctionContext'

class TimerDialogue extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 300000
        };
        this.alterTime = this.alterTime.bind(this);
        this.alterTime(0);
    }

    alterTime(amount) {
        let res = this.state.time + amount;
        if(res < 0) {
            res = 0;
        }
        this.setState({time: res});
        const { timer } = this.props.task;
        const { stopped, lastStop } = timer;
        this.props.editProperty('timer', {
            due: (new Date(new Date().getTime() + res)).getTime(),
            stopped: stopped,
            lastStop: lastStop
        });
    }

    render() {
        return (
            <TaskDialogue {...this.props}>
                <TimerFunctionContext.Provider value={{fn: this.alterTime }}>
                    <TimerControl time={this.state.time} fn={this.alterTime} />
                </TimerFunctionContext.Provider>
            </TaskDialogue>
        );
    }
}

export default TimerDialogue;
