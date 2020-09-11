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
        this.cancelWizard = this.cancelWizard.bind(this);
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

    cancelWizard() {
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
        let elem = null;
        switch(this.state.step) {
            case 1:
                elem = (<ChooseTaskType callback={this.setType} />);
                break;
            case 2:
                elem = (<EditTaskDialogue task={this.state.task} editProperty={this.editTaskProperty} />);
                break;
            default:
                elem = (<></>);
        }
        const { active } = this.props;
        const { fade } = this.state;
        return (
            <div className={'new-task-wizard' + (fade ? ' fade-out' : '')}>
                { active && elem }
                { active && <ClickableOverlay action={this.cancelWizard} /> }
            </div>
        );
    }
}

export default NewTaskWizard;
