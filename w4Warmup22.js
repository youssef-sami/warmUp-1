var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var operator = document.getElementById('op');
var btn = document.getElementById('btn')
var finalResult = document.getElementById('result')

function calculate () {
	var result=0;
	switch (operator.value) {
		case '+' :
		result = Number(num1.value)+Number(num2.value);
		break;

		case '-':
		result = num1.value-num2.value;
		break;

		case '*':
		result = num1.value*num2.value;
		break;

		case '/':
		result = num1.value/num2.value;
		break;

		default:
		result =0;
	}
	finalResult.innerText = result;
}