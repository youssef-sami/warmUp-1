// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
// 2-Use a conditional operator in which If the variable age is a value below 18 and the variable type is "male", 
//the value of the variable voteable should be "Too young", otherwise the value of voteable should be "Old enough".

//Q1
return (5 < 7);

var age;
var valueType;
if (age < 18 && valueType === "male"){
	return true;
}

if (voteable < 18){
	return "Too young";
}else{
	return "Old enough";
}