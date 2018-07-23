$(document).ready(function(){
    var siteurl = 'http://idgnow.com.br';
    if (typeof window['hasEspecial'] != 'number'){hasEspecial=0;}
    if ( hasTopico==1 && hasEspecial==0){
        url = siteurl + '/topico/' + newsTopicoId;
        html = '<span>#</span> <a href="' +url+ '">' +newsTopico+ '</a>';
        $('#titEspecial').hide();
        $('#titTag').html(html);
    }
    else if ( hasTopico==1 && hasEspecial==1){
        url = siteurl + '/especiais/' + newsTopicoId;
        html = '<span>></span> <a href="' +url+ '">' +newsTopico+ '</a>';
        $('#titTag').hide();
        $('#titEspecial').html(html);
    }
    else {
        if (newsTopico != '' ){
           url = siteurl + '/' + newsTopicoId + '/';
           html = '<span>#</span> <a href="' +url+ '">' +newsTopico+ '</a>';
           $('#titEspecial').hide();
           $('#titTag').html(html);
        }
    }
    $(".learn-more").click(function(event) {
         var brandpost_txt = "<div class=\"about-brandposts\"><p>BrandPosts são artigos escritos e editados pela nossa comunidade de anunciantes e patrocinadores. Os BrandPosts oferecem a oportunidade para um patrocinador apresentar idéias e comentários com seu ponto de vista diretamente para nossa audiência. A equipe editorial não participa da elaboração ou edição dos BrandPosts.</p><hr/><a class=\"close-bar\" href=\"#\">Close</i></a></div>";
         $("body").append(brandpost_txt);
         $(".about-brandposts").css("top",event.pageY);
         if ($("body").width() >= 955) { // need different behavior at desktop breakpoint and above
             //find difference between X position clicked and body width and set as right attr
             //this is so tooltip doesn't overflow window
             var xpos = $("body").width() - event.pageX;
             $(".about-brandposts").css({"right":xpos,"margin-right":"0"});
         }
         $(".about-brandposts .close-bar").click(function() {
             $(".about-brandposts").remove();
             return false;
         });
         return false;
     });
});