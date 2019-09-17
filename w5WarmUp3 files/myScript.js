
$('#btn').click(function() {
	var input = $('#input').val();
	//alert("hii");

	if(input < 100) {

		 $('#UL').append('<li>' + input).val();
		 $('li').addClass("blue");

	} else if(input >100) {

		$('#UL').append('<li>' + input).val();
		 $('li').addClass("red");

	} else {

	}
})

$('delete').click(function() {

})

