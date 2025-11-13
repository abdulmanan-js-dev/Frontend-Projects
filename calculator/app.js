// app.js
import { addition, subtraction, multiplication, division } from "./operations";

const screen = document.querySelector(".screen");
const container = document.querySelector(".button-wrapper");

// --- calculator state ---
let current = ""; // string of digits being typed
let previous = null; // number
let op = null; // '+', '-', '*', '/'
let justEvaluated = false;

const updateDisplay = (text = null) => {
    screen.textContent = text ?? (current || String(previous ?? ""));
};

const isOperator = (v) => v === "+" || v === "-" || v === "*" || v === "/";

const applyOp = (a, b, operator) => {
    switch (operator) {
        case "+":
            return addition(a, b);
        case "-":
            return subtraction(a, b);
        case "*":
            return multiplication(a, b);
        case "/":
            return division(a, b);
        default:
            return b;
    }
};

const handleDigit = (v) => {
    // start fresh after equals
    if (justEvaluated) {
        current = "";
        previous = null;
        op = null;
        justEvaluated = false;
    }
    // prevent multiple decimals
    if (v === "." && current.includes(".")) return;
    current += v;
    updateDisplay();
};

const commitOperator = (nextOp) => {
    const currNum = current === "" ? null : Number(current);

    if (previous === null) {
        // first number being committed
        previous = currNum ?? 0;
    } else if (currNum !== null) {
        // we already had a previous and an operator -> evaluate chain
        previous = applyOp(previous, currNum, op);
    }

    op = nextOp; // set/replace pending operator
    current = ""; // clear input buffer
    justEvaluated = false;
    updateDisplay(String(previous));
};

const handleEquals = () => {
    if (op === null) return; // nothing to compute
    const currNum = current === "" ? previous : Number(current);
    try {
        previous = applyOp(previous, currNum, op);
        current = "";
        op = null;
        justEvaluated = true;
        updateDisplay(String(previous));
    } catch (err) {
        screen.textContent = "Error";
        // reset after showing error
        current = "";
        previous = null;
        op = null;
        justEvaluated = true;
    }
};

// Main click delegation
container.addEventListener("click", (e) => {
    const btn = e.target.closest(".buttons");
    if (!btn) return;

    const value = btn.dataset.value;

    if (value === "=") {
        handleEquals();
    } else if (isOperator(value)) {
        commitOperator(value);
    } else {
        // digits & dot
        handleDigit(value);
    }
});

// initial display
updateDisplay("0");
