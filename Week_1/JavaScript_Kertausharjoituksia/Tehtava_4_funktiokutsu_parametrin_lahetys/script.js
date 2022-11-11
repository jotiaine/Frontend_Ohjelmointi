"use strict";

const btnStartEl = document.getElementById("btn-start");
let salary;
let tax;
let netIncome;

function calcNetIncome(salary, tax) {
  netIncome = salary * (1 - tax / 100);
  return netIncome;
}

function askSalary() {
  salary = prompt("Input your salary €:");
  tax = prompt("Input your tax percent %:");

  calcNetIncome(salary, tax);

  alert(`Your net income is: ${netIncome}€`);
  return netIncome;
}

btnStartEl.addEventListener("click", function () {
  askSalary();
});

// Come back to this task and add
// if null then... etc.
