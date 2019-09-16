
//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed

function student(name, dateOfBirth, gender, age){
	return {
	name : name,
	dateOfBirth : dateOfBirth,
	gender : gender,
	age : age
	};
}
var student1 = student("Yasmeen",1993,"female",26)
var student2 = student("Yaseen",1992,"male",27)
var student3 = student("Ahmad",1995,"male",24)
var student4 = student("Mays",2000,"female",19)
var student5 = student("Abd",1991,"male",28)
var students =[student1,student2,student3,student4,student5];

 function displayStudent(student){
 	return "Student name is:" + " " +student.name +" dateOfBirth is: " + student.dateOfBirth + " Gender: " + student.gender + " Age:" + student.age;
 }

function minAge(students){
	var min = students[0].age;
	for (var i = 0; i < students.length; i++) {
 	  if (students[i].age < minAge){
 	  	min = students[i].age;
 	  }
 	}
 	  return min;
}


 function sortAge(students){
 	var ageArray = [];
 	for (var i = 0; i < students.length; i++) {
 	ageArray.push(minAge(students));
 }
 	return ageArray;
 }

 function genderF(students,char){
 	for (var i = 0; i < students.length; i++) {
 		if(char === m){
 			
 		}
 	}
 }