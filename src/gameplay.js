import { drawShips, gameOver, shipSelectModal } from './pagelayout';
import { Player, Computer } from './player';
import './assets/explosion.svg';
import { Gameboard, ships } from './gameboard';

const startGame = () => {
  const randomBtn = document.getElementById('random-btn');
  const manualBtn = document.getElementById('manual-btn');
  const gameSetupDiv = document.getElementById('game-setup');
  const boardContainer = document.getElementById('board-container');
  const computerGrid = document.getElementById('computer-grid');
  const computerShips = document.getElementById('computer-ships');
  const playerShips = document.getElementById('player-ships');

  randomBtn.addEventListener('click', () => {
    gameSetupDiv.style.display = 'none';
    boardContainer.style.display = 'flex';
    gameLoop('random');
  });

  manualBtn.addEventListener('click', () => {
    gameSetupDiv.style.display = 'none';
    boardContainer.style.display = 'flex';
    playerShips.style.display = 'none';
    computerGrid.style.display = 'none';
    computerShips.style.display = 'none';
    shipSelectModal();
    playerShipSelection();
  });
}

const playerShipSelection = () => {
  const playerGrid = document.getElementById('player-grid');
  const verticalBtn = document.getElementById('position2');
  const {shipPosition} = Gameboard();
  const {positionCheck} = Gameboard();
  const selectionTemp = [];
  let count = 0;

  playerGrid.addEventListener('mouseover', (e) => {
    selectionTemp.length = 0;

    if (e.target.id !== 'player-grid') {
      const divId = e.target.id;
      let split = divId.split('-');
      let coord = [split[1], Number(split[2])];

      let temp = shipPosition(verticalBtn.checked, ships[count].size, coord);

      if (count > 0) {
        let match = positionCheck(temp);
        while (match) {
          console.log('nooo');
        }
      }
      selectionTemp.push(temp);

      for (let i = 0; i < selectionTemp.length; i++) {
        let coordTemp = selectionTemp[i];
        for (let j = 0; j < coordTemp.length; j++) {
          try {
            let squareCoord = `p-${coordTemp[j][0]}-${coordTemp[j][1]}`;
            const gridId = document.getElementById(squareCoord);
            gridId.style.backgroundColor = '#84898c';
            gridId.style.border = '0px';
          } catch (error) {
           return; 
          }
        }
      }
    }
  });

  playerGrid.addEventListener('mouseout', (e) => {
    if (e.target.id !== 'player-grid') {
      for (let i = 0; i < selectionTemp.length; i++) {
        let coordTemp = selectionTemp[i];
        for (let j = 0; j < coordTemp.length; j++) {
          try {
            let squareCoord = `p-${coordTemp[j][0]}-${coordTemp[j][1]}`;
            const gridId = document.getElementById(squareCoord);
            gridId.style.backgroundColor = '#d2ecf9';
            gridId.style.border = '1px solid #1891ac';
          } catch (error) {
            return;
          }
        }
      }
    }
  });
  
  playerGrid.addEventListener('click', (e) => {
    if (e.target.id !== 'player-grid' && count < 5) {
      count++;
    }
    console.log(count);
  });
}

const restartGame = () => {
  document.getElementById('game-over').remove();
  document.getElementById('board-container').remove();
  document.getElementById('game-setup').remove();
}

const gameLoop = (selectionType) => {
  const player1 = Player();
  const computer = Computer();
  const compGrid = document.getElementById('computer-grid');

  let sunkResult;
  let allSunk;

  function gameTurn(enemy) {
    let winner = enemy === player1 ? 'computer' : 'player1'; 
    let initial = enemy.name.charAt(0);

    sunkResult = enemy.gameboard.sunkenShips();
    allSunk = enemy.gameboard.allShipsSunk();

    if (sunkResult !== undefined) {
      document.getElementById(`${initial}-${sunkResult}`).src = `./assets/${sunkResult}-red.svg`;
    }

    if (allSunk === true) {
      document.getElementById('board-container').style.display = 'none';
      gameOver(winner);
      document.getElementById('game-over').style.display = 'flex';
    }
  }

  if (selectionType === 'random') {
    player1.gameboard.createShips();
  }
  
  computer.gameboard.createShips();
  drawShips(player1.gameboard.list);

  compGrid.addEventListener('click', (e) => {
    const divId = e.target.id;
    let split = divId.split('-');
    let coord = [split[1], Number(split[2])];

    while (computer.verifyCoord(coord, computer.gameboard.missed, computer.gameboard.made)){
      return;
    }

    let playerResult = computer.gameboard.receiveAttack(coord);
    if (playerResult === true) {
      document.getElementById(divId).style.backgroundImage = 'url(assets/explosion.svg)';
    } else {
      document.getElementById(divId).style.backgroundColor = '#d2ecf9';
    }

    gameTurn(computer);

    compGrid.style.pointerEvents = 'none';

    setTimeout(() => {
      let computerResult = computer.attack(player1.gameboard, player1.gameboard.missed, player1.gameboard.made);
    
      if (computerResult[0] === true) {
        document.getElementById(`p-${computerResult[1][0]}-${computerResult[1][1]}`).style.backgroundImage = 'url(assets/explosion.svg)';
      } else {
        document.getElementById(`p-${computerResult[1][0]}-${computerResult[1][1]}`).style.backgroundColor = '#253b6e';
      }

      gameTurn(player1);

      compGrid.style.pointerEvents = 'auto';
    }, 1000);
  });
}

export { startGame, restartGame, gameLoop }
