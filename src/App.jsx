import { Component } from "react";

import NewTaskForm from "./components/NewTaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  state = {
    todosData: [
      {
        id: 1,
        title: "Completed task",
        date: new Date(),
        done: true,
      },
      {
        id: 2,
        title: "Editing task",
        date: new Date(),
        done: false,
      },
      {
        id: 3,
        title: "Active task",
        date: new Date(),
        done: false,
      },
    ],
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm />
        </header>
        <section className="main">
          <TaskList todos={this.state.todosData} />
          <Footer />
        </section>
      </section>
    );
  }
}

export default App;
