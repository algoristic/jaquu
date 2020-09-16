import { getDifferenceToNow } from '../util/timeUtils'

export default {
    editTask: {
        id: 'edit-task',
        icon: 'pencil-alt',
        title: 'Bearbeiten',
        visible: () => true,
        disabled: () => false,
        fn: (task, { edit }) => edit(task)
    },
    deleteTask: {
        id: 'delete-task',
        icon: 'trash-alt',
        title: 'Löschen',
        visible: () => true,
        disabled: () => false,
        fn: (task, { remove }) => remove(task)
    },
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
    restartStopwatch: {
        id: 'restart-stopwatch',
        icon: 'history',
        title: 'Neu starten',
        visible: () => true,
        disabled: () => false,
        fn: (task, { save }) => {
            task.stopwatch.lastStop = new Date().getTime();
            task.stopwatch.measuredTime = 0;
            save(task);
        }
    }
}
