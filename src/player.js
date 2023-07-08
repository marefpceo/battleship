import { Gameboard } from './gameboard';

const Player = () => {
  const gameboard = Gameboard();
  const name = 'player1';
  const attack = (coord, enemy) => {
    return enemy.receiveAttack(coord);
  }
  return {attack, gameboard, name}
}


const Computer = () => {
  const {gameboard} = Player();
  const name = 'computer';
  let lastHit = [];
  let smartSelection = [];

  function generateCoord() {
    const col = String.fromCharCode(Math.floor(Math.random() * (74 - 65 + 1) + 65));
    const row = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    return [col, row] 
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

  function smartAttack() {
    if (smartSelection.length === 0) {
      smartSelection.push([String.fromCharCode(lastHit[0].charCodeAt(0) + 1), lastHit[1]]);
      smartSelection.push([String.fromCharCode(lastHit[0].charCodeAt(0) - 1), lastHit[1]]);
      smartSelection.push([lastHit[0], (lastHit[1] + 1)]);
      smartSelection.push([lastHit[0], (lastHit[1] - 1)]);
    } else {
      return;
    }
  }
    
  const attack = (enemy, enemyCoordMissed, enemyCoordHits) => {
    let coord;

    if (smartSelection.length > 0) {
      coord = smartSelection[smartSelection.length - 1];

      while(verifyCoord(coord, enemyCoordMissed, enemyCoordHits)) {
        smartSelection.pop();
        coord = smartSelection[smartSelection.length - 1];
        if (smartSelection.length === 0) {
          coord = generateCoord();
        }
      }
    } else {
        coord = generateCoord();

        while(verifyCoord(coord, enemyCoordMissed, enemyCoordHits)) {
          coord = generateCoord();
        }
    }
   
    
    let attack = enemy.receiveAttack(coord);
    lastHit = attack === true ? coord : [];

    if (attack === true) { 
      smartAttack();
      lastHit = [];
    }
    

    return [attack, coord];
  }
  return {attack, verifyCoord, gameboard, name};
}

export { Player, Computer };
