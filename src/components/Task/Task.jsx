import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";

import "./Task.css";

Task.defaultProps = {
  done: false,
  onCompleteTask: () => {},
  onDeleteTask: () => {},
};

Task.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  done: PropTypes.bool.isRequired,
  onCompleteTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
};

function Task({ title, date, done, onCompleteTask, onDeleteTask }) {
  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        onChange={onCompleteTask}
        checked={done ? true : false}
      />
      <label>
        <span className="description">{title}</span>
        <span className="created">
          created {formatDistanceToNow(new Date(date))} ago
        </span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy" onClick={onDeleteTask}></button>
    </div>
  );
}

export default Task;
