var questionArr = [
     question1 = {
        question:'This is the first question',
        options: [ 'a','b','c','d'],
        answer: 'a'
    },
     question2 = {
        question:'This is the second question',
        options: [ 'e','f','g','h'],
        answer: 'e'
    }
];

timeLeft = 45;
currentQuestion = 0;
score = 0;

var startButton = document.querySelector('#start-button')
var questionView = document.querySelector('#question-view')
var timerView = document.querySelector('#timerView')
var optionView = document.querySelector('#option-view')

function startGame(){
    startTimer();
    displayQuestion();
    displayOptions();
}
function startTimer(){
    timer = setInterval(function(){
        timeLeft--;
        console.log(timeLeft)
        timerView.innerHTML = timeLeft
    },1000)
}
function displayQuestion(){
questionView.textContent = questionArr[currentQuestion].question
}

function displayOptions(){
    for( i = 0; i<=4; i++){
        var button = document.createElement('button');
        button.textContent = questionArr[i].option[i]
        optionView.appendChild('button')
    }
}



startButton.addEventListener('click', startGame)