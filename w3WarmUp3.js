// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 
var names = [ "Yara", "Basema", "Yasmeen", "Mais", "Alaa", "Nahla", "Fedaa", "Doua", "Tasneem",
              "Ahmad", "Mohammad Ennab", "Mohammad Khamaiseh", "Yousef", "Saif", "Adel", "Sahar" ];



// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middle(arr){
     
     var index = 0;

	if (arr.length %2 === 0){

    	index = Math.floor((arr.length - 1) / 2);
    	//console.log(index);

    	 return arr[index];

	} else {
        index = Math.floor((arr.length - 1) / 2);
		//console.log(index);
		return  arr[index];
	}
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.


function evenIndexesMult(arr) {

	for (var i = 0; i < arr.length; i++) {
		if(i % 2 ===0 ){
			arr[i] = arr[i] * 2;
		}
	}

	return arr;


}


