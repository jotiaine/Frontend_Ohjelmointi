"use strict";

// jQuery
let fadeCounter = 0;

$(document).ready(function () {
  // fadeTo yhdellä painikkeella
  $(".btn-1").click(function () {
    fadeCounter++;
    if (fadeCounter % 2 === 0) {
      $("img").fadeTo("slow", "1");
    } else {
      $("img").fadeTo("slow", "0.5");
    }
  });

  // Toinen tapa: lisätään kaksi fadeTo painiketta
  // ja toteutetaan fadeTo kahdella painikkeella
  $(".btn-2").click(function () {
    fadeCounter++;
    $("img").fadeTo("slow", "0.5");
  });

  $(".btn-3").click(function () {
    fadeCounter++;
    $("img").fadeTo("slow", "1");
  });
});
