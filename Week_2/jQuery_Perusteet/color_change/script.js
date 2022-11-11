"use strict";

$(document).ready(function () {
  $("#change-color-btn").click(function () {
    $("div.box-1").attr("style", "background: red !important");
    $("div.box-2").attr("style", "background: yellow !important");
    $("div.box-3").attr("style", "background: brown !important");
  });
});
