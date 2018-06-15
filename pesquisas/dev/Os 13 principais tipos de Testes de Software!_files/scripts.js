/* Autor: Ondaweb | Comunicação Digital */
function updateViewportDimensions() {
  var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
  return { width:x,height:y };
}
var viewport = updateViewportDimensions();
var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) { uniqueId = "Don't call this twice without a uniqueId"; }
    if (timers[uniqueId]) { clearTimeout (timers[uniqueId]); }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();
var timeToWaitForLast = 100;
function loadGravatars() {
  viewport = updateViewportDimensions();
  if (viewport.width >= 768) {
  jQuery('.comment img[data-gravatar]').each(function(){
    jQuery(this).attr('src',jQuery(this).attr('data-gravatar'));
  });
  }
} // end function
/* Ondaweb regular jQuery */
jQuery(document).ready(function($) {

 /*  ANIMAÇÕES*/

   function init() {
      // start up after 2sec no matter what
      window.setTimeout(function(){
          start();
      }, 10);
  }
  // fade in experience
  function start() {

    $('.animate.start').find('.fadeInUp').css({ bottom: 0, opacity: 1});
    $('.animate.start').find('.fadeInRight').css({ right: 0, opacity: 1});
    $('.animate.start').find('.fadeInLeft').css({ left: 0, opacity: 1});  
    $('.animate.start').find('h2.page-title').css({ bottom: 0, opacity: 1});
    $('.animate.start').find('h1.page-title').css({ bottom: 0, opacity: 1});
    $('.animate.start').find('.desc-title').css({ bottom: 0, opacity: 1});
    $('.animate.start').find('h3').css({ bottom: 0, opacity: 1});
    $('.animate.start').find('h1').css({ bottom: 0, opacity: 1});
    $('.animate.start').find('h2').css({ bottom: 0, opacity: 1});
    $('.animate.start').find('p').css({ bottom: 0, opacity: 1});
  
  }

  $(window).load(function() {
    // fade in page
    init();
  });

    $(window).scroll(function() {
      var scrollCenter = $(window).height() / 2;
      $(".animate").each(function(){
        var workOffsetTop = $(this).offset().top - $(document).scrollTop();
        var workOffsetBot = workOffsetTop + $(this).height();
        if ( workOffsetTop > scrollCenter ) {

        } else if ( workOffsetBot < scrollCenter ) {

        } else {
          
          $(this).find('h2').css({ bottom: 0, opacity: 1});
          $(this).find('.fadeInUp').css({ bottom: 0, opacity: 1});
          $(this).find('.fadeInRight').css({ right: 0, opacity: 1});
          $(this).find('.fadeInLeft').css({ left: 0, opacity: 1});
          $(this).find('h1.page-title').css({ bottom: 0, opacity: 1});
          $(this).find('.desc-title').css({ bottom: 0, opacity: 1});
          $(this).find('h3').css({ bottom: 0, opacity: 1});
          $(this).find('h1').css({ bottom: 0, opacity: 1});
          $(this).find('h2').css({ bottom: 0, opacity: 1});
          $(this).find('p').css({ bottom: 0, opacity: 1});
      
        };
      });
    });

    // AJUSTE DO TAMANHO DO BANNER

    function ajusta_tela(){
      var altura_da_tela = $(window).height();
      var largura_da_tela = $(window).width();
      $('.bg-slider').css({ height: altura_da_tela});
      //$('#produto-height').css({ height: altura_da_tela});
     /* var margem_scroll = 30;
      $('.btn-down').attr('style', ' margin-bottom:' + margem_scroll +'px;');
      $('.ico-calendario').attr('style', ' margin-bottom: 10px;');*/
    };

    ajusta_tela();

    $(window).resize(function() {
      ajusta_tela();

    });

    $(".turmas-curso li p").wrapInner("<div>");       

    $('.open-menu').on('click', function(e){
      //$(this).hide();
      $('.content-menu').attr('style', 'height: 100%;');
       window.setTimeout(function(){
         //$('#menu-principal').attr('style', 'margin-left: 0px;');
         // $('.menu-right').attr('style', 'margin-right: 0px;');
      }, 200);
            
      });

    $('.close-menu').on('click', function(e){
         $('.content-menu').attr('style', 'height: 0;');
          //$('#menu-principal').attr('style', 'margin-left: -100%;');
          //$('.menu-right').attr('style', 'margin-right: -100%;');
          //$('.open-menu').show();
    });

    $('.btn-down').click(function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        var marginTop = 0;
        var top = $(anchor).offset().top - marginTop;
        $('body, html').animate({ scrollTop: top }, 'slow');
    });

    $('.drop-down').click(function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        var marginTop = 0;
        var top = $(anchor).offset().top - marginTop;
        $('body, html').animate({ scrollTop: top }, 'slow');
    });

    $('.menu-cursos a').on('click', function(e){
       e.preventDefault();
        if($(this).hasClass('active') ){
          $(this).removeClass('active');
          $('.box-content').slideUp();
        } else {
            $('.menu-cursos a').removeClass('active');
            $('.box-content').slideUp();
            var conteudo = $(this).attr('href');
            $(this).addClass('active');
            $(conteudo).slideDown();
        }
    });

    $('#clientes .gallery li a').removeClass('fancybox-button');
    $('#clientes .gallery li a').click(function(e){
        e.preventDefault();
    });



 /*DESABILITA/HABILITA SCROLL GOOGLE MAPS*/

  $('.google-maps').click(function () {
    $('.google-maps #map').css("pointer-events", "auto");
  });

  $( ".google-maps" ).mouseleave(function() {
      $('.google-maps #map').css("pointer-events", "none"); 
  });


  var $w = $(window);
  var altura_da_tela = $(window).height() + 150;
  $w.on("scroll", function(){
     if ( $w.scrollTop() >= altura_da_tela ) {
      $('.link-inscricao').addClass('fixed');
     } else {
      $('.link-inscricao').removeClass('fixed');
      //console.log('h1: ', altura_da_tela, ' sTop: ', $w.scrollTop());
     }  
  });

  var $y = $(window);
  var altura_da_tela2 = $(window).height() + 800;
  $y.on("scroll", function(){
     if ( $y.scrollTop() >= altura_da_tela2 ) {
        $('.link-formacao').addClass('fixed');
  //      window.setTimeout(function(){
//        }, 1000);
      
     } else {
     /* $('.link-formacao.fixed').css("top", "0");*/
      $('.link-formacao').removeClass('fixed');
      //console.log('h2: ', altura_da_tela2, ' sTop: ', $y.scrollTop());
     }  
  });

/*FILTRO CALENDÁRIO*/

  function carrregaTurmas(i) {

    var meta_mes = $('.filtro.mes').val();
    var meta_turno = $('.filtro.turno').val();
    var meta_status = $('.filtro.status').val();
    var get_formacao = $('.filtro.formacao').val();
    var get_formacao_id = $('.filtro.formacao option:selected').attr('data-id');
    var get_anchor = $('.anchor').val();
    $('img.loader').slideDown();

    console.log(get_formacao);
    console.log(get_formacao_id);

     $('.sem-resultado-ancora').html('');

    if(meta_mes != '' || meta_status != '' || meta_turno != '') {
      var npost = 99;
    } else { var npost = 3; }

        $.ajax({
            type: 'POST',
            url: '../wp-content/themes/bones/library/php/busca-turmas.php?acao=busca_turma',
            data: {
            meta_mes: meta_mes,
            meta_turno: meta_turno,
            meta_status: meta_status,
            meta_formacao: get_formacao,
            meta_formacao_id: get_formacao_id,
            npost: npost
            }    
        }).done(function(i){

            $('.turmas-curso.ajax').html('');
            $('.turmas-curso.ajax').append(i);
            $('.box-calendario').hide();
            $('.curso-formacao').hide();
            $('.loader').hide();

            if(get_formacao !== 'all'){
               $('.box-calendario.'+ get_formacao+'.result').slideDown();
               $('.curso-formacao.'+ get_formacao).slideDown();
               $('.curso-formacao.result').slideDown();
            } else{
              $(".box-calendario.result").show();
              $(".curso-formacao.result").show();
            }

            if ($('.box-calendario').hasClass('result')) {
               console.log('Opa!');
               $(this).find('.curso-formacao').slideDown();
            } else {
              $('.sem-resultado-ancora').html('<h2 class="center">Desculpe, no momento não temos turmas previstas para essa seleção. Para saber mais, entre em contato conosco pelo email <b>atendimento@targettrust.com.br</b>.</h2>');
            }

            if(get_anchor != '') {
              
              window.setTimeout(function(){
                var marginTop = 10;
                var top = $('#'+get_anchor).offset().top - marginTop;
                $('html, body').animate({scrollTop: top},'slow');
                $('.anchor').val('');
              }, 800);
            }

            /*ORDENA CURSOS DENTRO DA FORMAÇÃO*/
            /*$( ".box-calendario" ).each(function( index ) {
              var Id = $(this).attr('id');

               console.log('#'+Id);

               
                var divs2 = document.querySelectorAll('#'+ Id + ' .curso-formacao');
                var ordem2 = [].map.call(divs2, function(element2) {
                    return element2;
                });
                ordem2.sort(function(a,b) {
                    var ca = parseInt(a.getAttribute('contagem'), 10);
                    var cb = parseInt(b.getAttribute('contagem'), 10);
                    return ca - cb;
                });
                var container2 = document.querySelector('#'+Id);
                for(var i=0; i<ordem2.length; i++) {
                    container2.appendChild(ordem2[i]);   
                }
              
            });*/ //end each

            //ORDENA AS FORMAÇÕES
              var divs = document.querySelectorAll('.calendario .box-calendario');
              var ordem = [].map.call(divs, function(element) {
                  return element;
              });
              ordem.sort(function(a,b) {
                  var ca = parseInt(a.getAttribute('contagem'), 10);
                  var cb = parseInt(b.getAttribute('contagem'), 10);
                  return ca - cb;
              });
              var container = document.querySelector('.calendario');
              for(var i=0; i<ordem.length; i++) {
                  container.appendChild(ordem[i]);   
              }
            
        });

    };

    if (window.location.href.split('?')[0] == 'https://targettrust.com.br/proximas-turmas/'){ 
      carrregaTurmas();
    }

    $('.page-id-11 .filtro').change(function(e){
      $('.box-calendario').hide();
      carrregaTurmas();

    });

    $('.filtro.carreiras').change(function(e){
      var get_anchor = $(this).val();
      var marginTop = 0;
      var top = $('#'+get_anchor).offset().top - marginTop;
      $('html, body').animate({scrollTop: top},'slow');

    });

    $('.depo .filtro.formacao').change(function(e){
      var url = $(this).val(); // get selected value
        if (url) { // require a URL
          window.location = url; // redirect
        }
      return false;
    });

    $('.lista-niveis input').change(function(e){
      var opt_filtro = $(this).val();
      $('.lista-niveis input').prop('checked', false);
      $('article.category-materiais').hide();
      $('.'+opt_filtro).show();
      $(this).prop('checked', true);

    });
    


    

  

  // ANIMA MENU
   /* $('#menu-principal a').click(function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        var marginTop = 80;
        var top = $(anchor).offset().top - marginTop;
        $('body').animate({ scrollTop: top }, 'slow');
    });*/
  // end.

  // SHOW E HIDE 
     /*$('.abre-post').on('click', function(e){
        if($(this).hasClass('active') ){
          $(this).removeClass('active').parent().find('.content-post').slideUp();
        } else {
            $('.abre-post').removeClass('active');
            $('.content-post').slideUp();
            $(this).addClass('active');
            $(this).parent().find('.content-post').slideDown();
        }
      });*/
  // end.

  // PLACEHOLDER  
    $('.placeholder input, .placeholder textarea').each(function(){
      var dataName;
      dataName = $(this).attr('data-name');
      $(this).before('<span>' + dataName + '</span>');
    });

    $('.placeholder input').parent().each(function () {  // busca o span e o input e adiciona a div
      $(this).find('span, input').wrapAll('<div class="styleInput" />')            
    });

    $('.placeholder textarea').parent().each(function () { // busca o span e o input e adiciona a div
      $(this).find('span, textarea').wrapAll('<div class="styleInput" />')            
    });
    
    $('.styleInput').click(function(){ 
      $(this).find('input, textarea').focus();
    });

    $('.styleInput input, .styleInput textarea').focus(function(){
      $(this).parent().find('span').hide();
    });

    $('.styleInput input, .styleInput textarea').blur(function(){
      if($(this).val() == '' || $(this).val() == '__/__/____' || $(this).val() == '___.___.___-__' || $(this).val() == '(__) ____-_____' || $(this).val() == '(__) ____-____'){
        $(this).parent().find('span').show();
      }
    });
  // end.
 
  // BXSLIDER 

    $('.depoimentos').bxSlider({
        mode: 'horizontal',
        pager: false,
        controls: true,
        pause: 4000
    });
    /*$('.bxslider').bxSlider({
        mode: 'fade',
        pager: false,
        controls: false,
        pause: 4000
    });*/
  // end.

   $(".fancybox-button").fancybox({
        prevEffect      : 'none',
        nextEffect      : 'none',
        closeBtn        : false,
        helpers     : {
            title   : { type : 'inside' },
            buttons : {}
        }
    });

  // TRANSFORMA GALEIRA PARA BXSLIDER (opção em pho disponível na functions.php)
    /*transformaGaleria('#gallery-1');
    $('#gallery-1 a').attr('class', 'fancybox-button');
    $('#gallery-1 a').attr('rel', 'fancybox-button');

    $('.galeriabx').bxSlider({
        minSlides: 2,
        maxSlides: 2,
        slideWidth: 360,
        slideMargin: 10
    });

   */ 
  // end.

  // BT MATERIAL
    $('.btnTopo').click(function(e){
       e.preventDefault();
      $('html, body').animate({scrollTop: 0},'slow');
    });
  // end.

  // BLOCKQUOTE
    /*$('blockquote').wrapAll('<div class="blockquote-wrap" />');
    $('blockquote').before('<div class="blockquote-before"> &ldquo; </div>');
    $('blockquote').after('<div class="blockquote-after"> &rdquo; </div>');
    var altura = $('blockquote').height();
    $('.blockquote-after').attr('style', 'padding-top:' + altura + 'px');*/
  // end.

  // PERSONALIZAR INPUT FILE
   /*$('#anexo').change(function(){
        var arquivo = $(this).val();     
        parteArquivo =   arquivo.split('\\');
        $('#arquivo').html(parteArquivo[parteArquivo.length-1]);
    });*/
  // end.

  // VALIDATE
    $('#formulario-contato').validate({
      rules:{
        nome:{ required: true },
        sobrenome:{ required: true },
        email:{ required: true, email: true },
        telefone:{ required: true },
        mensagem: { required: true }
      },
      messages:{
        nome: { required: "" },
        sobrenome: { required: "" },
        email:{ required: "", email: "" },
        telefone: { required: "" },
        mensagem: { required: "" }
      },
      submitHandler: function(form) {
        if($(form).parent()[0].id == "form-newsletter") {  /// formulario da newsletter
          //dataLayer.push({'event' : 'formSubmitted', 'formName' : 'Newsletter'});
          // adiciona email na newsletter com feedback
          jQuery(".feedback").text('Newsletter assinada!');

        } else if($(form).parent()[0].id == "form-inscricao") {  /// formulario de contato
          dataLayer.push({'event' : 'formSubmitted', 'formName' : 'Contato'}); // envia hit para o GA
          
          // envia email de contato e retorna feedback
          jQuery.post("/wp-content/themes/bones/library/php/envia-contato-curso.php",
            $(form).serialize(),
            function(data, status){
              // jQuery(".feedback").text(data);
              console.log(data);
              var feedbackTxt = 'Sua mensagem foi enviada com sucesso! Em breve entraremos em contato com você. Obrigado!';
              var modalContent = "<div style='margin: auto !important;'><img class='imgOK' src='/wp-content/themes/bones/library/images/OK.png'>" +feedbackTxt+ "</div>";
              jQuery.fancybox(modalContent,{
                autoSize: false,
                width: 264, // tamanho da inner box (outer = inner + 15*2 padding)
                height: 264, //
              });
            });
        }
        $(form).trigger("reset");  // limpa formulario apos submit
      },
    });

    $('#formulario-contato').change(function(){  // reseta feedback onchange
      jQuery(".feedback").text('');
    });

  // end.

  // MASKED INPUT
    $(function($){
        $(".data").mask("99/99/9999");
        $(".cpf").mask("999.999.999-99");
        $(".cep").mask("99999-999");
        $(".cnpj").mask("99.999.999/9999-99")
    });
    $(function($){
      $('.telefone').focusout(function(){
        var phone, element;
        element = $(this);
        element.unmask();
        phone = element.val().replace(/\D/g, '');
        if(phone.length > 10) {
          element.mask("(99) 99999-999?9");
        } else {
          element.mask("(99) 9999-9999?9");
        }
      }).trigger('focusout');
    });
  // end.

  loadGravatars();

}); /* end of as page load scripts */

// TRANSFORMA GALERIA PARA BXSLIDER
  /*function transformaGaleria(galeria){
      var gal = jQuery(galeria).html();
      jQuery(galeria).html('');
      jQuery(galeria).append('<ul class="galeriabx">');
      jQuery(galeria).find('ul').append(gal);

      jQuery(galeria).find('dl').each(function(){
         var dl = jQuery(this).html();
         jQuery(this).after('<li>' + dl + '</li>');
         jQuery(this).remove();
      });
      jQuery(galeria).find('br').remove();
  };*/
  // end.



// ------- NOVAS FUNCÕES ----------- //

jQuery(document).ready(function($) {
  jQuery('img.copycb').load(function() {
    var tpo = new Tooltip(jQuery(this), {placement: "bottom", trigger: "click", title:"Copiado!"});
  });

  $('.fake-btn-down').click(function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    var marginTop = 0;
    var top = $(anchor).offset().top - marginTop;
    $('body, html').animate({ scrollTop: top }, 'slow');
  });

}); // fim das funções on.doc.ready

/**
* jQuery.browser.mobile (http://detectmobilebrowser.com/)
*
* jQuery.browser.mobile will be true if the browser is a mobile device */
(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
/**
*/


function cleanHtml(htmltext) {
  // remove tags img
  htmltext = htmltext.replace(/<img[^>]*>/ig, '');
  // remove divs com display none e conteúdo
  htmltext = htmltext.replace(/<div([^>](?!isplay: none))*display: none(.(?!\/div>))*<\/div>/ig, ''); // limpa divs com display none (e conteudos)
  // remove tags script e conteúdo
  htmltext = htmltext.replace(/<script[^<]*<\/script>/ig, '');
  // remove tags div (mantém conteúdo)
  htmltext = htmltext.replace(/<div[^>]*>|<\/div>/ig, '');
  // remove tags b (mantém conteúdo)
  htmltext = htmltext.replace(/<b[^>]*>|<\/b>/ig, '');

  // corrige turma confirmada
  var match = htmltext.match(/(<li([^>](?!tatus-O))*status-O(.(?!\/li>))*<\/li>)/ig);
  var line, linefix;
  if(match) {
    for (var i = 0; i < match.length; i++) {
      line = match[i];
      linefix = line.replace('</li>', ' | <b>(Turma Confirmada)</b></li>');
      htmltext = htmltext.replace( line, linefix );
    }    
  }  

  // remove classes
  htmltext = htmltext.replace(/\sclass="[^"]*"/ig, '');
  // remove ids
  htmltext = htmltext.replace(/\sid="[^"]*"/ig, '');

  // NOVA FORMATAÇÃO //
  htmltext = htmltext.replace(/<h2>/ig, '<h2 style="font-family:tahoma,arial,sans-serif;color:#073763;font-size:13px;font-weight:bold;margin-top:10px;margin-bottom:5px;">Formação: ');
  htmltext = htmltext.replace(/<h3>/ig, '<h3 style="font-family:tahoma,arial,sans-serif;color:#0b5394;font-size:13px;font-weight:bold;margin-top:8px;margin-bottom:2px;">');
  htmltext = htmltext.replace(/<li>/ig, '<li style="font-family:tahoma,arial,sans-serif;color:black;font-size:12px;font-weight:normal;">');
  htmltext = htmltext.replace(/<a(?=[>|\s])/ig, '<a style="color:#09457b"');

  return htmltext;
}

function doCopy() {
  document.execCommand('selectAll',false,null);
  document.execCommand("copy");
}

function copyToClipboard(element) {
  var clean = 0;
  if( clean ) {
    var $temp = jQuery("<input>");
    jQuery("body").append($temp);
    var textToCopy = jQuery(element).parent().html();
    //textToCopy = cleanHtml(textToCopy);
    $temp.val(textToCopy).select();
    document.execCommand("Copy");
  } else {
    var $temp = jQuery("<div contentEditable='true' style='position:fixed;right:0;top:50%;' onfocus='doCopy()'>");
    jQuery("body").append($temp);
    var textToCopy = jQuery(element).parent().html();
    textToCopy = cleanHtml(textToCopy);
    $temp.html(textToCopy).focus().focus().remove();
  }

  jQuery(element).fadeOut(400, function() {
    jQuery(element).attr("src", function(i, origValue){return origValue.replace("copy.png","tick-white.png");});
  });
  jQuery(element).fadeIn(400);
}