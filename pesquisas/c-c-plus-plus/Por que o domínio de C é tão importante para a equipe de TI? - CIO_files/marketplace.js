function escapeForLink(s) {
	if(s) {
		var r = s.split("\n").join("\\n");
		r = r.split("\r").join("\\r");
		r = r.split("'").join("\\u0027");
		r = r.split('"').join("\\u0022");
		return r;
	}
	return s;
}
function mktplaceView(site, nitens){
    var linksMkt = sortearMKTPlace(nitens);
    var div_main = document.getElementById('divMktplace');
    var html = '<h2>CIO MARKETPLACE</h2><div class="contMarketplace">';
    for (var i=0; i<linksMkt.length; i++){
        html = html+'<div class="mktplace">';
        html = html+'<a href="' + linksMkt[i].extUrl + '" target="_blank" title="' + linksMkt[i].Title + '">';
        //html = html+'onclick="javascript:pageTracker._trackEvent(\'marketplace\', \''+linksMkt[i].campanha+'\', \''+escapeForLink(linksMkt[i].Title)+'\');">';
        html = html+'<span class="logoEmpresa"><img src="' + linksMkt[i].mainImg + '" /></span>';
        html = html+'<span class="descEmpresa">' + linksMkt[i].Title + '</span></a></div>';
    }
    html = html+'<div class="clear"></div></div>';
    div_main.innerHTML=html;
}