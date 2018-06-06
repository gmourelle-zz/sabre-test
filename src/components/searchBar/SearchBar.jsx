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
       
    render() {
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
                            <Input  type="select"/>
                        </FormGroup>
                    </Col>
                        <FormGroup className="filter__formgroup">
                            <Input type="number" placeholder="Age"/>
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