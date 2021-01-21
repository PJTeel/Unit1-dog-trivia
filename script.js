function check() {
	//document.write("Never give up!");
	var c=0;
	var q1=document.quiz.question1.value;
	if (q1=="Terrier Group") {c++}
	var q2=document.quiz.question2.value;
	if (q2=="42") {c++}
	document.write(c)
}
/*var userInput = [];

var answers = ["B"]
//answers[0] = ;

function getCheckedValue (radioName){
	var radios = document.getElementsByName(radioName);
	for(var y=0; y<radios.length; y++)
		if (radios(y).checked) return radios[y].value;
}
function getScore() {
	var score = 0;
	for(var i=1; i<=10; i++) 
	if(getCheckedValue("question"+i) === answers[i]) score += 1;
	return score;
}
	
function returnScore(){
	alert("Your score is: " + getScore()+ "/" + 10);
}

console.log(score);
*/