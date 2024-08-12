let startTime = 0;
let updatedTime = 0;
let difference = 0;
let tInterval;
let running = false;

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const display = document.getElementById('display');

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    if (!running) {
        startTime = new Date().getTime() - difference;
        tInterval = setInterval(getShowTime, 1000);
        running = true;
    }
}

function stopTimer() {
    if (running) {
        clearInterval(tInterval);
        running = false;
    }
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    difference = 0;
    display.innerHTML = `
        <div>00</div>
        <div>00</div>
        <div>00</div>
    `;
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    display.innerHTML = `
        <div>${hours < 10 ? "0" + hours : hours}</div>:
        <div>${minutes < 10 ? "0" + minutes : minutes}</div>:
        <div>${seconds < 10 ? "0" + seconds : seconds}</div>
    `;
}

// Initialize the display to show 00:00:00
resetTimer();
