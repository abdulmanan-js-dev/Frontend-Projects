# 🧩 Vanilla JavaScript Mini Projects

[![GitHub Stars](https://img.shields.io/github/stars/abdulmanan-js-dev/Frontend-Projects?style=flat&color=yellow)](https://github.com/abdulmanan-js-dev/Frontend-Projects)
[![GitHub Forks](https://img.shields.io/github/forks/abdulmanan-js-dev/Frontend-Projects?style=flat&color=blue)](https://github.com/abdulmanan-js-dev/Frontend-Projects/fork)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Made With](https://img.shields.io/badge/Made%20with-JavaScript-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

A collection of **clean, modern, and beginner-friendly frontend projects** built using **HTML**, **CSS**, and **Vanilla JavaScript**.  
This repository highlights my understanding of **DOM manipulation**, **browser events**, **modular JavaScript**, and **frontend UI/UX fundamentals**.

Each project is intentionally small, focused, and written with clarity—ideal for portfolio use, interviews, or practicing core frontend concepts.

---

## 📌 Project Showcase

| #   | Project Name                     | Description                                             |
| --- | -------------------------------- | ------------------------------------------------------- |
| 01  | BMI Calculator                   | Health-focused BMI calculator with classification table |
| 02  | Color Changer                    | Interactive background color switcher                   |
| 03  | Digital Clock                    | Live clock with date and weekday                        |
| 04  | Guess Number                     | Number guessing game with hints and attempts            |
| 05  | Key Matcher                      | Keyboard reflex / typing accuracy game                  |
| 06  | Rock-Paper-Scissors              | Classic RPS vs computer with emoji UI                   |
| 07  | Roll Dice Game                   | Two-player dice roll with winner detection              |
| 08  | Whack-a-Mole                     | Timed 3×3 grid click game                               |
| 09  | Modular JavaScript Calculator    | ES Modules-based calculator without `eval()`            |
| 10  | Scroll Indicator (Next.js Style) | Scroll progress bar at the top of the page              |
| 11  | Mouse Circle                     | Click-to-spawn animated, fading circles                 |
| 12  | Random Emoji Generator           | Hover to cycle through random emojis with transitions   |

---

## 🧮 1. BMI Calculator

A simple Body Mass Index calculator that lets users enter their weight and height to compute their BMI and check their health classification.

### ✨ Features

-   Input for **weight (kg)** and **height (cm)**
-   Calculates BMI and displays result to two decimal places
-   Static BMI classification chart for easy interpretation
-   Clean, responsive card-style layout
-   Accessible form with labels and ARIA attributes

### 🧩 Tech Stack

-   **HTML5**
-   **Tailwind CSS**
-   **Vanilla JavaScript (ES6)**

### ▶️ How to Run

```bash
cd 01. bmi-calculator
open index.html
```

---

## 🎨 2. Color Changer

An interactive web app that changes the page background based on the color tile you click. The text color adjusts automatically for readability.

### ✨ Features

-   Multiple color tiles representing different palettes (light & dark)
-   Instant background color updates on click
-   Automatic adjustment of text color for contrast
-   Event delegation for efficient event handling
-   Accessible buttons with `aria-label` attributes

### 🧩 Tech Stack

-   **HTML5**
-   **CSS3**
-   **Vanilla JavaScript (ES6)**

### ▶️ How to Run

```bash
cd 02. color-changer
open index.html
```

---

## 🕒 3. Digital Clock

A live digital clock displaying the current time, AM/PM indicator, date, and weekday.

### ✨ Features

-   Real-time updates using `setInterval`
-   12-hour format with AM/PM
-   Shows full date and day of the week
-   Centered, minimal, and responsive layout
-   Easy-to-read typography and spacing

### 🧩 Tech Stack

-   **HTML5**
-   **CSS3**
-   **Vanilla JavaScript (ES6)**

### ▶️ How to Run

```bash
cd 03. digital-clock
open index.html
```

---

## 🔢 4. Guess Number

A fun number-guessing game where players have limited tries to guess a randomly generated number between 0 and 100.

### ✨ Features

-   Random number generation using `Math.random()`
-   Input validation for range (0–100)
-   Feedback messaging: “Too high”, “Too low”, or “Correct”
-   Displays remaining attempts and previously guessed numbers
-   Dynamic reset button to start a new game
-   Accessible status messages using `aria-live="polite"`

### 🧩 Tech Stack

-   **HTML5**
-   **CSS3**
-   **Vanilla JavaScript (ES6)**

### ▶️ How to Run

```bash
cd 04. guess-number
open index.html
```

---

## ⌨️ 5. Key Matcher

A typing reflex game that shows a random letter — the player must press the matching key on their keyboard.

### ✨ Features

-   Random letter generation from A–Z
-   Listens to keyboard events with `keydown`
-   Validates key input against the displayed character
-   Visual feedback (e.g. background flashes) for correct/incorrect keys
-   Ignores non-letter keys for cleaner gameplay
-   Simple, centered circular UI

### 🧩 Tech Stack

-   **HTML5**
-   **CSS3**
-   **Vanilla JavaScript (ES6)**

### ▶️ How to Run

```bash
cd 05. key-matcher
open index.html
```

---

## ✊📄✂️ 6. Rock Paper Scissors

Play the classic Rock–Paper–Scissors game against the computer in a clean, emoji‑based UI.

### ✨ Features

-   Player selects Rock, Paper, or Scissors via buttons
-   Computer choice generated randomly
-   Displays choices and final result (Win / Lose / Tie)
-   Automatically resets state after each round
-   Modern dark theme with emoji icons
-   Simple game logic that’s easy to read and extend

### 🧩 Tech Stack

-   **HTML5**
-   **CSS3**
-   **Vanilla JavaScript (ES6)**

### ▶️ How to Run

```bash
cd 06. rock-paper-scissor
open index.html
```

---

## 🎲 7. Roll Dice Game

A two-player dice game where each player rolls once; the higher number wins.

### ✨ Features

-   Random dice roll (1–6) for each player
-   Displays both dice values on the screen
-   Automatically determines and displays the winner
-   Handles tie conditions gracefully
-   Disables roll buttons after the round to prevent re-rolling
-   Simple, responsive layout for desktop and mobile

### 🧩 Tech Stack

-   **HTML5**
-   **CSS3**
-   **Vanilla JavaScript (ES6)**

### ▶️ How to Run

```bash
cd 07. roll-dice-game
open index.html
```

---

## 🕹️ 8. Whack-a-Mole

A timed clicking game where moles (emojis) appear randomly in a 3×3 grid. Players click them to score before time runs out.

### ✨ Features

-   3×3 grid with random mole spawns using intervals
-   Configurable game duration (e.g., 30 seconds)
-   Live score tracking and display
-   Start button disabled during an active game
-   Visual indication for active “mole” cells
-   Responsive grid using CSS for different screen sizes

### 🧩 Tech Stack

-   **HTML5**
-   **CSS3**
-   **Vanilla JavaScript (ES6)**

### ▶️ How to Run

```bash
cd 08. whack-a-mole
open index.html
```

---

## 📟 9. Modular JavaScript Calculator

A **fully modular, vanilla JavaScript calculator** built without using `eval()`.  
The calculator separates **UI**, **validation**, **arithmetic**, and **evaluation** across ES Modules for clean, maintainable code.

### ✨ Features

-   Supports basic arithmetic: `+`, `-`, `*`, `/`, `%`
-   Handles multi-digit and decimal numbers
-   Includes AC (All Clear) and DEL (Delete last digit)
-   Prevents invalid input (e.g., consecutive operators)
-   Implements custom expression evaluation logic (no `eval()`)
-   Clean, grid-based button layout for usability

### 🧩 Tech Stack

-   **HTML5**
-   **CSS3**
-   **Vanilla JavaScript (ES6 Modules)**

### 📁 Project Structure

```text
09. calculator/
│
├── index.html
├── style.css
├── app.js                    ← Main controller
└── modules/
    ├── arithmetic-operations.js   ← Arithmetic functions (+, -, *, /, %)
    ├── validators.js              ← Input validation rules
    ├── display.js                 ← Screen updates and formatting
    ├── grouper.js                 ← Groups raw input into tokens
    └── evaluator.js               ← Safely computes final result
```

### ▶️ How to Run

```bash
cd 09. calculator
open index.html
```

---

## 📜 10. Scroll like Next.js

This project demonstrates a simple scroll progress indicator inspired by the experience seen on blogs and documentation sites.

### ✨ Features

-   Thin progress bar fixed at the top of the page
-   Progress fills based on scroll depth
-   Smooth width transition for a polished feel
-   Works across different content heights and screen sizes
-   Lightweight: no external libraries

### 🧩 Tech Stack

-   **HTML5**
-   **CSS3**
-   **Vanilla JavaScript (ES6)**

### 📂 Project Structure

```text
10. scroll-like-Next.js/
│
├── index.html      # Main HTML structure
├── style.css       # Layout and progress bar styling
└── script.js       # Logic to update progress bar on scroll
```

### ▶️ How to Run

```bash
cd 10. scroll-like-Next.js
open index.html
```

---

## 🖱️ 11. Mouse Circle

An interactive project where users can click anywhere on the screen to create animated circles that appear, grow, and fade out.

### ✨ Features

-   Listens for global click events
-   Creates circles at the exact click position
-   Smooth scale and opacity transitions for each circle
-   Random color generation for visual variety
-   Circles are non-blocking and automatically removed from the DOM
-   Lightweight and easy to customize

### 🧩 Tech Stack

-   **HTML5**
-   **CSS3**
-   **Vanilla JavaScript (ES6)**

### 📂 Project Structure

```text
11. mouse-circle/
│
├── index.html   # Root structure
├── style.css    # Body, circle styling, animation
└── script.js    # Click handler and circle lifecycle
```

### ▶️ How to Run

```bash
cd 11. mouse-circle
open index.html
```

---

## 😀 12. Random Emoji

A playful hover interaction where users move the mouse over a large emoji to randomly swap it with another one. On hover, the emoji scales up and becomes colorful.

### ✨ Features

-   Large emoji centered on the viewport
-   Hovering swaps the current emoji with a random one from a predefined list
-   Smooth scale-up animation on hover for a tactile feel
-   Grayscale effect by default, full color on hover
-   Pure CSS transitions and simple JS logic

### 🧩 Tech Stack

-   **HTML5**
-   **CSS3**
-   **Vanilla JavaScript (ES6)**

### 📂 Project Structure

```text
12. random-emoji/
│
├── index.html   # Structure and emoji container
├── style.css    # Layout, grayscale, transitions
└── script.js    # Random emoji selection and hover handler
```

### ▶️ How to Run

```bash
cd 12. random-emoji
open index.html
```

---

## 🗂️ Projects Structure

```text
.
├── 01. bmi-calculator/
├── 02. color-changer/
├── 03. digital-clock/
├── 04. guess-number/
├── 05. key-matcher/
├── 06. rock-paper-scissors/
├── 07. roll-dice-game/
├── 08. whack-a-mole/
├── 09. calculator/
├── 10. scroll-like-Next.js/
├── 11. mouse-circle/
└── 12. random-emoji/
```

---

## 👤 Author

**Abdul Manan**  
Web Developer | JavaScript Enthusiast  
📧 **mananabdul3142@gmail.com**

---

## ⭐ Support

If this repository helped you or you like the projects:

-   ⭐ Star this repo on GitHub
-   🍴 Fork it and build your own versions
-   📨 Reach out for collaboration or feedback

Thank you for checking out my Vanilla JavaScript mini projects!
