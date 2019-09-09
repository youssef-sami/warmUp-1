
document.getElementById('calculate').onclick=function(){

  var num1 = parseInt(document.getElementById('num1').value);
  var operator = document.getElementById('operator').value;
  var num2 = parseInt(document.getElementById('num2').value);

  if((operator !== '+' || operator !== '-' || operator !== '*' || operator !== '/') && isNaN(num1) && isNaN(num2) ){
    document.getElementsByTagName('h4')[0].innerHTML='Wrong Inputs';
    document.getElementsByTagName('h4')[0].style.color='red';
  }else{
  	var result=0;

  	switch(operator) {
  	  case '+': result = num1 + num2; break;
  	  case '-': result = num1 - num2; break;
  	  case '*': result = num1 * num2; break;
  	  case '/': result = num1 / num2; break;
  	}

  	if (result < 100) {
      document.getElementsByTagName('h4')[0].innerHTML=result;
      document.getElementsByTagName('h4')[0].style.color='green';
  	} else {
      document.getElementsByTagName('h4')[0].innerHTML=result;
      document.getElementsByTagName('h4')[0].style.color='blue';
  	}
  }

}