import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.css";
import { Layout, Aboutus, ProductDetails, ContactUs } from "./components/main";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route exact path="/aboutus" component={Aboutus} />
          <Route exact path="/product/:id" component={ProductDetails} />
          <Route exact path="/contactus" component={ContactUs} />
        </Switch>
      </Router>
    );
  }
}

export default App;
