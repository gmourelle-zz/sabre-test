import * as types from '../../constants/actionTypes';
import reducer, { initialState } from '../../reducers/player-reducer';

describe('App reducer', () => {
  
    it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_PLAYERS', () => {
    expect(reducer(initialState, { type: types.GET_PLAYERS })).toEqual({
      ...initialState
    });
  });

  it('should handle FILTER_PLAYERS', () => {
    expect(
      reducer(initialState, {
        type: types.FILTER_PLAYERS,
        payload: { players: [],
            filter: {
              name: "",
              position: "",
              age: ""
            } }
      })
    ).toEqual({
      ...initialState,
      players: [],
  filter: {
    name: "",
    position: "",
    age: ""
  }
    });
  });  
});
