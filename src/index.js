import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import Promise from 'redux-promise';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
const createStoreApplyMiddleware = applyMiddleware(Promise)(createStore);
const store = createStoreApplyMiddleware(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>
  
  , document.getElementById('root'));
registerServiceWorker();
