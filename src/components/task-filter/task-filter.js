export const TaskFilter = () => {
    return (
        <footer className='task-filter'>
            <span className="task-filter__task-count">1 items left</span>
            <ul className='task-filter__filters'>
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
            <button class="task-filter__clear-completed">Clear completed</button>
        </footer>
    )
}