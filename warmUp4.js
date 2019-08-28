// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
function lessThanThree() {
	if(5<7)// condition statmet
		return true;// return true if the contion is true
	return false ;// return false if the condition is not
}
// 2-Use a conditional operator in which If the variable age is a value below 18 and the variable type is "male", 
//the value of the variable voteable should be "Too young", otherwise the value of voteable should be "Old enough".
function voteable(age , gender){
	if(age===undefined || gender===undefined)// if user didnt enter user name or pass it askes him to do that
		return "Plz Enter the age and the gender";// the requet message
	if(age<18 && gender =="male")// if the age is less than 18 and gener is mall
		return "Too young";// return the true contion statment
	return "Old enough";// returns the false contion statment
}

