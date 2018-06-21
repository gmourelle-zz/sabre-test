import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

import * as types from "../../constants/actionTypes";
import * as actions from "../../actions";

const middlewares = [thunk];
//const mockStore = configureStore();
const mockStore = configureStore(middlewares);

//const mockStore = configureMockStore(middlewares);
const players = [
  {
    name: "Guido",
    position: "Midfielder",
    nationality: "Arg",
    dateOfBirth: "1980-04-05"
  }
];
describe("actions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("creates GET_PLAYERS", () => {
    fetchMock.getOnce(
      "https://football-players-b31f2.firebaseio.com/players.json?print=pretty",
      {
        body: { players },
        headers: { "content-type": "application/json" }
      }
    );

    const expectedActions = [
      {
        type: types.Actions.GET_PLAYERS,
        payload: players
      }
    ];
    //const store = mockStore({ players: [] });
    const store = mockStore({ todos: [] });
    return store.dispatch(actions.getPlayer()).then(() => {
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

  // it("getPlayers", () => {
  //   const store = mockStore({ players: [] });

  //   const player = {
  //     name: "Guido",
  //     position: "Midfielder",
  //     nationality: "Arg",
  //     dateOfBirth: "1980-04-05"
  //   };
  //   store.dispatch(actions.getPlayer(player));

  //   const actiones = store.getActions();
  //   expect(actiones.length).toBe(1);
  //   expect(actiones[0].type).toBe("GET_PLAYERS");
  //   console.log(actiones);
  //   expect(actiones[0].payload.name).toBe("Guido");
  // });

  // it("getPlayers creates required actions in success", () => {
  //   const expectedActions = [{ type: types.GET_PLAYERS, payload: [1] }];
  //   const store = mockStore({
  //     players: []
  //   });
  //   fetch.mockResponseOnce(JSON.stringify([1]));
  //   return store.dispatch(actions.getPlayers()).then(() => {
  //     expect(store.getActions()).toEqual(expectedActions);
  //   });
  // });
});
