import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import { addTodo } from "./acitons";
import App from './components/App';


const store = createStore(rootReducer);

const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.querySelector('#root')
);

render();