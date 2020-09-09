import React, { Component } from 'react'

import Dialogue from './Dialogue'
import './TaskDialogue.css'

class TaskDialogue extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { type, position, cancel } = this.props;
        return (
            <Dialogue modal={true} modalAction={cancel}>
                <Dialogue.Header>Header</Dialogue.Header>
                <Dialogue.Main>Main</Dialogue.Main>
                <Dialogue.Footer>Footer</Dialogue.Footer>
            </Dialogue>
        )
    }
}

export default TaskDialogue;
