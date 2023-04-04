import { Ship } from './ships';

const Gameboard = () => {
  let startCoord = [];
  let isVertical = true;
  let shipList = [];

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
      let shipInfo = {};
      let ship = new Ship(ships[i][1]);
      startPosition(ships[i][2], ships[i][3]);
      shipInfo.name = ships[i][0];
      shipInfo.length = ship.length;
      shipInfo.hits = ship.hits;
      shipInfo.sunkStat = ship.sunkStatus;
      shipInfo.position = shipPosition(ships[i][4], ship.length);
      shipList.push(shipInfo);
    }
    return shipList;
  }

  return {
    get start() {
      return startCoord;
    },
    startPosition,
    shipPosition,
    createShips
  }
}

export {Gameboard};