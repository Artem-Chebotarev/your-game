import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Start from './components/Start/Start';
import {  useSelector } from "react-redux"


function App() {
  const user = useSelector(state => state.user)
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/game">
            {user.name ? < div>game</div> : <Redirect to="/" />}
          </Route>
          <Route exact path="/gameover">
            <div>gameOver</div>
          </Route>
          <Route exact path="/game/:id">
            {user.name ? <div>game with id</div> : <Redirect to="/" />}
          </Route>
          <Route exact path="/">
            <Start />
          </Route>
          {/* <Route path="/">
            <div>hello page</div>
          </Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
