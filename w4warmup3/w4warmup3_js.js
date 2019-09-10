var itemClass='red';

function addToList(){
  var item = $('#listItem').val();
  $('#myItmeslist').append('<li class="'+itemClass+'">'+item+'</li>');
  $('#listItem').val('');
  itemClass=(itemClass == 'red')?'green':'red';
  
}