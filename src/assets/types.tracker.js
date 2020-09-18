import TrackerDialogue from '../components/dialogue/TrackerDialogue'
import actions from './types.task.actions'
import { trackerTimer } from '../util/typeUtils'

export default {
    id: 'tracker',
    icon: 'tasks',
    name: 'Zeiterfassung',
    timerFunction: trackerTimer,
    editor: TrackerDialogue,
    actions: [
        actions.editTask,
        actions.deleteTask
    ],
    typeSpecific: {}
};
