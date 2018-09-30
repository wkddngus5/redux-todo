import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onComplete, onDelete, index, text, completed}) => {
  const completeStatus = completed ? 'success' : 'secondary';

  return (
    <li className='list-group-item row' data-item={index}>
      <div className={`col-sm text ${completeStatus}`}>{text}</div>
      <div className='col-sm complete'>
        <button type="button" className={`btn btn-outline-${completeStatus}`} onClick={onComplete}>Complete</button>
      </div>
      <div className='col-sm delete'>
        <button type="button" className="btn btn-outline-danger" onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
}

Todo.propTypes = {
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};

export default Todo;