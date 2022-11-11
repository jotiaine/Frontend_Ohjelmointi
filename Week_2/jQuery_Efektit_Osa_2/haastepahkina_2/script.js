"use strict";

$(document).ready(function () {
  $(".btn-start").click(function () {
    // Fly off start game button

    console.log("sdasd");
    $(".btn-start").fadeOut("slow");

    // Variables
    let dx = 0;
    let dy = 0;
    let ballRadius = 13;
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let x = canvas.width / 2;
    let y = canvas.height - 30;
    getRandomDxDy();
    getRandomXY();

    var circle = { x: canvas.width / 2, y: canvas.height - 30, r: ballRadius };
    var rect = { x: 100, y: 100, w: 30 };
    // Get random dx and dy on click
    function getRandomDxDy() {
      dx = Math.floor(Math.random() * 6) + 1;
      dy = Math.floor(Math.random() * 6) + 1;
    }

    function getRandomXY() {
      x = Math.floor((Math.random() * canvas.width) / 2) + 13;
      y = Math.floor((Math.random() * canvas.height) / 2) + 13;
    }

    // testing
    setInterval(function () {
      collisionCheckCircleRect(circle, rect);

      if (collisionCheckCircleRect(circle, rect)) {
        $(".btn-stop").hide("slow");
      }
    }, 10);

    // Collision check
    function collisionCheckCircleRect(circle, rect) {
      var distx = Math.abs(circle.x - rect.x);
      var disty = Math.abs(circle.y - rect.y);

      if (distx > rect.width / 2 + circle.radius) {
        return false;
      }
      if (disty > rect.height / 2 + circle.radius) {
        return false;
      }

      if (distx <= rect.width / 2) {
        return true;
      }
      if (disty <= rect.height / 2) {
        return true;
      }

      var hypot =
        (distx - rect.width / 2) * (distx - rect.width / 2) +
        (disty - rect.height / 2) * (disty - rect.height / 2);

      console.log(hypot <= circle.radius * circle.radius);
      return hypot <= circle.radius * circle.radius;
    }

    // Draw ball
    function drawBall() {
      ctx.beginPath();
      ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = "blue";
      ctx.fill();
      ctx.closePath();

      // Draw rectangle
      ctx.beginPath();
      ctx.rect(100, 100, 30, 30);
      ctx.stroke();
      ctx.fillStyle = "red";
      ctx.fill();
    }

    // Draw
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();

      if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
      }
      if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
      }

      x += dx;
      y += dy;
    }

    //
    setInterval(draw, 15);
  });

  // Stop button
  $(".btn-stop").click(function () {
    $(".container").fadeOut("slow", function () {
      setTimeout(function () {
        location.reload();
      }, 10);
    });
  });
});
