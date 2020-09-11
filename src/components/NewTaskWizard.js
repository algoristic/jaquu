import React, { Component } from 'react'

import ChooseTaskType from './ChooseTaskType'
import ClickableOverlay from './ClickableOverlay'
import EditTaskDialogue from './EditTaskDialogue'
import { createNewTask } from './Task'
import { setPropertyValue } from '../util/objectUtils'
import './NewTaskWizard.css'

class NewTaskWizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            fade: false,
        }

        this.setType = this.setType.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.closeWizard = this.closeWizard.bind(this);
        this.editTaskProperty = this.editTaskProperty.bind(this);
    }

    setType(type) {
        this.setState({
            step: 2,
            chosenType: type,
            task: createNewTask({
                type: type,
                position: this.props.position
            })
        });
    }

    editTaskProperty(property, value) {
        let { task } = this.state;
        task = setPropertyValue(task, property, value);
        this.setState({task: task});
    }

    saveTask(task) {
        const { save } = this.props;
        save(task)
        this.closeWizard();
    }

    closeWizard() {
        this.setState({
            fade: true
        });
        setTimeout(() => {
            this.setState({
                step: 1,
                chosenType: null,
                fade: false,
                task: null
            });
            this.props.cancel();
        }, 500);
    }

    render() {
        const { active, save } = this.props;
        const { step, fade, task } = this.state;
        let elem = null;
        switch(step) {
            case 1:
                elem = (
                    <ChooseTaskType callback={this.setType} />
                );
                break;
            case 2:
                elem = (
                    <EditTaskDialogue save={this.saveTask} task={task}
                        editProperty={this.editTaskProperty}>
                    </EditTaskDialogue>
                );
                break;
            default:
                elem = (
                    <></>
                );
        }
        return (
            <div className={'new-task-wizard' + (fade ? ' fade-out' : '')}>
                { active && elem }
                { active && <ClickableOverlay action={this.closeWizard} /> }
            </div>
        );
    }
}

export default NewTaskWizard;
