
//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed

function Student(name, birthDate, gender, age) {
  return {
    name: name,
    birthDate: birthDate,
    gender: gender,
    age: age
  };
}

studentA =  {
  name: 'maha',
  birthDate: '2/9/2000',
  gender: 'female',
  age: 22
};
studentB =  {
  name: 'mona',
  birthDate: '3/5/2000',
  gender: 'female',
  age: 29
};
studentC =  {
  name: 'emad',
  birthDate: '23/5/2000',
  gender: 'male',
  age: 25
};
studentD =  {
  name: 'abeer',
  birthDate: '5/9/2000',
  gender: 'female',
  age: 22
};
studentE =  {
  name: 'khaled',
  birthDate: '2/11/2000',
  gender: 'male',
  age: 19
};

var students = [studentA, studentB, studentC, studentD, studentE];

function studentInfo(student){
  console.log("student name is : " + student.name);
  console.log("student birth Date is : " + student.birthDate);
  console.log("student gender is : " + student.gender);
  console.log("student age is : " + student.age);

}

studentInfo(studentD);

function sortStudentsAge(studentsArr) {
  var sorted = [studentsArr[0]];
     
  for(var i = 1; i < studentsArr.length; i++) {
    if (studentsArr[i].age <= studentsArr[i-1].age){
      sorted.unshift(studentsArr[i]);
    } else {
      sorted.push(studentsArr[i]);
    }
  }
  
  return sorted;
}

console.log(sortStudentsAge(students));

function getStudentsBasedOnGender(studentsArr,gender) {
  var fullGender = (gender === 'M')?'male':'female';
  return studentsArr.filter(function(student){
    return student.gender === fullGender;
  });
}

console.log(getStudentsBasedOnGender(students,'F'));




