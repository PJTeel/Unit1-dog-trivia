let quizForm = document.getElementById("quiz");

quizForm.addEventListener("submit", submitAnswers);
/*
function startQuiz () {
	start.style.display = "none";
	quiz.style.display = "block";

}
*/

//Set initial score and get user selections
function submitAnswers(event){
	event.preventDefault();
	var total = 10;
	var score = 0;

var q1 = document.forms["quiz"]["q1"].value;
var q2 = document.forms["quiz"]["q2"].value;
var q3 = document.forms["quiz"]["q3"].value;
var q4 = document.forms["quiz"]["q4"].value;
var q5 = document.forms["quiz"]["q5"].value;
var q6 = document.forms["quiz"]["q6"].value;
var q7 = document.forms["quiz"]["q7"].value;
var q8 = document.forms["quiz"]["q8"].value;
var q9 = document.forms["quiz"]["q9"].value;
var q10 = document.forms["quiz"]["q10"].value;

//Validation
for(i = 1; i<=total; i++) {
	if(eval('q'+i) == null || eval('q'+i) == '') {
		alert('You forgot to answer question ' + i);
		return false;
	}

}
//Put correct answers in an array
var correctAnswers = ["b", "b", "d", "c", "a", "d", "d", "a", "b", "a"];

//check the answers
for(i = 1; i<=total; i++) {
	if(eval('q'+i) ===  correctAnswers[i-1]) {
		score++;
	}
}
//Display results
//alert('You scored ' +score+ ' out of ' +total);
	var quiz=document.getElementById('quiz');
	var result=document.getElementById('score');
	quiz.style.display="none" //clears the screen before displaying the results
	result.textContent=(score);

if (score<=3){
	result.textContent="You got " + (result.textContent=(score)) + " correct.   Maybe you should stick with cats!";
	// image("http://getdrawings.com/image/grumpy-cat-cartoon-drawing-51.jpg");
	}
else if (score>3 && score<=7){
	result.textContent="You got " + (result.textContent=(score)) + " correct.   You achieved Best in breed!";
		// document.getElementById(myImg2).src="https://www.stickershoppe.com/mm5/graphics/00000001/BR34.jpg";
	}
	else result.textContent="You got " + (result.textContent=(score)) + " correct.   You achieved Best is show!"
quizForm.reset() 
}



//var cat = document.createElement(url"https://getdrawings.com/image/grumpy-cat-cartoon-drawing-51.jpg");
// var cat = img src(url(http://getdrawings.com/image/grumpy-cat-cartoon-drawing-51.jpg));
// var bestBreed = img src(url(https://www.stickershoppe.com/mm5/graphics/00000001/BR34.jpg));
// var bestShow = img src(url(https://www.rosettesdirect.com/image/cache/catalog/2017/Best-in-Show-600x315.jpg))
