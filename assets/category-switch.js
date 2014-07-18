(function(){

	$('ul#filter a').on('click', function(){

 		$('ul#filter .actives').removeClass('actives');
 		$(this).parent().addClass('actives');	
 		var filterVal = $(this).text().toLowerCase();
 		console.log(filterVal);
 		if(filterVal == 'all-products') {
     		$('div.shoppa div.lola.hidden').fadeIn('slow').removeClass('hidden');
 		}	
 		else {
    		$('div.shoppa div.lola').each(function() {
	         if(!$(this).hasClass(filterVal)) {
            $(this).fadeOut('slow').addClass('hidden');
                } else {
                    $(this).fadeIn('slow').removeClass('hidden');
                }
    });
}
 		return false;
	});

})();