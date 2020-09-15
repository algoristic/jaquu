import { getDifferenceToNow, displayRemainingTime, displayRunningTime } from './timeUtils'

function doCallback(callback, fn) {
    callback(fn());
}

function alarmFunction({ due }, callback) {
    doCallback(callback, () => {
        due = getDifferenceToNow(due);
        due = displayRemainingTime(due);
        return due;
    })
}

function stopwatchFunction({ stopwatch }, callback) {
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

function timerFunction({ due }, callback) {
    doCallback(callback, () => {
        due = getDifferenceToNow(due);
        due = displayRemainingTime(due);
        return due;
    })
}

function trackerFunction({}, callback) {}

export {
    alarmFunction,
    stopwatchFunction,
    timerFunction,
    trackerFunction
}
