import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import  thunk  from 'redux-thunk';
import  logger  from 'redux-logger';
import { reducer as LoginReducer } from './reducers/LoginReducer';
import { reducer as FriendsReducer} from './reducers/Friends';
import './index.css';
import App from './App';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const reducer = combineReducers({login:LoginReducer, friends: FriendsReducer});
const store = createStore(reducer, applyMiddleware(thunk,logger));

ReactDOM.render(
<Router>  
  <Provider store={store} >  
    <App />
  </Provider>
</Router>, document.getElementById('root'));

