import React from "react";
import TaskList from "../task-list";
import NewTaskForm from "../new-task-form";
import Footer from "../footer";

export class App extends React.Component {

    maxId = 100;

    constructor() {
        super();
        this.state = {
            todoData : [
                this.createTask('Drink Coffee'),
                this.createTask('Build React App'),
                this.createTask('Have Lunch'),
            ]
        };

        this.deleteTask = this.deleteTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);
        this.toggleEditing = this.toggleEditing.bind(this);
    }

    deleteTask(id) {
        this.setState(({ todoData }) => {
            const taskIndex = todoData.findIndex((el) => el.id === id);
            const newTodoData = [
                ...todoData.slice(0, taskIndex), 
                ...todoData.slice(taskIndex + 1)
            ];
            return {
                todoData: newTodoData
            }
        });
    };

    createTask(label) {
        return {
            label,
            completed: false,
            editing: false,
            id: this.maxId++
        };
    };

    addTask(text) {
        const newTask = this.createTask(text)

        this.setState(({ todoData }) => {
            const newTodoData = [ ...todoData, newTask ];
            return {
                todoData: newTodoData
            }
        });
    };

    toggleProperty(arr, id, propName) {
        const taskIndex = arr.findIndex((el) => el.id === id);

        const oldTask = arr[taskIndex];
        const newTask = { ...oldTask, [propName]: !oldTask[propName] };

        return  [
            ...arr.slice(0, taskIndex),
            newTask, 
            ...arr.slice(taskIndex + 1)
        ];
    };

    toggleCompleted(id) {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'completed')
            };
        });
    };

    toggleEditing(id) {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'editing')
            };
        });
    };

    render() {
        const todoCount = this.state.todoData.filter((el) => !el.completed).length

        return (
            <section className="todo-app">
                <NewTaskForm addTask={ this.addTask }/>
                <section className="todo-app__main">
                    <TaskList 
                        todos={ this.state.todoData }
                        onDeleted={ this.deleteTask }
                        onToggleCompleted={ this.toggleCompleted }
                        onToggleEditing={ this.toggleEditing }/>
                    <Footer todoCount={ todoCount }/>
                </section>
            </section>
        )
    }
};