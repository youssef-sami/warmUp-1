
if($('button#important')){
	$('button#important').on('click',function(){
	$('body').css('background-color','red');
	$('p').css('color','white');
	$('h1').css('color','darkred');

});
}else if ($('button#inormal')){

$('button#normal').on('click',function(){
	$('body').css('background-color','lightblue');
	$('p').css('color','white');
	$('h1').css('color','darkblue');

});
}else if ($('button#rest')){

$('button#rest').on('click',function(){
	$('body').css('background-color','white');
	$('p').css('color','dark');
	$('h1').css('color','dark');

});
