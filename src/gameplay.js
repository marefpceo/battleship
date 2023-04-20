import { drawShips } from './pagelayout';
import { Player, Computer } from './player';
import './assets/explosion.svg';


const ships = [['carrier', 5, 'A', 4, true], ['battleship', 4, 'E', 7, false], 
['cruiser', 3, 'C', 4, false], ['destroyer', 3, 'I', 2, true], 
['submarine', 2, 'J', 9, true]];

let inProgress = false;

const startGame = () => {
  const startBtn = document.getElementById('start-btn');
  const gameSetupDiv = document.getElementById('game-setup');
  const boardContainer = document.getElementById('board-container');
  startBtn.addEventListener('click', () => {
    gameSetupDiv.style.display = 'none';
    boardContainer.style.display = 'flex';
    gameLoop();
  });
}

const gameLoop = () => {
  const player1 = Player();
  const computer = Computer();
  const compGrid = document.getElementById('computer-grid');
  
  player1.gameboard.createShips(ships);
  computer.gameboard.createShips(ships);
  drawShips(player1.gameboard.list);

  compGrid.addEventListener('click', (e) => {
    const divId = e.target.id;
    let split = divId.split('-');
    let coord = [split[1], Number(split[2])];
    console.log(coord);

    let playerResult = computer.gameboard.receiveAttack(coord);
    if (playerResult === true) {
      document.getElementById(divId).style.backgroundImage = 'url(assets/explosion.svg)';
    } else {
      document.getElementById(divId).style.backgroundColor = '#d2ecf9';
    }
    compGrid.style.pointerEvents = 'none';

    setTimeout(() => {
      let computerResult = computer.attack(player1.gameboard, player1.gameboard.missed);
    
      if (computerResult === true) {
        console.log(computerResult);
      } else {
        console.log(computerResult);
      }
      compGrid.style.pointerEvents = 'auto';
    }, 3000);
  });
}


export { startGame }
