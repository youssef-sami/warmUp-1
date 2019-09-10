$('#Important').click(function(){
	$('body').css({ "background-color":" red", "color":"white"});
	$("h1").css({"color":"darkred"})

	console.log("me hii");
})


$('#normal').click(function(){
	$('body').css({ "background-color":"lightblue", "color":"white"});
	$("h1").css({"color":"darkblue"})


})

$('#rest').click(function(){
	$('body').css({ "background-color":"white", "color":"black"});
	$("h1").css({"color":"black"})


})