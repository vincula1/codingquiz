document.getElementById('startbutton').addEventListener('click', function() {
    document.getElementById('question-box').style.display = 'flex';
    document.getElementById("hometitle").style.display = 'none';
    document.getElementById("homebio").style.display = 'none';
    document.getElementById("startbutton").style.display = 'none';

    loadQuestion();
});