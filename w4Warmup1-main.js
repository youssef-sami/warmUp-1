$('button#important').on('click', function(){
	$('body').css('background-color', 'red');
	$('p#p1').css('color', 'white');
	$('h1#head').css('color', 'darkred');
});


$('button#normal').on('click', function(){
	$('body').css('background-color', 'lightblue');
	$('p#p1').css('color', 'white');
	$('h1#head').css('color', 'darkblue');
});

$('button#reset').on('click', function(){
	$('body').css('background-color', 'white');
	$('p#p1').css('color', 'black');
	$('h1#head').css('color', 'black');
});
