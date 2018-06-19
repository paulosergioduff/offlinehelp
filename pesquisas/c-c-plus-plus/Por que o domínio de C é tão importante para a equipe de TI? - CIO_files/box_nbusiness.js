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

function nbusinessRecView(site, nitens){
    var linksWPNB = sortear(listaWPNBusiness, nitens);
    var nitens2 = nitens / 2;
    var linksWPNB1 = linksWPNB.slice(0,nitens2);
    var linksWPNB2 = linksWPNB.slice(nitens2);
    var div_main = document.getElementById('divRECNBusiness');
    var html = '';
    for (var i=0; i<linksWPNB1.length; i++){
        if (i==0) {html = html+'<ul class="ulRecEb">';}
        html = html+'<li class="liRecEb"><a href="' + linksWPNB1[i].extUrl + '">' + linksWPNB1[i].Title + '<\/a><\/li>';
    }
    html = html+'<\/ul>';
    for (var i=0; i<linksWPNB2.length; i++){
        if (i==0) {html = html+'<ul class="ulRecEb">';}
        html = html+'<li class="liRecEb"><a href="' + linksWPNB2[i].extUrl + '">' + linksWPNB2[i].Title + '<\/a><\/li>';
    }
    html = html+'<\/ul>';
    html = html+'<div class="linkVejaMais"><a href="http://computerworld.com.br/white-papers" title="Veja mais White Papers">Veja mais White Papers</a></div>';
    div_main.innerHTML=html;
}

function nbusinessEBView(site, nitens){
    var linksEB = sortear(listaEBNBusiness, nitens);
    var div_main = document.getElementById('divEBNBusiness');
    var html = '';
    for (var i=0; i<linksEB.length; i++){
        if (i % 2 == 0){ html = html+'<div class="blocoExecutive">'; }
        else{ html = html+'<div class="blocoExecutive ultimoBloco">'; }
        html = html+'<img src="' + linksEB[i].foto + '" class="ilustraExecutive" />';
        html = html+'<dl><dt>' + linksEB[i].Title + '</dt>';
        html = html+'<dd class="oferExcutive"><img src="' + linksEB[i].logo + '" /></dd>';
        html = html+'<dd class="btnDownload"><a href="' + linksEB[i].extUrl + '" title="Download gratuito">Download gratuito</a></dd></dl></div>';
    }
    //html = html+'<div class="linkVejaMais"><a href="http://computerworld.com.br/executive_briefing/" title="Veja mais Executive Briefing">Veja mais Executive Briefing</a></div>';
    div_main.innerHTML=html;
}

function nbusinessPCWEView(site, nitens){
    var linksPCWE = arrPCWE;
    var div_main = document.getElementById('divPCWENBusiness');
    var html = '';
    for (var i=0; i<linksPCWE.length; i++){
        if (i % 2 == 0){ html = html+'<div class="blocoPcworld">'; }
        else{ html = html+'<div class="blocoPcworld ultimoBlocoPcworld">'; }
        html = html+'<div class="descPcworld">';
        html = html+'<img src="' + linksPCWE[i].foto + '" class="ilustraPcworld" />';
        html = html+'<dl><dt>' + linksPCWE[i].Title + '</dt>';
        html = html+'<dd>' + linksPCWE[i].olho + '</dd></dl></div>';
        html = html+'<div class="campoDownload">';
        if (linksPCWE[i].logo != ''){html = html+'<div class="oferecimentoPcworld"><img ' + linksPCWE[i].logo + ' /></div>';}
        else{html = html+'<div class="oferecimentoPcworld"></div>';}
        html = html+'<div class="btnDownload"><a href="' + linksPCWE[i].extUrl + '" title="Download gratuito">Download gratuito</a></div>';
        html = html+'</div></div>';
    }
    div_main.innerHTML=html;
}

function nbusinessWPView(site, nitens){
    var linksWPNB = sortear(listaWPNBusiness, nitens);
    var div_main = document.getElementById('divWPNBusiness');
    var html = '';
    for (var i=0; i<linksWPNB.length; i++){
        //resto=2 pq index=0
        if (i % 3 == 2){ html = html+'<div class="blocoWhitepapers ultimoBloco">'; }
        else{ html = html+'<div class="blocoWhitepapers">'; }

        html = html+'<p><span></span>' + linksWPNB[i].Title + '<\/p>';
        html = html+'<div class="oferWhitepapers"><img src="' + linksWPNB[i].logo + '" \/></div>';
        html = html+'<a href="' + linksWPNB[i].extUrl + '" class="btnDownload" title="Download gratuito">Download gratuito<\/a><\/div>';
    }
    html = html+'<div class="linkVejaMais"><a href="http://computerworld.com.br/white-papers" title="Veja mais White Papers">Veja mais White Papers</a></div>';
    div_main.innerHTML=html;
}

function nbusinessWebcastsView(site, nitens){
    var linksWebcastNB = sortear(listaWebcastNBusiness, nitens);
    var div_main = document.getElementById('divWebcastsNBusiness');
    var html = '';
    for (var i=0; i<linksWebcastNB.length; i++){
        //resto=2 pq index=0
        if (i % 3 == 2){ html = html+'<div class="blocoWhitepapers ultimoBloco">'; }
        else{ html = html+'<div class="blocoWhitepapers">'; }

        html = html+'<p><span></span>' + linksWebcastNB[i].Title + '<\/p>';
        html = html+'<div class="oferWhitepapers"><img src="' + linksWebcastNB[i].logo + '" \/></div>';
        html = html+'<a href="' + linksWebcastNB[i].extUrl + '" class="btnAssistir" title="Assistir">Assistir<\/a><\/div>';
   }
    div_main.innerHTML=html;
}


function nbusinessCZView(site, nitens){
    var linksCZNB = sortear(listaCZNBusiness, nitens);
    var div_main = document.getElementById('divCZNBusiness');
    var html = '';
    if (nitens == 4){
    for (var i=0; i<linksCZNB.length; i++){
        //resto=1 pq index=0
        if (i % 2 == 1){ html = html+'<div class="blocoCompanyzones ultimoBloco">'; }
        else{ html = html+'<div class="blocoCompanyzones">'; }

        //"patrocinio" acima -> img com 90x40
        //html = html+'<div class="oferCompanyzones"><span>Patrocinado por:</span><img src="' + linksCZNB[i].logo + '" /></div>';
        html = html+'<div class="oferCompanyzones"><img src="' + linksCZNB[i].logo + '" /></div>';
        html = html+'<h4><a href="' + linksCZNB[i].extUrl + '" target="_blank">' + linksCZNB[i].Title + '</a></h4>';
        html = html+'<ul><li>' + linksCZNB[i].chamada1 + '</li>';
        html = html+'<li>' + linksCZNB[i].chamada2 + '</li>';
        html = html+'<li>' + linksCZNB[i].chamada3 + '</li></ul></div>';
    }
    }
    else{ //nitens=6
    for (var i=0; i<linksCZNB.length; i++){
        //resto=2 pq index=0
        if (i % 3 == 2){ html = html+'<div class="blocoCompanyzones ultimoBloco">'; }
        else{ html = html+'<div class="blocoCompanyzones">'; }

        html = html+'<img src="' + linksCZNB[i].logo + '" class="oferCompanyzones" />';
        html = html+'<h4><a href="' + linksCZNB[i].extUrl + '" target="_blank">' + linksCZNB[i].Title + '</a></h4>';
        html = html+'<ul><li>' + linksCZNB[i].chamada1 + '</li>';
        html = html+'<li>' + linksCZNB[i].chamada2 + '</li>';
        html = html+'<li>' + linksCZNB[i].chamada3 + '</li></ul></div>';
    }
    }
    div_main.innerHTML=html;
}