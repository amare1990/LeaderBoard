const scorecontainer = document.querySelector('.score-container');

const displayScores = (scoresArray) => {
  scorecontainer.innerHTML = '';
  let count = 0;

  for (let i = scoresArray.result.length - 1; i >= 0; i -= 1) {
    const scoreListItem = document.createElement('li');
    scoreListItem.className = 'score-item';

    const nameTag = document.createElement('p');
    const scoreTag = document.createElement('p');

    nameTag.innerHTML = `${scoresArray.result[i].user}:  `;
    scoreTag.innerHTML = scoresArray.result[i].score;

    scoreListItem.append(nameTag);
    scoreListItem.append(scoreTag);
    scorecontainer.append(scoreListItem);
    count += 1;
    if (count === 10) {
      break;
    }
  }
};

export default displayScores;
