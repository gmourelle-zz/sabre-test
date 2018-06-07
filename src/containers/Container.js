import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions/index';
import Main from './Main';

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

const mapStateToProps = state => {
  console.log(state);
  return {
    positions: state
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);