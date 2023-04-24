import axios from 'axios';
import apiID from './apiID.js';

const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${
  apiID}/scores`;
const sendScore = async (scoreObj) => {
  try {
    await axios.post(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${
        apiID}/scores/`,
      { user: scoreObj.user, score: scoreObj.score, time: scoreObj.time },
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

export { sendScore, receiveScores };
