import { Actions } from '../constants/actionTypes';

const searchReducer = (state = [], action) => {
    switch (action.type) {
      case Actions.GET_POSITIONS:
        return action.payload;
        //return {...state, countries:[...state, action.payload]};
      case Actions.SEARCH_SAVE:
        return action.payload;      
        //return [...state, action.payload ];
        //return {...state, articles:[...state.articles, action.payload]};
      default:
        return state;
    }
};

export default searchReducer;