(function(){var m,n=this,p=function(a){return"string"==typeof a},aa=/^[\w+/_-]+[=]{0,2}$/,q=null,ba=function(){},t=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ca=function(a){var b=t(a);return"array"==b||"object"==b&&"number"==typeof a.length},da=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ea="closure_uid_"+(1E9*Math.random()>>>0),fa=0,ha=function(a,b,c){return a.call.apply(a.bind,arguments)},ia=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},u=function(a,b,c){u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ha:ia;return u.apply(null,arguments)},ja=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},v=Date.now||function(){return+new Date},w=function(a,b){function c(){}c.prototype=b.prototype;a.Ua=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Pa=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var ka;var x=Array.prototype.indexOf?function(a,b){var c;return Array.prototype.indexOf.call(a,b,c)}:function(a,b){var c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},y=Array.prototype.forEach?function(a,b){var c;Array.prototype.forEach.call(a,b,c)}:function(a,b){for(var c,d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},la=Array.prototype.map?function(a,b){var c;return Array.prototype.map.call(a,b,c)}:function(a,b){for(var c,d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},ma=Array.prototype.some?function(a,b){var c;return Array.prototype.some.call(a,b,c)}:function(a,b){for(var c,d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},na=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var oa=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};var pa=function(a,b,c,d){var e="";a&&(e+=a+":");c&&(e+="//",b&&(e+=b+"@"),e+=c,d&&(e+=":"+d));return e},A=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,qa=function(a){return a?decodeURI(a):a};var ra=["googleads.g.doubleclick.net","adclick.g.doubleclick.net","www.googleadservices.com","adclick.googleadservices.com"];var sa={CLOSE:"c",DIRECTIONS:"d",IN_APP_PURCHASE:"p",LOCATION:"l",TELEPHONE:"t",LOCATION_FORMAT_MAP:"l_m",LOCATION_FORMAT_LANDING_PAGE:"l_l",LOCATION_FORMAT_STORE_INFO:"l_s",LOCATION_FORMAT_DIRECTIONS:"l_d",LOCATION_FORMAT_CALL:"l_c",LOCATION_FORMAT_TEXT:"l_t",LOCATION_FORMAT_IMAGE:"l_i",QUERY:"q"};var ta=document,B=window;var C=function(a,b){this.Ma=a;this.P=b;var c=document.documentMode;this.ja=c&&10>c;this.w={};this.J=!1},wa=function(a){a.J=!0;for(var b in a.w)a.w[b].W&&ua(a,b),va(a,b)},xa=function(a,b){var c=b.n;switch(b.t){case 1:var d=b.d;c=D(a,c);c.W(d);break;case 2:d=a;var e=D(d,c);e.X=!0;va(d,c)}},D=function(a,b){a.w[b]||(a.w[b]={X:!1,L:[],W:null});return a.w[b]},va=function(a,b){var c=D(a,b);if(c.X){for(var d=c.L.length,e=0;e<d;e++)a.sendMessage(b,c.L[e]);c.L=[]}},ua=function(a,b){if(a.J){var c={t:2};c.s=a.P;c.n=b;a.send(c)}};C.prototype.N=function(a,b){var c=D(this,a);c.W=b;ua(this,a)};C.prototype.sendMessage=function(a,b){var c=D(this,a);this.J&&c.X?(c={t:1},c.s=this.P,c.n=a,c.d=b,this.send(c)):c.L.push(b)};C.prototype.Ba=function(){return this.J};var ya=function(a,b){var c,d;for(d in a)b.call(c,a[d],d,a)},za=function(a,b){var c,d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d},Aa=function(a,b){var c,d;for(d in a)if(b.call(c,a[d],d,a))return d};var E=function(a){E[" "](a);return a};E[" "]=ba;var F=function(){},Ba="function"==typeof Uint8Array,G=function(a,b){a.a=null;b||(b=[]);a.Ta=void 0;a.l=-1;a.b=b;a:{var c=a,d=-1,e=c.b.length,f=-1;if(e&&(f=e-1,(e=c.b[f])&&"object"==typeof e&&"array"!=t(e)&&!(Ba&&e instanceof Uint8Array))){c.D=f-c.l;c.g=e;break a}-1<d?(c.D=Math.max(d,f+1-c.l),c.g=null):c.D=Number.MAX_VALUE}a.Qa={}},Ca=[],Da=function(a,b){if(b<a.D){var c=b+a.l,d=a.b[c];return d===Ca?a.b[c]=[]:d}if(a.g)return d=a.g[b],d===Ca?a.g[b]=[]:d},Ea=function(a,b,c){if(b<a.D)a.b[b+a.l]=c;else{var d=a.D+a.l;a.b[d]||(a.g=a.b[d]={});a.g[b]=c}},H=function(a,b,c,d){c!==d?Ea(a,b,c):a.b[b+a.l]=null},Fa=function(a,b,c){a.a||(a.a={});var d=c?c.b:c;a.a[b]=c;Ea(a,b,d)};F.prototype.toString=function(){return this.b.toString()};F.prototype.getExtension=function(a){if(this.g){this.a||(this.a={});var b=a.Ra;if(a.Sa){if(a.Ca())return this.a[b]||(this.a[b]=la(this.g[b]||[],function(b){return new a.ta(b)})),this.a[b]}else if(a.Ca())return!this.a[b]&&this.g[b]&&(this.a[b]=new a.ta(this.g[b])),this.a[b];return this.g[b]}};F.prototype.clone=function(){return new this.constructor(I(this.b))};var I=function(a){if("array"==t(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?I(d):d)}return b}if(Ba&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?I(d):d);return b};var Ga=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var Ia=function(){this.ha="";this.ma=Ha},Ha={};var Ja=function(a,b){var c=b instanceof Ia&&b.constructor===Ia&&b.ma===Ha?b.ha:"type_error:TrustedResourceUrl";a.src=c;if(null===q){a:{c=n.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&aa.test(c))break a;c=null}q=c||""}(c=q)&&a.setAttribute("nonce",c)};var Ka=function(a,b,c){function d(c){c&&b.appendChild(p(c)?a.createTextNode(c):c)}for(var e=1;e<c.length;e++){var f=c[e];if(!ca(f)||da(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(da(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"==t(f)){g="function"==typeof f.item;break a}}g=!1}y(g?na(f):f,d)}}},La=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0},Ma=function(a,b){a.appendChild(b)},Na=function(a,b){Ka(9==a.nodeType?a:a.ownerDocument||a.document,a,arguments)},Oa=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null},Pa=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a},Ra=function(a){this.T=a||n.document||document};m=Ra.prototype;m.getElementsByTagName=function(a,b){var c=b||this.T;return c.getElementsByTagName(String(a))};m.createElement=function(a){return this.T.createElement(String(a))};m.createTextNode=function(a){return this.T.createTextNode(String(a))};m.appendChild=Ma;m.append=Na;m.canHaveChildren=La;m.removeNode=Oa;m.contains=Pa;var Ta=function(a){Sa();var b=new Ia;b.ha=a;return a=b},Sa=ba;var Ua=function(){var a=J;try{var b;if(b=!!a&&null!=a.location.href)a:{try{E(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},Va=function(a,b){var c;if(a)for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.call(c,a[d],d,a)};var Wa=Ga(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});n.addEventListener("test",null,b)}catch(c){}return a});function Xa(a){return a?a.passive&&Wa()?a:a.capture||!1:a}var Ya=function(a,b,c){var d;a.addEventListener?a.addEventListener(b,c,Xa(d)):a.attachEvent&&a.attachEvent("on"+b,c)},Za=function(a,b,c){var d;a.removeEventListener?a.removeEventListener(b,c,Xa(d)):a.detachEvent&&a.detachEvent("on"+b,c)};var ab=function(a,b){var c=n;var d=void 0===d?!1:d;$a(c,a,b,d)},$a=function(a,b,c,d){var e=!1;e=void 0===e?!1:e;d=void 0===d?!1:d;a.google_image_requests||(a.google_image_requests=[]);var f=a.document.createElement("img");if(c||d){var g=function(b){c&&c(b);if(d){b=a.google_image_requests;var e=x(b,f);0<=e&&Array.prototype.splice.call(b,e,1)}Za(f,"load",g);Za(f,"error",g)};Ya(f,"load",g);Ya(f,"error",g)}e&&(f.referrerPolicy="no-referrer");f.src=b;a.google_image_requests.push(f)};var bb=function(a,b){var c;var d=void 0===d?document:d;var e=(d?new Ra(9==d.nodeType?d:d.ownerDocument||d.document):ka||(ka=new Ra)).createElement("SCRIPT");e.type="text/javascript";b&&(void 0!==e.onreadystatechange?e.onreadystatechange=function(){if("complete"==e.readyState||"loaded"==e.readyState)try{b()}catch(g){}}:e.onload=b);c&&(e.id=c);Ja(e,Ta(a));var f=d.getElementsByTagName("head")[0];if(f)try{n.setTimeout(function(){f.appendChild(e)},0)}catch(g){}},cb=function(){var a=void 0===a?B:a;return"http:"===a.location.protocol},db,eb=window,fb=db=!!eb.google_async_iframe_id,J=fb&&window.parent||window;var gb=function(a,b){this.qa=b;this.$=null;this.F="";this.h="1";bb(a,u(this.za,this))};gb.prototype.za=function(){this.h=null;if(window.botguard)if(window.botguard.bg)try{this.$=new window.botguard.bg(this.qa)}catch(a){this.h="5"}else this.h="3";else this.h="2"};var hb=function(a){if(a.h)return"";if(!a.$.invoke)return a.h="4","";try{var b=a.$.invoke()}catch(c){return a.h="6",""}return b&&b.length?b:(a.h="6","")};gb.prototype.getError=function(){return this.h?this.h:this.F.length?3>this.F.length?"7":1124<this.F.length?"8":null:null};var L=function(a){var b=K,c="ExitApi.exit();"==document.body.getAttribute("onClick")||"Enabler.exit('ad');"==document.body.getAttribute("onClick"),d=this;c=void 0===c?!1:c;this.v=b;this.fa=B.parent;this.G=a;this.U=c;this.aa=[];this.Y=Infinity;this.M=this.I=null;this.ba=this.ka=0;if(a=this.G.bg)this.I=new gb(a.u,a.c);this.v.N("event",u(this.ya,this));window.addEventListener("click",u(this.Ea,this),!0);if("function"==typeof TouchEvent){TouchEvent.prototype.preventDefault=function(){d.ka=Date.now()+1500};a=function(a){Date.now()<d.ka&&a.stopPropagation()};window.addEventListener("mousemove",a,!0);window.addEventListener("mousedown",a,!0);window.addEventListener("mouseup",a,!0);window.addEventListener("click",a,!0);var e=function(){};window.addEventListener("touchend",function(a){a.target&&a.target.addEventListener("click",e)},!0)}window.addEventListener("touchstart",u(this.Ha,this),!0);ib(this);this.exit=this.va;this.exitNonCharging=this.wa;this.RedirectType=sa;this.reportInteraction_=this.Ja;this.updateUrls_=this.Oa;this.configureCloseButton=this.sa},ib=function(a){a.v.N("exit-pmcfg",u(function(a){this.ga=a},a))};m=L.prototype;m.va=function(a,b){this.U||jb(this,a,void 0,b)};m.wa=function(a){this.U||jb(this,a,38)};m.Ja=function(a){var b={};b.i=a;a={};a.i=b;kb(this,a)||this.v.sendMessage("interactions",b)};m.Oa=function(a){var b={};b.f=a;a={};a.u=b;kb(this,a)||this.v.sendMessage("url_update",b)};m.sa=function(a){var b={};b.t=a;this.v.sendMessage("mb_close_btn",b)};var jb=function(a,b,c,d){var e=Date.now();e<a.ba?lb(a,b,c,d):a.M={na:b,ra:c,Ia:d,xa:e+1500}},lb=function(a,b,c,d){if(1!=a.G.exit_strategy||d)var e=!1;else{var f;if(f=b)f=(f=(f=a.G.google_template_data)&&f.adData)&&f[0]&&f[0][b];f=f||a.G.redirect_url;e=p(f)&&(f.match(A)[1]||null);e=p(e)&&0==e.toLowerCase().indexOf("http")?null!=B.open(f,"_blank"):!1}f={};f.f=b;f.c=c;f.r=d;f.d=a.aa;f.o=e;a.I&&(b=a.I,b.F=hb(b),b=b.F,f.br=b,f.be=a.I.getError());kb(a,f)||a.v.sendMessage("exit",f)},kb=function(a,b){if(a.ga&&a.fa.postMessage){var c={};c.n=a.ga;c.er=b;a.fa.postMessage(c,"*");return!0}return!1},mb=function(a,b,c,d){var e={};e.x=b;e.y=c;e.e=d;e.t=Date.now()-a.Y;e.ts=Date.now();a.aa.push(e)};L.prototype.Ea=function(a){this.U&&jb(this);mb(this,a.clientX,a.clientY,0);a=Date.now();if(this.M){var b=this.M;a<b.xa&&lb(this,b.na,b.ra,b.Ia)}this.M=null;this.ba=a+200};L.prototype.Ha=function(a){a.changedTouches&&0<a.changedTouches.length&&mb(this,a.changedTouches[0].clientX,a.changedTouches[0].clientY,1)};L.prototype.ya=function(a){switch(a.e){case "onshow":this.Y=v()}};var M=function(a){G(this,a)};w(M,F);M.prototype.getContext=function(){var a=Da(this,2);return a=null==a?0:a};var nb=function(a){G(this,a)};w(nb,F);var N=function(a){G(this,a)};w(N,F);N.prototype.getParameters=function(){var a=M;var b;this.a||(this.a={});if(!this.a[1]){var c=Da(this,1);if(b||c)this.a[1]=new a(c)}return a=this.a[1]};N.prototype.setParameters=function(a){Fa(this,1,a);return this};var ob=function(){var a,b,c,d,e;this.da=c||4E3;this.C=a||"&";this.pa=b||",$";this.R=void 0!==d?d:"trn";this.Na=e||null;this.oa=!1;this.S={};this.Da=0;this.H=[]},qb=function(a,b,c,d,e){var f=[];Va(a,function(a,k){var g=pb(a,b,c,d,e);g&&f.push(k+"="+g)});return f.join(b)},pb=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(pb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(qb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))},sb=function(a,b,c,d){b=b+"//"+c+d;var e=rb(a)-d.length;if(0>e)return"";a.H.sort(function(a,b){return a-b});d=null;c="";for(var f=0;f<a.H.length;f++)for(var g=a.H[f],k=a.S[g],l=0;l<k.length;l++){if(!e){d=null==d?g:d;break}var h=qb(k[l],a.C,a.pa);if(h){h=c+h;if(e>=h.length){e-=h.length;b+=h;c=a.C;break}else a.oa&&(c=e,h[c-1]==a.C&&--c,b+=h.substr(0,c),c=a.C,e=0);d=null==d?g:d}}f="";a.R&&null!=d&&(d=a.Na||d,f=c+a.R+"="+d);return b+f+""},rb=function(a){if(!a.R)return a.da;var b=1,c;for(c in a.S)b=c.length>b?c.length:b;return a.da-a.R.length-b-a.C.length-1};var tb=function(){var a;this.Ga=a=cb()?"http:":"https:";this.ua="pagead2.googlesyndication.com";this.Fa="/pagead/gen_204?id=";this.La=Math.random()},wb=function(a,b){var c=ub;if(vb(c))try{if(a instanceof ob)var d=a;else d=new ob,Va(a,function(a,b){var c=d,e=b,f=a,g=c.Da++,z={};z[e]=f;e=[z];c.H.push(g);c.S[g]=e});var e=sb(d,c.Ga,c.ua,c.Fa+"html5-mon&");e&&("undefined"===typeof b?ab(e):ab(e,b))}catch(f){}},vb=function(a){a=a.La;return 1>a};var O=null;var xb=function(){var a=n.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):v()},yb=function(){var a=void 0===a?n:a;return(a=a.performance)&&a.now?a.now():null};var zb=function(a,b,c){var d;var e=void 0===e?0:e;this.label=a;this.type=b;this.value=c;this.duration=e;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=d};var P=n.performance,Ab=!!(P&&P.mark&&P.measure&&P.clearMarks),Q=Ga(function(){var a;if(a=Ab){var b;if(null===O){O="";try{a="";try{a=n.top.location.hash}catch(c){a=n.location.hash}a&&(O=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=O;a=!!b.indexOf&&0<=b.indexOf("1337")}return a}),S=function(){var a=R;this.B=[];this.Aa=a||n;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.B=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.A=Q()||(null!=b?b:1>Math.random())};S.prototype.disable=function(){this.A=!1;this.B!=this.Aa.google_js_reporting_queue&&(Q()&&y(this.B,Bb),this.B.length=0)};var Bb=function(a){a&&P&&Q()&&(P.clearMarks("goog_"+a.uniqueId+"_start"),P.clearMarks("goog_"+a.uniqueId+"_end"))};S.prototype.start=function(a,b){if(!this.A)return null;var c=yb()||xb();c=new zb(a,b,c);var d="goog_"+c.uniqueId+"_start";P&&Q()&&P.mark(d);return c};S.prototype.end=function(a){if(this.A&&"number"==typeof a.value){var b=yb()||xb();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";P&&Q()&&P.mark(b);this.A&&this.B.push(a)}};var ub,Cb;if(fb&&!Ua()){var T="."+ta.domain;try{for(;2<T.split(".").length&&!Ua();)ta.domain=T=T.substr(T.indexOf(".")+1),J=window.parent}catch(a){}Ua()||(J=window)}var R=Cb=J,Db=new S,Eb=function(){var a;null!=a&&(R.google_measure_js_timing=a);R.google_measure_js_timing||Db.disable()};ub=new tb;"complete"==R.document.readyState?Eb():Db.A&&Ya(R,"load",function(){Eb()});var Gb=function(a){var b,c=b||Fb;return function(){var b=this||n;b=b.closure_memoize_cache_||(b.closure_memoize_cache_={});var e=c(a[ea]||(a[ea]=++fa),arguments);return b.hasOwnProperty(e)?b[e]:b[e]=a.apply(this,arguments)}},Fb=function(a,b){for(var c=[a],d=b.length-1;0<=d;--d)c.push(typeof b[d],b[d]);return c.join("\x0B")};var Hb=["destinationUrl","displayUrl"],Ib="googlesyndication.com googleadservices.com googleusercontent.com doubleclick.net youtube.com googleapis.com gstatic.com google-analytics.com".split(" "),Jb=Gb(function(a,b,c,d){d=d||{};d.i=a.creativeId;d.t=a.templateId;d.c=b;d.m=c;d.lp=a.layoutPath;a.experimentId&&(d.e=a.experimentId);a.V&&(d.gqi=a.V);a.Z&&(d.qqi=a.Z);a.Ka(d)}),Kb=function(a,b){return function(c,d,e){var f={};e&&(f.jsl=e);d&&(f.jsf=d);Jb(a,"j",c,f);b&&b(c,d,e)}},Lb=function(a){var b=a.match(A),c=function(a){return oa(b[3],a)};return ma(Ib,c)?a:pa(b[1],b[2],b[3],b[4])},Nb=function(a,b,c){var d={},e=0,f=function(a,b,c,f){d["a"+e]=a;null!=b&&(d["f"+e]=b);null!=c&&null!=f&&(d["s"+e]=c,d["d"+e]=f);e++};0!=b&&f("layout","layout",0,b.toFixed(4));if(b=window.performance&&window.performance.timing)b=b.responseEnd-b.navigationStart,f("http"+(cb()?"":"s"),"layout_html",0,b.toFixed(4));window.performance&&window.performance.getEntries&&(y(window.performance.getEntries(),function(b){var d=Aa(c,function(a){return b.name&&oa(b.name,a)});d&&d in c&&delete c[d];if(Mb(b.name)&&a.reportPerf){var e=0<b.startTime?b.startTime.toFixed(4):null,g=0<b.responseEnd?(b.responseEnd-b.startTime).toFixed(4):null;f(Lb(b.name),d,e,g)}}),(a.reportPerf||a.reportErrors)&&ya(c,function(a,b){f(a,b,-1,-1)}));0<e&&Jb(a,"p","",d)},Ob=function(a){return za(a,function(a,c){return p(a)&&Mb(a)&&!(0<=x(Hb,c))})},Mb=function(a){var b;if(b=/^(https?:)?\/\//.test(a))(b=a)?(a=qa(b.match(A)[5]||null))?(b=b?(b=qa(b.match(A)[3]||null))?0<=x(ra,b):!1:!1,a=b&&-1!=a.indexOf("/aclk")):a=!1:a=!1,b=!a;return b},Pb=function(a,b,c,d,e){var f=u(Function.prototype.apply,b,c,Array.prototype.slice.call(arguments,3));if(d&&d.monitoring){var g=d.monitoring;g={creativeId:g.creativeId||-1,templateId:g.templateId||-1,experimentId:g.experimentId,reportErrors:g.reportErrors||!1,reportPerf:g.reportPerf||!1,Ka:a,layoutPath:g.layoutPath,V:g.gqi,Z:g.qqi,rumUrl:g.rumUrl,ia:g.rumc,ea:g.navStart};var k=d.monitoring.loadTime?v()-d.monitoring.loadTime:0,l=d.google_template_data.adData[0],h=g;l=Ob(l);h=ja(Nb,h,k,l);window.setTimeout(h,1E4);h=g;if(h.rumUrl){l=new N;k=new M;h.ia&&H(k,1,h.ia,0);h.ea&&H(k,6,h.ea,0);H(k,2,3,0);var Qa=k;H(Qa,4,h.Z,"");H(Qa,3,h.V,"");l.setParameters(k);k=new nb;H(k,7,!0,!1);Fa(l,2,k);window.google_rum_config=l.b;k=document;l=k.createElement("script");Ja(l,Ta(h.rumUrl));(h=k.getElementsByTagName("script")[0])&&h.parentNode&&h.parentNode.insertBefore(l,h)}if(g.reportErrors){h=window.onerror;window.onerror=Kb(g,h);try{f()}catch(r){f=Kb(g,h);g=r.toString();r.name&&-1==g.indexOf(r.name)&&(g+=": "+r.name);r.message&&-1==g.indexOf(r.message)&&(g+=": "+r.message);if(r.stack){h=r.stack;l=g;try{for(-1==h.indexOf(l)&&(h=l+"\n"+h);h!=z;){var z=h;h=h.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1")}g=h.replace(/\n */g,"\n")}catch(mc){g=l}}z=g;f(z,r.lineNumber,r.fileName)}}else f()}else f()},Qb=function(a){var b;wb(a,b)};var U=function(a,b,c,d){var e=this;try{var f=!!document.cookie}catch(g){f=!1}if(f&&(f=window.location.origin||window.location.protocol+"//"+window.location.host,!0!==window.secureChannel_allowAnyParent&&b!==f&&-1===c.indexOf(f)))throw Error();window.postMessage&&(C.call(this,a,d),this.la=!!window.MessageChannel,this.O=b,this.j=this.K=null,window.addEventListener("message",function(a){var b=a.data;b=e.ja?JSON.parse(b):b;b.s!==e.P||a.source!==window.parent||"*"!==e.O&&a.origin!==e.O||xa(e,b);return a=void 0},!1),"complete"==n.document.readyState?this.ca():window.addEventListener("load",u(this.ca,this),!1))};w(U,C);U.prototype.send=function(a){this.la?this.K&&this.K.postMessage(a):(a=this.ja?JSON.stringify(a):a,this.j.contentWindow.postMessage(a,"*"))};U.prototype.ca=function(){var a={t:0};a.s=this.P;if(this.la){var b=new MessageChannel;this.K=b.port1;this.K.onmessage=u(function(a){xa(this,a.data)},this);this.Ma.postMessage(a,this.O,[b.port2]);wa(this)}else this.j=document.createElement("IFRAME"),this.j.style.display="none",b='<!doctype html><html><head><script>window.addEventListener("message",function(e){e.source.parent.postMessage(e.data,'+JSON.stringify(this.O)+");},false);\x3c/script></head><body></body></html>",this.j.srcdoc=b,this.j.src="javascript:'"+encodeURI(b)+"'",this.j.onload=u(function(){this.send(a);wa(this)},this),document.body.appendChild(this.j)};for(var Rb,Sb=window.location.hash.substring(1),Tb={},Ub=Sb.split("&"),Vb=0;Vb<Ub.length;Vb++){var Wb=Ub[Vb].split("=");Tb[Wb[0]]=decodeURIComponent(Wb[1])}var V=Rb=Tb,Xb=V.p&&0==V.p.indexOf("http")?V.p:"*",Yb;var Zb=window.parent,$b=Xb,ac=["http://pagead2.googlesyndication.com","https://pagead2.googlesyndication.com","http://tpc.googlesyndication.com","https://tpc.googlesyndication.com","https://adwords-displayads.googleusercontent.com"],bc=V.t;try{Yb=new U(Zb,$b,ac,bc)}catch(a){Yb=null}var K=Yb;if(K){K.N("adData",function(a){if(window.onAdData){var b=new L(a);var c=Date.now();b.Y=c;Pb(Qb,window.onAdData,window,a,b)}});var W=K,cc,dc=cc||"secureChannel",ec=W,fc,gc=dc,hc=ec,ic=fc,X=gc.split("."),Y=ic||n;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===hc?Y=Y[Z]&&Y[Z]!==Object.prototype[Z]?Y[Z]:Y[Z]={}:Y[Z]=hc;var jc=W;jc.registerApplicationHandler=W.N;var kc=W;kc.sendMessage=W.sendMessage;var lc=W;lc.isInitialized=W.Ba};}).call(this);
