import React from 'react';

import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import FilterContainer from '../containers/FilterContainer';

const App = () => (
  <div>
    <AddTodo/>
    <FilterContainer/>
    <VisibleTodoList/>
  </div>
);

export default App;