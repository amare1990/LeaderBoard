export default class Score {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  parseScores = () => {
    let dataStored = [];
    let scores = [];
    if (localStorage.getItem('scores')) {
      dataStored = localStorage.getItem('scores');
      scores = JSON.parse(dataStored);
    }
    return scores;
  }

  submitScore = () => {
    const scores = this.parseScores();
    scores.push(this);
    localStorage.setItem('scores', JSON.stringify(scores));
  }
}