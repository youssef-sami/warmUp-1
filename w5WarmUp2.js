//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male 
//students if “M” was passed and female students if “F” was passed


function student (name, DateOfBirth, gender, age){
	var student = {} ; 
	student.name = name ; 
	student.DOB = DateOfBirth ; 
	student.gender = gender ; 
	student.age = age ; 
	return student ; 
}

student1 = student("Doaa" , "Sept 10, 1995", "F" , 24); 
student2 = student("Alaa" , "May 15, 1989", "F" , 31); 
student3 = student("Nahla", "Agu 10 1985", "F",34); 
student4 = student("Fedaa", "April 5 1990", "F", 27); 
student5 = student("Mays", "Jan 5 1997", "F",20); 

var students = [student1 , student2 , student3 , student4, student5]; 

function printStudentDetails(student){
	console.log("name: " +student.name +"\n" + "Date of birth: "+student.DateOfBirth +'\n' + "gender: " + student.gender 
	+ "\n"+"Age: " + student.age )
}

function sortStudentAgeBase (students){
    newstudents = students.sort(function (str1, str2){
 	return str1.age - str2.age ; 

 })
    return newstudents ; 
}

function MaleOrFemale(students , maleOrFemale){
	if (maleOrFemale === "M"){
		return students.filter(student => student.gender ==="M"); 
	}
	else {
		
		return students.filter(student => student.gender ==="F"); 
	
	}

}
