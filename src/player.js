import { Gameboard } from './gameboard';

const Player = () => {
  const gameboard = new Gameboard();

  const attack = (coord, enemy) => {
    return enemy.receiveAttack(coord);
  }

  return {attack, gameboard}
}



const Computer = () => {
  const {gameboard} = Player();

  function generateCoord() {
    const row = String.fromCharCode(Math.floor(Math.random() * (74 - 65 + 1) + 65));
    const col = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    return [row, col];
  }
    
  const attack = (enemy) => {
    let coord = generateCoord();
    console.log(coord);
    return enemy.receiveAttack(coord);
  }

  return {attack, gameboard};
}

export { Player, Computer };