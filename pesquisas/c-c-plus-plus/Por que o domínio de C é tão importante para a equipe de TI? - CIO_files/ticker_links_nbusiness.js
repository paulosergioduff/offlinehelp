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

function tickerWPView(site, nitens){
    var div_main = document.getElementById('divWPticker');
// Dynamic
    var linksWPNB = sortear(listaWPNBusinessTicker, nitens);
    var html = '<div id="ticker-wrapper" class="no-js"><ul id="js-news" class="js-hidden">';
    for (var i=0; i<linksWPNB.length; i++){
        html = html+'<li class="news-item"><a target="_blank" href="' + linksWPNB[i].extUrl + '" title="">' + linksWPNB[i].Title + '<\/a><\/li>';
    }
    html = html+'<\/ul><\/div>';
    div_main.innerHTML=html;
}