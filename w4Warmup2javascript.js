// var first = document.getElementById("first");
// var second = document.getElementById("third");
// var third = document.getElementById("second");
// var operation = function (){
// 	first + second +third;
// }



var first = parseInt($("#first").val());
var third = parseInt($("#third").val());


$("#butr").click (function (){
	$('#result').append (first);
})
