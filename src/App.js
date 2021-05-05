import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Home from "./comp/home";
import Navigationbar from "./comp/navbar";
import PageNotFound from "./comp/404pagenotfound";

function App() {
  return (
    <Router>
    <Container fluid="true">
      <Navigationbar />
      <Container fluid="true"  className="justify-content-center align-text-center">
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/*" component={PageNotFound} />
        </Switch>
      </Container>
    </Container>
  </Router>
  );
}

export default App;
