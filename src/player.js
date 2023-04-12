import { Gameboard } from './gameboard';

const Player = (type) => {
  const playerType = type;

  const gameboard = new Gameboard();

  const attack = (coord, enemy) => {
    return enemy.receiveAttack(coord);
  }

  return {attack, gameboard}
}

export { Player };