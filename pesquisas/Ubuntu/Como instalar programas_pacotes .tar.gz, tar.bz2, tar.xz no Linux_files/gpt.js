(function(){var window=this;var aa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},g;if("function"==typeof Object.setPrototypeOf)g=Object.setPrototypeOf;else{var k;a:{var ba={H:!0},ca={};try{ca.__proto__=ba;k=ca.H;break a}catch(a){}k=!1}g=k?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var da=g,ea=function(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(da)da(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.I=b.prototype},p=this,q=function(a){return"string"==typeof a},ha=function(){if(null===r){a:{var a=p.document;if((a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&fa.test(a))break a;a=null}r=a||""}return r},fa=/^[\w+/_-]+[=]{0,2}$/,r=null,ia=function(){},ja=function(a){a.m=void 0;a.g=function(){return a.m?a.m:a.m=new a}},ka=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},u=function(a,b){function c(){}c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.J=function(a,c,f){for(var e=Array(arguments.length-2),d=2;d<arguments.length;d++)e[d-2]=arguments[d];return b.prototype[c].apply(a,e)}};var la=function(a,b){if(q(a))return q(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},v=function(a,b){for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},ma=function(a){for(var b=w(219),c=b.length,d=Array(c),e=q(b)?b.split(""):b,f=0;f<c;f++)f in e&&(d[f]=a.call(void 0,e[f],f,b));return d},na=function(a,b){a:{for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:q(a)?a.charAt(b):a[b]},oa=function(a){return Array.prototype.concat.apply([],arguments)};var x;a:{var pa=p.navigator;if(pa){var qa=pa.userAgent;if(qa){x=qa;break a}}x=""};var sa=function(){var a=ra,b={},c;for(c in a)b[c]=a[c];return b};var y=function(a){y[" "](a);return a};y[" "]=ia;var z=function(){this.b="";this.c=ta};z.prototype.w=!0;z.prototype.a=function(){return this.b};var ua=function(a){return a instanceof z&&a.constructor===z&&a.c===ta?a.b:"type_error:TrustedResourceUrl"},ta={};var B=function(){this.l="";this.G=va};B.prototype.w=!0;B.prototype.a=function(){return this.l};var wa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,va={},xa=function(a){var b=new B;b.l=a;return b};xa("about:blank");var ya=function(a,b){a.src=ua(b);(b=ha())&&a.setAttribute("nonce",b)};var D=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var Aa=function(a){za();var b=new z;b.b=a;return b},za=ia;var Ea=function(a,b,c){var d=!1;void 0===c||c||(d=Ba());return!d&&!Ca()&&(c=Math.random(),c<b)?(c=Da(),a[Math.floor(c*a.length)]):null},Da=function(){if(!p.crypto)return Math.random();try{var a=new Uint32Array(1);p.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},Fa=function(){var a=w(210),b;for(b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0},Ca=D(function(){return-1!=x.indexOf("Google Web Preview")||1E-4>Math.random()}),Ba=D(function(){return-1!=x.indexOf("MSIE")}),E=function(a){return/^true$/.test(a)},Ga=function(){try{return ha()}catch(a){}};var F=function(){return p.googletag||(p.googletag={})};var G={1:"pagead2.googlesyndication.com",2:"pubads.g.doubleclick.net",3:"securepubads.g.doubleclick.net",173:"pubads.g.doubleclick.net",174:"securepubads.g.doubleclick.net",7:.02,13:1500,23:.001,24:200,27:.01,33:"pagead2.googlesyndication.com",37:.01,38:.001,47:0,53:"",58:1,65:.01,66:1E-5,67:0,68:0,69:1,71:.05,162:0,163:"",76:"",77:.001,78:0,81:.001,85:0,99:.01,103:.01,104:"/pagead/js/rum.js",113:1,114:1,115:0,116:0,117:1,118:1,124:1,208:.01,169:0,207:.01,127:0,129:.05,131:"",134:.01,135:.1,229:!1,143:.005,168:0,144:.001,187:.01,141:1,158:.001,150:".google.com.br",179:.05,170:!1,211:!1,196:.001,234:.01,197:.001,152:[],172:null,182:1E3,188:0,189:.01,191:1512514930353,192:21510956201635,190:0xa781a7496a3,194:.95,225:.95,231:.1,199:0,180:null,219:[],230:{},210:{},227:{},226:[],195:1,198:1,222:1,200:1,201:.001,202:"",203:.01,206:0,213:1,214:.05,215:.01,233:.01,235:.01,217:0,218:.01,220:!1,228:"//www.googletagservices.com/pubconsole/"};G[6]=function(a,b){try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return!!b;case "http:":return!1}}catch(d){}return!0}(window);G[49]=(new Date).getTime();G[36]=E("false");G[46]=E("false");G[148]=E("false");G[221]=E("");G[232]=E("false");var Ha;a:{if(/^(-?[0-9.]{1,30})$/.test("5")){var Ia=Number("5");if(!isNaN(Ia)){Ha=Ia;break a}}Ha=-1}G[204]=Ha;var H=function(){for(var a in G)this[a]=G[a]};ja(H);var w=function(a){return H.g()[a]},I=function(a,b){H.g()[a]=b},Ja=F(),Ka=H.g(),La=Ja._vars_,Ma;for(Ma in La)Ka[Ma]=La[Ma];Ja._vars_=Ka;var Na=function(){return"221"},Oa=F();Oa.hasOwnProperty("getVersion")||(Oa.getVersion=Na);var J=function(){},Pa="function"==typeof Uint8Array,L=function(a,b,c,d){a.b=null;b||(b=[]);a.L=void 0;a.f=-1;a.a=b;a:{if(b=a.a.length){--b;var e=a.a[b];if(e&&"object"==typeof e&&"array"!=ka(e)&&!(Pa&&e instanceof Uint8Array)){a.h=b-a.f;a.c=e;break a}}a.h=Number.MAX_VALUE}a.K={};if(c)for(b=0;b<c.length;b++)e=c[b],e<a.h?(e+=a.f,a.a[e]=a.a[e]||K):(Qa(a),a.c[e]=a.c[e]||K);if(d&&d.length)for(b=0;b<d.length;b++)Ra(a,d[b])},K=[],Qa=function(a){var b=a.h+a.f;a.a[b]||(a.c=a.a[b]={})},Sa=function(a,b){if(b<a.h){b+=a.f;var c=a.a[b];return c===K?a.a[b]=[]:c}if(a.c)return c=a.c[b],c===K?a.c[b]=[]:c},Ta=function(a,b){if(b<a.h){b+=a.f;var c=a.a[b];return c===K?a.a[b]=[]:c}c=a.c[b];return c===K?a.c[b]=[]:c},M=function(a,b,c){a=Sa(a,b);return null==a?c:a},Ua=function(a,b,c){b<a.h?a.a[b+a.f]=c:(Qa(a),a.c[b]=c)},Ra=function(a,b){for(var c,d,e=0;e<b.length;e++){var f=b[e],h=Sa(a,f);null!=h&&(c=f,d=h,Ua(a,f,void 0))}return c?(Ua(a,c,d),c):0},Va=function(a,b,c){a.b||(a.b={});if(!a.b[c]){var d=Sa(a,c);d&&(a.b[c]=new b(d))}return a.b[c]},Wa=function(a,b){a.b||(a.b={});if(!a.b[2]){for(var c=Ta(a,2),d=[],e=0;e<c.length;e++)d[e]=new b(c[e]);a.b[2]=d}b=a.b[2];b==K&&(b=a.b[2]=[]);return b};var Xa=function(a,b,c){a.addEventListener?a.addEventListener(b,c,void 0):a.attachEvent&&a.attachEvent("on"+b,c)},Ya=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,void 0):a.detachEvent&&a.detachEvent("on"+b,c)};var Za=function(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};var N=null,$a=function(){if(null===N){N="";try{var a="";try{a=p.top.location.hash}catch(c){a=p.location.hash}if(a){var b=a.match(/\bdeid=([\d,]+)/);N=b?b[1]:""}}catch(c){}}return N};var bb=function(a){L(this,a,ab,null)};u(bb,J);var ab=[2],db=function(a){L(this,a,cb,null)};u(db,J);var cb=[2];db.prototype.getId=function(){return M(this,1,0)};var O=function(a){L(this,a,eb,fb)};u(O,J);var eb=[5],fb=[[1,2,3,6]],ib=function(a){L(this,a,hb,null)};u(ib,J);var hb=[4],lb=function(a){L(this,a,jb,kb)};u(lb,J);var jb=[2,8],kb=[[3,4,5],[6,7]];var mb=function(a,b){switch(b){case 1:return M(a,1,0);case 2:return M(a,2,0);case 3:return M(a,3,0);case 6:return M(a,6,0);default:return null}},nb=function(a,b){if(!a)return null;switch(b){case 1:return M(a,1,!1);case 2:return+M(a,2,0);case 3:return M(a,3,"");case 6:return Ta(a,4);default:return null}},ob=D(function(){var a="";try{a=p.top.location.hash}catch(c){a=p.location.hash}var b={};if(a=(a=/\bdflags=({.*})(&|$)/.exec(a))&&a[1])try{b=JSON.parse(decodeURIComponent(a))}catch(c){}return b}),Q=function(a,b,c){var d=ob();if(d[a]&&null!=d[a][b])return d[a][b];b=P.g().a[a][b];if(!b)return c;b=new O(b);P.g();b=Va(b,ib,4);a=nb(b,a);return null!=a?a:c},P=function(){var a={};this.a=(a[1]={},a[2]={},a[3]={},a[6]={},a)};ja(P);var pb=function(a){var b=P.g().a;v(a,function(a){var c=Ra(a,fb[0]),e=mb(a,c);e&&(b[c][e]=a.a)})};var qb=function(a,b){var c=this,d=void 0===b?{}:b;b=void 0===d.u?!1:d.u;var e=void 0===d.A?{}:d.A;d=void 0===d.D?[]:d.D;this.c=a;this.f=b;this.a=e;this.h=d;this.b={};if(a=$a())a=a.split(",")||[],v(a,function(a){(a=parseInt(a,10))&&(c.b[a]=!0)})},tb=function(){var a=rb.g(),b=a.c[5];b&&(delete a.c[5],v(b,function(b){b=new bb(b);!Va(b,lb,3)&&(b=sb(a,b))&&(a.h.push(b.getId()),(b=Wa(b,O))&&pb(b))}))},sb=function(a,b){var c=Wa(b,db),d=c.length;if(!d)return null;var e=M(b,4,0);b=d*M(b,1,0);if(!e)return ub(a,c,b/1E3);d=null!=a.a[e]?a.a[e]:1E3;if(0>=d)return null;c=ub(a,c,b/d);a.a[e]=c?0:d-b;return c},ub=function(a,b,c){var d=a.b,e=na(b,function(a){return!!d[a.getId()]});return e?e:a.f?null:Ea(b,c,!1)};var vb=function(a){var b=!1,c=!1;c=void 0===c?!1:c;b=void 0===b?!1:b;p.google_image_requests||(p.google_image_requests=[]);var d=p.document.createElement("img");if(b){var e=function(){if(b){var a=p.google_image_requests,c=la(a,d);0<=c&&Array.prototype.splice.call(a,c,1)}Ya(d,"load",e);Ya(d,"error",e)};Xa(d,"load",e);Xa(d,"error",e)}c&&(d.referrerPolicy="no-referrer");d.src=a;p.google_image_requests.push(d)};var wb=D(function(){var a=p.navigator&&p.navigator.userAgent||"";a=a.toLowerCase();return-1!=a.indexOf("firefox/")||-1!=a.indexOf("chrome/")||-1!=a.indexOf("opr/")}),R=function(a,b,c,d,e){d=void 0===d?"":d;var f=a.createElement("link");try{f.rel=c;if(-1!=c.toLowerCase().indexOf("stylesheet"))var h=ua(b);else{if(b instanceof z)var n=ua(b);else{if(b instanceof B)var m=b instanceof B&&b.constructor===B&&b.G===va?b.l:"type_error:SafeUrl";else{if(b instanceof B)var l=b;else b=b.w?b.a():String(b),wa.test(b)||(b="about:invalid#zClosurez"),l=xa(b);m=l.a()}n=m}h=n}f.href=h}catch(t){return}d&&"preload"==c&&(f.as=d);e&&(f.nonce=e);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(f)}catch(t){}};var xb=/^\.google\.(com?\.)?[a-z]{2,3}$/,yb=/\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,zb=function(a){return xb.test(a)&&!yb.test(a)},Ab=function(a){return a.replace(/[\W]/g,function(a){return"&#"+a.charCodeAt()+";"})},S=p,Bb=function(a,b){a="https://"+("adservice"+b+"/adsid/integrator."+a);b=["domain="+encodeURIComponent(p.location.hostname)];T[3]>=+new Date&&b.push("adsid="+encodeURIComponent(T[1]));return a+"?"+b.join("&")},T,U,V=function(){S=p;T=S.googleToken=S.googleToken||{};var a=+new Date;T[1]&&T[3]>a&&0<T[2]||(T[1]="",T[2]=-1,T[3]=-1,T[4]="",T[6]="");U=S.googleIMState=S.googleIMState||{};zb(U[1])||(U[1]=".google.com");"array"==ka(U[5])||(U[5]=[]);"boolean"==typeof U[6]||(U[6]=!1);"array"==ka(U[7])||(U[7]=[]);"number"==typeof U[8]||(U[8]=0)},Cb=function(a){try{a()}catch(b){p.setTimeout(function(){throw b;},0)}},Eb=function(a){"complete"==p.document.readyState||"loaded"==p.document.readyState||p.document.currentScript&&p.document.currentScript.async?Db(3):a()},Fb=0,W={i:function(){return 0<U[8]},o:function(){U[8]++},B:function(){0<U[8]&&U[8]--},C:function(){U[8]=0},j:function(){},F:function(){return!1},v:function(){return U[5]},s:Cb},X={i:function(){return U[6]},o:function(){U[6]=!0},B:function(){U[6]=!1},C:function(){U[6]=!1},j:function(){},F:function(){return".google.com"!=U[1]&&2<++Fb},v:function(){return U[7]},s:function(a){Eb(function(){Cb(a)})}},Db=function(a){1E-5>Math.random()&&vb("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+a)};W.j=function(){if(!W.i()){var a=p.document,b=function(b){var c=Bb("js",b),d=Ga();R(a,c,"preload","script",d);b=a.createElement("script");b.type="text/javascript";d&&(b.nonce=d);b.onerror=function(){return p.processGoogleToken({},2)};c=Aa(c);ya(b,c);try{(a.head||a.body||a.documentElement).appendChild(b),W.o()}catch(n){}},c=U[1];b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);p.setTimeout(function(){return p.processGoogleToken(d,1)},1E3)}};X.j=function(){if(!X.i()){var a=p.document,b=Bb("sync.js",U[1]);R(a,b,"preload","script");b=Ab(b);var c=y("script"),d="",e=Ga();e&&(d='nonce="'+Ab(e)+'"');var f="<"+c+' src="'+b+'" '+d+"></"+c+">"+("<"+c+" "+d+'>processGoogleTokenSync({"newToken":"FBS"},5);</'+c+">");Eb(function(){a.write(f);X.o()})}};var Gb=function(a){V();T[3]>=+new Date&&T[2]>=+new Date||a.j()},Ib=function(){p.processGoogleToken=p.processGoogleToken||function(a,b){return Hb(W,a,b)};Gb(W)},Jb=function(){p.processGoogleTokenSync=p.processGoogleTokenSync||function(a,b){return Hb(X,a,b)};Gb(X)},Hb=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?0:c;var d=b.newToken||"",e="NT"==d,f=parseInt(b.freshLifetimeSecs||"",10),h=parseInt(b.validLifetimeSecs||"",10),n=b["1p_jar"]||"";b=b.pucrd||"";V();1==c?a.C():a.B();if(!d&&a.F())zb(".google.com")&&(U[1]=".google.com"),a.j();else{var m=S.googleToken=S.googleToken||{},l=0==c&&d&&q(d)&&!e&&"number"==typeof f&&0<f&&"number"==typeof h&&0<h&&q(n);e=e&&!a.i()&&(!(T[3]>=+new Date)||"NT"==T[1]);var t=!(T[3]>=+new Date)&&0!=c;if(l||e||t)e=+new Date,f=e+1E3*f,h=e+1E3*h,Db(c),m[5]=c,m[1]=d,m[2]=f,m[3]=h,m[4]=n,m[6]=b,V();if(l||!a.i()){c=a.v();for(d=0;d<c.length;d++)a.s(c[d]);c.length=0}}};var Kb=function(){this.a=null},Lb=function(a,b){a.a=b};Kb.prototype.b=function(a,b,c,d,e){if(Math.random()>(void 0===c?.01:c))return!1;b.error&&b.meta&&b.id||(b=new Za(b,{context:a,id:void 0===e?"gpt_exception":e}));if(d||this.a)b.meta={},this.a&&this.a(b.meta),d&&d(b.meta);p.google_js_errors=p.google_js_errors||[];p.google_js_errors.push(b);p.error_rep_loaded||(b=p.document,a=b.createElement("script"),ya(a,Aa(p.location.protocol+"//pagead2.googlesyndication.com/pagead/js/err_rep.js")),(b=b.getElementsByTagName("script")[0])&&b.parentNode&&b.parentNode.insertBefore(a,b),p.error_rep_loaded=!0);return!1};var Mb=function(a,b){var c=void 0===c?a.b:c;try{b()}catch(d){if(!c.call(a,420,d,.01,void 0,"gpt_exception"))throw d;}};var Nb=function(a){if(!a.google_ltobserver){var b=new a.PerformanceObserver(function(b){var c=a.google_lt_queue=a.google_lt_queue||[];v(b.getEntries(),function(a){return c.push(a)})});b.observe({entryTypes:["longtask"]});a.google_ltobserver=b}};var Ob=[[28,null,null,[1]],[18,null,null,[1]],[25,null,null,[1]],[15,null,null,[1]],[null,null,2,[null,null,"1-0-29"]],[21,null,null,[1]],[4,null,null,[1]],[7,null,null,[1]]];var Pb=function(){qb.call(this,w(210),{u:w(211),A:w(227),D:w(226)})};ea(Pb,qb);var ra={3:[[10,[[21061799],[21061800],[21061801]]],[50,[[21061763],[21061764,[[5,null,null,[1]],[4,null,null,[1]]]]]],[50,[[21062082],[21062083,[[11,null,null,[1]]]]]],[null,[[21062156],[21062157,[[15,null,null,[1]]]]]],[10,[[21062287],[21062288,[[27,null,null,[1]],[14,null,null,[1]],[12,null,null,[1]],[32,null,null,[1]]]],[21062289,[[null,6,null,[null,1]],[27,null,null,[1]],[26,null,null,[1]],[14,null,null,[1]],[12,null,null,[1]],[32,null,null,[1]]]]]],[null,[[21062229],[21062230,[[30,null,null,[1]]]],[21062245,[[30,null,null,[1]],[31,null,null,[1]]]]]],[1,[[21062185],[21062186,[[24,null,null,[1]]]]]],[null,[[21062168],[21062169,[[23,null,null,[1]]]]]],[1,[[22321847],[21062060,[[null,null,null,[null,null,null,"25 25 25 25 25 25 25 25 25 25".split(" ")],null,2]]],[22321848,[[null,null,null,[null,null,null,"50 50 50 50 50 50 50 50 50 50".split(" ")],null,2]]],[22322161,[[null,null,null,[null,null,null,["250","250"]],null,2]]],[21062061,[[null,null,null,[null,null,null,["125","125","125","125"]],null,2]]],[21062059,[[null,null,null,[null,null,null,["50","50","50","50","50"]],null,2]]]]],[1E3,[[21062150,null,[3,[[6,null,null,1,null,19],[6,null,null,1,null,29],[6,null,null,1,null,39],[6,null,null,1,null,49]]]],[21062153,[[null,null,null,[null,null,null,"25 25 25 25 25 25 25 25 25 25".split(" ")],null,2]],[3,[[6,null,null,1,null,16],[6,null,null,1,null,26],[6,null,null,1,null,36],[6,null,null,1,null,46]]]],[21062152,[[null,null,null,[null,null,null,"50 50 50 50 50 50 50 50 50 50".split(" ")],null,2]],[3,[[6,null,null,1,null,17],[6,null,null,1,null,27],[6,null,null,1,null,37],[6,null,null,1,null,47]]]],[21062151,[[null,null,null,[null,null,null,["50","50","50","50","50"]],null,2]],[3,[[6,null,null,1,null,18],[6,null,null,1,null,28],[6,null,null,1,null,38],[6,null,null,1,null,48]]]]],[4,null,3]],[1,[[21062021],[21062012],[21062013],[21062014],[21062015],[21062016],[21062017],[21062018],[21062019],[21062020],[21062011]]],[100,[[21061811],[21061812,[[3,null,null,[1]]]]]],[1E3,[[21062101,null,[2,[[8,null,null,1,null,9],[7,null,null,1,null,20]]]],[21062102,null,[2,[[8,null,null,1,null,19],[7,null,null,1,null,30]]]],[21062103,null,[2,[[8,null,null,1,null,29],[7,null,null,1,null,40]]]],[21062104,null,[2,[[8,null,null,1,null,39],[7,null,null,1,null,50]]]]],[4,null,3]],[10,[[22322686],[22322687,[[null,3,null,[null,.01]]]]]],[null,[[21062120,[[null,null,2,[null,null,"1-0-29"]]]],[21062119],[21062118,[[null,null,null,[null,null,null,["v","1-0-29"]],null,1]]]]],[10,[[21062123],[21062124,[[13,null,null,[1]]]]]],[1E3,[[22316437,null,[2,[[8,null,null,1,null,-1],[7,null,null,1,null,5]]]],[22316438,null,[2,[[8,null,null,1,null,4],[7,null,null,1,null,10]]]]],[4,null,3]],[10,[[21062125],[21062137,[[null,2,null,[null,5E3]]]],[21062126,[[null,2,null,[null,1E3]]]],[21062136,[[null,2,null,[null,3E3]]]]]],[10,[[21061803],[21061804]]]],4:[[null,[[21062282],[21062283,[[8,null,null,[1]]]],[21062281]]]],5:[[null,[[21061212],[21061213,[[16,null,null,[1]]]],[21061214,[[17,null,null,[1]]]],[21061277,[[17,null,null,[1]],[16,null,null,[1]]]]]]]};var rb=function(){Fa()&&I(210,sa());Pb.call(this);w(219).length||I(219,Ob);pb(ma(function(a){return new O(a)}));I(230,P.g().a)};ea(rb,Pb);ja(rb);y("partner.googleadservices.com");var Qb=y("www.googletagservices.com"),Y="",Z="",Rb=w(46)&&!w(6);Y=Rb?"http:":"https:";Z=w(Rb?2:3);var Sb=function(a,b){var c=w(148)?$a():"";return(c=c&&c.match(new RegExp("\\b("+a.join("|")+")\\b")))?c[0]:b?Ea(a,a.length*b):null};(function(a){var b=new Kb;Lb(b,function(a){a.methodId=420});Mb(b,function(){var b=a,d=F(),e=d.fifWin||window;b=b||e.document;var f=[],h=F();h.hasOwnProperty("cmd")||(h.cmd=f);if(d.evalScripts)d.evalScripts();else{tb();f=b;if(h=Sb(["21061590","21061591"],.001))"21061591"==h?(I(173,Qb),I(174,Qb)):I(163,h),w(152).push(h);-1!=x.indexOf("Mobile")||I(194,w(225));h=w(150);V();zb(h)&&(U[1]=h);if(!(h=f.currentScript))a:{if(f=f.scripts)for(h=0;h<f.length;h++){var n=f[h];if(-1<n.src.indexOf(Qb+"/tag/js/gpt")){h=n;break a}}h=null}I(172,h);e.PerformanceObserver&&e.PerformanceLongTaskTiming&&Nb(e);f=e;f=void 0===f?p:f;if(f=(f=f.performance)&&f.now?f.now():null)f={label:"1",type:9,value:f},e=e.google_js_reporting_queue=e.google_js_reporting_queue||[],1024>e.length&&e.push(f);if(e=w(76))var m=e;else{var l;e="";if(w(148))try{f="";try{f=p.top.location.hash}catch(gb){f=p.location.hash}f&&(e=(l=f.match(/\bgptv=(\d+)/))?l[1]:"")}catch(gb){}l=e;h=["220","221"];e=h[0]||"221";f="";if(w(131))m="221";else if(1<h.length){n=["21062284","21062285"];var t=[""];if(1>=t.length||n.length!=t.length)t=[];var C=Sb(oa(n,t),.1);if(C){I(53,C);var A=0<=la(t,C);I(170,A);A&&(n=t);t=n[0];if(C!=t)for(A=1;A<n.length;++A)if(C==n[A]){m=h[A];break}if(C==t||parseInt(m,10)<parseInt(e,10))h=h[n.length-1],f="?v="+h,I(163,h)}}e=Y+"//"+Z+"/gpt/pubads_impl_"+(l?l:m||e)+".js"+f;I(76,e);m=e}l=b.currentScript;if(!("complete"==b.readyState||"loaded"==b.readyState||l&&l.async)){l="gpt-impl-"+Math.random();try{e='<script id="'+l+'" src="'+m+'">\x3c/script>',Q(1,17,!1)&&wb()&&(e+='<link rel="preconnect" href="'+Y+"//"+Z+'">'),b.write(e)}catch(gb){}b.getElementById(l)&&(d._loadStarted_=!0,I(220,!1),Q(2,4,0)||Jb())}d._loadStarted_||(Q(2,4,0)||Ib(),Q(1,16,!1)&&R(b,m,"preload","script"),l=b.createElement("script"),l.src=m,l.async=!0,(b.head||b.body||b.documentElement).appendChild(l),Q(1,17,!1)&&wb()&&R(b,Y+"//"+Z,"preconnect"),I(220,!0),d._loadStarted_=!0)}})})();}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this)
