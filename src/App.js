import './App.scss';
import Start from "./components/Start"
import Menu from "./components/Menu"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ColorProvider } from "./contexts/ColorContext"

{ /* kolla upp om context och provider kopplat till att bestämma en 
     global theme på sidan */}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <ColorProvider>
            <Switch>
              <Route path ="/menu" component={Menu}/>
              <Route path ="/" component={Start}/>
            </Switch>
          </ColorProvider>
        </Router>
      </header>
    </div>
  );
}

export default App;
