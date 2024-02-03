import React from "react"

import TaskList from "../task-list"
import NewTaskForm from "../new-task-form"
import Footer from "../footer"

const toggleProperty = (arr, id, propName) => {
	const taskIndex = arr.findIndex((el) => el.id === id)

	const oldTask = arr[taskIndex]
	const newTask = { ...oldTask, [propName]: !oldTask[propName] }

	return [...arr.slice(0, taskIndex), newTask, ...arr.slice(taskIndex + 1)]
}

export default class App extends React.Component {
	maxId = 100

	constructor() {
		super()
		this.state = {
			todoData: [this.createTask("Drink Coffee"), this.createTask("Build React App"), this.createTask("Have Lunch")],
			selectedFilter: "all",
		}

		this.deleteTask = this.deleteTask.bind(this)
		this.addTask = this.addTask.bind(this)
		this.toggleCompleted = this.toggleCompleted.bind(this)
		this.toggleEditing = this.toggleEditing.bind(this)
		this.onFilterChange = this.onFilterChange.bind(this)
		this.onClearCompleted = this.onClearCompleted.bind(this)
	}

	onClearCompleted() {
		const { todoData } = this.state
		todoData.forEach((task) => {
			if (task.completed) {
				this.deleteTask(task.id)
			}
		})
	}

	onFilterChange(filter) {
		this.setState({ selectedFilter: filter })
	}

	deleteTask(id) {
		this.setState(({ todoData }) => {
			const taskIndex = todoData.findIndex((el) => el.id === id)
			const newTodoData = [...todoData.slice(0, taskIndex), ...todoData.slice(taskIndex + 1)]
			return {
				todoData: newTodoData,
			}
		})
	}

	createTask(label) {
		return {
			label,
			completed: false,
			editing: false,
			hidden: false,
			id: this.maxId + 1,
			createdAt: new Date(),
		}
	}

	addTask(text) {
		const newTask = this.createTask(text)

		this.setState(({ todoData }) => {
			const newTodoData = [...todoData, newTask]
			return {
				todoData: newTodoData,
			}
		})
	}

	toggleCompleted(id) {
		this.setState(({ todoData }) => {
			return {
				todoData: toggleProperty(todoData, id, "completed"),
			}
		})
	}

	toggleEditing(id) {
		this.setState(({ todoData }) => {
			return {
				todoData: toggleProperty(todoData, id, "editing"),
			}
		})
	}

	render() {
		const { todoData, selectedFilter } = this.state
		let filteredTodos
		switch (selectedFilter) {
			case "all":
				filteredTodos = todoData
				break
			case "active":
				filteredTodos = todoData.filter((task) => !task.completed)
				break
			case "completed":
				filteredTodos = todoData.filter((task) => task.completed)
				break
			default:
				filteredTodos = todoData
		}
		const todoCount = filteredTodos.filter((el) => !el.completed).length
		return (
			<section className="todo-app">
				<NewTaskForm addTask={this.addTask} />
				<section className="todo-app__main">
					<TaskList
						todos={filteredTodos}
						onDeleted={this.deleteTask}
						onToggleCompleted={this.toggleCompleted}
						onToggleEditing={this.toggleEditing}
					/>
					<Footer
						todoCount={todoCount}
						onFilterChange={this.onFilterChange}
						onClearCompleted={this.onClearCompleted}
						selectedFilter={selectedFilter}
					/>
				</section>
			</section>
		)
	}
}
