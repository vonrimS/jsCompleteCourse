'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
  document.querySelector('.message').style.color = 'white';
};
const displayGameOver = () => {
  document.querySelector('.message').textContent = 'GAME OVER!';
  document.querySelector('.message').style.fontSize = '45px';
  document.querySelector('body').style.backgroundColor = 'red';
};

const displayAgain = () => {
  document.querySelector('.message').textContent = '😃 Another try to Guess 😃';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').style.fontSize = '2rem';
  document.querySelector('.message').style.color = 'yellow';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  console.log(`highscore is ${highScore}`);
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
};

document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('🚫 ...no number!');
  } else if (guess === secretNumber) {
    displayMessage('㊗️ Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '1000px';
    if (highScore === 0) {
      console.log('...highScore is empty');
      highScore = score;
    } else {
      console.log('...highScore has a value');
      highScore = score > highScore ? score : highScore;
    }
    document.querySelector('.highscore').textContent = highScore;
    console.log(highScore + ' was updated');
  } else if (guess !== secretNumber) {
    if (score !== 0) {
      document.querySelector('.message').textContent = `🙈 ${
        guess > secretNumber ? '...too high!' : '...too low!'
      } 🙉`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayGameOver();
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  displayAgain();
});
