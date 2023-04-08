import { Ship } from './ships';

const Gameboard = () => {
  let startCoord = [];
  let isVertical = true;
  let shipList = [];
  let missedAttacks = [];
  

  const startPosition = (column, row) => {
    startCoord = [column, row];
    return startCoord;
  } 

  const shipPosition = (orientation, shipLenth) => {
    let xVal = startCoord[0];
    let yVal = startCoord[1];
    let shipCoord = [];

    isVertical = orientation;
    shipCoord.push(startCoord);

    if (!isVertical) {
      for (let i = 1; i < shipLenth; i++) {
        xVal = String.fromCharCode(xVal.charCodeAt(0) + 1);
        let temp = [xVal, yVal];
        shipCoord.push(temp);
      }
    } else {
      for (let i = 1; i < shipLenth; i++) {
        yVal = (yVal + 1);
        let temp = [xVal, yVal];
        shipCoord.push(temp);
      }
    }
    return shipCoord;
  }

  const ships = [['carrier', 5, 'A', 4, true], ['battleship', 4, 'E', 7, false], 
      ['cruiser', 3, 'C', 4, false], ['destroyer', 3, 'I', 2, true], 
      ['submarine', 2, 'J', 9, true]];

  const createShips = () =>{
    for (let i = 0; i < ships.length; i++) {
      let ship = new Ship(ships[i][1]);
      startPosition(ships[i][2], ships[i][3]);
      ship.name = ships[i][0];
      ship.position = shipPosition(ships[i][4], ship.length);
      shipList.push(ship);
    }
    return shipList;
  }

  const receiveAttack = (strikeCoord) => {
    for (let i = 0; i < shipList.length; i++) {
       let current = shipList[i].position;
       for (let j = 0; j < current.length; j++) {
        let isSubset = strikeCoord.every((element) => current[j].includes(element));
        if (isSubset === true) {
          shipList[i].hit();
          return isSubset;
        }
      }
    }
    missedAttacks.push(strikeCoord);
  }

  const allShipsSunk = (shipList) => {
    for (let i = 0; i < shipList.length; i++) {
      if (shipList[i].sunkStatus === false){
        return false;
      } else {
        return true;
      }
    }
  }

  return {
    get start() {
      return startCoord;
    },
    get list() {
      return shipList;
    }, 
    get missed() {
      return missedAttacks;
    },
    startPosition,
    shipPosition,
    createShips,
    receiveAttack,
    allShipsSunk
  }
}

export {Gameboard};