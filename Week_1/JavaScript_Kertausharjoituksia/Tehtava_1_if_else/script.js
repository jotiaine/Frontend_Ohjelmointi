"use strict";

const btnEl = document.getElementById("btn");

const tulostaNopeus = function (tuuliasteikko) {
  alert(`Nyt on ${tuuliasteikko}`);
};

btnEl.addEventListener("click", () => {
  const tuulenNopeus = prompt("Mikä on tuulennopeus m/s?");
  const isNumber = isNaN(tuulenNopeus);
  if (!isNumber) {
    if (tuulenNopeus >= 33) {
      tulostaNopeus("hirmumyrskyä");
    } else if (tuulenNopeus >= 21) {
      tulostaNopeus("myrskyä");
    } else if (tuulenNopeus >= 14) {
      tulostaNopeus("kovaa tuulta");
    } else if (tuulenNopeus >= 8) {
      tulostaNopeus("navakkaa tuulta");
    } else if (tuulenNopeus >= 4) {
      tulostaNopeus("kohtalaista tuulta");
    } else if (tuulenNopeus >= 1) {
      tulostaNopeus("heikkoa tuulta");
    } else if (tuulenNopeus == 0) {
      tulostaNopeus("tyyntä");
    } else {
      alert("error");
    }
  } else {
    alert("Syöta numero");
  }
  return tuulenNopeus;
});
