//user hovers

(function(){

	var pageTitle = document.title; //HTML PAGE TITLE
	var pageUrl = location.href; //Location of the page

	$('#share-wrapper li').hover(function() {
		var hoverEl = $(this); //cache $(this) into variable

		//browsers with width > 690 get button slide effect
		if($(window).width() > 699) {

			if(hoverEl.hasClass('visible')){
				hoverEl.animate({"margin-left":"-117px"}, "fast").removeClass('visible');
			} else {
				hoverEl.animate({"margin-left":"-1px"}, "fast").addClass('visible');
			}
		}
	});

	$('.button-wrap').on('click', function(event){
		var shareName = $(this).attr('class').split(' ')[0]; //get the first class of the click el

		switch (shareName) //switch to a different link based on social media name
		{
				case 'facebook':
				var openLink = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(pageUrl) + '&amp;title=' + encodeURIComponent(pageTitle);
          		break;

          		case 'twitter':
          		var openLink = 'http://twitter.com/home?status=' + encodeURIComponent(pageTitle + ' ' + pageUrl);
          		break;

          		case 'cart':
          		var openLink = 'http://macca.myshopify.com/collections';
          		break;

		}
        //Parameters for the Popup window
        winWidth    = 650;
        winHeight   = 450;
        winLeft     = ($(window).width()  - winWidth)  / 2,
        winTop      = ($(window).height() - winHeight) / 2,
        winOptions   = 'width='  + winWidth  + ',height=' + winHeight + ',top='    + winTop    + ',left='   + winLeft;

        //open Popup window and redirect user to share website.
        window.open(openLink,'Share This Link',winOptions);
        return false;

	});

})();



