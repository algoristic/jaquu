import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faBell, faClock, faTasks, faHourglassHalf, faCheck, faPlay,
    faTimes, faPause, faPencilAlt, faHistory, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';


export default {
    load: () => {
        library.add(faPlus, faBell, faClock, faTasks, faHourglassHalf, faCheck, faPlay,
            faTimes, faPause, faPencilAlt, faHistory, faTrashAlt);
    }
};
