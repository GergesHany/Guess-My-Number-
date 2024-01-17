"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const change_color = function (color = "red") {
  document.querySelector("body").style.backgroundColor = color;
  document.querySelector(".number").style.color = color;
  // make the word an any button red when the guess is wrong
  document.querySelectorAll(".btn").forEach(function (btn) {
    btn.style.color = color;
  });
};

const reset = function (color = "darkblue") {
  change_color(color);
  document.querySelector("body").style.backgroundColor = "darkblue";
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No number!";
  }

  // when player wins
  if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347"; // make background green

    // change the style of the number
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").backgroundColor = "white";
    document.querySelector(".number").style.color = "#60b347";

    // change the style of the guess
    document.querySelector(".guess").backgroundColor = "white";
    document.querySelector(".guess").color = "#60b347";

    // change the style of every btn
    document.querySelectorAll(".btn").forEach(function (btn) {
      btn.style.backgroundColor = "white";
      btn.style.color = "#60b347";
    });

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      const message = guess > secretNumber ? "📈 Too high!" : "📉   Too low!";
      document.querySelector(".message").textContent = message;

      score--; // decrease the score by 1
      document.querySelector(".score").textContent = score;

      // make background red when the guess is wrong 1 seconds
      change_color();
      setTimeout(function () {
        reset();
      }, 500);
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
      change_color();
    }
  }
});
