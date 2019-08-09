import React, { Component } from "react";
import { Container, Col, Row, Button, Jumbotron } from "react-bootstrap";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

// fade in effect as styled component
const fadeinAnimation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
  animation: 2s ${fadeinAnimation};
`;

const JumboContainer = styled(Jumbotron)`
  background-color: #282c34;
  margin-bottom: 0;
  font-size: x-large;

  .container {
    padding: 2.5rem;
    background-color: white;
  }
`;

export default class HeroProfile extends Component {
  state = {
    str: "",
    agi: "",
    int: "",
    luk: "",
    point: 0
  };

  componentDidMount() {
    axios
      .get(
        `https://hahow-recruit.herokuapp.com/heroes/${
          this.props.match.params.id
        }/profile`
      )
      .then(res => {
        this.setState({
          str: res.data.str,
          agi: res.data.agi,
          int: res.data.int,
          luk: res.data.luk
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  /* when add button is clicked, this is called.
  And depend on which stat user clicks, it adds or subtracts */
  onAdd = stat => {
    switch (stat) {
      case "str":
        this.setState({
          str: this.state.str + 1,
          point: this.state.point - 1
        });
        break;
      case "int":
        this.setState({
          int: this.state.int + 1,
          point: this.state.point - 1
        });
        break;
      case "agi":
        this.setState({
          agi: this.state.agi + 1,
          point: this.state.point - 1
        });
        break;
      case "luk":
        this.setState({
          luk: this.state.luk + 1,
          point: this.state.point - 1
        });
        break;
      default:
        break;
    }
  };
  onSubtract = stat => {
    switch (stat) {
      case "str":
        this.setState({
          str: this.state.str - 1,
          point: this.state.point + 1
        });
        break;
      case "int":
        this.setState({
          int: this.state.int - 1,
          point: this.state.point + 1
        });
        break;
      case "agi":
        this.setState({
          agi: this.state.agi - 1,
          point: this.state.point + 1
        });
        break;
      case "luk":
        this.setState({
          luk: this.state.luk - 1,
          point: this.state.point + 1
        });
        break;
      default:
        this.setState({
          str: this.state.str,
          agi: this.state.agi,
          int: this.state.int,
          luk: this.state.luk
        });
        break;
    }
  };

  onSubmit = props => {
    //when user submit stat
    console.log("on sumbit");
  };

  render() {
    return (
      <JumboContainer>
        <FadeInDiv>
          <Container>
            <Row className="p-3">
              <Col xs={12} md={6}>
                <Row className="align-items-center py-3 px-3">
                  <Col xs={2} md={4}>
                    <Row className="justify-content-center">Str</Row>
                  </Col>
                  <Col xs={10} md={8}>
                    <Row className="justify-content-around align-items-center">
                      <Button
                        variant="info"
                        onClick={() => this.onAdd("str")}
                        disabled={this.state.point === 0}>
                        <i className="fas fa-plus" />
                      </Button>
                      {this.state.str}
                      <Button
                        variant="info"
                        onClick={() => this.onSubtract("str")}
                        disabled={this.state.str - 1 < 0}>
                        <i className="fas fa-minus" />
                      </Button>
                    </Row>
                  </Col>
                </Row>

                <Row className="align-items-center py-3 px-3">
                  <Col xs={2} md={4}>
                    <Row className="justify-content-center">Int</Row>
                  </Col>
                  <Col xs={10} md={8}>
                    <Row className="justify-content-around align-items-center">
                      <Button
                        variant="info"
                        onClick={() => this.onAdd("int")}
                        disabled={this.state.point === 0}>
                        <i className="fas fa-plus" />
                      </Button>
                      {this.state.int}
                      <Button
                        variant="info"
                        onClick={() => this.onSubtract("int")}
                        disabled={this.state.int - 1 < 0}>
                        <i className="fas fa-minus" />
                      </Button>
                    </Row>
                  </Col>
                </Row>

                <Row className="align-items-center py-3 px-3">
                  <Col xs={2} md={4}>
                    <Row className="justify-content-center">Agi</Row>
                  </Col>
                  <Col xs={10} md={8}>
                    <Row className="justify-content-around align-items-center">
                      <Button
                        variant="info"
                        onClick={() => this.onAdd("agi")}
                        disabled={this.state.point === 0}>
                        <i className="fas fa-plus" />
                      </Button>
                      {this.state.agi}
                      <Button
                        variant="info"
                        onClick={() => this.onSubtract("agi")}
                        disabled={this.state.agi - 1 < 0}>
                        <i className="fas fa-minus" />
                      </Button>
                    </Row>
                  </Col>
                </Row>

                <Row className="align-items-center py-3 px-3">
                  <Col xs={2} md={4}>
                    <Row className="justify-content-center">Luk</Row>
                  </Col>
                  <Col xs={10} md={8}>
                    <Row className="justify-content-around align-items-center">
                      <Button
                        variant="info"
                        onClick={() => this.onAdd("luk")}
                        disabled={this.state.point === 0}>
                        <i className="fas fa-plus" />
                      </Button>
                      {this.state.luk}
                      <Button
                        variant="info"
                        onClick={() => this.onSubtract("luk")}
                        disabled={this.state.luk - 1 < 0}>
                        <i className="fas fa-minus" />
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Col>

              <Col
                className="align-self-end text-right mb-3"
                xs={12}
                sm={12}
                md={6}>
                <p className="mt-3" id="statFont">
                  Points Left: {this.state.point}
                </p>
                <Button
                  variant="info"
                  onClick={() => this.onSubmit(this.props)}
                  disabled={this.state.point !== 0}>
                  Save
                </Button>
              </Col>
            </Row>
          </Container>
        </FadeInDiv>
      </JumboContainer>
    );
  }
}
