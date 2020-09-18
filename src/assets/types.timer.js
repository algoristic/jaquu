import TimerDialogue from '../components/dialogue/TimerDialogue'
import actions from './types.task.actions'
import timerActions from './types.timer.actions'
import { timerTimer } from '../util/typeUtils'

export default {
    id: 'timer',
    icon: 'clock',
    name: 'Zeitgeber',
    timerFunction: timerTimer,
    editor: TimerDialogue,
    actions: [
        actions.editTask,
        timerActions.stopTimer,
        timerActions.startTimer,
        timerActions.resetTimer,
        actions.deleteTask
    ],
    typeSpecific: {
        runtime: 300000,
        lastStop: null,
        remaining: 300000,
        stopped: true
    }
};
