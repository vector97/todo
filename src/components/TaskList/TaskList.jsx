import Task from "../Task";

import "./TaskList.css";

function TaskList({ todos }) {
  const elements = todos.map((item) => {
    const { id, ...todoData } = item;

    return (
      <li key={id}>
        <Task {...todoData} />
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
}

export default TaskList;
