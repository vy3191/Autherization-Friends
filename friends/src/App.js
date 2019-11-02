import React from 'react';
import Login from './components/Login/Login';
import Home from './components/Home';
import Friends from './components/Friends';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Autherization Friends Application</h1>
      <Router>
      <div className="main-nav">     
        <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/friends">Fridens</Link>
        </nav>
      </div>

        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} /> 
          <Route path="/friends" component={Friends} />
        </div>
      </Router>            
    </div>
  );
}

export default App;
