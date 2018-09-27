import React from 'react';
import PropTypes from 'prop-types'

import AddTodo from './AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div>
    <AddTodo/>
    <VisibleTodoList/>
  </div>
);

export default App;