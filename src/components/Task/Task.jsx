import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'
import { Component } from 'react'

import './Task.css'

class Task extends Component {
  static defaultProps = {
    done: false,
    onCompleteTask: () => {},
    onDeleteTask: () => {},
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    done: PropTypes.bool,
    onCompleteTask: PropTypes.func,
    onDeleteTask: PropTypes.func,
  }

  state = {}

  componentDidMount() {
    const { timeRemaining, isPlay } = this.props

    this.setState({ timeRemaining, isPlay })
  }

  componentWillUnmount() {
    const { onTick } = this.props
    const { timeRemaining } = this.state

    clearTimeout(this.timer)
    onTick(timeRemaining)
  }

  onPlayHandler = () => {
    const { isPlay } = this.state

    if (!isPlay) {
      this.setState({ isPlay: true })
      this.tick()
    }
  }

  onPauseHandler = () => {
    const { isPlay } = this.state

    if (isPlay) {
      this.setState({ isPlay: false })
      clearTimeout(this.timer)
    }
  }

  tick = () => {
    const { timeRemaining } = this.state

    if (timeRemaining >= 1) {
      this.setState((state) => {
        return {
          ...state,
          timeRemaining: state.timeRemaining - 1,
        }
      })

      this.timer = setTimeout(this.tick, 1000)
    } else {
      this.setState({ isPlay: false })
      clearTimeout(this.timer)
    }
  }

  transformTime = (time) => {
    const min = Math.trunc(time / 60)
    const sec = time % 60

    return `${this.formatTime(min)} : ${this.formatTime(sec)}`
  }

  formatTime = (time) => {
    if (time < 10) {
      return `0${time}`
    } else {
      return time
    }
  }

  render() {
    const { title, date, done, onCompleteTask, onDeleteTask } = this.props
    const { timeRemaining } = this.state
    const timer = this.transformTime(timeRemaining)

    return (
      <div className="view">
        <input className="toggle" type="checkbox" onChange={onCompleteTask} checked={done} />

        <label>
          <span className="title">{title}</span>

          <span className="description">
            <button className="icon icon-play" onClick={this.onPlayHandler}></button>
            <button className="icon icon-pause" onClick={this.onPauseHandler}></button>
            {timer}
          </span>

          <span className="description">created {formatDistanceToNow(new Date(date))} ago</span>
        </label>

        <button className="icon icon-edit" type="button" aria-label="edit task" />
        <button className="icon icon-destroy" type="button" onClick={onDeleteTask} aria-label="delete task" />
      </div>
    )
  }
}

export default Task
