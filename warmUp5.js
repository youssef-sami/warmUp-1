// 1-Write a function that takes a string as an input and returns the reverse of each letter followed by a number starting from zero(solve it using while loop).
//     reverseStr('hello'); "o1l2l3e4h"
function reverseStr(string){
  var newStr="";
  var i=1;
  while (i<= string.length){
     newstr= string[i]+ ""+i;
     i++;
  }
return newstr;
}
// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]


function strArray(array){
	var newArray=[];
  for (var i=0; i<= array.length;i+3){
 newArray= array[i];
  }
	return newArray;
}





// 3-write a function that take array if numbers and returns array of all the prime numbers in that array.
// prime([29,19,1,17,3,13,10]) ==> [29,19,17,13]


function isPrime(array){
	var count =0;
	var newArray=[];
	if (array[i]="number"){
		for (var i=2;i<num;i++){
	}
	
		if (num%num && num%0){
			return count++;
		}
		return newArray;
	}
}
