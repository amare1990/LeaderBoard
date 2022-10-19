const wrapper = document.querySelector('.wrapper');

const container = document.createElement('div');
container.className = 'container';
wrapper.append(container);

const scores = document.createElement('div');
scores.className = 'scores';

const recentScores = document.createElement('p');
recentScores.className = 'recent-scores';
recentScores.innerHTML = 'Recent Scores';

const refreshBtn = document.createElement('button');
refreshBtn.setAttribute('type', 'button');
refreshBtn.className = 'refresh-btn';
refreshBtn.innerHTML = 'Refresh';

const showScoresTitle = document.createElement('div');
showScoresTitle.className = 'show-title';

showScoresTitle.append(recentScores);
showScoresTitle.append(refreshBtn);
scores.append(showScoresTitle);
container.append(scores);

// Div for dynamic score show
const scorecontainer = document.createElement('div');
scorecontainer.className = 'score-container';
scorecontainer.innerHTML = 'Here score loading';
scores.append(scorecontainer);

// Add your score
const addScoreDiv = document.createElement('div');
addScoreDiv.className = 'add-score-text';
const addScoreHeading = document.createElement('p');
addScoreHeading.innerHTML = 'Add your score';
addScoreDiv.append(addScoreHeading);
container.append(addScoreDiv);

const inputFieldsWrapper = document.createElement('div');
inputFieldsWrapper.className = 'input-field';

const name = document.createElement('input');
name.setAttribute('type', 'text');
name.placeholder = 'Your name';
inputFieldsWrapper.append(name);

const score = document.createElement('input');
score.setAttribute('type', 'text');
score.placeholder = 'Your score';
inputFieldsWrapper.append(score);

// error message handling
<p class="error-message font">
  Please enter a valid name and score. Scores must be just number
</p>

const errMessage = document.querySelector('.error-message');

addScoreDiv.append(inputFieldsWrapper);

export {wrapper, container, scores, recentScores, refreshBtn, showScoresTitle, scorecontainer, 
addScoreDiv, inputFieldsWrapper, name, score, errMessage};