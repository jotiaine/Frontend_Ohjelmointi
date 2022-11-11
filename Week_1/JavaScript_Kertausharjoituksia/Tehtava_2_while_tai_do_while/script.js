"use strict";

/*
Tehtävä 2: while tai do-while
Arvo luku 1-10 välillä, ja anna käyttäjän arvata sitä kunnes käyttäjä arvaa oikean luvun (loop). Ratkaise joko do-whilellä tai whilellä, ja muutoin kuten haluat. Tee tämä ohjelma pyörimään kokonaan esimerkiksi prompt ja alert-ikkunoilla. Voit tehdä kuten aikaisemmassakin tehtävässä pelkän html-sivun, jossa on painike ohjelman käynnistämiseen. Sijoita javascript-koodi kuten haluat 
*/

const btnStartEl = document.getElementById("btn-start");

function checkAnswer() {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  let answer = prompt("Guess a number:");
  let isCorrect = false;

  while (isCorrect !== true) {
    if (answer == randomNum) {
      isCorrect = true;
      alert("The answer is correct!");
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
