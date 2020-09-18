import { getDifferenceToNow } from '../util/timeUtils'

export default {
    stopStopwatch: {
        id: 'stop-stopwatch',
        icon: 'pause',
        title: 'Anhalten',
        visible: ({ stopwatch }) => !stopwatch.stopped,
        disabled: (task) => false,
        fn: (task, { save }) => {
            const { measuredTime, lastStop } = task.stopwatch;
            task.stopwatch = {
                stopped: true,
                measuredTime: (measuredTime + getDifferenceToNow(lastStop))
            };
            save(task);
        }
    },
    startStopwatch: {
        id: 'start-stopwatch',
        icon: 'play',
        title: 'Starten',
        visible: ({ stopwatch }) => stopwatch.stopped,
        disabled: (task) => true,
        fn: (task, { save }) => {
            task.stopwatch.stopped = false;
            task.stopwatch.lastStop = new Date().getTime();
            save(task);
        }
    },
    resetStopwatch: {
        id: 'reset-stopwatch',
        icon: 'history',
        title: 'Zurücksetzen',
        visible: () => true,
        disabled: () => false,
        fn: (task, { save }) => {
            task.stopwatch.lastStop = new Date().getTime();
            task.stopwatch.measuredTime = 0;
            save(task);
        }
    }
};
