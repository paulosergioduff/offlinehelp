var bannerboy = bannerboy || {};
bannerboy.main = function() {

	var width = 300;
	var height = 250;
	var border = bannerboy.createElement({width: width, height: height, border: "solid 1px #d5d5d5", overflow: "hidden", boxSizing: "border-box", parent: document.body});
	var banner = bannerboy.createElement({id: "banner", width: width, height: height, left: -border.get("borderWidth"), top: -border.get("borderWidth"), backgroundColor: "#fff", cursor: "pointer", parent: border});
	var main_tl;

	var images = [
		"woman.png", 
		"paper_1.png", 
		"paper_2.png", 
		"paper_3.png", 
		"balloon_red.png", 
		"balloon_blue.png", 
		"balloon_yellow.png", 
		"hanging.png", 
		"logo_gsuite.png", 
		"txt_1.png", 
		"icon_gmail.png", 
		"icon_documents.png", 
		"icon_gdrive.png", 
		"icon_calendar.png", 
		"cta_txt.png", 
		"cloud_300x250.png",
		"logo_gsuite_big.png", 
	];

	bannerboy.preloadImages(images, function() {

		bannerboy.defaults.rotationZ = 0.01;
		bannerboy.defaults.webkitPerspective = "1000";

		/* Create elements
		================================================= */
		
		var animation_container = bannerboy.createElement({left: 150, top: 5, width: 144, height: 246, parent: banner});
			var woman_container = bannerboy.createElement({top: 140, width: 144, height: 101, parent: animation_container});
				var woman = bannerboy.createElement({backgroundImage: "woman.png", retina: true, parent: woman_container});
			var floating_wrapper = bannerboy.createElement({left: 16, width: 114, height: 133, parent: animation_container});
				var papers = bannerboy.createElement({left: 28, top: 75, width: 64, height: 55, parent: floating_wrapper});
					var paper_1 = bannerboy.createElement({backgroundImage: "paper_1.png", left: 20, top: 23, retina: true, parent: papers});
					var paper_2 = bannerboy.createElement({backgroundImage: "paper_2.png", retina: true, parent: papers});
					var paper_3 = bannerboy.createElement({backgroundImage: "paper_3.png", left: 52, top: 46, retina: true, parent: papers});
				var floating_container = bannerboy.createElement({top: 5, width: 114, height: 133, parent: floating_wrapper});
					var balloon_red = bannerboy.createElement({backgroundImage: "balloon_red.png", left: 52, retina: true, parent: floating_container});
					var balloon_blue = bannerboy.createElement({backgroundImage: "balloon_blue.png", left: 33, top: 19, retina: true, parent: floating_container});
					var balloon_yellow = bannerboy.createElement({backgroundImage: "balloon_yellow.png", left: 69, top: 19, retina: true, parent: floating_container});
					var paper_spawn = bannerboy.createElement({backgroundColor: "#ffffff", left: 9, top: 75, width: 99, height: 56, parent: floating_container});
					var hanging = bannerboy.createElement({backgroundImage: "hanging.png", top: 31, retina: true, parent: floating_container});
		var logo_gsuite = bannerboy.createElement({backgroundImage: "logo_gsuite.png", left: 31, top: 190, retina: true, parent: banner});
		var txt_1 = bannerboy.createElement({backgroundImage: "txt_1.png", left: 22, top: 20, retina: true, parent: banner});
		var lockup_container = bannerboy.createElement({left: 94, top: 147, width: 107, height: 23, parent: banner});
			var icon_gmail = bannerboy.createElement({backgroundImage: "icon_gmail.png", top: 6, retina: true, parent: lockup_container});
			var icon_documents = bannerboy.createElement({backgroundImage: "icon_documents.png", left: 31, retina: true, parent: lockup_container});
			var icon_gdrive = bannerboy.createElement({backgroundImage: "icon_gdrive.png", left: 56, top: 2, retina: true, parent: lockup_container});
			var icon_calendar = bannerboy.createElement({backgroundImage: "icon_calendar.png", left: 86, top: 3, retina: true, parent: lockup_container});
		var cta = bannerboy.createElement({left: 90, top: 90, width: 120, height: 39, parent: banner});
			var cta_base = bannerboy.createElement({backgroundColor: "#4285f3", width: 120, height: 39, parent: cta});
			var cta_txt = bannerboy.createElement({backgroundImage: "cta_txt.png", left: 15, top: 14, retina: true, parent: cta});
		var logo_gsuite_big = bannerboy.createElement({backgroundImage: "logo_gsuite_big.png", left: 100, top: 40, retina: true, parent: banner});
		var logo_cloud = bannerboy.createElement({backgroundImage: "cloud_300x250.png", left: 94, width: 109, top: 213, retina: false, parent: banner});

		/* Adjustments
		================================================= */
		TweenMax.set(floating_container, {rotation: 0, transformOrigin: "50% 25%"});
		TweenMax.set([balloon_red, balloon_blue, balloon_yellow], {rotation: -2, transformOrigin: "50% 100%"});
		TweenMax.set(floating_wrapper, {y: -7});
		TweenMax.set(paper_1, {rotation: 45});
		TweenMax.set(paper_2, {rotation: 45});
		TweenMax.set(paper_3, {rotation: 45});
		cta_base.set({borderRadius: 2});

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
			.add(animation_container.in_tl)
			.offset(1.3)
			.add(textIn(txt_1))
			.offset(0.2)
			.add(paperFall(paper_1, 6, 170, 2, -1, 15))
			.add(paperFall(paper_2, 4, 125, 1.2, 1, -88))
			.add(paperFall(paper_3, 4, 180, 1.6, 1, 35))
			.offset(5)
			.add(txt_1.out_tl)
			.offset(1)
			.add(lockup_container.in_tl)
			.offset(.5)
			.add(cta.in_tl)
			.add(logo_cloud.in)
		;
			
			scrubber(main_tl);
		}

		function animations() {

			animation_container.in_tl = new BBTimeline()
			.from([animation_container, logo_gsuite], 0.5, {opacity: 0});

			paperFall = function(obj, time, distance, intensity, direction, skew) {
				var x = (10 * direction) * intensity;
				var rotation = (45 * direction) * intensity;

				return new BBTimeline({repeat: 1})
				.to(obj, time, {y: distance, ease: Power0.easeIn})
				.to(obj, time, {rotationX: skew, ease: Power2.easeIn})
				.to(obj, time * .2, {x: x, rotation: -rotation, ease: Power1.easeInOut})
				.chain()
				.to(obj, time * .3, {x: -x, rotation: rotation, ease: Power1.easeInOut})
				.chain()
				.to(obj, time * .3, {x: x, rotation: -rotation, ease: Power1.easeInOut})
				.chain()
				.to(obj, time * .25, {x: -x, rotation: 0, ease: Power1.easeInOut});
			}

			textIn = function(txt) {
				return new BBTimeline()
				.from(txt, 0.5, {opacity: 0, ease: Power1.easeInOut});
			}

			txt_1.out_tl = new BBTimeline()
			.to([txt_1, logo_gsuite, animation_container], 0.5, {opacity: 0});

			// lockup
			lockup_container.in_tl = new BBTimeline()
			.staggerFrom([icon_gmail, icon_documents, icon_gdrive, icon_calendar].reverse(), 1, {cycle: {x: function (i) { return -3 * bannerboy.utils.map((i+1), 1, 5, 5, 1); }}, ease: Power2.easeOut}, 0.2)
			.staggerFrom([icon_gmail, icon_documents, icon_gdrive, icon_calendar].reverse(), 0.3, {opacity: 0}, 0.2)
			.offset(0.5)
			.from(logo_gsuite_big, 1, {x: 10, opacity: 0});

			// cta
			cta.in_tl = new BBTimeline()
			.from(cta, 1, {opacity: 0, y: 5, ease: Power2.easeOut});

			// floating wrapper
			floating_wrapper.in_tl = new BBTimeline()
			.offset(0.5)
			.from(floating_wrapper, 2.5, {x: 0, y: 43, rotation: 0, ease: Power3.easeInOut})
			.chain()
			.to(floating_wrapper, 1, {y: 0, rotation: 0, ease: Power1.easeInOut})
			.call( function() {
				TweenMax.to(floating_container, 1.5, {y: 5, repeat: 10, yoyo: true, ease: Power1.easeInOut});
				floating_container.tl_idle.play();
			});
			logo_cloud.in = new BBTimeline()
			.from(logo_cloud, 1, {opacity: 0, y: 10, ease: Power2.easeOut});
			
			// floating container
			floating_container.tl_idle = new BBTimeline({paused: true, repeat: 10, yoyo: true})
			.to(floating_container, 1.25, {rotation: 1, ease: Power1.easeInOut});

			// floating container
			floating_container.tl_balloon = new BBTimeline({repeat: 10, yoyo: true})
			.to(balloon_red, 1.25, {rotation: -3, ease: Power1.easeInOut})
			.to(balloon_blue, 1.25, {y: -1, rotation: -2, ease: Power1.easeInOut})
			.to(balloon_yellow, 1.25, {y: 2, rotation: -4, ease: Power1.easeInOut});
		}

		
		/* Interactions
		================================================= */
		function interaction() {
			// click logic goes here
			banner.onclick = function() {
				Enabler.exit("Clickthrough");
			};
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