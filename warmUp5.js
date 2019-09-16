// 1-Write a function that takes a string as an input and returns the reverse of each letter followed by a number starting from zero(solve it using while loop).
//     reverseStr('hello'); "o1l2l3e4h"
First attempt: 

function reverseStr(string) {
  // reverse the string
  var revStr = [];
  var str = string.split('');
  var i = 0;
  while (i < string.length) {
    var tmpChar = str.pop();
    revStr.push(tmpChar);
    i++;
  }
    
    var tmpStr =[];
    var j =0;
    while (j < string.length) {
      tmpStr.push(revStr[j] + j);
      j++;
    }
    var newRev = tmpStr.join('');
    console.log(newRev);
}


Second attempt: 

function reverseStr(str) {
  splitStr = str.split('')
  splitStr = splitStr.reverse();
  for (i = 0; i < splitStr.length - 1; i++) {
    splitStr[i] = splitStr[i]+ i;
  }
  revStr = splitStr.join('');
  console.log(revStr);
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// eg=['hi','hello','welcome','hy'] == > ["hi","hy"]
function sortArray(array) {
 var strLength = {
   one: [],
   two: [],
   three: [],
   four: [],
   five: [],
   other: []
 }
 for (i = 0; i < array.length; i++) {
   if (array[i] === 1) {
     strLength['one'].push(array[i]);
   } else if (array[i] === 2) {
     strLength['two'].push(array[i]);
   } else if (array[i] === 3) {
     strLength['three'].push(array[i]);
   } else if (array[i] === 4) {
     strLength['four'].push(array[i]);
   } else if (array[i] === 5) {
     strLength['five'].push(array[i]);
   } else {
     strLength['other'].push(array[i]);
   }
 }
//notworking



// 3-write a function that take array if numbers and returns array of all the prime numbers in that array.
// prime([29,19,1,17,3,13,10]) ==> [29,19,17,13]

function isPrime(number) {
    for(var i = 2; i < number; i++) {
        if(number % i === 0) {
            return false;
        }
    }
    return number > 1;
}

function prime(array) {
  var primeArray=[];
  for (var i = 0; i < array.length; i++) {
    if (isPrime(array[i])) {
      primeArray.push(array[i]);
    } else {
      continue;
    }
  }
  return primeArray;
}