import React from "react";
import { Container, ListGroup, Alert, ListGroupItem } from "reactstrap";
import { Row, Col } from "reactstrap";
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
              <strong>Team</strong>
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
                rows.map((player, i) => (
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
                      <span>{player.dateOfBirth}</span>
                    </Col>
                  </Row>
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

export default PlayersGrid;
