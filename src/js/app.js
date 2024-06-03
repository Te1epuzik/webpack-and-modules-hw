import 
Game, 
{GameSavingData, 
	readGameSaving, 
	writeGameSaving
} from './Game.js';

import '../css/style.css';

console.log('app worked')

const game = new Game();
game.start();