import React, { Component } from 'react'

import Button from '../Button'
import TaskDialogue from '../TaskDialogue'

class StopwatchDialogue extends Component {
    constructor(props) {
        super(props);

        this.saveAndStart = this.saveAndStart.bind(this);
    }

    saveAndStart() {
        const { save, task } = this.props;
        task.stopwatch.stopped = false;
        task.stopwatch.lastStop = new Date();
        save(task);
    }

    render() {
        return (
            <TaskDialogue {...this.props}
                additionalButtons={[
                    <Button key='save-and-start' onClick={this.saveAndStart} icon='play' text='Speichern und los!' />
                ]}>
            </TaskDialogue>
        )
    }
}

export default StopwatchDialogue
