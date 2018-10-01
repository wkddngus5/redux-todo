import React from 'react';
import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom';

import './Filter.css';

export const filterTypes = {
  ALL: 'ALL',
  COMPLETED: 'COMPLETED',
  NOT_COMPLETED: 'NOT_COMPLETED'
};

const Filter = ({filter, onFilterChange}) => {
  const filterList = Object.keys(filterTypes).map((key, index) => {
    const active = filter === filterTypes[key] ? 'active' : '';
    const link = () => (
      <Link to={key === filterTypes.ALL ? '' : filter} className={`nav-link ${active}`}>{filterTypes[key]}</Link>
    );

    return <li
      key={index}
      onClick={() => {
          onFilterChange(filterTypes[key]);
      }}
      className={`nav-item ${filterTypes[key]} ${active}`}>
      <Route component={link} />
    </li>
  });

  return (
      <ul className='nav'>
        {filterList}
      </ul>
    )
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired
};

export default Filter;
