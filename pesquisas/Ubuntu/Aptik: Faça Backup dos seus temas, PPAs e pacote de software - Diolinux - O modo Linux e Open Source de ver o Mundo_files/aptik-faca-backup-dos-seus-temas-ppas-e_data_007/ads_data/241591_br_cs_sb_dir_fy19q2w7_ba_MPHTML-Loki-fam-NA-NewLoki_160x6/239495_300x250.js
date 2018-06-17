var banner = document.getElementById('banner');
var legal = document.getElementById('roll-cta');


var tl = new TimelineMax({repeat:0, repeatDelay:2.9});


window.onload = function() {   
    
    tl.set(banner, {visibility: "visible"})

		/*frame one*/
      .from(".bckgrnd",0, {alpha:1, ease:Power4.easeout}, "frame1")
      .from(".dell-logo, .vendor-logo, .vendor-copy",0.5, {alpha:0, ease:Power4.easeout}, "frame1+=.2")
      .to(".dell-logo, .vendor-logo, .vendor-copy",0.3, {alpha:0, ease:Power4.easeout}, "frame1+=2.7")

	  
	  /*frame two*/
	  .add("frame2","frame1+=3")
      .from(".product-1", 0.5, {alpha:0, ease:Power4.easeout}, "frame2")
      .from(".title2-1, .scrn-size", 0.5, {alpha:0, ease:Power4.easeout}, "frame2+=.2")
      .to(".title2-1, .scrn-size", 0.5, {alpha:0, ease:Power4.easeout}, "frame2+=2")
      .to(".product-1",.3, {alpha:0, ease:Power4.easeout}, "frame2+=2")
	  
  	  
	  /*frame three*/
	  .add("frame3","frame2+=2.2")
      .from(".product-2", 0.5, {alpha:0, ease:Power4.easeout}, "frame3")
      .from(".title3-up, .title3-1, .title3-2, .title3-3", 0.5, {alpha:0, ease:Power4.easeout}, "frame3+=.2")
      .to(".title3-up, .title3-1, .title3-2, .title3-3", 0.3, {alpha:0, ease:Power4.easeout}, "frame3+=2")
      .to(".product-2",.3, {alpha:0, ease:Power4.easeout}, "frame3+=2")
	  
	  /*frame four*/
	  .add("frame4","frame3+=2.2")
      .from(".product-3", 0.5, {alpha:0, ease:Power4.easeout}, "frame4")
      .from(".title4-1", 0.5, {alpha:0, ease:Power4.easeout}, "frame4+=.2")
      .to(".title4-1", 0.3, {alpha:0, ease:Power4.easeout}, "frame4+=2")
      .to(".product-3",.3, {alpha:0, ease:Power4.easeout}, "frame4+=2")
	  
	  /*frame five*/
	  .add("frame5","frame4+=2.2")
      .from(".product-4", 0.5, {alpha:0, ease:Power4.easeout}, "frame5")
      .from(".title5-1", 0.5, {alpha:0, ease:Power4.easeout}, "frame5+=.2")
      .to(".title5-1", 0.3, {alpha:0, ease:Power4.easeout}, "frame5+=2")
      .to(".product-4",.5, {scale:.65, x:56, y:-60, ease:Power4.easeout}, "frame5+=2")
	  
	  /*frame six*/
	  .add("frame6","frame5+=2")
      .from(".dell_logo_last,.vendor-logo-last,.title6-1, .cta,.vendor-copy-last, .frame-6-text, .colors", 0.3, {alpha:0, ease:Power4.easeout}, "frame6+=.2")

    
	  /*roll over*/
	  .from("#roll-cta", .5, {alpha:0, x:-300, ease:Power4.easeout}, "frame5-in")
	  .from("#rolltext", .5, {alpha:0, ease:Power4.easeout}, "frame5-in")
	  .from("#legal-text", .5, {alpha:0, ease:Power4.easeout}, "frame5-in")
	  .from("#flex_bg", .5, {alpha:0, x:-300, ease:Power4.easeout}, "frame5-in")
	  
  	  legal.addEventListener("mouseover",legalHover);
		  function legalHover(){
		  tl.pause();
		  TweenMax.to("#legal", .5, {alpha:1,top:0, ease:Power1.easeOut})  
	  }
	  
	  legal.addEventListener("mouseout",legalOut);
		  function legalOut(){
		  tl.play();
		  TweenMax.to("#legal", .5, {top:-1000, ease:Power1.easeIn})
	  }

	  ;
	  
    //tl.seek(10).pause();

    var currentDuration = tl.duration();
    console.log(currentDuration);   
};