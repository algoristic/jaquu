import { getDifferenceToNow, displayRemainingTime, displayRunningTime } from '../util/timeUtils'

export default {
    alarm: {
        icon: 'bell',
        name: 'Wecker',
        timerFunction: ({due}, callback) => {
            due = getDifferenceToNow(due);
            due = displayRemainingTime(due);
            callback(due);
        }
    },
    stopwatch: {
        icon: 'hourglass-half',
        name: 'Stoppuhr',
        timerFunction: ({start}, callback) => {
            let diff = getDifferenceToNow(start);
            diff = displayRunningTime(diff);
            callback(diff);
        }
    },
    timer: {
        icon: 'clock',
        name: 'Zeitgeber',
        timerFunction: ({due}, callback) => {
            due = getDifferenceToNow(due);
            due = displayRemainingTime(due);
            callback(due);
        }
    },
    tracker: {
        icon: 'tasks',
        name: 'Zeiterfassung',
        timerFunction: (task, callback) => {}
    }
};
