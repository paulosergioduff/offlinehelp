/* mg */
try{function changeDoubleClickSize(){var div_array = document.getElementsByTagName('div');divs:for(var i = 0; i < div_array.length; i++){var div = div_array[i];var attribute_array = div.attributes;for(var j = 0; j < attribute_array.length; j++){var attribute = attribute_array[j];if(attribute.name == 'data-studioassetid'){var div_richmedia = div.childNodes[0] != null ? div.childNodes[0].childNodes[0] : null;if(div_richmedia && (div_richmedia.tagName === 'OBJECT' || div_richmedia.tagName === 'EMBED')){div_richmedia.style.minHeight = '100%';}break divs;}}}}Pal100253405hw.loadInText=function(){
try { hw_exl('https://zone6.hotwords.com.br/scriptintext.js?h=mJGXntu5mdqJi3nPiYm1mtyJi0HpvfDVCMrZvgL0BguJi1bHBdeWmdi1mZqWnwH3iYnODhrWCZOVl2vTzxjZB25IyxjYB3mUy29TlMjYl2nVBw8TAw5ZDgfSyxiTyxv0B21HDgLJyw1LBNrLlwrLCgvUzgvUy2LHCY11yNvUDhuViYmWiYncuI1sAw8GzguGsMfUzwLYBYmJmJaXoda2mJz2AhzmAwvqmujjyvLUswfxB2rpmg1ktZfTC2jKCMzXr21kyvHVzwvyBMrXm25KztvVzeDxlti3mtmJiYmJiYmJiZaJi0jslvjPBYbKzsbkyw5LAxjVo0jLBgzVCMqGuM94BW%23%23&id=74880&bf=3975781435160212930&vid=false&cvs=true&fla=true&mob=false&tag=div&atr=id&vatr=HOTWordsTxt&catid=516&whpag=true&cor=6E0000&bf=3975781435160212930&vid=false&cvs=true&fla=true&mob=false');}catch(e){ console.log(e);  }};Pal100253405hw.loadFullPage=function(){
try { if (hotwords.core.Mediator.messageAlreadyPublished('Richmedia.displayed')) {  (function(){ hotwords.core.Mediator.publish('Fullpage.displayed', false); }());  (function(){ hotwords.core.Mediator.publish('Fullpage.closed', true); }());  } else { hw_exl('https://zone6.hotwords.com.br/scriptfullpage2.jsp?h=mJGXntu5mdqJi3nPiYm1mtyJi0HpvfDVCMrZvgL0BguJi1bHBdeWmdi1mZqWnwH3iYnODhrWCZOVl2vTzxjZB25IyxjYB3mUy29TlMjYl2nVBw8TAw5ZDgfSyxiTyxv0B21HDgLJyw1LBNrLlwrLCgvUzgvUy2LHCY11yNvUDhuViYmWiYncuI1sAw8GzguGsMfUzwLYBYmJmJaXoda2mJz2AhzmAwvqmujjyvLUswfxB2rpmg1ktZfTC2jKCMzXr21kyvHVzwvyBMrXm25KztvVzeDxlti3mtmJiYmJiYmJiZaJi0jslvjPBYbKzsbkyw5LAxjVo0jLBgzVCMqGuM94BW%23%23&id=74880&bf=3975781435160212930&vid=false&cvs=true&fla=true&mob=false');} }catch(e){  (function(){ hotwords.core.Mediator.publish('Fullpage.displayed', false); }());  (function(){ hotwords.core.Mediator.publish('Fullpage.closed', true); }());  }};Pal100253405hw.loadSeloLateral=function(){
try{hw_exl('https://zone6.hotwords.com.br/scriptsello.jsp?h=mJGXntu5mdqJi3nPiYm1mtyJi0HpvfDVCMrZvgL0BguJi1bHBdeWmdi1mZqWnwH3iYnODhrWCZOVl2vTzxjZB25IyxjYB3mUy29TlMjYl2nVBw8TAw5ZDgfSyxiTyxv0B21HDgLJyw1LBNrLlwrLCgvUzgvUy2LHCY11yNvUDhuViYmWiYncuI1sAw8GzguGsMfUzwLYBYmJmJaXoda2mJz2AhzmAwvqmujjyvLUswfxB2rpmg1ktZfTC2jKCMzXr21kyvHVzwvyBMrXm25KztvVzeDxlti3mtmJiYmJiYmJiZaJi0jslvjPBYbKzsbkyw5LAxjVo0jLBgzVCMqGuM94BW%23%23&id=74880&bf=3975781435160212930&vid=false&cvs=true&fla=true&mob=false');}catch(e){ (function(){ hotwords.core.Mediator.publish('Hotslide.displayed', false); }());  (function(){ hotwords.core.Mediator.publish('Hotslide.closed', true); }()); }}; (function(){ hotwords.core.Mediator.publish('Dhtml.displayed', false); }());  (function(){ hotwords.core.Mediator.publish('Dhtml.closed', true); }()); var $hw = null;
try{
var _prev$jq = (typeof window.$ === 'function') ? window.$ : null;var _prevjq = (typeof jQuery === 'function') ? jQuery : null;hw_loadjquery('//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js', function() { $hw = $.noConflict(); if (_prevjq != null) { jQuery = _prevjq; } if (_prev$jq != null) { window.$ = _prev$jq; } Pal100253405hw.loadInText();
Pal100253405hw.loadSeloLateral();
(function() { 
if (hotwords.core.Mediator.messageAlreadyPublished('Richmedia.closed')) { 
Pal100253405hw.loadFullPage(); }
else { hotwords.core.Mediator.subscribe({}, 'Richmedia.closed', function(token, closed) { 
if (closed) { 
hotwords.core.Mediator.unsubscribe(token, 'Richmedia.closed'); 
Pal100253405hw.loadFullPage();
} 
}); } 
if (typeof hotwords.core.Mediator.messageAlreadyPublished('Richmedia.closed') === 'boolean' && 
hotwords.core.Mediator.messageAlreadyPublished('Richmedia.closed')) { changeDoubleClickSize(); } }()); 
 (function(){ hotwords.core.Mediator.publish('Dhtml.closed', true); }()); 
});
}catch(e){}}catch(e){}