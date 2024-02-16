'use strict';
// Function for score--0
// Function for score--1

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Change player scores to 0
score0El.textContent = 0;
score1El.textContent = 0;

// Hide dice
diceEL.classList.add('hidden');

// Roll Dice
btnRoll.addEventListener('click', function () {
  // make a new random dice number
  let diceRoll = Math.trunc(Math.random() * 6 + 1);
  console.log(diceRoll);

  // display dice roll
  diceEL.classList.remove('hidden');

  // add the score to current
  let currentScore = diceRoll + currentScore; //Fix
  console.log(currentScore);

  // reset current to 0 if rolls 1
  if (diceRoll === 1) {
    currentScore = 0;
  }

  // update the picture Fix - Fix
  // document.querySelector('.dice'). - change img src to equal diceRoll
});

// Hold Score
document.querySelector('.btn--hold').addEventListener('click', function () {
  // Hold the score
  document.querySelector('#score--1').textContent = totalScore + currentScore;
});
