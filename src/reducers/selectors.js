import { createSelector } from "reselect";
import ageFromDate from "../utils/ageFromDate";

const getPlayers = state => state.finder.players;
const getFilter = state => state.finder.filter;

const getPlayerByAge = (p, age) =>
  age ? parseInt(age, 10) === ageFromDate(p.dateOfBirth) : true;

const getPlayerByPosition = (p, position) =>
  position ? p.position === position : true;

const getPlayerByName = (p, name) =>
  name ? p.name.toLowerCase().includes(name.toLowerCase()) : true;

export const getFilteredPlayers = createSelector(
  [getPlayers, getFilter],
  (players, filter) =>
    players.filter(
      p =>
        getPlayerByAge(p, filter.age) &&
        getPlayerByPosition(p, filter.position) &&
        getPlayerByName(p, filter.name)
    )
);
