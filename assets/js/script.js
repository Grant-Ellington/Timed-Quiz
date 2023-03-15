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
highScoreArr = [] //add || for getting the current localstorage array

var startButton = document.querySelector('#start-button')
var questionView = document.querySelector('#question-view')
var timerView = document.querySelector('#timerView')
var optionView = document.querySelector('#option-view')
var viewScore = document.querySelector('#viewScore')

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

        if(timeLeft < 0){
            endGame();
        }
    },1000)
}
function displayQuestion(){
questionView.textContent = questionArr[currentQuestion].question
}

function displayOptions(){
    for( i = 0; i<=4; i++){
        var button = document.createElement('button');
        button.textContent = questionArr[currentQuestion].options[i]
        optionView.appendChild(button)
    }

}
 function optionFunction(event){
    event.preventDefault();
    if(event.target.textContent=== questionArr[currentQuestion].answer){
        score++;
    }else{
        score --;
        timeLeft-=10;
    }
    currentQuestion++;
    optionView.innerHTML = "";
    if(currentQuestion>=questionArr.length){
        endGame();
    } 
    displayQuestion();
    displayOptions();
 }
 var button2 = document.createElement('button')
 var input = document.createElement('input');
 
 function endGame(){
    questionView.innerHTML = '';
    var h2El = document.createElement('h2')
    input.setAttribute('placeholder', 'Enter your initials')
    viewScore.appendChild(h2El);
    viewScore.appendChild(input);
    viewScore.appendChild(button2)
    h2El.textContent = 'Your score: '+score;
    button2.textContent = 'Submit';
    

 }
 function submitFunction(event){
    event.preventDefault();

    input.value
    var scoreObj={
        score : score,
        initials: input.value
    }
    highScoreArr.push(scoreObj)
    localStorage.setItem("highScores", highScoreArr)
 }

button2.addEventListener('click', submitFunction)
optionView.addEventListener('click', optionFunction)
startButton.addEventListener('click', startGame)