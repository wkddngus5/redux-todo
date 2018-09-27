import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from "../acitons/index";
import './AddTodo.css';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form id='addTodo' onSubmit={e => {
        e.preventDefault();
        dispatch(addTodo(input.value));
        input.value = '';
      }}
      >
        <input
          ref={node => {
            input = node;
          }}
          className='form-control'
          id='inputTodo'
          placeholder='Enter todo'
        />
        <button className='btn btn-primary' type='submit'>ADD</button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo);

export default AddTodo;
