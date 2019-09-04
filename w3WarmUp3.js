// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class

var femalesNames = ['Doaa', 'Alaa', 'Nahlaa']; 


// -name of males in your class

var malesNames = ['Mohammed', 'Ahmed', 'Mohammed']; 


// -name of your class instructors 

var instructors = ['Sahar', 'Adel', 'Seif']; 



// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.

function middle(array){
	var length= array.length; 

	if (length%2 !==0){

		middle = Math.floor(length/2 ); 
		return array[middle]
	}
	middle = length/2 -1; 
	middle1 = length/2  ; 
	return [ array[middle], array[middle1] ]; 
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.




function mulArray(array){


	var filteredNumbers = array.map(function(num, index) {
  		if(index%2 === 0) {
     	return num*2;
  		}
  		return num; 
  	}); 
  	return filteredNumbers; 

}


