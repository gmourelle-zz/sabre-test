import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Main from "./Main";
import { getPlayers, searchAction } from "./../actions";

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPlayers,
      searchAction
    },
    dispatch
  );

const mapStateToProps = state => ({
  players: state.players,
  filterList: state.filterList
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
