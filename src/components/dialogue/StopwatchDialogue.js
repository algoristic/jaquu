import React, { Component } from 'react'

import TaskDialogue from '../TaskDialogue'

class StopwatchDialogue extends Component {
    render() {
        return (
            <TaskDialogue {...this.props} />
        );
    }
}

export default StopwatchDialogue
