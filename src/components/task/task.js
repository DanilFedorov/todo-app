import React from "react"
import PropTypes from "prop-types"
import { formatDistanceToNow } from "date-fns"

export class Task extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			inputText: this.props.label,
		}

		this.handleInputChange = this.handleInputChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	handleInputChange(e) {
		this.setState({ inputText: e.target.value })
	}

	onSubmit(e) {
		const newLabel = this.state.inputText
		if (newLabel) {
			this.props.onEditTask(this.props.id, newLabel)
			this.setState({ inputText: newLabel })
		}

		e.preventDefault()
	}

	render() {
		const { label, completed, editing, hidden, createdAt, onDeleted, onToggleCompleted, onToggleEditing } = this.props
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
					<form onSubmit={this.onSubmit}>
						<input type="text" className="task__edit" defaultValue={label} onChange={this.handleInputChange} />
					</form>
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
