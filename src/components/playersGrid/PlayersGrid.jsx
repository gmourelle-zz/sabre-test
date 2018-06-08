import React, { Component } from "react";
import { Container, ListGroup, Alert } from "reactstrap";
import { Row, Col } from "reactstrap";
import "./PlayersGrid.css";

const PlayersGrid = ({ rows }) => {
  if (rows.length) {
    return (
      <Container className="players-container">
        <Row />
        <Container>
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
                  <strong>Team</strong>
                </span>
              </Col>
              <Col xs="3">
                <span>
                  <strong>Age</strong>
                </span>
              </Col>
            </Row>
          </ListGroup>
        </Container>
      </Container>
    );
  } else {
    return <Alert color="warning">Any Players yet.</Alert>;
  }
};

export default PlayersGrid;
