import React, { Component } from "react";
import { Container, Col, Row, Button, Jumbotron } from "react-bootstrap";
import axios from "axios";

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

  onAdd = stat => {
    //for add btn
    console.log("onadd");
  };

  onSubtract = stat => {
    //for subtract btn
    console.log("on subtract");
  };

  onSubmit = props => {
    //when user submit stat
    console.log("on sumbit");
  };

  render() {
    return (
      <Jumbotron>
        <Container>
          <Row className="p-3">
            <Col xs={12} md={6}>
              <Row className="align-items-center py-3 px-3">
                <Col xs={2} md={4}>
                  <Row className="justify-content-center">Str</Row>
                </Col>
                <Col xs={10} md={8}>
                  <Row className="justify-content-around align-items-center">
                    <Button variant="info" onClick={() => this.onAdd("str")}>
                      <i className="fas fa-plus" />
                    </Button>
                    {this.state.str}
                    <Button
                      variant="info"
                      onClick={() => this.onSubtract("str")}>
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
                    <Button variant="info" onClick={() => this.onAdd("int")}>
                      <i className="fas fa-plus" />
                    </Button>
                    {this.state.int}
                    <Button
                      variant="info"
                      onClick={() => this.onSubtract("int")}>
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
                    <Button variant="info" onClick={() => this.onAdd("agi")}>
                      <i className="fas fa-plus" />
                    </Button>
                    {this.state.agi}
                    <Button
                      variant="info"
                      onClick={() => this.onSubtract("agi")}>
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
                    <Button variant="info" onClick={() => this.onAdd("luk")}>
                      <i className="fas fa-plus" />
                    </Button>
                    {this.state.luk}
                    <Button
                      variant="info"
                      onClick={() => this.onSubtract("luk")}>
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
              <Button variant="info" onClick={() => this.onSubmit()}>
                Save
              </Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
