$(window).scroll(function(){
	var ventana_ancho = $(window).width();
	var wScroll = $(this).scrollTop();
	if(ventana_ancho >= 600){

		

		$('.logo').css({
		'transform': 'translate(0px, ' + wScroll /3 +'%)'
		});
		$('.helado').css({
		'transform': 'translate(0px, -' + wScroll /35 +'%)'
		});
		console.log(wScroll)
} else {
	$('.logo').css({
		'transform': 'translate(0px, ' + wScroll /1.7 +'%)'
		});
	console.log(wScroll)
	}
	
});