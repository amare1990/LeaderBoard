import './style.css';
import {submitBtn, refreshBtn, name, score, errMessage} from './modules/variables.js';
import { createScore, displayScores, refreshPage } from './modules/logics.js';


//User Interface here
submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (name.value === '' || score.value === '') {
    errMessage.style.display = 'block';
  } else {
    errMessage.display = 'none';
    createScore();
  }
});

window.onload = () => {
  displayScores();
};

refreshBtn.addEventListener('click', (event) => {
  event.preventDefault();
  refreshPage();
});