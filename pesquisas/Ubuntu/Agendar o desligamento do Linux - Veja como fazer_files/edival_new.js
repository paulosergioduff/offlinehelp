
(function () {
/*tagconfig*/

var a = {
		publisherId: "5979fb31073ef40bac6a4be2",
		channelId: "5979fb83073ef406b2675576",
		width: 100,
		height: 0,
		errorLimit: 33,
		passbackUrl: "",
		lastFrame: false,
		HD: !0,
		autoPlay: false,
		Preroll: 0,
		midrolltime: 5,
		vastRetry: 5,
		loop: true,
		logo: true,
		timelineMode: "overlay",
		soundButton: true,
		pauseButton: true,
		maximp: 9999,
		maxrun: 9999,
		preloader: {
			type: "",
			link: "",
			clickthrough: ""
		},
		customLogo: {
			link: "https://play.aniview.com/58fcbed1073ef420086c9d08/5942ae55073ef42ccf4fae29/selectmedia-logo56x10.png",
			height: "11",
			width: "60",
			text: "",
			clickthrough: ""
		},
		playOnView: true,
		pauseOnBlur: false,
		unMuteOnMouseEnter: false,
		floating: {
   size: 0.5,
   bottom: 0,
   floatingCSS: 'z-index:10000001;position:fixed; bottom:5px; left:5px; -webkit-transform:scale(0.5); -webkit-transform-origin:bottom left; transform:scale(0.5); transform-origin:bottom left'
  },
		pauseOnUnseen: false,
		closeButton: true,
		skipTimer: 0,
		skip: true,
		skipText: "",
		scriptId: "aniviewJS858792430",
		posId: "",
		posTag: "",
		maxWidth: "640",
		templateType: "1",
		customCSS   : "html #av-container #av-inner #slot #preloader svg.circle.active{ color:#C0210F; }\
				html #av-container #av-inner #slot #preloader svg.icon{ display:none; }\
				html #av-container #av-inner #slot #preloader{ width:100%; height:100%; background-repeat:no-repeat; background-size:46px 46px; background-position:center center; background-image:url('data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2050%2050%22%20style%3D%22fill%3Awhite%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cpath%20d%3D%22M27.3%2C8.6c-0.2-0.2-0.4-0.4-0.6-0.4c-0.1%2C0-0.3%2C0.2-0.5%2C0.4C25.7%2C9.4%2C7.1%2C31.8%2C7.1%2C31.8l2.7%2C2.9l19.6-23.4%20C29.4%2C11.4%2C27.9%2C9.3%2C27.3%2C8.6z%20M38.3%2C22.4l-6.8-8.5l-2.8%2C3.2l6.3%2C7.9c1.3%2C1.7%2C1.8%2C3.5%2C1.8%2C5c0%2C2.5-1.2%2C4.4-1.5%2C4.6%20c-1.4%2C1.7-3.4%2C3.2-7%2C3.2c-2.9%2C0-6.5-1.7-7.8-5.6l-3.6%2C2.3c2.2%2C5%2C6.8%2C7.3%2C11.2%2C7.3c5.6%2C0%2C8.5-2.3%2C10.4-4.6c1.2-1.5%2C2.6-4.2%2C2.5-7.2%20C41%2C27.6%2C40.2%2C24.9%2C38.3%2C22.4z%22%2F%3E%0A%3C%2Fsvg%3E') }"
			,
		position: "aniplayer_aniviewJS858792430"
};

/*tagconfig*/

function run() {
	(new Image).src = "https://track1.aniview.com/track?pid=" + a.publisherId + "&cid=" + a.channelId + "&e=playerLoaded&cb=" + Date.now();
	var posRetry = 0;
	if(!a.posTimeout)
		a.posTimeout = 40;
	var AV_topElement;

	function AV_getParams(b) {
		var sc = document.getElementById(b);
		if(sc && sc.src) {
			var p = sc.src.indexOf("?");
			if(p > 10) {
				return (sc.src.substring(p+1, sc.src.length));
			}
		}

		return a.ref1;
	}
	a.ref1 = AV_getParams(a.scriptId);

	function AV_getTopElement(p1, p2) {
		try {
			if(( p1 == "" && p2 == "" ) || (window === top))
				return document;
			if(window.frameElement == null)
				return document;
			return window.top.document;
			
		} catch (f) {
			return document;
		}
	}
	function AV_loadJS(b, d, c) {
		var scp = AV_topElement.createElement("script");
		scp.src = b;
		scp.onload = d;
		scp.onreadystatechange = d;
		scp.async = true;
		c.appendChild(scp)
	}
	function AV_StartPlayer() {
		if (parent.avPlayer) {
			var b = new parent.avPlayer(a);
		} else {
			var b = new avPlayer(a);
		}
		if(a.templateType != 0)
			b.startTemplate(AV_topElement.getElementById(a.position).parentNode);
		b.play(a);
	}
	 
	function AV_posRetry(callback, args) {
		posRetry++;
		if(posRetry > a.posTimeout)
			return;
		
		setTimeout(function() {
			callback.apply(null, args);
		}, 250);
	}
	function AV_setPosition(doc, p1, p2) {
		function createPlayer(p, n) {
			var d1 = document.createElement("div");
			d1.style.width = "100%";
			d1.style.margin = "0 auto";
			d1.style.maxWidth = "" + a.maxWidth + "px";

			var d2 = document.createElement("div");
			d2.id = "aniBox";
			d2.style.height = "1px";

			var d3 = document.createElement("div");
			d3.id = ""+a.position;
			if(!doc.body) 
				doc.documentElement.appendChild(doc.createElement("body"));
			if(p === doc || p===doc.head)
				p = doc.body;
			if(n) 
				p.insertBefore(d1, n);
			else
				p.appendChild(d1);
			d1.appendChild(d2);
			d2.appendChild(d3);		
		}
		var p = doc;
		var isScp = false;
		if(p2) {
			p = doc.getElementById(p2);
			if(!p) {
				AV_posRetry(AV_setPosition, arguments);
				return;
			}
		}
		if(p1) {
			var c = p1.split("#");
			if(c && c.length == 2) {
				var e = p.getElementsByTagName(c[0]);
				if(e.length == 0) {
					AV_posRetry(AV_setPosition, arguments);
					return;				
				}
				p = e[Math.min(c[1] - 1, e.length-1)];
			}
		}
		var n;
		if(p === doc) {
			n = doc.getElementById(a.scriptId);
			if(n) 
				p = n.parentNode;
		}
		if(p === doc.head) {
			n = null;
			p = doc;		
		}
		createPlayer(p, n);	
		AV_loadJS("https://player.aniview.com/script/6.1/aniview.js", AV_StartPlayer, AV_topElement.body);
	};
	AV_topElement = AV_getTopElement(a.posTag, a.posId);
	AV_setPosition(AV_topElement, a.posTag, a.posId);
}
if(!window.aniplayerPos)
	window.aniplayerPos = {};
if(window.aniplayerPos[a.position])
	return;
window.aniplayerPos[a.position] = true;
run();

})();

