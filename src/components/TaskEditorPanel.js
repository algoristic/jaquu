import React, { Component } from 'react'

import ClickableOverlay from './ClickableOverlay'
import EditTaskDialogue from './EditTaskDialogue'
import './TaskEditorPanel.css'

class TaskEditorPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.fade = this.fade.bind(this);
        this.save = this.save.bind(this);
        this.remove = this.remove.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    fade(fn) {
        this.setState({fade: true});
        setTimeout(() => {
            this.setState({fade: null});
            fn();
        }, 500);
    }

    save() {
        const { save, task } = this.props;
        this.fade(() => save(task));
    }

    remove() {
        const { remove, task } = this.props;
        this.fade(() => remove(task));
    }

    cancel() {
        this.fade(this.props.action);
    }

    render() {
        const { task, editProperty } = this.props;
        return (
            <div className={'task-editor-panel' + (this.state.fade ? ' fade-out' : '')}>
                <EditTaskDialogue task={task}
                    save={this.save} remove={this.remove}
                    cancel={this.cancel}
                    editProperty={editProperty}>
                </EditTaskDialogue>
                <ClickableOverlay action={this.cancel} />
            </div>
        );
    }
}

export default TaskEditorPanel;
