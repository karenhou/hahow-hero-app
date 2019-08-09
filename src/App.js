import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeroLists from "./components/HeroLists";
import HeroProfile from "./components/HeroProfile";
import styled from "styled-components";
import Particles from "react-particles-js";

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
          <Particles
            style={{
              position: "fixed",
              right: "0",
              bottom: "0",
              width: "100%",
              height: "100%"
            }}
            params={{
              particles: {
                number: {
                  value: 60,
                  density: {
                    enable: true,
                    value_area: 1500
                  }
                },
                line_linked: {
                  enable: true,
                  opacity: 0.02
                },
                move: {
                  direction: "right",
                  speed: 0.05
                },
                size: {
                  value: 1
                },
                opacity: {
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.05
                  }
                }
              },
              interactivity: {
                events: {
                  onclick: {
                    enable: true,
                    mode: "push"
                  }
                },
                modes: {
                  push: {
                    particles_nb: 1
                  }
                }
              },
              retina_detect: true
            }}
          />
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
