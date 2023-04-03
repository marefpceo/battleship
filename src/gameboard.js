import { Ship } from './ships';

const Gameboard = () => {
  let startCoord = [];
  let shipCoord = [];
  let isVertical = true;

  const startPosition = (column, row) => {
    startCoord = [column, row];
    return startCoord;
  } 


  const shipPosition = (orientation, shipLenth) => {
    let xVal = startCoord[0];
    let yVal = startCoord[1];

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

  return {
    get start() {
      return startCoord;
    },
    startPosition,
    shipPosition
  }
}

export {Gameboard};