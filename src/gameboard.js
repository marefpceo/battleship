import { Ship } from './ships';

const ships = [{name: 'carrier', size: 5, row: 'A', col: 4, isVertical: true}, 
  {name: 'battleship', size: 4, row: 'E', col: 7, isVertical: false}, 
  {name: 'cruiser', size: 3, row: 'C', col: 4, isVertical: false}, 
  {name: 'destroyer', size: 3, row: 'I', col: 2, isVertical: true}, 
  {name: 'sub', size: 2, row: 'J', col: 9, isVertical: true}];

const Gameboard = () => {
  let startCoord = [];
  // let isVertical = true;
  let shipList = [];
  let missedAttacks = [];
  let attackHits = [];
  let shipsLeft = [];
  let gamePieceList = [];
  
  function randomCol(size, isVertical) {
    let col;
    if (isVertical === false) {
      col = String.fromCharCode(Math.floor(Math.random() * ((74 - size)- 65 + 1) + 65));
    } else {
      col = String.fromCharCode(Math.floor(Math.random() * (74 - 65 + 1) + 65));
    }
    return col;
  }

  function randomRow(size, isVertical) {
    let row;
    if (isVertical === false) {
      row = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    } else {
      row = Math.floor(Math.random() * ((10 - size) - 1 + 1) + 1);
    }
    return row;
  }

  function randomOrientation() {
    const isVertical = Math.random() > 0.5 ? true : false;
    return isVertical;
  }

  const shipPosition = (orientation, shipLenth) => {
    let xVal = startCoord[0];
    let yVal = startCoord[1];
    let shipCoord = [];

    let isVertical = orientation;
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

  function positionCheck(coord) {
    for (let i = 0; i < coord.length; i++) {
      let current = coord[i];
      for (let j = 0; j < gamePieceList.length; j++) {
        let isSubset = current.every((element) => gamePieceList[j].includes(element));
        if (isSubset === true) {
          return true;
        }
      }
    }
    return false;
  }

  const createShips = () =>{
    for (let i = 0; i < ships.length; i++) {
      let randomBoolean = randomOrientation();
      let ship = Ship(ships[i].size);
      let col = randomCol(ships[i].size, randomBoolean);
      let row = randomRow(ships[i].size, randomBoolean);
      let positionTemp;

      startCoord = [col, row];
      ship.name = ships[i].name;
      positionTemp = shipPosition(randomBoolean, ships[i].size);

      if (i > 0) {
        let match = positionCheck(positionTemp);

        while (match) {
          col = randomCol(ships[i].size, randomBoolean);
          row = randomRow(ships[i].size, randomBoolean);
          startCoord = [col, row];
          positionTemp = shipPosition(randomBoolean, ships[i].size);
          match = positionCheck(positionTemp);
        }
      }

      ship.position = positionTemp;
      gamePieceList = gamePieceList.concat(ship.position);
      shipList.push(ship);
      shipsLeft.push(ship);
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
          shipList[i].isSunk();
          attackHits.push(strikeCoord);
          return isSubset;
        }
      }
    }
    missedAttacks.push(strikeCoord);
    return false;
  }

  const sunkenShips = () => {
    for (let i = 0; i < shipsLeft.length; i++) {
      if (shipsLeft[i].sunkStatus === true) {
        let name = shipsLeft[i].name;
        shipsLeft.splice(i,1);
        return name;
      } 
    }
  }

  const allShipsSunk = () => {
    const found = shipList.find(element => element.sunkStatus === false);

    if (found) {
      return false;
    } else {
      return true;
    }
  }

  return {
    get start() {
      return startCoord;
    },
    get list() {
      return shipList;
    }, 
    get remaining() {
      return shipsLeft;
    },
    get missed() {
      return missedAttacks;
    },
    get made() {
      return attackHits;
    },
    shipPosition,
    createShips,
    receiveAttack,
    sunkenShips,
    allShipsSunk
  }
}

export {Gameboard};
