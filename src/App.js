import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import About from './Pages/About/About';
import Appoinment from "./Pages/Appoinment/Appoinment/Appoinment";
import Home from './Pages/Home/Home/Home';
import Login from "./Shared/Login/Login";
import Register from "./Shared/Login/Resister/Register";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/appoinment">
            <Appoinment></Appoinment>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
