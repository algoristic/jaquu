import StopwatchDialogue from '../components/dialogue/StopwatchDialogue'
import actions from './types.task.actions'
import stopwatchActions from './types.stopwatch.actions'
import { stopwatchTimer } from '../util/typeUtils'

export default {
    icon: 'hourglass-half',
    name: 'Stoppuhr',
    timerFunction: stopwatchTimer,
    editor: StopwatchDialogue,
    actions: [
        actions.editTask,
        stopwatchActions.startStopwatch,
        stopwatchActions.stopStopwatch,
        stopwatchActions.resetStopwatch,
        actions.deleteTask
    ],
    typeSpecific: {
        stopped: true,
        measuredTime: 0,
        lastStop: null
    }
};
