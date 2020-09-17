import React, { Component } from 'react'

import Button from '../Button'
import TaskDialogue from '../TaskDialogue'

class TrackerDialogue extends Component {
    render() {
        return (
            <TaskDialogue {...this.props} />
        );
    }
}

export default TrackerDialogue;
