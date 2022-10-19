import './style.css';
import {submitBtn, refreshBtn, name, score} from './modules/variables.js';

//const submitBtn = document.createElement('button');
submitBtn.setAttribute('type', 'submit');
submitBtn.className = 'submit-btn';
submitBtn.innerHTML = 'Submit';

addScoreDiv.append(submitBtn);


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