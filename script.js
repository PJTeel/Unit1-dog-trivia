document.getElementById("quiz").reset();

function check() {
	var c=0;
	var q1=document.quiz.question1.value;
	if (q1=="Terrier Group") {c++}
	var q2=document.quiz.question2.value;
	if (q2=="42") {c++}
		var q3=document.quiz.question3.value;
	if (q3=="195") {c++}
	var q4=document.quiz.question4.value;
	if (q4=="Labrador") {c++}
	var q5=document.quiz.question5.value;
	if (q5=="Greyhound") {c++}
	var q6=document.quiz.question6.value;
	if (q6=="Luna") {c++}
	var q7=document.quiz.question7.value;
	if (q7=="29") {c++}
	var q8=document.quiz.question8.value;
	if (q8=="True") {c++}
	var q9=document.quiz.question9.value;
	if (q9=="False") {c++}
	var q10=document.quiz.question10.value;
	if (q10=="True") {c++}
	//document.write(c)

	var quiz=document.getElementById('quiz');
	var result=document.getElementById('result');
	quiz.style.display="none" //clears the screen before displaying the results
	result.textContent=(c);

if (c<=3){
	result.textContent="You got " + (result.textContent=(c)) + " correct.   Maybe you should stick with cats!"
	}
}

