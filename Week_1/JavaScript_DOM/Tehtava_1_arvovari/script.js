"use strict";

const boxEl = document.getElementById("box");
const btnEl = document.getElementById("btn-start");
let randomNumber1;
let randomNumber2;
let randomNumber3;
let randomNumberAlpha;

function renderColor() {
  boxEl.style.background = `rgba(${randomNumber1},${randomNumber2},${randomNumber3},${randomNumberAlpha})`;
}

function changeBoxColorRandomly() {
  randomNumber1 = Math.floor(Math.random() * 255) + 1;
  randomNumber2 = Math.floor(Math.random() * 255) + 1;
  randomNumber3 = Math.floor(Math.random() * 255) + 1;
  randomNumberAlpha = Math.random().toFixed(1);

  renderColor();
  return;
}

btnEl.addEventListener("click", function () {
  changeBoxColorRandomly();
});
