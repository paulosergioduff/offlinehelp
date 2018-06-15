if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var s=t.fn.jquery.split(" ")[0].split(".");if(s[0]<2&&s[1]<9||1==s[0]&&9==s[1]&&s[2]<1||s[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(t){"use strict";function s(i,e){this.$body=t(document.body),this.$scrollElement=t(t(i).is(document.body)?window:i),this.options=t.extend({},s.DEFAULTS,e),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function i(i){return this.each(function(){var e=t(this),r=e.data("bs.scrollspy"),o="object"==typeof i&&i;r||e.data("bs.scrollspy",r=new s(this,o)),"string"==typeof i&&r[i]()})}s.VERSION="3.3.7",s.DEFAULTS={offset:10},s.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},s.prototype.refresh=function(){var s=this,i="offset",e=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(i="position",e=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var s=t(this),r=s.data("target")||s.attr("href"),o=/^#./.test(r)&&t(r);return o&&o.length&&o.is(":visible")&&[[o[i]().top+e,r]]||null}).sort(function(t,s){return t[0]-s[0]}).each(function(){s.offsets.push(this[0]),s.targets.push(this[1])})},s.prototype.process=function(){var t,s=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),e=this.options.offset+i-this.$scrollElement.height(),r=this.offsets,o=this.targets,n=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),s>=e)return n!=(t=o[o.length-1])&&this.activate(t);if(n&&s<r[0])return this.activeTarget=null,this.clear();for(t=r.length;t--;)n!=o[t]&&s>=r[t]&&(void 0===r[t+1]||s<r[t+1])&&this.activate(o[t])},s.prototype.activate=function(s){this.activeTarget=s,this.clear();var i=this.selector+'[data-target="'+s+'"],'+this.selector+'[href="'+s+'"]',e=t(i).parents("li").addClass("active");e.parent(".dropdown-menu").length&&(e=e.closest("li.dropdown").addClass("active")),e.trigger("activate.bs.scrollspy")},s.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var e=t.fn.scrollspy;t.fn.scrollspy=i,t.fn.scrollspy.Constructor=s,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=e,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var s=t(this);i.call(s,s.data())})})}(jQuery),+function(t){"use strict";function s(){var t=document.createElement("bootstrap"),s={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in s)if(void 0!==t.style[i])return{end:s[i]};return!1}t.fn.emulateTransitionEnd=function(s){var i=!1,e=this;t(this).one("bsTransitionEnd",function(){i=!0});var r=function(){i||t(e).trigger(t.support.transition.end)};return setTimeout(r,s),this},t(function(){t.support.transition=s(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(s){return t(s.target).is(this)?s.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);

$(document).ready(function () {

	if (typeof hljs != "undefined") {
        hljs.initHighlightingOnLoad();
    }

	var lastOpacity = "";
	var lastPosition = "";

	/*var images = ['bg-hd-1-guia.png', 'bg-hd-2-guia.png', 'bg-hd-3-guia.png']; 

	$('.wrapper-header_guia').css({'background-image': 'url(img/' + images[Math.floor(Math.random() *      images.length)] + ')'});	*/

	var page = $('body,html');
	
	$('.ancora_guia').click(function() {
		page.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top-80
		}, 600);
		return false;		
	});

	$(".comment-button span").on("click", function(){		
		var href = $(".comment-button span").parent().data("href");
		page.animate({
			scrollTop: $(href).offset().top-80
		}, 600);
		return false;
	});

	$(".note-button span").on("click", function(){
		var idcomp_anotacao = $(this).parent().data("id");
		location.href = "https://www.devmedia.com.br/anotacoes/add/?idcomp=" + idcomp_anotacao;
	});

	var onFooter = false;
	var alturaMenu = null; 
	var alturaRodape = null;
	var margin = null;
	var menuTopo = null;

	function fixMenuLeft() {
		alturaMenu = $("#menu-body_guia").outerHeight(true);
		alturaRodape = $(".dm-limitfoot").outerHeight();
		margin = $(document).height() - (alturaMenu + alturaRodape);
		menuTopo = $("#menu-body_guia").offset().top;

		if (window.innerWidth > 767) {
			var menu = $("#menu-body_guia");
			var parent = menu.parent();
			var parentTop = parent[0].getBoundingClientRect().top - 80;
			var left = (parent[0].clientWidth - menu[0].clientWidth) / 2;

			if (parentTop <= 0) {
				if( menuTopo > margin ){
					$(".icon-facebook-logo-button").css("display","none");
					$(".icon-twitter").css("display","none");
					
				}else{
					menu.css("position", "fixed");
					menu.css("top", "90px");				
					menu.css("opacity", 1);
					menu.css("bottom","");
					lastOpacity = 1;
					lastPosition = "fixed";

					$(".icon-facebook-logo-button").css("display","");
					$(".icon-twitter").css("display","");

					$(".busca-sugerida").fadeOut(250);
				}
				
				onFooter = ($(window).scrollTop() + $("header").outerHeight(true)) > menu.offset().top;	
				// menu.css("transform", "translateY(-50%)");
			} else {	
				menu.css("position", "relative");
				menu.css("opacity", 0);
				lastOpacity = 0;
				lastPosition = "relative";

				$(".busca-sugerida").fadeIn(250);
			}
		}
	}

	function fixMenuRight() {
		if (window.innerWidth > 767) {
			var menu = $("#menu-body-side_guia");

			if(menu.length == 0){
				var menu = $(".menu-trilha");

				var parent = menu.parent();
				var parentTop = parent[0].getBoundingClientRect().top;
				var right = (parent[0].clientWidth - menu[0].clientWidth) / 2;
				var widthContainer = $(".col-right-bd_guia").width();
				if (parentTop <= 0) {					
					menu.css("position", "fixed");
					menu.css("top", 0);
					menu.css("margin-top", "30px");
					menu.width(widthContainer);
				} else {
					menu.css("position", "relative");
					menu.css("margin-top", "15px");
					menu.css("width","");
				}

				var alturaMenu = $(".menu-trilha ul").height();
				$(".linha").height(alturaMenu - 50);
				$(".linha").css("margin-top","70px");

			} else {
				var parent = menu.parent();
				var parentTop = parent[0].getBoundingClientRect().top;
				var right = (parent[0].clientWidth - menu[0].clientWidth) / 2;
				if (parentTop <= 0) {					
					menu.css("position", "fixed");
					menu.css("top", "0");
					menu.css("margin-top", "75px");					
				} else {
					menu.css("position", "relative");
					//menu.css("top", 0);
					menu.css("margin-top", "45px");
				} 
			}
		}
	}

	function ocultarModal() {
		$("#modal-msg").removeClass("active");
	}

	$(".h3-title_guia").each(function(i, e){
		var topico = $(e).text();
		var idtopico = $(e).parent().attr('id');

		var itemMenu = "<li class='item-menu-side_guia'><a href='#" + idtopico + "' class='link-menu-side_guia'>" + topico + "</a></li>";

		var itemMenuMobile = "<li class='item-menu-side-mobile_guia'><a href='#" + idtopico + "' class='link-menu-side-mobile_guia'>" + topico + "</a></li>";		

		$("ul.menu-side_guia").append(itemMenu);
		$("ul.menu-side-mobile_guia").append(itemMenuMobile);
	});

	$(".h3-title_guia").each(function(i, e){
		var topico = $(e).text();
		var idtopico = $(e).parent().attr('id');		
		var posicao = $(".h3-title_guia").index(this);
		var destaqueClasse = "normal";		
		var itemDestaque = "";

		if($(this).data("destaque") != undefined){
			itemDestaque = "item-menu-destaque";
			destaqueClasse = "item-destaque";			
		}	

		if(posicao % 2 == 0){		

			var itemMenu = "<li class=" + itemDestaque + "><a class='item' href='#" + idtopico + "'>" + topico + "</a><a href='#" + idtopico + "' class='indice indice-impar " + destaqueClasse + " '>" + (posicao + 1)+ "</a></li>";

		} else {

			var itemMenu = "<li  class=" + itemDestaque + "><a href='#" + idtopico + "' class='indice indice-par " + destaqueClasse + "'>" + (posicao + 1)+ "</a><a class='item' href='#" + idtopico + "'>" + topico + "</a></li>";
		}
		
		$(".menu-trilha ul").append(itemMenu);
	});

	$(".linha").css("margin-top","70px");

	$(".menu-trilha .indice").on("click", function(e){
		e.preventDefault();
		page.clearQueue();
		page.animate({
			scrollTop:  $( $.attr(this, 'href') ).offset().top-80
		}, 600);
		
		e.preventDefault();
	});

	$(".menu-trilha .item").on("click", function(e){
		e.preventDefault();
		page.clearQueue();
		page.animate({
			scrollTop:  $( $.attr(this, 'href') ).offset().top-80
		}, 600);
		
		e.preventDefault();
	});

	$(".menu-trilha ul").mCustomScrollbar({
		theme:"dark",
		scrollInertia: 600,
		scrollbarPosition: "outside",
		autoHideScrollbar: true		
	});


	$(".link-menu-side_guia").on("click", function(e){
	
		if(!$(this).hasClass('item-ativo')){
			$('.link-menu-side_guia').removeClass('link-menu-side-active_guia');
			$(this).addClass('link-menu-side-active_guia');
			page.clearQueue();
			page.animate({
				scrollTop:  $( $.attr(this, 'href') ).offset().top-80
			}, 600);
		}

		e.preventDefault();
			
	});

	$(".link-menu-side-mobile_guia").on("click", function(e){				
		page.clearQueue();
		page.animate({
			scrollTop:  $( $.attr(this, 'href') ).offset().top-80
		}, 600);
	
		e.preventDefault();			
	});

	var idguia = $("#idguia").val();

	if(idguia == 39948 || idguia == 39946){
		$(".box-mid.box-tecnologias").css("cursor","pointer");
	}

	$(window).on("scroll", function () {
		fixMenuLeft();
		fixMenuRight();

		var alturaFooter = 0;
		var alturaMvp = 0;
		var distanciaBottom = $(document).height() - ($(window).height() + $(window).scrollTop());

		if( $(".main-footer").length > 0 ){
			alturaFooter = $(".main-footer").height();
		}

		if( $(".banner-mvp").length > 0 ){
			alturaMvp = $(".banner-mvp").height();
		}

		if( distanciaBottom < (alturaFooter + alturaMvp) ) {

			verificaMenu();
			$(".menu_guia").addClass("menu_guia_oculto");

		} else {
			$(".menu_guia").removeClass("menu_guia_oculto");
		}
		
	}); 

	$(window).resize(function(){
		
		var menuTrilha = $(".menu-trilha");

		if(menuTrilha.length > 0 ){
			var containerMenuTrilha = $(".col-right-bd_guia").width();
			menuTrilha.width(containerMenuTrilha);
		}

		var menu = $("#menu-body_guia");
		var parent = menu.parent();
		var parentTop = parent[0].getBoundingClientRect().top - 80;
		
		if(window.innerWidth < 768){
			menu.css("opacity", "");
			menu.css("position", "");			

		} else {
			menu.css("opacity", lastOpacity);
			menu.css("position", lastPosition);	
			
			if(parentTop <= 0 ){
				menu.css("position","fixed");
				menu.css("opacity", 1);
				menu.css("top","90px");
				lastPosition = "fixed";
			} else {
				menu.css("position","relative");
				lastPosition = "relative";
			}
		}

		if(window.innerWidth >= 580){
			var termo = $("#busca-sugerida").data('termo');			

			if($(".btn-text-top").val() != ""){

				if ($(".form-busca.form-busca-off a").length < 1){
					$('.form-busca.form-busca-off').append('<a data-termo="' + termo + '" id="busca-sugerida" class="busca-sugerida" href="https://www.devmedia.com.br/busca/?txtsearch=' + termo + '&busca=1">Pesquisar por ' + termo + '</a>');
				}				
			}
			
			$(".busca-sugerida-mobile").remove();

			var largura = $('.btn-text-top').innerWidth();
			$('#busca-sugerida').css('width',largura);
			
			
		} else {
			var termo = $("#busca-sugerida").data('termo');
			//$(".form-busca.form-busca-off a.busca-sugerida").fadeOut();

			if($(".busca-mobile input").val() != "" && $(".busca-mobile input").val() != undefined){

				if ($(".busca-sugerida-mobile").length < 1) {
					$('.content-site-devmedia').prepend('<a class="busca-sugerida-mobile" id="busca-sugerida" data-termo="' + termo + '" href="https://www.devmedia.com.br/busca/?txtsearch=' + termo + '&busca=1"><p>Pesquisar por ' + termo + '</p><a/>');
				}				
			}
			
			$(".form-busca.form-busca-off .busca-sugerida").remove();			
		}
		
		defineAltura();
	});

	$(".like-button span, .like-voto .icon-like, .like-voto .icon-like-usuario").on("click", function(){
		
		var idcomp = $("#idguia").val();
		var tipovoto = $(this).parent().data('tipo');

		if(idcomp < 0){

			$("#modal-msg").addClass("active");
			$("#modal-msg .msg").text("IdComp menor que 0! Guia inválida!");

		} else {
			$.ajax({
				type: "POST",
				url: "https://www.devmedia.com.br/guias/ajax/voto.php",
				data: {
					idComp: idcomp,
					tipoVoto: tipovoto
				},
				beforeSend: function(){					
					$(".like-button .menu-icone-like-count").addClass("changing");
				},
				success: function(data){
					var resultado = JSON.parse(data);						

					if(resultado.tipo == 2){
						$("#modal-msg").addClass("active");
						$("#modal-msg .msg").text("Você precisa estar logado para curtir essa guia.");						
					} else {
						$("#modal-msg").addClass("active");
						$("#modal-msg .msg").text(resultado.mensagem);						
					}
					
					if(resultado.tipo == 1){
						if(resultado.voto == 1){
							var total_likes = parseInt($(".menu-icone-like-count").text());
							var new_total_likes = total_likes + 1;
							$(".menu-icone-like-count").text(new_total_likes);
							$(".like-button").addClass("active");
							$(".like-voto .icon-like").addClass("icon-like-usuario").removeClass("icon-like");
							$(".numlikes").text(new_total_likes);
						} else if(resultado.voto == 0){
							
						}

						$(".like-button .menu-icone-like-count").removeClass("changing");
					}
				}
			})
		}
	});
	
	$(".fav-button span, .icon-favorite").on("click", function(e){
		var id = $(this).parent().data('id');
		
		if($(this).parent().hasClass("active")){

			$("#modal-msg").addClass("active");
			$("#modal-msg .msg").text("Você já favoritou essa guia.");

		} else {			
		
			var valor = true;
			var dados = { "idcomp": id, "cod": valor, "funcao": "adicionarFavorito" };
			
			$.ajax({
				type: "POST",
				url: "https://www.devmedia.com.br/guias/scripts/funcoesgerais.php",
				data: dados,
				dataType: "json",
				beforeSend: function(){

				},
				success: function(data){
					if (data.status) {
						$(".fav-button").addClass("active");
						//$(".icon-favorite").removeClass("icon-favorite");
						$(".icon-favorite").addClass("icon-favorite-full").removeClass("icon-favorite");
						$("#modal-msg").addClass("active");
						$("#modal-msg .msg").text("Favorito adicionado com sucesso");
						
					} else {
						// Remover Favorito
					}
				},
				error: function(data){
					$("#modal-msg").addClass("active");
					$("#modal-msg .msg").text(data.responseText);
					//alert(data.responseText);
				}
			})

		}

		e.preventDefault();
	});	

	var menuScrollSpy = $("#menu-body-side_guia");

	if(menuScrollSpy.length == 0){
		$('body').scrollspy({
			target: '.menu-trilha',
			offset: 270
		});

		$('.menu-trilha').on('activate.bs.scrollspy', function (e) {
			var link = $(e.target);
			var top = link[0].offsetTop;

			$(".menu-trilha ul").mCustomScrollbar("scrollTo", top - 20,{
				scrollInertia:600,
			});
		});

	} else {

		$('body').scrollspy({
			target: '#menu-body-side_guia',
			offset: 270
		});		
	
		$('#menu-body-side_guia').on('activate.bs.scrollspy', function (e) {
			var link = $(e.target).find("a");
			var top = link[0].offsetTop;
	
			var menu = $(".nav.menu-side_guia");
	
			menu.clearQueue();
			menu.animate({
				scrollTop:  top
			}, 600);
		});
	}	

	$(window).scroll(function(){        
        if($(".content-area_guia").first().offset().top > $(window).scrollTop()) {
            $("a.ancora_guia.ancora_guia_topo").hide(200);
        } else {            
            $("a.ancora_guia.ancora_guia_topo").show(200);
        }
    });

	$("body").on("click", "#modal-msg, #modal-fav i, .close-modal", function () {
		ocultarModal();
	});

	$(".icon-share-full").on("mouseover", function(){		
		$(".icon-twitter").removeClass("socialOculto");
		$(".icon-facebook-logo-button").removeClass("socialOculto");
		$(".icon-twitter").addClass("socialVisivel");		
		$(".icon-facebook-logo-button").addClass("socialVisivel");
		$(".icon-twitter").css("cssText","animation-name: moveTwitter, animation-duration: .7s, animation-fill-mode: fowards;");
		$(".icon-facebook-logo-button").css("cssText","animation-name: moveFacebook, animation-duration: .7s, animation-fill-mode: fowards");
	});


	$(".wrapper-header_guia").on("click", function(){
		if( $(".icon-twitter").hasClass("socialVisivel") && $(".icon-facebook-logo-button").hasClass("socialVisivel") ){
			$(".icon-twitter").removeClass("socialVisivel");
			$(".icon-facebook-logo-button").removeClass("socialVisivel");
			$(".icon-twitter").addClass("socialOculto");
			$(".icon-facebook-logo-button").addClass("socialOculto");		
			$(".icon-twitter").css("cssText","animation-name: removeTwitter, animation-duration: .7s, animation-fill-mode: fowards;");
			$(".icon-facebook-logo-button").css("cssText","animation-name: removeFacebook, animation-duration: .7s, animation-fill-mode: fowards");		
			$(".icon-twitter").hide(150);
			$(".icon-facebook-logo-button").hide(150);
		}		
	});

	function adicionaConteudo(){

		var contador = 0;

		$(".content-area_guia").each(function(i){
			
			if(contador < 2){
				if(i%2 == 0){
					//$(this).addClass("secao-impar");
					if(idguia != "39946"){
						$(this).before("<div class='modulo-mvp'><a id='ga-mvp-guias-mid-link" + contador + "' href='#'><img src='https://www.devmedia.com.br/guias/img/modulo_mvp_guia_interna.png'><div class='acesso-conteudo'>Quer ter acesso a todos esses conteúdos?</div><div class='saiba-mais'>Saiba mais</div></a></div>");
						contador+=1;
					}
					
				} else {
					//$(this).addClass("secao-impar");
				}
			}

			
		});	
		$(".modulo-mvp a").attr('href','#modulo-mvp');
	}


	var mvp = $("#usuario-mvp").val();

	if(mvp == 0){
		adicionaConteudo();
	}

	function verificaMenu(){
		if (typeof $.fn.menuFixer != "undefined"){
		
			var menu = $(".menu-trilha");
			var menu2 = $(".menu_guia");
	
			if( $(".banner-mvp").length > 0 ){
	
				if(menu.length > 0){
					$(".menu-trilha").menuFixer(50, $(".banner-mvp"));
				} else {
					$(".container-menu-side_guia").menuFixer(90, $(".banner-mvp"));
				}
	
				if(menu2.length > 0){
					$(".menu_guia").menuFixer(115, $(".banner-mvp"));
				} else {
					$(".container-menu-side_guia").menuFixer(90, $(".banner-mvp"));
				}
	
	
			} else {
	
				if(menu.length > 0){
					$(".menu-trilha").menuFixer(50, $(".main-footer"));
				} else {
					$(".container-menu-side_guia").menuFixer(90, $(".main-footer"));
				}
	
				if(menu2.length > 0){
					$(".menu_guia").menuFixer(115, $(".main-footer"));
				} else {
					$(".container-menu-side_guia").menuFixer(90, $(".main-footer"));
				}
	
			}
	
		}
	}


	$(".icon-twitter").on("click", function(e){			
		e.stopPropagation();		
	});

	$(".icon-facebook-logo-button").on("click", function(e){		
		e.stopPropagation();			
	}); 

	if (typeof $.fn.menuFixer != "undefined"){
		
		var menu = $(".menu-trilha");
		var menu2 = $(".menu_guia");

		if( $(".banner-mvp").length > 0 ){

			if(menu.length > 0){				
				$(".menu-trilha").menuFixer(50, $(".banner-mvp"));
			} else {
				$(".container-menu-side_guia").menuFixer(90, $(".banner-mvp"));
			}

			if(menu2.length > 0){
				$(".menu_guia").menuFixer(115, $(".banner-mvp"));
			} else {
				$(".container-menu-side_guia").menuFixer(90, $(".banner-mvp"));
			}


		} else {

			if(menu.length > 0){
				$(".menu-trilha").menuFixer(50, $(".main-footer"));
			} else {
				$(".container-menu-side_guia").menuFixer(90, $(".main-footer"));
			}

			if(menu2.length > 0){
				$(".menu_guia").menuFixer(115, $(".main-footer"));
			} else {
				$(".container-menu-side_guia").menuFixer(90, $(".main-footer"));
			}

		}

	}

	$(".modulo-mvp a").on("click", function(e){		

		if(comentariosReady == true){
			
			page.clearQueue();
			page.animate({
				scrollTop: $('#modulo-mvp').offset().top-80
			}, 600);

		} else {

			page.clearQueue();
			page.animate({
				scrollTop: $('#modulo-mvp').offset().top-80
			}, 600);			
			
			document.getElementsByClassName('comentario-load')[0].addEventListener('comentariosReady', function(){
				page.clearQueue();
				page.animate({
					scrollTop: $('#modulo-mvp').offset().top-80
				}, 600);
			});

		}

		e.preventDefault();
		
	});

	$(".topo-link-acesso").on("click", function(e){
		if(comentariosReady == true){
			
			page.clearQueue();
			page.animate({
				scrollTop: $('#modulo-mvp').offset().top-80
			}, 600);

		} else {

			page.clearQueue();
			page.animate({
				scrollTop: $('#modulo-mvp').offset().top-80
			}, 600);			
			
			document.getElementsByClassName('comentario-load')[0].addEventListener('comentariosReady', function(){
				page.clearQueue();
				page.animate({
					scrollTop: $('#modulo-mvp').offset().top-80
				}, 600);
			});

		}

		e.preventDefault();
	});

	$(".item-menu-destaque .item-destaque").hover(function(){
		$(this).parent().addClass("hover-atualizado");
	});

	$(".item-menu-destaque .item-destaque").hover(function(){
		$(this).parent().addClass("hover-atualizado");
	});

	$(".item-menu-destaque .item-destaque").mouseout(function(){
		$(this).parent().removeClass("hover-atualizado");
	});

	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		$(".mCustomScrollBox").removeClass("mCustomScrollBox");
	}

	var nomecategoria = $("#categoria-guia-valor").val();

	if(nomecategoria == "comece aqui"){

		var nome = $(".h1-title_guia").text();
		nome = nome.replace("Programador", "");
		nome = nome.replace("Carreira Programador", "");
		nome = nome.replace("para es", "");
		nome = nome.replace("para programadores", "");
		
		$(".mestre-tecnologia .tecnologia").text(nome);

	} else {
		nomecategoria = nomecategoria.replace("mais assuntos", "outras tecnologias");
		$(".mestre-tecnologia .tecnologia").text(nomecategoria);
	}

	// FUNÇÕES PARA REDIMENSIONAMENTO DO PLAYER NO IFRAME
	function calcularAspectRatioVideo(originalH, originalW, newW){
		if(originalH != null && originalW != null && newW != null){
			return (originalH / originalW) * newW;
		}
		return 0;
	}

	$(".content-area_guia").each(function(i){
	
		if(i%2==0){

			if( $(".content-area_guia:eq("+i+")").hasClass("secao-par") ){
	
			} else {
				$(".content-area_guia:eq("+i+")").addClass("secao-par")
			}
		}

	});

	function defineAltura(){
		//var width = document.getElementById('primeiros-passos').getBoundingClientRect().width;
		var width = document.getElementsByClassName('intro-area_guia')[0].getBoundingClientRect().width;
		var width = width-100;
		var height = calcularAspectRatioVideo(360, 640, width)
		$('#player-video').width(width);
		$('#player-video').height(height);
	}

	defineAltura();
	window.addEventListener('resize', defineAltura, false);	

	$(".container-rel-link_guia").on("mouseenter", function(){
		if( $(this).hasClass("mvp-content") ){
			$(this).find(".container-img-rel-link_guia").removeClass("mvp-opacity");
			$(this).find(".tag-title-rel-link_guia").removeClass("mvp-opacity");
		}
		
		/*console.log("Sobre");
		console.log($(this));*/
	});

	$(".container-rel-link_guia").on("mouseleave", function(){
		if( $(this).hasClass("mvp-content") ){
			$(this).find(".container-img-rel-link_guia").addClass("mvp-opacity");
			$(this).find(".tag-title-rel-link_guia").addClass("mvp-opacity");
		}
		
		/*console.log("Fora");
		console.log($(this));*/

	});

	//if(idguia == 37809){

		$(".container-rel-link_guia .container-title-rel-link_guia .description-title-link_guia").each(function(){
			var tipo = $(this).parent().parent().data("tipo");
			var qtd_aulas = $(this).parent().parent().data("aulas");
			var classe_assista = "";

			var texto = "";

			if( tipo == "curso" || tipo == "artigo" ){

				if(tipo == "curso") {
					
					if(idguia == 39946 && mvp == 0){
						texto = "Assista três aulas grátis :)";						

						if(qtd_aulas != "5"){
							classe_assista = "assista-gratis";
						}
					} else {						
						texto = "Ver grade completa";
					}

					if(qtd_aulas == "5"){
						texto = "Ver grade completa";
					}

				} else {
					texto = "Ver introdução";
				}
				
				$(this).append("<p class='grade-completa'><span class='grade-completa-link " + classe_assista + "'>" + texto + "<svg class='slide-next' viewBox='0 0 4.6 7.5' style='enable-background:new 0 0 4.6 7.5;' xml:space='preserve'><path class='seta' d='M0.9,6.6l2.9-2.9L0.9,0.9'></path></svg> </span></p>");
			}

		});

		if(mvp == 0){
			$(".container-rel-link_guia").each(function(){
				var tipo = $(this).data("tipo");
				var visibilidade = $(this).data("visivel");

				var cadeado_fechado = "<div class='cadeado cadeado-fechado'><svg class='' xmlns='http://www.w3.org/2000/svg' viewBox='1276.277 1210.78 27.039 30.048'> <g id='Group_7813' data-name='Group 7813' transform='translate(1284.755 1210.78) rotate(20)'> <g id='Group_7779' data-name='Group 7779' transform='translate(0 0)'> <g id='Group_7778' data-name='Group 7778'> <path id='Path_13786' data-name='Path 13786' class='svg-cadeado' d='M16.847,9.1H15.1V5.121a5.23,5.23,0,0,0-10.457,0V9.1H2.9a2.908,2.908,0,0,0-2.9,2.9v9.876a2.908,2.908,0,0,0,2.9,2.9H16.847a2.908,2.908,0,0,0,2.9-2.9V12.006A2.908,2.908,0,0,0,16.847,9.1ZM6.582,5.121A3.243,3.243,0,0,1,9.874,1.936a3.243,3.243,0,0,1,3.292,3.184V9.1H6.582ZM17.816,21.882a.969.969,0,0,1-.968.968H2.9a.969.969,0,0,1-.968-.968V12.006a.969.969,0,0,1,.968-.968H16.847a.969.969,0,0,1,.968.968Z'/> </g> </g> <g id='Group_7781' data-name='Group 7781' transform='translate(8.085 13.846)'> <g id='Group_7780' data-name='Group 7780' transform='translate(0 0)'> <path id='Path_13787' data-name='Path 13787' class='svg-cadeado' d='M1.791,0a1.791,1.791,0,0,0-.97,3.3V5.422a.968.968,0,1,0,1.936,0V3.3A1.791,1.791,0,0,0,1.791,0Z'/> </g> </g> </g> </svg></div>";

				var cadeado_aberto = "<div class='cadeado cadeado-aberto'><svg class='' xmlns='http://www.w3.org/2000/svg' viewBox='1271.29 1113.734 33.898 34.377'> <g id='Group_7801' data-name='Group 7801' transform='matrix(0.966, -0.259, 0.259, 0.966, -657.409, -2489.802)'> <path id='Subtraction_1' data-name='Subtraction 1' class='svg-cadeado' d='M2682.822-202.77h0a2.888,2.888,0,0,1-.99-.175l-13.1-4.769a2.909,2.909,0,0,1-1.736-3.723l3.378-9.28a2.917,2.917,0,0,1,2.733-1.911,2.886,2.886,0,0,1,.99.175l1.636.6,1.362-3.741a5.151,5.151,0,0,1,4.848-3.345,5.3,5.3,0,0,1,1.817.322,5.211,5.211,0,0,1,3.355,5.925l-1.854-.638a3.283,3.283,0,0,0-2.164-3.468,3.372,3.372,0,0,0-1.156-.205,3.208,3.208,0,0,0-3.027,2.071l-1.361,3.74,4.033,1.468,5.841,2.136a2.922,2.922,0,0,1,1.509,3.63l-3.379,9.281A2.915,2.915,0,0,1,2682.822-202.77Zm-9.72-17.922a.972.972,0,0,0-.911.637l-3.378,9.28a.97.97,0,0,0,.579,1.241l13.1,4.769a.962.962,0,0,0,.33.058.973.973,0,0,0,.911-.637l3.378-9.281a.971.971,0,0,0-.579-1.241l-13.1-4.768A.961.961,0,0,0,2673.1-220.693Z' transform='translate(-1393.593 5328.312) rotate(-25)'/> <path id='Path_13787' data-name='Path 13787' class='svg-cadeado' d='M1.791,0a1.791,1.791,0,0,0-.97,3.3V5.422a.968.968,0,1,0,1.936,0V3.3A1.791,1.791,0,0,0,1.791,0Z' transform='matrix(0.996, -0.087, 0.087, 0.996, 941.52, 4000.854)'/> </g> </svg></div>";

				var svg = cadeado_fechado + cadeado_aberto;

				svg = "<span class='link-cadeados' href='#'>" + svg + "<div class='mvp-acesso-completo'><span class='acesso-completo-texto'>Quer ter acesso completo a todos os conteúdos?</span><span class='mvp-saiba-mais'>Saiba mais</span></div></span>";

				if( visibilidade == "mvp" ){
					
					$(this).append(svg).addClass("mvp-content");
					$(this).children(".container-img-rel-link_guia").addClass("mvp-opacity");
					$(this).children(".container-title-rel-link_guia").find(".tag-title-rel-link_guia").addClass("mvp-opacity");
					$(this).children(".container-title-rel-link_guia").find(".grade-completa-link").css("color","#535353");
					$(this).children(".container-title-rel-link_guia").find(".seta").css("stroke","#FFB74E");
					/*$(this).addClass("mvp-opacity");
					console.log(this);*/
				} else if( visibilidade == "free" ) {
					$(this).append("<div class='free-tag'>free</div>").addClass("free-content");
				}
			});
		}
	$(".link-cadeados").on("click", function(e){
		e.preventDefault();
		e.stopPropagation();

		if(comentariosReady == true){

			page.clearQueue();
			page.animate({
				scrollTop: $('#modulo-mvp').offset().top-80
			}, 600);

		} else {

			page.clearQueue();
			page.animate({
				scrollTop: $('#modulo-mvp').offset().top-80
			}, 600);
			
			document.getElementsByClassName('comentario-load')[0].addEventListener('comentariosReady', function(){
				page.clearQueue();
				page.animate({
					scrollTop: $('#modulo-mvp').offset().top-80
				}, 600);
			});

		}
	});
		$(".mvp-acesso-completo").on("click", function(e){
			e.preventDefault();
			e.stopPropagation();
			
			if(comentariosReady == true){

				page.clearQueue();
				page.animate({
					scrollTop: $('#modulo-mvp').offset().top-80
				}, 600);
	
			} else {
	
				page.clearQueue();
				page.animate({
					scrollTop: $('#modulo-mvp').offset().top-80
				}, 600);
				
				document.getElementsByClassName('comentario-load')[0].addEventListener('comentariosReady', function(){
					page.clearQueue();
					page.animate({
						scrollTop: $('#modulo-mvp').offset().top-80
					}, 600);
				});
	
			}

		});

		$(".grade-completa-link").on("click", function(e){
			e.preventDefault();
			e.stopPropagation();

			var url = $(this).closest(".container-rel-link_guia").attr("href");
			location.href = url;
		});

		$(".link-cadeados").on("mouseenter", function(){
			$(this).closest('.container-rel-link_guia').find('.tag-title-rel-link_guia').hide(300);

			var cadeado_fechado_svg = $(this).find(".cadeado-fechado");

			cadeado_fechado_svg.addClass("cadeado-rotate").delay(200).queue(function(){
				$(this).closest(".link-cadeados").addClass("cadeado-ativo");
				$(this).dequeue();
			});

		});
		
		$(".link-cadeados").on("mouseleave", function(){
			$(this).closest('.container-rel-link_guia').find('.tag-title-rel-link_guia').show();

			var cadeado_fechado_svg = $(this).find(".cadeado-fechado");
			//cadeado_fechado_svg.dequeue();
			$(this).removeClass("cadeado-ativo");
			cadeado_fechado_svg.removeClass("cadeado-rotate");
		});

	//}

	$(".menu-mobile-social").on("click", function(){
		
		if( $(".social-facebook-mobile").hasClass("facebook-mobile-show") && $(".social-twitter-mobile").hasClass("twitter-mobile-show") ){

			$(".social-facebook-mobile").addClass("facebook-mobile-hide");
			$(".social-twitter-mobile").addClass("twitter-mobile-hide");
			$(".social-twitter-mobile").removeClass("twitter-mobile-show");
			$(".social-facebook-mobile").removeClass("facebook-mobile-show");

		} else {

			$(".social-facebook-mobile").addClass("facebook-mobile-show");
			$(".social-twitter-mobile").addClass("twitter-mobile-show");
			$(".social-facebook-mobile").removeClass("facebook-mobile-hide");
			$(".social-twitter-mobile").removeClass("twitter-mobile-hide");

		}

	});

	var ultimoScrollTop = 0;

	$(window).on("scroll", function(){	

		var scrollTop = $(this).scrollTop();

		if (scrollTop > ultimoScrollTop){
			// downscroll code
			var alturaHeader = $(".header-site-devmedia").innerHeight();

			if (scrollTop > alturaHeader){
				$(".header-site-devmedia").css("top","-75px");
			} else {
				$(".header-site-devmedia").css("top","");
			}

		} else {
			// upscroll code
			$(".header-site-devmedia").css("top","");
		}
		ultimoScrollTop = scrollTop;

	});

	var devslider;
    if($("#devslider").length > 0){
        function runSlider() {  
            var sliderTags = $.find("[id='slide-comp']");
            $(sliderTags).each(function(i,e){
                $(e).addClass("slider-box");
            });
            
            devslider = new DevSlider(".slider-box");
        }

        if(typeof DevSlider == "undefined"){    
            $("#devslider")[0].onload = runSlider;
        }else{  
            runSlider();
        }
	}
	
	if($(".box-suporte").length > 0){
		$(".box-suporte").on("click", function(){
			var href = "#comentariosArtigo";
			page.animate({
				scrollTop: $(href).offset().top-80
			}, 600);
			return false;
		});
	}

	if($(".box-aprenda").length > 0){
		var total_cursos = $(".container-rel-link_guia[data-tipo='curso']").length;
		$("#quant-cursos-box").text(total_cursos);
	}
	
	if($(".box-aprenda").length > 0){
		$(".box-aprenda").on("click", function(){
			var scrollTop_oquee = $(".content-area_guia[data-oquee=1]").offset().top;
			page.animate({
				scrollTop: scrollTop_oquee
			}, 600);
			return false;
		});
	}

	if( $(".content-area_guia[data-download=1]").length > 0 ){
		$(".box-tecnologias").on("click", function(){
			var scrollTop_download = $(".content-area_guia[data-download=1]").offset().top;
			page.animate({
				scrollTop: scrollTop_download
			}, 600);
			return false;
		});
	} else if( $(".intro-area_guia[data-download=1]").length > 0 ) {
		$(".box-tecnologias").on("click", function(){
			var scrollTop_download = $(".intro-area_guia[data-download=1]").offset().top;
			page.animate({
				scrollTop: scrollTop_download
			}, 600);
			return false;
		});
	}

	$(".icon-favorite-full").on("click", function(){
		$("#modal-msg").addClass("active");
		$("#modal-msg .msg").text("Você já favoritou essa guia.");
	});

	$('.box-container-slick').slick({
		arrows: true,
		prevArrow: "<svg class='slide-prev-slick' viewBox='0 0 4.6 7.5' style='enable-background:new 0 0 4.6 7.5;' xml:space='preserve'><path class='seta' d='M0.9,6.6l2.9-2.9L0.9,0.9'/></svg>",
		nextArrow: "<svg class='slide-next-slick'viewBox='0 0 4.6 7.5' style='enable-background:new 0 0 4.6 7.5;' xml:space='preserve'><path class='seta' d='M0.9,6.6l2.9-2.9L0.9,0.9'/></svg>",
	});

});