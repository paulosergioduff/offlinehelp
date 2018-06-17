function BBTimeline(){TimelineMax.apply(this,arguments),this.addPosition=0,this.mode="offset",this.children=[]}var bannerboy=bannerboy||{};bannerboy.utils={dist:function(t,e,n,r){return Math.sqrt((t-n)*(t-n)+(e-r)*(e-r))},angle:function(t,e,n,r){return Math.atan2(r-e,n-t)},norm:function(t,e,n,r){var o=(t-e)/(n-e);return r?bannerboy.utils.clamp(o,0,1):o},lerp:function(t,e,n,r){var o=(n-e)*t+e;return r?bannerboy.utils.clamp(o,e,n):o},map:function(t,e,n,r,o,i){return bannerboy.utils.lerp(bannerboy.utils.norm(t,e,n,i),r,o,i)},clamp:function(t,e,n){return Math.min(Math.max(t,Math.min(e,n)),Math.max(e,n))},inRange:function(t,e,n){return t>=Math.min(e,n)&&t<=Math.max(e,n)},randomRange:function(t,e){return t+Math.random()*(e-t)},randomInt:function(t,e){return Math.floor(t+Math.random()*(e-t+1))},toDegrees:function(t){return 180*t/Math.PI},toRadians:function(t){return t*Math.PI/180},sign:function(t){return t>0?1:0===t?0:-1},roundToPlaces:function(t,e){var n=Math.pow(10,e);return Math.round(t*n)/n},roundToNearest:function(t,e){return Math.round(t/e)*e},shortestArc:function(t,e){return Math.abs(e-t)<Math.PI?e-t:e>t?e-t-2*Math.PI:e-t+2*Math.PI},wrap:function(t,e){return(t%e+e)%e},lerpColor:function(t,e,n){var r=bannerboy.utils.hexToRGB(e),o=bannerboy.utils.hexToRGB(n),i={r:Math.round(bannerboy.utils.lerp(t,r.r,o.r)),g:Math.round(bannerboy.utils.lerp(t,r.g,o.g)),b:Math.round(bannerboy.utils.lerp(t,r.b,o.b))};return bannerboy.utils.rgbToHex(i.r,i.g,i.b)},rgbToHex:function(t,e,n){return"#"+((1<<24)+(t<<16)+(e<<8)+n).toString(16).slice(1)},hexToRGB:function(t){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;t=t.replace(e,function(t,e,n,r){return e+e+n+n+r+r});var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null},pad:function(t,e){for(var n=t.toString();n.length<e;)n="0"+n;return n},makeSequence:function(t){for(var e=t.substring(t.indexOf("["),t.lastIndexOf("]")+1),n=e.substring(1,e.indexOf("]")),r=e.substring(e.lastIndexOf("[")+1,e.length-1),o=n.length,i=parseInt(n),a=parseInt(r),s=[],u=i;a>=u;++u)s.push(t.replace(e,bannerboy.utils.pad(u,o)));return s}};var bannerboy=bannerboy||{};bannerboy.image_cache={},bannerboy.defaults={},bannerboy.createElement=function(t){function e(){o.appendChildren=function(t){for(var e=0;e<t.length;++e)this.appendChild(t[e]);return this},o.set=function(t){return TweenLite.set(this,t),this},o.to=function(t,e){return TweenLite.to(this,t,e),this},o.from=function(t,e){return TweenLite.from(this,t,e),this},o.fromTo=function(t,e,n){return TweenLite.fromTo(this,t,e,n),this},o.get=function(t){try{return this._gsTransform&&this._gsTransform[t]||this._gsTransform&&0===this._gsTransform[t]?this._gsTransform[t]:"px"==this.style[t].slice(-2)?parseFloat(this.style[t]):this.style[t]}catch(e){console.log(e)}},o.centerX=o.centerHorizontal=function(){return TweenLite.set(this,{left:0,right:0,marginLeft:"auto",marginRight:"auto"}),this},o.centerY=o.centerVertical=function(){return TweenLite.set(this,{top:0,bottom:0,marginTop:"auto",marginBottom:"auto"}),this},o.center=function(){return TweenLite.set(this,{top:0,left:0,right:0,bottom:0,margin:"auto"}),this},o.putInContainer=function(t){this.container=bannerboy.createElement({left:this.get("left"),top:this.get("top"),width:this.get("width"),height:this.get("height"),overflow:t||"hidden",parent:this.parentNode}),this.set({left:0,top:0}),this.container.appendChild(this)},t.id&&(o.id=t.id),t.insertBefore?t.insertBefore.parentNode.insertBefore(o,t.insertBefore):t.insertAfter?t.insertAfter.parentNode.insertBefore(o,t.insertAfter.nextElementSibling):t.parent&&t.parent.appendChild(o),t.center&&o.center(),t.centerX&&o.centerX(),t.centerY&&o.centerY(),t.centerHorizontal&&o.centerHorizontal(),t.centerVertical&&o.centerVertical(),t.innerHTML&&(o.innerHTML=t.innerHTML),t=bannerboy.deleteProps(t,["innerHTML","retina","parent","id","type","autoplay","loop","controls","muted","poster","preload","sources","center","centerHorizontal","centerVertical","centerY","centerX","insertBefore","insertAfter"]),TweenLite.set(o,t)}function n(t,e){var n=bannerboy.image_cache[t];n?e&&r.apply(n):(console.log("Image "+t+" has not been preloaded."),n=document.createElement("img"),n.src=t,e&&(n.onload=r),bannerboy.image_cache[t]=n)}function r(){var n=".svg"==this.src.slice(-4);n&&document.body.appendChild(this),t.width=t.width||Math.round(t.retina?this.width/2:this.width),t.height=t.height||Math.round(t.retina?this.height/2:this.height),t.backgroundImage="url("+this.src+")",e(),n&&document.body.removeChild(this)}var t=t||{};t=bannerboy.combineObjects({type:"div",position:"absolute",force3D:!0},bannerboy.defaults,t);var o=document.createElement(t.type);switch(t.type){case"canvas":o.width=t.width,o.height=t.height;break;case"video":t.autoplay&&(o.autoplay=t.autoplay),t.loop&&(o.loop=t.loop),t.controls&&(o.controls=t.controls),t.muted&&(o.muted=t.muted),t.poster&&(o.poster=t.poster),t.preload&&(o.preload=t.preload)}if(t.sources)for(var i=t.sources,a=0;a<i.length;a++){var s=document.createElement("source");s.src=i[a].url,s.type=i[a].type,o.appendChild(s)}return t.backgroundImage?(o.style.backgroundSize=t.backgroundSize||"contain",o.style.backgroundRepeat=t.backgroundRepeat||"no-repeat",n(t.backgroundImage,!0)):e(),o},bannerboy.preloadImages=function(t,e,n){for(var r=0,o=null,i=[],a=0;a<t.length;++a)o=document.createElement("img"),o.src=o.shortSrc=t[a],i.push(o),o.onload=function(){r++,bannerboy.image_cache[this.shortSrc]=this,r==t.length&&(n?e.call(n,i):e(i))};0===t.length&&(n?e.call(n):e())},bannerboy.include=function(t,e){console.log("#include '"+t+"'");var n=document.createElement("script");n.type="text/javascript",n.src=t,document.head.appendChild(n),n.onload=e?e:function(){console.log("Resource loaded: "+n.src)},n.onerror=function(){console.log("Oops! Could not load resource '"+t+"'")}},bannerboy.combineObjects=function(){var t={};for(var e in arguments){var n=arguments[e];for(var r in n)t[r]=n[r]}return t},bannerboy.deleteProps=function(t,e){for(i in e)delete t[e[i]];return t},window.console||(window.console={log:function(){}}),Object.create||(Object.create=function(t,e){function n(){}if("object"!=typeof t&&"function"!=typeof t)throw new TypeError;if(null===t)throw new Error;if("undefined"!=typeof e)throw new Error;return n.prototype=t,new n}),BBTimeline.prototype=Object.create(TimelineMax.prototype),BBTimeline.prototype.constructor=BBTimeline,BBTimeline.prototype.add=function(t){var e;if("end"==this.mode)e=this.duration()+this.addPosition;else if("absolute"==this.mode)e=this.addPosition;else{var n=this.children.concat().sort(function(t,e){return t.index-e.index}),r=n[n.length-1];e=r?r.position:0,"offset"==this.mode?e+=this.addPosition:"chain"==this.mode&&(e+=r.duration+this.addPosition)}return TimelineMax.prototype.add.call(this,t,e),this.children.push({position:e,duration:t.duration?t.duration():0,index:this.children.length}),this.locked||(this.addPosition=0,this.mode="offset"),this},BBTimeline.prototype.set=function(){return this.add(TweenLite.set(arguments[0],arguments[1]),arguments[2])},BBTimeline.prototype.to=function(){return this.add(TweenLite.to(arguments[0],arguments[1],arguments[2]),arguments[3])},BBTimeline.prototype.from=function(){return this.add(TweenLite.from(arguments[0],arguments[1],arguments[2]),arguments[3])},BBTimeline.prototype.fromTo=function(){return this.add(TweenLite.fromTo(arguments[0],arguments[1],arguments[2],arguments[3]),arguments[4])},BBTimeline.prototype.staggerTo=function(){return this.add((new TimelineMax).staggerTo(arguments[0],arguments[1],arguments[2],arguments[3]),arguments[4])},BBTimeline.prototype.staggerFrom=function(){return this.add((new TimelineMax).staggerFrom(arguments[0],arguments[1],arguments[2],arguments[3]),arguments[4])},BBTimeline.prototype.staggerFromTo=function(){return this.add((new TimelineMax).staggerFromTo(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),arguments[5])},BBTimeline.prototype.lock=function(t,e){return this.mode=t,this.addPosition=e||0,this.locked=!0,this},BBTimeline.prototype.offset=function(t){return this.mode="offset",this.addPosition=t||0,this.locked=!1,this},BBTimeline.prototype.chain=function(t){return this.mode="chain",this.addPosition=t||0,this.locked=!1,this},BBTimeline.prototype.end=function(t){return this.mode="end",this.addPosition=t||0,this.locked=!1,this},BBTimeline.prototype.absolute=function(t){return this.mode="absolute",this.addPosition=t||0,this.locked=!1,this},BBTimeline.prototype.loop=function(t,e){var n=0,r=this;return this.add(function(){n++<t&&r.seek(e||"loop")})},BBTimeline.prototype.start=function(t){return this.add(function(){t.play()})},BBTimeline.prototype.stagger=function(){return this.add((new TimelineMax).add(arguments[0],0,"normal",arguments[1]))};