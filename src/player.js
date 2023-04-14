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
    return [row, col] 
  }

  function verifyCoord(coord, enemyCoord) {
    for (let i = 0; i < enemyCoord.length; i++) {
      let current = enemyCoord;
      for (let j = 0; j < current.length; j++) {
        let isSubset = coord.every((element) => current[j].includes(element));
        if (isSubset === true) {
          return isSubset;
        }
      }
    }
    return false;
  }
    
  const attack = (enemy, enemyCoord) => {
    let coord = generateCoord();

    while(verifyCoord(coord, enemyCoord)) {
      coord = generateCoord();
    }
    return enemy.receiveAttack(coord);
  }

  return {attack, verifyCoord, gameboard};
}


export { Player, Computer };
