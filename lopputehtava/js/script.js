"use strict";

// jQuery
$(document).ready(function () {
  let tries = 0;
  let seconds = 0;
  let pair = 0;

  let bodyEl = $("body");
  let tryAgainEl = document.querySelector(".try-again");
  const gameAreaContainerEl = document.querySelector(".gamearea-container");

  bodyEl.animate(
    {
      opacity: "1",
      left: "0",
    },
    "slow"
  );

  // Start game
  $(".btn-start-game").click(function () {
    // FadeOut starting modal
    $(".btn-modal").fadeOut("fast", function () {
      $(".gamearea-container").animate(
        {
          opacity: "1",
        },
        "slow"
      );
    });

    bodyEl.css("overflow", "auto");

    gameAreaContainerEl.classList.remove("hide");

    const cardList = document.querySelectorAll(".img-card");
    let flipped = false;
    let firstImg;
    let secondImg;
    let lock = false;

    function flip() {
      tries++;
      if (tries % 2 === 0) {
        $(".tries").html(tries / 2);
      }

      if (lock) return;
      if (this === firstImg) return;

      this.classList.add("rotate");

      if (!flipped) {
        flipped = true;
        firstImg = this;

        return;
      }
      secondImg = this;

      checkMatch();
    }

    function checkMatch() {
      let isPair = firstImg.dataset.name === secondImg.dataset.name;

      isPair ? disableImgs() : unflipImgs();
    }

    function disableImgs() {
      pair++;
      if (pair === 15) {
        setTimeout(() => {
          gameAreaContainerEl.classList.add("hide");

          tryAgainEl.classList.remove("hide");
          $(".finalscoreseconds").html(seconds);
          $(".finalscoretries").html(tries);

          $(".again-btn").click(function () {
            location.reload();
          });
        }, 1000);
      }

      firstImg.removeEventListener("click", flip);
      secondImg.removeEventListener("click", flip);

      reset();
    }

    function unflipImgs() {
      lock = true;
      setTimeout(() => {
        firstImg.classList.remove("rotate");
        secondImg.classList.remove("rotate");
        reset();
      }, 1000);
    }

    function reset() {
      [flipped, lock] = [false, false];
      [firstImg, secondImg] = [null, null];
    }

    (function getRandomCards() {
      cardList.forEach((img) => {
        let randomOrd = Math.floor(Math.random() * 30);
        img.style.order = randomOrd;
      });
    })();

    cardList.forEach((img) => img.addEventListener("click", flip));

    // Timer
    setInterval(function () {
      seconds++;
      $(".timer").html(seconds);
    }, 1000);
  });
});
