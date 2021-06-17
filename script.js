'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🏆 Correct Number 🏆'

console.log(document.querySelector('.message').textContent = '🏆 Correct Number 🏆');

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20

console.log(document.querySelector('.guess').value)
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value)
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

//document.querySelector('.number').textContent = secretNumber;
document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When empty input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 ...no number!';
    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '㊗️ Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '1000px';
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = ' 🙈 ...too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' GAME OVER !';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '🙉 ...too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' GAME OVER !';
      document.querySelector('.message').style.fontSize = '45px';
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Another try to guess 😃';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
