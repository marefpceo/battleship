/* eslint-disable no-undef */
import { Player } from './player';
import { Computer } from './player';

describe('Test player functions', () => {
  const ships = [['carrier', 5, 'A', 4, true], ['battleship', 4, 'E', 7, false], 
      ['cruiser', 3, 'C', 4, false], ['destroyer', 3, 'I', 2, true], 
      ['submarine', 2, 'J', 9, true]];
  const player = new Player();
  const computer = new Computer();
  player.gameboard.createShips(ships);
  computer.gameboard.createShips(ships);

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
  });

  describe('Computer makes random attack on player', () => {
    test('computer generates random coordinates for attack', () => {
      expect(computer.attack(player.gameboard, player.gameboard.missed)).toEqual(expect.any(Boolean));
    });

    test('computer attack at player [E, 5] returns false', () => {
      expect(computer.verifyCoord(['E',5], player.gameboard.missed)).toBe(false);
    });

    test('computer duplicate attack at player [A, 1] returns true', () => {
      player.gameboard.missed.push(['A', 1]);
      expect(computer.verifyCoord(['A', 1], player.gameboard.missed)).toBe(true);
    });
  });
});