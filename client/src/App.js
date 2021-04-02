import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Topic from "./components/topics/topics";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Topic />
        </Route>
      </div>
    </Router>
  );
}

export default App;
