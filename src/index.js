import './style.css';
import displayScores from './modules/logics.js';
import { sendScore, receiveScores } from './modules/game.js';
import Score from './modules/score.js';

const refreshBtn = document.querySelector('.refresh-btn');
const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('.name');
const score = document.querySelector('.score');
const errorMessage = document.querySelector('.error-message');
const addScore = document.querySelector('.add-score-text');

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
  const time = new Date();
  const scoreObj = new Score(nameValue, scoreValue, time);

  if (nameValue === '' || scoreValue === 0) {
    errorMessage.style.display = 'block';
    addScore.append(errorMessage);
  } else {
    sendScore(scoreObj);
  }

  scoresArray.result.push(scoreObj);
  displayScores(scoresArray);

  name.value = '';
  score.value = '';
});
