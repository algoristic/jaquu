import AlarmDialogue from '../components/dialogue/AlarmDialogue'
import StopwatchDialogue from '../components/dialogue/StopwatchDialogue'
import TimerDialogue from '../components/dialogue/TimerDialogue'
import TrackerDialogue from '../components/dialogue/TrackerDialogue'
import {  alarmTimer, stopwatchTimer, timerTimer, trackerTimer } from '../util/typeUtils'

export default {
    alarm: {
        icon: 'bell',
        name: 'Wecker',
        timerFunction: alarmTimer,
        editor: AlarmDialogue
    },
    stopwatch: {
        icon: 'hourglass-half',
        name: 'Stoppuhr',
        timerFunction: stopwatchTimer,
        editor: StopwatchDialogue,
        actions: [
            {
                id: 'stop-stopwatch',
                icon: 'pause',
                visible: (task) => true,
                disabled: (task) => false
            },
            {
                id: 'start-stopwatch',
                icon: 'play',
                visible: (task) => true,
                disabled: (task) => false
            }
        ]
    },
    timer: {
        icon: 'clock',
        name: 'Zeitgeber',
        timerFunction: timerTimer,
        editor: TimerDialogue
    },
    tracker: {
        icon: 'tasks',
        name: 'Zeiterfassung',
        timerFunction: trackerTimer,
        editor: TrackerDialogue
    }
};
