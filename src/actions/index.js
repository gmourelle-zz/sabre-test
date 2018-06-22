import { Actions } from "./../constants/actionTypes";

export const getPlayerSuccess = payload => ({
  type: Actions.GET_PLAYERS_SUCCESS,
  payload
});
export const getPlayerRequest = () => ({ type: Actions.GET_PLAYERS_REQUEST });

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
    dispatch(getPlayerRequest());
    return fetch(urlPlayers)
      .then(data => data.json())
      .then(player_data => {
        dispatch(getPlayerSuccess(player_data));
      })
      .catch(err => getPlayerError(err));
  };
};
