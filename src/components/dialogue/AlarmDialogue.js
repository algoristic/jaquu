import React, { Component } from 'react'

import Button from '../Button'
import TaskDialogue from '../TaskDialogue'

class AlarmDialogue extends Component {
    render() {
        const { task, save } = this.props;
        return (
            <TaskDialogue {...this.props}
                buttons={[
                    {
                        visible: () => true,
                        component: <Button key='save' onClick={() => save(task)} icon='check' text='Speichern' />
                    }
                ]}>
            </TaskDialogue>
        );
    }
}

export default AlarmDialogue;
