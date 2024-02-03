import React from "react"
import PropTypes from "prop-types"

import Task from "../task"

export class TaskList extends React.Component {
	render() {
		const { todos, onDeleted, onToggleCompleted, onToggleEditing, onEditTask } = this.props

		const tasks = todos.map((task) => {
			return (
				<Task
					key={task.id}
					{...task}
					onDeleted={() => onDeleted(task.id)}
					onToggleCompleted={() => onToggleCompleted(task.id)}
					onToggleEditing={() => onToggleEditing(task.id)}
					onEditTask={onEditTask}
				/>
			)
		})

		return <ul className="task-list">{tasks}</ul>
	}
}

TaskList.defaultProps = {
	onDeleted: () => {},
	onToggleCompleted: () => {},
	onToggleEditing: () => {},
}

TaskList.propTypes = {
	id: PropTypes.number,
	todos: PropTypes.arrayOf(PropTypes.object).isRequired,
	onDeleted: PropTypes.func,
	onToggleCompleted: PropTypes.func,
	onToggleEditing: PropTypes.func,
}
