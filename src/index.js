import './style.css';
import {
  submitBtn, refreshBtn, name, score, errMessage,
} from './modules/variables.js';
import { displayScores} from './modules/logics.js';
import { sendScore, receiveScores, createGame} from './modules/game.js';
import Score from './modules/score.js';

// User Interface here

window.onload = () => {
  let scoresArray = [];
  const showFormerData = async () => {
    scoresArray = await receiveScores();
    displayScores(scoresArray);
  };
  showFormerData();

 refreshBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  scoresArray = await receiveScores();
  displayScores(scoresArray);
 }); 

 submitBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const nameValue = name.value;
  const scoreValue = score.value;
  const scoreObj = new Score(nameValue, scoreValue);

  sendScore(scoreObj);

  scoresArray.result.push(scoreObj);
  displayScores(scoresArray);
 
  name.value = '';
  score.value = '';

 }); //End of submitBtn event handling

} //end of window on load event