import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as types from '../../constants/actionTypes';
import * as actions from '../../actions';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('actions', () => {
  // it('getPlayer creates GET_PLAYERS action', () => {
  //   expect(actions.getPlayer()).toEqual({
  //     type: types.Actions.GET_PLAYERS
  //   });

  // });

  it('getPlayers creates required actions in success', () => {
    const expectedActions = [
      
      { type: types.GET_PLAYERS, payload: [1] }
    ];
    const store = mockStore({
      players: [],
     });
    
      fetch.mockResponseOnce(JSON.stringify([1]));

    return store.dispatch(actions.getPlayers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

});
