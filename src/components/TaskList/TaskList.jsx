import PropTypes from 'prop-types'

import Task from '../Task'

import './TaskList.css'

function TaskList({ todos, onCompleteTask, onDeleteTask, onTick }) {
  const elements = todos.map((item) => {
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

  return <ul className="todo-list">{elements}</ul>
}

TaskList.defaultProps = {
  todos: [],
  onCompleteTask: () => {},
  onDeleteTask: () => {},
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      date: PropTypes.object,
      done: PropTypes.bool,
    }),
  ),
  onCompleteTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
}

export default TaskList
