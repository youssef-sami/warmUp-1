$(document).onload(){
$('button').on('click',function(){
			var num1 = document.getElementById('input1').value ;
			var op = document.getElementById("input2").value ;
			var num2 = document.getElementById('input3').value ;
			var $result = num1 + op + num2;
			var $h4 = document.getElementsByTagName('h4');
			$('h4').append($result);

		});
}