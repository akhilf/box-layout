import React, { Component } from "react";
import Layout from "./compoents/hoc/Layout";
import Contactus from "./compoents/contactus/contactus";
import Boxwrapper from "./compoents/box/Boxwrapper";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  state = {};
  constructor() {
    super();
  }
  componentDidMount() {
    console.log("App - Mounted");
  }
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={Boxwrapper} />
            <Route path="/home" exact component={Boxwrapper} />
            <Route path="/contactus" exact component={Contactus} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
