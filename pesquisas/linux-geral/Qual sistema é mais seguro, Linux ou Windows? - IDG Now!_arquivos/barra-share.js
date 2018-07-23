function adjustStyle(width) {
    width = parseInt(width);
    if (width < 1190 || idg_skin_active) {
        $("#barraShareHoriz").show();
        $("#barraShareHoriz2").show();
        $("#barraShareVert").hide();
    } else {
        $("#barraShareVert").show();
        $("#barraShareHoriz").hide();
        $("#barraShareHoriz2").hide();
    }
}

$(function() {
    adjustStyle($(this).width());
    $(window).resize(function() {
        adjustStyle($(this).width());
    });
});

$(function(){
    $(window).scroll(function(){
        var s = $(window).scrollTop();
        var d = $(document).height();
        var c = $(window).height();
        var scrollPercent = (s / (d-c)) * 100;
        var offset = 2
        diffTop = 40 - (scrollPercent*offset);
        if (diffTop >= 0){
            $("#barraShareVert").attr("style", "top:"+diffTop+"%");
            adjustStyle($(this).width());
        }
     });
});

