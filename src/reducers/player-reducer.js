import { Actions } from "../constants/actionTypes";

export const initialState = {
  players: [],
  filter: {
    name: "",
    position: "",
    age: ""
  }
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_PLAYERS:
      return { ...state, players: action.payload };
    case Actions.FILTER_PLAYERS:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default playerReducer;
