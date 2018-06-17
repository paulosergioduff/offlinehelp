(function( $ ) {
 
    $.fn.menuFixer = function(offsetTop, offsetBottom) {
        var offsetTopValue = null;
        var offsetBottomValue = null;
        var offsetTopElement = null;
        var offsetBottomElement = null;

        var element = $(this);

        if(offsetTop == undefined && offsetBottom != undefined){
            console.log("Não foi possível iniciar o plugin:");
            console.log("É necessário definir as opções offsetTop e offsetBottom:");
            console.log("$('elemento').menuFixer(offsetTop, offsetBottom)");
            return this;
        }

        if(typeof offsetTop == "number"){
            offsetTopValue = offsetTop;
        }else if(typeof offsetTop == "object"){
            offsetTopElement = $(offsetTop);
            offsetTopValue = offsetTopElement.offset().top;
        }else{
            console.log("Não foi possível iniciar o plugin:");
            console.log("É necessário definir a opção offsetTop");
        }

        if(typeof offsetBottom == "number"){
            offsetBottomValue = offsetBottom;
        }else if(typeof offsetBottom == "object"){
            offsetBottomElement = $(offsetBottom);
            offsetBottomValue = offsetBottomElement.offset().top;
        }else{
            console.log("Não foi possível iniciar o plugin:");
            console.log("É necessário definir a opção offsetBottom");
        }

        $(window).scroll(function(e){
            if(offsetTopElement != null){
                offsetTopValue = offsetTopElement.offset().top;
            }

            if(offsetBottomElement != null){
                offsetBottomValue = offsetBottomElement.offset().top;
            }

            update(element, offsetTopValue, offsetBottomValue);
        });

        update(element, offsetTopValue, offsetBottomValue);

        return this;
    };

    function update(element, top, bottom){
        elementHeight = $(element).height();
        elementTop = $(element).offset().top;
        elementBottom = elementTop + elementHeight;
        needFix = elementBottom >= bottom;
        fixedMenu = $(element).attr("mf-menu-fixed") != undefined;
        if(fixedMenu){
            if($(window).scrollTop() + top + elementHeight < bottom){
                fixedMenu = false;
                $(element).removeAttr("mf-menu-fixed");
            }
        }else{
            if(needFix){
                fixedMenu = true;
                $(element).attr("mf-menu-fixed", "fixed");
            }
        }

        if(fixedMenu){
            var newBottom = $(window).scrollTop() + $(window).height() - bottom;
            $(element).css("top","unset").css("bottom", newBottom);
        }else{
            $(element).css("top","").css("bottom", "");
        }
    }

}( jQuery ));