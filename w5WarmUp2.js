//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed



function student (name,dateOfBirth,gender,age) {
	return{
	name: name,
	dateOfBirth:dateOfBirth,
	gender:gender,
	age:age
	}

}

var student1= function student("Alaa","October","femal",30);
var student2=function student ("Doaa","septmper","femal",24);
var student3=function student ("John","December","male",20);
var student4=function student ("Sameer","march","male",32);
var student5=function student ("Amera","April","fmale",23);




var Array= [student1,student2,student3,student4,student5];


function details(student){
	return student.name + " "+ student.dateOfBirth + " "+ student.gender + " "+student.age;

}


function sortAge(array){ 
	var newArr=[];
	var young= array[0].age;
	for(var i=0; i<array.length ; i++){
		if (array[i].age < young)
			newArr.push(array[i])
	}
	return newArr;

}


function gender ( array,str){
 var newArr=[];
 if(str="M"){
 	for (var i=0;i<array.length;i++){
 		if(array[i].gender === "male"){
 			newArr.push(array[i]);
 		}
 	}
 }
 if(str="F"){
 	for (var i=0;i<array.length;i++){
 		if(array[i].gender === "femal"){
 			newArr.push(array[i]);
 		}
 	}

 }
 return newArr;

}


