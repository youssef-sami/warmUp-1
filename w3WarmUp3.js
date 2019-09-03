// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

var arrayOfName =["Fidaa","Basima","Yara","Yasmeen","Alaa","Nahal","Mohamed","Ahmad","Seif","Sahar","Yousef","Abed","Ammar"];



// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

function middle (array){
	if((array.length % 2)!==0){
	var x = Math.floor((array.length) /2);
	return array[x];
	}
	return array[x -1 ];


}





// 3-Change all the numbers in the array to be multiplied by two for even indexes.

function evenIndex(array){
	var newArray;
	for ( var i=0; i< array.length;i++){
		if(i % 2 === 0)
			return newArray.push(array[i]*2);
	}
	return newArray
}


