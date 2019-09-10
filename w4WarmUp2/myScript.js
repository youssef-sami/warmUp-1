
$('#b1').click(function(){



	var op1 = $('#t1').val();
	var oper = $('#operation').val();
	var op2 = $("#t2").val();


	if(oper === "+"){
		var res = op1 + op2 ;
		$('#result').text(res);
	}else if(oper === "-" ){
		var res = op1 - op2;
		$('#result').text(res);
	}else if(oper === "*"){
		var res = op1 * op2;
		$('#result').text(res);	
	}else{
		var res = op1 / op2;
		$('#result').text(res);
	}
	

});




