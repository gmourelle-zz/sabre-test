import { combineReducers } from "redux";
import {
  searchReducer,
  filterPlayers as _filterPlayers
} from "./search-reducer";
import playerReducer from "./player-reducer";

export default combineReducers({
  players: playerReducer,
  filterList: searchReducer
});

//export const filterPlayers = state => (_filterPlayers(state));
