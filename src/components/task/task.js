import React from "react"
import PropTypes from "prop-types"
import { formatDistanceToNow } from "date-fns"

export function Task(props) {
	const { label, completed, editing, hidden, createdAt, onDeleted, onToggleCompleted, onToggleEditing } = props
	const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true })

	let taskClass = "task-list__task task"
	const taskCLassEditing = `${taskClass} task--editing`
	const taskCLassCompleted = `${taskClass} task--completed`
	const taskHidden = {
		display: "none",
	}

	if (hidden) {
		return <li style={taskHidden} />
	}

	if (completed) {
		taskClass = taskCLassCompleted
	}

	if (editing) {
		return (
			<li className={taskCLassEditing}>
				<input type="text" className="task__edit" defaultValue={label} />
			</li>
		)
	}
	return (
		<li className={taskClass}>
			<input
				className="task__toggle"
				type="checkbox"
				checked={completed}
				onChange={onToggleCompleted}
				id={`checkbox-${label}`}
			/>
			<label className="task__label" htmlFor={`checkbox-${label}`}>
				<span className="task__description">{label}</span>
				<span className="task__created">Created {timeAgo}</span>
			</label>
			<button className="task__icon task__icon--edit" onClick={onToggleEditing} />
			<button className="task__icon task__icon--destroy" onClick={onDeleted} />
		</li>
	)
}

Task.defaultProps = {
	completed: false,
	editing: false,
	hidden: false,
	onDeleted: () => {},
	onToggleEditing: () => {},
	onToggleCompleted: () => {},
}

Task.propTypes = {
	label: PropTypes.string.isRequired,
	completed: PropTypes.bool,
	editing: PropTypes.bool,
	hidden: PropTypes.bool,
	createdAt: PropTypes.instanceOf(Date).isRequired,
	onDeleted: PropTypes.func,
	onToggleCompleted: PropTypes.func,
	onToggleEditing: PropTypes.func,
}
