//start button in header
const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('quiz')
const backgroundContainerElement = document.getElementById('container')
const prizePhotos = document.getElementById('prize')

startButton.addEventListener('click', startGame)

function startGame () {
	startButton.classList.add('hide')
	questionContainerElement.classList.remove('hide')
	backgroundContainerElement.classList.remove('hide')
	prizePhotos.classList.remove('hide')
}

let quizForm = document.getElementById("quiz"); 

quizForm.addEventListener("submit", submitAnswers);


//Set initial score and get user selections
function submitAnswers(event){
	event.preventDefault();
	let total = 10;
	let score = 0;

let q1 = document.forms["quiz"]["q1"].value;
let q2 = document.forms["quiz"]["q2"].value;
let q3 = document.forms["quiz"]["q3"].value;
let q4 = document.forms["quiz"]["q4"].value;
let q5 = document.forms["quiz"]["q5"].value;
let q6 = document.forms["quiz"]["q6"].value;
let q7 = document.forms["quiz"]["q7"].value;
let q8 = document.forms["quiz"]["q8"].value;
let q9 = document.forms["quiz"]["q9"].value;
let q10 = document.forms["quiz"]["q10"].value;

//Validation to ensure all questions are answered
for(i = 1; i<=total; i++) {
	if(eval('q'+i) == null || eval('q'+i) == '') {
		alert('You forgot to answer question ' + i);
		return false;
	}
}

//Put correct answers in an array
let correctAnswers = ["b", "b", "d", "c", "a", "d", "d", "a", "b", "a"];

//check the answers
for(i = 1; i<=total; i++) {
	if(eval('q'+i) ===  correctAnswers[i-1]) {
		score++;
	}
}

//Display results
let quiz=document.getElementById('quiz');
let result=document.getElementById('score');
quiz.style.display="none" //clears the screen before displaying the results
result.textContent=(score);
let prizePic=document.getElementById('prize');
	
if (score<=3){
	result.textContent="You got " + (result.textContent=(score)) + " correct.   Maybe you should stick with cats!";
	prizePic.src = "./images/grumpy-cat-cartoon-drawing-51.jpg";
	console.log(prizePic);
	}
else if (score>3 && score<=7){
	result.textContent="You got " + (result.textContent=(score)) + " correct.   You achieved Best of breed!";
	prizePic.src = "./images/breed.jpg";
	}
	else { result.textContent="You got " + (result.textContent=(score)) + " correct.   You achieved Best in show!";
	prizePic.src = "./images/show.jpg";
}
	quizForm.reset();
	
}
