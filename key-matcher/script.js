document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector("span");
  const colorChanger = document.querySelector(".key-container");
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const letterChose = () => {
    let index = Math.floor(Math.random() * 26);
    text.textContent = alphabets[index];
  };

  const backgroundChanger = (boleanVal) => {
    if (boleanVal === true) {
      colorChanger.style.backgroundColor = "darkgreen";
      setTimeout(() => {
        colorChanger.style.backgroundColor = "#313131"; // back to default
      }, 500);
    }

    if (boleanVal === false) {
      colorChanger.style.backgroundColor = "red";
      setTimeout(() => {
        colorChanger.style.backgroundColor = "#313131"; // back to default
      }, 500);
    }
  };

  document.addEventListener("keydown", (e) => {
    let inputKey = e.key.toUpperCase();
    let keyToBeMatch = text.textContent;
    if (inputKey == keyToBeMatch) {
      backgroundChanger(true);
      letterChose();
    } else {
      backgroundChanger(false);
    }
  });
});
