
(function () {

$("h4.titlez").each(function() {

var $minHeight = 18;
var $twoline = 39;

if ( $(this).height() > $minHeight && $(this).height() < $twoline) {
	$(this).height('19');
} else {
	$(this).height('39');
}

});



//Go to Top Button
	$('.go-top').on('click', function(){
		$('html, body').animate({scrollTop: 0}, 600);
	});

//USER ACCOUNT JS
	$('.clicko').on('click', function(){
	   $('#addr').removeClass('hidden');
	});

	$('.bye').on('click', function(){
	   $('#addr').addClass('hidden');
	});

	$(".forgot").on('click', function() {
	  $("#forg").removeClass('hidden');
	});
	$('.ex').on('click', function(){
	  $('#forg').addClass('hidden');
	});

	$('#toreg').on('click', function(){
	$('#reg').removeClass('hidden');
	});



//RESIZO
	// $('.news-resize').width('262');
	// $('.news-resize').height('180');
	$('.blogas').height('175');
	$('.blogas').width('262');
	$('.blogasview').width('1110');
	// $('.heightz').height('150');
	$('#media-page').width('360');
	$('.changehight').height('299');
	$('#media-page').height('290');
	// $('.blogaz').height('180');
	// $('.blogaz').width('262');

//Ask
	$('.animateclick').on('click', function(){
		$('#flip').addClass('slideOutLeft').addClass('hidden');
		$('#ans').removeClass('hidden').addClass('slideInRight');
	});


})();

