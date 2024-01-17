import React from "react";
import TaskFilter from "../task-filter"

export const Footer = (props) => {
    const { todoCount, onFilterChange, onClearCompleted } = props;
    return (
        <footer className='footer'>
            <span className="footer__task-count">{ todoCount } items left</span>
            <TaskFilter onFilterChange={ onFilterChange }/>
            <button 
                className="footer__clear-completed"
                onClick={onClearCompleted}
            >Clear completed</button>
        </footer>
    )
}