import React from "react";
import { Container, Row } from "react-bootstrap";
import HeroCards from "./HeroCards";
import styled from "styled-components";
import PropTypes from "prop-types";

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

const HeroLists = ({ heroes, current, setCurrent }) => {
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
            heroes={heroes}
            current={current}
            setCurrent={setCurrent}
          />
        </Row>
      </HeroCardsContainer>
    </header>
  );
};

HeroLists.propTypes = {
  heroes: PropTypes.PropTypes.oneOfType([PropTypes.array, PropTypes.string])
    .isRequired,
  current: PropTypes.string.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default HeroLists;
