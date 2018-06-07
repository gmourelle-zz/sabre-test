import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import {array} from 'prop-types';
import './Main.css';
import SearchBar from './../components/searchBar/SearchBar';
import PlayersGrid from '../components/playersGrid/PlayersGrid';

class Main extends Component {
static propTypes={positions:array.isRequired}
    // componentDidMount() {
    //  /this.props.actions.getPositions();    
    // }
   constructor(props){
       super(props);
       console.log(props);
   } 
    render() {
        const {searchAction}=this.props;
        return (
            <Col xs="12">
            <Row className="filter-container">
                <SearchBar onSearch={searchAction}/>
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

// const mapDispatchToProps = dispatch => ({
//   actions: bindActionCreators(actions, dispatch)
// });

// export function mapStateToProps({ searching }) {
//     return {
//      // visitors: greetings.registrations,
//       positions: searching,
//       //user: greetings.currentVisitor,
//     };
// }


export default Main;
 