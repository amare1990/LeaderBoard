import Score from './score.js';
import { scorecontainer, name, score } from './variables.js';
/* import { receiveScores } from './game.js'; */
/* import receiveScores from './game.js'; */
//import addScore from './game.js';
//const scoresArray = [];

/* const addScore = (scoresArray) => {
  const nameValue = name.value;
  const scoreValue = score.value;
  //let t = createScore(nameValue, scoreValue);
  console.log('name value  '+ nameValue + ' '+ scoreValue);
  //scoresArray.push(scores);
  const scoreObj = new Score(nameValue, scoreValue);
  sendScore(nameValue, scoreValue);
  scoresArray.result.push(scoreObj);
  console.log("Array "+ scoresArray);
  displayScores(scoresArray);
 
  name.value = '';
  score.value = '';
}; */

const displayScores = (scoresArray) => {

  scorecontainer.innerHTML = '';
  for(let i = 0; i < scoresArray.length; i += 1) {
    const scoreListItem = document.createElement('li');
    scoreListItem.className = 'score-item';
    const nameTag = document.createElement('p');
    nameTag.innerHTML = scoresArray.result[i].name;
    const scoreTag = document.createElement('p');
    scoreTag.innerHTML = scoresArray.result[i].score;
    scoreListItem.append(nameTag);
    scoreListItem.append(scoreTag);
    scorecontainer.appendChild(scoreListItem);
  }
  // score.append(scorecontainer);
};

/* const refreshPage = () => {
  window.location.reload();
}; */

export { displayScores };
