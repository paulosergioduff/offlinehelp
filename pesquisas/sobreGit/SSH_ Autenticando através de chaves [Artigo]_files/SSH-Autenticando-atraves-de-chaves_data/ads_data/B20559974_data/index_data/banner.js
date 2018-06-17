var bannerboy = bannerboy || {};
bannerboy.main = function() {

	var width = 970;
	var height = 90;
	var border = bannerboy.createElement({width: width, height: height, border: 'solid 1px #d5d5d5', boxSizing: 'border-box', overflow: "hidden", parent: document.body});
	var banner = bannerboy.createElement({id: "banner", width: width, height: height, left: -border.get("borderWidth"), top: -border.get("borderWidth"), backgroundColor: "#fff", cursor: "pointer", parent: border});

	var images = [
		"man_3_shoulder.png", 
		"man_3_arm.png", 
		"man_3_body.png", 
		"man_2_shoulder.png", 
		"man_2_arm.png", 
		"man_2_body.png", 
		"man_1.png", 
		"logo_gsuite.png", 
		"txt_1.png", 
		"icon_gmail.png", 
		"icon_documents.png", 
		"icon_gdrive.png", 
		"icon_calendar.png", 
		"cloud.png", 
		"cta_txt.png", 
		"logo_gsuite_big.png", 
	];

	bannerboy.preloadImages(images, function() {

		/* Create elements
		================================================= */

		// Begin Export Script

		var animation_container = bannerboy.createElement({left: 350, top: -33, width: 145, height: 155, transform: "scale(0.5)", parent: banner});
			var man_3 = bannerboy.createElement({left: 88, width: 57, height: 153, parent: animation_container});
				var man_3_shoulder_container = bannerboy.createElement({left: 29, width: 29, height: 52, parent: man_3});
					var man_3_shoulder = bannerboy.createElement({backgroundImage: "man_3_shoulder.png", top: 38, retina: true, parent: man_3_shoulder_container});
					var man_3_arm_container = bannerboy.createElement({left: 10, width: 19, height: 47, parent: man_3_shoulder_container});
						var man_3_arm = bannerboy.createElement({backgroundImage: "man_3_arm.png", retina: true, parent: man_3_arm_container});
						var man_3_arm_axis = bannerboy.createElement({backgroundColor: "#ed1f24", left: 15, top: 44, width: 1, height: 1, parent: man_3_arm_container});
					var man_3_shoulder_axis = bannerboy.createElement({backgroundColor: "#ed1f24", left: 6, top: 45, width: 1, height: 1, parent: man_3_shoulder_container});
				var man_3_body = bannerboy.createElement({backgroundImage: "man_3_body.png", top: 14, retina: true, parent: man_3});
			var man_2 = bannerboy.createElement({top: 13, width: 93, height: 142, parent: animation_container});
				var man_2_shoulder_container = bannerboy.createElement({width: 64, height: 46, parent: man_2});
					var man_2_shoulder = bannerboy.createElement({backgroundImage: "man_2_shoulder.png", left: 24, top: 26, retina: true, parent: man_2_shoulder_container});
					var man_2_arm_container = bannerboy.createElement({width: 32, height: 46, parent: man_2_shoulder_container});
						var man_2_arm = bannerboy.createElement({backgroundImage: "man_2_arm.png", retina: true, parent: man_2_arm_container});
						var man_2_arm_axis = bannerboy.createElement({backgroundColor: "#ed1f24", left: 29, top: 40, width: 1, height: 1, parent: man_2_arm_container});
					var man_2_shoulder_axis = bannerboy.createElement({backgroundColor: "#ed1f24", left: 49, top: 34, width: 1, height: 1, parent: man_2_shoulder_container});
				var man_2_body = bannerboy.createElement({backgroundImage: "man_2_body.png", left: 45, top: 3, retina: true, parent: man_2});
			var man_1 = bannerboy.createElement({backgroundImage: "man_1.png", left: 42, top: 44, retina: true, parent: animation_container});
		var logo_gsuite = bannerboy.createElement({backgroundImage: "logo_gsuite.png", left: 820, top: 33, retina: true, parent: banner});
		var txt_1 = bannerboy.createElement({backgroundImage: "txt_1.png", left: 50, top: 25, retina: true, parent: banner});
		var lockup_container = bannerboy.createElement({left: 142, top: 34, width: 110, height: 24, parent: banner});
			var icon_gmail = bannerboy.createElement({backgroundImage: "icon_gmail.png", top: 7, retina: true, parent: lockup_container});
			var icon_documents = bannerboy.createElement({backgroundImage: "icon_documents.png", left: 32, retina: true, parent: lockup_container});
			var icon_gdrive = bannerboy.createElement({backgroundImage: "icon_gdrive.png", left: 58, top: 2, retina: true, parent: lockup_container});
			var icon_calendar = bannerboy.createElement({backgroundImage: "icon_calendar.png", left: 89, top: 4, retina: true, parent: lockup_container});
		var logo_gsuite_big = bannerboy.createElement({backgroundImage: "logo_gsuite_big.png", left: 27, top: 33, retina: true, parent: banner});
		var cta = bannerboy.createElement({left: 464, top: 26, width: 129, height: 39, parent: banner});
			var cta_base = bannerboy.createElement({backgroundColor: "#4285f3", width: 129, height: 39, parent: cta});
			var cta_txt = bannerboy.createElement({backgroundImage: "cta_txt.png", left: 17, top: 14, retina: true, parent: cta});
		var logo_cloud = bannerboy.createElement({backgroundImage: "cloud.png", left: 821, width: 109, top: 36, retina: false, parent: banner});

		cta_base.set({borderRadius: 2});

		// !End Export Script

		/* Initiate
		================================================= */
		interaction();
		
		// animation_container.set({scale: .75, left: -35, top: 200})

		man_2.set({transformOrigin: 'bottom right'})
		man_2_shoulder_container.set({transformOrigin: man_2_shoulder_axis.get("left") + 'px ' + man_2_shoulder_axis.get("top") + 'px'})
		man_2_arm_container.set({transformOrigin: man_2_arm_axis.get("left") + 'px ' + man_2_arm_axis.get("top") + 'px'})
		man_2_shoulder_axis.set({opacity: 0})
		man_2_arm_axis.set({opacity: 0})

		man_3.set({transformOrigin: 'bottom left'})
		man_3_shoulder_container.set({transformOrigin: man_3_shoulder_axis.get("left") + 'px ' + man_3_shoulder_axis.get("top") + 'px'})
		man_3_arm_container.set({transformOrigin: man_3_arm_axis.get("left") + 'px ' + man_3_arm_axis.get("top") + 'px'})
		man_3_shoulder_axis.set({opacity: 0})
		man_3_arm_axis.set({opacity: 0})

		/* Animations
		================================================= */

		lockup_container.in = new BBTimeline()
			.staggerFrom([icon_gmail, icon_documents, icon_gdrive, icon_calendar].reverse(), 1, {cycle: {x: function (i) { return -3 * bannerboy.utils.map((i+1), 1, 5, 5, 1); }}, ease: Power2.easeOut}, 0.2)
			.staggerFrom([icon_gmail, icon_documents, icon_gdrive, icon_calendar].reverse(), 0.3, {opacity: 0}, 0.2)
			.offset(0.5)
			.from(logo_gsuite_big, 1, {x: 10, opacity: 0});

		logo_cloud.in = new BBTimeline()
			.from(logo_cloud, 1, {opacity: 0, y: 10, ease: Power2.easeOut});
				
		man_2.wave = new BBTimeline({paused: true, repeat: -1, yoyo: true})
			.to([man_2_shoulder_container, man_2_arm_container], .5, {rotation: 0, ease: Sine.easeInOut})

		man_3.wave = new BBTimeline({paused: true, repeat: -1, yoyo: true})
			.to([man_3_shoulder_container, man_3_arm_container], .7, {rotation: 10, ease: Sine.easeInOut})

		/* Main Timeline
		================================================= */

		var intro_speed = .5

		var tl = new BBTimeline()
			.offset(.25)
			.fromTo([man_2_shoulder_container, man_2_arm_container], intro_speed, {rotation: 0}, {rotation: 15, onComplete: man_2.wave.resume, onCompleteScope: man_2.wave})
			.from([man_3_shoulder_container, man_3_arm_container], .01, {rotation: 0, onComplete: man_3.wave.resume, onCompleteScope: man_3.wave})
			.offset(1)
			.from(txt_1, .5, {opacity: 0, ease: Power1.easeInOut})
			.offset(4.5)
			.to([txt_1,logo_gsuite, animation_container], 0.5, {opacity: 0})
			.offset(1)
			.add(lockup_container.in)
			.offset(.75)
			.from(cta, .5, {opacity: 0, scale: .98})
			.add(logo_cloud.in);

		TweenMax.delayedCall(12, function() {
			man_2.wave.pause()
			man_3.wave.pause()
		})


		scrubber(tl);
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