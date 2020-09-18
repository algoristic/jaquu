import React, { Component } from 'react'

import AlarmControl from '../AlarmControl'
import TaskDialogue from '../TaskDialogue'

class AlarmDialogue extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TaskDialogue {...this.props}>
                <AlarmControl />
            </TaskDialogue>
        );
    }
}

export default AlarmDialogue;
