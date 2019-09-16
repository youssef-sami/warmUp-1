//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
function Student(name, dateOfBirth, gender, age){
	return {
		name: name,
		dateOfBirth, dateOfBirth,
		gender: gender,
		age: age
	}
}

var student1 = Student('Tasneem', '1/12/1995', 'F', 24);
var student2 = Student('Annab', '1/5/1993', 'M', 26);
var student3 = Student('Ajor', '1/9/1995', 'M', 24);
var student4 = Student('Mays', '1/12/2000', 'F', 19);
var student5 = Student('yara', '1/6/1993', 'F', 26);

//Create an array and fill it with 5 students
var students = [student1, student2, student3, student4, student5];


//Create a function that takes a student as parameter and print out the details of the student
function information(student){
	return 'Name: ' + student.name + ' || Date Of Birth: ' + student.dateOfBirth + ' || Gender: ' 
			+ student.gender + ' || Age: ' + student.age; 
}


//Create a function that takes the array of students and sort them out based on age (younger-to-older)
function sort(students){
	for(var i = 0; i < students.length; i++){
		var max = students[0];
		if(max.age > students[i].age){
			var temp = max;
			max = students[i];
			students[i] = temp;
			i = 0;
		}
	}
}





//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed

function genderCheck(students, str){
	var newArray = [];
	for(var i = 0; i < students.length; i++){
		if(students[i].gender === str){
			newArray.push(students[i]);
		}
	}

	return newArray;
}

