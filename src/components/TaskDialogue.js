import React, { Component } from 'react'
import { Container, Row, Col } from 'react-grid-system';

import Dialogue from './Dialogue'
import TaskIcon from './TaskIcon'
import types from '../assets/types'
import './TaskDialogue.css'

class TaskDialogue extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { type, position, cancel } = this.props;
        return (
            <Dialogue modal={true} modalAction={cancel}>
                <Dialogue.Header>
                    <h2>
                        {types[type].name}
                    </h2>
                </Dialogue.Header>
                <Dialogue.Main>
                    <Container>
                        <Row>
                            <Col sm={8}>
                                <p>{'<Name />'}</p>
                                <p>{'<Zeiteinstellungen />'}</p>
                                <p>{'<?Farbe />'}</p>
                            </Col>
                            <Col sm={4}>
                                <TaskIcon type={type} size={'4x'} />
                            </Col>
                        </Row>
                    </Container>
                </Dialogue.Main>
                <Dialogue.Footer>
                    <div className='text-right'>{'<SaveButton />'}</div>
                </Dialogue.Footer>
            </Dialogue>
        )
    }
}

export default TaskDialogue;
