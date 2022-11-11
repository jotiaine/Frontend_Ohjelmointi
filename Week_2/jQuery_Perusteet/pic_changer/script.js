"use strict";

// Color variables
let randomNumber1;
let randomNumber2;
let randomNumber3;
let randomAlpha;
let randomRgba;

// Cat pic variables
let catPicArr = ["cat1.jpg", "cat2.jpg", "cat3.jpg"];
let randomPicNum;

// Generate random RGBA
function getRandomRgba() {
  randomNumber1 = Math.floor(Math.random() * 256);
  randomNumber2 = Math.floor(Math.random() * 256);
  randomNumber3 = Math.floor(Math.random() * 256);
  randomAlpha = Math.random().toFixed(1);
  randomRgba = `rgba(${randomNumber1}, ${randomNumber2}, ${randomNumber3}, ${randomAlpha}) !important`;
  return randomRgba;
}

// jQuery
$(document).ready(function () {
  $("#change-color-btn").click(function () {
    $("div.box-1").attr("style", `background: ${getRandomRgba()}`);
    $("div.box-2").attr("style", `background: ${getRandomRgba()}`);
    $("div.box-3").attr("style", `background: ${getRandomRgba()}`);
  });

  // Show pics
  $("#show-pics-btn").click(function () {
    $(".box").show("slow");

    $("#img1").attr("src", `img/cat1.jpg`);
    $("#img2").attr("src", `img/cat2.jpg`);
    $("#img3").attr("src", `img/cat3.jpg`);
  });

  // Hide pics
  $("#hide-pics-btn").click(function () {
    $(".box").hide("slow");

    // Vaihtoehtoinen tapa, ehkä jopa järkevämpi tapa
    // $("img").attr("src", "");
  });

  // Change pics
  // $("#change-pics-btn").click(function () {
  //   function getRandomCatPic() {
  //     randomPicNum = Math.floor(Math.random() * catPicArr.length);
  //     return `${catPicArr[randomPicNum]}`;
  //   }

  //   $("#img1").attr("src", `img/${getRandomCatPic()}`);
  //   $("#img2").attr("src", `img/${getRandomCatPic()}`);
  //   $("#img3").attr("src", `img/${getRandomCatPic()}`);
  // });
});
