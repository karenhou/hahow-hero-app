import React from "react";
import { Col, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeroCard = styled(Card)`
  font-size: x-large;
  color: #17a2b8;
`;

const HeroCards = ({ heroes }) => {
  if (heroes) {
    return heroes.map(hero => {
      return (
        <Col key={hero.id} xs={3}>
          <Link to={`/${hero.id}`}>
            <HeroCard className="h-100">
              <Card.Img variant="top" src={hero.image} alt="hero images" />
              <Card.Body>
                <Card.Title>{hero.name}</Card.Title>
              </Card.Body>
            </HeroCard>
          </Link>
        </Col>
      );
    });
  } else {
    return <Spinner animation="border" variant="danger" />;
  }
};

export default HeroCards;
