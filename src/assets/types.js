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
        ]
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
            actions.restartStopwatch,
            actions.deleteTask
        ]
    },
    timer: {
        icon: 'clock',
        name: 'Zeitgeber',
        timerFunction: timerTimer,
        editor: TimerDialogue,
        actions: [
            actions.editTask,
            actions.deleteTask
        ]
    },
    tracker: {
        icon: 'tasks',
        name: 'Zeiterfassung',
        timerFunction: trackerTimer,
        editor: TrackerDialogue,
        actions: [
            actions.editTask,
            actions.deleteTask
        ]
    }
};
