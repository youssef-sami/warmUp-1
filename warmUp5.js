// 1-Write a function that takes a string as an input and returns the reverse of each letter followed by a number starting from zero(solve it using while loop).
//     reverseStr('hello'); "o1l2l3e4h"
function reverseStr(strP){
var temp;
var str = strP.split("");
for(var i = 0; i < str.length / 2; i++){
	temp = str[i];
	str[i] = str[ (str.length - 1) - i] + i;
	str[ (str.length - 1) - i] = temp;

}
str = str.join("")
return str;
}
// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]
// 3-write a function that take array if numbers and returns array of all the prime numbers in that array.
// prime([29,19,1,17,3,13,10]) ==> [29,19,17,13]
