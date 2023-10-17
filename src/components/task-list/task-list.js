import Task from "../task"

export const TaskList = ({ todos }) => {

    const tasks = todos.map(task => {
        const {id, completed, ...taskProps} = task
        let taskClass = 'task-list__task task';

        if(completed) {
            taskClass += ' task--completed';
        } else if(taskProps.editing) {
            taskClass += ' task--editing';
        }

        return (
            <li key={id} className={taskClass}>
                <Task {...taskProps}/>
            </li>
        )
    })
    return (
        <ul className="task-list">
            {tasks}
        </ul>
    )
}