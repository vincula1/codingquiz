const questionbank = [
    {
        question: 'Inside which element do you put JavaScript?',
        answers: [
            { text: '<var>', correct: false},
            { text: '<script>', correct: true},
            { text: '<section>', correct: false},
            { text: '<code>', correct: false},
        ]
    },

    {
        question: 'How do you write "Hello W3docs" in an alert box?',
        answers: [
            { text: 'alertBox("Hello W3docs");', correct: false},
            { text: 'alert("Hello W3docs");', correct: true},
            { text: 'msg("Hello W3docs");', correct: false},
            { text: 'modal("Hello W3docs");', correct: false},
        ]
    },

    {
        question: 'Which is the correct way to write a comment in JavaScript?',
        answers: [
            { text: '{# ... #}', correct: false},
            { text: '<!--- .... ---!>', correct: false},
            { text: '// ....', correct: true},
            { text: '\\ ...', correct: false},
        ]
    },

    {
        question: 'Which of the following is the correct syntax to redirect a URL using JavaScript?',
        answers: [
            { text: "document.location='http://www.google.com';", correct: false},
            { text: "navigator.location='http://www.google.com';", correct: false},
            { text: "window.location='http://www.google.com';", correct: true},
            { text: "browser.location='http://www.google.com';", correct: false},
        ]
    },

    {
        question: 'Which one of the following is correct?',
        answers: [
            { text: 'i =+ 1;', correct: false},
            { text: 'i += 1;', correct: true},
            { text: 'i = i++1;', correct: false},
            { text: '+i+;', correct: false},
        ]
    },

    {
        question: 'How do you open a confirm window in JavaScript?',
        answers: [
            { text: 'confirm()', correct: true},
            { text: 'location.confirm()', correct: false},
            { text: 'window.open_confirm()', correct: false},
            { text: 'window.new_confirm()', correct: false},
        ]
    },

    {
        question: 'How do you write anything into the web page in JavaScript?',
        answers: [
            { text: 'window.write(...)', correct: false},
            { text: 'document.write(...)', correct: true},
            { text: 'window.page.write(...)', correct: false},
            { text: 'document.page.write(...)', correct: false},
        ]
    },

    {
        question: 'How do you create a new function in JavaScript?',
        answers: [
            { text: 'new.function() {}', correct: false},
            { text: 'function myFunction() {}', correct: true},
            { text: 'function:myFunction() {}', correct: false},
            { text: 'function = myFunction() {}', correct: false},
        ]
    },

    {
        question: 'How do you create a JavaScript array?',
        answers: [
            { text: 'var fruits = "banana", "apple", "peach";', correct: false},
            { text: 'var fruits = ["banana", "apple", "peach"];', correct: true},
            { text: 'var fruits = (1:"banana", 2:"apple", 3:"peach");', correct: false},
            { text: 'var fruits = 1 = ("banana"), 2 = ("apple"), 3 = ("peach");', correct: false},
        ]
    },

    {
        question: 'Which of the following is the correct way to write an array?',
        answers: [
            { text: 'let fruits = new Array(1:"apple",2:"peach",3:"banana");', correct: false},
            { text: 'let fruits = new Array:1=(" apple ")2=("peach")3=("banana");', correct: false},
            { text: 'let fruits = new Array("apple ","peach","banana");', correct: true},
            { text: 'let fruits = new Array="apple","peach","banana";', correct: false},
        ]
    },

    {
        question: 'Which of the following is used to identify the array?',
        answers: [
            { text: '=== aaa', correct: false},
            { text: 'typeof aaa', correct: true},
            { text: 'isarrayType() aaa', correct: false},
            { text: '== aaa', correct: false},
        ]
    },

    {
        question: 'How do you round the number 5.35 to the nearest integer?',
        answers: [
            { text: 'rnd(5.35)', correct: false},
            { text: 'Math.rnd(5.35)', correct: false},
            { text: 'round(5.35)', correct: false},
            { text: 'Math.round(5.35)', correct: true},
        ]
    },

    {
        question: 'How do you open a new window with JavaScript?',
        answers: [
            { text: 'window.open(...);', correct: true},
            { text: 'window.new(...);', correct: false},
            { text: 'open(new window());', correct: false},
            { text: 'window.open_new(...);', correct: false},
        ]
    },

    {
        question: 'Which of the following events occurs when the user clicks on an HTML element?',
        answers: [
            { text: 'onchange', correct: false},
            { text: 'onmouseover', correct: false},
            { text: 'onmouseclick', correct: false},
            { text: 'onclick', correct: true},
        ]
    },

];

let QuestionIndex = 0;
const startButton = document.getElementById('startbutton');
const questionBox = document.getElementById('question-box');
const questionText = document.getElementById('question-text');
const resultGif = document.getElementById('gif');
const options = Array.from(document.getElementsByClassName('option'));

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    startButton.style.display = 'none';
    questionBox.style.display = 'block';
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(questionbank[QuestionIndex]);
}

function showQuestion(question) {
    questionText.innerText = question.question;
    question.answers.forEach((answer, index) => {
        options[index].innerText = answer.text;
        options[index].dataset.correct = answer.correct;
    });
}

function handleAnswer(isCorrect) {
    if (isCorrect) {
        resultGif.src = 'https://media.tenor.com/YkKE5urfBMAAAAAd/mihoyo-genshin.gif'; 
    } else {
        resultGif.src = 'https://media.tenor.com/4aANRMq9IiEAAAAC/mihoyo-genshin-impact-genshinimpact-keqing.gif';
    }

    resultGif.style.display = 'block';

}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    handleAnswer(correct);
    
    if (!correct) {
        timeLeft = Math.max(0, timeLeft - 10);
        timerDisplay.textContent = 'Time: ' + timeLeft;
    }

    if (QuestionIndex < questionbank.length - 1) {
        QuestionIndex++;
        setNextQuestion();
    } else {
        questionBox.style.display = 'none';
    }
}

options.forEach(button => {
    button.addEventListener('click', selectAnswer);
});
