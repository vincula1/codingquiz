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
        timeLeft--;
        if (timeLeft < 0) timeLeft = 0;
        timerDisplay.textContent = 'Time: ' + timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerId);
            endQuiz();
        }
    }, 1000);
}


function endQuiz() {
    clearInterval(timerId);
    questionBox.style.display = 'none';
    saveScore(timeLeft);
    showScore(timeLeft);
}

function saveScore(score) {
    localStorage.setItem('quizScore', score);
}

function showScore(score) {
    const scoreDisplay = document.getElementById('score-display');
    scoreDisplay.textContent = `All done!\nYour final score is ${score}`;
    scoreDisplay.style.display = 'block'; 
}