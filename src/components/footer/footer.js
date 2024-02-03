import React from "react"
import PropTypes from "prop-types"

import TaskFilter from "../task-filter"

export function Footer(props) {
	const { todoCount, onFilterChange, onClearCompleted } = props
	return (
		<footer className="footer">
			<span className="footer__task-count">{todoCount} items left</span>
			<TaskFilter onFilterChange={onFilterChange} />
			<button className="footer__clear-completed" onClick={onClearCompleted}>
				Clear completed
			</button>
		</footer>
	)
}

Footer.defaultProps = {
	todoCount: 0,
	onFilterChange: () => {},
	onClearCompleted: () => {},
}

Footer.propTypes = {
	todoCount: PropTypes.number,
	onFilterChange: PropTypes.func,
	onClearCompleted: PropTypes.func,
}
