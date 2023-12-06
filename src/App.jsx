import { Component } from "react";

import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  idCount = 0;

  state = {
    todosData: [
      this.createTask("Completed task"),
      this.createTask("Editing task"),
      this.createTask("Active task"),
    ],
  };

  createTask(title) {
    return {
      id: this.idCount++,
      title,
      date: new Date(),
      done: false,
    };
  }

  onAddTask = (title) => {
    this.setState(({ todosData }) => {
      return {
        todosData: [...todosData, this.createTask(title)],
      };
    });
  };

  completeTask = (id) => {
    this.setState(({ todosData }) => {
      const newTodosData = todosData.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      );

      return {
        todosData: newTodosData,
      };
    });
  };

  deleteTask = (id) => {
    this.setState(({ todosData }) => {
      const idx = todosData.findIndex((task) => task.id === id);

      const newTodosData = [
        ...todosData.slice(0, idx),
        ...todosData.slice(idx + 1),
      ];

      return {
        todosData: newTodosData,
      };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onAddTask={this.onAddTask} />
        </header>
        <section className="main">
          <TaskList
            todos={this.state.todosData}
            onCompleteTask={this.completeTask}
            onDeleteTask={this.deleteTask}
          />
          <Footer />
        </section>
      </section>
    );
  }
}

export default App;
