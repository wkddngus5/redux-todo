export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addTodo(text) {
  return { type: ADD_TODO, text }
};

export function deleteTodo(index) {
  return { type: DELETE_TODO, index }
}
