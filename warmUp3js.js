
//this is the warmUp question
// 1-Define a function called myTrueFun that returns true whenever its called.
function myTrueFun(){
	return true;
}
// 2-complete the following color function in which returns true if type of the input is string and returns
//     false otherwise.
    function typeFunc(value){ // declear the ame of the function
    	if(typeof(valu) =="string")// check's if the value type is string or not
    		return true;// returns true if its string
    		return false;// return false if it's not a string  type	
    }
// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.
function isPrime(value){
	if(value =2 || value==3 || value==5 || value==7)
		return true
	if(value%2===1 && value %3===1 && value%5==1 && value%7===1){ // chek if the number can be devided into other numbers 
		return true;
	}
	return false;
}
// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not
function isEqual(num1, num2){
	if(num1 === num2)
		return true
		return false
}