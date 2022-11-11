"use strict";

// jQuery
$(document).ready(function () {
  // Mouseenter
  $(".btn1").mouseenter(function () {
    $(".toggle1").slideToggle("slow");
  });

  // Mouseleave
  $(".toggle1").mouseleave(function () {
    $(".toggle1").slideToggle("slow");
  });

  // on click
  $(".btn1").click(function () {
    $(".toggle1").slideToggle("slow");
  });
  $(".btn2").click(function () {
    $(".toggle2").slideToggle("slow");
  });
  $(".btn3").click(function () {
    $(".toggle3").slideToggle("slow");
  });
});
