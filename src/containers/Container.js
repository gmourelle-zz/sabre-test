import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getFilteredPlayers } from '../reducers/selectors';

import Main from "./Main";
import { getPlayers, filterPlayers } from "./../actions";

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPlayers,
      filterPlayers
    },
    dispatch
  );

const mapStateToProps = state => ({
  players: getFilteredPlayers(state),
  filter: state.finder.filter
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
