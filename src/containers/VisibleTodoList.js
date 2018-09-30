import {connect} from 'react-redux';

import TodoList from '../components/TodoList';
import {completeTodo, deleteTodo} from '../acitons/';
import { filterTypes } from '../components/Filter';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case filterTypes.ALL:
      return todos;
    case filterTypes.COMPLETED:
      return todos.filter(todo => {
        return todo.completed === true;
      });
    case filterTypes.NOT_COMPLETED:
      return todos.filter(todo => {
        return todo.completed === false;
      });
    default:
      return todos;
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.filter)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoComplete: id => {
      dispatch(completeTodo(id))
    },
    onTodoDelete: id => {
      dispatch(deleteTodo(id))
    }
  }
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
