document.addEventListener("DOMContentLoaded", () => {
    const inputDisplay = document.querySelector("#display");
    const buttonWrapper = document.querySelector(".button-container");

    let entries = [];

    function displayInput(value) {
        if (inputDisplay.value === "0") {
            inputDisplay.value = "";
            inputDisplay.value += value;
        } else {
            inputDisplay.value += value;
        }
    }

    function evaluateResult(e) {
        const inputVal = e.target.textContent;
        entries.push(inputVal);
        displayInput(inputVal);
    }

    buttonWrapper.addEventListener("click", (e) => {
        if (!e.target.closest("button")) return;

        evaluateResult(e);
    });
});
