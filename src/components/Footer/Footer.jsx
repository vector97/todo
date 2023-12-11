import PropTypes from 'prop-types'

import TasksFilter from '../TasksFilter'

import './Footer.css'

function Footer({ tasksCount, filter, onFilterData, clearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">{tasksCount} items left</span>
      <TasksFilter filter={filter} onFilterData={onFilterData} />
      <button className="clear-completed" type="button" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.defaultProps = {
  tasksCount: 0,
  filter: 'all',
  onFilterData: () => {},
  clearCompleted: () => {},
}

Footer.propTypes = {
  tasksCount: PropTypes.number,
  filter: PropTypes.oneOf(['all', 'active', 'completed']),
  onFilterData: PropTypes.func,
  clearCompleted: PropTypes.func,
}

export default Footer
