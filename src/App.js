import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeroLists from "./components/HeroLists";
import HeroProfile from "./components/HeroProfile";

export default class App extends Component {
  render() {
    return (
      <Router basename="/heroes">
        <div className="App">
          <HeroLists />
          <section>
            <Route
              exact
              path="/:id"
              render={props => (
                <HeroProfile {...props} key={props.match.params.id} />
              )}
            />
          </section>
        </div>
      </Router>
    );
  }
}
