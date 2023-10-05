window.onload = function() {
    let highscores = JSON.parse(localStorage.getItem('highscores') || "[]");
    let highscoreList = document.getElementById('highscore-list');
    
    highscores.forEach(score => {
        let listItem = document.createElement('li');
        listItem.textContent = `${score.initials}: ${score.score}`;
        highscoreList.appendChild(listItem);
    });

    document.getElementById('restart-button').addEventListener('click', function() {
        window.location.href = '../index.html';
    });
    

    document.getElementById('clear-highscores').addEventListener('click', function() {
        localStorage.removeItem('highscores');
        highscoreList.innerHTML = '';
    });
};
