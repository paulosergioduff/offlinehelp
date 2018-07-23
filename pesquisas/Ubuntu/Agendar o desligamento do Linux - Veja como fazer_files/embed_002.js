var BrowserProperties=function(){function a(){return navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i)}function b(){return navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)}function c(){var a=!1,b=navigator.userAgent.toLowerCase();-1!=b.indexOf("safari")&&(a=-1<b.indexOf("chrome")?!1:!0);return a}function d(){return null!=navigator.userAgent.match(/Chrome/i)}return{isMobile:a,isAndroid:function(){return navigator.userAgent.match(/Android/i)},
isWebBrowserAndroid:function(){return navigator.userAgent.match(/Android/i)&&navigator.userAgent.match(/Mobile Safari/i)},isIpad:b,isIphone:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},isIOS7:function(){return null!=navigator.userAgent.match(/(iPad|iPhone);.*CPU.*OS 7_\d/i)},isChrome:d,isFlashEnabled:function(){try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(f){}return!1},clickEvent:navigator.userAgent.match(/iPad/i)?"touchstart":"click",thisMovie:function(a){return-1!=
navigator.appName.indexOf("Microsoft")?window[a]:document[a]},isIE11:function(){return null!=navigator.userAgent.match(/rv\:11\.0/i)},isSafari:c,isAutoPlayNotAllowed:function(){return a()||c()||d()},isIOS93:function(){if(b())return 0<navigator.userAgent.split("Safari/").length?602.1>parseFloat(navigator.userAgent.split("Safari/")[1]):!1}}}();var onScrollActivated=!1,blockCloseButton=!1,META_NAME_SMARTY="SmartyC_videoid",delayToShowCloseButton=4E3,isMobile=BrowserProperties.isMobile(),IFRIENDLY_DATA=IFRIENDLY_DATA||function(){function a(){var a=IFRIENDLY_DATA.getData();(-1<location.hostname.indexOf("localhost")?["http://localhost:8080/ifriendly/inview.min.css"]:[a.domain+"newplayer/ifriendly/inview.min.css"]).forEach(function(a,b){var c="myCss"+b;if(!document.getElementById(c)){var d=document.getElementsByTagName("head")[0],e=document.createElement("link");
e.id=c;e.rel="stylesheet";e.type="text/css";e.href=a;e.media="all";d.appendChild(e)}})}var b={};return{init:function(c){b=c;a();drawIframe()},getData:function(){return b}}}(),SMARTY_ID_DATA=SMARTY_ID_DATA||function(){var a={};return{init:function(b){a=b},getData:function(){return a}}}(),SM_Utils=SM_Utils||function(){return{getIdUserFromUrl:function(a){var b=0;try{var c=a.match(/(webservice\/video*[^\/]+\/)(\d*)|(webservice\/direct*[^\/]+\/)(\d*)/);a=[];for(var d=0;d<c.length;d++)c[d]&&a.push(c[d]);
Array.isArray(a)?b=a[a.length-1]:console.log("[error] user id no valid.")}catch(f){console.log("[error] user id no valid.")}return b},isEmpty:function(a){var b=Object.prototype.hasOwnProperty;if(null==a)return!0;if(0<a.length)return!1;if(0===a.length)return!0;for(var c in a)if(b.call(a,c))return!1;return!0}}}();
function drawIframe(){var a=IFRIENDLY_DATA.getData();a.url=a.domain+a.url;a.share_rrss_my_page=a.social_page;a.social_page=a.share_rrss;a.userId=SM_Utils.getIdUserFromUrl(a.url);var b=JSON.stringify(a).replace(RegExp('"',"g"),"'"),c=a.domain+"newplayer/ifriendly/code.min.js";"localhost"===document.location.hostname&&(c="http://localhost:8080/ifriendly/code.js");b='<head><meta name="viewport" content="width=device-width, initial-scale=1"></head><body onload="var js = document.createElement(\'script\');js.src = \''+
c+"';js.addEventListener('load', function() { IFRIENDLY_DATA.init("+b+');});document.head.appendChild(js);"><div id="'+a.idFrm+'" style="width:100%;height:100%;position:relative"></div></body>';if(document.getElementById(a.idFrm))c=document.getElementById(a.idFrm);else{var d=createHeaderForAOV(a.idFrm),c=document.createElement("iframe");c.id=a.idFrm;BrowserProperties.isMobile()&&(c.style.top="40px");d.appendChild(c);document.body.appendChild(d);a=document.querySelector("#head_aov");BrowserProperties.isMobile()&&
(a.style.opacity=1,a.style.height="40px")}c.setAttribute("frameborder",0);c.setAttribute("allowfullscreen","");c.setAttribute("webkitallowfullscreen","");c.setAttribute("mozallowfullscreen","");c.setAttribute("scrolling","no");c.scrolling="no";c=c.contentWindow?c.contentWindow:c.contentDocument.document?c.contentDocument.document:c.contentDocument;c.document.open();c.document.write(b);c.document.close()}
function createHeaderForAOV(a){var b=document.createElement("div");b.id="sm_aov_container";var c=isMobile?"19":"15";b.innerHTML='<div id="head_head_aov" class="sm_head_head_aov"><div id="head_aov" class="sm_head_aov_drag"><div id="sm_close_aov" class="sm_close_aov_hide">\u00d7</div><div class="inview-videowall-text"><span>VIDEO WALL</span></div><div class="mov_icon "><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 180 180" style="enable-background:new 0 0 180 180;" xml:space="preserve" width="'+
c+'" height="'+c+'"> <path d = "M38.937,128.936L0,89.999l38.935-38.936l0.001,29.982h42.11V38.937l-29.982,0L90.001,0l38.935,38.936l-29.982,0v42.109  h42.109l-0.001-29.982L180,90.001l-38.936,38.935l-0.001-29.982h-42.11v42.109l29.982,0L89.999,180l-38.936-38.936l29.982,0V98.954  H38.937L38.937,128.936z" fill="#FFFFFF"></path></svg></div></div></div>';setTimeout(function(){activateMoveEffectForPlayer(a)},2E3);return b}
function activateInviewByIdFrame(a,b){sm_debug_obj.debug("activateInviewByIdFrame. Inicio... idIframe:"+a+" prefold:"+b.inview_prefold+" position:"+parseInt(b.inview_position,10));isAlwaysAOV(a)?(position=3,prefold=!0,showAlwaysAOVPlayer(viewAbility(a,b))):(viewAbilities[a]=viewAbility(a,b),checkIfIFramesAreInFold());onScrollActivated||SM_Utils.isEmpty(viewAbilities)||(onScrollActivated=!0,window.onscroll=function(a){sm_debug_obj.debug("viewAbility. onScroll ");checkIfIFramesAreInFold()})}
function sm_detectIfAdblockIsActive(){}function sm_loadScript_adblock(a,b){var c=document.createElement("script");c.type="text/javascript";c.readyState?c.onreadystatechange=function(){if("loaded"==c.readyState||"complete"==c.readyState)c.onreadystatechange=null,b()}:c.onload=function(){b()};c.src=a;document.getElementsByTagName("head")[0].appendChild(c)}
window.onload=function(){var a,b=validateIdVideoData(getVideoDataFromMetaTag());a=7;b||(b=validateIdVideoData(getVideoDataFromScript()),a=8);if(b){var c,d;switch(b.typeEmbed){case "yt":c="directYoutube";d="?ap=1&erv=0&json=1";break;case "vm":c="directVimeo";d="?ap=1&erv=0&json=1";break;default:c="video",d="/600/338/1/last/0/0"}IFRIENDLY_DATA.init({idFrm:b.idVideo+"_00000000",url:"webservice/"+c+"/"+b.idPublisher+"/"+b.idVideo+d,twitter:b.twitterSearch||"",volume:b.volume||50,autoplay:b.autoplay||
0,social_page:0,share_rrss:0,playerType:a,domain:"//"+getDomainSmarty()+"/"})}};function getDomainSmarty(){document.getElementsByTagName("script");for(var a=0;a<document.getElementsByTagName("script").length;a++){var b=document.getElementsByTagName("script")[a].src;if(0<b.indexOf("/newplayer/ifriendly/embed.min.js"))return getDomainFromUrl(b)}return"widget.adprotv.com"}
function getDomainFromUrl(a){a=a||"no-definida";return 0==a.indexOf("//")?a.toString().replace(/^(\/\/)/,"").match(/[^\/]*/)[0]:a.toString().replace(/^http(s)?:\/\//,"").match(/[^\/]*/)[0]}
function getVideoDataFromMetaTag(){for(var a="",b=document.getElementsByTagName("meta"),c=0;c<b.length;c++)if(b[c].getAttribute("name")==META_NAME_SMARTY){a=b[c].getAttribute("content");break}console.log("valor original del meta "+a);var c=/^tw([\@|\#](\w+( +\w+)*))[-(yt|vm|sm)_]/,d=a.replace(c,"");console.log("valor despues del reemplazo "+d);return d&&(b={},d=d.split("-"),2<d.length)?(b.idVideo=d.slice(0,d.length-2).join("-")||"",b.autoplay=parseInt(d[d.length-2],10)||0,b.volume=d[d.length-1]||
50,a=a.match(c),Array.isArray(a)&&(console.log("twitter data "+a[1]),b.twitterSearch=a[1]),b):""}function hasViewportMetaTag(){for(var a="",b=document.getElementsByTagName("meta"),c=0;c<b.length;c++)if("viewport"==b[c].getAttribute("name")){a=b[c].getAttribute("content");break}return a?!0:!1}
function getVideoDataFromScript(){if(SM_Utils.isEmpty(SMARTY_ID_DATA.getData()))return sm_debug_obj.debug("[Embed] NO hay datos para AlwaysAOV desde el script de la p\u00e1gina"),"";sm_debug_obj.debug("[Embed] tenemos datos para AlwaysAOV desde la p\u00e1gina. Hay que buscar el id");return SMARTY_ID_DATA.getData().idVideo?SMARTY_ID_DATA.getData():""}
function validateIdVideoData(a){if(!a)return null;var b=a.idVideo.match(/^(sm|yt|vm)\_(\d*)\_(\S*$)/);return b&&4===b.length?(a.typeEmbed=b[1],a.idPublisher=b[2],a.idVideo=b[3],a):null}function isAlwaysAOV(a){return 0<a.indexOf("_00000000")?!0:!1}
function showAlwaysAOVPlayer(a){sm_debug_obj.debug("showAlwaysAOVPlayer "+a.idFrame);alwaysView=a;if(a.watchObserve.activateInView){var b=BrowserProperties.isMobile()&&hasViewportMetaTag()?a.pos_inview[a.pos_sel]+"_mobile":a.pos_inview[a.pos_sel];document.getElementById(a.idFrame).parentElement.className=b;initVideoIfAutoplay(a.idFrame)}a.watchObserve.isAlwaysOnView||(a.watchObserve.isAlwaysOnView=!0,resizePlayer(a.idFrame));document.getElementById(a.idFrame).contentWindow.PlayerConfiguration.isInFold=
!0;a.watchObserve.isAlwaysOnView=!0}var SM_MouseEvents={mousedown:isMobile?"touchstart":"mousedown",mousemove:isMobile?"touchmove":"mousemove",mouseup:isMobile?"touchend":"mouseup",mouseout:isMobile?"touchend":"mouseout",mouseover:"mouseover",click:isMobile?"touchstart":"click"};
function activateMoveEffectForPlayer(a){var b=document.querySelector("#sm_aov_container"),c=document.querySelector("#head_aov");BrowserProperties.isMobile()&&setTimeout(function(){showCloseButton();delayToShowCloseButton=0},delayToShowCloseButton);var d=!1;console.log(b.getBoundingClientRect());var f=window.innerHeight-b.getBoundingClientRect().height-20,n=window.innerWidth-b.getBoundingClientRect().width-10,h=!1;b.addEventListener(SM_MouseEvents.mouseover,function(a){setTimeout(function(){showCloseButton();
delayToShowCloseButton=0},delayToShowCloseButton)});document.addEventListener(SM_MouseEvents.mouseup,function(a){d=!1});c.addEventListener(SM_MouseEvents.mousedown,function(e){function k(a,c){var d=a-p,e=c-q;0<d&&d<n&&0<e&&e<f&&(b.style.left=d+"px",b.style.top=e+"px")}function l(a){console.log(SM_MouseEvents.mouseup+" in bar");console.log(a);d=!1;console.log("desactivo onmousemove");document.removeEventListener(SM_MouseEvents.mousemove,m);c.onmouseup=null;sm_drag_to_drop.end(a.clientX||a.changedTouches[0].clientX)&&
BrowserProperties.isMobile()&&removeContainer()}function m(a){console.log("muevoooooo");d&&k(a.clientX?a.clientX:a.touches[0].clientX,a.clientY?a.clientY:a.touches[0].clientY)}e.preventDefault();sm_drag_to_drop.start();d=!0;console.log(b.getBoundingClientRect());console.log(this.getBoundingClientRect().top+"-"+this.getBoundingClientRect().left);console.log(e.clientY-this.getBoundingClientRect().top);console.log(e.clientX-this.getBoundingClientRect().left);console.log(e);var g=e.clientX?e.clientX:
e.touches[0].clientX;e=e.clientY?e.clientY:e.touches[0].clientY;sm_drag_to_drop.start(g);var p=g-this.getBoundingClientRect().left,q=e-this.getBoundingClientRect().top;k(g,e);console.log("activo onmousemove");document.addEventListener(SM_MouseEvents.mousemove,m);h||(c.addEventListener(SM_MouseEvents.mouseup,l),document.getElementById(a).contentWindow.addEventListener(SM_MouseEvents.mouseover,l),h=!0)},!1);document.querySelector("#sm_close_aov").addEventListener(SM_MouseEvents.click,function(a){a.preventDefault();
removeContainer()},!0)}function removeContainer(){document.querySelector("#sm_aov_container").innerHTML="";document.querySelector("#sm_aov_container").style.display="none"}function showCloseButton(){blockCloseButton||(document.getElementById("sm_close_aov").className="sm_close_aov_show")}function hideCloseButton(){document.getElementById("sm_close_aov").className="sm_close_aov_hide"}
var sm_drag_to_drop=function(){function a(){b++}var b=0,c=0,d=0;return{start:function(d){b=0;c=d;count_interval=setInterval(a,1)},end:function(a){d=a;clearInterval(count_interval);return 500>b&&400<d-c?!0:!1},count:function(){return b}}}();var DEBUG_SM_VIEWABILITY=!1,viewAbilities={},alwaysView={},viewAbility=function(a,b){var c=parseInt(b.inview_position,10),d={isAlwaysOnView:!1,activateInView:parseInt(b.inview_prefold,10),isEnableInview:parseInt(b.inview_activate,10)};sm_debug_obj.debug("viewAbility "+a);var f=!1;return{desactivateAOV:function(a){document.getElementById(a).className="";f=!0;isAlwaysAOV(a)&&(sm_debug_obj.debug("desactivateAOV elimino player"),document.getElementById(a).parentElement.innerHTML="")},isPlayerInFold:function(){return!0},
pos_inview:["","inview-top-left","inview-top-right","inview-bottom-left","inview-bottom-right"],pos_sel:c,pos_selected:0,watchObserve:d,idFrame:a,isOffAOV:function(){return f},playerInFold:!0}};
function checkIfIFramesAreInFold(){sm_debug_obj.debug("activatePostMessageByFrame viewAbilities ");sm_debug_obj.debug(viewAbilities);var a=!0;Object.keys(viewAbilities).forEach(function(b){b=viewAbilities[b];sm_debug_obj.debug(b);if(0!==b.watchObserve.isEnableInview)if(!b.isOffAOV()&&a){a=!1;0==b.pos_selected&&(b.pos_selected=b.pos_sel<b.pos_inview.length&&-1<b.pos_sel?b.pos_sel:-1);var c=document.getElementById(b.idFrame).parentElement;elementInViewport(c)?(sm_debug_obj.debug("elemento a la vista "+
b.idFrame),b.watchObserve.activateInView=-1===b.pos_selected?!1:!0,document.getElementById(b.idFrame).className="",document.getElementById("sm_aov_container")&&(document.getElementById("sm_aov_container").className="hide"),b.watchObserve.isAlwaysOnView&&(b.watchObserve.isAlwaysOnView=!1,resizePlayer(b.idFrame)),initVideoIfAutoplay(b.idFrame),document.getElementById(b.idFrame).contentWindow.PlayerConfiguration.isInFold=!0):(sm_debug_obj.debug(" elemento "+b.idFrame+"oculto activateInView "+b.watchObserve.activateInView),
b.watchObserve.activateInView&&(c=BrowserProperties.isMobile()&&hasViewportMetaTag()?b.pos_inview[b.pos_selected]+"_mobile":b.pos_inview[b.pos_selected],document.getElementById(b.idFrame).className=c,document.getElementById("sm_aov_container")&&(document.getElementById("sm_aov_container").className=c),initVideoIfAutoplay(b.idFrame)),b.watchObserve.isAlwaysOnView||(b.watchObserve.isAlwaysOnView=!0,resizePlayer(b.idFrame)),document.getElementById(b.idFrame).contentWindow.PlayerConfiguration.isInFold=
!0,b.watchObserve.isAlwaysOnView=!0)}else b.desactivateAOV(b.idFrame);else{var c=document.getElementById(b.idFrame).parentElement,d=b.idFrame;elementInViewport(c)?b.playerInFold||(sm_debug_obj.debug("----PLAYER IN FOLD-----"),b.playerInFold=!0,document.getElementById(b.idFrame).contentWindow.PlayerConfiguration.isInFold=b.playerInFold,loadVideoContent(d)):b.playerInFold&&(sm_debug_obj.debug("elemento oculto "+d),sm_debug_obj.debug("Es fancy-box el padre"+("fancybox-inner"===document.getElementById(b.idFrame).parentElement.className)),
b.playerInFold="fancybox-inner"===document.getElementById(b.idFrame).parentElement.className||document.getElementById(b.idFrame).closest("div[class*=modal-]"),sm_debug_obj.debug("item.playerInFold"+b.playerInFold),(document.getElementById(b.idFrame).contentWindow.PlayerConfiguration.isInFold=b.playerInFold)||pauseVideoContent(d))}})}
function resizePlayer(a){setTimeout(function(){document.getElementById(a).contentWindow.videoController.resizeComponents();""!==document.getElementById(a).className?document.getElementById(a).contentWindow.videoController.showButtonCloseAOV():document.getElementById(a).contentWindow.videoController.hideButtonCloseAOV()},300)}
function loadVideoContent(a){sm_debug_obj.debug("[inview] loadVideoContentInFold.init");initVideoIfAutoplay(a)||(sm_debug_obj.debug("[inview] activate videoContent infold"),""===document.getElementById(a).contentWindow.videoController.statePlayer&&(sm_debug_obj.debug("[inview] insertPlayerPlus"),document.getElementById(a).contentWindow.videoController.insertPlayerPlus()),document.getElementById(a).contentWindow.videoController.loadVideoContentInFold())}
function initVideoIfAutoplay(a){return document.getElementById(a).contentWindow.videoController.config.autoPlay&&""===document.getElementById(a).contentWindow.videoController.statePlayer?(document.getElementById(a).contentWindow.videoController.initPlay(),document.getElementById(a).contentWindow.videoController.insertPlayerPlus(),sm_debug_obj.debug("[inview] video is autoplay and init in fold"),!0):!1}
function pauseVideoContent(a){sm_debug_obj.debug("[inview] pauseVideoInFold.init");document.getElementById(a).contentWindow.videoController.pauseVideoInFold()}
function elementInViewport(a){sm_debug_obj.debug("elementInViewport.inicio...");for(var b=a.offsetTop,c=a.offsetLeft,d=a.offsetWidth/6.7,f=a.offsetHeight/6.7;a.offsetParent;)a=a.offsetParent,b+=a.offsetTop,c+=a.offsetLeft;a=b>=window.pageYOffset&&b+f<=window.pageYOffset+window.innerHeight;sm_debug_obj.debug("top "+b);sm_debug_obj.debug("left "+c);sm_debug_obj.debug("width "+d);sm_debug_obj.debug("height "+f);sm_debug_obj.debug("window.pageYOffset "+window.pageYOffset);sm_debug_obj.debug("window.innerHeight "+
window.innerHeight);sm_debug_obj.debug(a);return a}var sm_debug_obj=sm_debug_obj||function(){return{debug:function(a){DEBUG_SM_VIEWABILITY&&console.log(a)}}}();sm_debug_obj.debug();
