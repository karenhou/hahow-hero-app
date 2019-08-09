import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const HeroCards = ({ heroes }) => {
  if (heroes) {
    return heroes.map(hero => {
      return (
        <Col key={hero.id} xs={3}>
          <Link to={`/${hero.id}`}>
            <Card className="h-100">
              <Card.Img variant="top" src={hero.image} alt="hero images" />
              <Card.Body>
                <Card.Title>{hero.name}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    });
  } else {
    return <h1>loading</h1>;
  }
};

export default HeroCards;
