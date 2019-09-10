//console.log("hi")
// 4. Create a function in the JS file that takes a number from the first and the third text fields and takes 
//(+, -, *, /) from the second text field, then it calculates the operation and changes the headline to the result.

function oper(num1 , num2 , operation){
	console.log(num1); 
	

	if (operation=="+"){
			console.log("start")
; 
	}else if (operation==='-'){
		return num1 - num2 ; 
	}else if (operation==='*'){
		return num1*num2 ; 
	}else if   (operation==='/'){
		return num1/num2 ; 
	}


}