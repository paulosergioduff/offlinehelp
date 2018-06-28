SmartAva = {
    config: {
        siteConfPath: "https://a482323.storage.oraclecloud.com/v1/Storage-a482323/smartclip-services/ava/config/",
        smartclipConfig: "https://a482323.storage.oraclecloud.com/v1/Storage-a482323/smartclip-services/HeaderBidding/js/SmartclipConfig.js",
        js_dependencies: ["https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"],
        bluekai_endpoint: "//tags.bluekai.com/site/47890?ret=js&limit=1&phint=sc_videosite%3D",
        oracle_pixel_endpoint: "//smx-stats.smartclipconfig.com/",
        redirect_impression_pixels: ["Transparent1.gif?player_id=", "Transparent2.gif?player_id=", "Transparent3.gif?player_id=", "Transparent4.gif?player_id="],
        redirect_noAd_pixels: ["Transparent5.gif?player_id=", "Transparent6.gif?player_id="],
        exclude_network_pixels: ["br","mx"]
    },
    utils: {
        ava_sc_smartIntxtStart: function() { //elementContainer does not exist anymore, need to find the way to get container
            if (VideoManager.ava.getElementIdCrossFrames(SmartIntxt.config.elementContainer.id)){
                var element = VideoManager.ava.getElementIdCrossFrames(SmartIntxt.config.elementContainer.id);
            }else{
                var element = VideoManager.ava.getElementIdCrossFrames(SmartIntxt.config.elementContainer);
            }
            element.style.opacity = "1";
            
            VideoManager.ava.videoAdStarted();
            var Ava_conf = VideoManager.ava.loadAvaConfDevice();
            if (Ava_conf.hardSkip &&  Ava_conf.hardSkip!=0){
                SmartAva.utils.addSkipButton(Ava_conf.hardSkip,element)
            }
        },
        ava_sc_smartIntxtNoad: function() {
            var element = VideoManager.ava.getElementIdCrossFrames(SmartIntxt.config.elementContainer);
            if (element) element.style.display = 'none';
            VideoManager.ava.videoADEmpty();
        },
        ava_sc_smartIntxtEnd: function() { //elementContainer does not exist anymore, need to find the way to get container
            var Ava_conf = VideoManager.ava.loadAvaConfDevice();

            //SmartInphoto.utils.intxtEnd();
            if (Ava_conf.nonstop) {
                if (typeof top.sc_intext_cont == "undefined") {
                    top.sc_intext_cont = 0;
                }
                var reference = "smartIntxt" + top.sc_intext_cont;
                SmartAva.utils.remmoveFixedClasses(Ava_conf.fixedClass);
                top.sc_intext_cont++;
                var ref_element = '<div id="' + reference + '" class = "' + Ava_conf.fixedClass + '" ></div>';
                top.avaContainerElement.insertAdjacentHTML('beforebegin', ref_element);
                if (SmartAva.utils.isMobile()){ //WORKARROUND FOR VIDEOLOGY
                    setTimeout(function() {
                        VideoManager.ava.videologyFix(0,reference);
                    }, 2000);
                }
                SmartAva.init(reference, Ava_conf);
            }
        },
        startSmartIntext: function (container){
            if (typeof SmartIntxt.config.placement == "undefined") SmartIntxt.config.placement = "";
            var player = top.Site_conf.ava.web.smaracd_player
            var skipOffset = top.Site_conf.ava.web.skipOffset;
            var skipText = top.Site_conf.ava.web.skipText;
            if (SmartAva.utils.isMobile()) {
                player = top.Site_conf.ava.mobile.smaracd_player
                skipOffset = top.Site_conf.ava.mobile.skipOffset;
                skipText = top.Site_conf.ava.web.skipText
            }
            var sc_ref = encodeURIComponent(window.location.href);
            var sc = document.createElement('script');
                sc.type = 'text/javascript';
                sc.async = 'true';
                sc.src = '//dco.smartclip.net/?plc=',
                sc.onload = sc.onreadystatechange = function() {
                    var rs = this.readyState;
                    if (rs && rs != 'complete' && rs != 'loaded') return;
                    try {
                        SmartPlay(container, {
                            adRequest: {
                                html : {
                                        urls: [
                                        '//ad.sxp.smartclip.net/select?type=dyn&ple=' + player + '~'+SmartIntxt.config.placement+'~400x320&cu_smar_cors=1&smar_cors=1&fwd_dt1=' + sc_ref + '&fwd_dt2=atres&fwd_sz=400x320&&ang_contxt=1&inswipe=[ALLOWINSWIPE]&optout=&consent=&rnd=221770',
                                        '//ad.sxp.smartclip.net/select?type=dyn&ple=' + player + '~'+SmartIntxt.config.placement+'~400x320&cu_smar_cors=1&smar_cors=1&fwd_dt1=' + sc_ref + '&fwd_dt2=&fwd_sz=400x320&&ang_contxt=1&inswipe=[ALLOWINSWIPE]&optout=&consent=&rnd=221770'
                                        ],
                                        limit : 1
                                }
                                

                            },
                            minAdWidth: SmartIntxt.config.minAdWidth,
                            maxAdWidth: SmartIntxt.config.maxAdWidth,
                            elementLocator: {
                                allowInViewport: false,
                                minimumElementWidth: 320,
                                scanPixelsBelowViewport: 800
                            },
                            skipText: skipText,
                            skipOffset: skipOffset, // overriden by VAST3 skipoffset, value of 0 will not show a skip button 0.1 will immediately show a ckip button
                            behaviourMatrix: {
                                'offScreen': {
                                    paused: false,
                                    muted: true
                                }
                            },
                            onStartCallback: (function() {
                                try {
                                    SmartAva.utils.ava_sc_smartIntxtStart();
                                    sc_smartIntxtStart();
                                } catch (f) {}
                            }),
                            onCappedCallback: (function() {
                                try {

                                    SmartAva.utils.ava_sc_smartIntxtNoad();
                                    sc_smartIntxtNoad();
                                } catch (f) {}
                            }),
                            onEndCallback: (function() {
                                try {
                                    SmartAva.utils.ava_sc_smartIntxtEnd();
                                    sc_smartIntxtEnd();
                                } catch (f) {}
                            })
                        });
                    } catch (e) {
                        console.warn('error caught : ' + e);
                    }
                };
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(sc, s);
        },
        addSkipButton: function (secs,element){
            
            
            var sc_iframe = document.getElementById(element.id+'-frame').contentWindow.document;
            setTimeout(function(){
                sc_iframe.getElementById("skipbar").remove()
                var pepe = sc_iframe.getElementById("player-ui")
                pepe.insertAdjacentHTML("beforeend",'<div id="skipbar" style="z-index:15000000"class="front-hl-color"><div style="display: table-row;z-index:15000000"><div id="skip" class="button back-color front-hl-color active enabled" data-bind="click: skip"><div data-bind="innerHTML: skipText" innerhtml=""></div><div class="wrapper"><span class="skip-close scmp-plus rotate-45"></span><canvas width="28" height="28" class="skip-countdown enabled"></canvas></div></div><div id="play-ios" class="button back-color" data-bind="click: togglePlay"><div><span class="scmp-play"></span></div></div><div class="button click-through back-color" data-bind="click: triggerClickThrough"><div><span class="scmp-web"></span></div></div></div></div>');
                sc_iframe.getElementById("skip").addEventListener("click", myFunction);
                function myFunction() {
                    
                    top.document.getElementById(element.id+ "-frame").style.height="0px";
                    setTimeout(function (){
                    top.document.getElementById(element.id+ "-frame").remove();
                    SmartAva.utils.ava_sc_smartIntxtEnd();
                },1000);
                }
            }, secs*1000)
            
        },
        remmoveFixedClasses : function (patern){
            var elements = top.document.getElementsByClassName(patern);
            for (i = 0; i< elements.length; i++){
                var element = elements[i];
                element.classList.remove(patern);
                element.style.display = "none";

            }

        },

        createCookie: function(name, value, hours) {
            var expires = "";
            if (hours) {
                var date = new Date();
                hours = hours * 1000;
                date.setTime(date.getTime() + (3600 * hours));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        },
        readCookie: function(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        },
        eraseCookie: function(name) {
            createCookie(name, "", -1);
        },
        isMobile: function() {
            var check = false;
            (function(a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        },
        insertCss: function(cssId, file) {
            var head = top.document.getElementsByTagName('head')[0];
            var link = top.document.createElement('link');
            link.id = cssId;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = file;
            link.media = 'all';
            head.appendChild(link);
        },
        createcssClasses: function(Ava_conf) {
            top.document.querySelector('head').insertAdjacentHTML("beforeend", "<style type='text/css'> .fixed_intext_sc_v1{ position: fixed !important; width: " + Ava_conf.playerWidth + "px!important;height: " + Ava_conf.playerHeight + "px !important; right: " + Ava_conf.player_margin_right + "px ;bottom: " + Ava_conf.player_margin_bottom + "px;opacity: 0;z-index: 128362132;} </style>");1
            //top.smartclipJquery("<style type='text/css'> .fixed_intext_EL_sc_v1{ position: fixed !important; right: "+ top.Site_conf.ava_desk.player_margin_right + "px ;bottom: " + top.Site_conf.ava_desk.player_margin_bottom +"px;z-index: 128362132;} </style>").appendTo("head");
            top.document.querySelector('head').insertAdjacentHTML("beforeend", "<style type='text/css'> .intxt_adjust{ width: 100% !important;height: 100% !important;}</style>");
            top.document.querySelector('head').insertAdjacentHTML("beforeend", "<style type='text/css'> .fixed_intext_sc_mob_v1 {position: fixed!important; bottom: 0px; width: 100%!important; min-height: 180px; left: 0px; z-index: 64654651464; margin-bottom: " + Ava_conf.player_margin_bottom + "px!important;opacity: 0;}</style>");
        },
        createPositionReference: function(target) {

            if (typeof intext_element == "undefined") {
                if (!document.getElementById(target)) {
                    intext_element = top.document.getElementById(target)
                    setTimeout(function() {
                        SmartAva.utils.createPositionReference(target);
                    }, 100); //BLOCKED, smartIntxt element is not being created :-O
                } else {
                    intext_element = document.getElementById(target);
                }
            }
            var elementName = "sc-ava-" + Math.round(Math.random() * 1e8);
            var ref_element = '<div id="' + elementName + '"></div>';
            intext_element.insertAdjacentHTML('beforebegin', ref_element);
            return elementName;
        },
        isInview: function(refTop, refBot, margin_bot, margin_top) {

            //    var elemHeight = elem.width() /16 * 9;
            var docViewTop = top.smartclipJquery(top.window).scrollTop();
            var docViewBot = docViewTop + top.window.innerHeight; //pixels from top to bottom of the view
            var visible;
            // 50 is the default margin for bot and top
            if (docViewBot < refBot - 50 + margin_bot || docViewTop > refTop - 50 - margin_top) { //100 is bot top pixels margin TODO PARAM THIS FROM CONF
                visible = false;
            } else {
                visible = true;
            }

            return visible;
        },

        loadScript: function(src) {

            var script = document.createElement("SCRIPT");
            script.src = src;
            script.type = 'text/javascript';
            top.window.document.getElementsByTagName("head")[0].appendChild(script);

        },
        loadJsResources: function(js) {
            //Load Jquery and css

            for (var index = 0; index < js.length; ++index) {
                SmartAva.utils.loadScript(js[index]);
            }

        },
        loadImages: function(image_src) {
            var img = document.createElement("IMG");
            img.src = image_src;
            img.type = 'text/javascript';
            img.style = "display:none"
            document.body.appendChild(img);
        },

        loadImgsPixels: function(pxl) {
            for (var index = 0; index < pxl.length; ++index) {
                SmartAva.utils.loadImages(pxl[index]);
            }

        },
        addClassToElement: function(cssClass, container, flag) {

            container.className = cssClass;
            if (!flag) {
                SmartAva.utils.startCallback(container);
            }

        },
        startCallback: function(container) {
            VideoManager.ava.startCallback(container);
        },

        resizeIntextIframe: function() {
            var iframe = document.getElementById(SmartIntxt.config.elementContainer + "-frame");
            if (!iframe) {
                iframe = top.document.getElementById(SmartIntxt.config.elementContainer + "-frame");
            }
            if (iframe) {
                var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
                var vpaid_container = innerDoc.querySelectorAll("div[id*=vpaidSlot]");
                var videos = innerDoc.getElementsByTagName("video");
                var styles = {
                    height: "100%",
                    width: "100%"
                };
                if (vpaid_container && iframe) {
                    for (var i = 0; i < vpaid_container.length; i++) {
                        top.smartclipJquery(vpaid_container[i]).css(styles);
                        for (b = 0; vpaid_container[i].children.length > b; b++) {
                            top.smartclipJquery(vpaid_container[i].children[b]).css(styles);
                            for (var a = 0; a < vpaid_container[i].children[b].children.length; a++) {
                                top.smartclipJquery(vpaid_container[i].children[b].children[a]).css(styles);
                            }
                        }
                    }
                    var iframes = innerDoc.getElementsByTagName("iframe");
                    for (var i = 0; i < iframes.length; i++) {
                        top.smartclipJquery(iframes[i]).css(styles);
                    }

                }
            }
        },
        managePlayerPosition: function(containerReferencePosition, container, movePlayerTimes, alwaysVisible, Ava_conf, containerElementIsFormatted) {
            var result = {
                movePlayerTimes: movePlayerTimes,
                inView: null
            }
            if (movePlayerTimes < Ava_conf.movePlayerCap || Ava_conf.movePlayerCap == 0) {
                var refTop = top.smartclipJquery("#" + containerReferencePosition).offset().top; //Pixels from element´s top to top of document
                var refBot = refTop + top.smartclipJquery("#" + containerReferencePosition).width() / 16 * 9; //Pixels from element´s bottom to top of document
                SmartAva.utils.resizeIntextIframe();

                if (SmartAva.utils.isInview(refTop, refBot, Ava_conf.margin_bot, Ava_conf.margin_top)) {
                    result.inView = true;
                    if (alwaysVisible) {
                        //if(this.isFixed())
                        if (typeof container.classList != 'undefined' && container.classList.value == Ava_conf.fixedClass) { //TODO  poner nombres coherentes a esto
                            container.classList.remove(Ava_conf.fixedClass);
                            result.movePlayerTimes++;
                        }

                    } else {
                        //When initiated not fixed...

                        SmartAva.utils.startCallback(container);
                    }
                } else {
                    result.inView = false;
                    if (typeof container.classList == 'undefined' || container.classList == "" && alwaysVisible) {
                        SmartAva.utils.addClassToElement(Ava_conf.fixedClass, container, containerElementIsFormatted);
                        result.movePlayerTimes++;
                    }
                }
            }
            return result;
        }
    },

    init: function(container, Ava_conf) {
        var containerElementIsFormatted = false;
        if (typeof top.jQuery != "undefined") {
            top.smartclipJquery = top.jQuery;
            var containerPositionReference = SmartAva.utils.createPositionReference(container.id);
            if (Ava_conf.initFixed && !Ava_conf.onscroll) {
                SmartAva.utils.addClassToElement(Ava_conf.fixedClass, container, containerElementIsFormatted);
                containerElementIsFormatted = true;
            }
            var movePlayerTimes = 0;
            if (Ava_conf.initFixed) {
                if (!Ava_conf.keepFixed) {

                    top.smartclipJquery(top.window).scroll(function() { // Warning pending remove listener on end.

                        if (!containerElementIsFormatted) {
                            SmartAva.utils.addClassToElement(Ava_conf.fixedClass, container, containerElementIsFormatted);
                            containerElementIsFormatted = true;

                        }
                        var ManageResult = SmartAva.utils.managePlayerPosition(containerPositionReference, container, movePlayerTimes, true, Ava_conf, containerElementIsFormatted); //pass AVA element
                        containerElementIsFormatted = true
                        movePlayerTimes = ManageResult.movePlayerTimes;

                    });
                } else {
                    SmartAva.utils.addClassToElement(Ava_conf.fixedClass, container, containerElementIsFormatted);

                }
            } else {
                var alwaysVisible = false
                top.smartclipJquery(top.window).scroll(function() { // Warning pending remove listener on end.
                    var ManageResult = SmartAva.utils.managePlayerPosition(containerPositionReference, container, movePlayerTimes, alwaysVisible, Ava_conf, containerElementIsFormatted); //pass AVA element
                    if (ManageResult.inView) {
                        alwaysVisible = true;
                        containerElementIsFormatted = true
                    }

                    movePlayerTimes = ManageResult.movePlayerTimes;
                });

            }


        } else {
            if (typeof jQuery == "undefined") {
                SmartAva.utils.loadJsResources(SmartAva.config.js_dependencies); //LOAD JQUERY ONNLY
                setTimeout(function() {
                    SmartAva.init(container, Ava_conf);
                }, 200);
            }
        }
    }
}



SmartInphoto = {
    utils: {
        insertContainerOnImage: function(inphotoImg, element) {

            element.className += "sc_inphoto_container";
            //inphotoImg.appendChild(element);

            inphotoImg.parentNode.insertBefore(element, inphotoImg.nextSibling);

        },
        insertInphotoCssDependencies: function() {
            top.document.querySelector('head').insertAdjacentHTML("beforeend", "<style type='text/css'> .sc_inphoto_container{ position:absolute!important;z-index: 128362132;top:0;left:0;width:100%} </style>");
        },
        intxtEnd : function (){
            SmartInphoto.utils.removeCoverOnIntxtEnd();

        },
        removeCoverOnIntxtEnd : function (){
            if (top.document.getElementById("smartclip_inphoto_video_2-backdrop")){
                setTimeout(function() {
                        SmartInphoto.utils.removeCoverOnIntxtEnd()
                    }, 500);

            }else{
                if (top.document.getElementById("smartclip_inphoto_cover")) top.document.getElementById("smartclip_inphoto_cover").style.display = "none";
                if (top.document.getElementById("smartclip_inphoto_video")) top.document.getElementById("smartclip_inphoto_video").style.display = "none";
            }
        },
        removeCover : function(){

            if (top.document.getElementById("smartclip_inphoto_cover")) top.document.getElementById("smartclip_inphoto_cover").style.display = "none";
        },
        getFormatFromImage: function(img){


            if (!img.height || !img.width) return false;
            var margin = Math.round(img.width /8)
            //SQUARE
            if (img.height - img.width < margin && img.height - img.width >=0) return "SQUARE";
            if (img.width - img.height < margin && img.width - img.height >=0) return "square";
            //LONGHEIGHT
            if (img.height - img.width > margin ) return "LONG_HEIGHT";
            //LONGWIDTH
            if (img.width - img.height > margin ) return "LONG_WIDTH";
            //Pending validate min width

            return false;


        },
        loadInphotoDeviceConf: function() {
            MySmartclipConf = {
                inphoto: {
                    enabled: "null",
                    minWidth: "null",
                    ratio: "null", // 16/9 Please
                    impsPerPageLoaded: "null",
                    frequence: "null",
                    nonstop: "null",
                    skipOffset: "null",
                    skipText: "null",
                    single_tag: "null",
                    hardSkip: "null"
                }
            }
            if (SmartAva.utils.isMobile()) {
                MySmartclipConf.inphoto.enabled = top.Site_conf.inphoto.mobile.enabled;
                MySmartclipConf.inphoto.minWidth = top.Site_conf.inphoto.mobile.minWidth;
                MySmartclipConf.inphoto.ratio = top.Site_conf.inphoto.mobile.ratio;
                MySmartclipConf.inphoto.impsPerPageLoaded = top.Site_conf.inphoto.mobile.impsPerPageLoaded;
                MySmartclipConf.inphoto.frequence = top.Site_conf.inphoto.mobile.frequence;
                MySmartclipConf.inphoto.nonstop = top.Site_conf.inphoto.mobile.nonstop;
                MySmartclipConf.inphoto.skipOffset = top.Site_conf.inphoto.mobile.skipOffset;
                MySmartclipConf.inphoto.skipText = top.Site_conf.inphoto.mobile.skipText;
                MySmartclipConf.inphoto.smaracd_player = top.Site_conf.inphoto.mobile.smaracd_player;
                MySmartclipConf.inphoto.nocover = top.Site_conf.inphoto.mobile.nocover;
                MySmartclipConf.inphoto.single_tag = top.Site_conf.inphoto.mobile.single_tag;
                MySmartclipConf.inphoto.hardSkip = top.Site_conf.inphoto.mobile.hardSkip;
            } else {
                MySmartclipConf.inphoto.enabled = top.Site_conf.inphoto.web.enabled;
                MySmartclipConf.inphoto.minWidth = top.Site_conf.inphoto.web.minWidth;
                MySmartclipConf.inphoto.ratio = top.Site_conf.inphoto.web.ratio;
                MySmartclipConf.inphoto.impsPerPageLoaded = top.Site_conf.inphoto.web.impsPerPageLoaded;
                MySmartclipConf.inphoto.frequence = top.Site_conf.inphoto.web.frequence;
                MySmartclipConf.inphoto.nonstop = top.Site_conf.inphoto.web.nonstop;
                MySmartclipConf.inphoto.skipOffset = top.Site_conf.inphoto.web.skipOffset;
                MySmartclipConf.inphoto.skipText = top.Site_conf.inphoto.web.skipText;
                MySmartclipConf.inphoto.smaracd_player = top.Site_conf.inphoto.web.smaracd_player;
                MySmartclipConf.inphoto.nocover = top.Site_conf.inphoto.web.nocover;
                MySmartclipConf.inphoto.single_tag = top.Site_conf.inphoto.web.single_tag;
                MySmartclipConf.inphoto.hardSkip = top.Site_conf.inphoto.web.hardSkip;
            }
        },
        checkImg: function(img) {
            var result = false
            if (!img.height || !img.width) return false;
            var myratio = Math.round(img.height * 16 / 9);
            var imgwidth = img.width;
            if (myratio - imgwidth == 0 || myratio - imgwidth == 1 || myratio - imgwidth == -1 || myratio - imgwidth == -2 || myratio - imgwidth == 2 || myratio - imgwidth == -3 || myratio - imgwidth == 3 || myratio - imgwidth == -4 || myratio - imgwidth == 4 || myratio - imgwidth == -5 || myratio - imgwidth == 5 || myratio - imgwidth == -6 || myratio - imgwidth == 6) { //is 16/9 and fits to min width? TODO REFACT no mires JM
                if (imgwidth >= MySmartclipConf.inphoto.minWidth) result = true
            }
            return result;


        },
        getSuitableImg: function() {
            var allImgs = top.document.getElementsByTagName("img");
            for (i = 0; i < allImgs.length; i++) {
                if (SmartInphoto.utils.checkImg(allImgs[i])) {
                    return allImgs[i];
                }
            }


        },
        getElementPosition : function (element){


                if (typeof window.getComputedStyle(element).position != "undefined"){

                        if (window.getComputedStyle(element).position == "relative" || window.getComputedStyle(element.parentNode.parentNode).position =="relative" || window.getComputedStyle(element.parentNode).position == "relative" || window.getComputedStyle(element.parentNode.parentNode.parentNode).position =="relative"){

                            return true
                        }else{
                            return false
                        }
                        //if (element.parentNode.style.position == 'fixed' || element.parentNode.style.position == 'absolute' || element.parentNode.style.position == 'static' || element.parentNode.style.position == 'sticky') return false;

                }else{
                    return false
                }

        },
        getElementMargin: function (element){
            var p = document.getElementById("target");
            var style = p.currentStyle || window.getComputedStyle(p);

            display("Current marginTop: " + style.marginTop);
        },
        getRestOfSuitableImg: function(){
            var result = {};
            var allImgs = top.document.getElementsByTagName("img");
            for (i = 0; i < allImgs.length; i++) {

                //allImgs[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.position
                if (allImgs[i].width >= MySmartclipConf.inphoto.minWidth &&allImgs[i].width < allImgs[i].height * 4 && SmartInphoto.utils.getElementPosition(allImgs[i])){

                    if (SmartInphoto.utils.getFormatFromImage(allImgs[i]) == "SQUARE") {
                        result.img = allImgs[i]
                        result.format = "SQUARE";
                        return result;
                    }
                    if (SmartInphoto.utils.getFormatFromImage(allImgs[i]) == "LONG_HEIGHT") {
                        result.img = allImgs[i]
                        result.format = "LONG_HEIGHT";
                        return result;
                    }
                    if (SmartInphoto.utils.getFormatFromImage(allImgs[i]) == "LONG_WIDTH") {
                        result.img = allImgs[i]
                        result.format = "LONG_WIDTH";
                        return result;
                    }
                }
            }
            return result;
        },
        coverImg (img,opc){

            var inphotoElementName = "smartclip_inphoto_cover";
            var width = Number(window.getComputedStyle(img).width.split("px")[0]) + 0.01 + "px";
            var inphotoElement = '<div id="' + inphotoElementName + '" style="background-color: white;opacity: '+opc + ';position : absolute;top:0;left:0;z-index:100;width:'+width+ ';padding:0;transition: height 1s;"></div>';
            //Insert this element on the photo.

            top.document.body.insertAdjacentHTML('beforeend', inphotoElement);
            var element = top.document.getElementById(inphotoElementName);
            img.parentNode.insertBefore(element, img.nextSibling);
            element.style.height = window.getComputedStyle(img).height ;
            element.style.margin= window.getComputedStyle(img).margin;


        },
        startRestPhotos(img,format,container){
            var padding_left = 0;
            var cont_width,cont_height;
            var padding_top = 0;
            img_width = img.width;
            img_height = img.height;
            format = "SQUARE"; //Forzed to use only square, it´s working awesome
            switch (format) {
                //width = height *16/9
                //height = width/1.7777777777777777
                case "SQUARE":

                    padding_left = img.width/10/4;
                    cont_width = img_width -padding_left * 2;
                    cont_height = cont_width /1.7777777777777777;
                    padding_top = (img_height - cont_height)/2;
                    break;

                case "LONG_WIDTH":
                    cont_height = img_height;
                    cont_width = cont_height * 16/9;
                    padding_left = (img_width - cont_width)/ 2;
                    break;

                case "LONG_HEIGHT":
                    cont_width = img_width;
                    cont_height = cont_width/1.7777777777777777;
                    padding_left = 0;
                    padding_top = (img_height - cont_height) / 2;
                    break

                default:
                    console.log("INPHOTO: something went wrong");
                    break;
            }
            if (padding_left < 2) {
                padding_left =0;
            }
            if (padding_top <2) {
                padding_top =0;
            }
            var inphotoElementName = "smartclip_inphoto_video_2";
            var inphotoElement = '<div id="' + inphotoElementName + '" style="left:' + padding_left + 'px;top:'+ padding_top + 'px;position : absolute!important;z-index:1000;width:'+cont_width+'px;transition: height 1s;"></div>';
            //Insert this element on the photo.
            container.style.position="absolute";
            container.style.top=0;
            img.parentNode.insertBefore(container, img.nextSibling);
            container.insertAdjacentHTML('beforeend', inphotoElement);
            var element = top.document.getElementById(inphotoElementName);
            element.style.margin = window.getComputedStyle(img).margin;
            console.log("start_inphoto");
            SmartIntxt.init();
            if (SmartAva.utils.isMobile()){ //WORKARROUND FOR VIDEOLOGY
                if (iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,!iOS){
                    setTimeout(function() {
                                VideoManager.ava.videologyFix(0,SmartIntxt.config.elementContainer);
                    }, 2000);
                }
            }
            //img.parentNode.insertBefore(element, img.nextSibling);



        },
        saveIntextConf: function() {

            if (SmartAva.utils.isMobile()) {
                var Backup = {
                    skipOffset: top.Site_conf.ava_desk.skipOffset,
                    skipText: top.Site_conf.ava_desk.skipText,
                    smaracd_player: SmartIntxt.config.playerHTML5,
                    elementContainer: SmartIntxt.config.elementContainer
                };

                top.Site_conf.ava_desk.skipOffset = top.Site_conf.inphoto.mobile.skipOffset;
                top.Site_conf.ava_desk.skipText = top.Site_conf.inphoto.mobile.skipText;
                SmartIntxt.config.playerHTML5 = top.Site_conf.inphoto.mobile.smaracd_player;

            } else {
                var Backup = { //need to change this when configs work in mobile
                    skipOffset: top.Site_conf.inphoto.web.skipOffset,
                    skipText: top.Site_conf.inphoto.web.skipText,
                    smaracd_player: SmartIntxt.config.playerHTML5,
                    elementContainer: SmartIntxt.config.elementContainer
                };

                top.Site_conf.ava_desk.skipOffset = top.Site_conf.inphoto.web.skipOffset;
                top.Site_conf.ava_desk.skipText = top.Site_conf.inphoto.web.skipText;
                SmartIntxt.config.playerHTML5 = top.Site_conf.inphoto.web.smaracd_player;
            }
            return Backup;
        },
        restoreIntextConf: function(Backup) {
            top.Site_conf.ava_desk.skipOffset = Backup.skipOffset;
            top.Site_conf.ava_desk.skipText = Backup.skipText;
            SmartIntxt.config.playerHTML5 = Backup.smaracd_player;
            SmartIntxt.config.elementContainer = Backup.elementContainer;
        }

    },
    init: function() {
        var site_name = SmartIntxt.config.site_name;
                    var siteConfPath = "https://a482323.storage.oraclecloud.com/v1/Storage-a482323/smartclip-services/inphoto/";
                    var loader = "main.js";
                    var sc = document.createElement("SCRIPT");
                    sc.src = siteConfPath + loader;
                    sc.type = 'text/javascript';
                    sc.onload = sc.onreadystatechange = function() {
                        SC_inphoto_loader.config.site_name = site_name;
                        SC_inphoto_loader.init();
                    };
                    top.window.document.getElementsByTagName("head")[0].appendChild(sc);
    }

}

VideoManager = {
    ava: {
        videoAdStarted: function() {
            if (typeof firedDataPixels == "undefined") {
                VideoManager.ava.fireDataPixels("start");
                firedDataPixels = true;
            }
        },
        videoADEmpty: function() {
            if (typeof firedDataPixels == "undefined") {
                VideoManager.ava.fireDataPixels("noAd");
                firedDataPixels = true;
            }
            if (typeof top.__smxLogData !== "undefined") top.__smxLogData.isEmpty = true;
        },
        startCallback: function(container) {
            
            Site_conf = top.Site_conf;
            var Settings = VideoManager.ava.saveIntextConf();
            SmartIntxt.config.elementContainer = container
            SmartAva.utils.startSmartIntext(container)
            //SmartIntxt.init();
            try {
                initializeLogging();
            } catch(e) {
                // statements
                console.log(e);
            }

        },
        videologyFix : function (cont,elementContainer){
            if (cont <= 10000 ){ //firepixels data checks if video has started or vast was empty
                if (elementContainer.id == undefined){
                    var elementId = elementContainer;
                }else{
                    var elementId = elementContainer.id
                }
                if ( document.getElementById(elementId + "-frame") != null){
                    if (document.getElementById(elementId + "-frame").contentWindow.document.getElementById("sbs-ad-player") != null)
                    {
                        document.getElementById(elementId + "-frame").contentWindow.document.getElementById("sbs-ad-player").muted=true
                        console.log("FOUND VIDEOLOGY VPAID AND MUTED");
                    }
                    else
                    {
                        setTimeout(function() {
                                cont = cont + 100;
                                VideoManager.ava.videologyFix(cont,elementContainer);
                            }, 100);
                    }


                }else{
                     setTimeout(function() {
                                cont = cont + 100;
                                VideoManager.ava.videologyFix(cont,elementContainer);
                            }, 100);
                }
            }else{
                //console.log("Tired of waitting for videology");
            }
        },
        loadAvaConf: function() {
            if (typeof avaConfRequested == 'undefined') {
                SmartAva.utils.loadScript(SmartAva.config.siteConfPath + SmartIntxt.config.site_name + ".js"); //TODO link with smartclipConf files
                avaConfRequested = true;
            }

        },
        loadAvaConfDevice: function() {
            return top.Site_conf.ava[SmartAva.utils.isMobile() ? "mobile" : "web"]
        },
        fireDataPixels: function(event) {


            var pixels = VideoManager.ava.getDataPixels(event);
            SmartAva.utils.loadImgsPixels(pixels);





        },
        getDataPixels: function(event) {

            var bluekai_endpoint = SmartAva.config.bluekai_endpoint
            var playerId = VideoManager.ava.getIntxtPlayerId();

            //Exclude selected networks
            for (var  i = 0; i < SmartAva.config.exclude_network_pixels.length ; i ++){
                var parts = playerId.split(".");
                for (var e = 0; e< parts.length;e++){
                    if (parts[e].includes(SmartAva.config.exclude_network_pixels[i])) return [];
                }
            }
            var impPixels = SmartAva.config.redirect_impression_pixels;
            var noAdPixels = SmartAva.config.redirect_noAd_pixels;
            var pixels = [];

            switch (event) {
                case "start":
                    for (var index = 0; index < impPixels.length; ++index) {
                        pixels.push(SmartAva.config.oracle_pixel_endpoint + impPixels[index] + playerId);
                        pixels.push(bluekai_endpoint + playerId);
                    }
                    break;
                case "noAd":
                    for (var index = 0; index < noAdPixels.length; ++index) {
                        pixels.push(SmartAva.config.oracle_pixel_endpoint + noAdPixels[index] + playerId);
                    }
                    break;
                default:

            }

            return pixels;
        },
        getIntxtPlayerId: function() {
            var player_id = top.Site_conf.ava.web.smaracd_player;
            if (!traditionalIntext) {
                if (SmartAva.utils.isMobile()) {
                    player_id = top.Site_conf.ava.mobile.smaracd_player;
                }
            } else {
                player_id = SmartIntxt.config.playerHTML5;
            }
            return player_id;


        },
        saveIntextConf: function() {

            if (SmartAva.utils.isMobile()) {
                var Backup = {
                    skipOffset: top.Site_conf.ava_desk.skipOffset,
                    skipText: top.Site_conf.ava_desk.skipText,
                    smaracd_player: SmartIntxt.config.playerHTML5,
                    elementContainer: SmartIntxt.config.elementContainer
                };

                top.Site_conf.ava_desk.skipOffset = top.Site_conf.ava.mobile.skipOffset;
                top.Site_conf.ava_desk.skipText = top.Site_conf.ava.mobile.skipText;
                SmartIntxt.config.playerHTML5 = top.Site_conf.ava.mobile.smaracd_player;

            } else {
                var Backup = { //need to change this when configs work in mobile
                    skipOffset: top.Site_conf.ava.web.skipOffset,
                    skipText: top.Site_conf.ava.web.skipText,
                    smaracd_player: SmartIntxt.config.playerHTML5,
                    elementContainer: SmartIntxt.config.elementContainer
                };

                top.Site_conf.ava_desk.skipOffset = top.Site_conf.ava.web.skipOffset;
                top.Site_conf.ava_desk.skipText = top.Site_conf.ava.web.skipText;
                SmartIntxt.config.playerHTML5 = top.Site_conf.ava.web.smaracd_player;
            }
            return Backup;
        },
        restoreIntextConf: function(Backup) {
            top.Site_conf.ava_desk.skipOffset = Backup.skipOffset;
            top.Site_conf.ava_desk.skipText = Backup.skipText;
            SmartIntxt.config.playerHTML5 = Backup.smaracd_player;
            SmartIntxt.config.elementContainer = Backup.elementContainer;
        },
        customPositionIntext: function() {
            if (SmartIntxt.config.customLocation) {
                SmartIntxt.config.positioning(); //insert intext contaiºer element
            }
        },
        executeIntxtContainerPositioning: function() {
            VideoManager.ava.customPositionIntext();

        },
        manageFrequencies: function(Ava_conf) {
            var freq_cookie_name = "sc-ava-freq-" + SmartIntxt.config.site_name;
            var cookie_value = VideoManager.ava.readCookie(freq_cookie_name);
            var init_value = 1;
            var result = true;
            if (Ava_conf.freq != 0) {

                if (cookie_value) {
                    if (cookie_value > Ava_conf.freq) {
                        result = false;
                    } else {
                        VideoManager.ava.createCookie(freq_cookie_name, parseInt(cookie_value) + 1, 1)
                    }
                } else {
                    VideoManager.ava.createCookie(freq_cookie_name, init_value, 1)
                }
            }
            return result;
        },
        createCookie: function(name, value, hours) {
            var expires = "";
            if (hours) {
                var date = new Date();
                hours = hours * 1000;
                date.setTime(date.getTime() + (3600 * hours));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        },
        readCookie: function(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        },
        eraseCookie: function(name) {
            VideoManager.ava.createCookie(name, "", -1);
        },
        discardAva: function(Ava_conf) {
            var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            if (iOS) {
                return true;
            }
            var allow_ava = VideoManager.ava.manageFrequencies(Ava_conf);
            if (!allow_ava) {
                return true;
            }
            if (Ava_conf.enabled == false) {
                return true;
            }
            return false;

        },
        getElementsCrossFrames: function(selector) {
            var result = document.querySelectorAll(selector);
            if (result.length == 0) result = top.document.querySelectorAll(selector);
            return result;
        },
        getElementIdCrossFrames: function(id) {
            var result = document.getElementById(id);
            if (!result) result = top.document.getElementById(id);
            return result;
        },
        createAvaContainerAndStart: function(Ava_conf) {
            if (SmartIntxt.config.elementContainer == "") {
                var elementContainer = VideoManager.ava.getContainerElement();
                if (typeof elementContainer != "undefined") { //Create an element on Document where element locator did.... Then we use it as AVA container
                    elementContainer.innerHTML = "";
                    elementContainer.style = "";
                    var mandanga = '<div id="sc_smartAva"></div>';
                    elementContainer.insertAdjacentHTML("beforebegin", mandanga);
                    SmartIntxt.config.elementContainer = "sc_smartAva";

                    elementContainer = VideoManager.ava.getElementIdCrossFrames("sc_smartAva");

                    delete SmartPlay;

                } else {
                    setTimeout(function() {
                        VideoManager.ava.createAvaContainerAndStart(Ava_conf);
                    }, 200);
                }
            } else {
                elementContainer = VideoManager.ava.getElementIdCrossFrames(SmartIntxt.config.elementContainer);

                //TODO Test pretty well elementcontainer name is returned

            }
            if (typeof elementContainer != "undefined") {
                VideoManager.ava.ready(elementContainer, Ava_conf);
            } else {

            }

        },
        getContainerElement: function() {

            var a = VideoManager.ava.getElementsCrossFrames("div[id*=sc-]");
            var result;

            a.forEach(function(a) {
                if (a.id.indexOf("-backdrop") >= 0) {
                    result = a.parentElement;

                }
            });
            return result;
        },
        loadCssResources: function(Ava_conf) {
            SmartAva.utils.createcssClasses(Ava_conf);
            //console.log(Ava_conf);
            for (var index = 0; index < Ava_conf.css.length; ++index) {
                SmartAva.utils.insertCss("SmartAvaCss_" + index, Ava_conf.css[index]);
            }
        },
        prepareDocumentForAva: function(Ava_conf) {
            VideoManager.ava.loadCssResources(Ava_conf);
            if (SmartIntxt.config.elementContainer == "") {
                SmartIntxt.init(); //Init intext so elements are included on page
            }
        },
        ready: function(containerName, Ava_conf) {

            top.avaContainerElement = containerName;
            SmartAva.init(containerName, Ava_conf);
        },
        init: function() {
            top.SmartAva = SmartAva; // creating global object for external connections
            if (typeof avaConfRequested == 'undefined' || typeof top.Site_conf == 'undefined') { //conf is loadeed?
                VideoManager.ava.loadAvaConf();
                setTimeout(function() {
                    VideoManager.ava.init()
                }, 200);

            } else {

                var Ava_conf = VideoManager.ava.loadAvaConfDevice();
                Site_conf = top.Site_conf;
                VideoManager.ava.executeIntxtContainerPositioning();
                if (VideoManager.ava.discardAva(Ava_conf)) { //no Ava, regular
                    Site_conf = top.Site_conf;
                    SmartIntxt.init();
                    traditionalIntext = true;
                    if (SmartAva.utils.isMobile()){ //WORKARROUND FOR VIDEOLOGY
                        if (iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,!iOS){
                            setTimeout(function() {
                                VideoManager.ava.videologyFix(0,SmartIntxt.config.elementContainer);
                            }, 2000);
                        }

                    }

                } else {
                    traditionalIntext = false
                    VideoManager.ava.prepareDocumentForAva(Ava_conf);
                    VideoManager.ava.createAvaContainerAndStart(Ava_conf);
                    if (SmartAva.utils.isMobile()){ //WORKARROUND FOR VIDEOLOGY
                        if (iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,!iOS){
                            setTimeout(function() {
                                VideoManager.ava.videologyFix(0,SmartIntxt.config.elementContainer);
                            }, 2000);
                        }
                    }

                }




            }

        }

    },
    inphoto: {
        utils: {

            prepareInphotoContainer: function() {
                var inphotoElementName = "smartclip_inphoto_video";
                var inphotoElement = '<div id="' + inphotoElementName + '"></div>';
                top.document.body.insertAdjacentHTML('beforeend', inphotoElement);
                return top.document.getElementById(inphotoElementName);
            }
        },
        init: function() {
            top.SmartInphoto = SmartInphoto;
            if (typeof top.Site_conf == 'undefined') {
                if (typeof loaded_conf_flag == 'undefined') {
                    SmartAva.utils.loadScript(SmartAva.config.siteConfPath + SmartIntxt.config.site_name + ".js"); //TODO link with smartclipConf files
                    loaded_conf_flag = true;
                }
                setTimeout(function() {
                    VideoManager.inphoto.init()
                }, 500);
            } else {
                SmartInphoto.utils.loadInphotoDeviceConf();
                if (MySmartclipConf.inphoto.enabled && !MySmartclipConf.inphoto.single_tag) {
                    SmartInphoto.init();
                }
            }
        }
    }
}

VideoManager.ava.init();
VideoManager.inphoto.init();















var SMCV = SMCV || {}
SMCV.isset = function (l) {
    return typeof l != "undefined";
};

SMCV.browserInfo=function () {
    var t=true;
    var ua=window.navigator.userAgent;
    var r=function(rr) {return rr.test(ua);}
    function getMatch(regex,pos)
    {
        var match = ua.match(regex);
        return (match && match.length > 1 && match[pos]) || '';
    }
    function getFirst(regex) {return getMatch(regex,1);}
    function getSecond(regex) {return getMatch(regex,2);}

    var iosdevice = getFirst(/(ipod|iphone|ipad)/i).toLowerCase()
        , android = r(/android/i)
        , chromeos = r(/CrOS/)
        , webos = r(/(web|hpw)os/i)
        , windowsphone = r(/windows phone/i)
        , windows = !windowsphone && r(/windows/i)
        , mac = !iosdevice && r(/macintosh/i)
        , linux = !android &&  !webos && r(/linux/i)
        , edgeVersion = getSecond(/edg([ea]|ios)\/(\d+(\.\d+)?)/i)
        , versionIdentifier = getFirst(/version\/(\d+(\.\d+)?)/i)
        , tablet = r(/tablet/i) && !r(/tablet pc/i)
        , mobile = !tablet && r(/[^-]mobi/i)
        , xbox = r(/xbox/i),
        name=null,version=null,osname=null,chromeos=false,device="desktop",blackberry=false;

    if (r(/opera/i)) {
        name='Opera'; version= versionIdentifier || getFirst(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
    } else if (r(/opr\/|opios/i)) {
        name='Opera';version=getFirst(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || versionIdentifier;
    }
    else if (r(/SamsungBrowser/i)) {
        name='Samsung Internet for Android';
        version=versionIdentifier || getFirst(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
    }
    else if (windowsphone) {
        name='Windows Phone';
        osname='Windows Phone';
        if (edgeVersion)
            version = edgeVersion;
        else
            version = getFirst(/iemobile\/(\d+(\.\d+)?)/i)
    }
    else if (r(/msie|trident/i)) {
        name= 'Internet Explorer';
        version=getFirst(/(?:msie |rv:)(\d+(\.\d+)?)/i)
    } else if (chromeos) {
        name='Chrome'
        osname= 'Chrome OS';
        chromeos= true;
        version= getFirst(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
    } else if (r(/edg([ea]|ios)/i)) {
        name='Microsoft Edge';
        version= edgeVersion;
    }
    else if (r(/firefox|iceweasel|fxios/i)) {
        name='Firefox';
        version= getFirst(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i);
        if (/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(ua))
            osname = 'Firefox OS'
    }
    else if (r(/blackberry|\bbb\d+/i) || r(/rim\stablet/i)) {
        name= 'BlackBerry';
        osname='BlackBerry OS';
        blackberry=t;
        version= versionIdentifier || getFirst(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
    }
    else if (webos) {
        name= 'WebOS';
        osname='WebOS';
        version=versionIdentifier || getFirst(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i);
    }
    else if (r(/chromium/i)) {
        name='Chromium';
        chromium= t;
        version=getFirst(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || versionIdentifier;
    }
    else if (r(/chrome|crios|crmo/i)) {
        name= 'Chrome';
        version= getFirst(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i);
    }
    else if (android) {
        name='Android';
        version= versionIdentifier;
    }
    else if (r(/safari|applewebkit/i)) {
        name= 'Safari';
        safari= t;
        if (versionIdentifier) {
            version = versionIdentifier
        }
    }
    else if (iosdevice) {
        name = iosdevice == 'iphone' ? 'iPhone' : iosdevice == 'ipad' ? 'iPad' : 'iPod';
        if (versionIdentifier) {
            version = versionIdentifier
        }
    }
    else if(r(/googlebot/i)) {
        name= 'Googlebot';
        googlebot= t;
        version= getFirst(/googlebot\/(\d+(\.\d+))/i) || versionIdentifier;
    }
    else {
        name= getFirst(/^(.*)\/(.*) /),
            version= getSecond(/^(.*)\/(.*) /)
    }

    // set OS flags for platforms that have multiple browsers
    if (!windowsphone && android)
        osname = 'Android';
    else if (!windowsphone && iosdevice)
        osname = 'iOS';
    else if (mac)
        osname = 'macOS';
    else if (xbox)
        osname = 'Xbox';
    else if (windows)
        osname = 'Windows';
    else if (linux)
        osname = 'Linux';


    function getWindowsVersion (s) {

        var tt={
            'NT': 'NT',
            'XP': 'XP',
            'NT 5.0': '2000',
            'NT 5.1': 'XP',
            'NT 5.2': '2003',
            'NT 6.0': 'Vista',
            'NT 6.1': '7',
            'NT 6.2': '8',
            'NT 6.3': '8.1',
            'NT 10.0': '10'
        };
        return typeof tt[s]=="undefined"?null:tt[s];
    }

    // OS version extraction
    var osVersion = '';
    if (windows) {
        osVersion = getWindowsVersion(getFirst(/Windows ((NT|XP)( \d\d?.\d)?)/i))
    } else if (windowsphone) {
        osVersion = getFirst(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i);
    } else if (mac) {
        osVersion = getFirst(/Mac OS X (\d+([_\.\s]\d+)*)/i);
        osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (iosdevice) {
        osVersion = getFirst(/os (\d+([_\s]\d+)*) like mac os x/i);
        osVersion = osVersion.replace(/[_\s]/g, '.');
    } else if (android) {
        osVersion = getFirst(/android[ \/-](\d+(\.\d+)*)/i);
    } else if (blackberry) {
        osVersion = getFirst(/rim\stablet\sos\s(\d+(\.\d+)*)/i);
    }

    // device type extraction
    var osMajorVersion = !windows && osVersion.split('.')[0];
    if(!osMajorVersion)osMajorVersion="";
    if (
        tablet
        || iosdevice == 'ipad'
        || (android && (osMajorVersion == 3 || (osMajorVersion >= 4 && !mobile)))
    ) {
        device="tablet";
    } else if (
        mobile
        || iosdevice == 'iphone'
        || iosdevice == 'ipod'
        || android
        || blackberry
    ) {
        device="mobile";
    }

    return {
        name:name,version:version,osName:osname,osVersion:osVersion,osMajorVersion:osMajorVersion,device:device
    }
}

SMCV.nInfo=function()
{

    var isInTop=false;
    var topAccess=false;
    var origin=null;
    var originLength=0;

    if(window==top) {
        isInTop == true;
        topAccess=true;
        origin=window.origin;
        originLength=0;
    }
    else {
        isInTop=false;
        if(window.location.ancestorOrigins) {
            originLength = window.location.ancestorOrigins.length;
            origin=window.location.ancestorOrigins[0];
        }
        try{
            var loc=top.window.location;
            topAccess=true;
        }catch(e)
        {
            topAccess=false;
        }
    }

    this.i={
        isInTop:isInTop,
        topAccess:topAccess,
        origin:origin,
        originLength:originLength,
        pixelsScrolled:null,
        navigationStart:null,
        bodyWidth:null,
        bodyHeight:null,
        navigatorWidth:window.innerWidth,
        navigatorHeight:window.innerHeight,
        screenWidth:window.screen.width,
        screenHeight:window.screen.height,
        processorSpeed:null,
        navigationType:null,
        loadTimerScore:null,
        networkSpeed:null,
        viewableTime0:0,
        viewableTime20:0,
        viewableTime40:0,
        viewableTime60:0,
        viewableTime80:0,
        firstScroll:null,
        maxScroll:0,
        referer:null,
        protocol:null,
        url:null,
        domain:null,
        path1:null,
        path2:null,
        pageViewStart:null,
        pageViewTime:null,
        nImages:0,
        nScripts:0,
        nVideos:0,
        browserName:'',
        browserVersion:'',
        osName:'',
        osVersion:'',
        device:'desktop',
        pageLoadTime:null,
        pageReadyTime:null,
        gotPageReady:false,
        gotPageLoad:false,
        headLength:null,
        bodyLength:null,
        pageLength:null,
        nIframes:null,
        nRemoteScripts:null,
        netInfoDownlink:null,
        netInfoEffType:null,
        netInfoRtt:null,
        netInfoType:null,
        netInfoDownlinkMax:null,
        nPageHides:0,
        pageShownPercentage:0,
        refererDomain:null,
        timestamp:(new Date()).getTime()
    };
    this.hiddenCounter=0;
    this.lastHide=0;
    this.accumHidden=0;


    if (window.performance) {
        this.i.navigationStart=window.performance.timing.navigationStart;
        var j=this.i;
        var m=this;
        var viewableZones=[0,0,0,0,0];
        var reference=window.performance.now();
        var lastOffset=null;
        getNetworkInfo=function(){

        }

        recalculateScrollTimes=function(){

            var w=window;
            while(w!=w.parent)
                w=w.parent;

            var r2=window.performance.now();
            var diff=r2-reference;
            reference=r2;
            var scTop=(typeof w.pageYOffset!="undefined")?w.pageYOffset:sy= r.scrollTop || b.scrollTop || 0;
            if(lastOffset==null) {
                lastOffset = scTop;
                j.pixelsScrolled=0;
            }
            j.pixelsScrolled+=Math.abs(lastOffset-scTop);
            lastOffset=scTop;
            if(j.maxScroll < scTop)
                j.maxScroll=scTop;



            var scBottom=scTop+w.innerHeight;
            var step=w.document.body.scrollHeight/5;
            var cStep=0;
            for(var k=0;k<5;k++,cStep+=step)
            {
                if(cStep+step < scTop)
                    continue;
                if(cStep > scBottom)
                    continue;
                var top=Math.max(scTop,cStep);
                var bottom=Math.min(scBottom,cStep+step);
                var zoneBound=bottom-top;
                var percent=zoneBound/w.innerHeight;
                viewableZones[k]+=percent*diff;
            }
            var totalTime=m.relativeTimestamp();

            j.viewableTime0=viewableZones[0]/totalTime;
            j.viewableTime20=viewableZones[1]/totalTime;
            j.viewableTime40=viewableZones[2]/totalTime;
            j.viewableTime60=viewableZones[3]/totalTime;
            j.viewableTime80=viewableZones[4]/totalTime;
        };

        var fns=[
            function(){
                if(SMCV.isset(navigator.connection))
                {
                    var fields=["downlink","effectiveType","rtt","type","downlinkMax"];
                    var variables=["netInfoDownlink","netInfoEffType","netInfoRtt","netInfoType","netInfoDownlinkMax"];
                    for(var k=0;k<fields.length;k++)
                    {
                        var cV=fields[k];
                        if(SMCV.isset(navigator.connection[cV]))
                            j[variables[k]]=navigator.connection[cV];
                    }
                    if(isNaN(parseFloat(j.netInfoDownlink)))
                        j.netInfoDownlink=0;
                }

            },
            function(){
                var t1 = window.performance.now();
                for (var t = 0; t < 20000; t++);
                j.processorSpeed = (window.performance.now() - t1);
            },
            function(){
                switch(window.performance.navigation.type)
                {
                    case 0:{j.navigationType="link";}break;
                    case 1:{j.navigationType="reload";}break;
                    case 2:{j.navigationType="back";}break;
                    default:{j.navigationType="unknown";}break;
                }
            },
            function()
            {
                var imageAddr = "https://a482323.storage.oraclecloud.com/v1/Storage-a482323/smartclip-services/HeaderBidding/js/spt.png";
                var downloadSize = 3160; //bytes
                var startTime, downTime;
                var download = new Image();
                download.onload = function () {
                    j.networkSpeed=window.performance.now()-startTime;
                }
                var cacheBuster = "?nnn=" + (new Date()).getTime();
                download.src = imageAddr + cacheBuster;
                startTime=window.performance.now();
            },
            function()
            {
                var d= document, r= d.documentElement, b= d.body;
                window.addEventListener("scroll",function(e) {
                    if(j.firstScroll==null)
                        j.firstScroll=m.relativeTimestamp();
                    recalculateScrollTimes();
                });
            },
            function()
            {
                var bdata=SMCV.browserInfo();
                j.browserName=bdata.name;
                j.browserVersion=bdata.version;
                j.osName=bdata.osName;
                j.osVersion=bdata.osVersion;
                j.device=bdata.device;
            },
            function()
            {
                j.domain=window.location.host;
                var a=document.createElement("a");
                a.href=document.location;
                j.referer=document.referrer;
                j.protocol=a.protocol;
                j.url=document.location.href;
                a.href=j.referer;
                j.refererDomain=a.hostname;
                var path=a.pathname.split("/");
                if(path.length>0)
                {
                    if(path[0]=="")
                        path.shift();
                    if(path.length > 0)
                    {
                        j.path1=path.shift();
                        if(j.path1=="")
                            j.path1=null;
                        if(path.length > 0)
                            j.path2=path.shift();
                    }
                }
            },
            function()
            {
                var counter=0;
                var timer=null;
                var start=performance.now();
                var f=function(){counter++;if(counter==5){j.loadTimerScore=(performance.now()-start)-5*100;clearInterval(timer)}}
                timer=setInterval(f,100);
            }
        ];
        for(var k=0;k<fns.length;k++) {
            try {
                fns[k].apply(this);
            }catch(e){};
        }
    }
    this.relativeTimestamp=function()
    {
        return (new Date()).getTime() - window.performance.timing.navigationStart;
    }
    this.onLoad=function()
    {
        try {
            w=window;
            while(w!=w.parent)
                w=w.parent;

            this.i.gotPageLoad=true;
            this.i.pageLoadTime=this.relativeTimestamp();
            this.i.bodyWidth=w.document.body.scrollWidth;
            this.i.bodyHeight=w.document.body.scrollHeight;
            this.i.nScripts=w.document.getElementsByTagName("script").length;
            this.i.nImages=w.document.getElementsByTagName("img").length;
            this.i.nVideos=w.document.getElementsByTagName('video').length;
            this.i.nIframes=w.document.getElementsByTagName('iframe').length;
            if(w.document.querySelector)
            {
                this.i.nRemoteScripts=w.document.querySelectorAll("script[src]").length;
            }

            this.i.headLength=(w.document.head && w.document.head.innerHTML)?w.document.head.innerHTML.length:0;
            this.i.bodyLength=(w.document.body && w.document.body.innerHTML)?w.document.body.innerHTML.length:0;
            this.i.pageLength=this.i.headLength+this.i.bodyLength;
        }catch(e)
        {

        }
    }
    this.onReady=function()
    {
        try{
            this.i.gotPageReady=true;
            this.i.pageReadyTime=this.relativeTimestamp();
        }catch(e){}
    }

    this.onUnload=function()
    {
        try {
            recalculateScrollTimes();
            this.i.pageViewStart=window.performance.timing.navigationStart;
            this.i.pageViewTime=(new Date()).getTime() - this.i.pageViewStart;
            this.updagePageShownPercentage();
        }catch(e)
        {

        }
    }
    this.updatePageShownPercentage=function()
    {
        if(this.lastHide==0)
            this.i.pageShownPercentage=1;
        else
            this.i.pageShownPercentage=1-(this.accumHidden/this.relativeTimestamp());
    }
    this.onPageShow=function()
    {
        if(this.hiddenCounter == 0)
            return;
        this.accumHidden+=this.relativeTimestamp()-this.lastHide;
        this.updatePageShownPercentage();
    }
    this.onPageHide=function()
    {
        this.i.nPageHides++;
        this.updatePageShownPercentage();
        this.lastHide=this.relativeTimestamp();
    }
};

SMCV.Scheduler = function () {

    this.listenerCallbacks={};
    this.scrollListeners = [];
    this.isReady = false;
    this.isLoaded = false;
    var m = this;
    var tCallback = function (event) {

        if (typeof m.listenerCallbacks[event] == "undefined")
            return;
        m.listenerCallbacks[event].forEach(function(f){f.apply(null,[event])});
    };
    var loadCallback = function () {
        tCallback("LOAD");
    };
    var readyCallback = function () {
        tCallback("READY");
    };
    var isUnloaded=false;
    var unloadCallback=function(){
        if(isUnloaded)return;
        tCallback("UNLOAD");
        isUnloaded=true;
    };


    if (document.addEventListener) {
        // first choice is DOMContentLoaded event
        document.addEventListener("DOMContentLoaded", readyCallback, false);
        // backup is window load event
        window.addEventListener("load", loadCallback, false);
        top.addEventListener('beforeunload', unloadCallback,false);
        top.addEventListener('unload', unloadCallback,false);
        var hidden = null, visibilityChange;
        if (SMCV.isset(document.hidden)) { // Opera 12.10 and Firefox 18 and later support
            hidden = "hidden";
            visibilityChange = "visibilitychange";
        } else if (SMCV.isset(document.msHidden)) {
            hidden = "msHidden";
            visibilityChange = "msvisibilitychange";
        } else if (SMCV.isset(document.webkitHidden)) {
            hidden = "webkitHidden";
            visibilityChange = "webkitvisibilitychange";
        }
        var w=null;
        try
        {
            w=top;
            if (hidden != null) {
                var currentState=document[hidden];
                SMCV.activeTab = !document[hidden];
                function handleVisibilityChange() {
                    if(document[hidden]!=currentState) {
                        currentState=document[hidden];
                        ev = document[hidden] ? "PAGEHIDE" : "PAGESHOW";
                        m.fire(ev);
                    }
                }
                top.window.document.addEventListener(visibilityChange, handleVisibilityChange, false);
            }

            if('onpagehide' in top)
                top.addEventListener('pagehide',function(){m.fire("PAGEHIDE");});
            if('onpageshow' in top )
                top.addEventListener('pageshow',function(){m.fire("PAGESHOW");});

        }
        catch(e)
        {

        }



    } else {
        // must be IE
        document.attachEvent("onreadystatechange", readyCallback);
        window.attachEvent("onload", loadCallback);
    }
}
SMCV.Scheduler.prototype.schedule = function (spec,cb) {

    if (SMCV.isset(spec.when)) {
        if(!SMCV.isset(this.listenerCallbacks[spec.when]))
            this.listenerCallbacks[spec.when]=[];
        this.listenerCallbacks[spec.when].push(cb);
    }
    if(SMCV.isset(spec.every))
    {
        if(!SMCV.isset(this.listenerCallbacks[spec.every]))
            this.listenerCallbacks[spec.every]=[];
        this.listenerCallbacks[spec.every].push(cb);
    }
};
SMCV.Scheduler.prototype.fire = function (ev) {
    if(SMCV.isset(this.listenerCallbacks[ev]))
        this.listenerCallbacks[ev].map(function(f){f.apply()});
};

try {
    SMCV.scheduler = new SMCV.Scheduler();
}
catch(e)
{}

var bInfo=new SMCV.nInfo();



__smxDataSent = false;
__smxLogData = null;
var SmxSender = function() {
    if (__smxDataSent == true) {
        __smxLogData = null;
        return;
    }
    this.bInfo=bInfo;
    this.data = null;
    __smxLogData=[];
    var m=this;
    this.wasHidden=false;
    SMCV.scheduler.schedule({when:"READY"},function(){bInfo.onReady()});
    SMCV.scheduler.schedule({when:"LOAD"},function(){bInfo.onLoad()});
    SMCV.scheduler.schedule({when:"UNLOAD"},function(){bInfo.onUnload();m.sendTimings(true);});
    SMCV.scheduler.schedule({every:"PAGEHIDE"},function(){m.wasHidden=true;bInfo.onPageHide();m.sendTimings();});
    SMCV.scheduler.schedule({every:"PAGESHOW"},function(){if(!m.wasHidden){return;}m.wasHidden=false;bInfo.onPageShow();m.sendTimings();});

    this.sendTimings=function()
    {
		if((new Date()).getTime()%10!==0)
			return;
		if(!this.data.requested && this.data.error=="")
			return;
		
		if(VideoManager && VideoManager.ava)
			this.data.playerId=VideoManager.ava.getIntxtPlayerId();
		
        if(this.data)
            __smxLogData.push(this.data);
		
        var d=this.bInfo.i;
        for(var j in __smxLogData) {
            for (var k in d)
                __smxLogData[j][k] = d[k];
        }

        __smxDataSent = true;
        var logUrl = "https://stats.smartclip-services.com:8889/smx5.php";
        var allData={data:__smxLogData};
        if (navigator.sendBeacon) {
            navigator.sendBeacon(logUrl, JSON.stringify(allData));
        } else {
            var client = new XMLHttpRequest();
            client.open("POST", logUrl, false);
            client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            client.send(JSON.stringify(allData));
        }
        //__smxLogData=[];
        //this.data=null;
    }

    this.setupCallbacks=function()
    {
        if(this.data)
            __smxLogData.push(this.data);
        var _id=(function() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        })();

        this.data= {
            _id:_id,
            initDate:(new Date()).getTime(),
            requested: false,
            loaded: false,
            tagparsed: false,
            parseOffset: null,
            loadOffset: null,
            isEmpty: true,
            isLinear: false,
            isNonLinear: false,
            started: false,
            startOffset: null,
            firstQuartile: false,
            midPoint: false,
            thirdQuartile: false,
            complete: false,
            creativeId: null,
            campaingId: null,
            wrapper: null,
            skipped: false,
            impression: false,
            error: "",
            adsystem: "",
            adparams: "",
            playerId: null,//VideoManager.ava.getIntxtPlayerId(),
            adtitle: "",
            crea: null,
            adId: null,
            ite: null,
            cpg: null,
            adv: null,
            plc: null,
            sit: null,
            net: null,
            pub: null,
            clicked: false,
            vpaidAdParams: null,
            mediaFile: null,
            apiFramework:null,
            mimeType:null,
            linear: null,
            duration: null,
            vpaidMediaFile:null,
            VASTxml: null,
            jsNotParsed: false,
            VPAIDLoader:null,
            VPAIDCampaign:null,
            VPAIDExtra:null,
            VASTAdTag:null
        };

        

        
		var m=this;
		var interv=setInterval(function(){
			try{
				if (typeof window.ois == "undefined") return;
				var ois = window.ois();
				clearInterval(interv);
				m.doInitialize(ois);
			}catch(e)
			{
		}},200);				        
	}
	
	this.doInitialize=function(ois)
	{
		var data=this.data;		

        ois.subscribe(function(type, objs) {
            try{
                data.tagparsed = true;
                data.requested = true;
                data.parseOffset = (new Date()).getTime() - data.initDate;
                data.isEmpty = false;
                var origString = '';
                var d=data;

                if (typeof objs.asString == "undefined" && objs.ads){
                    var obj=objs.ads[0];
                    if(typeof obj.VASTAdTagURI!="undefined")
                        d.VASTAdTag=obj.VASTAdTagURI;
                    d.adsystem=obj.system.value;
                    d.adtitle=obj.title;
                    var smxDataSource=null;
                    if(obj.impressionURLTemplates) {
                        smxDataSource = obj.impressionURLTemplates;
                    }
                    else {
                        if(obj.creatives && obj.creatives[0] && obj.creatives[0].impression)
                            smxDataSource=obj.creatives[0].impression;
                    }
                    if(smxDataSource)
                    {
                        for (var k = 0; k < smxDataSource.length; k++) {
                            if (smxDataSource[k].match(/stats-irl.sxp.smartclip.net.*plc.*/)) {
                                var a1 = document.createElement("a");
                                a1.href = smxDataSource[k];
                                var txt = a1.search;
                                txt = txt.replace(/&amp;/, "&").replace(/&amp;/, "&").replace(/&amp;/, "&");
                                var parts = a1.search.split("&");
                                var fields = {
                                    'crea': 1,
                                    'ite': 1,
                                    'cpg': 1,
                                    'adv': 1,
                                    'plc': 1,
                                    'sit': 1,
                                    'net': 1,
                                    'pub': 1
                                };
                                for (var j = 0; j < parts.length; j++) {
                                    var s1 = parts[j].split("=");
                                    var field = s1.shift();
                                    if (typeof fields[field] != "undefined") d[field] = s1.join("=").replace("DIR_", "");
                                }
                                d.creativeId=d.crea;
                                break;
                            }
                        }
                    }
                    if(obj.creatives.length > 0) {
                        var creative = obj.creatives[0];
                        d.adId = creative.adId;
                        if (typeof creative.id != "undefined" && creative.id)
                            d.creativeId = creative.id;


                        if (creative.mediaFiles) {
                            d.mediaFile = creative.mediaFiles[0].fileURL;
                            d.mimeType = creative.mediaFiles[0].mimeType;
                            d.apiFramework = creative.mediaFiles[0].apiFramework;
                            if (d.mimeType.indexOf(/javascript/)) {
                                var aa = document.createElement("a");
                                aa.href = d.mediaFile;
                                d.VPAIDLoader = aa.protocol + "//" + aa.host + aa.pathname;
                            }
                        }
                    }
                    if(!d.adId && d.creativeId)
                        d.adId=d.creativeId;
                    if(!d.adId && d.title)
                        d.adId=d.title;

                        switch(d.adsystem)
                        {
                            case "2.0":
                            {
                                if(d.adsystem=="2.0")
                                {
                                    if(objs.ads[0].id)
                                        d.adsystem=objs.ads[0].id+" 2.0";
                                }
                            }break;
                            case "smartclip":
                            {

                            }break;
                            case "DBM":
                            {
                                if(window.DOMParser)
                                {
                                    var p=new DOMParser();
                                    var doc=null;
                                    try {
                                        doc=p.parseFromString(s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"'));
                                    }catch(e)
                                    {
                                        doc=null;
                                    }
                                    if(doc!=null)
                                    {
                                        // Se busca un mediafile.
                                        var meds=doc.getElementsByTagName("MediaFile");
                                        for(var k=0;k<meds.length;k++)
                                        {
                                            if(meds[k].textContent.match(/mp4$/) || meds[k].textContent.match(/webm$/))
                                            {
                                                d.vpaidMediaFile=meds[k].textContent;
                                                break;
                                            }
                                            if(meds[k].getAttribute("type".match(/javascript/)))
                                            {
                                                d.vpaidMediaFile=meds[k].textContent;
                                                break;
                                            }

                                        }
                                    }
                                }
								//d.VASTxml=JSON.stringify(objs);
                            }break;
                            case "Videology":
                            {
                                var path="extensions/0/children/0/children";
                                var parts=path.split("/");
                                var oo=obj;
                                var k=0;
								d.adId=obj.title;
                                for(k=0;oo && k<parts.length;k++)
                                    oo=oo[parts[k]];
                                if(oo)
                                {
                                    for(var k=0;k<oo.length;k++)
                                    {
                                        if(oo[k]["name"]=="custom" && oo[k]["attributes"]["campid"])
                                        {
                                            d.VPAIDCampaign=oo[k]["attributes"]["campid"];
                                            VPAIDExtra="version:"+oo[k]["attributes"]["version"];
                                        }
                                    }
                                }
								//d.VASTxml=JSON.stringify(objs);
                            }break;
                            case "IntegralAds":
                            {
                                if(typeof obj.url != "undefined")
                                {
                                    var res;
                                    if(res=obj.url.match(/pubCreative=([^&]+)/))
                                    {
                                        d.adId=res[1];
                                    }
                                    if(res=obj.url.match(/ad.doubleclick.net\/[^;]*\/([^\/;]+)/))
                                    {
                                        d.adId=res[1];
                                    }
                                }
                                else {
                                    var creas = obj.creatives;
                                    for (var k = 0; k < creas.length; k++) {
                                        if (typeof creas[k].adId != "undefined" && creas[k].adId!=null)
                                            d.adId = creas[k].adId;
                                    }
                                }
                                d.VASTxml=JSON.stringify(objs);
                            }break;
                            case "The Trade Desk":
                            case "DCM":
                            case "MediaMath T1 VADS":
                            {
                                d.adId=obj.id;
                            }break;
                            case "MediaMind":
                            {
                                var creas=obj.creatives;
                                for(var k=0;k<creas.length;k++)
                                {
                                    if(typeof creas[k].adId!="undefined") {
                                        d.adId = creas[k].adId;
                                    }
                                }
                            }break;
                            case "VPAIDIMA3":
                            {

                            }break;
                            default:
                            {
                                d.VASTxml=JSON.stringify(objs);
                            }break;
                        }


                }
                else
                {
                    d.jsNotParsed=true;
                }
            }catch(e) {
                // statements
                console.log(e);
            }
            if(!d.adId && d.adsystem!="VPAIDIMA3")
                d.VASTxml=JSON.stringify(objs);

        }, "AdTagParsed");
        ois.subscribe(function(ev) {
            data.isEmpty = true;
            data.requested = true;
        }, "AdCapped");
        ois.subscribe(function(ev) {
            data.loaded = true;
            data.loadOffset = (new Date()).getTime() - data.initDate;
        }, "AdLoaded");
        ois.subscribe(function(message,code) {
            data.error = code;
        }, "AdError");
        ois.subscribe(function(message) {
            data.started = true;
            data.isEmpty = false;
            data.VASTxml = null;
            data.vpaidAdParams = null;
            data.startOffset = (new Date()).getTime() - data.initDate;
        }, "AdVideoStart");
        ois.subscribe(function(message) {
            data.firstQuartile = true;
            data.isEmpty = false;
        }, "AdVideoFirstQuartile");
        ois.subscribe(function(message) {
            data.midPoint = true;
        }, "AdVideoMidpoint");
        ois.subscribe(function(message) {
            data.thirdQuartile = true;
        }, "AdVideoThirdQuartile");
        ois.subscribe(function(message) {
            data.complete = true;
        }, "AdVideoComplete");
        ois.subscribe(function(message) {
            var hidden = null;
            if (typeof document.hidden!="undefined") { // Opera 12.10 and Firefox 18 and later support
                hidden = "hidden";
            } else if (document.msHidden!="undefined") {
                hidden = "msHidden";
            } else if (document.webkitHidden!="undefined") {
                hidden = "webkitHidden";
            }
            data.activeTab=!document[hidden];
            data.impression = true;
        }, "AdImpression");
        ois.subscribe(function(message) {
            data.clicked = true;
        }, "AdClickThru");
        ois.subscribe(function(message) {
            data.skipped = true;
        }, "AdSkipped");

        ois.subscribe(function(message) {
            console.log("INFO");
            console.dir(arguments);
        }, "AdLog");
    }
}
function initializeLogging()
{

}


    if (__smxLogData == null)
	{
    var _smxSender=new SmxSender();
	_smxSender.setupCallbacks();    
	}