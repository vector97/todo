import Task from "../Task";

import "./TaskList.css";

function TaskList({ todos, onDeleteTask }) {
  const elements = todos.map((item) => {
    const { id, ...todoData } = item;

    return (
      <li key={id}>
        <Task
          {...todoData}
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
