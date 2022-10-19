import Score from './score.js';
import { wrapper, container, scores, recentScores, refreshBtn, showScoresTitle, scorecontainer, 
  addScoreDiv, inputFieldsWrapper, name, score, errMessage, submitBtn } from './variables.js';

const scoreBoard = document.querySelector('.score-board-ul');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');

const createScore = () => {
  const nameValue = name.value;
  const scoreValue = score.value;
  const scoreObj = new Score(nameValue, scoreValue);
  scoreObj.addScore();
  const newScoreLi = document.createElement('li');
  newScoreLi.className = 'score-board-li';
  scorecontainer.appendChild(newScoreLi);
  newScoreLi.innerHTML = `
    <p class="score-board-name">${scoreObj.name}:</p>
    <p class="score-board-score">${scoreObj.score}</p>
    `;
  name.value = '';
  score.value = '';
};

const displayScores = () => {
  const scores = new Score().getScores();
  scores.forEach((score) => {
    const newScoreLi = document.createElement('li');
    newScoreLi.className = 'score-board-li';
    scorecontainer.appendChild(newScoreLi);
    newScoreLi.innerHTML = `
            <p class="score-board-name">${score.name}:</p>
            <p class="score-board-score">${score.score}</p>
        `;
  });
};

const refreshPage = () => {
  window.location.reload();
};

export { createScore, displayScores, refreshPage };
