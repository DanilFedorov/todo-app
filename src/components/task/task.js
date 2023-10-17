export const Task = ( {label, taskLifeTime, completed = false, editing = false} ) => {

    if(editing) {
        return (
            <div>
                <input type="text" class="task__edit" value="Editing task"></input>
            </div>
        )
    } else {
        return (
            <div>
                <input className="task__toggle" type="checkbox"/>
                <label className="task__label">
                    <span className="task__description">{ label }</span>
                    <span className="task__created"> Created { taskLifeTime } ago</span>
                </label>
                <button className="task__icon task__icon--edit"></button>
                <button className="task__icon task__icon--destroy"></button>
            </div>
        )
    }

    
}