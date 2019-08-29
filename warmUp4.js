// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
// 2-Use a conditional operator in which If the variable age is a value below 18 and the variable type is "male", 
//the value of the variable voteable should be "Too young", otherwise the value of voteable should be "Old enough".

function fiveIssmallerSeven(){
	if(5 < 7)
		retyrn true;
}

function ageFunc(age){
		
}




function fun(array){
	debugger;
	var i =0;
	function inner(array , i){
		if(i > array.length)
			return array;
		array[i] = [array[i]];
		i++;
		inner(array, i);
	}
	inner(array , 0)
	return array;
}