/*
$(document).ready(function() {
    var s = $(".publicidadeTopoGiga");
    var pos = s.position();                    
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        //s.html("Distance from top:" + pos.top + "<br />Scroll position: " + windowpos);
        if (windowpos >= pos.top) {
            if (typeof timeo === 'undefined') {
                s.addClass("stick");
                timeo = setTimeout(function(){ s.removeClass("stick"); }, 20000);
            }
        } else {
            if (typeof timeo !== 'undefined') {
                s.removeClass("stick"); 
                //clearTimeout(timeo); 
            }
        }
    });
});
*/

jQuery(document).ready(function() {
    jQuery('#header .menu > ul > li:last').removeClass('itemBlogs').find('a').attr('href', 'http://idgnow.com.br/udemy.html').attr('title', 'CURSOS ONLINE').text('CURSOS ONLINE').attr('target', '_blank');
});
