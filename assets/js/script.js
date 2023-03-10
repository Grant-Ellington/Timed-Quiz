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
console.log(questionArr[0].options)

timeLeft = 45;

var startButton = document.querySelector('#start-button')
var questionView = document.querySelector('#question-view')
var timer = document.querySelector('#timer')
function startTimer(){

    var timeInterval = setInterval(function(){
        if(timeLeft>0){
            timer.textContent = timeLeft;
            timeLeft--;
            for( var i=0; i<questionArr.length; i++) {
                questionView.textContent = questionArr[i].question
            }
        } else{
            console.log('boom');
            clearInterval( timeInterval);
        }

    },1000)
}

startButton.addEventListener('click', startTimer)