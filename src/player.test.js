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

  describe('Computer makes random attack on player', () => {
    let randomResult = [expect.any(Boolean)];
    test('computer generates random coordinates for attack', () => {
      expect(computer.attack(player.gameboard, player.gameboard.missed, player.gameboard.made)).toEqual(expect.arrayContaining(randomResult));
    });

    test('computer attack at player [E, 5] returns false', () => {
      expect(computer.verifyCoord(['E',5], player.gameboard.missed, player.gameboard.made)).toBe(false);
    });

    test('computer duplicate attack at player [A, 1] returns true', () => {
      player.gameboard.missed.push(['A', 1]);
      expect(computer.verifyCoord(['A', 1], player.gameboard.missed, player.gameboard.made)).toBe(true);
    });
  });
});