import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Container from "./component/container";
function App() {
  return (
    <React.Fragment>
      <Container />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
