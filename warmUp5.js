// 1-Write a function that takes a string as an input and returns the reverse of each letter followed by a number starting from zero(solve it using while loop).
//     reverseStr('hello'); "o1l2l3e4h"
// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]
// 3-write a function that take array if numbers and returns array of all the prime numbers in that array.
// prime([29,19,1,17,3,13,10]) ==> [29,19,17,13]

function reversestr(string){
    var array= str.split(' ');
    var temp;
    for (var i = 0; i < array.length / 2; i++) {
        temp = array[i];
        array[i] = array[ ( array.length - 1 )-i ]+i;
        array[(array.length-1)-i] =temp;
    }
    return array.join(' ');
    
}

function sameLength(array){
	for( var i=0 ; i<array.length ; i++){
		if(array[0]==array[i])
			return array[i];
	}
	return i+sameLength(string.slice(1));

}

function prime(array){
	var j=0;
	for(var i=2; i<array.length; i++){
		if (array[i]%i===0){
			j++
	}
		return array[i];
}

