// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here


function fullName(first,last){
	return first+ " "+ last;
}

function multipleOf3(num){
   if (num%3 === 0){
   	return num "  is not a multiple of 13";
   }
   else return num + "  is not a multiple of 13";

}

function averageOfAges(array){
	 var total = 0;
  for (var i = 0; i < array.length; i++) {
    
    total += array[i];
  }
  
  return total / array.length;
}

function yearsToSeconds(years) {
  
  return years *365* 24 * 60 * 60;
}

