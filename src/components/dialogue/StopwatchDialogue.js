import React, { Component } from 'react'

import Button from '../Button'
import TaskDialogue from '../TaskDialogue'

class StopwatchDialogue extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TaskDialogue {...this.props}
                additionalButtons={[<Button icon='play' text='Speichern und los!'/>]}>
            </TaskDialogue>
        )
    }
}

export default StopwatchDialogue
