$(document).ready(function(){
	
	$(function(){	
		// build articles list	
		if($('.dmt-articles-content').length) {
			jQuery.ajax({
				type: "GET",
				url: "http://www.diogomatheus.com.br/blog/?json=get_recent_posts&count=6&date_format=d-m-Y",
				dataType: "jsonp",
				contentType: "application/json; charset=UTF-8",
				success: function(data){
					ulElement = document.createElement("ul");
					ulElement.setAttribute('id', 'dmt-articles-list');
					ulElement.setAttribute('class', 'dmt-default-list');
					ulElement.setAttribute('style', 'display: none');
					
					$.each(data.posts, function(i, item){					
						liElement = document.createElement("li");
						aElement = document.createElement("a");
						
						aElement.innerHTML = item.title;
						aElement.setAttribute('href', item.url);
						aElement.setAttribute('title', aElement.innerHTML);
						
						var articleDate = item.date.toString();
						var articleDateArray = item.date.split('-');
						var articleFormatedDate = articleDateArray.join('/');
						var articleInfo = "Artigo publicado em " + articleFormatedDate;
						//articleInfo = articleInfo + " - " + item.comment_count + " Comentário(s)";
						
						var categories;
						$.each(item.categories, function(j, category){
							var categoryTitle = category.title;
							categoryTitle = categoryTitle.replace("&amp;", "&");
							if(!categories)
								categories = categoryTitle;
							else
								categories = categories + ", " + categoryTitle;
						});
						articleInfo = articleInfo + " - " + categories;
						
						spanElement = document.createElement("span");
						spanElement.setAttribute('class', 'dmt-article-info');
						spanContent = document.createTextNode(articleInfo);
						spanElement.appendChild(spanContent);

						aElement.appendChild(document.createElement('br'));
						aElement.appendChild(spanElement);
						liElement.appendChild(aElement);
						
						//var lf = document.createElement('br');
						//liElement.appendChild(lf);
						//liElement.appendChild(spanElement);
						ulElement.appendChild(liElement);
					});
					
					$('.dmt-articles-content').html(ulElement);
					$('#dmt-articles-list').fadeIn('slow');
				},
				error: function(XMLHttpRequest, textStatus, errorThrown){
					pElementNotFound = document.createElement("p");
					pElementNotFound.innerHTML = "Não foi possível carregar os artigos.";
					$('.dmt-articles-content').html(pElementNotFound);
					$('#dmt-articles-list').fadeIn('slow');
				}
			});
		}
		
		// Get phrase on init
		updatePhrase();
	});

	// Create animation with background color in icons header
	$(".dmt-header-icons ul li").hover(function() {
		$(this).stop().animate({ backgroundColor: "#bfd630" }, 600);
	},function() {
		$(this).stop().animate({ backgroundColor: "#f6f6f6" }, 400);
	});
		
});

function updatePhrase()
{
	if(!$('.dmt-footer-phrases-btn').hasClass('disabled')) {
		$('.dmt-footer-phrases-btn').addClass('disabled');
		pElement = document.createElement("p");
		smallElement = document.createElement("small");
		jQuery.ajax({
			type: "GET",
			url: "http://www.diogomatheus.com.br/phrases/random-phrase",
			dataType: "jsonp",
			contentType: "application/json; charset=UTF-8",
			success: function(data){
				pElement.innerHTML = data.phrase;
				smallElement.innerHTML = data.author;
				$('.dmt-footer-phrases-btn').removeClass('disabled');
			},
			error: function(XMLHttpRequest, textStatus, errorThrown){
				pElement.innerHTML = "Você não pode ensinar nada a um homem; você pode apenas ajudá-lo a encontrar a resposta dentro dele mesmo.";
				smallElement.innerHTML = "Galileu Galilei";
				$('.dmt-footer-phrases-btn').removeClass('disabled');
			}
		});

		blockquoteElement = document.createElement("blockquote");
		blockquoteElement.setAttribute('class', 'pull-right');
		blockquoteElement.appendChild(pElement);
		blockquoteElement.appendChild(smallElement);
		$('.dmt-footer-phrases-content').html(blockquoteElement);
		//$('.dmt-footer-phrases').append(blockquoteElement);
	}
}
