jQuery(document).ready(function($){

	// $(document).unbind('keydown');

	preparaComentario();

	function preparaComentario(){
		var limite_caracteres = 5000;

		$('.txt_perguntar, .txt_responder').keydown(function(e){
			var content = $(e.target).val();

			if(content.length >= limite_caracteres){

				var keycode = e.charCode || e.keyCode;

				var allow = false;

				if(keycode == 222) return false;

				switch(keycode){
					case 8 : allow = true; break;
					case 16: allow = true; break; 
					case 17: allow = true; break; 
					case 18: allow = true; break; 
					case 19: allow = true; break; 
					case 20: allow = true; break; 
					case 27: allow = true; break; 
					case 33: allow = true; break; 
					case 34: allow = true; break; 
					case 35: allow = true; break; 
					case 36: allow = true; break; 
					case 37: allow = true; break; 
					case 38: allow = true; break; 
					case 39: allow = true; break; 
					case 40: allow = true; break; 
					case 45: allow = true; break; 
					case 46: allow = true; break; 
					case 91: allow = true; break; 
					case 92: allow = true; break; 
					case 93: allow = true; break; 
					case 112: allow = true; break; 
					case 113: allow = true; break; 
					case 114: allow = true; break; 
					case 115: allow = true; break; 
					case 116: allow = true; break; 
					case 117: allow = true; break; 
					case 118: allow = true; break; 
					case 119: allow = true; break; 
					case 120: allow = true; break; 
					case 121: allow = true; break; 
					case 122: allow = true; break; 
					case 123: allow = true; break; 
					case 144: allow = true; break; 
					case 145: allow = true; break; 
				}

				return allow;
			}

			return true;
		});
		
		// Adicionar comentario sub pela caixa de texto.
		$('.txt_responder').on('click', function(e){
			e.preventDefault();

			pagina.responder(e);
		});

		$('.txt_perguntar').on('click', function(e){
			e.preventDefault();

			var txtComentarioConteudo = $(this);

			$.ajax({
				type: "POST",
				url: "//www.devmedia.com.br/comentarios/scripts/comenta_post.php",
				data: "idcomp="+ txtComentarioConteudo.data('idcomp') +"&funcao=liberaComentario"
			}).done(function(data){
				if(data.hasOwnProperty('erro') && data.erro == true){
					// $('.btn_responder.btn_responder_pai.comentario_ativo').remove();

					message = data.retorno;

					if($('.comentario-erro').length == 0){
						$('<div />', {
							class: 'comentario-erro', 
							html: $('<div />').html(message).text()
						}).insertAfter(txtComentarioConteudo);	
					}			

					return false;
				}

				pagina.perguntar(e);
			});
		});

		window.pagina = {
			responder: function(event){
				var textarea = $(event.target);

				if(textarea.hasClass('comentario_ativo')){
					return false;
				}

				textarea.addClass('comentario_ativo');
				pagina.criarDOMResposta(textarea.parent('div'));
			},

			perguntar: function(event){
				var textarea = $(event.target);

				if(textarea.hasClass('comentario_ativo')){
					return false;
				}

				textarea.addClass('comentario_ativo');
				pagina.criarDOMPergunta(textarea.parent('div'), textarea);
			},

			criarDOMResposta: function(elem_pai){
				$('<button />', {
					class: 'btn_responder comentario_ativo',
					html: $('<a />', {
						text: 'Responder a todos'
					})
				}).on('click', function(e){
					e.preventDefault();

					$(".comentario-erro").remove();

					//var btnResponder = $('.btn_responder.comentario_ativo');
					var btnResponder = $(this);
					btnResponder.attr('disabled', true);

					var container = btnResponder.parent('.btn_responder_todos');
					var txtComentarioConteudo = container.find('.txt_responder');
					var idcomp = txtComentarioConteudo.data('idcomp');
					var idcopai = txtComentarioConteudo.data('idcopai');

					if(!txtComentarioConteudo.val().trim().length){
						btnResponder.attr('disabled', false);
						return false;
					}

					var comentarioTexto = $('<div />').text(txtComentarioConteudo.val()).html().replace(/(?:\r\n|\r|\n)/g, '<br>');

					$.ajax({
						type: "POST",
						url: "//www.devmedia.com.br/comentarios/scripts/comenta_post.php",
						data: "idcomp="+ idcomp +"&funcao=liberaComentario"
					}).done(function(data){
						// console.log(data);

						if(data.hasOwnProperty('erro') && data.erro == true){
							message = data.retorno;

							$('<div />', {
								class: 'comentario-erro', 
								html: $('<div />').html(message).text()
							}).insertAfter(txtComentarioConteudo);

							return false;
						}

						var imgLogin = $('input[name=usuarioinfo]').attr('data-img');
						var txtLogin = $('input[name=usuarioinfo]').attr('data-nome');

						$.ajax({
							type: 'POST',
							url: '//www.devmedia.com.br/comentarios/scripts/comenta_post.php', 
							// contentType: 'application/x-javascript; charset:ISO-8859-1',
							data: {
								idcomp: idcomp,
								idcurso: 0,
								idcoment_pai: idcopai,
								conteudo: txtComentarioConteudo.val().replace(/(?:\r\n|\r|\n)/g, 'bR@@BrnGwT'),
								funcao: 'inserirComentario'
							}
						}).done(function(data){
							btnResponder.attr('disabled', false);
							
							if(data.hasOwnProperty('erro') && data.erro == 'TRUE' && data.hasOwnProperty('retorno')){
								message = data.retorno;

								$('<div />', {
									class: 'comentario-erro' 
								}).prepend(
									$('<p />', {
										html: $('<div />').html(message).text()
									})
								).insertAfter(txtComentarioConteudo);

								return false;
							}

							// var mvpHtml = (data.mvp == 'TRUE') ? "<mark class=\"mark-mvp\">MVP</mark>" : "";
							var mvpHtml = '';

							var date = new Date();
							dateString = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

							var moderadorHTML = (data.moderador == 'TRUE') ? '<div class="margin_top10">' + dateString + ' hoje</div>\
								<a href="//www.devmedia.com.br/forum/add/?comment=' + idcomp + '" rel="nofollow">F&oacute;rum</a> - \
								<a href="//www.devmedia.com.br/rte3/addcomment.asp?id=' + data.idcopai + '&amp;m=e&amp;idcomp=' + idcomp + '" rel="nofollow">Editar</a> - \
								<a href="//www.devmedia.com.br/articlesdev/excluicomentario.asp?idco=' + data.idcopai + '&amp;idcomp=' + idcomp + '" rel="nofollow">Excluir</a>' : "<div class=\"margin_top10\"> hoje </div>";

							var comentario = "" 
							+ "<div class=\"comentario_sub\">"
							+ 	"<div class=\"foto_comentario_sub\">"
							+ 		"<img src=\"" + imgLogin + "\" width=\"30\"/>"
							+ 	"</div>"
							+ 	"<div class=\"box_comentario_sub1\">"
							+ 		"<span class=\"texto_comentario\">"
							+ 			"<span class=\"texto_comentario_nome\">" + txtLogin + "</span>"
							+ 			"<span class=\"texto_comentario_data\"> hoje </span>"	
							+ 			mvpHtml
							+			" <span><i class=\"fa fa-pencil\"></i> 59 min</span>"
							+ 			"<div class=\"texto_comentario_conteudo comentario-editavel\" id=\"ce" + data.idcopai + "\" " 
							+					"data-comentario=\"" + data.idcopai + "\" "
							+					"data-idcomp=\"" + idcomp + "\" "
							+					"data-usuario=\"" + data.nome + "\" "
							+					"data-conteudo=\"" + comentarioTexto.replace(/"/g, "&quote;") + "\" "
							+ 					"data-time=\"1\">" 
							/*+ 						comentarioTexto */
							+						data.conteudo 
							+ 			"</div>"
							+ 			moderadorHTML
							+ 		"</span>"
							+ 	"</div>"
							+ 	"<div class=\"t_clear_both\">&nbsp;</div>"
							+ "</div>";

							if(data.hasOwnProperty('erro') && data.erro == true){

								return false;
							}

							$(comentario).insertBefore(container);

							btnResponder.remove();

							txtComentarioConteudo.removeClass('comentario_ativo').val('');

							// console.log(window.editableOptions);

							$('.texto_comentario_conteudo.comentario-editavel').DVMEditable(window.editableOptions);
						});
					});
				}).appendTo(elem_pai);
			},

			criarDOMPergunta: function(elem_pai, elem_texto){
				$('<button />', {
					class: 'btn_responder btn_responder_pai comentario_ativo',
					html: $('<a />', {
						text: 'Postar'
					})
				}).on('click', function(e){
					e.preventDefault();

					$(".comentario-erro").remove();

					var btnResponder = $('.btn_responder_pai.comentario_ativo');
					btnResponder.attr('disabled', true);

					var container = btnResponder.parent('.box_adicionar_comentario_pai');

					var txtComentarioConteudo = $(elem_texto);
					var idcomp = txtComentarioConteudo.data('idcomp');
					var idcopai = txtComentarioConteudo.data('idcopai');

					if(!txtComentarioConteudo.val().trim().length){
						btnResponder.attr('disabled', false);
						return false;
					}

					var comentarioTexto = $('<div />').text(txtComentarioConteudo.val()).html().replace(/(?:\r\n|\r|\n)/g, '<br>');

					$.ajax({
						type: "POST",
						url: "//www.devmedia.com.br/comentarios/scripts/comenta_post.php",
						data: "idcomp="+ idcomp +"&funcao=liberaComentario"
					}).done(function(data){
						if(data.hasOwnProperty('erro') && data.erro == true){
							message = data.retorno;

							$('<div />', {
								class: 'comentario-erro', 
								html: $('<div />').html(message).text()
							}).insertAfter(txtComentarioConteudo);

							return false;
						}

						var imgLogin = $('input[name=usuarioinfo]').attr('data-img');
						var txtLogin = $('input[name=usuarioinfo]').attr('data-nome');

						// var mvpHtml = (data.mvp == 'TRUE') ? "<mark class=\"mark-mvp\">MVP</mark>" : "";
						var mvpHtml = '';

						$.ajax({
							type: 'POST',
							url: '//www.devmedia.com.br/comentarios/scripts/comenta_post.php', 
							// contentType: 'application/x-javascript; charset:ISO-8859-1',
							data: {
								idcomp: idcomp,
								idcurso: 0,
								idcoment_pai: idcopai,
								conteudo: txtComentarioConteudo.val().replace(/(?:\r\n|\r|\n)/g, 'bR@@BrnGwT'),
								funcao: 'inserirComentario'
							}
						}).done(function(data){
							btnResponder.attr('disabled', false);

							if(data.hasOwnProperty('erro') && data.erro == 'TRUE' && data.hasOwnProperty('retorno')){
								message = data.retorno;

								$('<div />', {
									class: 'comentario-erro' 
								}).prepend(
									$('<p />', {
										html: $('<div />').html(message).text()
									})
								).insertAfter(txtComentarioConteudo);

								return false;
							}
							
							if(data.hasOwnProperty('erro') && data.erro == true){

								return false;
							}

							var date = new Date();
							dateString = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

							var moderadorHTML = (data.moderador == 'TRUE') ? '<div class="margin_top10">' + dateString + ' hoje</div>\
								<a href="//www.devmedia.com.br/forum/add/?comment=' + idcomp + '" rel="nofollow">F&oacute;rum</a> - \
								<a href="//www.devmedia.com.br/rte3/addcomment.asp?id=' + data.idcopai + '&amp;m=e&amp;idcomp=' + idcomp + '" rel="nofollow">Editar</a> - \
								<a href="//www.devmedia.com.br/articlesdev/excluicomentario.asp?idco=' + data.idcopai + '&amp;idcomp=' + idcomp + '" rel="nofollow">Excluir</a>' : "<div class=\"margin_top10\"> hoje </div>";

							var comentario = "" 
							+   "<div class=\"corpo_comente even\">"
							+ 		"<div class=\"foto_comentario1\">"
							+			"<img src=\"" + imgLogin + "\" width=\"30\" />"
							+		"</div>"
							+		"<div class=\"margin_left60 box_comentario_pai\">"
							+	 		"<span class=\"texto_comentario\">"
							+				"<span class=\"texto_comentario_nome\">" + txtLogin + "</span>"
							+				mvpHtml
							+				" <span><i class=\"fa fa-pencil\"></i> 59 min</span>"
							+				"<div class=\"texto_comentario_conteudo comentario-editavel\" id=\"ce" + data.idcopai + "\" " 
							+					"data-comentario=\"" + data.idcopai + "\" "
							+					"data-idcomp=\"" + idcomp + "\" "
							+					"data-usuario=\"" + data.nome + "\" "
							+					"data-conteudo=\"" + comentarioTexto.replace(/"/g, "&quote;") + "\" "
							+ 					"data-time=\"1\">" 
							/*+ 						comentarioTexto */
							+						data.conteudo
							+ 				"</div>"
							+ 				moderadorHTML
							+			"</span>"
							+		"</div>"
							+		"<div class=\"t_clear_both\">&nbsp;</div>"
							+ 		"<div class=\"corpo_comente_sub\">"
							+ 			"<div class=\"comentario_sub\">"
							+				"<div class=\"t_clear_both\">&nbsp;</div>"
							+       	"</div>"
							+			"<div class=\"btn_responder_todos\">"
				  			+				"<textarea onClick=\"pagina.responder(event);\" data-idcopai=\"" + data.idcopai + "\" data-idcomp=\"" + idcomp + "\" class=\"txt_responder\" placeholder=\"Adicionar um coment&aacute;rio...\"></textarea>"
							+			"</div>"
							+		"</div>"
							+	"</div>"
							+ 	"<div id=\"divisor_comentarios\"></div>";

							$(comentario).insertAfter(container);

							btnResponder.remove();

							txtComentarioConteudo.removeClass('comentario_ativo').val('');

							// console.log(window.editableOptions);

							$('.texto_comentario_conteudo.comentario-editavel').DVMEditable(window.editableOptions);
						});
					});
				}).appendTo(elem_pai);
			}
		};
	};

	var ver_mais = $('.ver-mais');

	ver_mais.on('click', function(e){
		var idcomp = ver_mais.attr('data-idcomp');

		$('.ver-mais').hide();
		$('.load').show();

		$.ajax({
			url: '//www.devmedia.com.br/comentarios/scripts/lista_comentario.php?idcomp=' + idcomp,
		}).done(function(data){
			$('#div_comentarios').append($(data));

			$('.load').hide();

			preparaComentario();
		});
	});


	$("#div_comentarios").on("click", ".destaque", function(){
		if($(this).hasClass("waiting")){
			return false;
		}

		var destaqueComentario = $(this);
		var c = destaqueComentario.data("id");

		destaqueComentario.addClass("waiting");

		$.ajax({
			url: "//www.devmedia.com.br/comentarios/include/marcar_comentario.php",
			method: "POST",
			data: {c: c}
		}).done(function(res){
			if(res.status){
				if(res.response == 1){
					destaqueComentario.addClass("destacado");
				}else{
					destaqueComentario.removeClass("destacado");
				}
			}else{
				console.log(res.response);
			}

			destaqueComentario.removeClass("waiting");
		});
	});
});