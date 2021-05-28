import './App.scss';
import Start from "./components/Start"
import Menu from "./components/Menu"
import ItemPage from "./components/ItemPage"
import ShoppingCart from "./components/ShoppingCart"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ColorProvider } from "./contexts/ColorContext"
import { SessionProvider } from "./contexts/SessionContext"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <SessionProvider>
            <ColorProvider>
              <Switch>
                <Route path ="/shoppingcart" component={ShoppingCart}/>
                <Route path ="/itempage" component={ItemPage}/>
                <Route path ="/menu" component={Menu}/>
                <Route path ="/" component={Start}/>
              </Switch>
            </ColorProvider>
          </SessionProvider>
        </Router>
      </header>
    </div>
  );
}

export default App;
