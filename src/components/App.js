import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import FilterContainer from '../containers/FilterContainer';

const App = () => (
  <Router>
    <div>
        <AddTodo/>
        <FilterContainer/>
        <VisibleTodoList/>
    </div>
  </Router>
);

export default App;