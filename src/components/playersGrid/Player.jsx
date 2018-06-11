import React from "react";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import ageFromDate from "./../../utils/ageFromDate";

const Player = ({ player }) => {
  return (
    <Row>
      <Col xs="3">
        <span>{player.name}</span>
      </Col>
      <Col xs="3">
        <span>{player.position}</span>
      </Col>
      <Col xs="3">
        <span>{player.nationality}</span>
      </Col>
      <Col xs="3">
        <span>{ageFromDate(player.dateOfBirth)}</span>
      </Col>
    </Row>
  );
};

Player.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    nationality: PropTypes.string,
    dateOfBirth: PropTypes.string
  })
};

export default Player;
