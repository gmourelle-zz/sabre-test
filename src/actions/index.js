import { Actions } from "./../constants/actionTypes";

const getPosition = payload => ({ type: Actions.GET_POSITIONS, payload });
const getPlayer = payload => ({ type: Actions.GET_PLAYERS, payload });

export const searchAction = payload => ({
  type: Actions.SEARCH_SAVE,
  payload: payload
});

const getPlayerError = payload => ({
  type: Actions.GET_PLAYERS_ERROR,
  payload: payload
});

const url = "../data/fakeData.json";

export const getPositions = () => {
  return dispatch => {
    return fetch(url)
      .then(data => data.json())
      .then(position_data => {
        dispatch(getPosition(position_data));
      });
  };
};

const urlPlayers =
  "https://football-players-b31f2.firebaseio.com/players.json?print=pretty";

export const getPlayers = () => {
  return dispatch => {
    return fetch(urlPlayers)
      .then(data => data.json())
      .then(player_data => {
        dispatch(getPlayer(player_data));
      })
      .catch(err => getPlayerError(err));
  };
};
