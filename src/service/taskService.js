export default class TaskService {
    getTasks = () => {
        let tasks = window.localStorage.getItem('tasks');
        if(!tasks) {
            tasks = [];
        } else {
            tasks = JSON.parse(tasks);
        }
        return tasks;
    }
    saveTasks = (tasks) => {
        tasks = JSON.stringify(tasks);
        window.localStorage.setItem('tasks', tasks);
    }
};
