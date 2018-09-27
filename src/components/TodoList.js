import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Todo from './Todo';
import './TodoList.css';

const TodoList = ({ todos }) => (
  <ul className='list-group container'>
    {todos.map((todo, index) => (
      <Todo key={index} {...todo} />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
};

export default TodoList;
