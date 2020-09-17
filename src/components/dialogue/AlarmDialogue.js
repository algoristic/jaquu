import React, { Component } from 'react'

import Button from '../Button'
import TaskDialogue from '../TaskDialogue'

class AlarmDialogue extends Component {
    render() {
        return (
            <TaskDialogue {...this.props} />
        );
    }
}

export default AlarmDialogue;
