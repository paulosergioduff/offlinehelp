var bannerboy = bannerboy || {}; 
bannerboy.main = function() {

	var width = 728;
	var height = 90;
	var border = bannerboy.createElement({width: width, height: height, border: 'solid 1px #d5d5d5', boxSizing: 'border-box', overflow: "hidden", parent: document.body});
	var banner = bannerboy.createElement({id: "banner", width: width, height: height, left: -border.get("borderWidth"), top: -border.get("borderWidth"), backgroundColor: "#fff", cursor: "pointer", parent: border});
	var main_tl;

	var images = [
		"illustration_base.png", 
		"illustration_cover.png",  
		"txt_1.png", 
		"logo_gsuite.png", 
		"icon_gmail.png", 
		"icon_documents.png", 
		"cloud.png",
		"icon_gdrive.png", 
		"icon_calendar.png", 
		"logo_gsuite_big.png", 
		"cta_txt.png", 
	];

	bannerboy.preloadImages(images, function() {

		bannerboy.defaults.rotationZ = 0.01;
		bannerboy.defaults.webkitPerspective = "1000";

		/* Create elements
		================================================= */		
		var illustration_base = bannerboy.createElement({backgroundImage: "illustration_base.png", left: 380, top: 5, width: 114, retina: true, parent: banner});

		var content = bannerboy.createElement({id: "content", left: 0, top: 0, width: 251, height: 137, parent: banner});

		var graph_black_1 = bannerboy.createElement({left: 52, bottom: 26, height: 50, parent: content});
			var graph_black_bar = bannerboy.createElement({backgroundColor: "#dcdcdc", width: 2, height: 44, bottom: 0, parent: graph_black_1});
			var graph_black_bar = bannerboy.createElement({backgroundColor: "#dcdcdc", width: 2, height: 59, left: 6, bottom: 0, parent: graph_black_1});

		var graph_black_2 = bannerboy.createElement({left: 85, bottom: 26, height: 55, parent: content});
			var graph_black_bar = bannerboy.createElement({backgroundColor: "#dcdcdc", width: 2, height: 55, bottom: 0, parent: graph_black_2});
			var graph_black_bar = bannerboy.createElement({backgroundColor: "#dcdcdc", width: 2, height: 40, left: 6, bottom: 0, parent: graph_black_2});

		var graph_black_3 = bannerboy.createElement({left: 140, bottom: 26, height: 50, parent: content});
			var graph_black_bar = bannerboy.createElement({backgroundColor: "#dcdcdc", width: 2, height: 32, bottom: 0, parent: graph_black_3});
			var graph_black_bar = bannerboy.createElement({backgroundColor: "#dcdcdc", width: 2, height: 40, left: 6, bottom: 0, parent: graph_black_3});

		var graph_blue = bannerboy.createElement({left: 52, bottom: 26, height: 50, parent: content});
			var graph_blue_bar = bannerboy.createElement({backgroundColor: "#4285f4", width: 2, height: 44, bottom: 0, parent: graph_blue});
			var graph_blue_bar = bannerboy.createElement({backgroundColor: "#4285f4", width: 2, height: 15, left: 6, bottom: 0, parent: graph_blue});

		var graph_red = bannerboy.createElement({left: 85, bottom: 28, height: 55, parent: content});
			var graph_black_bar = bannerboy.createElement({backgroundColor: "#ea4335", width: 2, height: 55, bottom: 0, parent: graph_red});
			var graph_black_bar = bannerboy.createElement({backgroundColor: "#ea4335", width: 2, height: 40, left: 6, bottom: 0, parent: graph_red});

		var graph_yellow = bannerboy.createElement({left: 140, bottom: 26, height: 50, parent: content});
			var graph_yellow_bar = bannerboy.createElement({backgroundColor: "#fabb05", width: 2, height: 32, bottom: 0, parent: graph_yellow});
			var graph_yellow_bar = bannerboy.createElement({backgroundColor: "#fabb05", width: 2, height: 40, left: 6, bottom: 0, parent: graph_yellow});

		var illustration_cover = bannerboy.createElement({backgroundImage: "illustration_cover.png", left: 171, top: 166, retina: true, parent: banner});

		var txt_1 = bannerboy.createElement({backgroundImage: "txt_1.png", left: 27, top: 26, retina: false, parent: banner});
		var logo_gsuite = bannerboy.createElement({backgroundImage: "logo_gsuite.png", left: 593, top: 33, retina: true, parent: banner});
		var lockup_container = bannerboy.createElement({left: 168, top: 32, width: 110, height: 24, parent: banner});
			var icon_gmail = bannerboy.createElement({backgroundImage: "icon_gmail.png", top: 7, retina: true, parent: lockup_container});
			var icon_documents = bannerboy.createElement({backgroundImage: "icon_documents.png", left: 32, retina: true, parent: lockup_container});
			var icon_gdrive = bannerboy.createElement({backgroundImage: "icon_gdrive.png", left: 58, top: 2, retina: true, parent: lockup_container});
			var icon_calendar = bannerboy.createElement({backgroundImage: "icon_calendar.png", left: 89, top: 4, retina: true, parent: lockup_container});
		var logo_gsuite_big = bannerboy.createElement({backgroundImage: "logo_gsuite_big.png", left: 40, top: 33, retina: true, parent: banner});
		var cta = bannerboy.createElement({left: 360, top: 26, width: 129, height: 39, parent: banner});
			var cta_base = bannerboy.createElement({backgroundColor: "#4285f3", width: 129, height: 39, parent: cta});
			var cta_txt = bannerboy.createElement({backgroundImage: "cta_txt.png", left: 17, top: 14, retina: true, parent: cta});
		var cloud = bannerboy.createElement({backgroundImage: "cloud.png", left: 589, top: 36, retina: false, parent: banner});
		var corner_1 = bannerboy.createElement({left: 160, top: 151, parent: banner});
		var corner_2 = bannerboy.createElement({left: 246, top: 151, parent: banner});
		var corner_3 = bannerboy.createElement({left: 273, top: 188, parent: banner});
		var corner_4 = bannerboy.createElement({left: 135, top: 188, parent: banner});

		/* Adjustments
		================================================= */
		TweenMax.set(graph_blue.childNodes, {transformOrigin: "50% 100%"});
		TweenMax.set(graph_red.childNodes, {transformOrigin: "50% 100%"});
		TweenMax.set(graph_yellow.childNodes, {transformOrigin: "50% 100%"});
		cta_base.set({borderRadius: 2});
		cta_txt.set({center: true});

		var widthFactor = 1;
		var heightFactor = 1;

		var screenWidth = content.get("width") * widthFactor;
		var screenHeight = content.get("height") * heightFactor;
		var screen = bannerboy.createElement({insertBefore: content});
		var transform = new PerspectiveTransform(screen, screenWidth, screenHeight, true);

		setTransformPoint(transform.topLeft, corner_1);
		setTransformPoint(transform.topRight, corner_2);
		setTransformPoint(transform.bottomRight, corner_3);
		setTransformPoint(transform.bottomLeft, corner_4);
		transform.update();

		// append content to its now perspective transformed container
		//content.set({left: 0, top: 50});
		screen.appendChild(content);
		screen.set({left: 232, top: -106});

		/* Initiate
		================================================= */
		animations();
		timeline();
		interaction();

		/* Animations
		================================================= */
		function timeline() {
			main_tl = new BBTimeline()
			.offset(.25)

			.add(content.in_tl)
			.offset(.9)
			.add(textIn(txt_1))
			.offset(1)
			.add(graphIn(graph_black_1, graph_blue))
			.offset(0.5)
			.add(graphIn(graph_black_2, graph_red))
			.offset(0.1)
			.add(graphIn(graph_black_3, graph_yellow))
			.offset(3)
			.add(txt_1.out_tl)
			.offset(1)
			.add(lockup_container.in_tl)
			.offset(.5)
			.add(cta.in_tl);


			scrubber(main_tl);
		}

		function animations() {

			graphIn = function(container, graph) {
				return new BBTimeline()
				.staggerFrom(graph.childNodes, 1.5, {scaleY: 0, ease: Power2.easeInOut}, 0.19)
			}

			textIn = function(txt) {
				return new BBTimeline()
				.from(txt, 0.5, {opacity: 0, ease: Power1.easeInOut});
			}

			// illustration
			content.in_tl = new BBTimeline()
			.from([content, illustration_cover, illustration_base, logo_gsuite], 0.5, {opacity: 0});

			txt_1.out_tl = new BBTimeline()
			.to([txt_1, logo_gsuite, content, illustration_cover, illustration_base], 0.5, {opacity: 0});

			// lockup
			lockup_container.in_tl = new BBTimeline()
			.staggerFrom([icon_gmail, icon_documents, icon_gdrive, icon_calendar].reverse(), 1, {cycle: {x: function (i) { return -3 * bannerboy.utils.map((i+1), 1, 5, 5, 1); }}, ease: Power2.easeOut}, 0.2)
			.staggerFrom([icon_gmail, icon_documents, icon_gdrive, icon_calendar].reverse(), 0.3, {opacity: 0}, 0.2)
			.offset(0.5)
			.from(logo_gsuite_big, 1, {x: 10, opacity: 0});

			// cta
			cta.in_tl = new BBTimeline()
			.from(cta, 1, {opacity: 0, y: 5, ease: Power2.easeOut})
			.from(cloud, 1, {opacity: 0, x: 5, ease: Power2.easeOut});
		}

		/* Interactions
		================================================= */
		function interaction() {
			// click logic goes here
			banner.onclick = function() {
				Enabler.exit("Clickthrough");
			};
		}

		/* Helpers
		================================================= */
		function setTransformPoint(transformPoint, corner) {
			transformPoint.x = corner.get("left") + corner.get("width") / 2;
			transformPoint.y = corner.get("top") + corner.get("height") / 2;
		}

		/* Scrubber
		================================================= */
		function scrubber(tl) {
			if (window.location.origin == "file://") {
				bannerboy.include(["../bannerboy_scrubber.min.js"], function() {
					if (bannerboy.scrubberController) bannerboy.scrubberController.create({"main timeline": tl});
				});
			}
		}
	});
};