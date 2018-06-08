import { Actions } from "../constants/actionTypes";

export const initialState = [];

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_PLAYERS:
      return action.payload;
    default:
      return state;
  }
};

export default playerReducer;
