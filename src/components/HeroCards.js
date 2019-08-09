import React from "react";
import { Col, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const HeroCard = styled(Card)`
  font-size: x-large;
  color: #17a2b8;
`;

const HeroHeadshot = styled.img`
  height: 16.3rem;

  @media all and (max-width: 768px) {
    height: 10rem;
  }
  @media all and (max-width: 575px) {
    height: 8rem;
  }
`;

const HeroCards = ({ heroes, current, setCurrent }) => {
  if (heroes) {
    return heroes.map(hero => {
      return (
        <Col key={hero.id} xs={3}>
          <Link to={`/${hero.id}`} onClick={() => setCurrent(hero.id)}>
            <HeroCard className="h-100">
              {/* if hero id is same as user selected, switch images */}
              {current === hero.id ? (
                <HeroHeadshot
                  src={require(`../images/${hero.name}.svg`)}
                  alt="here images"
                />
              ) : (
                <Card.Img variant="top" src={hero.image} alt="hero images" />
              )}
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

HeroCards.propTypes = {
  heroes: PropTypes.PropTypes.oneOfType([PropTypes.array, PropTypes.string])
    .isRequired,
  current: PropTypes.string.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default HeroCards;
