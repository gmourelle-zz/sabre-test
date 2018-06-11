import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./Main.css";
import FilterBar from "./../components/filterBar/FilterBar";
import PlayersGrid from "../components/playersGrid/PlayersGrid";

class Main extends Component {
  componentDidMount() {
    //llamar a la API que trae los players
    this.props.getPlayers();
  }

  render() {
    const { filterPlayers, players } = this.props;
    return (
      <Col xs="12">
        <Row className="filter-container">
          <FilterBar onSearch={filterPlayers} />
        </Row>
        <Row>
          <PlayersGrid rows={players} />
        </Row>
      </Col>
    );
  }
}

export default Main;
