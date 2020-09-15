import { getDifferenceToNow } from '../util/timeUtils'

export default {
    editStopwatch: {
        icon: 'pencil-alt',
        title: 'Bearbeiten',
        visible: () => true,
        disabled: () => false,
        fn: () => {}
    },
    stopStopwatch: {
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
    restartStopwatch: {
        icon: 'history',
        title: 'Neu starten',
        visible: () => true,
        disabled: () => false,
        fn: (task, { save }) => {
            task.stopwatch.lastStop = new Date().getTime();
            task.stopwatch.measuredTime = 0;
            save(task);
        }
    },
    deleteStopwatch: {
        icon: 'times',
        title: 'Löschen',
        visible: () => true,
        disabled: () => false,
        fn: () => {}
    }
}
