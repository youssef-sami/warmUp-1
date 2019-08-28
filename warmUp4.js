// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
// 2-Use a conditional operator in which If the variable age is a value below 18 and the variable type is "male", 
//the value of the variable voteable should be "Too young", otherwise the value of voteable should be "Old enough".

function less(num1 , num2){
	if (num1 < num2){
		return true;
	}
}
// this function will return true when i enter num1 as 5 and num2 as 7 through the command return true after checking the if statement and usinf the operator less than (<)



function legalAge(){
	var age = 17;
	var type = "male";
	if (age < 18 && type === "male"){
		return "too young";
	} else {
		return "Old enough";
	}
}


// this function has two variables one for the age and the other for the gender or the type and then checks through if statement for the required conditions so the conditional operator is (if statement) 