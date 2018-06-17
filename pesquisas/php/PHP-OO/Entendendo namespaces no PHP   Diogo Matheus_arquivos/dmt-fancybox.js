$(document).ready(function(){
	
	// Config fancybox on images
	$(".dmt-post-container figure a").fancybox({
		wrapCSS    : 'fancybox-custom',
		closeClick : true,
		openEffect : 'elastic',
		openSpeed  : 150,
		closeEffect : 'elastic',
		closeSpeed  : 150,
		helpers : {
			overlay : {
				css : {
					'background' : 'rgba(238,238,238,0.85)'
				}
			}
		}
	});
		
});