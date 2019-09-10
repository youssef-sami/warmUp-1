var count = 1;

$('#button').on('click', function(){
	console.log('inside click')
	var text = $('input#text').val();

	// console.log('text : ' + text + ': ' + $('#text').val());
	$('#list').html('<li>$(text)</li>');
	$('ul li').addClass('class $(count)')
	count++;
})

