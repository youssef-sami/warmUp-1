var counter =0 ;

$('#addBtn').click(function(){
	
var inpu = $('#myInput').val();
console.log(inpu)
if(counter%2==0){
$('#myList').append('<li class="firsClass">'+inpu+'</li>')
}
else{
$('#myList').append('<li class="secoundClass">'+inpu+'</li>')
}
counter++;

})