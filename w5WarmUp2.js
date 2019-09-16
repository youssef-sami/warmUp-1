//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed



function Student(name,dateOfBirth,gender,age){
	return{
		name: name,
		dateOfBirth: dateOfBirth,
		gender: gender,
		age: age
	}
}
//Test 

const arr = [];
const student1 = Student("Kareem","28/1/1996","m",23);
const student2 = Student("Ghada","28/1/1996","f",20);
const student3 = Student("Nour","28/6/2000","f",23);
const student4 = Student("Ahmed","30/1/2003","m",30);
const student5 = Student("Ali","28/1/1996","m",23);

arr = [student1,student2,student3,student4,student5]


function studentDetails(student){
	return student.name + "\n" + student.dateOfBirth + "\n" + student.gender + "\n" + student.age;
	// return student.toString();

}

function sortArray(studentArr){
	return studentArr.sort();
}

function genderClassify(studentArr, gender){
	 return studentArr.forEach(function(element){
	 	if(element.gender === gender)
	 		return element;
	 })
}

