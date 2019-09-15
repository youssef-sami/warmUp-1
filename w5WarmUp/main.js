var operateOnNumbers = function (firstNumber, secondNumber, func) {
	return func(firstNumber, secondNumber)
}
var addition = function(x, y) {
	return x + y;
}

var subtraction = function(x, y) {
	return x - y;
}
var multiplication = function(x, y) {
	return x * y;
}

var division = function(x, y) {
	if(y === 0){
		return "Can’t divide by Zero";
	}
	else{
		return x / y;
	}
}
