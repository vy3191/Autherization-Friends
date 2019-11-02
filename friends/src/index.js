import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import  thunk  from 'redux-thunk';
import  logger  from 'redux-logger';
import { reducer as LoginReducer } from './reducers/LoginReducer';

import './index.css';
import App from './App';

const reducer = combineReducers({login:LoginReducer});
const store = createStore(reducer, applyMiddleware(thunk,logger));

ReactDOM.render(
<Provider store={store} >  
  <App />
</Provider>, document.getElementById('root'));

