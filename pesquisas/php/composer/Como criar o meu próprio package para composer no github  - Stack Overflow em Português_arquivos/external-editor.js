"use strict";StackExchange.mockups=function(){function e(e,t,n,i,r){function o(e,t,n){for(var i=-1,r=-1;;){if(r=t.indexOf(e,r+1),-1==r)break;(0>i||Math.abs(r-n)<Math.abs(r-i))&&(i=r)}return i}return e.replace(new RegExp("<!-- Begin mockup[^>]*? -->\\s*!\\[[^\\]]*\\]\\((http://[^ )]+)[^)]*\\)\\s*<!-- End mockup -->","g"),function(e,a,s){var l={"payload":a.replace(/[^-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]/g,""),"pos":o(e,t,s),"len":e.length};return-1===l.pos?e:(r.push(l),e+"\n\n"+n+i+"-"+(r.length-1)+"%")})}function t(){StackExchange.externalEditor.init({"thingName":"mockup","thingFinder":e,"getIframeUrl":function(e){var t="/plugins/mockups/editor";return e&&(t+="?edit="+encodeURIComponent(e)),t},"buttonTooltip":"UI wireframe","buttonImageUrl":"/content/Shared/Balsamiq/wmd-mockup-button.png","onShow":function(e){window.addMockupToEditor=e},"onRemove":function(){window.addMockupToEditor=null;try{delete window.addMockupToEditor}catch(e){}}})}return{"init":t}}(),StackExchange.schematics=function(){function e(){if(!window.postMessage)return i;var e=document.createElement("div");e.innerHTML="<svg/>";var t="http://www.w3.org/2000/svg"==(e.firstChild&&e.firstChild.namespaceURI);if(!t)return i;var n=navigator.userAgent;return/Firefox|Chrome/.test(n)?a:/Apple/.test(navigator.vendor)||/Opera/.test(n)?o:r}function t(e,t,n,i,r){function o(e,t,n){for(var i=-1,r=-1;;){if(r=t.indexOf(e,r+1),-1==r)break;(0>i||Math.abs(r-n)<Math.abs(r-i))&&(i=r)}return i}return e.replace(new RegExp("<!-- Begin schematic[^>]*? -->\\s*!\\[[^\\]]*\\]\\((http://[^ )]+)[^)]*\\)\\s*<!-- End schematic -->","g"),function(e,a,s){var l={"payload":a.replace(/[^-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]/g,""),"pos":o(e,t,s),"len":e.length};return-1===l.pos?e:(r.push(l),e+"\n\n"+n+i+"-"+(r.length-1)+"%")})}function n(){var n;StackExchange.externalEditor.init({"thingName":"schematic","thingFinder":t,"getIframeUrl":function(e){var t="/plugins/schematics/editor";return e&&(t+="?edit="+encodeURIComponent(e)),t},"buttonTooltip":"Schematic","buttonImageUrl":"/content/Sites/electronics/img/wmd-schematic-button.png?v=1","checkSupport":function(){var t=e();switch(t){case a:return!0;case o:return confirm("Your browser is not officially supported by the schematics editor; however it has been reported to work. Launch the editor?");case r:return confirm("Your browser is not officially supported by the schematics editor; it may or may not work. Launch the editor anyway?");case i:return alert("Sorry, your browser does not support all the necessary features for the schematics editor."),!1}},"onShow":function(e){var t=$("<div class='popup' />").css("z-index",1111).text("Loading editor").appendTo("body").show().addSpinner({"marginLeft":5}).center({"dy":-200});$("<div style='text-align:right;margin-top: 10px' />").append($("<button>cancel</button>").click(function(){t.remove(),e()})).appendTo(t),n=function(n){if(n=n.originalEvent,"https://www.circuitlab.com"===n.origin){n.data||e();var i=$.parseJSON(n.data);if(i&&"success"===i.load)return t.remove(),void 0;if(i&&i.edit_url&&i.image_url){i.fkey=StackExchange.options.user.fkey;var r=$("<div class='popup' />").css("z-index",1111).appendTo("body").show(),o=function(){r.text("Storing image").addSpinner({"marginLeft":5}).center(),$.post("/plugins/schematics/save",i).done(function(t){r.remove(),e(t.img)}).fail(function(e){if(409===e.status){var t="Storing aborted";e.responseText.length<200&&(t=e.responseText),r.text(t+", will retry shortly").addSpinner({"marginLeft":5}).center(),setTimeout(o,1e4)}else r.remove(),alert("Failed to upload the schematic image.")})};o()}}},$(window).on("message",n)},"onRemove":function(){$(window).off("message",n)}})}var i=0,r=1,o=2,a=3;return{"init":n}}(),StackExchange.externalEditor=function(){function e(e){function t(e,t){function d(t){function i(){StackExchange.helpers.closePopups(v.add(r)),u()}var r,s=m||b.caret(),l=b[0].value||"",p=t?t.pos:s.start,h=t?t.len:s.end-s.start,d=l.substring(0,p),f=l.substring(p+h);m=null;var g=function(t,r){if(!t)return setTimeout(i,0),b.focus(),void 0;StackExchange.navPrevention.start();var o=void 0===r?n(t):r,a=d.replace(/(?:\r\n|\r|\n){1,2}$/,""),l=a+o+f.replace(/^(?:\r\n|\r|\n){1,2}/,""),c=s.start+o.length-d.length+a.length;setTimeout(function(){e.textOperation(function(){b.val(l).focus().caret(c,c)}),i()},0)},v=null;if(o){var y=o(t?t.payload:null);v=$("<iframe>",{"src":y})}else{var x=a(t?t.payload:null);v=$(x)}v.addClass("esc-remove").css({"position":"fixed","top":"2.5%","left":"2.5%","width":"95%","height":"95%","background":"white","z-index":1001}),$("body").loadPopup({"html":v,"target":$("body"),"lightbox":!0}).done(function(){$(window).resize(),c(g)})}$('<style type="text/css"> .wmd-'+i+"-button span { background-position: 0 0; } .wmd-"+i+"-button:hover span { background-position: 0 -40px; }</style>)").appendTo("head");var f,g,m,v=e.getConverter().hooks,b=$("#wmd-input"+t);b.on("keyup",function(e){var t=e.keyCode||e.charCode;if(8===t||46===t){var n=b.caret().start;b.caret(n,n)}}),v.chain("preConversion",function(e){var t=(e.match(/%/g)||[]).length,n=b.length?b[0].value||"":"";return f=new Array(t+2).join("%"),g=[],r(e,n,f,i,g)}),v.chain("postConversion",function(e){return e.replace(new RegExp(f+i+"-(\\d+)%","g"),function(e,t){return"<sup><a href='#' class='edit-"+i+"' data-id='"+t+"'>"+p+"</a></sup>"})});var y="The "+i+" editor does not support touch devices.",x=!1;$("#wmd-preview"+t).on("touchend",function(){x=!0}).on("click","a.edit-"+i,function(){return x?(alert(y),x=!1,!1):(x=!1,(!h||h())&&d(g[$(this).attr("data-id")]),!1)}),$("#wmd-input"+t).keyup(function(e){e.shiftKey||e.altKey||e.metaKey||!e.ctrlKey||77!==e.which||(!h||h())&&d()}),setTimeout(function(){var e=($("#wmd-button-bar"+t),$("#wmd-image-button"+t)),n=$("<li class='wmd-button wmd-"+i+"-button' id='wmd-"+i+"-button"+t+"' title='"+s+" Ctrl-M' />").insertAfter(e),r=!1,o=$("<span />").css({"backgroundImage":"url("+l+")"}).appendTo(n).on("touchend",function(){r=!0}).click(function(){return r?(alert(y),r=!1,void 0):(r=!1,(!h||h())&&d(),void 0)});$.browser.msie&&o.mousedown(function(){m=b.caret()})},0)}function n(e){return('\n\n<!-- Begin {THING}: In order to preserve an editable {THING}, please\n     don\'t edit this section directly.\n     Click the "edit" link below the image in the preview instead. -->\n\n![{THING}]('+e+")\n\n<!-- End {THING} -->\n\n").replace(/{THING}/g,i)}var i=e.thingName,r=e.thingFinder,o=e.getIframeUrl,a=e.getDivContent,s=e.buttonTooltip,l=e.buttonImageUrl,c=e.onShow,u=e.onRemove||function(){},p=e.editLabel||"edit the above "+i,h=e.checkSupport;StackExchange.MarkdownEditor.creationCallbacks.add(t)}return{"init":e}}();