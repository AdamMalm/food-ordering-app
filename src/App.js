import './App.scss';
import Start from "./components/Start"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

{ /* kolla upp om context och provider kopplat till att bestämma en 
     global theme på sidan */}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path ="/" component={Start}/>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
