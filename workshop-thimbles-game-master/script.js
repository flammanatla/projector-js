'use strict';

let winning;
let mix;
let shuffleCounter = 0;

function startGame() {
  showBall();
  setTimeout(shuffling, 1000);
}

function showBall() {
  // remove Play button
  document.getElementById('playButton').style.display = 'none';

  // define the index where ball should be located
  winning = getRandomNumber();
  console.log('winning index --->', winning);

  // define the thimble
  let thimb = document.getElementById(`cup${winning}`);

  //put ball in the seleced thimble
  document
    .getElementById('thimbleBall')
    .setAttribute('Class', `thimbleBallPosition${winning}`);

  // show the ball under the thimble
  thimb.classList.add('thimbleUp');

  // put the thimble back
  setTimeout(function () {
    thimb.classList.remove('thimbleUp');
  }, 500);

  // hide the ball
  setTimeout(function () {
    document
      .getElementById(`thimbleBall`)
      .classList.remove(`thimbleBallPosition${winning}`);
  }, 1000);
}

function getRandomNumber() {
  let random = Math.floor(Math.random() * 3);
  return random;
}

function shuffling() {
  console.log('started shuffling');
  mix = setInterval(pickRandomCups, 500);
}

function pickRandomCups() {
  let cupOne = getRandomNumber();
  let cupTwo = getRandomNumber();

  if (cupOne !== cupTwo) {
    console.log('shuffling in progress');
    // define randpm thimbles
    let cupOneElement = document.getElementById(`cup${cupOne}`);
    let cupTwoElement = document.getElementById(`cup${cupTwo}`);

    let cupOneClass = cupOneElement.getAttribute('class');
    let cupTwoClass = cupTwoElement.getAttribute('class');

    cupOneElement.setAttribute('Class', cupTwoClass);
    cupTwoElement.setAttribute('Class', cupOneClass);

    if ([cupOne, cupTwo].includes(winning)) {
      winning = cupOne === winning ? cupTwo : cupOne;
      console.log('winning index changed to', winning);
    }
    shuffleCounter++;

    if (shuffleCounter > 3) {
      clearInterval(mix);
      shuffleCounter = 0;
      removeDisabled();
    }
  } else {
    pickRandomCups();
  }
}

function addDisabled() {
  let add = document.getElementsByClassName('sewingThimble');
  for (let i = 0; i < add.length; i++) {
    console.log('add[i] before setting attr:', add[i]);
    add[i].setAttribute('disabled', 'disabled');
    console.log(add[i]);
  }
}

function removeDisabled() {
  let removed = document.getElementsByClassName('sewingThimble');
  for (let i = 0; i < removed.length; i++) {
    removed[i].removeAttribute('disabled');
    console.log(removed[i]);
  }
}

function selectThimble(x) {
  addDisabled();

  let selectedThimble = document.getElementById(`${x}`);
  let winningThimble = document.getElementById(`cup${winning}`);
  let ball = document.getElementById('thimbleBall');

  ball.setAttribute('Class', `thimbleBallPosition${winning}`);
  selectedThimble.classList.add('thimbleUp');

  setTimeout(function () {
    selectedThimble.classList.remove('thimbleUp');
    winningThimble.classList.remove('thimbleUp');

    document.getElementById('playButton').style.display = 'block';
    resetThimbClass();
  }, 500);
}

function resetThimbClass() {
  document
    .getElementById('cup0')
    .setAttribute('Class', 'sewingThimble thimble0');
  document
    .getElementById('cup1')
    .setAttribute('Class', 'sewingThimble thimble1');
  document
    .getElementById('cup2')
    .setAttribute('Class', 'sewingThimble thimble2');
}
