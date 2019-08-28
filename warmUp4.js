// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
function isLess (num1, num2){
	if (num1<num2){
		return true;
	}
	return false;
}
// 2-Use a conditional operator in which If the variable age is a value below 18 and the variable type is "male", 
//the value of the variable voteable should be "Too young", otherwise the value of voteable should be "Old enough".
function isOldVote(age,type){
	if (age < 18 && type === "male"){
		return "Too young";
	}
	return "Old enough";
}