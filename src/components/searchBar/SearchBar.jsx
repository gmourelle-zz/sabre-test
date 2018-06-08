import React from 'react';
import { Row, FormGroup, Container, Input, Button, Col } from 'reactstrap';
import './SearchBar.css';


class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            position: '',
            age: ''
        };
    }

    onKeyPress(e) {
        const re = /[a-zA-Z]+/g;
        if (!re.test(e.key)) {
            e.preventDefault();
        }
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const newSearch = this.state;
        this.props.onSearch(newSearch);
        this.setState({ name: '', position: '', age: '' });
    }

    render() {
        const items = [
            { value: 1, name: 'Attacking Midfield' },
            { value: 2, name: 'Central Midfield' },
            { value: 3, name: 'Centre-Back' },
            { value: 4, name: 'Centre-Forward' },
            { value: 5, name: 'Defensive Midfield' },
            { value: 6, name: 'Keeper' },
            { value: 7, name: 'Left Midfield' },
            { value: 8, name: 'Left Wing' },
            { value: 9, name: 'Left-Back' },
            { value: 10, name: 'Right-Back' },
        ];

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
                                placeholder="Name" />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup className="filter__formgroup">
                            <Input
                                value={this.state.position}
                                onChange={e => this.handleChange(e)}
                                type="select"
                                name="position"
                                id="position">
                                <option>Position</option>
                                {items.map(c =>
                                    <option key={c.value}>
                                        {c.name}
                                    </option>
                                )}
                            </Input>
                        </FormGroup>
                    </Col>
                    <FormGroup className="filter__formgroup">
                        <Input
                            value={this.state.age}
                            onChange={e => this.handleChange(e)}
                            // onKeyPress={e => this.onKeyPress(e)}
                            type="number"
                            name="age"
                            id="age"
                            placeholder="Age"
                            min="18"
                            max="40" />
                    </FormGroup>
                    <Col>
                        <FormGroup className="filter__formgroup">
                            <Button onClick={e => this.handleSubmit(e)}
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

export default SearchBar;