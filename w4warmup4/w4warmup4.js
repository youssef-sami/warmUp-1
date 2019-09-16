

var flag= "R";
$('#LB').click(function(){
	flag="L"
	

})
$('#RB').click(function(){
	flag="R";
	 

})
$('#CB').click(function(){
debugger
	if(flag==="L")
	{
		$('#Lul').append("<li>This is A new Element left </li>");
	}
	else if(flag==="R")
	{
		$('#Rul').append("<li>This is A new Element right </li>");
	}
})

