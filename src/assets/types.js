import AlarmDialogue from '../components/dialogue/AlarmDialogue'
import StopwatchDialogue from '../components/dialogue/StopwatchDialogue'
import TimerDialogue from '../components/dialogue/TimerDialogue'
import TrackerDialogue from '../components/dialogue/TrackerDialogue'
import { alarmTimer, stopwatchTimer, timerTimer, trackerTimer } from '../util/typeUtils'
import actions from './typeActions'

export default {
    alarm: {
        icon: 'bell',
        name: 'Wecker',
        timerFunction: alarmTimer,
        editor: AlarmDialogue,
        actions: [
            actions.editTask,
            actions.deleteTask
        ],
        typeSpecific: {}
    },
    stopwatch: {
        icon: 'hourglass-half',
        name: 'Stoppuhr',
        timerFunction: stopwatchTimer,
        editor: StopwatchDialogue,
        actions: [
            actions.editTask,
            actions.startStopwatch,
            actions.stopStopwatch,
            actions.resetStopwatch,
            actions.deleteTask
        ],
        typeSpecific: {
            stopped: true,
            measuredTime: 0,
            lastStop: null
        }
    },
    timer: {
        icon: 'clock',
        name: 'Zeitgeber',
        timerFunction: timerTimer,
        editor: TimerDialogue,
        actions: [
            actions.editTask,
            actions.stopTimer,
            actions.startTimer,
            actions.resetTimer,
            actions.deleteTask
        ],
        typeSpecific: {
            runtime: 300000,
            lastStop: null,
            remaining: 300000,
            stopped: true
        }
    },
    tracker: {
        icon: 'tasks',
        name: 'Zeiterfassung',
        timerFunction: trackerTimer,
        editor: TrackerDialogue,
        actions: [
            actions.editTask,
            actions.deleteTask
        ],
        typeSpecific: {}
    }
};
