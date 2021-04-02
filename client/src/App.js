import "./App.css";
import Topic from "./components/topics/topics";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Start from "./components/Start/Start";

function App() {
  const [user, setuser] = useState({ name: "", points: null });
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route exact path="/game">
            {/* {user.name ? <Topic /> : <Redirect to="/" />} */}
            <Topic />
          </Route>
          <Route exact path="/gameover">
            <div>gameOver</div>
          </Route>
          <Route exact path="/game/:id">
            {user.name ? <div>game with id</div> : <Redirect to="/" />}
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
