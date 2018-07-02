$(document).ready(function() {

    //hljs.configure({useBR: true});

    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });

});
