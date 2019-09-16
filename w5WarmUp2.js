//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed

function student (name , dob, gender,age) {
	student = {}
	
	student.name = name
	student.dob =dob
	student.gender = gender
	student.age = age

	return student
}


var std1= student("Ahmed","15/8/1994","male",25)
var std2= student("Ali","17/8/1995","male",24)
var std3= student("Amal","15/1/1996","female",23)
var std4= student("Doaa","15/6/1994","female",25)
var std5= student("Sali","18/8/1994","female",25)

var students =[std1,std2,std3,std4,std5]

function printStudent (obj){
	resultString = ""
	each (obj, function(value,key) {
		resultString+= key +" : " + value
	})
	return resultString
}


function filterStudent (students,gender) {
	return filter (students , function(item , index) {
		return item.gender.charAt(0).toLowerCase() === gender.toLowerCase()
	})
}

function sortStudent(students) {
	var result = []
	var ages = numbers.sort(function(a, b) {
 		 return a - b;
		});
	each(students,function(item, index)	{
		for (var i =0 ; i< ages.length ; i++) {
			if(item.age === ages[i]) {
				result.push(item)
			}
		}
	})
	return result
} 

function each (coll,func){
	if(Array.isArray(coll)) {
		for( var i =0 ; i< coll.length ; i++){
			return func(coll[i],i)
		}
	}else{
		for(var key in obj){
		return func(obj ,key)
		}
	}
	
}



function filter (coll , predicate) {
	var result = []
	if(Array.isArray(coll)) {
		return each (coll, function(item, index) {
			if(predicate(item,index)){
				result.push(item)
			}
		})
	} else {
		var result = {}
		return each (coll, function(value, key) {
		if(predicate(value,key)){
			result[key]=value
			}
		})
	}
}










