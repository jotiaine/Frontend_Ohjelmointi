"use strict";

const boxEl = document.getElementById("box");
const btnEl = document.getElementById("btn-start");
const btnRgbaEl = document.getElementById("btn-rgba");

let randomNumber1;
let randomNumber2;
let randomNumber3;
let randomNumberAlpha;

let askedColor1;
let askedColor2;
let askedColor3;
let askedColorAlpha;

// Render box bg-color randomly
function renderBoxBgColor(num1, num2, num3, alpha) {
  boxEl.style.background = `rgba(${num1},${num2},${num3},${alpha})`;
  return;
}

function changeBoxColorRandomly() {
  randomNumber1 = Math.floor(Math.random() * 255) + 1;
  randomNumber2 = Math.floor(Math.random() * 255) + 1;
  randomNumber3 = Math.floor(Math.random() * 255) + 1;
  randomNumberAlpha = Math.random().toFixed(1);

  renderBoxBgColor(
    randomNumber1,
    randomNumber2,
    randomNumber3,
    randomNumberAlpha
  );
  return;
}

btnEl.addEventListener("click", function () {
  changeBoxColorRandomly();
});

// Render box bg-color manually
function askColors() {
  askedColor1 = prompt("First number: Input a number between 0-255:");
  askedColor2 = prompt("Second number: Input a number between 0-255:");
  askedColor3 = prompt("Third number: Input a number between 0-255:");
  askedColorAlpha = prompt("Alpha number: Input a number between 0-1:");
  return;
}

btnRgbaEl.addEventListener("click", function () {
  askColors();
  renderBoxBgColor(askedColor1, askedColor2, askedColor3, askedColorAlpha);
});
