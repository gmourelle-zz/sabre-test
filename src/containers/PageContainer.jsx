import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import './PageContainer.css';
import SearchBar from './../components/searchBar/SearchBar';
import PlayersGrid from '../components/playersGrid/PlayersGrid';

class PageContainer extends Component {
    render() {
        return (
            <Col xs="12">
            <Row className="filter-container">
                <SearchBar />
            </Row>
            <Row>
                <Col>
                   <PlayersGrid />                   
                </Col>
            </Row>
        </Col>
        );
    }
}

export default PageContainer;