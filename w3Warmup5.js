//1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
//     -create an array to hold the classmates that you created and what you created to it .
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
function classMate(name,degree , age ,gender){
// a refactor function and the structre of a freind proparites
    return {
        name:name,
        degree:degree,
        age:age,
        gender:gender
    }
}
//
var Maha = classMate("maha", "BA",33,"Femail");
var fidaa =classMate("fidaa", "BA", 29, "Femail");
var alaa = classMate("alaa", "BA",29,"Femail");

var classMates =[Maha,fidaa,alaa]

function displayFriend(mat){
  var ountputString ="";
    
  for(var prop in mat){
    ountputString += prop + " :"+ mat[prop] +" ";
  }
  return ountputString;
}


function addFriend(mat){

  if(classMate !== undefined)
    classMates.push(mat);

  console.log("there is no array with this name");
}

//
function nbOfMale(arr){

  var maleCount=0;

  if(arr === undefined || arr.length<1) // checks if the array is empty of unassigned 
    console.log("there is no array to calaculate ") // if yes retun a message there is no array to calculate

  else{
  	for(var i = 0 ; i< arr.length ; i++){ // else start looping
   	 if(arr[i]["gender"]=="male") // cheks if the gender is male
    	maleCount++; // incease the counte 
    }
  }
return maleCount;// return counter
}

function searchMates(arrOfMates , query){

	if(query === undefined || arrOfMates === undefined){ /// if one of the par is not assined then it will do a error and get out of the function
		console.log("ther is a missing parameter ....")// undefined param message
		return undefined;// go out of the function
	}

	var outputArray=[]; // define the out put array
  for(var i = 0 ; i<= arrOfMates.length-1 ; i++){ // first loop fo arrays

		for(var objKey in arrOfMates[i]){// secound loop for insid object
			if(objKey=== query || arrOfMates[i][objKey]===query){ // if the prop or the value of it equals the quey

				outputArray.push(arrOfMates[i]);// if yes push the object
      }
		}

  }
  if(outputArray.length<1) {// if there is no match write a message 
  	console.log("There is no matching") // no Matching message
  	return undefined;
  }
  return outputArray// else retun the out put array
}
