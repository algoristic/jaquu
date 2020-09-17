import { getDifferenceToNow, getRemainingTime, displayRemainingTime, displayRunningTime } from './timeUtils'

function doCallback(callback, fn) {
    callback(fn());
}

function alarmTimer({ due }, callback) {
    doCallback(callback, () => {
        due = getDifferenceToNow(due);
        due = displayRemainingTime(due);
        return due;
    })
}

function stopwatchTimer({ stopwatch }, callback) {
    doCallback(callback, () => {
        const { stopped, measuredTime, lastStop } = stopwatch;
        let time = measuredTime;
        if(!stopped) {
            time += getDifferenceToNow(lastStop);
        }
        time = displayRunningTime(time);
        return time;
    });
}

function timerTimer({ timer }, callback) {
    doCallback(callback, () => {
        let time = getRemainingTime(timer);
        time = displayRemainingTime(time);
        return time;
    })
}

function trackerTimer(task, callback) {}

export {
    alarmTimer,
    stopwatchTimer,
    timerTimer,
    trackerTimer
}
