import { formatDistanceToNow } from "date-fns";
import "./Task.css";

function Task({ title, date }) {
  return (
    <div className="view">
      <input className="toggle" type="checkbox" />
      <label>
        <span className="description">{title}</span>
        <span className="created">{formatDistanceToNow(new Date(date))}</span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy"></button>
    </div>
  );
}

export default Task;
