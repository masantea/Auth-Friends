import React from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login"
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";
import Friend from './components/Friend';

function App() {
  return (
    
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path="/protected" Component={FriendsList} />
          <Route exact path="/" render={(props) => <Login {...props} /> } /> {/*need to render, run a func that returns it, it gives us router props (history, match, location) */}
          <Route component={Login} />
          <Route path="/friends/:id" render={(props) => <Friend {...props} test='test' /> } />
        </Switch>
      </div>
 
  );
}

export default App;
