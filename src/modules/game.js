import axios from 'axios';

const createGame = async () => {
  const postURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const game = {
    name: 'My cool new game',
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type':
          'application/json',
    },
    body: JSON.stringify(game),
  };
  const response = await fetch(postURL, options);
  const responseJSON = await (response.json());
  return responseJSON;
};

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GzQIWWMbMVJqpo3Ez4g3/scores';
const sendScore = async (scoreObj) => {
  try {
    await axios.post(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GzQIWWMbMVJqpo3Ez4g3/scores/',
      { user: scoreObj.name, score: scoreObj.score },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
  } catch (error) {
    console.log(error.message);
  }
};

const receiveScores = async () => {
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch(url, options);
  if (response.status === 200) {
    return response.json();
  }

  throw Error('Something Bad happened when receiving score');
};

export { createGame, sendScore, receiveScores };