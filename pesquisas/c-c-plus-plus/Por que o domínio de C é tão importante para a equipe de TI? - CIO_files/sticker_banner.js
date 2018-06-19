/*
    var s = $("#top-banner");
    var pos = s.position();                    
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        //s.html("Distance from top:" + pos.top + "<br />Scroll position: " + windowpos);
        if (windowpos >= pos.top) {
            if (typeof timeo === 'undefined') {
                s.addClass("stick");
                timeo = setTimeout(function(){ s.removeClass("stick"); }, 20000);
            }
        } else {
            if (typeof timeo !== 'undefined') {
                s.removeClass("stick"); 
                //clearTimeout(timeo); 
            }
        }
    });
*/

jQuery(document).ready(function() {
   // new menu item - cursos online - udemy
   document.getElementById('menunav').getElementsByTagName('a')[6].href = 'http://idgnow.com.br/udemy.html';
   document.getElementById('menunav').getElementsByTagName('a')[6].innerHTML = 'Cursos Online';
   document.getElementById('menunav').getElementsByTagName('a')[6].title = 'Cursos Online';
});

    // dfp skin & modal
    /*!
     * Bootstrap v3.2.0 (http://getbootstrap.com)
     * Copyright 2011-2014 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */

    /*!
     * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=cd39afb1e67023c47ee2)
     * Config saved to config.json and https://gist.github.com/cd39afb1e67023c47ee2
     */
    if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";function e(e,s){return this.each(function(){var i=t(this),n=i.data("bs.modal"),a=t.extend({},o.DEFAULTS,i.data(),"object"==typeof e&&e);n||i.data("bs.modal",n=new o(this,a)),"string"==typeof e?n[e](s):a.show&&n.show(s)})}var o=function(e,o){this.options=o,this.$body=t(document.body),this.$element=t(e),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};o.VERSION="3.2.0",o.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},o.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},o.prototype.show=function(e){var o=this,s=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(s),this.isShown||s.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.$body.addClass("modal-open"),this.setScrollbar(),this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.backdrop(function(){var s=t.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),s&&o.$element[0].offsetWidth,o.$element.addClass("in").attr("aria-hidden",!1),o.enforceFocus();var i=t.Event("shown.bs.modal",{relatedTarget:e});s?o.$element.find(".modal-dialog").one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(i)}).emulateTransitionEnd(300):o.$element.trigger("focus").trigger(i)}))},o.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.$body.removeClass("modal-open"),this.resetScrollbar(),this.escape(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},o.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},o.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},o.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$element.trigger("hidden.bs.modal")})},o.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},o.prototype.backdrop=function(e){var o=this,s=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=t.support.transition&&s;if(this.$backdrop=t('<div class="modal-backdrop '+s+'" />').appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;i?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(150):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var n=function(){o.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(150):n()}else e&&e()},o.prototype.checkScrollbar=function(){document.body.clientWidth>=window.innerWidth||(this.scrollbarWidth=this.scrollbarWidth||this.measureScrollbar())},o.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.scrollbarWidth&&this.$body.css("padding-right",t+this.scrollbarWidth)},o.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},o.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var s=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=o,t.fn.modal.noConflict=function(){return t.fn.modal=s,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(o){var s=t(this),i=s.attr("href"),n=t(s.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),a=n.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(i)&&i},n.data(),s.data());s.is("a")&&o.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){s.is(":visible")&&s.trigger("focus")})}),e.call(n,a,this)})}(jQuery);

    // dfp slot 
    googletag.cmd.push(function() { 
      googletag.defineSlot('/23408374/cio-skin', [1, 1], 'div-gpt-ad-1497020839952-0').addService(googletag.pubads());
      googletag.defineSlot('/23408374/cio-modal', [750, 450], 'div-gpt-ad-1497622099450-0').addService(googletag.pubads());
      googletag.pubads().enableSingleRequest(); 
      googletag.enableServices(); 
    }); 
     
    // ad skin 
    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent"; 
    var eventer = window[eventMethod]; 
    var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message"; 
     
    // Listen to message from child window 
    eventer(messageEvent,function(e) { 
        var key = e.message ? "message" : "data"; 
        var data = e[key]; 
     
        if(!!data.idg_skin){ 
            console.log(data.idg_skin); 
     
            jQuery('body').css({ 
              background: 'transparent url(' + data.idg_skin.image + ') no-repeat fixed center top', 
              // backgroundSize: 'cover' 
            }); 
     
            var clickLeft = "<a id='skinClickLeft' href='" + data.idg_skin.clickTag + "' target='_blank'></a>"; 
            var clickRight = "<a id='skinClickRight' href='" + data.idg_skin.clickTag + "' target='_blank'></a>"; 
     
            jQuery('body') 
              .append(clickLeft) 
              .append(clickRight); 
     
            var $siteWrapper = jQuery('#nd-site'); 
     
            $('#trr-navbar-footer').css({ 
              background: 'transparent', 
              border: 'none' 
            }); 
            $('#trr-navbar-footer .bottom__wrap').css('background-color', '#FFF'); 
     
            jQuery('#skinClickLeft, #skinClickRight').css({ 
              background: 'rgba(50, 50, 50, 0)', 
              bottom: 0, 
              display: 'block', 
              position: 'fixed', 
              top: 0, 
              width: 100 
            }); 
            jQuery('#skinClickLeft').css('left', 0); 
            jQuery('#skinClickRight').css('right', 0); 
     
            function IDGskinResize() { 
              var width = $siteWrapper.offset().left; 
              jQuery('#skinClickLeft, #skinClickRight').css({ 
                width: width 
              }); 
            } 
     
            jQuery(window).resize(function(){ 
              IDGskinResize();               
            }); 
            IDGskinResize(); 
        }

        if(!!data.idg_modal){
          jQuery('#intermodal').modal('show', {backdrop: 'static'});

          setTimeout(function(){
            jQuery('#intermodal').modal('hide');
          }, 30000);
        }
    },  false);

    function interstitialShowHome2(){
      jQuery('#intermodal').modal('hide');
    }

    window.onload = function(e){
      // skin
      jQuery('body').append("<!-- /23408374/cio-skin --><div id='div-gpt-ad-1497020839952-0' style='height:1px; width:1px;'></div>"); 
     
      googletag.cmd.push(function() { googletag.display('div-gpt-ad-1497020839952-0'); });

      // modal
      var interHtml = '';

      var interIni = "<div id='banner-inter'><li class='fecharintermodal'>Este anúncio será fechado em 30 segundos. <a href='javascript:void(0);' onclick='interstitialShowHome2();' title='Ir direto para o SITE' class='linkfecharintermodal'>Ir direto para o SITE<\/a><\/li><\/ul><\/div><div class='banner-inters'><div class='publicidade-flash'>";
      var interCreative = "<!-- /23408374/cio-modal --><div id='div-gpt-ad-1497622099450-0' style='height:450px; width:750px;'></div>";
      var interEnd = "</div></div></div>";
      interHtml = interIni + interCreative + interEnd;

      var ndInterstitial2 = "<div class='modal fade' id='intermodal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'><div class='modal-dialog'><div class='modal-content'><div class='modal-body' id='nd-interstitial2'>" + interHtml + "</div></div></div></div>";

      jQuery('body').append(ndInterstitial2);

      googletag.cmd.push(function() { googletag.display('div-gpt-ad-1497622099450-0'); });

     // new menu item - cursos online - udemy

      // jQuery('#menunav a:last').attr('href', 'https://www.udemy.com/collection/cursos-online-idg/?pmtag=IDGBRASIL&utm_source=direct-buy-intl&utm_medium=udemyads&utm_term=&utm_content=_._pn__._ci__._sl_BRA_._la_PT_._&utm_campaign=BRA-IDG-Article-06Nov17&persist_locale&locale=pt_BR').text('Cursos Online');

    }

// worldsense
var scriptWS = document.createElement('script');
scriptWS.setAttribute("worldsense-property-id", "ws-idg");
scriptWS.src = "https://cdn.worldsense.com/hyperlinker.js";

document.head.appendChild(scriptWS);

