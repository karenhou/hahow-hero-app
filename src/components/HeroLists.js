import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import HeroCards from "./HeroCards";

export default class HeroLists extends Component {
  state = {
    data: ""
  };
  setCurrent = x => {
    this.setState({ current: x });
  };

  componentDidMount() {
    axios
      .get("http://hahow-recruit.herokuapp.com/heroes")
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => {
        console.log("err ", err);
      });
  }

  render() {
    return (
      <header>
        <Container>
          <Row className="justify-content-center">
            <HeroCards heroes={this.state.data} />
          </Row>
        </Container>
      </header>
    );
  }
}
