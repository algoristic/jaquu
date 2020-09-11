import { getDifferenceToNow, displayRemainingTime, displayRunningTime } from '../util/timeUtils'

import AlarmDialogue from '../components/dialogue/AlarmDialogue'
import StopwatchDialogue from '../components/dialogue/StopwatchDialogue'
import TimerDialogue from '../components/dialogue/TimerDialogue'
import TrackerDialogue from '../components/dialogue/TrackerDialogue'

export default {
    alarm: {
        icon: 'bell',
        name: 'Wecker',
        timerFunction: ({due}, callback) => {
            due = getDifferenceToNow(due);
            due = displayRemainingTime(due);
            callback(due);
        },
        editor: AlarmDialogue
    },
    stopwatch: {
        icon: 'hourglass-half',
        name: 'Stoppuhr',
        timerFunction: ({ stopwatch }, callback) => {
            const { stopped, measuredTime, lastStop } = stopwatch;
            let time = measuredTime;
            if(!stopped) {
                time += getDifferenceToNow(lastStop);
            }
            time = displayRunningTime(time);
            callback(time);
        },
        editor: StopwatchDialogue
    },
    timer: {
        icon: 'clock',
        name: 'Zeitgeber',
        timerFunction: ({due}, callback) => {
            due = getDifferenceToNow(due);
            due = displayRemainingTime(due);
            callback(due);
        },
        editor: TimerDialogue
    },
    tracker: {
        icon: 'tasks',
        name: 'Zeiterfassung',
        timerFunction: (task, callback) => {},
        editor: TrackerDialogue
    }
};
