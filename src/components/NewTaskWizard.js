import React, { Component } from 'react'

import ChooseTaskType from './ChooseTaskType'
import ClickableOverlay from './ClickableOverlay'
import TaskDialogue from './TaskDialogue'
import './NewTaskWizard.css'

class NewTaskWizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            fade: false
        }

        this.setType = this.setType.bind(this);
        this.cancelWizard = this.cancelWizard.bind(this);
    }

    setType(type) {
        this.setState({
            step: 2,
            chosenType: type
        });
    }

    cancelWizard() {
        this.setState({
            fade: true
        });
        setTimeout(() => {
            this.setState({
                step: 1,
                chosenType: null,
                fade: false
            });
            this.props.cancel();
        }, 500);
    }

    render() {
        let elem = null;
        switch(this.state.step) {
            case 1:
                elem = (<ChooseTaskType callback={this.setType} cancel={this.cancelWizard} />);
                break;
            case 2:
                elem = (<TaskDialogue type={this.state.chosenType} position={this.props.position} cancel={this.cancelWizard} />);
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
