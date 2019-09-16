//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if
//“M” was passed and female students if “F” was passed

function Student(name,DateOfBirth,gender,age){ // factory function 

	return{
		name:name,
		dateOfBirth:DateOfBirth,
		gender:gender,
		age:age

	}
}

var obj1=Student("sahar","24-04-2019","F",24);
var obj2=Student("mena","24-04-2019","F",34);
var obj3=Student("dalya","24-02-2019","F",24);
var obj4=Student("hadeel","14-04-2019","F",15);

var classArray=[obj1,obj2,obj3,obj4];

function displayStudentInfo(stu){
	if(stu === undefined)
		return "Empty Object";
	var diplayStr="";
	for(var key in stu){
		displayStr+=key+" "+stu[key]+" ";
	}
	return displayStr;
}

function sortStudents(arrayOfStudents){
	if(arrayOfStudents.length ===0)
		return "there is no students";
	if(arrayOfStudents=== undefined)
		return "missing arguments";
	
	var temp= arrayOfStudents[0];
	for(var i = 0 ; i< arrayOfStudents.length ; i++){
		for(var j = 0 ; j< arrayOfStudents.length ; j++){

			if(arrayOfStudents[i]["age"]<arrayOfStudents[j]["age"]){
				temp=arrayOfStudents[i];
				arrayOfStudents[i]=arrayOfStudents[j];
				arrayOfStudents[j]=temp;

			}
		}
	}
return arrayOfStudents;
	
}

function getGender(arrayOfStudents, char){
	var chare= char;
	if(arrayOfStudents.length ===0)
		return "there is no students";
	if(arrayOfStudents=== undefined)
		return "missing arguments";
	if(char === undefined || char==="")
		return "there is nothing to search for "
	var arr =[];
	for(var i = 0 ; i < arrayOfStudents.length ; i++){
		if(arrayOfStudents[i]["gender"].toUpperCase() === chare.toUpperCase()){
			arr.push(arrayOfStudents[i]);
		}
	}
	return arr;
}


