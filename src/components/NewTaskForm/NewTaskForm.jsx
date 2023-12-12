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
  }

  handleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.title.trim()) {
      this.props.onAddTask(this.state.title)
      this.setState({ title: '' })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="new-todo"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    )
  }
}

export default NewTaskForm
