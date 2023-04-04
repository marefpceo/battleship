/* eslint-disable no-undef */
import { Gameboard } from './gameboard';

describe('Horizontal placement of ships', () =>{
  const gameboard = new Gameboard();
  
  test('start point is at coord [A, 3]', () => {
    expect(gameboard.startPosition('A', 3)).toStrictEqual(['A', 3]);
  });

  const carrier = [['A', 3], ['B', 3], ['C', 3], ['D', 3], ['E', 3]];

  test('ship horizontal position based on start position of [A, 3]', () => {
    expect(gameboard.shipPosition(false, 5)).toStrictEqual(carrier);
  });
});

describe('Vertical placement of ship', () => {
  const gameboard = new Gameboard();
  gameboard.startPosition('C', 4);
  const battleship = [['C', 4], ['C', 5], ['C', 6], ['C', 7]];
  
  test('ship vertical position based on start position of [C, 4]', () => {
    expect(gameboard.shipPosition(true, 4)).toStrictEqual(battleship);
  });
});

describe('Create all ships and place at specific locations', () => {
  const gameboard = new Gameboard();
  const shipInfo = [{name: 'carrier', length: 5, hits: 0, sunkStatus: false, 
      position: [['A', 4], ['A', 5], ['A', 6], ['A', 7], ['A', 8]]},
    {name: 'battleship', length: 4, hits: 0, sunkStatus: false, 
      position: [['E', 7], ['F', 7], ['G', 7], ['H', 7]]},
    {name: 'cruiser', length: 3, hits: 0, sunkStatus: false, 
      position: [['C', 4], ['D', 4], ['E', 4]]},
    {name: 'destroyer', length: 3, hits: 0, sunkStatus: false, 
      position: [['I', 2], ['I', 3], ['I', 4]]},
    {name: 'submarine', length: 2, hits: 0, sunkStatus: false,
      position: [['J', 9], ['J', 10]]}
  ];
  test('all ships are created with correct info', () => {
    expect(gameboard.createShips()).toMatchObject(shipInfo); 
  });  

  describe('Determine if attack hit a ship or not', () => {
    test('attack was a hit on cruiser at coordinates [D, 4]', () => {
      expect(gameboard.receiveAttack(['D', 4])).toBe(true);
    });

    test('hit was recorded for cruiser', () => {
      expect(gameboard.list[2].hits).toBe(1);
    });
    
  });
});

