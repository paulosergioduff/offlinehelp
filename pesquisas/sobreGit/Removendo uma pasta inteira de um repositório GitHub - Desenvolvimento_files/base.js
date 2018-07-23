$(document).ready(function(){
  $('.dotdotdot').dotdotdot();
});


$(document).ready(function(){

  $('.btn i').each(function(){
  
    if($(this).parent().is('.btn-lg'))
  	$(this).parent().css('paddingLeft', '50px');
	
    if($(this).parent().is('.btn-md'))
  	$(this).parent().css('paddingLeft', '40px');
  
    if($(this).parent().is('.btn-sm'))
  	$(this).parent().css('paddingLeft', '35px');

    if($(this).parent().is('.btn-xs'))
  	$(this).parent().css('paddingLeft', '30px');

  });

});



$(document).ready(function(){

  var num = $('#contador li').width();
  var cont = $('#contador li').length;
  
  $('#contador').width(num * cont);

});