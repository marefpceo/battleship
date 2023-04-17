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

  gameSetupDiv.id = 'game-setup';
  player1Info.id = 'player1-info';

  player1Info.innerHTML = '<div>Player 1</div>';
  
  gameSetupDiv.appendChild(player1Info);

  sectionDiv.appendChild(gameSetupDiv);
}


const initialPageLoad = () => {
  containerDiv();
  header();
  container.appendChild(sectionDiv);
}


export { initialPageLoad, gameSetup }