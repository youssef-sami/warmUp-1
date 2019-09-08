// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
//     reverseStr('hello'); "o1l2l3e4h"
// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]


// Note: I might not be using some of the higher order functions as I haven't reach that yet on the material but 
// I tried my best.
function  reverseStr(str){

  var strArr=str.split('');
  var reversedStrArr=[];
  var i=1;

  while(i !== strArr.length){
    reversedStrArr[i-1]=strArr[strArr.length-i]+i; 
    i++;
  }

  reversedStrArr.push(strArr[0]);
  return reversedStrArr.join('');
}

function getSameLengthStrings(arr) {
  var sameLengthStringsArray=[];

  for (var i = 0; i < arr.length; i++) {
    // if there is alrady a string stored in the same length array
    // then compare the length of other string to it
    if(sameLengthStringsArray.length > 0 ){
  	  if (sameLengthStringsArray[0].length === arr[i].length)  {
  	    sameLengthStringsArray.push(arr[i]);
  	  }
   }
    // get the first two strings that have the same length and store
    // the first one so that we can compare to it 
   for (var j = i+1; j < arr.length; j++ ) {
      if(sameLengthStringsArray.length === 0 ){
  		  if(arr[i].length === arr[j].length ){
         sameLengthStringsArray.push(arr[i]);
        }
      } 
    } 
  }   

  return sameLengthStringsArray;
}

