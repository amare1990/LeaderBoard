const scorecontainer = document.querySelector('.score-container');

const displayScores = (scoresArray) => {

  scorecontainer.innerHTML = '';
  console.log ('Length of scoresArray= '+ scoresArray.result.length);
 
  for(let i = 0; i < scoresArray.result.length; i += 1) {
    const scoreListItem = document.createElement('li');
    scoreListItem.className = 'score-item';
    const nameTag = document.createElement('p');
    nameTag.innerHTML = scoresArray.result[i].user;
    const scoreTag = document.createElement('p');
    scoreTag.innerHTML = scoresArray.result[i].score;
    scoreListItem.append(nameTag);
    scoreListItem.append(scoreTag);
    scorecontainer.append(scoreListItem);
  }
  
};

export { displayScores };
