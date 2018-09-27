import { combineReducers } from 'redux';

import { ADD_TODO, DELETE_TODO } from "../acitons";

function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        },
      ];
    case DELETE_TODO:
      console.log(asdf);
      return state;
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos
});

export default todoApp;
