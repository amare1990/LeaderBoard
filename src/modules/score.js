export default class Score {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  getScores = () => {
    let dataStored = [];
    let scores = [];
    if (localStorage.getItem('scores')) {
      dataStored = localStorage.getItem('scores');
      // console.log(dataStored);
      scores = JSON.parse(dataStored);
    }
    return scores;
  }

  addScore = () => {
    const scores = this.getScores();
    scores.push(this);
    localStorage.setItem('scores', JSON.stringify(scores));
  }
}