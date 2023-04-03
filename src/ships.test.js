/* eslint-disable no-undef */
import { Ship } from './ships';

describe('Test factory function outputs', () => {
  const shipTest = new Ship(5);

  test('the length of the current ship', () => {
    expect(shipTest.length).toBe(5);
  });
  test('the number of hits and ship has NOT sunk', () => {
    for (let i = 0; i < 2; i++) {
      shipTest.hit();
    }
    expect(shipTest.hits).toBe(2);
    expect(shipTest.status).toBeFalsy;
  });
  test('the number of hits and ship HAS sunk', () => {
    for (let i = 0; i < 3; i++) {
      shipTest.hit();
    }
    expect(shipTest.hits).toBe(shipTest.length);
    expect(shipTest.status).toBeTruth;
  });
});