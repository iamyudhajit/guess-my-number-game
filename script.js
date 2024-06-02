'use strict';

// document.querySelector('.message').textContent = "Correct Number!";

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

//console.log(document.querySelector('.guess').value);

let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = Number.MIN_VALUE;

document.querySelector('.check').addEventListener('click', () => {
  document.querySelector('.message').textContent = 'Correct Number!';
  let guess = document.querySelector('.guess').value;

  if (!guess) {
    document.querySelector('.message').textContent = 'Please Enter A Number 🚨';
  }
  if (guess == secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number 🙌';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber && score > 0) {
    document.querySelector('.message').textContent = 'Too High 👆';
    score--;
  } else if (guess < secretNumber && score > 0) {
    document.querySelector('.message').textContent = 'Too Low 👇';
    score--;
  }
  if (score <= 0) {
    document.querySelector('.message').textContent = 'Game Lost 😢';
  }
  document.querySelector('.score').textContent = score;
});


document.querySelector('.again').addEventListener("click",()=>{
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing....';
    document.querySelector('.score').textContent = '20';
    highScore = Math.max(highScore , score);
    document.querySelector('.highscore').textContent = highScore;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    score=20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    console.log(secretNumber);
});
