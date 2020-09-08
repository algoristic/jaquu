import React, { Component } from 'react'

import ChooseTaskType from './ChooseTaskType'
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
                elem = <ChooseTaskType callback={this.setType} />;
                break;
            case 1:
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
