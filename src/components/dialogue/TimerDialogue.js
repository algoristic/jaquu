import React, { Component } from 'react'

import Button from '../Button'
import TaskDialogue from '../TaskDialogue'

class TimerDialogue extends Component {
    render() {
        return (
            <TaskDialogue {...this.props} />
        );
    }
}

export default TimerDialogue;
