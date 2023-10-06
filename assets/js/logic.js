/* Hides and shows certain elements when the start button is clicked */

document.getElementById('startbutton').addEventListener('click', function() {
    document.getElementById('question-box').style.display = 'flex';
    document.getElementById("hometitle").style.display = 'none';
    document.getElementById("homebio").style.display = 'none';
    document.getElementById("startbutton").style.display = 'none';
    startButton.style.display = 'none';
    questionBox.style.display = 'block';
    startTimer();

    setNextQuestion();
});

/* Makes the timer work and ends the quiz if reaches 0 */

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

/* Hides question box and displays final score */

function endQuiz() {
    clearInterval(timerId);
    questionBox.style.display = 'none';
    const scoreDisplay = document.getElementById('score-display');
    scoreDisplay.textContent = `All done!\nYour final score is ${timeLeft}`;
    scoreDisplay.style.display = 'block'; 
    console.log("Quiz ended!");
    document.getElementById('submit-score').style.display = 'block';
}

/* Saves the score in local storage */

function saveScore(score) {
    localStorage.setItem('quizScore', score);
}

/* Function to display the score after */

function showScore(score) {
    const scoreDisplay = document.getElementById('score-display');
    scoreDisplay.textContent = `All done!\nYour final score is ${score}`;
    scoreDisplay.style.display = 'block'; 
}

/* Function to submit the score, and validity with initials */

document.getElementById('submit-initials').addEventListener('click', function() {
    let initials = document.getElementById('initials').value;
    if (initials === "" || initials.length != 2) {
        alert("Has to be 2 initials");
        return;
    }

    let highscores = JSON.parse(localStorage.getItem('highscores') || "[]");
    highscores.push({ initials: initials, score: timeLeft });
    highscores.sort((a, b) => b.score - a.score);
    localStorage.setItem('highscores', JSON.stringify(highscores));
    window.location.href = 'assets/highscores.html';
});
