import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import HeroCards from "./HeroCards";
import styled from "styled-components";

const MarvelBanner = styled.img`
  height: 15rem;

  @media all and (max-width: 575px) {
    height: 5rem;
  }
`;

const HeroCardsContainer = styled(Container)`
  padding-left: 0;
  padding-right: 0;
`;

export default class HeroLists extends Component {
  state = {
    data: "",
    current: ""
  };

  setCurrent = x => {
    this.setState({ current: x });
  };

  componentDidMount() {
    let path = window.location.pathname.split("/");
    axios
      .get("http://hahow-recruit.herokuapp.com/heroes")
      .then(res => {
        this.setState({ data: res.data, current: path.pop() });
      })
      .catch(err => {
        console.log("err ", err);
      });
  }

  render() {
    return (
      <header>
        <Row className="justify-content-center">
          <MarvelBanner
            src={require("../images/Marvel_logo.svg")}
            alt="marvel logo"
          />
        </Row>

        <HeroCardsContainer>
          <Row className="justify-content-center">
            <HeroCards
              heroes={this.state.data}
              current={this.state.current}
              setCurrent={this.setCurrent}
            />
          </Row>
        </HeroCardsContainer>
      </header>
    );
  }
}
