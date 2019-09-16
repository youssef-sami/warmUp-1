//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
function Student(name, DoB, gender, age) {
	var student = {}

	student.name = name;
	student.DoB = DoB;
	student.gender = gender;
	student.age = age;

	return student;
}
//Create an array and fill it with 5 students

var students = [];
students[0] = Student("Taz", 1995, "F", 24);
students[1] = Student("Boss", 1994, "F", 25);
students[2] = Student("Yara", 1993, "F", 26);
students[3] = Student("Ahmad", 1994, "M", 25);
students[4] = Student("Mais", 2000, "F", 19);


//Create a function that takes a student as parameter and print out the details of the student

function displayStudent(obj) {
	return obj.name + " " + obj.DoB + " " + obj.gender + " " + obj.age ; 
}




//Create a function that takes the array of students and sort them out based on age (younger-to-older)
function sortAges(arr) {

	var sorted = [];

	for (var i = 0; i < arr.length; i++) {
		for (var k = 0; k < arr.length; k++) {

			if(arr[i]["age"] > arr[k]["age"]) {
				//arr[i] = arr[k];
				sorted.push(arr[k]);
			}

		}
	}
	

	return sorted;

}


//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed
function findGender(arr , gen) {
	var acc = [];

	for (var i = 0; i < arr.length; i++) {
		if (arr[i]["gender"] === gen){
			acc.push(arr[i]);
		}
	}

	return acc;
}

