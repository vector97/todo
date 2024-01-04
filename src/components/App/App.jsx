import { useState } from 'react'

import Footer from '../Footer'
import NewTaskForm from '../NewTaskForm'
import TaskList from '../TaskList'

import './App.css'

let nextId = 1

function App() {
  const initialTodos = [
    createTask('Completed task', 61),
    createTask('Editing task', 10),
    createTask('Active task', 120),
  ]

  const [todosData, setTodosData] = useState(initialTodos)
  const [filter, setFilter] = useState('all')

  function createTask(title, timeRemaining) {
    return {
      id: nextId++,
      title,
      date: new Date(),
      done: false,
      timeRemaining,
      isPlay: false,
    }
  }

  const onAddTask = (title, timeRemaining) => setTodosData([...todosData, createTask(title, timeRemaining)])

  const completeTask = (id) => {
    setTodosData(
      todosData.map((t) =>
        t.id === id
          ? {
              ...t,
              done: !t.done,
            }
          : t,
      ),
    )
  }

  const deleteTask = (taskId) => setTodosData(todosData.filter((t) => t.id !== taskId))

  const clearCompleted = () => setTodosData(todosData.filter((t) => !t.done))

  const onTick = (id, timeRemaining) => {
    setTodosData((todosData) => {
      const newTodosData = todosData.map((t) =>
        t.id === id
          ? {
              ...t,
              timeRemaining,
            }
          : t,
      )

      return newTodosData
    })
  }

  const onFilterData = (filter) => setFilter(filter)

  const tasksCount = todosData.filter((t) => !t.done).length

  const renderedTasks = todosData.filter((t) => {
    if (filter === 'active') {
      return !t.done
    }
    if (filter === 'completed') {
      return t.done
    }

    return t
  })

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onAddTask={onAddTask} />
      </header>

      <section className="main">
        <TaskList todos={renderedTasks} onCompleteTask={completeTask} onDeleteTask={deleteTask} onTick={onTick} />

        <Footer tasksCount={tasksCount} filter={filter} onFilterData={onFilterData} clearCompleted={clearCompleted} />
      </section>
    </section>
  )
}

export default App
