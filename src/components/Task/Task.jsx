import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

import './Task.css'

function Task({ title, date, done, onCompleteTask, onDeleteTask }) {
  return (
    <div className="view">
      <input className="toggle" type="checkbox" onChange={onCompleteTask} checked={done} />
      <label>
        <span className="title">{title}</span>
        <span className="description">
          <button className="icon icon-play"></button>
          <button className="icon icon-pause"></button>
          12:25
        </span>
        <span className="description">created {formatDistanceToNow(new Date(date))} ago</span>
      </label>
      <button className="icon icon-edit" type="button" aria-label="edit task" />
      <button className="icon icon-destroy" type="button" onClick={onDeleteTask} aria-label="delete task" />
    </div>
  )
}

Task.defaultProps = {
  done: false,
  onCompleteTask: () => {},
  onDeleteTask: () => {},
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  done: PropTypes.bool,
  onCompleteTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
}

export default Task
