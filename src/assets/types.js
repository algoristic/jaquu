import AlarmDialogue from '../components/dialogue/AlarmDialogue'
import StopwatchDialogue from '../components/dialogue/StopwatchDialogue'
import TimerDialogue from '../components/dialogue/TimerDialogue'
import TrackerDialogue from '../components/dialogue/TrackerDialogue'
import {  alarmFunction, stopwatchFunction, timerFunction, trackerFunction } from '../util/typeUtils'

export default {
    alarm: {
        icon: 'bell',
        name: 'Wecker',
        timerFunction: alarmFunction,
        editor: AlarmDialogue
    },
    stopwatch: {
        icon: 'hourglass-half',
        name: 'Stoppuhr',
        timerFunction: stopwatchFunction,
        editor: StopwatchDialogue,
        actions: [
            {
                id: 'stop-stopwatch',
                icon: 'pause',
                visible: true,
                disabled: false
            },
            {
                id: 'start-stopwatch',
                icon: 'play',
                visible: true,
                disabled: false
            }
        ]
    },
    timer: {
        icon: 'clock',
        name: 'Zeitgeber',
        timerFunction: timerFunction,
        editor: TimerDialogue
    },
    tracker: {
        icon: 'tasks',
        name: 'Zeiterfassung',
        timerFunction: trackerFunction,
        editor: TrackerDialogue
    }
};
