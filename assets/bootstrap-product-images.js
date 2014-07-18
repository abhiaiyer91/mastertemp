/* =========================================================
 * bootstrap-product-images.js
 * http://www.collectivepush.com/plugins/bootstrap/
 * =========================================================
 * Copyright 2012 Collective Push
 *
 *Permission is hereby granted, free of charge, to any person obtaining a copy
 *of this software and associated documentation files (the "Software"), to deal
 *in the Software without restriction, including without limitation the rights
 *to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *copies of the Software, and to permit persons to whom the Software is
 *furnished to do so, subject to the following conditions:

 *The above copyright notice and this permission notice shall be included in
 *all copies or substantial portions of the Software.

 *THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *THE SOFTWARE.
 * ========================================================= */

// Find out which containers we have on this document and setup proper bindings
$(document).ready(function() {

	if ( $("#product-images").length > 0 ) { switchImageBindings(); }
    switchImage(1);
});

// Generate Option
function switchImageBindings() {

	$('#alt1').click(function(){
		switchImage(1);
	});

	$('#alt2').click(function(){
		switchImage(2);
	});

	$('#alt3').click(function(){
		switchImage(3);
	});

	$('#alt4').click(function(){
		switchImage(4);
	});

}

function switchImage(imgClicked) {

	// take the value of imgClicked to determine which alt id to read the wrapped img src from
	var newImageSrc = $('#alt'+imgClicked+' > img').attr('src');
	var newZoomSrc =  $('#alt'+imgClicked+' > img').attr('data-zoom-image');

	// set the image source of main to the alt that was clicked
	$('#main > img').attr('src',newImageSrc).attr('data-zoom-image',newZoomSrc);

}