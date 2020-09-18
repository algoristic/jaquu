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
    }
};
