import PropTypes from 'prop-types'

import Task from '../Task'

import './TaskList.css'

TaskList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      date: PropTypes.object,
      done: PropTypes.bool,
      timeRemaining: PropTypes.number,
      isPlay: PropTypes.bool,
    }),
  ),
  onCompleteTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onTick: PropTypes.func,
}

TaskList.defaultProps = {
  todos: [],
  onCompleteTask: () => {},
  onDeleteTask: () => {},
  onTick: () => {},
}

function TaskList({ todos, onCompleteTask, onDeleteTask, onTick }) {
  const tasks = todos.map((item) => {
    const { id, ...todoData } = item

    return (
      <li key={id}>
        <Task
          {...todoData}
          onCompleteTask={() => {
            onCompleteTask(id)
          }}
          onDeleteTask={() => {
            onDeleteTask(id)
          }}
          onTick={(timeRemaining) => {
            onTick(id, timeRemaining)
          }}
        />
      </li>
    )
  })

  return <ul className="todo-list">{tasks}</ul>
}

export default TaskList
