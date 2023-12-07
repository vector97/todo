import TasksFilter from "../TasksFilter";

import "./Footer.css";

function Footer({ filter, onFilterData, clearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">1 items left</span>
      <TasksFilter filter={filter} onFilterData={onFilterData} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
