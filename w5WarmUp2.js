//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed

function student (Name, DateOfBirth, Gender, Age){
	return{
		Name : Name, 
		DateOfBirth : DateOfBirth,
		Gender : Gender,
		Age : Age
	}
}


var student1 = student("moh", "13/1/1980", "male", 39);
var student2 = student("john", "23/5/1990", "male", 29);
var student3 = student("silina", "13/10/1995", "female", 24);



var arr = [1, 2, 3, 4, 5];



function displayStudent(student){
	return (Name + "was born on the " + DateOfBirth "and his/her gender is a " + Gender + "and now he/she is " + Age);
}



var students = [student1, student2, student3];

function students(array){
	var first === array[0].Age;
	for(var i = 1; i < array.length; i++){
		if(first > array[i].Age){
			first === array[i].Age;
		}
	}
}


function gender(array, string){
	for(var i = 0; i < array.length; i++){
		if(string === "M"){
			if(array[i].Gender === "male"){
				return array[i];
			}
			}else if(string === "F"){
				if(array[i].Gender === "female"){
					return array[i];
			}
		}
	}
}


