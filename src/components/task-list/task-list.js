import React from "react"
import PropTypes from "prop-types"

import Task from "../task"

export class TaskList extends React.Component {
	render() {
		const { todos, onDeleted, onToggleCompleted, onToggleEditing } = this.props

		const tasks = todos.map((task) => {
			const { id, ...taskProps } = task
			return (
				<Task
					key={id}
					{...taskProps}
					onDeleted={() => onDeleted(id)}
					onToggleCompleted={() => onToggleCompleted(id)}
					onToggleEditing={() => onToggleEditing(id)}
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
