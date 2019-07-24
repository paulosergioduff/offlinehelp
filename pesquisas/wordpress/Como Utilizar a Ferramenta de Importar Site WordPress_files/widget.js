(function(){
    var me = document.getElementById('hgr-widget-script-tag');
    var variation = me.getAttribute("data-variation");

    function loadBottomBanner() {
        if (getCookie('hgr-bottom-banner-closed') == null) {
            var ifrm = document.createElement('iframe');
            ifrm.id = 'hgr-promo-bottom-banner';
            ifrm.setAttribute('src', 'https://www.hostinger.com/widgets/bottom-banner-sale/'+variation);
            ifrm.setAttribute("allowfullscreen", true);
            ifrm.setAttribute("frameborder", 0);
            ifrm.style.cssText = "z-index: 2147483000 !important;position: fixed !important;bottom: 0; width: 100%;!important; left: 0!important;";
            ifrm.style.opacity = 0;
            ifrm.onload = function () {
                iFrameResize({
                    resizedCallback         : function(messageData){
                        if (messageData.height <= 0) {
                            setCookie('hgr-bottom-banner-closed', (120 * 60 * 1000));
                        }
                    },
                }, '#hgr-promo-bottom-banner');
                ifrm.style.opacity = 1;
            };
            me.insertAdjacentElement('afterend', ifrm);
        }
    }

    function loadPopup() {
        document.addEventListener('mouseout', function (e) {
            if (getCookie('hgr-popup-closed') == null && !document.getElementById("hgr-promo-popup") && e.clientY < 0 && variation != 'blog_com') {
                var ifrm = document.createElement('iframe');
                ifrm.id = 'hgr-promo-popup';
                ifrm.setAttribute('src', 'https://www.hostinger.com/widgets/sale-popup/'+variation);
                ifrm.setAttribute("allowfullscreen", true);
                ifrm.setAttribute("frameborder", 0);
                ifrm.style.cssText = "    bottom: 0px;\n" +
                    "    width: 100vw;\n" +
                    "    z-index: 2147483001 !important;\n" +
                    "    position: fixed !important;\n" +
                    "    left: 0px !important;\n" +
                    "    opacity: 1;\n" +
                    "    overflow: hidden;\n" +
                    "    height: 100vh;\n" +
                    "    top: 0;";
                ifrm.style.opacity = 0;
                ifrm.onload = function () {
                    iFrameResize({
                        resizedCallback         : function(messageData){
                            if (messageData.height <= 0) {
                                setCookie('hgr-popup-closed', (120 * 60 * 1000));
                            }
                        },
                    }, '#hgr-promo-popup');
                    ifrm.style.opacity = 1;
                };
                me.insertAdjacentElement('afterend', ifrm);
            }
        }, false);
    }

    if (!window.iFrameResize) {
        var resizerScriptTag = document.createElement('script');
        resizerScriptTag.type = 'text/javascript';
        me.insertAdjacentElement('afterend', resizerScriptTag);
        resizerScriptTag.onload = function() {
            loadBottomBanner();
            loadPopup();
        }
        resizerScriptTag.src = 'https://unpkg.com/iframe-resizer@3.6.3/js/iframeResizer.min.js';
    } else {
        loadBottomBanner();
        loadPopup();
    }

    function setCookie(key, expirationTime) {
        var expires = new Date();
        expires.setTime(expires.getTime() + expirationTime);
        var cookieExpires = new Date();
        cookieExpires.setTime(expires.getTime() + (24 * 60 * 60 * 1000));
        document.cookie = key + ' = ' + 'expires = ' + expires.getTime() + ';expires=' + cookieExpires.toUTCString();
    }


    function getCookie(key) {
        var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
        return keyValue ? keyValue[2] : null;
    }

}());
