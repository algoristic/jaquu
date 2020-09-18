import AlarmDialogue from '../components/dialogue/AlarmDialogue'
import actions from './types.task.actions'
import { alarmTimer } from '../util/typeUtils'

export default {
    icon: 'bell',
    name: 'Wecker',
    timerFunction: alarmTimer,
    editor: AlarmDialogue,
    actions: [
        actions.editTask,
        actions.deleteTask
    ],
    typeSpecific: {}
};
