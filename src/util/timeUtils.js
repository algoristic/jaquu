function getTimeDifference(d1, d2) {
    if(!(typeof d1 === Date)) {
        d1 = flattenMilliseconds(d1);
        d1 = new Date(d1);
    }
    if(!(typeof d2 === Date)) {
        d2 = flattenMilliseconds(d2);
        d2 = new Date(d2);
    }
    const difference = (d1 - d2);
    return difference;
}

function getDifferenceToNow(date) {
    return getTimeDifference(new Date(), date);
}

function getRemainingTime({ lastStop, stopped, remaining }) {
    let time = remaining;
    if(!stopped) {
        time -= getDifferenceToNow(lastStop);
    }
    time *= -1;
    return time;
}

function flattenMilliseconds(time) {
    time /= 1000;
    time = time.toFixed(0);
    time *= 1000;
    return time;
}

function displayRemainingTime(time) {
    time *= -1;
    if(time < 0) {
        time = 0;
    }
    return displayTimeVariable(time);
}

function displayRunningTime(time) {
    return displayTimeVariable(time);
}

function displayTimeVariable(msec) {
    let result = '';
    const dd = Math.floor(msec / 1000 / 60 / 60 / 24);
    let ddPresent = false;
    if(dd !== 0) {
        msec -= dd * 1000 * 60 * 60 * 24;
        result += `${dd}d`;
        ddPresent = true;
    }
    const hh = Math.floor(msec / 1000 / 60 / 60);
    let hhPresent = false;
    if((hh !== 0) || ddPresent) {
        msec -= hh * 1000 * 60 * 60;
        result += `${hh}h`;
        hhPresent = true;
    }
    const mm = Math.floor(msec / 1000 / 60);
    if((mm !== 0) || hhPresent) {
        msec -= mm * 1000 * 60;
        result += `${mm}m`;
    }
    const ss = Math.floor(msec / 1000);
    msec -= ss * 1000;
    result += `${ss}s`;
    return result;
}

function now() {
    return flattenMilliseconds(new Date().getTime());
}

export {
    getTimeDifference,
    getDifferenceToNow,
    getRemainingTime,
    flattenMilliseconds,
    displayRemainingTime,
    displayRunningTime,
    now
};
