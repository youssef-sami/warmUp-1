// if the val was 100 i don't wanna add it at all.

document.querySelector("add").onclick = function(event) { 
	if ($('input').val() < 100)
		$( "li" ).add( '$('input').val()' ).css( "color", "blue" );
	else if ($('input').val() > 100)
		let expandingList = document.createElement('li', { 'color' : 'red' })
}