import React from "react";

export const Task = (props) => {
    const { label, completed, editing, hidden, taskLifeTime, onDeleted, onToggleCompleted, onToggleEditing } = props;

    let taskClass = "task-list__task task";
    const taskCLassEditing = taskClass + " task--editing";
    const taskCLassCompleted = taskClass + " task--completed";
    const taskHidden = {
      display: 'none',
    };

    if (hidden) {
      return (
        <li style={taskHidden}></li>
      );
    }

    if (completed) {
      taskClass = taskCLassCompleted;
    }

    if (editing) {
      return (
        <li className={taskCLassEditing}>
          <input
            type="text"
            className="task__edit"
            defaultValue={label}
          ></input>
        </li>
      );
    } else {
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
            <span className="task__created"> Created {taskLifeTime} ago</span>
          </label>
          <button
            className="task__icon task__icon--edit"
            onClick={onToggleEditing}
          ></button>
          <button
            className="task__icon task__icon--destroy"
            onClick={onDeleted}
          ></button>
        </li>
      );
    }
  }
