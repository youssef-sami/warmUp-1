// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

// 3-Change all the numbers in the array to be multiplied by two for even indexes.


function(names){
femaleName:name1,
maleName:name2,
instructorsName:name3
}

var names =[femaleName: {yara,tasneem,basima},
	maleName : {mohammed, ahmad,mohammed},
	instructorsName: {seif,yousef,abed}

}]
function display(names){
	names.femaleName+ " " + names.maleName + " "+ names.instructorsName


function each(coll, f) {
	if (Array.isArray(coll)) {
		for (var i = 0; i < coll.length; i++) {
			f(coll[i], i);
		}
	} else {
		for (var key in coll) {
			f(coll[key], key);
		}
	}
}




function filter(array, predicate) {
	var acc = [];
	each(array, function(element, i) {
		if (predicate(element, i)) {
			acc.push(element);
		}
	});
	return acc;
}





function middle(array){
	return filter(array,function(element,i){
		return array[i].length/2
	})
}




function each(coll, f) {
	if (Array.isArray(coll)) {
		for (var i = 0; i < coll.length; i++) {
			f(coll[i], i);
		}
	} else {
		for (var key in coll) {
			f(coll[key], key);
		}
	}
}


function multiple(array){
	newArray=[];
	each(array,function(element,i){
     newArray.push(element(i%2===0)*2){
     }
 }
}
     
