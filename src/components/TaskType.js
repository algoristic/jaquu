import React from 'react'

import TaskChoice from './TaskChoice'

function AlarmType(props) {
    return <TaskChoice icon='bell' name='Wecker' type='alarm' {...props} />
}

function StopwatchType(props) {
    return <TaskChoice icon='hourglass-half' name='Stoppuhr' type='stopwatch' {...props} />
}

function TimerType(props) {
    return <TaskChoice icon='clock' name='Zeitgeber' type='timer' {...props} />
}

function TrackerType(props) {
    return <TaskChoice icon='tasks' name='Zeiterfassung' type='tracker' {...props} />
}

export {
    AlarmType,
    StopwatchType,
    TimerType,
    TrackerType
}
