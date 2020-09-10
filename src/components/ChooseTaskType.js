import React from 'react'

import Icon from './Icon'
import TaskChoice from './TaskChoice'
import ClickableOverlay from './ClickableOverlay'
import './ChooseTaskType.css'

export default function({callback, cancel}) {
    return (
        <div className='choose-task-type'>
            <div className='content-wrapper'>
                <TaskChoice type='alarm' callback={callback} />
                <TaskChoice type='stopwatch' callback={callback} />
                <TaskChoice type='timer' callback={callback} />
                <TaskChoice type='tracker' callback={callback} />
            </div>
        </div>
    );
};
