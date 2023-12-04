import Task from "../Task";

import "./TaskList.css";

function TaskList({ todos, onCompleteTask, onDeleteTask }) {
  const elements = todos.map((item) => {
    const { id, ...todoData } = item;

    return (
      <li key={id}>
        <Task
          {...todoData}
          onCompleteTask={() => {
            onCompleteTask(id);
          }}
          onDeleteTask={() => {
            onDeleteTask(id);
          }}
        />
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
}

export default TaskList;
