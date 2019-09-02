// 1-Define a function called myTrueFun that returns true whenever its called.


function myTrueFun(){
	return true;
}


// 2-complete the following color function in which returns true if type of the input is string and returns
//     false otherwise.
    function isString(input){
    if(typeof(input) =="string"){	
    		return true;
    	}
    	return false;

    }


// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.
function number(num){
	if (num % num ===0 ) && (num % 1 === 0 ){
		return "prime";

	}
	return "not prime";
}
// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not

function multi(num1,num2){
	if (num1===num2){
		return true;
	}
	return false;
}
