import logo from './logo.svg';
import './App.css';
import StepOne from './components/StepOne';
import EatingIn from './components/EatingIn';
import EatingOut from './components/EatingOut';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={StepOne}/>
          <Route path="/random"component={EatingIn}/>
          <Route path="/out" component={EatingOut}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
