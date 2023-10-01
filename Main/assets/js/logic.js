document.getElementById('startbutton').addEventListener('click', function() {
    document.getElementById('question-box').style.display = 'flex';
    document.getElementById("hometitle").style.display = 'none';
    document.getElementById("homebio").style.display = 'none';
    document.getElementById("startbutton").style.display = 'none';
    startButton.style.display = 'none';
    questionBox.style.display = 'block';
    startTimer();

    loadQuestion();
});



let timeLeft = 50;
let timerId;
const timerDisplay = document.querySelector('.timer');

function startTimer() {
    timerId = setInterval(() => {
        if (timeLeft <= 0) clearInterval(timerId);
        timerDisplay.textContent = 'Time: ' + Math.max(0, timeLeft);
        timeLeft--;
    }, 1000);
}