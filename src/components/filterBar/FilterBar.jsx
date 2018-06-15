import React from "react";
import { Row, FormGroup, Container, Input, Button, Col } from "reactstrap";
import uuid from "uuid";

import "./FilterBar.css";
import PropTypes from "prop-types";

import POSITIONS from "../../constants/positions";

class FilterBar extends React.Component {
  state = { name: "", position: "", age: "" };

  onKeyPress = e => {
    const re = /[a-zA-Z]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSearch(this.state);
  };

  render() {
    return (
      <Container className="filter__container">
        <Row>
          <Col>
            <FormGroup className="filter__formgroup">
              <Input
                value={this.state.name}
                onChange={this.handleChange}
                onKeyPress={this.onKeyPress}
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup className="filter__formgroup">
              <Input
                value={this.state.position}
                onChange={this.handleChange}
                type="select"
                name="position"
                id="position"
              >
                <option>Position</option>
                {POSITIONS.map(p => (
                  <option key={uuid.v1()} value={p}>
                    {p}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <FormGroup className="filter__formgroup">
            <Input
              value={this.state.age}
              onChange={this.handleChange}
              type="number"
              name="age"
              id="age"
              placeholder="Age"
              min="18"
              max="40"
            />
          </FormGroup>
          <Col>
            <FormGroup className="filter__formgroup">
              <Button
                onClick={this.handleSubmit}
                color="primary"
                className="float-left search-button"
              >
                Search
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

FilterBar.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default FilterBar;
