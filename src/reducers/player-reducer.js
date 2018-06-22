import { Actions } from "../constants/actionTypes";

export const initialState = {
  players: [],
  filter: {
    name: "",
    position: "",
    age: ""
  },
  fetching: false
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_PLAYERS_REQUEST:
      return { ...state, fetching: true };
    case Actions.GET_PLAYERS_SUCCESS:
      return { ...state, players: action.payload, fetching: false };
    case Actions.FILTER_PLAYERS:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default playerReducer;
