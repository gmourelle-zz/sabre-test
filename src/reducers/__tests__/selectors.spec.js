import { getFilteredPlayers } from './../selectors';
import moment from 'moment';

const now = moment();
const oneYearBefore = moment().subtract(1.1, 'years');

const PLAYERS = [
  { name: 'Guido', dateOfBirth: now.format(), position: 'a' },
  { name: 'a', dateOfBirth: oneYearBefore.format(), position: 'b' },
  { name: 'a', dateOfBirth: now.format(), position: 'c' }
];

describe('playersList selectors', () => {
  it('filters by name', () => {
    const state = {
      finder: {
        players: PLAYERS,
        filter: {
          name: 'Guido'
        }
      }
    };

    expect(getFilteredPlayers(state)).toEqual([PLAYERS[0]]);
  });

  it('filters by age', () => {
    const state = {
        finder: {
        players: PLAYERS,
        filter: {
          age: 1
        }
      }
    };

    expect(getFilteredPlayers(state)).toEqual([PLAYERS[1]]);
  });

  it('filters by position', () => {
    const state = {
      finder: {
        players: PLAYERS,
        filter: {
          position: 'c'
        }
      }
    };

    expect(getFilteredPlayers(state)).toEqual([PLAYERS[2]]);
  });
});
