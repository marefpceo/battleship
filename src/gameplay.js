import { drawShips } from './pagelayout';
import { Player, Computer } from './player';

const ships = [['carrier', 5, 'A', 4, true], ['battleship', 4, 'E', 7, false], 
['cruiser', 3, 'C', 4, false], ['destroyer', 3, 'I', 2, true], 
['submarine', 2, 'J', 9, true]];

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

  player1.gameboard.createShips(ships);
  computer.gameboard.createShips(ships);
  console.log(drawShips(player1.gameboard.list));
  console.log(computer);
}


export { startGame }