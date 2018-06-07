import React, { Component } from 'react';
import { Row, FormGroup, Container, Input, Button, Col } from 'reactstrap';
import './SearchBar.css'

class SearchBar extends Component {

onKeyPress(e) {
        const re = /[a-fA-F]+/g;
        if (!re.test(e.key)) {
          e.preventDefault();
        }
}

onKeyPress2(e) {
        const re = /[1-40]+/g;
        if (!re.test(e.key)) {
          e.preventDefault();
        }
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
                            <Input type="text" placeholder="Name" 
                            onKeyPress={(e) => this.onKeyPress(e)} />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup className="filter__formgroup">
                            <Input  type="select">
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
                            <Input type="number" placeholder="Age" min="18" max="40"/>
                        </FormGroup>
                        <FormGroup className="filter__formgroup">
                            <Input type="text" placeholder="Age"  onKeyPress={(e) => this.onKeyPress2(e)}/>
                        </FormGroup>
                    <Col>
                        <FormGroup className="filter__formgroup">
                        <Button  color="primary" className="float-left search-button">
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