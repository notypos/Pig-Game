'use strict';
// Function for score--0
// Function for score--1

// Change player scores to 0
document.querySelector('#score--0').textContent = 0;
document.querySelector('#score--1').textContent = 0;

// Roll Dice
document.querySelector('.btn--roll').addEventListener('click', function () {
  // make a new random dice number
  let diceRoll = Math.trunc(Math.random() * 6 + 1);
  console.log(diceRoll);

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
