function check(){
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var correct = 0;
	
		if (question1 == "No"){
			correct++;
		}
		if (question2 == "Everywhere"){
			correct++;
			
		}
		if (question3 == "No"){
			correct++;
		}
		if (question4 == "To spread the information of the dark one, teach about it and sell information about it until the world know about its true meaning."){
			correct++;
		}
		if (question5 == "No"){
			correct++;
		}
		document.getElementById("number_correct").innerHTML = "You got " + correct + " correct"
		if(correct=>3){
			window.location.replace("joincomplete.html")
		}
		if(correct<3){
			alert("Unfortunately, you failed the test. Please go to our information page to learn more about us. You can try the test again at any time.")
			window.location.replace("more.html")
		}
}