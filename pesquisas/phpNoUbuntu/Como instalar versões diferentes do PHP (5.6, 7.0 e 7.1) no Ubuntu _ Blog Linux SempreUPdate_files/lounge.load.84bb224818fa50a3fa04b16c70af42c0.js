!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.ec3c09f8b46e8c265bd6ddaa7468fa42.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.d28a1c4b3a83ad6579a6cb541bb39ef5.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.4cdd06d0813859ad6b67673516af96c4.js","discovery/main":"https://c.disquscdn.com/next/embed/discovery.bundle.daedd146972fc7d8dffd9be34c404865.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.6fbf348532f299e045c254c49c4dbedf.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed",paths:["lounge/main","discovery/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.037f55c32651d22255e90738c195e946.js",a.body.appendChild(c)}();