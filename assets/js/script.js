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

timeLeft = 100;

var startButton = document.querySelector('#start-button')

function startTimer(){
    console.log('started')
}

startButton.addEventListener('click', startTimer)