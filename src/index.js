import { startGame } from './gameplay';
import { initialPageLoad, gameSetup, boardSetup } from './pagelayout';
import './style.css';

initialPageLoad();
gameSetup();
boardSetup();
startGame();