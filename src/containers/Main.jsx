import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./Main.css";
import SearchBar from "./../components/searchBar/SearchBar";
import PlayersGrid from "../components/playersGrid/PlayersGrid";

class Main extends Component {
  componentDidMount() {
    //llamar a la API que trae los players
    this.props.getPlayers();
    // <PlayersGrid players={this.props.players} />
  }

  render() {
    const { searchAction, players } = this.props;
    return (
      <Col xs="12">
        <Row className="filter-container">
          <SearchBar onSearch={searchAction} />
        </Row>
        <Row>
          <PlayersGrid rows={players} />
        </Row>
      </Col>
    );
  }
}

export default Main;
