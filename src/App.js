import "./App.css";
import NavBar from "./NavigationBar/NavBar";
import Regis from "./Registration/Regis";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Dash/Home";
import SignIn from "./Registration/SignIn";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/regis">
            <Regis />
          </Route>

          <Route path="/signin">
            <SignIn />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
