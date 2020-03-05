import React from 'react';
import Login from './components/Login/Login';
import Home from './components/Home';
import Friends from './components/Friends';
import { Link, Route,withRouter } from 'react-router-dom';
import  ProtectedRoute  from './components/ProtectedRoute';
import CreateFriendForm from './components/CreateFriendForm';
import {ACCESS_TOKEN} from './constants/constant';
import Logout from './components/Logout';
import './App.css';
import FriendEdit from './components/FriendEdit';


function App() {
  const token = JSON.parse(localStorage.getItem(ACCESS_TOKEN));
  return (
    <div className="App">
      <h1>Autherization Friends Application</h1>      
      <div className="main-nav">     
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          {token && <Link to="/friends">Friends</Link>}
          {token && <Link to='/add-friend'>Create Friend</Link>}
          {token &&  <Link to='/logout'>Logout</Link>}
        </nav>
      </div>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} /> 
        <ProtectedRoute exact path="/friends" component={Friends} />
        <ProtectedRoute path="/add-friend" component={CreateFriendForm} />
        <ProtectedRoute path="/logout" component={Logout} />
        <ProtectedRoute path="/friends/:id" component={FriendEdit} />
      </div>              
    </div>
  );
}

export default withRouter(App);
