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

// Wrapper for recent scores text and refresh button
const showScoresTitle = document.createElement('div');
showScoresTitle.className = 'show-title';

showScoresTitle.append(recentScores);
showScoresTitle.append(refreshBtn);
scores.append(showScoresTitle);
container.append(scores);

// ul for dynamic score show
const scorecontainer = document.createElement('ul');
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
const errMessage = document.createElement('p');
errMessage.className = 'error-message';
errMessage.innerHTML = 'Please enter a valid name and score. Scores must be just number';
addScoreDiv.append(errMessage);

addScoreDiv.append(inputFieldsWrapper);

const submitBtn = document.createElement('button');
submitBtn.setAttribute('type', 'submit');
submitBtn.className = 'submit-btn';
submitBtn.innerHTML = 'Submit';

addScoreDiv.append(submitBtn);

export {wrapper, container, scores, recentScores, refreshBtn, showScoresTitle, scorecontainer, 
addScoreDiv, inputFieldsWrapper, name, score, errMessage, submitBtn};