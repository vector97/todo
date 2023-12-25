import PropTypes from 'prop-types'
import { Component } from 'react'

import './NewTaskForm.css'

class NewTaskForm extends Component {
  static defaultProps = {
    onAddTask: () => {},
  }

  static propTypes = {
    onAddTask: PropTypes.func,
  }

  state = {
    title: '',
    min: '',
    sec: '',
  }

  handleChange = ({ target }) => {
    const { name, value } = target

    this.setState({ [name]: value })
  }

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSubmit(e)
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { onAddTask } = this.props
    const { title, min, sec } = this.state

    if (title.trim() && min && sec) {
      const timeRemaining = Number(min) * 60 + Number(sec)

      onAddTask(title, timeRemaining)
      this.setState({ title: '', min: '', sec: '' })
    }
  }

  render() {
    const { title, min, sec } = this.state

    return (
      <form className="new-todo-form" onKeyDown={this.onKeyPress}>
        <input
          className="new-todo"
          value={title}
          onChange={this.handleChange}
          name="title"
          placeholder="What needs to be done?"
          required
          autoFocus
        />
        <input
          className="new-todo-form__timer"
          value={min}
          onChange={this.handleChange}
          name="min"
          type="number"
          placeholder="Min"
          required
        />
        <input
          className="new-todo-form__timer"
          value={sec}
          onChange={this.handleChange}
          name="sec"
          type="number"
          placeholder="Sec"
          required
        />
      </form>
    )
  }
}

export default NewTaskForm
