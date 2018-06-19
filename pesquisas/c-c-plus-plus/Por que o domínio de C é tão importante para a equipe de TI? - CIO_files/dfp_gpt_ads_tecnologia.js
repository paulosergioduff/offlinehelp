// Use Async for Ad Slot refresh and speed. Sync mode for interstitial and page refresh
// Change here for Async/Sync mode
var isSync = false;
var rubicontag = rubicontag || {};
rubicontag.cmd = rubicontag.cmd || [];
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

var gptran = false;
function gptrun() {
    if (gptran) {
        return;
    }
    gptran = true;

	if (isSync){
	    (function(){
		var useSSL = 'https:' == document.location.protocol;
		var src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
		document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
	    })();
	}
	else {
	    var gads = document.createElement('script');
	    gads.async = true;
	    gads.type = 'text/javascript';
	    var useSSL = 'https:' === document.location.protocol;
	    gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
	    var node = document.getElementsByTagName('script')[0];
	    node.parentNode.insertBefore(gads, node);
	}    
}

