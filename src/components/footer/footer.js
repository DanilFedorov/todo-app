import React from "react";
import TaskFilter from "../task-filter"

export const Footer = (props) => {
    return (
        <footer className='footer'>
            <span className="footer__task-count">{ props.todoCount } items left</span>
            <TaskFilter />
            <button className="footer__clear-completed">Clear completed</button>
        </footer>
    )
}