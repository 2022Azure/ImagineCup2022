import { Switch, Route } from "react-router-dom";
import "./App.css";

import MainPage from "./pages/Home";
import AboutCB from "./pages/AboutColorB";
import TestsPage from "./pages/TestsPg";
import ContactPage from "./pages/ContactPg";
import MenuLink from "./components/MenuLink";
import AboutTeam from "./pages/AboutT";

function App() {
  return (
    <div className="App">
      <MenuLink />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>

        <Route exact path="/about-team">
          <AboutTeam />
        </Route>

        <Route exact path="/about-color-blind">
          <AboutCB />
        </Route>

        <Route exact path="/tests">
          <TestsPage />
        </Route>
        
        <Route exact path="/contact">
          <ContactPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
