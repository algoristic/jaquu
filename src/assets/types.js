export default {
    alarm: {
        icon: 'bell',
        name: 'Wecker',
        timerFunction: ({due}, callback) => {
            let now = new Date().getTime();
            callback(due - now);
        }
    },
    stopwatch: {
        icon: 'hourglass-half',
        name: 'Stoppuhr',
        timerFunction: ({start}, callback) => {
            let now = new Date().getTime();
            callback(now - start);
        }
    },
    timer: {
        icon: 'clock',
        name: 'Zeitgeber',
        timerFunction: ({due}, callback) => {
            let now = new Date().getTime();
            callback(due - now);
        }
    },
    tracker: {
        icon: 'tasks',
        name: 'Zeiterfassung',
        timerFunction: (task, callback) => {}
    }
};
