(function(){var window=this;var aa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},g;if("function"==typeof Object.setPrototypeOf)g=Object.setPrototypeOf;else{var k;a:{var ba={H:!0},ca={};try{ca.__proto__=ba;k=ca.H;break a}catch(a){}k=!1}g=k?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var da=g,ea=function(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(da)da(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,c);e&&Object.defineProperty(a,c,e)}else a[c]=b[c];a.I=b.prototype},n=this,p=function(a){return"string"==typeof a},fa=/^[\w+/_-]+[=]{0,2}$/,r=null,ha=function(){},t=function(a){a.m=void 0;a.g=function(){return a.m?a.m:a.m=new a}},u=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},w=function(a,b){function c(){}c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.J=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var ia=function(a,b){if(p(a))return p(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ja=function(a,b){for(var c=a.length,e=p(a)?a.split(""):a,d=0;d<c;d++)d in e&&b.call(void 0,e[d],d,a)},ka=function(a){for(var b=x(219),c=b.length,e=Array(c),d=p(b)?b.split(""):b,f=0;f<c;f++)f in d&&(e[f]=a.call(void 0,d[f],f,b));return e},la=function(a,b){a:{for(var c=a.length,e=p(a)?a.split(""):a,d=0;d<c;d++)if(d in e&&b.call(void 0,e[d],d,a)){b=d;break a}b=-1}return 0>b?null:p(a)?a.charAt(b):a[b]},ma=function(a){return Array.prototype.concat.apply([],arguments)};var y;a:{var na=n.navigator;if(na){var oa=na.userAgent;if(oa){y=oa;break a}}y=""};var qa=function(){var a=pa,b={},c;for(c in a)b[c]=a[c];return b};var z=function(a){z[" "](a);return a};z[" "]=ha;var B=function(){this.b="";this.c=ra};B.prototype.w=!0;B.prototype.a=function(){return this.b};var sa=function(a){return a instanceof B&&a.constructor===B&&a.c===ra?a.b:"type_error:TrustedResourceUrl"},ra={};var C=function(){this.l="";this.G=ta};C.prototype.w=!0;C.prototype.a=function(){return this.l};var ua=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,ta={},va=function(a){var b=new C;b.l=a;return b};va("about:blank");var wa=function(a,b){a.src=sa(b);if(null===r){a:{if((b=n.document.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&fa.test(b))break a;b=null}r=b||""}(b=r)&&a.setAttribute("nonce",b)};var D=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var ya=function(a){xa();var b=new B;b.b=a;return b},xa=ha;var za=/^[\w+/_-]+[=]{0,2}$/;var Da=function(a,b,c){var e=!1;void 0===c||c||(e=Aa());return!e&&!Ba()&&(c=Math.random(),c<b)?(c=Ca(),a[Math.floor(c*a.length)]):null},Ca=function(){if(!n.crypto)return Math.random();try{var a=new Uint32Array(1);n.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},Ea=function(){var a=x(210),b;for(b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0},Ba=D(function(){return-1!=y.indexOf("Google Web Preview")||1E-4>Math.random()}),Aa=D(function(){return-1!=y.indexOf("MSIE")}),E=function(a){return/^true$/.test(a)},Fa=function(){try{a:{var a=n.document.querySelector("script[nonce]");if(a){var b=a.nonce||a.getAttribute("nonce");if(b&&za.test(b)){var c=b;break a}}c=void 0}return c}catch(e){}};var F=function(){return n.googletag||(n.googletag={})};var G={1:"pagead2.googlesyndication.com",2:"pubads.g.doubleclick.net",3:"securepubads.g.doubleclick.net",173:"pubads.g.doubleclick.net",174:"securepubads.g.doubleclick.net",7:.02,13:1500,23:.001,24:200,27:.01,33:"pagead2.googlesyndication.com",37:.01,38:.001,47:0,53:"",58:1,65:.01,66:1E-5,67:0,68:0,69:1,71:.05,162:0,163:"",76:"",77:.001,78:0,81:.001,85:0,99:.01,103:.01,104:"/pagead/js/rum.js",113:1,114:1,115:0,116:0,117:1,118:1,124:1,208:.01,169:0,207:.01,127:0,129:.05,131:"",134:.01,135:.1,229:!1,143:.005,168:0,144:.001,187:.01,141:1,158:.001,150:".google.com.br",179:.05,170:!1,211:!1,196:.001,234:.001,197:.001,152:[],172:null,182:1E3,188:0,189:.01,191:1512514930353,192:21510956201635,190:0xa781a7496a3,194:.95,225:.95,231:.1,199:0,180:null,219:[],230:{},210:{},227:{},226:[],195:1,198:1,222:1,200:1,201:.001,202:"",203:.01,206:0,213:1,214:.05,215:.01,233:.01,235:.001,217:0,218:.01,220:!1,228:"//www.googletagservices.com/pubconsole/"};G[6]=function(a,b){try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return!!b;case "http:":return!1}}catch(e){}return!0}(window);G[49]=(new Date).getTime();G[36]=E("false");G[46]=E("false");G[148]=E("false");G[221]=E("");G[232]=E("false");var Ga;a:{if(/^(-?[0-9.]{1,30})$/.test("29")){var Ha=Number("29");if(!isNaN(Ha)){Ga=Ha;break a}}Ga=-1}G[204]=Ga;var H=function(){for(var a in G)this[a]=G[a]};t(H);var x=function(a){return H.g()[a]},I=function(a,b){H.g()[a]=b},Ia=F(),Ja=H.g(),Ka=Ia._vars_,La;for(La in Ka)Ja[La]=Ka[La];Ia._vars_=Ja;var Ma=function(){return"216"},Na=F();Na.hasOwnProperty("getVersion")||(Na.getVersion=Ma);var J=function(){},Oa="function"==typeof Uint8Array,L=function(a,b,c,e){a.b=null;b||(b=[]);a.L=void 0;a.f=-1;a.a=b;a:{if(b=a.a.length){--b;var d=a.a[b];if(d&&"object"==typeof d&&"array"!=u(d)&&!(Oa&&d instanceof Uint8Array)){a.h=b-a.f;a.c=d;break a}}a.h=Number.MAX_VALUE}a.K={};if(c)for(b=0;b<c.length;b++)d=c[b],d<a.h?(d+=a.f,a.a[d]=a.a[d]||K):(Pa(a),a.c[d]=a.c[d]||K);if(e&&e.length)for(b=0;b<e.length;b++)Qa(a,e[b])},K=[],Pa=function(a){var b=a.h+a.f;a.a[b]||(a.c=a.a[b]={})},Ra=function(a,b){if(b<a.h){b+=a.f;var c=a.a[b];return c===K?a.a[b]=[]:c}if(a.c)return c=a.c[b],c===K?a.c[b]=[]:c},Sa=function(a,b){if(b<a.h){b+=a.f;var c=a.a[b];return c===K?a.a[b]=[]:c}c=a.c[b];return c===K?a.c[b]=[]:c},M=function(a,b,c){a=Ra(a,b);return null==a?c:a},Ta=function(a,b,c){b<a.h?a.a[b+a.f]=c:(Pa(a),a.c[b]=c)},Qa=function(a,b){for(var c,e,d=0;d<b.length;d++){var f=b[d],h=Ra(a,f);null!=h&&(c=f,e=h,Ta(a,f,void 0))}return c?(Ta(a,c,e),c):0},Ua=function(a,b,c){a.b||(a.b={});if(!a.b[c]){var e=Ra(a,c);e&&(a.b[c]=new b(e))}return a.b[c]},Va=function(a,b){a.b||(a.b={});if(!a.b[2]){for(var c=Sa(a,2),e=[],d=0;d<c.length;d++)e[d]=new b(c[d]);a.b[2]=e}b=a.b[2];b==K&&(b=a.b[2]=[]);return b};var Wa=function(a,b,c){a.addEventListener?a.addEventListener(b,c,void 0):a.attachEvent&&a.attachEvent("on"+b,c)},Xa=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,void 0):a.detachEvent&&a.detachEvent("on"+b,c)};var Ya=function(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};var N=null;var $a=function(a){L(this,a,Za,null)};w($a,J);var Za=[2],bb=function(a){L(this,a,ab,null)};w(bb,J);var ab=[2];bb.prototype.getId=function(){return M(this,1,0)};var O=function(a){L(this,a,cb,db)};w(O,J);var cb=[5],db=[[1,2,3,6]],fb=function(a){L(this,a,eb,null)};w(fb,J);var eb=[4],ib=function(a){L(this,a,gb,hb)};w(ib,J);var gb=[2,8],hb=[[3,4,5],[6,7]];var jb=function(a,b){switch(b){case 1:return M(a,1,0);case 2:return M(a,2,0);case 3:return M(a,3,0);case 6:return M(a,6,0);default:return null}},kb=function(a,b){if(!a)return null;switch(b){case 1:return M(a,1,!1);case 2:return+M(a,2,0);case 3:return M(a,3,"");case 6:return Sa(a,4);default:return null}},lb=D(function(){var a="";try{a=n.top.location.hash}catch(c){a=n.location.hash}var b={};if(a=(a=/\bdflags=({.*})(&|$)/.exec(a))&&a[1])try{b=JSON.parse(decodeURIComponent(a))}catch(c){}return b}),Q=function(a,b,c){var e=lb();if(e[a]&&null!=e[a][b])return e[a][b];b=P.g().a[a][b];if(!b)return c;b=new O(b);P.g();b=Ua(b,fb,4);a=kb(b,a);return null!=a?a:c},P=function(){var a={};this.a=(a[1]={},a[2]={},a[3]={},a[6]={},a)};t(P);var mb=function(a){var b=P.g().a;ja(a,function(a){var c=Qa(a,db[0]),d=jb(a,c);d&&(b[c][d]=a.a)})};var nb=function(a,b){var c=void 0===b?{}:b;b=void 0===c.u?!1:c.u;var e=void 0===c.A?{}:c.A;c=void 0===c.D?[]:c.D;this.b=a;this.f=b;this.a=e;this.h=c;this.c={}},qb=function(){var a=ob.g(),b=a.b[5];b&&(delete a.b[5],ja(b,function(b){b=new $a(b);!Ua(b,ib,3)&&(b=pb(a,b))&&(a.h.push(b.getId()),(b=Va(b,O))&&mb(b))}))},pb=function(a,b){var c=Va(b,bb),e=c.length;if(!e)return null;var d=M(b,4,0);b=e*M(b,1,0);if(!d)return rb(a,c,b/1E3);e=null!=a.a[d]?a.a[d]:1E3;if(0>=e)return null;c=rb(a,c,b/e);a.a[d]=c?0:e-b;return c},rb=function(a,b,c){var e=a.c,d=la(b,function(a){return!!e[a.getId()]});return d?d:a.f?null:Da(b,c,!1)};var sb=function(a){var b=!1,c=!1;c=void 0===c?!1:c;b=void 0===b?!1:b;n.google_image_requests||(n.google_image_requests=[]);var e=n.document.createElement("img");if(b){var d=function(){if(b){var a=n.google_image_requests,c=ia(a,e);0<=c&&Array.prototype.splice.call(a,c,1)}Xa(e,"load",d);Xa(e,"error",d)};Wa(e,"load",d);Wa(e,"error",d)}c&&(e.referrerPolicy="no-referrer");e.src=a;n.google_image_requests.push(e)};var tb=D(function(){var a=n.navigator&&n.navigator.userAgent||"";a=a.toLowerCase();return-1!=a.indexOf("firefox/")||-1!=a.indexOf("chrome/")||-1!=a.indexOf("opr/")}),R=function(a,b,c,e,d){e=void 0===e?"":e;var f=a.createElement("link");try{f.rel=c;if(-1!=c.toLowerCase().indexOf("stylesheet"))var h=sa(b);else{if(b instanceof B)var m=sa(b);else{if(b instanceof C)var l=b instanceof C&&b.constructor===C&&b.G===ta?b.l:"type_error:SafeUrl";else{if(b instanceof C)var q=b;else b=b.w?b.a():String(b),ua.test(b)||(b="about:invalid#zClosurez"),q=va(b);l=q.a()}m=l}h=m}f.href=h}catch(v){return}e&&"preload"==c&&(f.as=e);d&&(f.nonce=d);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(f)}catch(v){}};var ub=/^\.google\.(com?\.)?[a-z]{2,3}$/,vb=/\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,wb=function(a){return ub.test(a)&&!vb.test(a)},xb=function(a){return a.replace(/[\W]/g,function(a){return"&#"+a.charCodeAt()+";"})},S=n,yb=function(a,b){a="https://"+("adservice"+b+"/adsid/integrator."+a);b=["domain="+encodeURIComponent(n.location.hostname)];T[3]>=+new Date&&b.push("adsid="+encodeURIComponent(T[1]));return a+"?"+b.join("&")},T,U,V=function(){S=n;T=S.googleToken=S.googleToken||{};var a=+new Date;T[1]&&T[3]>a&&0<T[2]||(T[1]="",T[2]=-1,T[3]=-1,T[4]="",T[6]="");U=S.googleIMState=S.googleIMState||{};wb(U[1])||(U[1]=".google.com");"array"==u(U[5])||(U[5]=[]);"boolean"==typeof U[6]||(U[6]=!1);"array"==u(U[7])||(U[7]=[]);"number"==typeof U[8]||(U[8]=0)},zb=function(a){try{a()}catch(b){n.setTimeout(function(){throw b;},0)}},Bb=function(a){"complete"==n.document.readyState||"loaded"==n.document.readyState||n.document.currentScript&&n.document.currentScript.async?Ab(3):a()},Cb=0,W={i:function(){return 0<U[8]},o:function(){U[8]++},B:function(){0<U[8]&&U[8]--},C:function(){U[8]=0},j:function(){},F:function(){return!1},v:function(){return U[5]},s:zb},X={i:function(){return U[6]},o:function(){U[6]=!0},B:function(){U[6]=!1},C:function(){U[6]=!1},j:function(){},F:function(){return".google.com"!=U[1]&&2<++Cb},v:function(){return U[7]},s:function(a){Bb(function(){zb(a)})}},Ab=function(a){1E-5>Math.random()&&sb("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+a)};W.j=function(){if(!W.i()){var a=n.document,b=function(b){var c=yb("js",b),d=Fa();R(a,c,"preload","script",d);b=a.createElement("script");b.type="text/javascript";d&&(b.nonce=d);b.onerror=function(){return n.processGoogleToken({},2)};c=ya(c);wa(b,c);try{(a.head||a.body||a.documentElement).appendChild(b),W.o()}catch(m){}},c=U[1];b(c);".google.com"!=c&&b(".google.com");b={};var e=(b.newToken="FBT",b);n.setTimeout(function(){return n.processGoogleToken(e,1)},1E3)}};X.j=function(){if(!X.i()){var a=n.document,b=yb("sync.js",U[1]);R(a,b,"preload","script");b=xb(b);var c=z("script"),e="",d=Fa();d&&(e='nonce="'+xb(d)+'"');var f="<"+c+' src="'+b+'" '+e+"></"+c+">"+("<"+c+" "+e+'>processGoogleTokenSync({"newToken":"FBS"},5);</'+c+">");Bb(function(){a.write(f);X.o()})}};var Db=function(a){V();T[3]>=+new Date&&T[2]>=+new Date||a.j()},Fb=function(){n.processGoogleToken=n.processGoogleToken||function(a,b){return Eb(W,a,b)};Db(W)},Gb=function(){n.processGoogleTokenSync=n.processGoogleTokenSync||function(a,b){return Eb(X,a,b)};Db(X)},Eb=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?0:c;var e=b.newToken||"",d="NT"==e,f=parseInt(b.freshLifetimeSecs||"",10),h=parseInt(b.validLifetimeSecs||"",10),m=b["1p_jar"]||"";b=b.pucrd||"";V();1==c?a.C():a.B();if(!e&&a.F())wb(".google.com")&&(U[1]=".google.com"),a.j();else{var l=S.googleToken=S.googleToken||{},q=0==c&&e&&p(e)&&!d&&"number"==typeof f&&0<f&&"number"==typeof h&&0<h&&p(m);d=d&&!a.i()&&(!(T[3]>=+new Date)||"NT"==T[1]);var v=!(T[3]>=+new Date)&&0!=c;if(q||d||v)d=+new Date,f=d+1E3*f,h=d+1E3*h,Ab(c),l[5]=c,l[1]=e,l[2]=f,l[3]=h,l[4]=m,l[6]=b,V();if(q||!a.i()){c=a.v();for(e=0;e<c.length;e++)a.s(c[e]);c.length=0}}};var Hb=function(){this.a=null},Ib=function(a,b){a.a=b};Hb.prototype.b=function(a,b,c,e,d){if(Math.random()>(void 0===c?.01:c))return!1;b.error&&b.meta&&b.id||(b=new Ya(b,{context:a,id:void 0===d?"gpt_exception":d}));if(e||this.a)b.meta={},this.a&&this.a(b.meta),e&&e(b.meta);n.google_js_errors=n.google_js_errors||[];n.google_js_errors.push(b);n.error_rep_loaded||(b=n.document,a=b.createElement("script"),wa(a,ya(n.location.protocol+"//pagead2.googlesyndication.com/pagead/js/err_rep.js")),(b=b.getElementsByTagName("script")[0])&&b.parentNode&&b.parentNode.insertBefore(a,b),n.error_rep_loaded=!0);return!1};var Jb=function(a,b){var c=void 0===c?a.b:c;try{b()}catch(e){if(!c.call(a,420,e,.01,void 0,"gpt_exception"))throw e;}};var Kb=function(a){if(!a.google_ltobserver){var b=new a.PerformanceObserver(function(b){var c=a.google_lt_queue=a.google_lt_queue||[];ja(b.getEntries(),function(a){return c.push(a)})});b.observe({entryTypes:["longtask"]});a.google_ltobserver=b}};var Lb=[[18,null,null,[1]],[25,null,null,[1]],[15,null,null,[1]],[null,null,2,[null,null,"1-0-29"]],[21,null,null,[1]],[4,null,null,[1]],[7,null,null,[1]]];var Mb=function(){nb.call(this,x(210),{u:x(211),A:x(227),D:x(226)})};ea(Mb,nb);var pa={3:[[50,[[21061799],[21061800],[21061801]]],[50,[[21061763],[21061764,[[5,null,null,[1]],[4,null,null,[1]]]]]],[50,[[21062082],[21062083,[[11,null,null,[1]]]]]],[null,[[21062156],[21062157,[[15,null,null,[1]]]]]],[10,[[21062092],[21062093,[[14,null,null,[1]],[12,null,null,[1]]]]]],[1,[[21062185],[21062186,[[24,null,null,[1]]]]]],[null,[[21062168],[21062169,[[23,null,null,[1]]]]]],[1,[[22321847],[21062060,[[null,null,null,[null,null,null,"25 25 25 25 25 25 25 25 25 25".split(" ")],null,2]]],[22321848,[[null,null,null,[null,null,null,"50 50 50 50 50 50 50 50 50 50".split(" ")],null,2]]],[22322161,[[null,null,null,[null,null,null,["250","250"]],null,2]]],[21062061,[[null,null,null,[null,null,null,["125","125","125","125"]],null,2]]],[21062059,[[null,null,null,[null,null,null,["50","50","50","50","50"]],null,2]]]]],[1E3,[[21062150,null,[3,[[6,null,null,1,null,19],[6,null,null,1,null,29],[6,null,null,1,null,39],[6,null,null,1,null,49]]]],[21062153,[[null,null,null,[null,null,null,"25 25 25 25 25 25 25 25 25 25".split(" ")],null,2]],[3,[[6,null,null,1,null,16],[6,null,null,1,null,26],[6,null,null,1,null,36],[6,null,null,1,null,46]]]],[21062152,[[null,null,null,[null,null,null,"50 50 50 50 50 50 50 50 50 50".split(" ")],null,2]],[3,[[6,null,null,1,null,17],[6,null,null,1,null,27],[6,null,null,1,null,37],[6,null,null,1,null,47]]]],[21062151,[[null,null,null,[null,null,null,["50","50","50","50","50"]],null,2]],[3,[[6,null,null,1,null,18],[6,null,null,1,null,28],[6,null,null,1,null,38],[6,null,null,1,null,48]]]]],[4,null,3]],[1,[[21062021],[21062012],[21062013],[21062014],[21062015],[21062016],[21062017],[21062018],[21062019],[21062020],[21062011]]],[100,[[21061811],[21061812,[[3,null,null,[1]]]]]],[1E3,[[21062101,null,[2,[[8,null,null,1,null,9],[7,null,null,1,null,20]]]],[21062102,null,[2,[[8,null,null,1,null,19],[7,null,null,1,null,30]]]],[21062103,null,[2,[[8,null,null,1,null,29],[7,null,null,1,null,40]]]],[21062104,null,[2,[[8,null,null,1,null,39],[7,null,null,1,null,50]]]]],[4,null,3]],[10,[[22322686],[22322687,[[null,3,null,[null,.01]]]]]],[null,[[21062120,[[null,null,2,[null,null,"1-0-29"]]]],[21062119],[21062118,[[null,null,null,[null,null,null,["v","1-0-29"]],null,1]]]]],[10,[[21062123],[21062124,[[13,null,null,[1]]]]]],[1E3,[[22316437,null,[2,[[8,null,null,1,null,-1],[7,null,null,1,null,5]]]],[22316438,null,[2,[[8,null,null,1,null,4],[7,null,null,1,null,10]]]]],[4,null,3]],[10,[[21062125],[21062137,[[null,2,null,[null,5E3]]]],[21062126,[[null,2,null,[null,1E3]]]],[21062136,[[null,2,null,[null,3E3]]]]]],[10,[[21061803],[21061804]]]],4:[[null,[[21062134],[21062135,[[8,null,null,[1]]]],[21062133]]]],5:[[null,[[21061212],[21061213,[[16,null,null,[1]]]],[21061214,[[17,null,null,[1]]]],[21061277,[[17,null,null,[1]],[16,null,null,[1]]]]]]]};var ob=function(){Ea()&&I(210,qa());Mb.call(this);x(219).length||I(219,Lb);mb(ka(function(a){return new O(a)}));I(230,P.g().a)};ea(ob,Mb);t(ob);z("partner.googleadservices.com");var Nb=z("www.googletagservices.com"),Y="",Z="",Ob=x(46)&&!x(6);Y=Ob?"http:":"https:";Z=x(Ob?2:3);var Pb=function(a,b){if(null===N){N="";try{var c="";try{c=n.top.location.hash}catch(d){c=n.location.hash}if(c){var e=c.match(/\bdeid=([\d,]+)/);N=e?e[1]:""}}catch(d){}}return(c=(c=N)&&c.match(new RegExp("\\b("+a.join("|")+")\\b")))?c[0]:b?Da(a,a.length*b):null};(function(a){var b=new Hb;Ib(b,function(a){a.methodId=420});Jb(b,function(){var b=a,e=F(),d=e.fifWin||window;b=b||d.document;var f=[],h=F();h.hasOwnProperty("cmd")||(h.cmd=f);if(e.evalScripts)e.evalScripts();else{qb();f=b;if(h=Pb(["21061590","21061591"],.001))"21061591"==h?(I(173,Nb),I(174,Nb)):I(163,h),x(152).push(h);-1!=y.indexOf("Mobile")||I(194,x(225));h=x(150);V();wb(h)&&(U[1]=h);if(!(h=f.currentScript))a:{if(f=f.scripts)for(h=0;h<f.length;h++){var m=f[h];if(-1<m.src.indexOf(Nb+"/tag/js/gpt")){h=m;break a}}h=null}I(172,h);d.PerformanceObserver&&d.PerformanceLongTaskTiming&&Kb(d);f=d;f=void 0===f?n:f;if(f=(f=f.performance)&&f.now?f.now():null)f={label:"1",type:9,value:f},d=d.google_js_reporting_queue=d.google_js_reporting_queue||[],1024>d.length&&d.push(f);if(d=x(76))var l=d;else{h=["215","216"];d=h[0]||"216";f="";if(x(131))l="216";else if(1<h.length){m=["21062212","21062213"];var q=[""];if(1>=q.length||m.length!=q.length)q=[];var v=Pb(ma(m,q),.1);if(v){I(53,v);var A=0<=ia(q,v);I(170,A);A&&(m=q);q=m[0];if(v!=q)for(A=1;A<m.length;++A)if(v==m[A]){l=h[A];break}if(v==q||parseInt(l,10)<parseInt(d,10))h=h[m.length-1],f="?v="+h,I(163,h)}}d=Y+"//"+Z+"/gpt/pubads_impl_"+(l||d)+".js"+f;I(76,d);l=d}d=b.currentScript;if(!("complete"==b.readyState||"loaded"==b.readyState||d&&d.async)){d="gpt-impl-"+Math.random();try{f='<script id="'+d+'" src="'+l+'">\x3c/script>',Q(1,17,!1)&&tb()&&(f+='<link rel="preconnect" href="'+Y+"//"+Z+'">'),b.write(f)}catch(Qb){}b.getElementById(d)&&(e._loadStarted_=!0,I(220,!1),Q(2,4,0)||Gb())}e._loadStarted_||(Q(2,4,0)||Fb(),Q(1,16,!1)&&R(b,l,"preload","script"),d=b.createElement("script"),d.src=l,d.async=!0,(b.head||b.body||b.documentElement).appendChild(d),Q(1,17,!1)&&tb()&&R(b,Y+"//"+Z,"preconnect"),I(220,!0),e._loadStarted_=!0)}})})();}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this)
