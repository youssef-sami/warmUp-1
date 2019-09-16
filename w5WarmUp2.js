//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed
function student(){
	var stu ={};
	stu.name=name;
	stu.dateOfBirth = dateOfBirth;
	stu.gender=gender;
	stu.age=age;
    return stu;
}

var arrOfStu = [ {name:'ASD', dateOfBirth:'14/10/1995', gender:'F', age:34},
                 {name:'FGH', dateOfBirth:'15/10/1995', gender:'“M”', age:45},
                 {name:'JKL', dateOfBirth:'16/10/1995', gender:'F', age:56},
                 {name:'ZXC', dateOfBirth:'17/10/1995', gender:'M', age:23},
                 {name:'VBN', dateOfBirth:'18/10/1995', gender:'F', age:98}
];
var printStu = function (array){
	return array;
}

var sortAge = function (array){
	for (var i = 0; i < array.length; i++) {
		if((array[i][this.age])> (array[i+1][this.age]){
			var temp = array[i];
			array[i]=array[i+1];
			array[i+1]=temp;
		}
	}
}
var sortGen = function (array,gen){
	var newArr=[];
	for (var i = 0; i < array.length; i++) {
		if (this.gender===gen){
			newArr.push(array[i]);
		}
	}
	return newArr;
}