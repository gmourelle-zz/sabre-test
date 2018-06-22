import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import * as types from "../../constants/actionTypes";
import * as actions from "../../actions";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const players = {
  contractUntil: "2022-06-30",
  dateOfBirth: "1993-05-13",
  jerseyNumber: 9,
  name: "Romelu Lukaku",
  nationality: "Belgium",
  position: "Centre-Forward"
};
describe("actions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("creates GET_PLAYERS", () => {
    fetchMock.getOnce(
      "https://football-players-b31f2.firebaseio.com/players.json?print=pretty",
      players
    );

    const expectedActions = [
      {
        type: types.Actions.GET_PLAYERS_SUCCESS,
        payload: players
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.getPlayers()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  // it("getPlayer creates GET_PLAYERS action", () => {
  //   const expectedAction = {
  //     type: types.Actions.GET_PLAYERS,
  //     payload: players
  //   };
  //   expect(actions.getPlayer(players)).toEqual(expectedAction);
  // });
});
