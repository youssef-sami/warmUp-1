// 1-Write a function that takes a string as an input and returns the reverse of each letter followed by a number starting from zero
//(solve it using while loop).
function reversSring(strings)
{
	var array =strings.split("");// convert the string to a array
	var string1= ""; // define a string to creat the reversed string
	count = array.length; // define a counter or index 
	while(count >0){// start while loop 
		string1+=array[--count]+count	//concatenat the letters form the array
	}
	return string1;// return the value
}
//     reverseStr('hello'); "o1l2l3e4h"
// 2-write a function that takes array of strings and returns an array of the strings that have the same length
function SameLength(arrOfString){
	var length=0;
	var resultArray=[];
	var insex=0;
	for(var i = 0; i<arrOfString.length; i++){
		for(var j =0; j<arrOfString.length-1 ; j++){
			if(arrOfString[i].length == arrOfString[j].length){
				resultArray.push(arrOfString[i]);
				resultArray.push(arrOfString[j]);
				arrOfString.splice(j,1)
			}
		}
	arrOfString.splice(i,1)
	}
return resultArray;
}
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]
// 3-write a function that take array if numbers and returns array of all the prime numbers in that array.
function PrimArra(PrimArranum){
	var arrayofPrim =[];
	for(var i = 0 ; i<PrimArranum.length ; i++)
	{
		for(var j = 3 ; i<Math.sqrt((PrimArranum[i]); i++) // iterates between the aqrt of the number 
		{
			if(PrimArranum[i]%j===1)// check's if the number devided by a nuber between the rang it it not give us a remainder
			arrayofPrim.push(PrimArranum[i])
		}
	}
	return arrayofPrim;
}
// prime([29,19,1,17,3,13,10]) ==> [29,19,17,13]

