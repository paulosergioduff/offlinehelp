var oldContentparDomains = [];

var useNewContentpar = true;
for (i=0; i < oldContentparDomains.length; i++) {
    if (window.location.hostname.indexOf(oldContentparDomains[i]) >= 0) {
        useNewContentpar = false;
        break;
    }
}

if (useNewContentpar) {
    function getTerraValue(v, d) {
        if (typeof v == 'undefined' || v == null) {
            if (typeof d == 'undefined' || d == null) {
                v = "";
            } else {
                v = d;
            }
        }
        return v;
    }

    function terra_stats_metrics() {
        //chamada para a funcao terra_stats_metrics() nao eh mais necessaria
    }

    var terra_info_service = getTerraValue(terra_info_service, "").trim(),
        terra_info_classification = getTerraValue(terra_info_classification, "").trim(),
        terra_info_category = getTerraValue(terra_info_category, "contenido_digital").trim(),
        terra_info_channel = getTerraValue(terra_info_channel, "").trim(),
        terra_info_channeldetail = getTerraValue(terra_info_channeldetail, "").trim(),
        terra_info_pagetype = getTerraValue(terra_info_pagetype, "").trim(),
        terra_info_type = getTerraValue(terra_info_type, "").trim(),
        terra_info_id = getTerraValue(terra_info_id, "").trim(),
        terra_info_customgroup = getTerraValue(terra_info_customgroup, "").trim(),
        terra_info_source = getTerraValue(terra_info_source, "").trim(),
        terra_info_author = getTerraValue(terra_info_author, "").trim(),
        terra_stats_isPar = getTerraValue(terra_stats_isPar, 0),
        terra_stats_idCrtfc = getTerraValue(terra_stats_idCrtfc, 0);


    /* Begin Google Analytics */
    window.ga = window.ga || function() {
        (ga.q = ga.q || []).push(arguments)
    };
    ga.l = +new Date;

    (function() {
        var s = document.createElement("script");
        s.src = "https://www.google-analytics.com/analytics.js";
        s.type = "text/javascript";
        s.async = true;
        document.getElementsByTagName("head")[0].appendChild(s);

        var channelSplit = terra_info_channel.split(".");
        var dictSend = {
            "dimension1": channelSplit[1],
            "dimension2": channelSplit[2],
            "dimension3": terra_info_channeldetail,
            "dimension4": terra_info_category,
            "dimension9": "alianza",
            "dimension12": document.referrer ? document.referrer : undefined
        };

        if (terra_stats_idCrtfc) {
            dictSend["dimension5"] = terra_stats_idCrtfc;
        }

        ga('create', 'UA-54936151-1', 'auto', 'terra');
        ga('terra.send', 'pageview', dictSend);
    })();
    /*  End Google Analytics */


    /* Begin comScore Tag */
    var _comscore = _comscore || [];
    _comscore.push({
        c1: "2",
        c2: "3000033"
    });
    (function() {
        var s = document.createElement("script"),
            el = document.getElementsByTagName("script")[0];
        s.async = true;
        s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
        el.parentNode.insertBefore(s, el);
    })();
    /* End comScore Tag */


    /* Begin Tail Target */
    var _ttconversion = window._ttconversion || [];
    _ttconversion.push(["_event", "_channel", "parceiros-br"]);
    _ttconversion.push(["_customEvent", {
        stage: "view",
        s1: terra_info_channel,
        s2: terra_info_category,
        s3: terra_info_channeldetail,
        s4: '',
        s5: '',
        i1: terra_stats_idCrtfc
    }]);
    _ttconversion.push(['_track']);
    (function(i, d, e) {
        var s = d.createElement(e),
            t = d.getElementsByTagName(e)[0];
        s.type = "text/java" + e;
        s.async = true;
        s.src = ("https:" == d.location.protocol ? "https://" : "http://") + "tags.t.tailtarget.com/t3m.js?i=" + i;
        t.parentNode.insertBefore(s, t);
    })("TT-10969-0/CT-411", document, "script");
    /* End Tail Target */


    /* Begin POST to Stalker */
    function postToStalker() {
        var iframeGS = document.createElement('iframe');
        iframeGS.style.visibility = 'hidden';
        iframeGS.style.width = '1px';
        iframeGS.style.height = '1px';
        iframeGS.style.position = 'fixed';
        iframeGS.style.bottom = '0px';
        iframeGS.src = 'https://gs.trrsf.com/fe/zaz-mod-globalstorage/server.html';
        iframeGS.id = 'zaz-globalstorage';
        iframeGS.addEventListener('load', function() {
            var iframeGSDOM = document.getElementById('zaz-globalstorage');
            iframeGSDOM.contentWindow.postMessage(JSON.stringify({
                action: 'get',
                key: 'zaz-user-stalker_br'
            }), 'https://gs.trrsf.com');
        });

        window.addEventListener("load", function(event) {
            document.body.appendChild(iframeGS);
        });

        window.addEventListener('message', function(event) {
            if (event.origin == 'https://gs.trrsf.com' && !window.terraPageviewSent) {
                var data = JSON.parse(event.data);
                if (data.action != 'get') {
                    return;
                }

                var val = JSON.parse(data.val);
                if (val == null || val.v == null) {
                    return;
                }

                var xactId = val.v._id;
                var token = val.v.token;

                var currentCleanURL = window.location.href.replace(window.location.search, '');
                var objNavigation = {
                    value: [{
                        id: '--PAR--',
                        url: currentCleanURL,
                        info: {
                            channel: terra_info_channel,
                            channeldetail: terra_info_channeldetail,
                            service: terra_info_service
                        }
                    }]
                };

                var xhr = new XMLHttpRequest();
                xhr.open("POST", "https://coletor.terra.com/user/" + xactId + '/pageviews?token=' + token, true);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.send(JSON.stringify(objNavigation));
                window.terraPageviewSent = true;
            }
        });
    }
    // Send pageview only if it isnt a reload (status=1)
    if (performance.navigation && performance.navigation.type != 1) {
        postToStalker();
    }
    /* End POST to Stalker */
} else {
    if (typeof terra_stats_metrics == 'undefined') {
        var terra_stats_metrics = function() {
            window.setTimeout('terra_stats_metrics()', 500);
        }
    }
    var _ts_ss;
    (function(d, s) {
        var e = d.createElement(s),
            t = d.getElementsByTagName(s)[0];
        e.type = "text/java" + s;
        e.async = true;
        _ts_ss = "http" + ("https:" === location.protocol ? "s" : "") + "://s1.trrsf.com/metrics/inc/br/201604270000d.js";
        e.src = _ts_ss;
        t.parentNode.insertBefore(e, t);
    })(document, "script");
    (function() {
        var s = document.createElement("script");
        s.src = "https://s1.trrsf.com/fe/zaz-mod-stalker/assets/pageviewspar.js";
        s.type = "text/javascript";
        s.async = true;
        document.getElementsByTagName("head")[0].appendChild(s);
     })();
}