// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.


 
function gcd( num1, num2) {

	devisors1 = [];
	devisors2 = [];
  for(var i = 0; i<= num1; i++){
  	if (num1%i === 0){
  		devisors1.push(i);

  	}
  }

  for ( var i= 0; i< num2; i++){
  	if (num2%i === 0){
  		devisors2.push(i);

  	}

  }

  var i=0;

  function inner(devisors1, devisors2 ,i){

  	if(i == devisors1.length &&  i == devisors1.length)

  }
  


}


// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.


function sum(num1, num2) {
	var result =0 ;
	var temp = [num1, num2];
	//console.log(temp);
	var i=0; 

    

	function inner(result, temp, i){

		//console.log(result);
        
		if (i === temp.length ){
    	return result;

        } else {

           result = result + temp[i];
           return inner(result, temp, i+1);

        }
    
	}

	return inner(result, temp, i);

}
