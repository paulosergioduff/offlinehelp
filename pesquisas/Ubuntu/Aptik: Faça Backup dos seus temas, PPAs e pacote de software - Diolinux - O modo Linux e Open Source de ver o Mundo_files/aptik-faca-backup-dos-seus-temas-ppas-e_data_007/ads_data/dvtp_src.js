(function(l,p,n){if("object"===typeof n&&"string"!==typeof n.nodeName)p(l,n);else{var q=function(b){for(var d in b)b.hasOwnProperty(d)&&(b[d]=q(b[d]));return Object.freeze(b)};n={};p(l,n);for(var h in n)n.hasOwnProperty(h)&&(Object.getOwnPropertyDescriptor(l,h)||Object.defineProperty(l,h,{get:function(){return q({"1.0.2-dev":n[h]})}}))}})("undefined"===typeof global?this:global,function(l,p){function n(a,c){return a&&(a[c]||(a[c]={}))}function q(a,c){"undefined"!==typeof jasmine&&jasmine?a():"undefined"!==
typeof console&&console&&console.error&&c()}function h(a,c){return c.reduce(function(a,c){return a&&a[c]},a)}var b=b||{};b.scope={};b.inherits=function(a,c){function g(){}g.prototype=c.prototype;a.superClass_=c.prototype;a.prototype=new g;a.prototype.constructor=a;for(var b in c)if("prototype"!=b)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(c,b);d&&Object.defineProperty(a,b,d)}else a[b]=c[b]};b.ASSUME_ES5=!1;b.ASSUME_NO_NATIVE_MAP=!1;b.ASSUME_NO_NATIVE_SET=!1;b.defineProperty=
b.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){a!=Array.prototype&&a!=Object.prototype&&(a[c]=b.value)};b.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};b.global=b.getGlobal(this);b.SYMBOL_PREFIX="jscomp_symbol_";b.initSymbol=function(){b.initSymbol=function(){};b.global.Symbol||(b.global.Symbol=b.Symbol)};b.symbolCounter_=0;b.Symbol=function(a){return b.SYMBOL_PREFIX+(a||"")+b.symbolCounter_++};
b.initSymbolIterator=function(){b.initSymbol();var a=b.global.Symbol.iterator;a||(a=b.global.Symbol.iterator=b.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&b.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return b.arrayIterator(this)}});b.initSymbolIterator=function(){}};b.arrayIterator=function(a){var c=0;return b.iteratorPrototype(function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}})};b.iteratorPrototype=function(a){b.initSymbolIterator();
a={next:a};a[b.global.Symbol.iterator]=function(){return this};return a};b.makeIterator=function(a){b.initSymbolIterator();var c=a[Symbol.iterator];return c?c.call(a):b.arrayIterator(a)};b.arrayFromIterator=function(a){for(var c,b=[];!(c=a.next()).done;)b.push(c.value);return b};b.arrayFromIterable=function(a){return a instanceof Array?a:b.arrayFromIterator(b.makeIterator(a))};var d={assertTruthyString:function(a,c){if(!c)throw Error("Value for "+a+" is undefined, null or blank.");if("string"!==typeof c&&
!(c instanceof String))throw Error("Value for "+a+" is not a string.");if(""===c.trim())throw Error("Value for "+a+" is empty string.");},assertNotNullObject:function(a,c){if(null==c)throw Error("Value for "+a+" is undefined or null");},assertNumber:function(a,c){if(null==c)throw Error(a+" must not be null or undefined.");if("number"!==typeof c||isNaN(c))throw Error("Value for "+a+" is not a number");},assertNumberBetween:function(a,c,b,w){(0,d.assertNumber)(a,c);if(c<b||c>w)throw Error("Value for "+
a+" is outside the range ["+b+","+w+"]");},assertFunction:function(a,c){if(!c)throw Error(a+" must not be truthy.");},assertPositiveNumber:function(a,c){(0,d.assertNumber)(a,c);if(0>c)throw Error(a+" must be a positive number.");}},m=function(a,c,b,d){this.guid=a;this.method=c;this.version=b;this.args=d};m.isValidSerializedMessage=function(a){return!!a&&void 0!==a.omid_message_guid&&void 0!==a.omid_message_method&&void 0!==a.omid_message_version&&"string"===typeof a.omid_message_guid&&"string"===
typeof a.omid_message_method&&"string"===typeof a.omid_message_version&&(void 0===a.omid_message_args||"string"===typeof a.omid_message_args)};m.deserialize=function(a){return new m(a.omid_message_guid,a.omid_message_method,a.omid_message_version,a.omid_message_args)};m.prototype.serialize=function(){var a={};a=(a.omid_message_guid=this.guid,a.omid_message_method=this.method,a.omid_message_version=this.version,a);void 0!==this.args&&(a.omid_message_args=this.args);return a};var e=function(a){this.to=
a};e.prototype.sendMessage=function(a,c){};e.prototype.handleMessage=function(a,c){if(this.onMessage)this.onMessage(a,c)};e.prototype.generateGuid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var c=16*Math.random()|0;return a="y"===a?(c&3|8).toString(16):c.toString(16)})};e.prototype.serialize=function(a){return JSON.stringify(a)};e.prototype.deserialize=function(a){return JSON.parse(a)};var f={OMID_PRESENT_FRAME_NAME:"omid_v1_present",isOmidPresent:function(a){try{return a.frames?
!!a.frames[f.OMID_PRESENT_FRAME_NAME]:!1}catch(c){return!1}},declareOmidPresence:function(a){a.frames&&a.document&&(f.OMID_PRESENT_FRAME_NAME in a.frames||(null==a.document.body&&f.isMutationObserverAvailable_(a)?f.registerMutationObserver_(a):a.document.write('<iframe style="display:none" '+('id="'+f.OMID_PRESENT_FRAME_NAME+'"')+(' name="'+f.OMID_PRESENT_FRAME_NAME+'">')+"</iframe>")))},isMutationObserverAvailable_:function(a){return"MutationObserver"in a},registerMutationObserver_:function(a){var c=
new MutationObserver(function(b){b.forEach(function(b){"BODY"===b.addedNodes[0].nodeName&&(b=a.document.createElement("iframe"),b.id=f.OMID_PRESENT_FRAME_NAME,b.name=f.OMID_PRESENT_FRAME_NAME,b.style.display="none",a.document.body.appendChild(b),c.disconnect())})});c.observe(a.document.documentElement,{childList:!0})}},u=function(a){this.to=a;this.handleExportedMessage=u.prototype.handleExportedMessage.bind(this)};b.inherits(u,e);u.prototype.sendMessage=function(a,c){c=void 0===c?this.to:c;if(!c)throw Error("Message destination must be defined at construction time or when sending the message.");
c.handleExportedMessage(a.serialize(),this)};u.prototype.handleExportedMessage=function(a,c){m.isValidSerializedMessage(a)&&this.handleMessage(m.deserialize(a),c)};var v={error:function(a){for(var c=[],g=0;g<arguments.length;++g)c[g-0]=arguments[g];q(function(){throw new (Function.prototype.bind.apply(Error,[null].concat(["Could not complete the test successfully - "],b.arrayFromIterable(c))));},function(){return console.error.apply(console,[].concat(b.arrayFromIterable(c)))})},debug:function(a){for(var c=
[],g=0;g<arguments.length;++g)c[g-0]=arguments[g];q(function(){},function(){return console.error.apply(console,[].concat(b.arrayFromIterable(c)))})}},r=eval("this");var k=function(){if("undefined"!==typeof l&&l)return l;if("undefined"!==typeof global&&global)return global;if("undefined"!==typeof window&&window)return window;if("undefined"!==typeof r&&r)return r;throw Error("Could not determine global object context.");}();var t=function(a,c){this.to=c=void 0===c?k:c;var b=this;a.addEventListener("message",
function(a){if("object"===typeof a.data){var c=a.data;m.isValidSerializedMessage(c)&&(c=m.deserialize(c),a.source&&b.handleMessage(c,a.source))}})};b.inherits(t,e);t.isCompatibleContext=function(a){return!!(a&&a.addEventListener&&a.postMessage)};t.prototype.sendMessage=function(a,c){c=void 0===c?this.to:c;if(!c)throw Error("Message destination must be defined at construction time or when sending the message.");c.postMessage(a.serialize(),"*")};var x=function(a,c,b){b=void 0===b?f.isOmidPresent:b;
return(c=h(a,c))?new u(c):a.top&&b(a.top)?new t(a,a.top):null};e=function(a){if(this.communication=void 0===a?(0,x)(k,["omid","v1_VerificationServiceCommunication"]):a)this.communication.onMessage=this.handleMessage_.bind(this);this.remoteIntervals_=this.remoteTimeouts_=0;this.callbackMap_={}};e.prototype.isSupported=function(){return!!this.communication};e.prototype.registerSessionObserver=function(a,c){(0,d.assertFunction)("functionToExecute",a);this.sendMessage_("addSessionListener",a,c)};e.prototype.addEventListener=
function(a,c){(0,d.assertTruthyString)("eventType",a);(0,d.assertFunction)("functionToExecute",c);this.sendMessage_("addEventListener",c,a)};e.prototype.sendUrl=function(a,c,b){(0,d.assertTruthyString)("url",a);this.sendMessage_("sendUrl",function(a){a&&c?c():!a&&b&&b()},a)};e.prototype.injectJavaScriptResource=function(a,c,b){var e=this;(0,d.assertTruthyString)("url",a);k.document?this.injectJavascriptResourceUrlInDom_(a,c,b):this.sendMessage_("injectJavaScriptResource",function(d,g){d?(e.evaluateJavaScript_(g,
a),c()):(v.error("Service failed to load JavaScript resource."),b())},a)};e.prototype.injectJavascriptResourceUrlInDom_=function(a,c,b){var d=k.document,e=d.body;d=d.createElement("script");d.onload=c;d.onerror=b;d.src=a;d.type="application/javascript";e.appendChild(d)};e.prototype.evaluateJavaScript_=function(a,c){try{eval(a)}catch(g){v.error('Error evaluating the JavaScript resource from "'+c+'".')}};e.prototype.setTimeout=function(a,c){(0,d.assertFunction)("functionToExecute",a);(0,d.assertPositiveNumber)("timeInMillis",
c);if(this.hasTimeoutMethods_())return k.setTimeout(a,c);var b=this.remoteTimeouts_++;this.sendMessage_("setTimeout",a,b,c);return b};e.prototype.clearTimeout=function(a){(0,d.assertPositiveNumber)("timeoutId",a);this.hasTimeoutMethods_()?k.clearTimeout(a):this.sendOneWayMessage_("clearTimeout",a)};e.prototype.setInterval=function(a,c){(0,d.assertFunction)("functionToExecute",a);(0,d.assertPositiveNumber)("timeInMillis",c);if(this.hasIntervalMethods_())return k.setInterval(a,c);var b=this.remoteIntervals_++;
this.sendMessage_("setInterval",a,b,c);return b};e.prototype.clearInterval=function(a){(0,d.assertPositiveNumber)("intervalId",a);this.hasIntervalMethods_()?k.clearInterval(a):this.sendOneWayMessage_("clearInterval",a)};e.prototype.hasTimeoutMethods_=function(){return"function"===typeof k.setTimeout&&"function"===typeof k.clearTimeout};e.prototype.hasIntervalMethods_=function(){return"function"===typeof k.setInterval&&"function"===typeof k.clearInterval};e.prototype.handleMessage_=function(a,c){c=
a.method;var b=a.guid;a=a.args;if("response"===c&&this.callbackMap_[b]){var d=a?JSON.parse(a):[];this.callbackMap_[b].apply(this,d)}"error"===c&&window.console&&v.error(a)};e.prototype.sendOneWayMessage_=function(a,c){for(var d=[],e=1;e<arguments.length;++e)d[e-1]=arguments[e];this.sendMessage_.apply(this,[].concat([a,null],b.arrayFromIterable(d)))};e.prototype.sendMessage_=function(a,c,b){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];this.isSupported()&&(e=this.communication.generateGuid(),
c&&(this.callbackMap_[e]=c),d=new m(e,"VerificationService."+a,"1.0.2-dev",JSON.stringify(d)),this.communication.sendMessage(d))};(0,function(a,c,b){if(b=void 0===b?"undefined"===typeof p?null:p:b)a=a.split("."),a.slice(0,a.length-1).reduce(n,b)[a[a.length-1]]=c})("OmidVerificationClient",e)},"undefined"===typeof exports?void 0:exports);
(function(){function l(){var b={location:{protocol:"https:"}};b.parent=b;b.top=b;b.document={getElementById:function(){},createElement:function(){},body:{insertBefore:function(){}},querySelectorAll:function(){return[]}};return b}function p(b){var d={src:"dv-measurements",main:229},e=d.eval&&d.rate&&100*Math.random()<d.rate?d.eval:d.main;if(e)return b+"//cdn.doubleverify.com/"+d.src+e+".js"}function n(){window.$dv=window.parent.$dv;window.$frmId=Math.random().toString(36)+Math.random().toString(36);
window.dv_flow=2}function q(b,m){if(b){var d=document.createElement("script");d.src=b;d.onerror=function(){(new Image).src=m+"scriptLoading"};document.body.appendChild(d)}}dv_flow=2;var h={omidObject:{},isSupported:function(){try{return this.omidObject=new OmidVerificationClient["1.0.2-dev"],this.omidObject.isSupported()}catch(d){return!1}},execute:function(){var b=this.omidObject;$dv={omidJsClient:b,tags:{}};"undefined"==typeof window&&($dv.isDomlessEnvironment=!0,window=l());$frmId=Math.random().toString(36)+
Math.random().toString(36);b.registerSessionObserver(function(d){try{switch(d.type){case "sessionStart":var e=p("https:");$dv.omidSessionData=d;b.injectJavaScriptResource(e);break;case "sessionError":b.sendUrl("https://tps.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1&dvp_omid=1&dvp_jsErrMsg=omidSession"+(d.data&&d.data.message||""))}}catch(f){b.sendUrl("https://tps.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1&dvp_omid=1&dvp_jsErrMsg=omidCallback"+
f.message)}},"doubleverify.com-omid")}},b={execute:function(){try{window.$dv=window.$dv||{tags:{}};var b=document.currentScript&&0==document.currentScript.src.indexOf("http:")?"http:":"https:",m=p(b),e=Math.floor(1E12*(Math.random()+"")),f=document.createElement("iframe");f.name=f.id="iframe_"+e;f.setAttribute("data-dv-frm",e);f.width="0";f.height="0";f.style.display="none";f.src="about:blank";if(document.currentScript)document.currentScript.parentNode.insertBefore(f,document.currentScript);else if(document.body)document.body.insertBefore(f,
document.body.firstChild);else{var l=document.getElementsByTagName("head")[0];l.insertBefore(f,l.firstChild)}var h=f&&(f.contentDocument||f.contentWindow&&f.contentWindow.document||frames&&frames[f.name]&&frames[f.name].document),r='<html><head><script type="text/javascript">('+n.toString()+')();\x3c/script></head><body><script type="text/javascript">('+q.toString()+')("'+m+'", "https://tps.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1&dvp_jsErrMsg=");\x3c/script></body></html>';
if(h)h.open(),h.write(r),h.close();else{var k=encodeURIComponent(r.replace(/'/g,"\\'").replace(/\n|\r\n|\r/g,""));f.src='javascript: (function(){document.open();document.domain="'+window.document.domain+"\";document.write('"+k+"');})()"}}catch(t){(new Image).src="https://tps.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1&dvp_jsErrMsg=visitLoading"+t.message}}};try{h.isSupported()?h.execute():b.execute()}catch(d){}})();
