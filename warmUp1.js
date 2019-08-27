// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.

// your code is here

// Q1
console.log("Yara" + "Salhi");

//Q2
function isMultipleOf13(num) {
  //We know the number is multiple of another number if the reminder =0
  //so we need to use the Mod opertator
  if (num % 13 == 0) {
    return num + "  is a multiple of 13";
  } else {
    return num + "  is not a multiple of 13";
  }
}

//Q3
function getAvg(arr) {
  //define a total varible that will contain all numbers
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    //add every array element to the total
    total += arr[i];
  }
  console.log(total);
  return total / arr.length;
}

//Q4
function yearsToSeconds(years) {
  //Years*months*days*hours*minutes*seconds
  return years * 12 * 30 * 24 * 60 * 60;
}