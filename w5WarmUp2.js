//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
function Student(name, dateOfBirth, gender, age){
	var student = {}
	student.name = name;
	student.dateOfBirth = dateOfBirth;
	student.gender = gender;
	student.age = age;
	student.infoOfStudent = infoOfStudent;
	student.sortAgeOfStudents = sortAgeOfStudents;
	student.returnGender = returnGender;
	return student;
}
//Create an array and fill it with 5 students
var student1 = Student ("Yara","1/2/1994","female",24);
var student2 = Student ("Tas","1/10/1994","female",24);
var student3 = Student ("Mays","8/2/1992","female",26);
var student4 = Student ("Sara","1/2/1994","female",29);
var student5 = Student ("Amal","2/6/1993","female",25);
var arrayOfStudents=[student1, student2, student3, student4, student5];
//Create a function that takes a student as parameter and 
//print out the details of the student
var infoOfStudent =function(student){
	return "Name: " + student.name + "\n date Of Birth "+student.dateOfBirth 
	+ "\ngender : "+student.gender+"\n Age "+student.age;
}
//Create a function that takes the array of students and sort them out 
//based on age (younger-to-older)
var sortAgeOfStudents = function (arrayOfStudents){
	var arrayOfAges=[]
	for (var i = 0; i < arrayOfStudents.length; i++) {
		arrayOfAges.push(arrayOfStudents[i].age)
	}
	return arrayOfAges.sort();
}
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed
var returnGender = function(arrayOfStudents,gender){
	var array=[]
	for(var i = 0 ; i < arrayOfStudents.length ; i++){

		if((arrayOfStudents[i].gender).startsWith(gender)){
			array.push(arrayOfStudents[i])
		}
	}
	return array;
}
