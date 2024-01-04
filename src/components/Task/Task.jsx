import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

import transformTime from '../../helpers/transformTime'

import './Task.css'

Task.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  done: PropTypes.bool,
  timeRemaining: PropTypes.number.isRequired,
  isPlay: PropTypes.bool,
  onCompleteTask: PropTypes.func,
  onDeleteTask: PropTypes.func,
  onTick: PropTypes.func,
}

Task.defaultProps = {
  title: 'Task Title',
  done: false,
  timeRemaining: 0,
  isPlay: false,
  onCompleteTask: () => {},
  onDeleteTask: () => {},
  onTick: () => {},
}

function Task(props) {
  const { title, date, done, onCompleteTask, onDeleteTask, onTick } = props

  const [timeRemaining, setTimeRemaining] = useState(props.timeRemaining)
  const [isPlay, setIsPlay] = useState(props.isPlay)

  const time = transformTime(timeRemaining)

  useEffect(() => {
    const interval = setInterval(() => {
      isPlay && setTimeRemaining((t) => (t >= 1 ? t - 1 : 0))
    }, 1000)

    if (timeRemaining === 0) {
      setIsPlay(false)
    }

    return () => {
      clearInterval(interval)
      onTick(timeRemaining)
    }
  }, [isPlay, timeRemaining])

  const onPlayHandler = () => setIsPlay(true)
  const onPauseHandler = () => setIsPlay(false)

  return (
    <div className="view">
      <input className="toggle" type="checkbox" onChange={onCompleteTask} checked={done} />

      <label>
        <span className="title">{title}</span>

        <span className="description">
          <button className="icon icon-play" onClick={onPlayHandler}></button>
          <button className="icon icon-pause" onClick={onPauseHandler}></button>
          {time}
        </span>

        <span className="description">created {formatDistanceToNow(new Date(date))} ago</span>
      </label>

      <button className="icon icon-edit" type="button" aria-label="edit task" />
      <button className="icon icon-destroy" type="button" onClick={onDeleteTask} aria-label="delete task" />
    </div>
  )
}

export default Task
