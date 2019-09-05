// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
console.log(5 < 7);

// 2-Use a conditional operator in which If the variable age is a value below 18 and the variable type is "male", 
//the value of the variable voteable should be "Too young", otherwise the value of voteable should be "Old enough".
function canVote (age, type) {
  var votable;
  if (type === 'male') {
    if (age < 18) {
      voteable = 'Too young';
    } else {
      voteable = 'Old enough';
    }
  } else {
    voteable = 'That\'s sexist!'
  }
  console.log(voteable);
}