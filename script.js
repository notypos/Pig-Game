'use strict';
// Function for score--0
// Function for score--1

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Hide dice
diceEL.classList.add('hidden');

// Roll Dice
btnRoll.addEventListener('click', function () {
  // 1. Generate random dice roll
  let dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);

  // 2. Display dice
  diceEL.classList.remove('hidden');
  // update the picture
  diceEL.src = `dice-${dice}.png`;

  // 3. Check for rolled 1: if true, switch to next player
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore; // CHANGE LATER
  } else {
    // Switch to next plyer
  }
});

// Hold Score
document.querySelector('.btn--hold').addEventListener('click', function () {
  // Hold the score
  document.querySelector('#score--1').textContent = totalScore + currentScore;
});
