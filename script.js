const startButton = document.querySelector(".task-pacer-start");
// const pauseButton = document.querySelector(".task-pacer-pause");
const timeDisplay = document.querySelector(".task-pacer-time");
const sessionCountDisplay = document.querySelector(".task-pacer-session-count");
// const progressCircle = document.querySelector(".task-pacer-progress");

let timer;
let sessionCount = 0;
let timeLeft = 25 * 60;
let breakTime = 5 * 60;
let isBreak = false;
let isPaused = true;

function updateTimeDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateProgress() {
    let totalSeconds = isBreak ? breakTime : 25 * 60;
    let progress = (timeLeft / totalSeconds) * 1000;
    // progressCircle.style.strokeDasharray = `${progress} 1000`;
    // progressCircle.style.strokeDashOffset = `${progress} 1000`;

}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;

        if (timeLeft < 0) {
            isBreak = !isBreak;
            timeLeft = isBreak ? breakTime : 25 * 60;

            if (!isBreak) {
                sessionCount++;
                sessionCountDisplay.textContent = `Session: ${sessionCount}`;
            }
        }

        updateTimeDisplay();
        updateProgress();
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

// startButton.addEventListener("click", () => {
//     if (isPaused) {
//         startTimer();
//         startButton.textContent = "Resume";
//         // pauseButton.style.display = "inline-block";
//     }
//     isPaused = false;
// });

// pauseButton.addEventListener("click", () => {
//     if (!isPaused) {
//         pauseTimer();
//         startButton.textContent = "Resume";
//     }
//     isPaused = true;
// });

updateTimeDisplay();
updateProgress();

  

