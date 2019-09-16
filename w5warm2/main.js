function Student(Name, DateofBirth, Gender, Age){
	var student = {};
	student.Name= Name;
	student.DateofBirth = DateofBirth;
	student.Gender = Gender;
	student.Age = Age;

	return student;
}
var students = [];
var stu1 = Student("1", "1111", "f", 12);
var stu2 = Student("2", "2222", "m", 10);
var stu3 = Student("3", "3333", "f", 9);

function addStudent(student){
	students.push(student);
}
addStudent(stu1);
addStudent(stu2);
addStudent(stu3);

function displystu(stu){
	return stu.Name + " " + stu.Age ;
}
function sortstu(students, pointer, i){
	pointer = pointer || 0;
	i = i || 1;
	if(i === students.length){
		return sortstu(students, pointer + 1 , pointer + 1)
	}
	if(pointer === students.length){
		return students;
	}
	if(students[pointer].Age < students[i].Age){
		var temp = students[pointer].Age;
		students[pointer].Age = students[i].Age;
		students[i].Age = temp;
	}
	return sortstu(students, pointer,i +1)
}

