import React, { Component } from 'react'

import Button from '../Button'
import TaskDialogue from '../TaskDialogue'
import TimerControl from '../TimerControl'
import TimerFunctionContext from '../../context/TimerFunctionContext'
import { getRemainingTime, now } from '../../util/timeUtils'

class TimerDialogue extends Component {
    constructor(props) {
        super(props);
        this.alterTime = this.alterTime.bind(this);
    }

    componentDidMount() {
        this.alterTime(0);
    }

    alterTime(amount) {
        let res = this.props.task.timer.runtime + amount;
        if(res < 0) {
            res = 0;
        }

        const { task } = this.props;
        const { id } = task;

        this.props.editProperty('timer', {
            runtime: res,
            lastStop: now(),
            stopped: true,
            remaining: res
        });
    }

    render() {
        return (
            <TaskDialogue {...this.props}>
                <TimerFunctionContext.Provider value={{fn: this.alterTime }}>
                    <TimerControl time={this.props.task.timer.runtime} fn={this.alterTime} />
                </TimerFunctionContext.Provider>
            </TaskDialogue>
        );
    }
}

export default TimerDialogue;
