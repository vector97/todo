import PropTypes from 'prop-types'

import './TasksFilter.css'

const buttonsData = [
  { title: 'All', name: 'all' },
  { title: 'Active', name: 'active' },
  { title: 'Completed', name: 'completed' },
]

function TasksFilter({ filter, onFilterData }) {
  const buttons = buttonsData.map(({ title, name }) => {
    return (
      <li key={name}>
        <button className={name === filter ? 'selected' : ''} type="button" onClick={() => onFilterData(name)}>
          {title}
        </button>
      </li>
    )
  })

  return <ul className="filters">{buttons}</ul>
}

TasksFilter.defaultProps = {
  filter: 'all',
  onFilterData: () => {},
}

TasksFilter.propTypes = {
  filter: PropTypes.oneOf(['all', 'active', 'completed']),
  onFilterData: PropTypes.func,
}

export default TasksFilter
