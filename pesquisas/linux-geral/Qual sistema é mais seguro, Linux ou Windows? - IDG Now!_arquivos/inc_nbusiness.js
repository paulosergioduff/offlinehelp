function inc_nbusinessView(site, nitens){
    var linksWPNB = sortear(listaWPNBusiness, nitens);
    var div_main = document.getElementById('divIncNBusiness');
    var html = '<h2>Recursos Adicionais</h2>';
    for (var i=0; i<linksWPNB.length; i++){
        //resto=2 pq index=0
        if (i != 0){ html = html+'<hr>'; }
        html = html+'<h3>WHITE PAPER</h3><article>';
        html = html+'<p class="titulo"><a href="' + linksWPNB[i].extUrl + '">'+linksWPNB[i].Title+'<\/a><\/p>';
        html = html+'<p class="resumo">'+linksWPNB[i].olho+'<\/p>';
        html = html+'<p class="link"><a href="' + linksWPNB[i].extUrl + '">Leia agora<\/a><\/p>';
        html = html+'<\/article>';
    }
    div_main.innerHTML=html;
}