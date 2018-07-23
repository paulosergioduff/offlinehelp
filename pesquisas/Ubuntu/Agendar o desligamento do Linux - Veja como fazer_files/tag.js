(function(w, d, s) {
  try {
    d = w.top.document || d; w = w.top.document ? w.top : w;
  } catch (e) {}
  var ttag = function() {
    w.teads.page(82141).placement(88931, {slider: {allow_corner_position: true, allow_top_position: true}, "css":"margin: 0px 0px 26px;","format":"inread","slot":{"btf":false,"selector":".post .td-post-content > p","minimum":2}}).serve();
  };
  if (w.teads && w.teads.page) { ttag(); }
  else if (!w.teadsscript) {
    s.src = '//cdn.teads.tv/media/format/v3/teads-format.min.js';
    s.async = true; s.onload = ttag; w.teadsscript = d.getElementsByTagName('head')[0].appendChild(s);
  }
})(window, document, document.createElement('script'));