import PropTypes from 'prop-types'
import { useState } from 'react'

import './NewTaskForm.css'

NewTaskForm.propTypes = {
  onAddTask: PropTypes.func,
}

NewTaskForm.defaultProps = {
  onAddTask: () => {},
}

function NewTaskForm({ onAddTask }) {
  const initialState = {
    title: '',
    min: '',
    sec: '',
  }

  const [taskData, setTaskData] = useState(initialState)

  const handleChange = ({ target }) => {
    const { name, value } = target

    setTaskData((taskData) => ({ ...taskData, [name]: value }))
  }

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { title, min, sec } = taskData

    if (title.trim() && min && sec) {
      const timeRemaining = Number(min) * 60 + Number(sec)

      onAddTask(title, timeRemaining)
      setTaskData(initialState)
    }
  }

  return (
    <form className="new-todo-form" onKeyDown={onKeyPress}>
      <input
        className="new-todo"
        value={taskData.title}
        onChange={handleChange}
        name="title"
        placeholder="What needs to be done?"
        required
        autoFocus
      />
      <input
        className="new-todo-form__timer"
        value={taskData.min}
        onChange={handleChange}
        name="min"
        type="number"
        placeholder="Min"
        required
      />
      <input
        className="new-todo-form__timer"
        value={taskData.sec}
        onChange={handleChange}
        name="sec"
        type="number"
        placeholder="Sec"
        required
      />
    </form>
  )
}

export default NewTaskForm
