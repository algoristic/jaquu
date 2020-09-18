import React from 'react'

import Button from './Button'
import Dialogue from './Dialogue'
import Input from './Input'
import TaskIcon from './TaskIcon'
import types from '../assets/types'
import './TaskDialogue.css'

export default function({ task, save, cancel, remove, buttons, editProperty, children }) {
    const { type } = task;
    const editType = types[type];
    return (
        <Dialogue style={{maxWidth: 480}}>
            <Dialogue.Header>
                <h2 className='task-dialogue-header'>
                    { editType.name } <TaskIcon type={type} size={'xs'} />
                </h2>
            </Dialogue.Header>
            <Dialogue.Main>
                <label htmlFor='task-name'>Name</label>
                <Input id='task-name' value={task.name} onChange={e => editProperty('name', e.target.value)} />
                { children }
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
