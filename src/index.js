import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { fetchExercises } from './actions';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(reducers,applyMiddleware(thunk));
store.dispatch(fetchExercises());

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);


registerServiceWorker();
