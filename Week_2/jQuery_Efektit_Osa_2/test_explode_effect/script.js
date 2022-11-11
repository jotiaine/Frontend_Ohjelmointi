"use strict";

$(document).ready(function () {
  $(".btn-hide").click(function () {
    $(".box").hide("explode");
  });
  $(".btn-show").click(function () {
    $(".box").show("explode");
  });
  $(".btn-toggle").click(function () {
    $(".box").toggle("explode", { pieces: 30 }, "500");
  });
});
