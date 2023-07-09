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
  const computerGrid = document.getElementById('computer-grid');
  const computerShips = document.getElementById('computer-ships');
  const playerShips = document.getElementById('player-ships');
  const playerGrid = document.getElementById('player-grid');
  const shipSelectDiv = document.getElementById('ship-select');
  const verticalBtn = document.getElementById('position2');
  const {shipPosition} = Gameboard();
  const selected = [];

  let selectionTemp = [];
  let count = 0;

  function drawPlayerSelection (inputList, color) {
    for (let i = 0; i < inputList.length; i++) {
      let coordTemp = inputList[i];
      for (let j = 0; j < coordTemp.length; j++) {
        let squareCoord = `p-${coordTemp[0]}-${coordTemp[1]}`;
        const gridId = document.getElementById(squareCoord);
        try {
          gridId.style.backgroundColor = color;
          gridId.style.border = '0px';
        } catch (error) {
          return true;
        }
      }
    }
  }

  playerGrid.addEventListener('mouseover', (e) => {
    selectionTemp.length = 0;

    if (e.target.id !== 'player-grid') {
      const divId = e.target.id;

      let split = divId.split('-');
      let coord = [split[1], Number(split[2])];
      let temp = shipPosition(verticalBtn.checked, ships[count].size, coord);

      for (let i = 0; i < temp.length; i++) {
        selectionTemp.push(temp[i]);
      }
      if (count === 5) {
        drawPlayerSelection(selectionTemp, '#84898c');
      } else {
        drawPlayerSelection(selectionTemp, 'green');
      }
    }
  });

  playerGrid.addEventListener('mouseout', (e) => {
    if (e.target.id !== 'player-grid') {
      for (let i = 0; i < selectionTemp.length; i++) {
        let coordTemp = selectionTemp[i];

        for (let j = 0; j < coordTemp.length; j++) {
          try {
            let squareCoord = `p-${coordTemp[0]}-${coordTemp[1]}`;
            const gridId = document.getElementById(squareCoord);

            if (gridId.style.backgroundColor === '#84898c'){
              return;
            } else {
              gridId.style.backgroundColor = '#d2ecf9';
              gridId.style.border = '1px solid #1891ac';
              drawPlayerSelection(selected, '#84898c');
            }            
          } catch (error) {
              return;
            }
        }
      }
    }
  });
  
  playerGrid.addEventListener('click', (e) => {
    const invalidSelection = drawPlayerSelection(selectionTemp, '#84898c');

    if (invalidSelection === true) {
      drawPlayerSelection(selectionTemp, '#84898c');
    }
    while(!invalidSelection) {
      if (count < 6) {
        if (e.target.id !== 'player-grid') {
          let isMatch;
          let matchCount = 0;
          let selectionHold = [];
  
          for (let i = 0; i < selectionTemp.length; i++) {
            let current = selectionTemp[i];
    
            for (let j = 0; j < selected.length; j++) {
              isMatch = JSON.stringify(current) === JSON.stringify(selected[j]);
              if (isMatch === true) {
                matchCount++;
              }
            }
            selectionHold.push(selectionTemp[i]);
          }
    
          if (matchCount > 0) {
            drawPlayerSelection(selected, '#84898c');
            return;
          } else {
            for (let i = 0; i < selectionHold.length; i++) {
              selected.push(selectionHold[i].slice());
            }
            drawPlayerSelection(selected, '#84898c');
            count++;
          } 
        }
        
        if (count === 5) {
          playerGrid.style.pointerEvents = 'none';
          shipSelectDiv.style.display = 'none';
          computerGrid.style.display = 'grid';
          playerShips.style.display = 'flex';
          computerShips.style.display = 'flex';
          gameLoop('player', selected);
        } 
      }  
    }
  });
}

const restartGame = () => {
  window.location.reload();
}

const gameLoop = (selectionType, selectedList) => {
  const player1 = Player();
  const computer = Computer();
  const compGrid = document.getElementById('computer-grid');

  let sunkResult;
  let playerCount = 0;
  let compCount = 0;

  function gameTurn(enemy) {
    let initial = enemy.name.charAt(0);

    sunkResult = enemy.gameboard.sunkenShips();

    if (sunkResult !== undefined) {
      document.getElementById(`${initial}-${sunkResult}`).src = `./assets/${sunkResult}-red.svg`;
      if (initial === 'p') {
        playerCount++;
      } 
      if (initial === 'c') {
        compCount++;
      }
    }

    if (compCount === 5) {
      document.getElementById('board-container').style.display = 'none';
      gameOver('player1');
      document.getElementById('game-over').style.display = 'flex';
    }
    if (playerCount === 5) {
      document.getElementById('board-container').style.display = 'none';
      gameOver('computer');
      document.getElementById('game-over').style.display = 'flex';
    }
  }

  if (selectionType === 'random') {
    player1.gameboard.createShips();
    drawShips(player1.gameboard.list);
  }else {
    for (let i = 0; i < selectedList.length; i++) {
      player1.gameboard.createManualShips(selectedList);
      drawShips(player1.gameboard.list);
    }
  }
  
  computer.gameboard.createShips();

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
