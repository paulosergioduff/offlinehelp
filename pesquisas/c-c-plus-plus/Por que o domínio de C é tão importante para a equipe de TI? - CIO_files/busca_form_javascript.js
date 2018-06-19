(function() {
    var f = document.getElementById('cio');
    if (f && f.q) {
        var q = f.q;
        var n = navigator;
        var l = location;
        var b = function() {
            if (q.value == '') {
                q.style.background = '#FFFFFF url(http:\x2F\x2Fwww.google.com\x2Fcse\x2Fintl\x2Fpt_BR\x2Fimages\x2Fgoogle_custom_search_watermark.gif) left no-repeat';
            }
        };
        
        var f = function() {
            q.style.background = '#ffffff';
        };
        q.onfocus = f;
        q.onblur = b;
        if (!/[&?]q=[^&]/.test(l.search)) {
            b();
        }
    }
}
)();