import React, { Component } from 'react'

import ClickableOverlay from './ClickableOverlay'
import EditTaskDialogue from './EditTaskDialogue'
import './TaskEditorPanel.css'

class TaskEditorPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.cancel = this.cancel.bind(this);
    }

    cancel() {
        this.setState({fade: true});
        setTimeout(() => {
            this.setState({fade: null});
            this.props.action();
        }, 500);
    }

    render() {
        const { task, save, editProperty } = this.props;
        return (
            <div className={'task-editor-panel' + (this.state.fade ? ' fade-out' : '')}>
                <EditTaskDialogue task={task} save={save}
                    editProperty={editProperty}>
                </EditTaskDialogue>
                <ClickableOverlay action={this.cancel} />
            </div>
        );
    }
}

export default TaskEditorPanel;
