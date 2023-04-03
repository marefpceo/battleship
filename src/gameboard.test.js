/* eslint-disable no-undef */
import { Gameboard } from './gameboard';

describe('Test horizontal placement of ships', () =>{
  const gameboard = new Gameboard();
  
  test('start point is at coord [A, 3]', () => {
    expect(gameboard.startPosition('A', 3)).toStrictEqual(['A', 3]);
  });

  const carrier = [['A', 3], ['B', 3], ['C', 3], ['D', 3], ['E', 3]];

  test('ship horizontal position based on start position of [A, 3]', () => {
    expect(gameboard.shipPosition(false, 5)).toStrictEqual(carrier);
  });
});

describe('Test vertical placement of ship', () => {
  const gameboard = new Gameboard();
  gameboard.startPosition('C', 4);
  const battleship = [['C', 4], ['C', 5], ['C', 6], ['C', 7]];
  
  test('ship vertical position based on start position of [C, 4]', () => {
    expect(gameboard.shipPosition(true, 4)).toStrictEqual(battleship);
  });
});
