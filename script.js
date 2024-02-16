'use strict';
// Function for score--0
// Function for score--1

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
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

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // Switch has to go after you change the text
  player0El.classList.toggle('player--active'); // css background with a transparency
  player1El.classList.toggle('player--active');
};

// Hide dice
diceEL.classList.add('hidden');

// Roll Dice
btnRoll.addEventListener('click', function () {
  if (playing) {
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
      // When current--0 player 0 score will update. current--1 player 1 will update
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore; only changes player0 score
    } else {
      // Switch to next plyer
      switchPlayer();
    }
  }
});

// Hold Score
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 10) {
      // Finish the game
      playing = false;
      diceEL.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {});
