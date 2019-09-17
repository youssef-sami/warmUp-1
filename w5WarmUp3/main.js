
$('#btnAdd').on('click', function(e){
	var value = $('#number').val();

	if(parseInt(value) < 100 )
		$('#list').append(`<li>${value}</li>`).css('color', 'blue');
	else
		$('#list').append(`<li>${value}</li>`).css('color', 'red');
})


