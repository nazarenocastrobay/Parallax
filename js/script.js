$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	$('.logo').css({
		'transform': 'translate(0px, ' + wScroll /3 +'%)'
	});
	$('.helado').css({
		'transform': 'translate(0px, -' + wScroll /35 +'%)'
	});
});