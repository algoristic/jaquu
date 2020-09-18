import { getDifferenceToNow, getRemainingTime, displayRemainingTime, displayRunningTime } from './timeUtils'

function doCallback(callback, fn) {
    callback(fn());
}

function alarmTimer({ alarm }, callback) {
    doCallback(callback, () => {
        return '-';
    });
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
    });
}

function trackerTimer({ tracker }, callback) {
    doCallback(callback, () => {
        return '-';
    });
}

export {
    alarmTimer,
    stopwatchTimer,
    timerTimer,
    trackerTimer
};
