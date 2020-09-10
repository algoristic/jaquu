import React, { Component } from 'react'

import ChooseTaskType from './ChooseTaskType'
import ClickableOverlay from './ClickableOverlay'
import TaskDialogue from './TaskDialogue'
import './NewTaskWizard.css'

class NewTaskWizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0
        }

        this.setType = this.setType.bind(this);
        this.cancelWizard = this.cancelWizard.bind(this);
    }

    setType(type) {
        this.setState({
            step: 1,
            chosenType: type
        });
    }

    cancelWizard() {
        this.setState({
            step: 0,
            chosenType: null
        })
        this.props.cancel();
    }

    render() {
        let elem = null;
        switch(this.state.step) {
            case 0:
                elem = <ChooseTaskType callback={this.setType} cancel={this.props.cancel} />;
                break;
            case 1:
                elem = <TaskDialogue type={this.state.chosenType} position={this.props.position} cancel={this.cancelWizard} />
                break;
            default:
                elem = (<></>);
        }
        let lol = <ClickableOverlay action={this.cancelWizard} />;
        return (
            <div className='new-task-wizard'>
                { this.props.active && elem }

            </div>
        );
    }
}

export default NewTaskWizard;
