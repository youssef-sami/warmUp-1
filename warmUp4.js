// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
var isLess = (5 < 7);
// 2-Use a conditional operator in which If the variable age is a value below 18 and the variable type is "male", 
//the value of the variable voteable should be "Too young", otherwise the value of voteable should be "Old enough".
var age  = 15 ;
var type = "male";
var voteable = "";

if(age < 18 && type === " male"){

	voteable = "Too young";

}else {
	
	voteable = "Old enough";
}