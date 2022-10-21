const scorecontainer = document.querySelector('.score-container');

const displayScores = (scoresArray) => {
  scorecontainer.innerHTML = '';
  for (let i = 0; i < scoresArray.result.length; i += 1) {
    const scoreListItem = document.createElement('li');
    scoreListItem.className = 'score-item';
    const nameTag = document.createElement('p');
    if (i === scoresArray.result.length - 1) {
      nameTag.innerHTML = scoresArray.result[i].name + ':  ';
    } else {
      nameTag.innerHTML = scoresArray.result[i].user + ':  ';
    }
    const scoreTag = document.createElement('p');
    scoreTag.innerHTML = scoresArray.result[i].score;
    scoreListItem.append(nameTag);
    scoreListItem.append(scoreTag);
    scorecontainer.append(scoreListItem);
  }
};

export default displayScores;
