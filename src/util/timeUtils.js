function getTimeDifference(d1, d2) {
    if(!(typeof d1 === 'Date')) {
        d1 = new Date(d1);
    }
    if(!(typeof d2 === 'Date')) {
        d2 = new Date(d2);
    }
    const difference = (d1 - d2);
    return difference;
}

function getDifferenceToNow(date) {
    return getTimeDifference(new Date(), date);
}

function displayRemainingTime(time) {
    if(time >= 0) {
        return '- finished -'; //since when?
    } else {
        time *= -1;
        return displayTimeVariable(time);
    }
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
    let mmPresent = false;
    if((mm !== 0) || hhPresent) {
        msec -= mm * 1000 * 60;
        result += `${mm}m`;
        mmPresent = true;
    }
    const ss = Math.floor(msec / 1000);
    if((ss !== 0) || mmPresent) {
        msec -= ss * 1000;
        result += `${ss}s`;
    }
    return result;
}

export {
    getTimeDifference,
    getDifferenceToNow,
    displayRemainingTime,
    displayRunningTime
};
