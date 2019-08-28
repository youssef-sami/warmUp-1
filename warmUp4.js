// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
function fiveLessThanSeven() {
if(5<7) return true
}
// 2-Use a conditional operator in which If the variable age is a value below 18 and the variable type is "male",
function youngOrOld (obj) {
	var voteable="";
	// first to check if the type is male
	if(obj.type == "male") {
		// then check the age
		if (obj.age <18) {
			voteable= "Too young";
		} else {
			voteable= "Old enough";
		}

	} else {
		// this means the type is not male
	      voteable = "It's only for males!"
	}
	 
		return voteable;
}
//the value of the variable voteable should be "Too young", otherwise the value of voteable should be "Old enough".

