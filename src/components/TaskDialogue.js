import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import { setConfiguration } from 'react-grid-system';

import Button from './Button'
import Dialogue from './Dialogue'
import Input from './Input'
import TaskIcon from './TaskIcon'
import types from '../assets/types'
import './TaskDialogue.css'

setConfiguration({ gutterWidth: 0 });

export default function({ task, save, cancel, remove, buttons, editProperty, children }) {
    const { type } = task;
    const editType = types[type];
    return (
        <Dialogue style={{maxWidth: 480}}>
            <Dialogue.Header>
                <h2>
                    {editType.name}
                </h2>
            </Dialogue.Header>
            <Dialogue.Main>
                <Container>
                    <Row>
                        <Col sm={8}>
                            <label htmlFor='task-name'>Name</label>
                            <Input id='task-name' value={task.name} onChange={e => editProperty('name', e.target.value)} />
                            { children }
                        </Col>
                        <Col sm={4}>
                            <TaskIcon type={type} size={'4x'} />
                        </Col>
                    </Row>
                </Container>
            </Dialogue.Main>
            <Dialogue.Footer className='text-right'>
                <Button onClick={() => save(task)} icon='check' severity='success' text='Speichern' />
                <Button onClick={cancel} icon='times' severity='warning' text='Abbrechen' />
                <Button icon='trash-alt' severity='danger' text='Löschen'
                    condition={() => task.id !== null}
                    onClick={() => remove(task)}>
                </Button>
            </Dialogue.Footer>
        </Dialogue>
    );
};
