// 1-write a function that returns the product of any number by 3.
//<<<<<<< HEAD
	function myltiplyby(x){
		return x*3;
	}
// 2-complete the following function multiply to return the result of multiplying of x and y
	function multiply(x,y){
		return x*y;
	}
//=======
function multiplyBy3(number) {
  return number * 3;
}
// 2-complete the following function multiply to return the result of multiplying of x and y
function multiply(x, y) {
  return x * y;
}
//>>>>>>> 985775f19257ef448fc4c57d18bb50d0f3bd87be

// 3-complete the following function that Convert Fahrenheit to Celsius if the module for converting is
// 	(5/9) * (fahrenheit-32);
//<<<<<<< HEAD
	function toCelsius(fahrenheit){
		return(5/9)* (fahrenheit-32);
		//your code is here
	}

// 4-Define a function named "sqArea", and make it display square area if you knew the length of its side. 
	function sqArea(length)
	{
		var str ="";
		for(var i= 0 ; i<length ; i++){
			for(var j= 0 ; j<length ; j++){
			str+="*"
		}
		str +="\n";
			}
			return str;
	}
//=======
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

// 4-Define a function named "sqArea", and make it display square area if you knew the length of its side.
function sqArea(length) {
  //Square area formula equals side times side
  return length * length;
}
//>>>>>>> 985775f19257ef448fc4c57d18bb50d0f3bd87be
