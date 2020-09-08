import React from 'react'

import Icon from './Icon'
import { AlarmType, TimerType, StopwatchType, TrackerType } from './TaskType'
import './ChooseTaskType.css'

export default function({callback}) {
    return (
        <div className='choose-task-type'>
            <div className='content-wrapper'>
                <AlarmType callback={callback} />
                <TimerType callback={callback} />
                <StopwatchType callback={callback} />
                <TrackerType callback={callback} />
            </div>
        </div>
    );
};
