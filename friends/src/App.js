import React from 'react';
import Login from './components/Login/Login';
import Home from './components/Home';
import Friends from './components/Friends';
import { Link, Route,withRouter } from 'react-router-dom';
import  ProtectedRoute  from './components/ProtectedRoute';
import CreateFriendForm from './components/CreateFriendForm';
import Logout from './components/Logout';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Autherization Friends Application</h1>      
      <div className="main-nav">     
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/friends">Fridens</Link>
            <Link to='/add-friend'>Create Friend</Link>
            <Link to='/logout'>Logout</Link>
        </nav>
      </div>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} /> 
        <ProtectedRoute path="/friends" component={Friends} />
        <ProtectedRoute path="/add-friend" component={CreateFriendForm} />
        <ProtectedRoute path="/logout" component={Logout} />
      </div>              
    </div>
  );
}

export default withRouter(App);
