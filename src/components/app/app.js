import TaskList from "../task-list";
import NewTaskForm from "../new-task-form";
import TaskFilter from "../task-filter";

const todoData = [
    {label: 'Drink Coffee', important: false, id: 1, completed: true, taskLifeTime: '17 seconds'},
    {label: 'Build React App', important: false, id: 2, completed: false, editing: true},
    {label: 'Have Lunch', important: false, id: 3, completed: false, taskLifeTime: '5 minutes'},
]

export const App = () => {
    return (
        <section className="todo-app">
            <NewTaskForm />
            <section className="todo-app__main">
                <TaskList todos={todoData}/>
                <TaskFilter />
            </section>
        </section>
    )
};