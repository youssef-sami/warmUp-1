// 4. Create a function in the JS file that takes a number from the first 
//and the third text fields and takes (+, -, *, /) from the second text field, then it calculates the operation 
//and changes the headline to the result.

var num1;
var num2;
var operation;
var result ;


$("#calculate").on('click', function(){
	 num1 = parseInt($('#num1').val());
	 num2 = parseInt($('#num2').val());
	 operation = $('#operation').val();

	switch (operation) {
 	case '+':
 		result = num1 + num2;
    	break;
  	case '-':
  		result = num1 - num2;
  		break;
  	case '*':
  		result = num1 * num2;
    	break;
    case '/':
    	result = num1 / num2;
    	break;
  	default:
  		result = 'Please enter correct operation!'
}

	 $('#result').text(num1 + ' ' + operation + ' ' + num2 + ' = ' + '  ' + result);
})		