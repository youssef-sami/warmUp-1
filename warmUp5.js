// 1-Write a function that takes a string as an input and returns the reverse of each letter
// followed by a number starting from zero(solve it using while loop).
//     reverseStr('hello'); "o1l2l3e4h"

function reverse(str){
	var i=0;
	while(i< str.length/2){
		var temp= str[i] + i;
		str[i]=str[str.length -1-i]+ i;
		str[str.length -1-i] = temp;

	}
	return str;
}


// 2-write a function that takes array of strings and returns an array of the strings that have the same length

// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]

function same(arr){
	var result[];
	//var k =0;
	for(var i=0; i<arr.length; i++){
		for(var k=i+1; k<arr.length; k++)
		if(arr[i].length = arr[k].length){
			result.push(arr[i],arr[i+k]);
		}
		
	
	
	}

}
// 3-write a function that take array if numbers and returns array of all the prime numbers in that array.
// prime([29,19,1,17,3,13,10]) ==> [29,19,17,13]


function isPrime(arr){
	var result =[];
	for(var i=0; i< arr.length; i++){
		for(var k =2 ; k<arr[i]/2; i++){
			if(arr[i] == 1 || arr[i] == 2 || arr[i] == 3)
			    result.push(arr[i]);

			if(arr[i]%k !==0)
				result.push(arr[i]);

		}

	}
	return result;
}