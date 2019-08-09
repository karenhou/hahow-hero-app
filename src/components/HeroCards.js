import React from "react";
import { Col, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const HeroCard = styled(Card)`
  font-size: x-large;
  color: #17a2b8;
`;

const HeroCards = ({ heroes, current, setCurrent }) => {
  if (heroes) {
    return heroes.map(hero => {
      return (
        <Col key={hero.id} xs={3}>
          <Link to={`/${hero.id}`} onClick={() => setCurrent(hero.id)}>
            <Card.Img variant="top" src={hero.image} alt="hero images" />
            <HeroCard>
              <Card.Body>
                <Card.Title>
                  {hero.name} {current}
                </Card.Title>
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

HeroCards.propTypes = {
  heroes: PropTypes.PropTypes.oneOfType([PropTypes.array, PropTypes.string])
    .isRequired,
  current: PropTypes.string.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default HeroCards;
