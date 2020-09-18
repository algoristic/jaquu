import { getTimeDifference, now } from '../util/timeUtils'

export default {
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
};
