;window.CloudflareApps=window.Eager=window.CloudflareApps||window.Eager||{};window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="8b98dacdb426477b7f2d9f09746b8651";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["qC0w1YKS0tj2"]={appId:"ZCDIXCYkgZ6P",scope:{}};;CloudflareApps.installs["qC0w1YKS0tj2"].options={"behavior":{"automaticallyHide":false,"showCloseButton":true},"cta":{"label":"Confira","newWindow":false,"show":true,"url":"https://www.clubedohardware.com.br/cursos"},"message":"Conheça os cursos online de redes do Clube do Hardware","messagePlan":"multiple","messages":[{"cta":{"label":"Confira","newWindow":false,"show":true,"url":"https://www.clubedohardware.com.br/cursos/"},"endDate":"Thu Jan 2 2020 08:30","message":"Conheça os cursos online de redes do Clube do Hardware!","useEndDate":false},{"cta":{"label":"Confira","newWindow":true,"show":true,"url":"https://www.udemy.com/redes-modulo-1/?couponCode=WELCOMEBAR\u0026persist_locale\u0026locale=pt_BR"},"endDate":"Thu Jan 2 2020 02:30","message":"Conheça o nosso curso Arquitetura de Redes!","useEndDate":false},{"cta":{"label":"Confira","newWindow":true,"show":true,"url":"https://www.udemy.com/redes-tcpip/?couponCode=WELCOMEBAR\u0026persist_locale\u0026locale=pt_BR"},"endDate":"Thu Jan 2 2020 02:30","message":"Conheça o nosso curso Redes TCP/IP!","useEndDate":false},{"cta":{"label":"Confira","newWindow":false,"show":true,"url":"https://www.clubedohardware.com.br/livros/"},"endDate":"Wed Jan 1 2020 20:30","message":"Os livros de Gabriel Torres estão de volta!","useEndDate":false}],"theme":{"backgroundColor":"#00bd61","buttonBackgroundColor":"#ffffff","buttonTextColor":"#0099ff","buttonTextColorStrategy":"auto","style":"prominent","textColor":"#ffffff"}};;CloudflareApps.installs["qC0w1YKS0tj2"].URLPatterns=["^www.clubedohardware.com.br/?.*$"];;CloudflareApps.installs["qC0w1YKS0tj2"].product={"id":"pro"};;CloudflareApps.installs["h9xirU1WJICP"]={appId:"lMxPPXVOqmoE",scope:{}};;CloudflareApps.installs["h9xirU1WJICP"].options={"account":{"accountId":"Qxe5f09e8eJs","service":"googleanalytics","userId":"117053943587016469916"},"id":"UA-7748529-2","social":false};;CloudflareApps.installs["h9xirU1WJICP"].URLPatterns=["^www.clubedohardware.com.br/?.*$"];;if(CloudflareApps.matchPage(CloudflareApps.installs['h9xirU1WJICP'].URLPatterns)){(function(){var options=CloudflareApps.installs['h9xirU1WJICP'].options
var id
if(options.account&&options.organization){id=options['web-properties-for-'+options.organization]}else{id=(options.id||'').trim()}
if(!id){console.log('Cloudflare Google Analytics: Disabled. UA-ID not present.')
return}else if("h9xirU1WJICP"==='preview'){console.log('Cloudflare Google Analytics: Enabled',id)}
function resolveParameter(uri,parameter){if(uri){var parameters=uri.split('#')[0].match(/[^?=&]+=([^&]*)?/g)
for(var i=0,chunk;chunk=parameters[i];++i){if(chunk.indexOf(parameter)===0){return unescape(chunk.split('=')[1])}}}}
window.dataLayer=window.dataLayer||[]
function gtag(){window.dataLayer.push(arguments)}
gtag('js',new Date())
gtag('config',id)
var vendorScript=document.createElement('script')
vendorScript.src='https://www.googletagmanager.com/gtag/js?id='+id
document.head.appendChild(vendorScript)
if(options.social){window.addEventListener('load',function googleAnalyticsSocialTracking(){var FB=window.FB
var twttr=window.twttr
if('FB'in window&&'Event'in FB&&'subscribe'in window.FB.Event){FB.Event.subscribe('edge.create',function(targetUrl){gtag('event','share',{method:'facebook',event_action:'like',content_id:targetUrl})})
FB.Event.subscribe('edge.remove',function(targetUrl){gtag('event','share',{method:'facebook',event_action:'unlike',content_id:targetUrl})})
FB.Event.subscribe('message.send',function(targetUrl){gtag('event','share',{method:'facebook',event_action:'send',content_id:targetUrl})})}
if('twttr'in window&&'events'in twttr&&'bind'in twttr.events){twttr.events.bind('tweet',function(event){if(event){var targetUrl
if(event.target&&event.target.nodeName==='IFRAME'){targetUrl=resolveParameter(event.target.src,'url')}
gtag('event','share',{method:'twitter',event_action:'tweet',content_id:targetUrl})}})}},false)}}())}(function(){var script = document.createElement('script');script.src = '/cdn-cgi/apps/body/OPHqN_04Bg0I91PWZuLVTcm2op4.js';document.head.appendChild(script);})();