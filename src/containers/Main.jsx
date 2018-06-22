import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "./Main.css";
import FilterBar from "./../components/filterBar/FilterBar";
import PlayersGrid from "../components/playersGrid/PlayersGrid";
import Loading from "../components/loading/Loading";

class Main extends Component {
  componentDidMount() {
    this.props.getPlayers();
  }

  render() {
    const { filterPlayers, players, fetching } = this.props;
    return (
      <Col xs="12">
        <Row>
          <FilterBar onSearch={filterPlayers} />
        </Row>
        <Row>
          <Loading loading={fetching}>
            <PlayersGrid rows={players} />
          </Loading>
        </Row>
      </Col>
    );
  }
}

export default Main;
