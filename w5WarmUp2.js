// Create a function (class) called Student that return an object that contains the following properties:
// Name, Date of Birth, Gender, Age

function Student(name, dateOfBirth, gender, age) {
	var std = {};
	std.Name = name;
	std.DateOfBirth = dateOfBirth;
	std.Gender = gender;
	std.Age = age;

	return std;
}
// function name(std, str) {
// 	std.Name = str;
// }
// function dateOfBirth(std, date) {
// 	std.DateOfBirth = date;
// }
// function gender(std, char) {
// 	std.Gender = char;
// }
// function age(std, num) {
// 	std.Age = num;
// }

// Create an array and fill it with 5 students
var stdArray = [
Student("Hend", "3/11", 'f', 19), 
Student("moh", "2/11", 'm', 24), 
Student("liam", "4/11", 'm', 50), 
Student("sth", "5/11", 'f', 36), 
Student("that", "6/11", 'm', 4)
];

// Create a function that takes a student as parameter and print out the details of the student
function printStd(std) {
	console.log("the details are:\n\tName: " + std.Name + "\n\tDate Of Birth: " + std.DateOfBirth + "\n\tGender: " + std.Gender + "\n\tAge: " + std.Age);
}

// Create a function that takes the array of students and sort them out based on age (younger-to-older)
function sortAge(arrayOfStd) {
	var result = [],
	each(array, function(values, keys) {

	}
	return result;
}

// Create a function that takes the array and a string either “M” or “F” 
//and returns the male students if “M” was passed and female students if “F” was passed
