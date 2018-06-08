import { createSelector } from "reselect";

import { Actions } from "../constants/actionTypes";

export const initialState = {
  name: "",
  position: "",
  age: ""
};
export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SEARCH_SAVE:
      return action.payload;
    default:
      return state;
  }
};

const getPlayers = state => state.players;
const getFilters = state => state.filterList;

export const filterPlayers = createSelector(
  (state, filterPlayers) => state.filterPlayers
);
