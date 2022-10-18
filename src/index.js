import './style.css';

const wrapper = document.querySelector('.wrapper');

const heading = document.createElement('h1');
heading.className = 'project-title';
heading.innerHTML = 'Leaderboard';
wrapper.append(heading);

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

addScoreDiv.append(inputFieldsWrapper);

const submitBtn = document.createElement('button');
submitBtn.setAttribute('type', 'submit');
submitBtn.className = 'submit-btn';
submitBtn.innerHTML = 'Submit';

addScoreDiv.append(submitBtn);
