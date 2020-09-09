import React, { Component } from 'react'

import ChooseTaskType from './ChooseTaskType'
import NewTaskDialogue from './NewTaskDialogue'
import './NewTaskWizard.css'

class NewTaskWizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 0
        }

        this.setType = this.setType.bind(this);
    }

    setType(type) {
        this.setState({
            step: 1,
            chosenType: type
        });
    }

    render() {
        let elem = null;
        switch(this.state.step) {
            case 0:
                elem = <ChooseTaskType callback={this.setType} cancel={this.props.cancel} />;
                break;
            case 1:
                elem = <NewTaskDialogue type={this.state.chosenType} position={this.props.position} />
                break;
            default:
                elem = (<></>);
        }
        return (
            <>
            {
                this.props.active && (
                    <div className='new-task-wizard'>
                    {
                        elem
                    }
                    </div>
                )
            }
            </>
        );
    }
}

export default NewTaskWizard;
