import React from "react";
import { Container, ListGroup, Alert, ListGroupItem } from "reactstrap";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import uuid from "uuid";

import Player from "./Player";
import "./PlayersGrid.css";

const PlayersGrid = ({ rows }) => {
  if (rows.length) {
    return (
      <Container className="player__container">
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
                  rows.map(player => <Player key={uuid.v4()} player={player} />)
                ) : (
                  <Alert color="warning">
                    No results. Please try changing the search terms
                  </Alert>
                )}
              </ListGroupItem>
            </Col>
          </Row>
        </ListGroup>
      </Container>
    );
  } else {
    return <Alert color="warning">Loading...</Alert>;
  }
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
