document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const inputVal = document.querySelector("#input-value");
  const guessedNum = document.querySelector("#guessed-number");
  const leftTries = document.querySelector("#tries");
  const alerts = document.querySelector(".alerts");
  const btn = document.querySelector("#sub-btn");
  const newBtn = document.createElement("button");
  const container = document.querySelector(".container");

  let gameFinish = false;
  let guessedNumArray = [];
  let totalTries = 10;
  let guess = Math.floor(Math.random() * 100) + 1;


  const guessDisplay = (array) => {
    guessedNum.textContent = array.join(", ");
  };

  const clearAlert = () => {
    setTimeout(() => {
      alerts.textContent = "";
    }, 700);
  };

  const inputChecker = (input) => {
    totalTries--;
    leftTries.textContent = totalTries;
    guessedNumArray.push(input);
    guessDisplay(guessedNumArray);

    if (input === guess) {
      alerts.textContent = "🎉 You guessed it right!";
      gameEnd();
    } else if (input > guess) {
      alerts.textContent = "🚀 Too high. Try again!";
      clearAlert();
    } else {
      alerts.textContent = "🚩 Too low. Try again!";
      clearAlert();
    }
  };

  const resetGame = () => {
    gameFinish = false;
    guessedNumArray = [];
    totalTries = 10;
    guess = Math.floor(Math.random() * 100) + 1;

    guessedNum.textContent = "";
    leftTries.textContent = totalTries;
    alerts.textContent = "";
    inputVal.disabled = false;
    inputVal.value = "";
    btn.style.cursor = "pointer";
    newBtn.remove();

  };

  const gameEnd = () => {
    gameFinish = true;
    inputVal.disabled = true;
    btn.style.cursor = "not-allowed";
    newBtn.textContent = "Reset";
    newBtn.id = "reset-btn";
    container.appendChild(newBtn);
    newBtn.addEventListener("click", resetGame);
  };

  const startGame = () => {
    const input = parseInt(inputVal.value, 10);
    inputVal.value = "";

    if (isNaN(input)) {
      alerts.textContent = "⚠️ Please enter a valid number!";
      clearAlert();
      return;
    }

    if (totalTries > 0 && !gameFinish) {
      inputChecker(input);
    } else {
      gameEnd();
    }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    startGame();
  });
});
