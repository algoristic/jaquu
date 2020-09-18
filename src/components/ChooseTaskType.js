import React from 'react'

import TaskChoice from './TaskChoice'
import types from '../assets/types'
import './ChooseTaskType.css'

export default function({ callback }) {
    const choices = Object.values(types).map(type => <TaskChoice key={type.id} type={type} callback={callback} />)
    return (
        <div className='choose-task-type'>
            <div className='content-wrapper'>
                { choices }
            </div>
        </div>
    );
};
