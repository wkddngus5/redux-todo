import React  from 'react';
import PropTypes from 'prop-types'

import Todo from './Todo';
import './TodoList.css';

const TodoList = ({ todos, onTodoComplete, onTodoDelete }) => (
  <ul className='list-group container'>
    {todos.map((todo, index) => (
      <Todo
        key={index} {...todo}
        onComplete={() => {onTodoComplete(index)}}
        onDelete={() => {onTodoDelete(index)}}
        index={index}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      onComplete: PropTypes.func.isRequired,
      onDelete: PropTypes.func.isRequired,
      index: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
};

export default TodoList;
