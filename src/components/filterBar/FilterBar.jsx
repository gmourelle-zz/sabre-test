import React from "react";
import { Row, FormGroup, Container, Input, Button, Col } from "reactstrap";

import "./FilterBar.css";
import PropTypes from "prop-types";

import POSITIONS from "../../constants/positions";

class FilterBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", position: "", age: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onKeyPress(e) {
    const re = /[a-zA-Z]+/g;
    if (!re.test(e.key)) {
      e.preventDefault();
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newSearch = this.state;
    this.props.onSearch(newSearch);
  };

  render() {
    return (
      <Container className="filter__container">
        <Row>
          <Col>
            <FormGroup className="filter__formgroup">
              <Input
                value={this.state.name}
                onChange={e => this.handleChange(e)}
                onKeyPress={e => this.onKeyPress(e)}
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
                onChange={e => this.handleChange(e)}
                type="select"
                name="position"
                id="position"
              >
                <option>Position</option>
                {POSITIONS.map((p, index) => (
                  <option key={index} value={p}>
                    {p}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <FormGroup className="filter__formgroup">
            <Input
              value={this.state.age}
              onChange={e => this.handleChange(e)}
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
                onClick={e => this.handleSubmit(e)}
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
