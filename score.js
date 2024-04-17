console.log(`
Q - Students +2
W - Staff +2
A - Students -2 (If you make a mistake)
S - Staff -2 (If you make a mistake)
`);

let score1display = document.getElementById("score1");
let score2display = document.getElementById("score2");

let reset = document.getElementById("resetButton");

let score1 = 0;
let score2 = 0;

reset.addEventListener("click", (event) => {
  score1 = 0;
  score2 = 0;
  updateDisplay();
});

document.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "q":
      increaseScore(1, 2);
      break;
    case "w":
      increaseScore(2, 2);
      break;
    case "a":
      increaseScore(1, -2);
      break;
    case "s":
      increaseScore(2, -2);
      break;
  }
});

function updateDisplay() {
  score1display.textContent = score1;
  score2display.textContent = score2;
}

function increaseScore(side, value) {
  if (side == 1) {
    score1 += value;
  } else {
    score2 += value;
  }
  updateDisplay();
}
