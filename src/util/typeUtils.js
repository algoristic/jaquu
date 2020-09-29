import { getDifferenceToNow, getRemainingTime, displayRemainingTime, displayRunningTime } from './timeUtils'

function doCallback(callback, fn) {
    callback(fn());
}

function alarmTimer({ alarm }, callback) {
    doCallback(callback, () => {
        return { time: '-' };
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
        return { time: time };
    });
}

function timerTimer({ timer }, callback) {
    doCallback(callback, () => {
        let time = getRemainingTime(timer);
        let notification = false;
        if(time === 0) {
            notification = true;
        }
        time = displayRemainingTime(time);
        return {
            time: time,
            notification: notification
        };
    });
}

function trackerTimer({ tracker }, callback) {
    doCallback(callback, () => {
        return { time: '-' };
    });
}

export {
    alarmTimer,
    stopwatchTimer,
    timerTimer,
    trackerTimer
};
