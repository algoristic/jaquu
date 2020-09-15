import AlarmDialogue from '../components/dialogue/AlarmDialogue'
import StopwatchDialogue from '../components/dialogue/StopwatchDialogue'
import TimerDialogue from '../components/dialogue/TimerDialogue'
import TrackerDialogue from '../components/dialogue/TrackerDialogue'
import { alarmTimer, stopwatchTimer, timerTimer, trackerTimer } from '../util/typeUtils'
import { getDifferenceToNow } from '../util/timeUtils'

export default {
    alarm: {
        icon: 'bell',
        name: 'Wecker',
        timerFunction: alarmTimer,
        editor: AlarmDialogue
    },
    stopwatch: {
        icon: 'hourglass-half',
        name: 'Stoppuhr',
        timerFunction: stopwatchTimer,
        editor: StopwatchDialogue,
        actions: [
            {
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
            {
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
            }
        ]
    },
    timer: {
        icon: 'clock',
        name: 'Zeitgeber',
        timerFunction: timerTimer,
        editor: TimerDialogue
    },
    tracker: {
        icon: 'tasks',
        name: 'Zeiterfassung',
        timerFunction: trackerTimer,
        editor: TrackerDialogue
    }
};
