import './App.css';
import StepOne from './components/StepOne';
import Random from './components/Random';
import Vote from './components/Vote';
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
          <Route path="/random"component={Random}/>
          <Route path="/vote" component={Vote}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
