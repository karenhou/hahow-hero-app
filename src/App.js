import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeroLists from "./components/HeroLists";
import HeroProfile from "./components/HeroProfile";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
  background-color: #282c34;
  height: 100vh;
  font-family: "Righteous", cursive;

  a {
    &:hover {
      text-decoration: none;
    }
  }
`;

export default class App extends Component {
  render() {
    return (
      <Router basename="/heroes">
        <AppContainer className="App">
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
        </AppContainer>
      </Router>
    );
  }
}
