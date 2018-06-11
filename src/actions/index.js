import { Actions } from "./../constants/actionTypes";

const getPlayer = payload => ({ type: Actions.GET_PLAYERS, payload });

export const filterPlayers = payload => ({
  type: Actions.FILTER_PLAYERS,
  payload: payload
});

const getPlayerError = payload => ({
  type: Actions.GET_PLAYERS_ERROR,
  payload: payload
});

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
