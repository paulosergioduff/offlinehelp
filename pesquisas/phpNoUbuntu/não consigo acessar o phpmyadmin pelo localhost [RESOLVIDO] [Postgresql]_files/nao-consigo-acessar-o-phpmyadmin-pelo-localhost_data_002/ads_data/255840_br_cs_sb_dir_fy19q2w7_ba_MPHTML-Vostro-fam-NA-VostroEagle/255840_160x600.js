var banner = document.getElementById('banner');
var legal = document.getElementById('roll-cta');

var tl = new TimelineMax({repeat:0, repeatDelay:2});

window.onload = function() {   
  
  tl.set(banner, {visibility: "visible"})

  /*frame one*/ 
  .add("frame1")
  .from(".f1bg", 0, {alpha:0, ease:Power2.easeInOut}, "frame1")
  .from(".dell-logo, .vendor-logo", .3, {alpha:0, ease:Power2.easeInOut}, "frame1+=0.2")
  .to(".dell-logo,.vendor-logo",.5, {alpha:0, ease:Power2.easeInOut}, "frame1+=2.9" )
  
  /*frame two*/
  .add("frame2","frame1+=3")
  .from(".product1", .5,{alpha:0, ease:Power2.easeInOut}, "frame2")
  .from(".title2", .5,{alpha:0, ease:Power2.easeInOut}, "frame2")
  .to(".title2", .5,{alpha:0, ease:Power2.easeInOut}, "frame2+=2.9")
    
  /*frame three*/
  .add("frame3","frame2+=3")
  /*.to(".product1", .5,{scale:.91,x:35,y:0,  ease:Power2.easeInOut}, "frame3")*/
  .from(".product2", .5,{x:-300, ease:Power2.easeInOut}, "frame3")
  .from(".title3", .5,{alpha:0, ease:Power2.easeInOut}, "frame3+=.5")
  .to(".title3", .5,{alpha:0, ease:Power2.easeInOut}, "frame3+=2.9")
  
  /*frame four*/
  .add("frame4","frame3+=3")
  .from(".title4", .5,{alpha:0, ease:Power2.easeInOut}, "frame4+=.5")
  .from(".product3", .5,{x:-300, ease:Power2.easeInOut}, "frame4")
  .to(".product1", .5,{scale:0.75,x:40, ease:Power2.easeInOut}, "frame4")
  .to(".product2", .5,{x:35, ease:Power2.easeInOut}, "frame4")
  .to(".title4,.slide_bg, .product_blue", .5,{alpha:0, ease:Power2.easeInOut}, "frame4+=2.8")

  /*frame five*/
  .add("frame5","frame4+=2.8")
  .to(".product1", .5,{scale:0.75,x:40,y:10, ease:Power2.easeInOut}, "frame5")
  .to(".product2", .5,{scale:0.75,x:0,y:0, ease:Power2.easeInOut}, "frame5")
  .to(".product3", .5,{scale:1,x:0,y:10, ease:Power2.easeInOut}, "frame5")
  .from(".title5,.cta,.dell-logo2,.vendor-logo2", .5,{alpha:0, ease:Power2.easeInOut}, "frame5+=0.2")

  ;
//tl.seek(10).pause(13);
  // tl.seek("loop")

  var currentDuration = tl.duration();
  console.log(currentDuration);   
};