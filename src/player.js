import { Gameboard } from './gameboard';

const Player = () => {
  const gameboard = Gameboard();

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

  function verifyCoord(coord, enemyCoordMissed, enemyCoordHits) {
    let totalHits = enemyCoordMissed.concat(enemyCoordHits);
    for (let i = 0; i < totalHits.length; i++) {
      let current = totalHits;
      for (let j = 0; j < current.length; j++) {
        let isSubset = coord.every((element) => current[j].includes(element));
        if (isSubset === true) {
          return isSubset;
        }
      }
    }
    return false;
  }
    
  const attack = (enemy, enemyCoordMissed, enemyCoordHits) => {
    let coord = generateCoord();

    while(verifyCoord(coord, enemyCoordMissed, enemyCoordHits)) {
      coord = generateCoord();
    }
    return [enemy.receiveAttack(coord), coord];
  }

  return {attack, verifyCoord, gameboard};
}


export { Player, Computer };
