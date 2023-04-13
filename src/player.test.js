/* eslint-disable no-undef */
import { Player } from './player';
import { Computer } from './player';

describe('Test player functions', () => {
  const player = new Player();
  const computer = new Computer();
  player.gameboard.createShips();
  computer.gameboard.createShips();

  describe('Create gameboard object for each player', () => {
    const boardObject = {
      start: expect.anything(), 
      list: expect.anything(),
      missed: expect.anything(),
      startPosition: expect.anything(),
      shipPosition: expect.anything(),
      createShips: expect.anything(),
      receiveAttack: expect.anything(),
      allShipsSunk: expect.anything()
    }

    test('player gameboard created', () => {
      expect(player.gameboard).toEqual(expect.objectContaining(boardObject));
    });

    test('computer gameboard created', () => {
      expect(computer.gameboard).toEqual(expect.objectContaining(boardObject));
    });
  });

  describe('Player makes attack on enemy gameboard', () => {
    test('player misses with attack at [E, 5]', () => {
      expect(player.attack(['E', 5], computer.gameboard)).toBe(false);
    });

    test('player hits with attack at [A, 6]', () => {
      expect(player.attack(['A', 6], computer.gameboard)).toBe(true);
    });

    console.log(computer.attack(player.gameboard));
  });
});