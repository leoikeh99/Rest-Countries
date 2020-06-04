import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../src/css/main.css";
import NavBar from "../src/components/layout/NavBar";
import Countries from "../src/components/Countries";
import CountriesState from "../src/context/RestC/CountriesState";
import More from "../src/components/More";

function App() {
  return (
    <CountriesState>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Countries} />
          <Route exact path="/more/:code" component={More} />
        </Switch>
      </Router>
    </CountriesState>
  );
}

export default App;
