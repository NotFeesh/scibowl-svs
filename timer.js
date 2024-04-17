let [minutes, seconds] = [0, 0, 0];

let timer = null;
let timerActive = false;

let display = document.getElementById("displayText");

let timerSound = new Audio("alarmsound.mp3");

document.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
  }
});

setup();

function setup() {
  stopTimer();
  timerSound.pause();
  minutes = 15;
  seconds = 0;
  updateScreen();
}

function updateScreen() {
  display.textContent = `${("00" + minutes).slice(-2)}:${("00" + seconds).slice(
    -2
  )}`;
}

function start() {
  if (!timerActive) {
    timerActive = true;
    timer = setInterval(timerLogic, 1000);
  }
}

function stopTimer() {
  if (timerActive) {
    timerActive = false;
    clearInterval(timer);
  }
}

function timerLogic() {
  seconds--;
  if (seconds < 0) {
    seconds = 59;
    minutes--;
    if (minutes < 0) {
      [minutes, seconds] = [0, 0];
      stopTimer();
      timerSound.play();
    }
  }
  updateScreen();
}
