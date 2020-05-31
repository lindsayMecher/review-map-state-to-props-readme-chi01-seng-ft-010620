import React from 'react';
import ReactDOM from 'react-dom';

// gives ability to create the redux store using the reducer.
import { createStore } from 'redux';
// gives entire react app access to the redux store by passing as a prop.
import { Provider } from 'react-redux';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import App from './App';
import './index.css';

const store = createStore(
  shoppingListItemReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// wrap entire app in the Provider method.
ReactDOM.render(
  <Provider store={store}>
    <App store={store}/>
  </Provider>,
  document.getElementById('root')
);
