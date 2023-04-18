import battleshipLogo from './assets/battleship-logo.svg';

const content = document.getElementById('content');
const container = document.createElement('div');
const sectionDiv = document.createElement('section');

const containerDiv = () => {
  container.className = 'container';
  content.appendChild(container);
}

const header = () => {
  const header = document.createElement('header');
  const imgDiv = document.createElement('div');
  const logo = document.createElement('img');

  imgDiv.id = 'image-div';

  logo.id = 'logo';
  logo.alt = 'Battleship logo with missle as letter I';
  logo.src = battleshipLogo;
  
  imgDiv.appendChild(logo);
  header.appendChild(imgDiv);
  container.appendChild(header);
}


const gameSetup = () => {
  const gameSetupDiv = document.createElement('div');
  const player1Info = document.createElement('div');
  const nameInputP1 = document.createElement('input');
  const startBtn = document.createElement('button');

  nameInputP1.type = 'text';
  nameInputP1.id = 'name';
  nameInputP1.name = 'name';
  nameInputP1.placeholder = 'Name';  

  startBtn.id = 'start-btn';
  startBtn.innerText = 'Start';

  gameSetupDiv.id = 'game-setup';
  player1Info.id = 'player1-info';

  player1Info.innerHTML = '<div>Player 1</div>';
  player1Info.appendChild(nameInputP1);
  
  gameSetupDiv.appendChild(player1Info);
  gameSetupDiv.appendChild(startBtn);
  sectionDiv.appendChild(gameSetupDiv);
}

const drawGrid = (gridType) => {
  for (let i = 0; i < 100; i++) {
    const squareDiv = document.createElement('div');
    squareDiv.style.backgroundColor = '#d2ecf9';
    squareDiv.className = 'square';
    gridType.appendChild(squareDiv);
  }
}

const boardSetup = () => {
  const boardDiv = document.createElement('div');
  const playerBoard = document.createElement('div');
  const computerBoard = document.createElement('div');
  const playerShips = document.createElement('div');
  const computerShips = document.createElement('div');
  const playerGridDiv = document.createElement('div');
  const computerGridDiv = document.createElement('div');

  drawGrid(playerGridDiv);
  drawGrid(computerGridDiv);

  boardDiv.id = 'board-container';

  playerBoard.classList = 'board';
  playerShips.classList = 'ships';
  playerGridDiv.classList = 'grid';

  computerBoard.classList = 'board';
  computerShips.classList = 'ships';
  computerGridDiv.classList = 'grid';

  playerBoard.appendChild(playerShips);
  playerBoard.appendChild(playerGridDiv);
  computerBoard.appendChild(computerGridDiv);
  computerBoard.appendChild(computerShips);

  boardDiv.appendChild(playerBoard);
  boardDiv.appendChild(computerBoard);
  sectionDiv.appendChild(boardDiv);
}

const initialPageLoad = () => {
  containerDiv();
  header();
  container.appendChild(sectionDiv);
}

export { initialPageLoad, gameSetup, boardSetup }