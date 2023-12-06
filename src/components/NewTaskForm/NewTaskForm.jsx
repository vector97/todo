import { Component } from "react";

import "./NewTaskForm.css";

class NewTaskForm extends Component {
  state = {
    title: "",
  };

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddTask(this.state.title);
    this.setState({ title: "" });
  };

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
    );
  }
}

export default NewTaskForm;
