import React from "react";
import { Container, ListGroup, Alert, ListGroupItem } from "reactstrap";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import Player from "./Player";
import "./PlayersGrid.css";

const PlayersGrid = ({ rows }) => {
  return (
    <Container className="players-container">
      <ListGroup>
        <Row>
          <Col xs="3">
            <span>
              <strong>Player</strong>
            </span>
          </Col>
          <Col xs="3">
            <span>
              <strong>Position</strong>
            </span>
          </Col>
          <Col xs="3">
            <span>
              <strong>Nationality</strong>
            </span>
          </Col>
          <Col xs="3">
            <span>
              <strong>Age</strong>
            </span>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <ListGroupItem>
              {rows.length > 0 ? (
                rows.map((player, index) => (
                  <Player key={index} player={player} />
                ))
              ) : (
                <Alert color="warning">Any players yet</Alert>
              )}
            </ListGroupItem>
          </Col>
        </Row>
      </ListGroup>
    </Container>
  );
};

PlayersGrid.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    nationality: PropTypes.string,
    dateOfBirth: PropTypes.string
  })
};

export default PlayersGrid;
