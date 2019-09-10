
var result = (parseFloat($('#first').val()))+(parseFloat($('#second').val()));

	$("#btn").click(function(){
		if($('#operator').val()==="+"){
		$('#h').html((parseFloat($('#first').val()))+(parseFloat($('#second').val())));
	}else if($('#operator').val()==="-"){
		$('#h').html((parseFloat($('#first').val()))-(parseFloat($('#second').val())));
	}else if($('#operator').val()==="*"){
		$('#h').html((parseFloat($('#first').val()))*(parseFloat($('#second').val())));
	}else if($('#operator').val()==="/"){
		$('#h').html((parseFloat($('#first').val()))/(parseFloat($('#second').val())));
	}else{
		alert("not an operator")
	}
	if((parseFloat($('#h').val()))<100){
		$('#h').css('color','green')
	}else if((parseFloat($('#h').val()))>=100){
		$('#h').css('color','blue')
	}

})