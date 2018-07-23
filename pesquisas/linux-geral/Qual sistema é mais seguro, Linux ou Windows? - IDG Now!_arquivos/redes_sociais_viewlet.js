function trocarAbaMaisNoticias(mais){
    var isIE = (navigator.appName=='Microsoft Internet Explorer');
    if (isIE){ var dummy = 'block';}
    else{var dummy = 'table';}
    if (mais=='maiscomentadas'){
        document.getElementById('abaMaisComentadas').style.display = dummy;
        //document.getElementById('abaMaisCompartilhadas').style.display = 'none';
        document.getElementById('abaMaisLidasNoticias').style.display = 'none';

        document.getElementById('tabMaisComentadas').className='activeTabMaisNoticias';
        //document.getElementById('tabMaisCompartilhadas').className='';
        document.getElementById('tabMaisLidasNoticias').className='';
    }
    else if (mais=='maiscompartilhadas'){
        document.getElementById('abaMaisComentadas').style.display = 'none';
        //document.getElementById('abaMaisCompartilhadas').style.display = dummy;
        document.getElementById('abaMaisLidasNoticias').style.display = 'none';

        document.getElementById('tabMaisComentadas').className='';
        //document.getElementById('tabMaisCompartilhadas').className='activeTabMaisNoticias';
        document.getElementById('tabMaisLidasNoticias').className='';
    }
    else if (mais=='maislidas'){
        document.getElementById('abaMaisComentadas').style.display = 'none';
        //document.getElementById('abaMaisCompartilhadas').style.display = 'none';
        document.getElementById('abaMaisLidasNoticias').style.display = dummy;

        document.getElementById('tabMaisComentadas').className='';
        //document.getElementById('tabMaisCompartilhadas').className='';
        document.getElementById('tabMaisLidasNoticias').className='activeTabMaisNoticias';
    }
}

function trocarAbaSocial(social){
    var isIE = (navigator.appName=='Microsoft Internet Explorer');
    if (isIE){ var dummy = 'block';}
    else{var dummy = 'table';}
    if (social=='twitter'){
        document.getElementById('abaTwitter').className='tabMediaTw tabMediaActive';
        document.getElementById('abaFacebook').className='tabMediaFb';
        document.getElementById('abaMaisLidas').className='tabMediaNot';

        document.getElementById('tabTwitter').style.display = dummy;
        document.getElementById('tabFacebook').style.display = 'none';
        document.getElementById('tabMaisLidas').style.display = 'none';
    }
    else if (social=='facebook'){
        document.getElementById('abaTwitter').className='tabMediaTw';
        document.getElementById('abaFacebook').className='tabMediaFb tabMediaActive';
        document.getElementById('abaMaisLidas').className='tabMediaNot';

        document.getElementById('tabTwitter').style.display = 'none';
        document.getElementById('tabFacebook').style.display = dummy;
        document.getElementById('tabMaisLidas').style.display = 'none';
    }
    else if (social=='maislidas'){
        document.getElementById('abaTwitter').className='tabMediaTw';
        document.getElementById('abaFacebook').className='tabMediaFb';
        document.getElementById('abaMaisLidas').className='tabMediaNot tabMediaActive';

        document.getElementById('tabTwitter').style.display = 'none';
        document.getElementById('tabFacebook').style.display = 'none';
        document.getElementById('tabMaisLidas').style.display = dummy;
    }
}

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/pt_BR/all.js#xfbml=1&appId=242977132421994";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function loadMaisLidas(sec){
  if (sec != ''){ path = "/includes/maislidas_day-"+sec+".html"; }
  else { path = "/includes/maislidas_day.html";}
  $("#tabMaisLidas").load(path, function(response, status, xhr) {
    if (status == "error") {
      var msg = "Conteúdo acima é ilustrativo. Não foi possível carregar os dados - ";
      $("#tabMaisLidas").append(msg + xhr.status + " " + xhr.statusText);
    }
  });
}

function loadMaisInternas(sec){
  if (sec != ''){ path = "/includes/maislidas_li-"+sec+".html"; }
  else { path = "/includes/maislidas_li.html";}
  $("#abaMaisLidasNoticias").load(path, function(response, status, xhr) {
    if (status == "error") {
      var msg = "Conteúdo acima é ilustrativo. Não foi possível carregar os dados - ";
      $("#abaMaisLidasNoticias").append(msg + xhr.status + " " + xhr.statusText);
    }
  });
}
function trocarAbaSocialI(social){
    var isIE = (navigator.appName=='Microsoft Internet Explorer');
    if (isIE){ var dummy = 'block';}
    else{var dummy = 'table';}
    if (social=='maislidas'){
        document.getElementById('abaMaisLidasI').className='tabMediaNot tabMediaActive';
        document.getElementById('abaMaisComentadas').className='tabMediaNot';
        document.getElementById('abaMaisSociais').className='tabMediaNot';

        document.getElementById('tabMaisLidasI').style.display = dummy;
        document.getElementById('tabMaisComentadas').style.display = 'none';
        document.getElementById('tabMaisSociais').style.display = 'none';
    }
    else if (social=='maiscomentadas'){
        document.getElementById('abaMaisLidasI').className='tabMediaNot';
        document.getElementById('abaMaisComentadas').className='tabMediaNot tabMediaActive';
        document.getElementById('abaMaisSociais').className='tabMediaNot';

        document.getElementById('tabMaisLidasI').style.display = 'none';
        document.getElementById('tabMaisComentadas').style.display = dummy;
        document.getElementById('tabMaisSociais').style.display = 'none';
    }
    else if (social=='maissociais'){
        document.getElementById('abaMaisLidasI').className='tabMediaNot';
        document.getElementById('abaMaisComentadas').className='tabMediaNot';
        document.getElementById('abaMaisSociais').className='tabMediaNot tabMediaActive';

        document.getElementById('tabMaisLidasI').style.display = 'none';
        document.getElementById('tabMaisComentadas').style.display = 'none';
        document.getElementById('tabMaisSociais').style.display = dummy;
    }
}