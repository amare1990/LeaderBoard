import Score from './score.js';
import { wrapper, container, scores, recentScores, refreshBtn, showScoresTitle, scorecontainer, 
  addScoreDiv, inputFieldsWrapper, name, score, errMessage, submitBtn } from './variables.js';

const createScore = () => {
  const nameValue = name.value;
  const scoreValue = score.value;
  const scoreObj = new Score(nameValue, scoreValue);
  scoreObj.submitScore();
  const newScoreLi = document.createElement('li');
  newScoreLi.className = 'score-item';
  scorecontainer.appendChild(newScoreLi);
  newScoreLi.innerHTML = `
    <p class="score-name">${scoreObj.name}:</p>
    <p class="score-text">${scoreObj.score}</p>
    `;
  name.value = '';
  score.value = '';
};

const displayScores = () => {
  const scores = new Score().parseScores();
  scores.forEach((score) => {
    const newScoreLi = document.createElement('li');
    newScoreLi.className = 'score-item';
    scorecontainer.appendChild(newScoreLi);
    newScoreLi.innerHTML = `
            <p class="score-name">${score.name}:</p>
            <p class="score-text">${score.score}</p>
        `;
  });
};

const refreshPage = () => {
  window.location.reload();
};

export { createScore, displayScores, refreshPage };
