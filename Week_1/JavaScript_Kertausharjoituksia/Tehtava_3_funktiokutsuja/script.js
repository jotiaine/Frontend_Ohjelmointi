"use strict";

const btnStartEl = document.getElementById("btn-start");
let randomNum;
let answer;

function generateNumbers() {
  randomNum = Math.floor(Math.random() * 10) + 1;
  answer = prompt("Guess a number:");
}

function printCorrect() {
  alert("The answer is correct!");
  return;
}

function checkAnswer() {
  generateNumbers();
  let isCorrect = false;

  while (isCorrect !== true) {
    if (answer == randomNum) {
      isCorrect = true;
      printCorrect();
      return answer;
    } else if (answer === "" || answer === "null") {
      answer = prompt("Input a number(not 'null' or ''):");
    } else if (answer === null) {
      alert("You canceled");
      break;
    } else if (isNaN(answer)) {
      answer = prompt("Input numbers and not letters:");
    } else if (answer < 1 || answer > 10) {
      answer = prompt("Input a number between 1-10:");
    } else {
      answer = prompt("Try again:");
    }
  }
}

btnStartEl.addEventListener("click", function () {
  checkAnswer();
});
