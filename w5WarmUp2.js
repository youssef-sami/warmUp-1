//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed




function student(person){
	return{
		name:name,
		dateOfBirth:dateOfBirth,
		gender:gender,
		age:age
	}
}

var student1=function student("yara",16/6,"f",27)
var student2=function student("tasneem",25/3,"f",24)
var student3=function student("basima",1/11,"f",24)
var student4=function student("ahmad",15/7,"m",26)
var student5=function student("mohammed",19/4,"m",29)
  
  var array=[student1,student2,student3,student4,student5]

  function display(person){
  	return "the student information are " + person.name + " " + person.dateOfBirth + " " + person.gender " "+ person.age;

  }

  function sort(array){
  	var youngest=array[0]
  	var newArray=[];
  	for (var i = 0; i < array.length; i++) {
  		if(array[i].age > array[0].age){
  			array[i] = array[0]
  		}
  	}
  	return newArray;
  }

  function gender(array, str){
  	for (var i = 0; i <array.length; i++) {
  		if(str===person.gender){
  			return str;
  		}
  	}

  }