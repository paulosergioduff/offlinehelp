// source --> https://targettrust.com.br/wp-content/plugins/crayon-syntax-highlighter/js/min/crayon.min.js 
var jQueryCrayon=jQuery;(function(a){CrayonUtil=new function(){var c=this;var b=null;c.init=function(){b=CrayonSyntaxSettings;c.initGET()};c.addPrefixToID=function(d){return d.replace(/^([#.])?(.*)$/,"$1"+b.prefix+"$2")};c.removePrefixFromID=function(e){var d=new RegExp("^[#.]?"+b.prefix,"i");return e.replace(d,"")};c.cssElem=function(d){return a(c.addPrefixToID(d))};c.setDefault=function(e,f){return(typeof e=="undefined")?f:e};c.setMax=function(e,d){return e<=d?e:d};c.setMin=function(d,e){return d>=e?d:e};c.setRange=function(e,f,d){return c.setMax(c.setMin(e,f),d)};c.getExt=function(e){if(e.indexOf(".")==-1){return undefined}var d=e.split(".");if(d.length){d=d[d.length-1]}else{d=""}return d};c.initGET=function(){window.currentURL=window.location.protocol+"//"+window.location.host+window.location.pathname;window.currentDir=window.currentURL.substring(0,window.currentURL.lastIndexOf("/"));function d(e){e=e.split("+").join(" ");var h={},g,f=/[?&]?([^=]+)=([^&]*)/g;while(g=f.exec(e)){h[decodeURIComponent(g[1])]=decodeURIComponent(g[2])}return h}window.GET=d(document.location.search)};c.getAJAX=function(d,e){d.version=b.version;a.get(b.ajaxurl,d,e)};c.postAJAX=function(d,e){d.version=b.version;a.post(b.ajaxurl,d,e)};c.reload=function(){var d="?";for(var e in window.GET){d+=e+"="+window.GET[e]+"&"}window.location=window.currentURL+d};c.escape=function(d){if(typeof encodeURIComponent=="function"){return encodeURIComponent(d)}else{if(typeof escape!="function"){return escape(d)}else{return d}}};c.log=function(d){if(typeof console!="undefined"&&b.debug){console.log(d)}};c.decode_html=function(d){return String(d).replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">")};c.encode_html=function(d){return String(d).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")};c.getReadableColor=function(g,f){f=a.extend({amount:0.5,xMulti:1,yMulti:1.5,normalizeHue:[20,180],normalizeHueXMulti:1/2.5,normalizeHueYMulti:1},f);var d=tinycolor(g);var e=d.toHsv();var i={x:e.s,y:1-e.v};i.x*=f.xMulti;i.y*=f.yMulti;if(f.normalizeHue&&e.h>f.normalizeHue[0]&&e.h<f.normalizeHue[1]){i.x*=f.normalizeHueXMulti;i.y*=f.normalizeHueYMulti}var h=Math.sqrt(Math.pow(i.x,2)+Math.pow(i.y,2));if(h<f.amount){e.v=0}else{e.v=1}e.s=0;return tinycolor(e).toHexString()};c.removeChars=function(e,f){var d=new RegExp("["+e+"]","gmi");return f.replace(d,"")}};a(document).ready(function(){CrayonUtil.init()});a.fn.bindFirst=function(c,e){this.bind(c,e);var b=this.data("events")[c.split(".")[0]];var d=b.pop();b.splice(0,0,d)};a.keys=function(d){var c=[];for(var b in d){c.push(b)}return c};RegExp.prototype.execAll=function(c){var f=[];var b=null;while((b=this.exec(c))!=null){var e=[];for(var d in b){if(parseInt(d)==d){e.push(b[d])}}f.push(e)}return f};RegExp.prototype.escape=function(b){return b.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")};String.prototype.sliceReplace=function(d,b,c){return this.substring(0,d)+c+this.substring(b)};String.prototype.escape=function(){var b={"&":"&amp;","<":"&lt;",">":"&gt;"};return this.replace(/[&<>]/g,function(c){return b[c]||c})};String.prototype.linkify=function(b){b=typeof b!="undefined"?b:"";return this.replace(/(http(s)?:\/\/(\S)+)/gmi,'<a href="$1" target="'+b+'">$1</a>')};String.prototype.toTitleCase=function(){var b=this.split(/\s+/);var c="";a.each(b,function(e,d){if(d!=""){c+=d.slice(0,1).toUpperCase()+d.slice(1,d.length);if(e!=b.length-1&&b[e+1]!=""){c+=" "}}});return c}})(jQueryCrayon);jqueryPopup=Object();jqueryPopup.defaultSettings={centerBrowser:0,centerScreen:0,height:500,left:0,location:0,menubar:0,resizable:0,scrollbars:0,status:0,width:500,windowName:null,windowURL:null,top:0,toolbar:0,data:null,event:"click"};(function(a){popupWindow=function(d,c,f,b){f=typeof f!=="undefined"?f:null;b=typeof b!=="undefined"?b:null;if(typeof d=="string"){d=jQuery(d)}if(!(d instanceof jQuery)){return false}var e=jQuery.extend({},jqueryPopup.defaultSettings,c||{});d.handler=jQuery(d).bind(e.event,function(){if(f){f()}var g="height="+e.height+",width="+e.width+",toolbar="+e.toolbar+",scrollbars="+e.scrollbars+",status="+e.status+",resizable="+e.resizable+",location="+e.location+",menuBar="+e.menubar;e.windowName=e.windowName||jQuery(this).attr("name");var h=jQuery(this).attr("href");if(!e.windowURL&&!(h=="#")&&!(h=="")){e.windowURL=jQuery(this).attr("href")}var i,j;var k=null;if(e.centerBrowser){if(typeof window.screenY=="undefined"){i=(window.screenTop-120)+((((document.documentElement.clientHeight+120)/2)-(e.height/2)));j=window.screenLeft+((((document.body.offsetWidth+20)/2)-(e.width/2)))}else{i=window.screenY+(((window.outerHeight/2)-(e.height/2)));j=window.screenX+(((window.outerWidth/2)-(e.width/2)))}k=window.open(e.windowURL,e.windowName,g+",left="+j+",top="+i)}else{if(e.centerScreen){i=(screen.height-e.height)/2;j=(screen.width-e.width)/2;k=window.open(e.windowURL,e.windowName,g+",left="+j+",top="+i)}else{k=window.open(e.windowURL,e.windowName,g+",left="+e.left+",top="+e.top)}}if(k!=null){k.focus();if(e.data){k.document.write(e.data)}}if(b){b()}});return e};popdownWindow=function(b,c){if(typeof c=="undefined"){c="click"}b=jQuery(b);if(!(b instanceof jQuery)){return false}b.unbind(c,b.handler)}})(jQueryCrayon);(function(f){f.fn.exists=function(){return this.length!==0};f.fn.style=function(B,E,A){var D=this.get(0);if(typeof D=="undefined"){return}var C=D.style;if(typeof B!="undefined"){if(typeof E!="undefined"){A=typeof A!="undefined"?A:"";if(typeof C.setProperty!="undefined"){C.setProperty(B,E,A)}else{C[B]=E}}else{return C[B]}}else{return C}};var d="crayon-pressed";var a="";var n="div.crayon-syntax";var e=".crayon-toolbar";var c=".crayon-info";var w=".crayon-plain";var o=".crayon-main";var m=".crayon-table";var v=".crayon-loading";var h=".crayon-code";var p=".crayon-title";var l=".crayon-tools";var b=".crayon-nums";var j=".crayon-num";var q=".crayon-line";var g="crayon-wrapped";var s=".crayon-nums-content";var u=".crayon-nums-button";var k=".crayon-wrap-button";var i=".crayon-expand-button";var t="crayon-expanded crayon-toolbar-visible";var y="crayon-placeholder";var x=".crayon-popup-button";var r=".crayon-copy-button";var z=".crayon-plain-button";CrayonSyntax=new function(){var I=this;var N=new Object();var ag;var H;var G=0;var Z;I.init=function(){if(typeof N=="undefined"){N=new Object()}ag=CrayonSyntaxSettings;H=CrayonSyntaxStrings;f(n).each(function(){I.process(this)})};I.process=function(aD,aE){aD=f(aD);var ar=aD.attr("id");if(ar=="crayon-"){ar+=X()}aD.attr("id",ar);CrayonUtil.log(ar);if(typeof aE=="undefined"){aE=false}if(!aE&&!aa(ar)){return}var au=aD.find(e);var aC=aD.find(c);var ap=aD.find(w);var aq=aD.find(o);var aB=aD.find(m);var aj=aD.find(h);var aG=aD.find(p);var aA=aD.find(l);var ay=aD.find(b);var av=aD.find(s);var az=aD.find(u);var am=aD.find(k);var ao=aD.find(i);var aF=aD.find(x);var at=aD.find(r);var al=aD.find(z);N[ar]=aD;N[ar].toolbar=au;N[ar].plain=ap;N[ar].info=aC;N[ar].main=aq;N[ar].table=aB;N[ar].code=aj;N[ar].title=aG;N[ar].tools=aA;N[ar].nums=ay;N[ar].nums_content=av;N[ar].numsButton=az;N[ar].wrapButton=am;N[ar].expandButton=ao;N[ar].popup_button=aF;N[ar].copy_button=at;N[ar].plainButton=al;N[ar].numsVisible=true;N[ar].wrapped=false;N[ar].plainVisible=false;N[ar].toolbar_delay=0;N[ar].time=1;f(w).css("z-index",0);var aw=aq.style();N[ar].mainStyle={height:aw&&aw.height||"","max-height":aw&&aw.maxHeight||"","min-height":aw&&aw.minHeight||"",width:aw&&aw.width||"","max-width":aw&&aw.maxWidth||"","min-width":aw&&aw.minWidth||""};N[ar].mainHeightAuto=N[ar].mainStyle.height==""&&N[ar].mainStyle["max-height"]=="";var ak;var ax=0;N[ar].loading=true;N[ar].scrollBlockFix=false;az.click(function(){CrayonSyntax.toggleNums(ar)});am.click(function(){CrayonSyntax.toggleWrap(ar)});ao.click(function(){CrayonSyntax.toggleExpand(ar)});al.click(function(){CrayonSyntax.togglePlain(ar)});at.click(function(){CrayonSyntax.copyPlain(ar)});B(ar);var an=function(){if(ay.filter('[data-settings~="hide"]').length!=0){av.ready(function(){CrayonUtil.log("function"+ar);CrayonSyntax.toggleNums(ar,true,true)})}else{ac(ar)}if(typeof N[ar].expanded=="undefined"){if(Math.abs(N[ar].main.outerWidth()-N[ar].table.outerWidth())<10){N[ar].expandButton.hide()}else{N[ar].expandButton.show()}}if(ax==5){clearInterval(ak);N[ar].loading=false}ax++};ak=setInterval(an,300);C(ar);f(j,N[ar]).each(function(){var aJ=f(this).attr("data-line");var aI=f("#"+aJ);var aH=aI.style("height");if(aH){aI.attr("data-height",aH)}});aq.css("position","relative");aq.css("z-index",1);Z=(aD.filter('[data-settings~="touchscreen"]').length!=0);if(!Z){aq.click(function(){A(ar,"",false)});ap.click(function(){A(ar,"",false)});aC.click(function(){A(ar,"",false)})}if(aD.filter('[data-settings~="no-popup"]').length==0){N[ar].popup_settings=popupWindow(aF,{height:screen.height-200,width:screen.width-100,top:75,left:50,scrollbars:1,windowURL:"",data:""},function(){F(ar)},function(){})}ap.css("opacity",0);N[ar].toolbarVisible=true;N[ar].hasOneLine=aB.outerHeight()<au.outerHeight()*2;N[ar].toolbarMouseover=false;if(au.filter('[data-settings~="mouseover"]').length!=0&&!Z){N[ar].toolbarMouseover=true;N[ar].toolbarVisible=false;au.css("margin-top","-"+au.outerHeight()+"px");au.hide();if(au.filter('[data-settings~="overlay"]').length!=0&&!N[ar].hasOneLine){au.css("position","absolute");au.css("z-index",2);if(au.filter('[data-settings~="hide"]').length!=0){aq.click(function(){T(ar,undefined,undefined,0)});ap.click(function(){T(ar,false,undefined,0)})}}else{au.css("z-index",4)}if(au.filter('[data-settings~="delay"]').length!=0){N[ar].toolbar_delay=500}aD.mouseenter(function(){T(ar,true)}).mouseleave(function(){T(ar,false)})}else{if(Z){au.show()}}if(aD.filter('[data-settings~="minimize"]').length==0){I.minimize(ar)}if(ap.length!=0&&!Z){if(ap.filter('[data-settings~="dblclick"]').length!=0){aq.dblclick(function(){CrayonSyntax.togglePlain(ar)})}else{if(ap.filter('[data-settings~="click"]').length!=0){aq.click(function(){CrayonSyntax.togglePlain(ar)})}else{if(ap.filter('[data-settings~="mouseover"]').length!=0){aD.mouseenter(function(){CrayonSyntax.togglePlain(ar,true)}).mouseleave(function(){CrayonSyntax.togglePlain(ar,false)});az.hide()}}}if(ap.filter('[data-settings~="show-plain-default"]').length!=0){CrayonSyntax.togglePlain(ar,true)}}var ai=aD.filter('[data-settings~="expand"]').length!=0;if(!Z&&aD.filter('[data-settings~="scroll-mouseover"]').length!=0){aq.css("overflow","hidden");ap.css("overflow","hidden");aD.mouseenter(function(){M(ar,true,ai)}).mouseleave(function(){M(ar,false,ai)})}if(ai){aD.mouseenter(function(){D(ar,true)}).mouseleave(function(){D(ar,false)})}if(aD.filter('[data-settings~="disable-anim"]').length!=0){N[ar].time=0}if(aD.filter('[data-settings~="wrap"]').length!=0){N[ar].wrapped=true}N[ar].mac=aD.hasClass("crayon-os-mac");ac(ar);ab(ar);Y(ar)};var aa=function(ai){CrayonUtil.log(N);if(typeof N[ai]=="undefined"){N[ai]=f("#"+ai);CrayonUtil.log("make "+ai);return true}CrayonUtil.log("no make "+ai);return false};var X=function(){return G++};var F=function(ai){if(typeof N[ai]=="undefined"){return aa(ai)}var aj=N[ai].popup_settings;if(aj&&aj.data){return}var al=N[ai].clone(true);al.removeClass("crayon-wrapped");if(N[ai].wrapped){f(j,al).each(function(){var ao=f(this).attr("data-line");var an=f("#"+ao);var am=an.attr("data-height");am=am?am:"";if(typeof am!="undefined"){an.css("height",am);f(this).css("height",am)}})}al.find(o).css("height","");var ak="";if(N[ai].plainVisible){ak=al.find(w)}else{ak=al.find(o)}aj.data=I.getAllCSS()+'<body class="crayon-popup-window" style="padding:0; margin:0;"><div class="'+al.attr("class")+' crayon-popup">'+I.removeCssInline(I.getHtmlString(ak))+"</div></body>"};I.minimize=function(al){var ak=f('<div class="crayon-minimize crayon-button"><div>');N[al].tools.append(ak);N[al].origTitle=N[al].title.html();if(!N[al].origTitle){N[al].title.html(H.minimize)}var aj="crayon-minimized";var ai=function(){N[al].toolbarPreventHide=false;ak.remove();N[al].removeClass(aj);N[al].title.html(N[al].origTitle);var am=N[al].toolbar;if(am.filter('[data-settings~="never-show"]').length!=0){am.remove()}};N[al].toolbar.click(ai);ak.click(ai);N[al].addClass(aj);N[al].toolbarPreventHide=true;T(al,undefined,undefined,0)};I.getHtmlString=function(ai){return f("<div>").append(ai.clone()).remove().html()};I.removeCssInline=function(ak){var aj=/style\s*=\s*"([^"]+)"/gmi;var ai=null;while((ai=aj.exec(ak))!=null){var al=ai[1];al=al.replace(/\b(?:width|height)\s*:[^;]+;/gmi,"");ak=ak.sliceReplace(ai.index,ai.index+ai[0].length,'style="'+al+'"')}return ak};I.getAllCSS=function(){var ak="";var aj=f('link[rel="stylesheet"]');var ai=[];if(aj.length==1){ai=aj}else{ai=aj.filter('[href*="crayon-syntax-highlighter"], [href*="min/"]')}ai.each(function(){var al=I.getHtmlString(f(this));ak+=al});return ak};I.copyPlain=function(ak,al){if(typeof N[ak]=="undefined"){return aa(ak)}var aj=N[ak].plain;I.togglePlain(ak,true,true);T(ak,true);var ai=N[ak].mac?"\u2318":"CTRL";var am=H.copy;am=am.replace(/%s/,ai+"+C");am=am.replace(/%s/,ai+"+V");A(ak,am);return false};var A=function(aj,al,ai){if(typeof N[aj]=="undefined"){return aa(aj)}var ak=N[aj].info;if(typeof al=="undefined"){al=""}if(typeof ai=="undefined"){ai=true}if(L(ak)&&ai){ak.html("<div>"+al+"</div>");ak.css("margin-top",-ak.outerHeight());ak.show();Q(aj,ak,true);setTimeout(function(){Q(aj,ak,false)},5000)}if(!ai){Q(aj,ak,false)}};var B=function(ai){if(window.devicePixelRatio>1){var aj=f(".crayon-button-icon",N[ai].toolbar);aj.each(function(){var al=f(this).css("background-image");var ak=al.replace(/\.(?=[^\.]+$)/g,"@2x.");f(this).css("background-size","48px 128px");f(this).css("background-image",ak)})}};var L=function(ai){var aj="-"+ai.outerHeight()+"px";if(ai.css("margin-top")==aj||ai.css("display")=="none"){return true}else{return false}};var Q=function(al,ak,aj,an,am,ap){var ai=function(){if(ap){ap(al,ak)}};var ao="-"+ak.outerHeight()+"px";if(typeof aj=="undefined"){if(L(ak)){aj=true}else{aj=false}}if(typeof an=="undefined"){an=100}if(an==false){an=false}if(typeof am=="undefined"){am=0}ak.stop(true);if(aj==true){ak.show();ak.animate({marginTop:0},ah(an,al),ai)}else{if(aj==false){if(ak.css("margin-top")=="0px"&&am){ak.delay(am)}ak.animate({marginTop:ao},ah(an,al),function(){ak.hide();ai()})}}};I.togglePlain=function(al,am,aj){if(typeof N[al]=="undefined"){return aa(al)}var ai=N[al].main;var ak=N[al].plain;if((ai.is(":animated")||ak.is(":animated"))&&typeof am=="undefined"){return}ae(al);var ao,an;if(typeof am!="undefined"){if(am){ao=ai;an=ak}else{ao=ak;an=ai}}else{if(ai.css("z-index")==1){ao=ai;an=ak}else{ao=ak;an=ai}}N[al].plainVisible=(an==ak);N[al].top=ao.scrollTop();N[al].left=ao.scrollLeft();N[al].scrollChanged=false;C(al);ao.stop(true);ao.fadeTo(ah(500,al),0,function(){ao.css("z-index",0)});an.stop(true);an.fadeTo(ah(500,al),1,function(){an.css("z-index",1);if(an==ak){if(aj){ak.select()}else{}}an.scrollTop(N[al].top+1);an.scrollTop(N[al].top);an.scrollLeft(N[al].left+1);an.scrollLeft(N[al].left)});an.scrollTop(N[al].top);an.scrollLeft(N[al].left);ab(al);T(al,false);return false};I.toggleNums=function(am,al,ai){if(typeof N[am]=="undefined"){aa(am);return false}if(N[am].table.is(":animated")){return false}var ao=Math.round(N[am].nums_content.outerWidth()+1);var an="-"+ao+"px";var ak;if(typeof al!="undefined"){ak=false}else{ak=(N[am].table.css("margin-left")==an)}var aj;if(ak){aj="0px";N[am].numsVisible=true}else{N[am].table.css("margin-left","0px");N[am].numsVisible=false;aj=an}if(typeof ai!="undefined"){N[am].table.css("margin-left",aj);ac(am);return false}var ap=(N[am].table.outerWidth()+J(N[am].table.css("margin-left"))>N[am].main.outerWidth());var aq=(N[am].table.outerHeight()>N[am].main.outerHeight());if(!ap&&!aq){N[am].main.css("overflow","hidden")}N[am].table.animate({marginLeft:aj},ah(200,am),function(){if(typeof N[am]!="undefined"){ac(am);if(!ap&&!aq){N[am].main.css("overflow","auto")}}});return false};I.toggleWrap=function(ai){N[ai].wrapped=!N[ai].wrapped;Y(ai)};I.toggleExpand=function(ai){var aj=!CrayonUtil.setDefault(N[ai].expanded,false);D(ai,aj)};var Y=function(ai,aj){aj=CrayonUtil.setDefault(aj,true);if(N[ai].wrapped){N[ai].addClass(g)}else{N[ai].removeClass(g)}E(ai);if(!N[ai].expanded&&aj){V(ai)}N[ai].wrapTimes=0;clearInterval(N[ai].wrapTimer);N[ai].wrapTimer=setInterval(function(){if(N[ai].is(":visible")){O(ai);N[ai].wrapTimes++;if(N[ai].wrapTimes==5){clearInterval(N[ai].wrapTimer)}}},200)};var ad=function(ai){if(typeof N[ai]=="undefined"){aa(ai);return false}};var J=function(aj){if(typeof aj!="string"){return 0}var ai=aj.replace(/[^-0-9]/g,"");if(ai.length==0){return 0}else{return parseInt(ai)}};var ac=function(ai){if(typeof N[ai]=="undefined"||typeof N[ai].numsVisible=="undefined"){return}if(N[ai].numsVisible){N[ai].numsButton.removeClass(a);N[ai].numsButton.addClass(d)}else{N[ai].numsButton.removeClass(d);N[ai].numsButton.addClass(a)}};var E=function(ai){if(typeof N[ai]=="undefined"||typeof N[ai].wrapped=="undefined"){return}if(N[ai].wrapped){N[ai].wrapButton.removeClass(a);N[ai].wrapButton.addClass(d)}else{N[ai].wrapButton.removeClass(d);N[ai].wrapButton.addClass(a)}};var W=function(ai){if(typeof N[ai]=="undefined"||typeof N[ai].expanded=="undefined"){return}if(N[ai].expanded){N[ai].expandButton.removeClass(a);N[ai].expandButton.addClass(d)}else{N[ai].expandButton.removeClass(d);N[ai].expandButton.addClass(a)}};var ab=function(ai){if(typeof N[ai]=="undefined"||typeof N[ai].plainVisible=="undefined"){return}if(N[ai].plainVisible){N[ai].plainButton.removeClass(a);N[ai].plainButton.addClass(d)}else{N[ai].plainButton.removeClass(d);N[ai].plainButton.addClass(a)}};var T=function(aj,ai,al,ak){if(typeof N[aj]=="undefined"){return aa(aj)}else{if(!N[aj].toolbarMouseover){return}else{if(ai==false&&N[aj].toolbarPreventHide){return}else{if(Z){return}}}}var am=N[aj].toolbar;if(typeof ak=="undefined"){ak=N[aj].toolbar_delay}Q(aj,am,ai,al,ak,function(){N[aj].toolbarVisible=ai})};var R=function(ak,ai){var aj=f.extend({},ak);aj.width+=ai.width;aj.height+=ai.height;return aj};var P=function(ak,ai){var aj=f.extend({},ak);aj.width-=ai.width;aj.height-=ai.height;return aj};var U=function(ai){if(typeof N[ai].initialSize=="undefined"){N[ai].toolbarHeight=N[ai].toolbar.outerHeight();N[ai].innerSize={width:N[ai].width(),height:N[ai].height()};N[ai].outerSize={width:N[ai].outerWidth(),height:N[ai].outerHeight()};N[ai].borderSize=P(N[ai].outerSize,N[ai].innerSize);N[ai].initialSize={width:N[ai].main.outerWidth(),height:N[ai].main.outerHeight()};N[ai].initialSize.height+=N[ai].toolbarHeight;N[ai].initialOuterSize=R(N[ai].initialSize,N[ai].borderSize);N[ai].finalSize={width:N[ai].table.outerWidth(),height:N[ai].table.outerHeight()};N[ai].finalSize.height+=N[ai].toolbarHeight;N[ai].finalSize.width=CrayonUtil.setMin(N[ai].finalSize.width,N[ai].initialSize.width);N[ai].finalSize.height=CrayonUtil.setMin(N[ai].finalSize.height,N[ai].initialSize.height);N[ai].diffSize=P(N[ai].finalSize,N[ai].initialSize);N[ai].finalOuterSize=R(N[ai].finalSize,N[ai].borderSize);N[ai].initialSize.height+=N[ai].toolbar.outerHeight()}};var D=function(al,ao){if(typeof N[al]=="undefined"){return aa(al)}if(typeof ao=="undefined"){return}var aj=N[al].main;var aq=N[al].plain;if(ao){if(typeof N[al].expanded=="undefined"){U(al);N[al].expandTime=CrayonUtil.setRange(N[al].diffSize.width/3,300,800);N[al].expanded=false;var ap=N[al].finalOuterSize;N[al].placeholder=f("<div></div>");N[al].placeholder.addClass(y);N[al].placeholder.css(ap);N[al].before(N[al].placeholder);N[al].placeholder.css("margin",N[al].css("margin"));f(window).bind("resize",K)}var am={height:"auto","min-height":"none","max-height":"none"};var ai={width:"auto","min-width":"none","max-width":"none"};N[al].outerWidth(N[al].outerWidth());N[al].css({"min-width":"none","max-width":"none"});var an={width:N[al].finalOuterSize.width};if(!N[al].mainHeightAuto&&!N[al].hasOneLine){an.height=N[al].finalOuterSize.height;N[al].outerHeight(N[al].outerHeight())}aj.css(am);aj.css(ai);N[al].stop(true);N[al].animate(an,ah(N[al].expandTime,al),function(){N[al].expanded=true;W(al)});N[al].placeholder.show();f("body").prepend(N[al]);N[al].addClass(t);K()}else{var ar=N[al].initialOuterSize;var ak=N[al].toolbar_delay;if(ar){N[al].stop(true);if(!N[al].expanded){N[al].delay(ak)}var an={width:ar.width};if(!N[al].mainHeightAuto&&!N[al].hasOneLine){an.height=ar.height}N[al].animate(an,ah(N[al].expandTime,al),function(){af(al)})}else{setTimeout(function(){af(al)},ak)}N[al].placeholder.hide();N[al].placeholder.before(N[al]);N[al].css({left:"auto",top:"auto"});N[al].removeClass(t)}ae(al);if(ao){Y(al,false)}};var K=function(){for(uid in N){if(N[uid].hasClass(t)){N[uid].css(N[uid].placeholder.offset())}}};var af=function(ai){N[ai].expanded=false;V(ai);W(ai);if(N[ai].wrapped){Y(ai)}};var M=function(al,aj,am){if(typeof N[al]=="undefined"){return aa(al)}if(typeof aj=="undefined"||am||N[al].expanded){return}var ai=N[al].main;var ak=N[al].plain;if(aj){ai.css("overflow","auto");ak.css("overflow","auto");if(typeof N[al].top!="undefined"){visible=(ai.css("z-index")==1?ai:ak);visible.scrollTop(N[al].top-1);visible.scrollTop(N[al].top);visible.scrollLeft(N[al].left-1);visible.scrollLeft(N[al].left)}}else{visible=(ai.css("z-index")==1?ai:ak);N[al].top=visible.scrollTop();N[al].left=visible.scrollLeft();ai.css("overflow","hidden");ak.css("overflow","hidden")}N[al].scrollChanged=true;C(al)};var C=function(ai){N[ai].table.style("width","100%","important");var aj=setTimeout(function(){N[ai].table.style("width","");clearInterval(aj)},10)};var V=function(ak){var aj=N[ak].main;var ai=N[ak].mainStyle;aj.css(ai);N[ak].css("height","auto");N[ak].css("width",ai.width);N[ak].css("max-width",ai["max-width"]);N[ak].css("min-width",ai["min-width"])};var ae=function(ai){N[ai].plain.outerHeight(N[ai].main.outerHeight())};var O=function(ai){f(j,N[ai]).each(function(){var al=f(this).attr("data-line");var ak=f("#"+al);var aj=null;if(N[ai].wrapped){ak.css("height","");aj=ak.outerHeight();aj=aj?aj:""}else{aj=ak.attr("data-height");aj=aj?aj:"";ak.css("height",aj)}f(this).css("height",aj)})};var ah=function(ai,aj){if(ai=="fast"){ai=200}else{if(ai=="slow"){ai=600}else{if(!S(ai)){ai=parseInt(ai);if(isNaN(ai)){return 0}}}}return ai*N[aj].time};var S=function(ai){return typeof ai=="number"}};f(document).ready(function(){CrayonSyntax.init()})})(jQueryCrayon);
// source --> https://targettrust.com.br/wp-content/plugins/add-to-any/addtoany.min.js 
"function"==typeof jQuery&&jQuery(document).ready(function(a){a("body").on("post-load",function(){window.a2a&&a2a.init_all("page")})});
// source --> https://targettrust.com.br/wp-content/plugins/wpfront-notification-bar/jquery-plugins/jquery.c.js 
/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
		} catch(e) {
			return;
		}

		try {
			// If we can't parse the cookie, ignore it, it's unusable.
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write
		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));
// source --> https://targettrust.com.br/wp-content/plugins/wpfront-notification-bar/js/wpfront-notification-bar.js 
/*
 WPFront Notification Bar Plugin
 Copyright (C) 2013, WPFront.com
 Website: wpfront.com
 Contact: syam@wpfront.com
 
 WPFront Notification Bar Plugin is distributed under the GNU General Public License, Version 3,
 June 2007. Copyright (C) 2007 Free Software Foundation, Inc., 51 Franklin
 St, Fifth Floor, Boston, MA 02110, USA
 
 */

(function() {
    var $ = jQuery;

    //displays the notification bar
    window.wpfront_notification_bar = function(data) {
        var keep_closed_cookie = "wpfront-notification-bar-keep-closed";

        var spacer = $("#wpfront-notification-bar-spacer").show();
        var bar = $("#wpfront-notification-bar");
        var open_button = $("#wpfront-notification-bar-open-button");

        //set the position
        if (data.position == 1) {
            var top = 0;
            if (data.fixed_position && data.is_admin_bar_showing) {
                top = $("html").css("margin-top");
                if (top == "0px")
                    top = $("html").css("padding-top");
                top = parseInt(top);
            }
            if (data.fixed_position) {
                top += data.position_offset;
            }
            bar.css("top", top + "px");
            open_button.css("top", top + "px");
            $("body").prepend(spacer);
            spacer.css("top", data.position_offset + "px");
        }
        else {
            $("body").append(spacer);
            bar.css("bottom", "0px");
        }

        var height = bar.height();
        if (data.height > 0) {
            height = data.height;
            bar.find("table, tbody, tr").css("height", "100%");
        }

        bar.height(0).css({"position": (data.fixed_position ? "fixed" : "relative"), "visibility": "visible"});
        open_button.css({"position": (data.fixed_position ? "fixed" : "absolute")});

        //function to set bar height based on options
        var closed = false;
        var user_closed = false;
        function setHeight(height, callback, userclosed) {
            callback = callback || $.noop;

            if (userclosed)
                user_closed = true;

            if (height == 0) {
                if (closed)
                    return;
                closed = true;
            }
            else {
                if (!closed)
                    return;
                closed = false;
            }

            var fn = callback;
            callback = function() {
                fn();
                if (height > 0) {
                    //set height to auto if in case content wraps on resize
                    if (data.height == 0)
                        bar.height("auto");
                    open_button.hide();
                    closed = false;
                }
                if (height == 0 && data.display_open_button) {
                    open_button.show();
                }
                if (height == 0 && data.keep_closed && userclosed) {
                    if (data.keep_closed_for > 0)
                        $.cookie(keep_closed_cookie, 1, {path: "/", expires: data.keep_closed_for});
                    else
                        $.cookie(keep_closed_cookie, 1, {path: "/"});
                }
            };

            //set animation
            if (data.animate_delay > 0) {
                bar.stop().animate({"height": height + "px"}, data.animate_delay * 1000, "swing", callback);
                if (data.fixed_position)
                    spacer.stop().animate({"height": height + "px"}, data.animate_delay * 1000);
            }
            else {
                bar.height(height);
                if (data.fixed_position)
                    spacer.height(height);
                callback();
            }

        }

        if (data.close_button) {
            bar.find(".wpfront-close").click(function() {
                setHeight(0, null, true);
            });
        }

        //close button action
        if (data.button_action_close_bar) {
            bar.find(".wpfront-button").click(function() {
                setHeight(0, null, true);
            });
        }

        if (data.display_open_button) {
            open_button.click(function() {
                setHeight(height);
            });
        }

        if (data.keep_closed) {
            if ($.cookie(keep_closed_cookie)) {
                setHeight(0);
                return;
            }
        }

        closed = true;

        if (data.display_scroll) {
            setHeight(0);

            $(window).scroll(function() {
                if (user_closed)
                    return;

                if ($(this).scrollTop() > data.display_scroll_offset) {
                    setHeight(height);
                }
                else {
                    setHeight(0);
                }
            });
        }
        else {
            //set open after seconds and auto close seconds.
            setTimeout(function() {
                setHeight(height, function() {
                    if (data.auto_close_after > 0) {
                        setTimeout(function() {
                            setHeight(0, null, true);
                        }, data.auto_close_after * 1000);
                    }
                });
            }, data.display_after * 1000);
        }
    };
})();
// source --> https://targettrust.com.br/wp-content/themes/bones/library/js/libs/modernizr.custom.min.js 
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-hashchange-history-audio-video-input-inputtypes-localstorage-websockets-geolocation-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-css_mediaqueries-css_regions-css_supports-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("mediaqueries",Modernizr.mq("only all")),Modernizr.addTest("regions",function(){var a=Modernizr.prefixed("flowFrom"),b=Modernizr.prefixed("flowInto");if(!a||!b)return!1;var c=document.createElement("div"),d=document.createElement("div"),e=document.createElement("div"),f="modernizr_flow_for_regions_check";d.innerText="M",c.style.cssText="top: 150px; left: 150px; padding: 0px;",e.style.cssText="width: 50px; height: 50px; padding: 42px;",e.style[a]=f,c.appendChild(d),c.appendChild(e),document.documentElement.appendChild(c);var g,h,i=d.getBoundingClientRect();return d.style[b]=f,g=d.getBoundingClientRect(),h=g.left-i.left,document.documentElement.removeChild(c),d=e=c=undefined,h==42}),Modernizr.addTest("supports","CSSSupportsRule"in window);