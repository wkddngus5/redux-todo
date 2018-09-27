import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Todo = ({index, text}) => (
  <li className='list-group-item row' data-item={index}>
    <div className='col-sm text'>{text}</div>
    <div className='col-sm complete'>
      <button type="button" className="btn btn-outline-secondary">Complete</button>
    </div>
    <div className='col-sm delete'>
      <button type="button" className="btn btn-outline-danger">Delete</button>
    </div>
  </li>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired
};

export default Todo;