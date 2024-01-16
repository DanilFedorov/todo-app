import React from "react"
export class TaskFilter extends React.Component {
    
    render() {
        return (
            <ul className='footer__task-filter'>
                <li>
                    <button className="selected">All</button>
                </li>
                <li>
                    <button className="">Active</button>
                </li>
                <li>
                    <button className="">Completed</button>
                </li>
            </ul>
        )
    }
}

