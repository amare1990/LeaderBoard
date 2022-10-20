import { method } from "lodash";
const createGame = async () => {
  const postURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const game = { 
    "name": "My cool new game" 
  };
const options = {
  method: 'POST',
  headers: {
      'Content-Type':
          'application/json',
  },
  body: JSON.stringify(game)
}
  const response = await fetch (postURL, options);
  console.log('status on creaing '+response.ID );
  const  responseJSON = await (response.json());
  return responseJSON;
};
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/GzQIWWMbMVJqpo3Ez4g3/scores';
const sendScore = async (scoreObj) => {
  console.log(JSON.stringify(scoreObj) +'  try1');
  const options = {
    method: 'POST',
    body: JSON.stringify(scoreObj),
    headers: { 'Accept': 'application/json','Content-Type': 'application/json; charset=UTF-8'}
  };

  const response = await fetch(url, options).then((response)=> {return response.json()});
  console.log('status on sending'+response.status );
 /*  if(response.status === 200) {
    console.log('Bingo! sending possible');
    return await (response.json());
  }
  else {
    throw Error ('Something Bad happened when sending score');
  } */
}

const receiveScores = async () => {
  const options = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  };
  const response = await fetch(url, options);
  console.log('status on receiving '+response.status );
  if(response.status === 200) {
    console.log('Bingo! receiving enabled');
    return await (response.json());
  }
  else {
    throw Error ('Something Bad happened when receiving score');
  }
};

export { createGame, sendScore, receiveScores };