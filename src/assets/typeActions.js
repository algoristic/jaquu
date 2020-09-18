import { getDifferenceToNow, getTimeDifference, now } from '../util/timeUtils'

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
    },
    stopTimer: {
        id: 'stop-timer',
        icon: 'pause',
        title: 'Anhalten',
        visible: ({ timer }) => !timer.stopped,
        disabled: (task) => false,
        fn: (task, { save }) => {
            let { runtime, lastStop, remaining, stopped } = task.timer;
            let currentTime = now();
            remaining -= getTimeDifference(currentTime, lastStop);
            task.timer = {
                runtime: runtime,
                stopped: true,
                lastStop: currentTime,
                remaining: remaining
            };
            save(task);
        }
    },
    startTimer: {
        id: 'start-timer',
        icon: 'play',
        title: 'Starten',
        visible: ({ timer }) => timer.stopped,
        disabled: (task) => true,
        fn: (task, { save }) => {
            task.timer.stopped = false;
            task.timer.lastStop = now();
            save(task);
        }
    },
    resetTimer: {
        id: 'reset-timer',
        icon: 'history',
        title: 'Zurücksetzen',
        visible: () => true,
        disabled: () => false,
        fn: (task, { save }) => {
            const { runtime, stopped } = task.timer;
            task.timer = {
                runtime: runtime,
                stopped: stopped,
                lastStop: now(),
                remaining: runtime
            }
            save(task);
        }
    }
}
