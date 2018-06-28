(function (window) {
if (typeof window.MauticFocusParentHeadStyleInserted == 'undefined') {
window.MauticFocusParentHeadStyleInserted = false;
}window.MauticFocus2 = function () {
var Focus = {
debug: false,
modalsDismissed: {},
ignoreConverted: true,// Initialize the focus
initialize: function () {
if (Focus.debug)
console.log('initialize()');Focus.insertStyleIntoHead();
Focus.registerFocusEvent();// Add class to body
Focus.addClass(document.getElementsByTagName('body')[0], 'MauticFocusNotification');
},// Register click events for toggling bar, closing windows, etc
registerClickEvents: function () {
var closer = Focus.iframeDoc.getElementsByClassName('mf-notification-close');
var aTag = closer[0].getElementsByTagName('a');
var container = Focus.iframeDoc.getElementsByClassName('mf-notification');container.onclick = function(e) {
if (e) { e.stopPropagation(); }
else { window.event.cancelBubble = true; }
};
document.onclick = function() {
aTag[0].click();
};aTag[0].addEventListener('click', function (event) {
// Prevent multiple engagements for link clicks on exit intent
Focus.modalsDismissed["2"] = true;// Remove iframe
if (Focus.iframe.parentNode) {
Focus.iframe.parentNode.removeChild(Focus.iframe);
}var overlays = document.getElementsByClassName('mf-modal-overlay-2');
if (overlays.length) {
overlays[0].parentNode.removeChild(overlays[0]);
}
});
var buttons = Focus.iframeDoc.getElementsByClassName('mauticform-button');
if (buttons.length) {
buttons[0].addEventListener('click', function (event) {
Focus.convertVisitor();
});
}
},toggleBarCollapse: function (collapser, useCookie) {
var svg = collapser.getElementsByTagName('svg');
var g = svg[0].getElementsByTagName('g');
var currentSize = svg[0].getAttribute('data-transform-size');
var currentDirection = svg[0].getAttribute('data-transform-direction');
var currentScale = svg[0].getAttribute('data-transform-scale');if (useCookie) {
if (Focus.cookies.hasItem('mf-bar-collapser-2')) {
var newDirection = Focus.cookies.getItem('mf-bar-collapser-2');
if (isNaN(newDirection)) {
var newDirection = currentDirection;
}
} else {
// Set cookie with current direction
var newDirection = currentDirection;
}
} else {
var newDirection = (parseInt(currentDirection) * -1);
Focus.cookies.setItem('mf-bar-collapser-2', newDirection);
}setTimeout(function () {
g[0].setAttribute('transform', 'scale(' + currentScale + ') rotate(' + newDirection + ' ' + currentSize + ' ' + currentSize + ')');
svg[0].setAttribute('data-transform-direction', newDirection);
}, 500);var isTop = Focus.hasClass(Focus.iframeFocus, 'mf-bar-top');
if ((!isTop && newDirection == 90) || (isTop && newDirection == -90)) {
// Open it up
if (isTop) {
Focus.iframe.style.marginTop = 0;
} else {
Focus.iframe.style.marginBottom = 0;
}Focus.removeClass(collapser, 'mf-bar-collapsed');
Focus.enableIframeResizer();} else {
// Collapse it
var iframeHeight = Focus.iframe.style.height;iframeHeight.replace('px', '');
var newMargin = (parseInt(iframeHeight) * -1) + 'px';
if (isTop) {
Focus.iframe.style.marginTop = newMargin;
} else {
Focus.iframe.style.marginBottom = newMargin;
}Focus.addClass(collapser, 'mf-bar-collapsed');
Focus.disableIFrameResizer();
}
},// Register scroll events, etc
registerFocusEvent: function () {
if (Focus.debug)
console.log('registerFocusEvent()');if (Focus.debug)
console.log('scroll event registered');
window.addEventListener('scroll', Focus.engageVisitorAtScrollPosition);
},// Insert global style into page head
insertStyleIntoHead: function () {
if (!window.MauticFocusParentHeadStyleInserted) {
if (Focus.debug)
console.log('insertStyleIntoHead()');var css = "\x2emf\x2dbar\x2diframe\x7bwidth\x3a100\x25\x3bposition\x3astatic\x3bz\x2dindex\x3a20000\x3bleft\x3a0\x3bright\x3a0\x7d\x2emf\x2dbar\x2diframe\x2emf\x2danimate\x7b\x2dwebkit\x2dtransition\x2dproperty\x3amargin\x3btransition\x2dproperty\x3amargin\x3b\x2dwebkit\x2dtransition\x2dduration\x3a \x2e5s\x3btransition\x2dduration\x3a \x2e5s\x3btransition\x2dtiming\x2dfunction\x3acubic\x2dbezier\x280\x2c1\x2c0\x2e5\x2c1\x29\x3b\x2dwebkit\x2dtransition\x2dtiming\x2dfunction\x3acubic\x2dbezier\x280\x2c1\x2c0\x2e5\x2c1\x29\x7d\x2emf\x2dbar\x2diframe\x2emf\x2dbar\x2diframe\x2dtop\x7btop\x3a0\x3bmargin\x2dtop\x3a\x2d100px\x7d\x2emf\x2dbar\x2diframe\x2emf\x2dbar\x2diframe\x2dbottom\x7bbottom\x3a0\x3bmargin\x2dbottom\x3a\x2d100px\x7d\x2emf\x2dbar\x2diframe\x2emf\x2dbar\x2diframe\x2dregular body\x2c\x0a\x2emf\x2dbar\x2diframe\x2emf\x2dbar\x2diframe\x2dregular\x0ahtml\x7bmin\x2dheight\x3a30px\x7d\x2emf\x2dbar\x2diframe\x2emf\x2dbar\x2diframe\x2dregular\x2emf\x2dbar\x2diframe\x2dtop\x7bmargin\x2dtop\x3a\x2d30px\x7d\x2emf\x2dbar\x2diframe\x2emf\x2dbar\x2diframe\x2dregular\x2emf\x2dbar\x2diframe\x2dbottom\x7bmargin\x2dbottom\x3a\x2d30px\x7d\x2emf\x2dbar\x2diframe\x2emf\x2dbar\x2diframe\x2dlarge body\x2c\x0a\x2emf\x2dbar\x2diframe\x2emf\x2dbar\x2diframe\x2dlarge\x0ahtml\x7bmin\x2dheight\x3a50px\x7d\x2emf\x2dbar\x2diframe\x2emf\x2dbar\x2diframe\x2dlarge\x2emf\x2dbar\x2diframe\x2dtop\x7bmargin\x2dtop\x3a\x2d50px\x7d\x2emf\x2dbar\x2diframe\x2emf\x2dbar\x2diframe\x2dlarge\x2emf\x2dbar\x2diframe\x2dbottom\x7bmargin\x2dbottom\x3a\x2d50px\x7d\x2emf\x2dbar\x2diframe\x2emf\x2dbar\x2diframe\x2dsticky\x7bposition\x3afixed\x7d\x2emf\x2dbar\x2dspacer\x7bdisplay\x3ablock\x3boverflow\x3ahidden\x3bposition\x3arelative\x7d\x2emf\x2dbar\x2dspacer\x2emf\x2dbar\x2dspacer\x2dregular\x7bheight\x3a30px\x7d\x2emf\x2dbar\x2dspacer\x2emf\x2dbar\x2dspacer\x2dlarge\x7bheight\x3a50px\x7d\x2emf\x2dbar\x2dcollapser\x2dicon\x7bopacity\x3a0\x2e3\x3btext\x2ddecoration\x3anone\x3btransition\x2dproperty\x3aall\x3btransition\x2dduration\x3a \x2e5s\x3btransition\x2dtiming\x2dfunction\x3acubic\x2dbezier\x280\x2c1\x2c0\x2e5\x2c1\x29\x7d\x2emf\x2dbar\x2dcollapser\x2dicon\x3ahover\x7bopacity\x3a0\x2e7\x3btext\x2ddecoration\x3anone\x7d\x2emf\x2dbar\x2dcollapser\x7bposition\x3aabsolute\x3bright\x3a3px\x3bwidth\x3a24px\x3bheight\x3a24px\x3btext\x2dalign\x3acenter\x3bz\x2dindex\x3a21000\x7d\x2emf\x2dbar\x2dcollapser\x2emf\x2dbar\x2dcollapser\x2dtop\x7btop\x3a0\x3bborder\x2dbottom\x2dright\x2dradius\x3a4px\x3bborder\x2dbottom\x2dleft\x2dradius\x3a4px\x7d\x2emf\x2dbar\x2dcollapser\x2emf\x2dbar\x2dcollapser\x2dtop \x2emf\x2dbar\x2dcollapser\x2dicon\x0asvg\x7bmargin\x3a2px\x0a0 0 0\x7d\x2emf\x2dbar\x2dcollapser\x2emf\x2dbar\x2dcollapser\x2dbottom\x7bbottom\x3a0\x3bborder\x2dtop\x2dright\x2dradius\x3a4px\x3bborder\x2dtop\x2dleft\x2dradius\x3a4px\x7d\x2emf\x2dbar\x2dcollapser\x2emf\x2dbar\x2dcollapser\x2dbottom \x2emf\x2dbar\x2dcollapser\x2dicon\x0asvg\x7bmargin\x3a\x2d2px 0 0 0\x7d\x2emf\x2dbar\x2dcollapser\x2emf\x2dbar\x2dcollapser\x2dlarge\x7bwidth\x3a40px\x3bheight\x3a40px\x7d\x2emf\x2dbar\x2dcollapser\x2emf\x2dbar\x2dcollapser\x2dlarge\x2emf\x2dbar\x2dcollapser\x2dtop \x2emf\x2dbar\x2dcollapser\x2dicon\x0asvg\x7bmargin\x3a4px\x0a0 0 0\x7d\x2emf\x2dbar\x2dcollapser\x2emf\x2dbar\x2dcollapser\x2dlarge\x2emf\x2dbar\x2dcollapser\x2dbottom \x2emf\x2dbar\x2dcollapser\x2dicon\x0asvg\x7bmargin\x3a\x2d4px 0 0 0\x7d\x2emf\x2dbar\x2dcollapser\x2emf\x2dbar\x2dcollapser\x2dsticky\x7bposition\x3afixed\x7d\x2emf\x2dbar\x2dcollapser\x2emf\x2dbar\x2dcollapser\x2dtop\x2emf\x2dbar\x2dcollapsed \x2emf\x2dbar\x2dcollapser\x2dicon svg\x2c\x0a\x2emf\x2dbar\x2dcollapser\x2emf\x2dbar\x2dcollapser\x2dbottom\x2emf\x2dbar\x2dcollapsed \x2emf\x2dbar\x2dcollapser\x2dicon\x0asvg\x7bmargin\x3a0\x7d\x2emf\x2dbar\x2dcollapser a\x2emf\x2dbar\x2dcollapser\x2dicon\x7bposition\x3arelative\x3bdisplay\x3ainline\x2dblock\x7d\x2emf\x2dbar\x2dcollapser a\x2emf\x2dbar\x2dcollapser\x2dicon\x3aafter\x7bcontent\x3a\x22\x22\x3bposition\x3aabsolute\x3btop\x3a0\x3bright\x3a0\x3bbottom\x3a0\x3bleft\x3a0\x7d\x40media only screen and \x28max\x2dwidth\x3a 667px\x29\x7b\x2emf\x2dbar\x2dcollapser\x7bdisplay\x3anone \x21important\x7d\x7d\x40\x2dwebkit\x2dkeyframes mf\x2dmodal\x2dslide\x2ddown\x2dtop\x7b0\x25\x7bmargin\x2dtop\x3a\x2d100\x25\x3b\x2dwebkit\x2dtransform\x3atranslate\x28\x2d50\x25\x2c\x2d150\x25\x29\x3b\x2dms\x2dtransform\x3atranslate\x28\x2d50\x25\x2c\x2d150\x25\x29\x3btransform\x3atranslate\x28\x2d50\x25\x2c\x2d150\x25\x29\x7d100\x25\x7bmargin\x2dtop\x3a0\x3b\x2dwebkit\x2dtransform\x3atranslate\x28\x2d50\x25\x2c0\x29\x3b\x2dms\x2dtransform\x3atranslate\x28\x2d50\x25\x2c0\x29\x3btransform\x3atranslate\x28\x2d50\x25\x2c0\x29\x7d\x7d\x40keyframes mf\x2dmodal\x2dslide\x2ddown\x2dtop\x7b0\x25\x7bmargin\x2dtop\x3a\x2d100\x25\x3b\x2dwebkit\x2dtransform\x3atranslate\x28\x2d50\x25\x2c\x2d150\x25\x29\x3b\x2dms\x2dtransform\x3atranslate\x28\x2d50\x25\x2c\x2d150\x25\x29\x3btransform\x3atranslate\x28\x2d50\x25\x2c\x2d150\x25\x29\x7d100\x25\x7bmargin\x2dtop\x3a0\x3b\x2dwebkit\x2dtransform\x3atranslate\x28\x2d50\x25\x2c0\x29\x3b\x2dms\x2dtransform\x3atranslate\x28\x2d50\x25\x2c0\x29\x3btransform\x3atranslate\x28\x2d50\x25\x2c0\x29\x7d\x7d\x40\x2dwebkit\x2dkeyframes mf\x2dmodal\x2dslide\x2ddown\x2dmiddle\x7b0\x25\x7bmargin\x2dtop\x3a\x2d100\x25\x3b\x2dwebkit\x2dtransform\x3atranslate\x28\x2d50\x25\x2c\x2d150\x25\x29\x3b\x2dms\x2dtransform\x3atranslate\x28\x2d50\x25\x2c\x2d150\x25\x29\x3btransform\x3atranslate\x28\x2d50\x25\x2c\x2d150\x25\x29\x7d100\x25\x7bmargin\x2dtop\x3a0\x3b\x2dwebkit\x2dtransform\x3atranslate\x28\x2d50\x25\x2c\x2d50\x25\x29\x3b\x2dms\x2dtransform\x3atranslate\x28\x2d50\x25\x2c\x2d50\x25\x29\x3btransform\x3atranslate\x28\x2d50\x25\x2c\x2d50\x25\x29\x7d\x7d\x40keyframes mf\x2dmodal\x2dslide\x2ddown\x2dmiddle\x7b0\x25\x7bmargin\x2dtop\x3a\x2d100\x25\x3b\x2dwebkit\x2dtransform\x3atranslate\x28\x2d50\x25\x2c\x2d150\x25\x29\x3b\x2dms\x2dtransform\x3atranslate\x28\x2d50\x25\x2c\x2d150\x25\x29\x3btransform\x3atranslate\x28\x2d50\x25\x2c\x2d150\x25\x29\x7d100\x25\x7bmargin\x2dtop\x3a0\x3b\x2dwebkit\x2dtransform\x3atranslate\x28\x2d50\x25\x2c\x2d50\x25\x29\x3b\x2dms\x2dtransform\x3atranslate\x28\x2d50\x25\x2c\x2d50\x25\x29\x3btransform\x3atranslate\x28\x2d50\x25\x2c\x2d50\x25\x29\x7d\x7d\x40\x2dwebkit\x2dkeyframes mf\x2dmodal\x2dslide\x2dup\x2dbottom\x7b0\x25\x7bmargin\x2dbottom\x3a\x2d100\x25\x3b\x2dwebkit\x2dtransform\x3atranslate\x28\x2d50\x25\x2c150\x25\x29\x3b\x2dms\x2dtransform\x3atranslate\x28\x2d50\x25\x2c150\x25\x29\x3btransform\x3atranslate\x28\x2d50\x25\x2c150\x25\x29\x7d100\x25\x7bmargin\x2dbottom\x3a0\x3b\x2dwebkit\x2dtransform\x3atranslate\x28\x2d50\x25\x2c0\x29\x3b\x2dms\x2dtransform\x3atranslate\x28\x2d50\x25\x2c0\x29\x3btransform\x3atranslate\x28\x2d50\x25\x2c0\x29\x7d\x7d\x40keyframes mf\x2dmodal\x2dslide\x2dup\x2dbottom\x7b0\x25\x7bmargin\x2dbottom\x3a\x2d100\x25\x3b\x2dwebkit\x2dtransform\x3atranslate\x28\x2d50\x25\x2c150\x25\x29\x3b\x2dms\x2dtransform\x3atranslate\x28\x2d50\x25\x2c150\x25\x29\x3btransform\x3atranslate\x28\x2d50\x25\x2c150\x25\x29\x7d100\x25\x7bmargin\x2dbottom\x3a0\x3b\x2dwebkit\x2dtransform\x3atranslate\x28\x2d50\x25\x2c0\x29\x3b\x2dms\x2dtransform\x3atranslate\x28\x2d50\x25\x2c0\x29\x3btransform\x3atranslate\x28\x2d50\x25\x2c0\x29\x7d\x7d\x2emf\x2dmodal\x2doverlay\x7bposition\x3afixed\x3btop\x3a0\x3bleft\x3a0\x3bright\x3a0\x3bbackground\x3a\x23000\x3bz\x2dindex\x3a21002\x3bwidth\x3a100\x25\x3bheight\x3a100\x25\x3bopacity\x3a \x2e7\x7d\x2emf\x2dmodal\x2diframe\x7bposition\x3afixed\x3bz\x2dindex\x3a21003\x3bleft\x3a50\x25\x7d\x2emf\x2dmodal\x2diframe\x2emf\x2danimate\x7b\x2dwebkit\x2danimation\x2dfill\x2dmode\x3aforwards\x3banimation\x2dfill\x2dmode\x3aforwards\x3b\x2dwebkit\x2danimation\x2dduration\x3a0\x2e3s\x3banimation\x2dduration\x3a0\x2e3s\x3b\x2dwebkit\x2danimation\x2dtiming\x2dfunction\x3aease\x2din\x2dout\x3banimation\x2dtiming\x2dfunction\x3aease\x2din\x2dout\x7d\x2emf\x2dmodal\x2diframe\x2emf\x2dmodal\x2diframe\x2dtop\x7btop\x3a10px\x3bmargin\x2dtop\x3a\x2d100\x25\x3b\x2dwebkit\x2dtransform\x3atranslate\x28\x2d50\x25\x2c0\x29\x3b\x2dms\x2dtransform\x3atranslate\x28\x2d50\x25\x2c0\x29\x3btransform\x3atranslate\x28\x2d50\x25\x2c0\x29\x7d\x2emf\x2dmodal\x2diframe\x2emf\x2dmodal\x2diframe\x2dtop\x2emf\x2danimate\x7b\x2dwebkit\x2danimation\x2dname\x3amf\x2dmodal\x2dslide\x2ddown\x2dtop\x3banimation\x2dname\x3amf\x2dmodal\x2dslide\x2ddown\x2dtop\x7d\x2emf\x2dmodal\x2diframe\x2emf\x2dmodal\x2diframe\x2dmiddle\x7btop\x3a50\x25\x3bmargin\x2dtop\x3a\x2d100\x25\x3b\x2dwebkit\x2dtransform\x3atranslate\x28\x2d50\x25\x2c\x2d50\x25\x29\x3b\x2dms\x2dtransform\x3atranslate\x28\x2d50\x25\x2c\x2d50\x25\x29\x3btransform\x3atranslate\x28\x2d50\x25\x2c\x2d50\x25\x29\x7d\x2emf\x2dmodal\x2diframe\x2emf\x2dmodal\x2diframe\x2dmiddle\x2emf\x2danimate\x7b\x2dwebkit\x2danimation\x2dname\x3amf\x2dmodal\x2dslide\x2ddown\x2dmiddle\x3banimation\x2dname\x3amf\x2dmodal\x2dslide\x2ddown\x2dmiddle\x7d\x2emf\x2dmodal\x2diframe\x2emf\x2dmodal\x2diframe\x2dbottom\x7bbottom\x3a10px\x3bmargin\x2dbottom\x3a\x2d100\x25\x3b\x2dwebkit\x2dtransform\x3atranslate\x28\x2d50\x25\x2c0\x29\x3b\x2dms\x2dtransform\x3atranslate\x28\x2d50\x25\x2c0\x29\x3btransform\x3atranslate\x28\x2d50\x25\x2c0\x29\x7d\x2emf\x2dmodal\x2diframe\x2emf\x2dmodal\x2diframe\x2dbottom\x2emf\x2danimate\x7b\x2dwebkit\x2danimation\x2dname\x3amf\x2dmodal\x2dslide\x2dup\x2dbottom\x3banimation\x2dname\x3amf\x2dmodal\x2dslide\x2dup\x2dbottom\x7d\x2emf\x2dmodal\x2diframe\x2emf\x2dloaded\x7bmargin\x2dtop\x3a0\x3bmargin\x2dbottom\x3a0\x7d\x40\x2dwebkit\x2dkeyframes mf\x2dnotification\x2dslide\x2dleft\x7b0\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x28150\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x28150\x25\x29\x3btransform\x3atranslateX\x28150\x25\x29\x7d50\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x28\x2d8\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x28\x2d8\x25\x29\x3btransform\x3atranslateX\x28\x2d8\x25\x29\x7d65\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x284\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x284\x25\x29\x3btransform\x3atranslateX\x284\x25\x29\x7d80\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x28\x2d4\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x28\x2d4\x25\x29\x3btransform\x3atranslateX\x28\x2d4\x25\x29\x7d95\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x282\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x282\x25\x29\x3btransform\x3atranslateX\x282\x25\x29\x7d100\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x280\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x280\x25\x29\x3btransform\x3atranslateX\x280\x25\x29\x7d\x7d\x40keyframes mf\x2dnotification\x2dslide\x2dleft\x7b0\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x28150\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x28150\x25\x29\x3btransform\x3atranslateX\x28150\x25\x29\x7d50\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x28\x2d8\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x28\x2d8\x25\x29\x3btransform\x3atranslateX\x28\x2d8\x25\x29\x7d65\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x284\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x284\x25\x29\x3btransform\x3atranslateX\x284\x25\x29\x7d80\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x28\x2d4\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x28\x2d4\x25\x29\x3btransform\x3atranslateX\x28\x2d4\x25\x29\x7d95\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x282\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x282\x25\x29\x3btransform\x3atranslateX\x282\x25\x29\x7d100\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x280\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x280\x25\x29\x3btransform\x3atranslateX\x280\x25\x29\x7d\x7d\x40\x2dwebkit\x2dkeyframes mf\x2dnotification\x2dslide\x2dright\x7b0\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x28\x2d150\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x28\x2d150\x25\x29\x3btransform\x3atranslateX\x28\x2d150\x25\x29\x7d50\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x288\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x288\x25\x29\x3btransform\x3atranslateX\x288\x25\x29\x7d65\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x28\x2d4\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x28\x2d4\x25\x29\x3btransform\x3atranslateX\x28\x2d4\x25\x29\x7d80\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x284\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x284\x25\x29\x3btransform\x3atranslateX\x284\x25\x29\x7d95\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x28\x2d2\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x28\x2d2\x25\x29\x3btransform\x3atranslateX\x28\x2d2\x25\x29\x7d100\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x280\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x280\x25\x29\x3btransform\x3atranslateX\x280\x25\x29\x7d\x7d\x40keyframes mf\x2dnotification\x2dslide\x2dright\x7b0\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x28\x2d150\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x28\x2d150\x25\x29\x3btransform\x3atranslateX\x28\x2d150\x25\x29\x7d50\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x288\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x288\x25\x29\x3btransform\x3atranslateX\x288\x25\x29\x7d65\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x28\x2d4\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x28\x2d4\x25\x29\x3btransform\x3atranslateX\x28\x2d4\x25\x29\x7d80\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x284\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x284\x25\x29\x3btransform\x3atranslateX\x284\x25\x29\x7d95\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x28\x2d2\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x28\x2d2\x25\x29\x3btransform\x3atranslateX\x28\x2d2\x25\x29\x7d100\x25\x7b\x2dwebkit\x2dtransform\x3atranslateX\x280\x25\x29\x3b\x2dms\x2dtransform\x3atranslateX\x280\x25\x29\x3btransform\x3atranslateX\x280\x25\x29\x7d\x7d\x2emf\x2dnotification\x2diframe\x7bposition\x3afixed\x3bz\x2dindex\x3a21001\x3bmargin\x2dtop\x3a\x2d100\x25\x7d\x2emf\x2dnotification\x2diframe\x2emf\x2dloaded\x7bmargin\x2dtop\x3a0\x3bmargin\x2dbottom\x3a0\x7d\x2emf\x2dnotification\x2diframe\x2emf\x2dloaded\x2emf\x2danimate\x7b\x2dwebkit\x2danimation\x2dduration\x3a1s\x3banimation\x2dduration\x3a1s\x3b\x2dwebkit\x2danimation\x2dtiming\x2dfunction\x3aease\x2din\x2dout\x3banimation\x2dtiming\x2dfunction\x3aease\x2din\x2dout\x7d\x2emf\x2dnotification\x2diframe\x2emf\x2dloaded\x2emf\x2dnotification\x2diframe\x2dtop\x2dleft\x7btop\x3a5px\x3bleft\x3a5px\x7d\x2emf\x2dnotification\x2diframe\x2emf\x2dloaded\x2emf\x2dnotification\x2diframe\x2dtop\x2dleft\x2emf\x2danimate\x7b\x2dwebkit\x2danimation\x2dname\x3amf\x2dnotification\x2dslide\x2dright\x3banimation\x2dname\x3amf\x2dnotification\x2dslide\x2dright\x7d\x2emf\x2dnotification\x2diframe\x2emf\x2dloaded\x2emf\x2dnotification\x2diframe\x2dtop\x2dright\x7btop\x3a5px\x3bright\x3a5px\x7d\x2emf\x2dnotification\x2diframe\x2emf\x2dloaded\x2emf\x2dnotification\x2diframe\x2dtop\x2dright\x2emf\x2danimate\x7b\x2dwebkit\x2danimation\x2dname\x3amf\x2dnotification\x2dslide\x2dleft\x3banimation\x2dname\x3amf\x2dnotification\x2dslide\x2dleft\x7d\x2emf\x2dnotification\x2diframe\x2emf\x2dloaded\x2emf\x2dnotification\x2diframe\x2dbottom\x2dleft\x7bbottom\x3a5px\x3bleft\x3a5px\x7d\x2emf\x2dnotification\x2diframe\x2emf\x2dloaded\x2emf\x2dnotification\x2diframe\x2dbottom\x2dleft\x2emf\x2danimate\x7b\x2dwebkit\x2danimation\x2dname\x3amf\x2dnotification\x2dslide\x2dright\x3banimation\x2dname\x3amf\x2dnotification\x2dslide\x2dright\x7d\x2emf\x2dnotification\x2diframe\x2emf\x2dloaded\x2emf\x2dnotification\x2diframe\x2dbottom\x2dright\x7bbottom\x3a5px\x3bright\x3a5px\x7d\x2emf\x2dnotification\x2diframe\x2emf\x2dloaded\x2emf\x2dnotification\x2diframe\x2dbottom\x2dright\x2emf\x2danimate\x7b\x2dwebkit\x2danimation\x2dname\x3amf\x2dnotification\x2dslide\x2dleft\x3banimation\x2dname\x3amf\x2dnotification\x2dslide\x2dleft\x7d\x2emf\x2dnotification\x2diframe\x2emf\x2dloaded\x2emf\x2dresponsive\x7bleft\x3a0 \x21important\x3bright\x3a0 \x21important\x7d\x2emf\x2dpage\x2diframe\x7bposition\x3afixed\x3bz\x2dindex\x3a21005\x3btop\x3a1px\x3bright\x3a1px\x3bleft\x3a1px\x3bbottom\x3a1px\x3bwidth\x3a100\x25\x3bheight\x3a100\x25\x7d\x40media only screen and \x28max\x2dwidth\x3a 667px\x29\x7b\x2emf\x2dpage\x2diframe\x7btop\x3a0\x3bright\x3a0\x3bleft\x3a0\x3bbottom\x3a0\x7d\x7d",
head = document.head || document.getElementsByTagName('head')[0],
style = document.createElement('style');head.appendChild(style);
style.type = 'text/css';
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
style.appendChild(document.createTextNode(css));
}
} else if (Focus.debug) {
console.log('Shared style already inserted into head');
}
},// Inserts styling into the iframe's head
insertFocusStyleIntoIframeHead: function () {
// Insert style into iframe header
var frameDoc = Focus.iframe.contentDocument;
var frameHead = frameDoc.getElementsByTagName('head').item(0);var css = "\x2emf\x2dbar\x2diframe\x7bz\x2dindex\x3a19000\x7d\x2emf\x2dcontent\x7bline\x2dheight\x3a1\x2e1\x7d\x2emf\x2dcontent \x2emf\x2dinner\x2dcontainer\x7bmargin\x2dtop\x3a20px\x7d\x2emf\x2dcontent a\x2emf\x2dlink\x2c\x0a\x2emf\x2dcontent \x2emauticform\x2dbutton\x7bpadding\x3a5px\x0a15px\x3b\x2dwebkit\x2dborder\x2dradius\x3a4px\x3b\x2dmoz\x2dborder\x2dradius\x3a4px\x3bborder\x2dradius\x3a4px\x3bcursor\x3apointer\x3btext\x2dalign\x3acenter\x3btext\x2ddecoration\x3anone\x3bborder\x3anone\x7d\x2emf\x2dcontent a\x2emf\x2dlink\x3ahover\x2c\x0a\x2emf\x2dcontent \x2emauticform\x2dbutton\x3ahover\x7bopacity\x3a0\x2e9\x3btext\x2ddecoration\x3anone\x3bborder\x3anone\x7d\x2emautic\x2dfocus \x2emauticform\x5fwrapper\x0aform\x7bpadding\x3a0\x3bmargin\x3a0\x7d\x2emautic\x2dfocus \x2emauticform\x2dinput\x2c\x0a\x2emautic\x2dfocus\x0aselect\x7bborder\x2dradius\x3a2px\x3bpadding\x3a5px\x0a8px\x3bcolor\x3a\x23757575\x3bborder\x3a1px\x0asolid \x23ababab\x7d\x2emautic\x2dfocus \x2emauticform\x2dinput\x3afocus\x2c\x0a\x2emautic\x2dfocus select\x3afocus\x7boutline\x3anone\x3bborder\x3a1px\x0asolid \x23757575\x7d\x2emf\x2dbar\x7bwidth\x3a100\x25\x3bposition\x3afixed\x3bleft\x3a0\x3bright\x3a0\x3bdisplay\x3atable\x3bpadding\x2dleft\x3a5px\x3bpadding\x2dright\x3a5px\x3bz\x2dindex\x3a20000\x7d\x2emf\x2dbar\x2emf\x2dbar\x2dtop\x7btop\x3a0\x7d\x2emf\x2dbar\x2emf\x2dbar\x2dbottom\x7bbottom\x3a0\x7d\x2emf\x2dbar \x2emf\x2dbar\x2dcollapse\x7bwidth\x3a100px\x3bdisplay\x3atable\x2dcell\x3bvertical\x2dalign\x3amiddle\x3bline\x2dheight\x3a13px\x7d\x2emf\x2dbar \x2emf\x2dcontent\x7bdisplay\x3atable\x2dcell\x3bvertical\x2dalign\x3amiddle\x3btext\x2dalign\x3acenter\x7d\x2emf\x2dbar \x2emf\x2dcontent \x2emf\x2dlink\x7bmargin\x2dleft\x3a10px\x3bpadding\x3a2px\x0a15px\x7d\x2emf\x2dbar \x2emf\x2dcontent \x2emf\x2dheadline\x7bdisplay\x3ainline\x2dblock\x7d\x2emf\x2dbar\x2emf\x2dbar\x2dregular\x7bheight\x3a30px\x3bfont\x2dsize\x3a14px\x7d\x2emf\x2dbar\x2emf\x2dbar\x2dregular\x2e\x2emf\x2dbar\x2dtop \x2emf\x2dbar\x2dcollapser\x2dicon\x0asvg\x7bmargin\x3a3px\x0a0 0 0\x7d\x2emf\x2dbar\x2emf\x2dbar\x2dregular\x2e\x2emf\x2dbar\x2dbottom \x2emf\x2dbar\x2dcollapser\x2dicon\x0asvg\x7bmargin\x3a\x2d3px 0 0 0\x7d\x2emf\x2dbar\x2emf\x2dbar\x2dregular \x2emauticform\x2dinput\x2c\x0a\x2emf\x2dbar\x2emf\x2dbar\x2dregular select\x2c\x0a\x2emf\x2dbar\x2emf\x2dbar\x2dregular \x2emauticform\x2dbutton\x7bpadding\x3a3px\x0a6px\x3bfont\x2dsize\x3a0\x2e9em\x7d\x2emf\x2dbar\x2emf\x2dbar\x2dlarge\x7bheight\x3a50px\x3bfont\x2dsize\x3a17px\x7d\x2emf\x2dbar\x2emf\x2dbar\x2dlarge\x2e\x2emf\x2dbar\x2dtop \x2emf\x2dbar\x2dcollapser\x2dicon\x0asvg\x7bmargin\x3a5px\x0a0 0 0\x7d\x2emf\x2dbar\x2emf\x2dbar\x2dlarge\x2e\x2emf\x2dbar\x2dbottom \x2emf\x2dbar\x2dcollapser\x2dicon\x0asvg\x7bmargin\x3a\x2d5px 0 0 0\x7d\x2emf\x2dbar\x2emf\x2dbar\x2dlarge \x2emf\x2dlink\x7bfont\x2dsize\x3a1em\x7d\x2emf\x2dbar\x2emf\x2dbar\x2dlarge \x2emauticform\x2dinput\x2c\x0a\x2emf\x2dbar\x2emf\x2dbar\x2dlarge select\x2c\x0a\x2emf\x2dbar\x2emf\x2dbar\x2dlarge \x2emauticform\x2dbutton\x7bfont\x2dsize\x3a1em\x7d\x2emf\x2dbar \x2emauticform\x2drow\x2c\x0a\x2emf\x2dbar \x2emauticform\x2dcheckboxgrp\x2drow\x2c\x0a\x2emf\x2dbar \x2emauticform\x2dradiogrp\x2drow\x7bdisplay\x3ainline\x2dblock\x3bmargin\x2dright\x3a3px\x7d\x2emf\x2dbar \x2emauticform\x2drow \x2emauticform\x2dinput\x2c\x0a\x2emf\x2dbar \x2emauticform\x2drow\x0aselect\x7bcolor\x3a\x23000\x7d\x2emf\x2dbar \x2emauticform\x2dlabel\x7bdisplay\x3anone\x7d\x2emf\x2dbar\x0a\x2emauticform\x5fwrapper\x7bdisplay\x3ainline\x2dblock\x7d\x2emf\x2dbar \x2emf\x2dresponsive \x2emf\x2dbar\x2dcollapse\x2c\x0a\x2emf\x2dbar \x2emf\x2dresponsive \x2emf\x2dbar\x2dcollapser\x7bdisplay\x3anone \x21important\x7d\x2emf\x2dbar\x2dcollapser\x7bposition\x3aabsolute\x3bright\x3a3px\x3bwidth\x3a24px\x3bheight\x3a24px\x3btext\x2dalign\x3acenter\x3bz\x2dindex\x3a21000\x7d\x2emf\x2dbar\x2dcollapser\x2emf\x2dbar\x2dcollapser\x2dtop\x7btop\x3a0\x3bborder\x2dbottom\x2dright\x2dradius\x3a4px\x3bborder\x2dbottom\x2dleft\x2dradius\x3a4px\x7d\x2emf\x2dbar\x2dcollapser\x2emf\x2dbar\x2dcollapser\x2dtop \x2emf\x2dbar\x2dcollapser\x2dicon\x0asvg\x7bmargin\x3a2px\x0a0 0 0\x7d\x2emf\x2dbar\x2dcollapser\x2emf\x2dbar\x2dcollapser\x2dbottom\x7bbottom\x3a0\x3bborder\x2dtop\x2dright\x2dradius\x3a4px\x3bborder\x2dtop\x2dleft\x2dradius\x3a4px\x7d\x2emf\x2dbar\x2dcollapser\x2emf\x2dbar\x2dcollapser\x2dbottom \x2emf\x2dbar\x2dcollapser\x2dicon\x0asvg\x7bmargin\x3a\x2d2px 0 0 0\x7d\x2emf\x2dbar\x2dcollapser\x2emf\x2dbar\x2dcollapser\x2dlarge\x7bwidth\x3a40px\x3bheight\x3a40px\x7d\x2emf\x2dbar\x2dcollapser\x2emf\x2dbar\x2dcollapser\x2dlarge\x2emf\x2dbar\x2dcollapser\x2dtop \x2emf\x2dbar\x2dcollapser\x2dicon\x0asvg\x7bmargin\x3a4px\x0a0 0 0\x7d\x2emf\x2dbar\x2dcollapser\x2emf\x2dbar\x2dcollapser\x2dlarge\x2emf\x2dbar\x2dcollapser\x2dbottom \x2emf\x2dbar\x2dcollapser\x2dicon\x0asvg\x7bmargin\x3a\x2d4px 0 0 0\x7d\x2emf\x2dbar\x2dcollapser\x2emf\x2dbar\x2dcollapser\x2dsticky\x7bposition\x3afixed\x7d\x2emf\x2dbar\x2dcollapser\x2emf\x2dbar\x2dcollapser\x2dtop\x2emf\x2dbar\x2dcollapsed \x2emf\x2dbar\x2dcollapser\x2dicon svg\x2c\x0a\x2emf\x2dbar\x2dcollapser\x2emf\x2dbar\x2dcollapser\x2dbottom\x2emf\x2dbar\x2dcollapsed \x2emf\x2dbar\x2dcollapser\x2dicon\x0asvg\x7bmargin\x3a0\x7d\x2emf\x2dbar\x2dcollapser a\x2emf\x2dbar\x2dcollapser\x2dicon\x7bposition\x3arelative\x3bdisplay\x3ainline\x2dblock\x7d\x2emf\x2dbar\x2dcollapser a\x2emf\x2dbar\x2dcollapser\x2dicon\x3aafter\x7bcontent\x3a\x22\x22\x3bposition\x3aabsolute\x3btop\x3a0\x3bright\x3a0\x3bbottom\x3a0\x3bleft\x3a0\x7d\x40media only screen and \x28max\x2dwidth\x3a 667px\x29\x7b\x2emf\x2dbar\x2dcollapse\x2c\x2emf\x2dbar\x2dcollapser\x7bdisplay\x3anone \x21important\x7d\x7d\x2emf\x2dmodal\x7bposition\x3afixed\x3bopacity\x3a1\x3bz\x2dindex\x3a2000\x3bmargin\x3aauto\x3bpadding\x3a45px\x3bborder\x2dradius\x3a4px\x3bborder\x2dwidth\x3a6px 1px 1px 1px\x3bborder\x2dstyle\x3asolid\x3bbackground\x3a\x23fff\x3bwidth\x3a40em\x3bmax\x2dwidth\x3a40em\x3btext\x2dalign\x3acenter\x7d\x2emf\x2dmodal \x2emf\x2dcontent\x7bmargin\x2dbottom\x3a30px\x7d\x2emf\x2dmodal \x2emf\x2dcontent \x2emf\x2dheadline\x7bfont\x2dsize\x3a1\x2e6em\x3bfont\x2dweight\x3a600\x7d\x2emf\x2dmodal \x2emf\x2dcontent \x2emf\x2dtagline\x7bfont\x2dsize\x3a1\x2e2em\x3bfont\x2dweight\x3anormal\x3bmargin\x2dtop\x3a4px\x7d\x2emf\x2dmodal \x2emf\x2dcontent a\x2emf\x2dlink\x7bdisplay\x3ablock\x3bmax\x2dwidth\x3a70\x25\x3bpadding\x3a10px\x3bmargin\x3aauto\x3bfont\x2dsize\x3a1\x2e2em\x7d\x2emf\x2dmodal \x2emf\x2dmodal\x2dclose\x7bposition\x3aabsolute\x3btop\x3a0\x3bright\x3a8px\x7d\x2emf\x2dmodal \x2emf\x2dmodal\x2dclose\x0aa\x7bfont\x2dsize\x3a1\x2e4em\x3bcolor\x3a\x23757575\x3bopacity\x3a \x2e4\x3btext\x2ddecoration\x3anone\x7d\x2emf\x2dmodal \x2emf\x2dmodal\x2dclose a\x3ahover\x7bopacity\x3a \x2e8\x3btext\x2ddecoration\x3anone\x7d\x2emf\x2dmodal \x2emauticform\x2dinput\x2c\x0a\x2emf\x2dmodal \x2emauticform\x2drow select\x2c\x0a\x2emf\x2dmodal \x2emauticform\x2dbutton\x7bwidth\x3a75\x25\x3bheight\x3a35px\x3bmargin\x2dbottom\x3a5px\x7d\x2emf\x2dresponsive\x2emf\x2dmodal\x2c\x0a\x2emf\x2dresponsive \x2emf\x2dmodal\x7bwidth\x3a90\x25\x3bpadding\x3a10px\x7d\x2emf\x2dnotification\x7bposition\x3afixed\x3bopacity\x3a1\x3bz\x2dindex\x3a2000\x3bmargin\x3aauto\x3bbackground\x3a\x23fff\x3bborder\x2dradius\x3a4px\x3bborder\x2dwidth\x3a6px 1px 1px 1px\x3bborder\x2dstyle\x3asolid\x3bmin\x2dheight\x3a8em\x3bpadding\x3a10px\x0a20px\x3bwidth\x3a350px\x7d\x2emf\x2dnotification \x2emf\x2dcontent\x7bmargin\x2dbottom\x3a30px\x7d\x2emf\x2dnotification \x2emf\x2dcontent \x2emf\x2dheadline\x7bfont\x2dsize\x3a1\x2e2em\x3bfont\x2dweight\x3a600\x7d\x2emf\x2dnotification \x2emf\x2dcontent \x2emf\x2dtagline\x7bfont\x2dsize\x3a1em\x3bfont\x2dweight\x3anormal\x3bmargin\x2dtop\x3a4px\x7d\x2emf\x2dnotification \x2emf\x2dnotification\x2dclose\x7bposition\x3aabsolute\x3btop\x3a0\x3bright\x3a8px\x7d\x2emf\x2dnotification \x2emf\x2dnotification\x2dclose\x0aa\x7bfont\x2dsize\x3a1em\x3bcolor\x3a\x23757575\x3bopacity\x3a \x2e4\x3btext\x2ddecoration\x3anone\x7d\x2emf\x2dnotification \x2emf\x2dnotification\x2dclose a\x3ahover\x7bopacity\x3a \x2e8\x3btext\x2ddecoration\x3anone\x7d\x2emf\x2dnotification \x2emauticform\x2dinput\x2c\x0a\x2emf\x2dnotification \x2emauticform\x2drow select\x2c\x0a\x2emf\x2dnotification \x2emauticform\x2dbutton\x7bwidth\x3a100\x25\x3bheight\x3a28px\x3bmargin\x2dbottom\x3a2px\x7d\x2emf\x2dresponsive\x2emf\x2dnotification\x2c\x0a\x2emf\x2dresponsive \x2emf\x2dnotification\x7bwidth\x3a90\x25\x3bpadding\x3a10px\x3bleft\x3a0\x3bright\x3a0\x7d\x2emf\x2dpage\x7bposition\x3afixed\x3bopacity\x3a1\x3bz\x2dindex\x3a20000\x3bmargin\x3aauto\x3bpadding\x3a45px\x3bbackground\x3a\x23fff\x3bborder\x2dradius\x3a2px\x3bborder\x2dwidth\x3a6px 1px 1px 1px\x3bborder\x2dstyle\x3asolid\x3btop\x3a1px\x3bright\x3a1px\x3bleft\x3a1px\x3bbottom\x3a1px\x3btext\x2dalign\x3acenter\x7d\x2emf\x2dpage \x2emf\x2dcontent\x7bposition\x3aabsolute\x3bmin\x2dwidth\x3a75\x25\x3btop\x3a50\x25\x3bleft\x3a50\x25\x3bright\x3a0\x3btransform\x3atranslate\x28\x2d50\x25\x2c\x2d50\x25\x29\x3b\x2dwebkit\x2dtransform\x3atranslate\x28\x2d50\x25\x2c\x2d50\x25\x29\x3b\x2dms\x2dtransform\x3atranslate\x28\x2d50\x25\x2c\x2d50\x25\x29\x3bmargin\x2dbottom\x3a30px\x7d\x2emf\x2dpage \x2emf\x2dcontent \x2emf\x2dheadline\x7bfont\x2dsize\x3a2\x2e5em\x3bfont\x2dweight\x3a600\x7d\x2emf\x2dpage \x2emf\x2dcontent \x2emf\x2dtagline\x7bfont\x2dsize\x3a1\x2e8em\x3bfont\x2dweight\x3anormal\x3bmargin\x2dtop\x3a4px\x7d\x2emf\x2dpage \x2emf\x2dcontent a\x2emf\x2dlink\x7bpadding\x3a10px\x0a15px\x3bdisplay\x3ablock\x3bmax\x2dwidth\x3a50\x25\x3bmargin\x3aauto\x3bfont\x2dsize\x3a1\x2e8em\x7d\x2emf\x2dpage \x2emf\x2dpage\x2dclose\x7bposition\x3aabsolute\x3btop\x3a0\x3bright\x3a8px\x7d\x2emf\x2dpage \x2emf\x2dpage\x2dclose\x0aa\x7bfont\x2dsize\x3a1\x2e8em\x3bcolor\x3a\x23757575\x3bopacity\x3a \x2e4\x3btext\x2ddecoration\x3anone\x7d\x2emf\x2dpage \x2emf\x2dpage\x2dclose a\x3ahover\x7bopacity\x3a \x2e8\x3btext\x2ddecoration\x3anone\x7d\x2emf\x2dpage \x2emauticform\x2dinput\x2c\x0a\x2emf\x2dpage \x2emauticform\x2drow select\x2c\x0a\x2emf\x2dpage \x2emauticform\x2dbutton\x7bwidth\x3a75\x25\x3bheight\x3a40px\x3bfont\x2dsize\x3a1\x2e6em\x3bmargin\x2dbottom\x3a8px\x7d";
var style = frameDoc.createElement('style');style.type = 'text/css';
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
style.appendChild(frameDoc.createTextNode(css));
}
frameHead.appendChild(style);var metaTag = frameDoc.createElement('meta');
metaTag.name = "viewport"
metaTag.content = "width=device-width,initial-scale=1,minimum-scale=1.0 maximum-scale=1.0"
frameHead.appendChild(metaTag);
},// Generates the focus HTML
engageVisitor: function () {
var now = Math.floor(Date.now() / 1000);if (Focus.cookies.hasItem('mautic_focus_2')) {
if (Focus.debug)
console.log('Cookie exists thus checking frequency');var lastEngaged = parseInt(Focus.cookies.getItem('mautic_focus_2')),
frequency = 'once',
engage;if (Focus.ignoreConverted && lastEngaged == -1) {
if (Focus.debug)
console.log('Visitor converted; abort');return false;
}switch (frequency) {
case 'once':
engage = false;
if (Focus.debug)
console.log('Engage once, abort');break;
case 'everypage':
engage = true;
if (Focus.debug)
console.log('Engage on every page, continue');break;
case 'q2min':
engage = (now - lastEngaged) >= 120;
if (Focus.debug) {
var debugMsg = 'Engage q2 minute, ';
if (engage) {
debugMsg += 'continue';
} else {
debugMsg += 'engage in ' + (120 - (now - lastEngaged)) + ' seconds';
}
console.log(debugMsg);
}break;
case 'q15min':
engage = (now - lastEngaged) >= 900;
if (Focus.debug) {
var debugMsg = 'Engage q15 minute, ';
if (engage) {
debugMsg += 'continue';
} else {
debugMsg += 'engage in ' + (120 - (now - lastEngaged)) + ' seconds';
}
console.log(debugMsg);
}break;
case 'hourly':
engage = (now - lastEngaged) >= 3600;
if (Focus.debug) {
var debugMsg = 'Engage hourly, ';
if (engage) {
debugMsg += 'continue';
} else {
debugMsg += 'engage in ' + (120 - (now - lastEngaged)) + ' seconds';
}
console.log(debugMsg);
}break;
case 'daily':
engage = (now - lastEngaged) >= 86400;
if (Focus.debug) {
var debugMsg = 'Engage daily, ';
if (engage) {
debugMsg += 'continue';
} else {
debugMsg += 'engage in ' + (120 - (now - lastEngaged)) + ' seconds';
}
console.log(debugMsg);
}break;
}if (!engage) {return false;
}
}if (Focus.debug)
console.log('engageVisitor()');// Inject iframe
Focus.createIframe();// Inject content into iframe
Focus.iframeDoc.open();
Focus.iframeDoc.write("\x3cdiv\x3e\x3cstyle scoped\x3e\x2emautic\x2dfocus \x7b\x0a            font\x2dfamily\x3a \x27Times New Roman\x27\x2c Times\x2c serif\x3b\x0a            color\x3a \x23000000\x3b\x0a        \x7d\x0a\x0a        \x0a        \x2emf\x2dcontent a\x2emf\x2dlink\x2c \x2emf\x2dcontent \x2emauticform\x2dbutton \x7b\x0a            background\x2dcolor\x3a \x23d91438\x3b\x0a            color\x3a \x23fcfcfc\x3b\x0a        \x7d\x0a\x0a        \x2emauticform\x2dinput\x3afocus\x2c select\x3afocus \x7b\x0a            border\x3a 1px solid \x23d91438\x3b\x0a        \x7d\x3c\x2fstyle\x3e\x3cstyle scoped\x3e\x2emf\x2dnotification \x7b\x0a            border\x2dcolor\x3a \x23666666        \x7d\x3c\x2fstyle\x3e\x3cdiv\x0aclass\x3d\x22mautic\x2dfocus mf\x2dnotification mf\x2dnotification\x2dbottom\x2dright\x22\x3e\x3cdiv\x0aclass\x3d\x22mf\x2dnotification\x2dcontainer\x22\x3e\x3cdiv\x0aclass\x3d\x22mf\x2dnotification\x2dclose\x22\x3e\x0a\x3ca\x0ahref\x3d\x22javascript\x3avoid\x280\x29\x22\x3ex\x3c\x2fa\x3e\x3c\x2fdiv\x3e\x3cdiv\x0aclass\x3d\x22mf\x2dcontent\x22\x3e\x3cdiv\x0aclass\x3d\x22mf\x2dheadline\x22\x3eNão perca nenhum conteúdo \x5co\x2f\x3c\x2fdiv\x3e\x3cdiv\x0aclass\x3d\x22mf\x2dtagline\x22\x3eReceba um resumo semanal de tudo que rolou no OneBitCode e seja avisado sobre as novidades\x2e\x3c\x2fdiv\x3e\x3cdiv\x0aclass\x3d\x22mf\x2dinner\x2dcontainer\x22\x3e\x0a \x3cscript type\x3d\x22text\x2fjavascript\x22\x3e\x2f\x2a\x2a This section is only needed once per page if manually copying \x2a\x2a\x2f\x0a    if \x28typeof MauticSDKLoaded \x3d\x3d \x27undefined\x27\x29 \x7b\x0a        var MauticSDKLoaded \x3d true\x3b\x0a        var head            \x3d document\x2egetElementsByTagName\x28\x27head\x27\x29\x5b0\x5d\x3b\x0a        var script          \x3d document\x2ecreateElement\x28\x27script\x27\x29\x3b\x0a        script\x2etype         \x3d \x27text\x2fjavascript\x27\x3b\x0a        script\x2esrc          \x3d \x27https\x3a\x2f\x2fmd\x2eonebitcode\x2ecom\x2fmedia\x2fjs\x2fmautic\x2dform\x2ejs\x27\x3b\x0a        script\x2eonload       \x3d function\x28\x29 \x7b\x0a            MauticSDK\x2eonLoad\x28\x29\x3b\x0a        \x7d\x3b\x0a        head\x2eappendChild\x28script\x29\x3b\x0a        var MauticDomain \x3d \x27https\x3a\x2f\x2fmd\x2eonebitcode\x2ecom\x27\x3b\x0a        var MauticLang   \x3d \x7b\x0a            \x27submittingMessage\x27\x3a \x22Por favor\x2c aguarde\x2e\x2e\x2e\x22\x0a        \x7d\x0a    \x7d\x3c\x2fscript\x3e \x3cscript\x3evar MauticFocusHandler \x3d function \x28messageType\x2c message\x29 \x7b\x0a            \x2f\x2f Store the HTML\x0a            var wrapper \x3d document\x2egetElementById\x28\x27mauticform\x5fwrapper\x5fnewsletteronebitcode\x5ffocus\x27\x29\x3b\x0a            var innerForm \x3d wrapper\x2egetElementsByClassName\x28\x27mauticform\x2dinnerform\x27\x29\x3b\x0a            innerForm\x5b0\x5d\x2estyle\x2edisplay \x3d \x22none\x22\x3b\x0a\x0a                        document\x2egetElementById\x28\x27mauticform\x5fnewsletteronebitcode\x5ffocus\x5f\x27 \x2b messageType\x29\x2estyle\x2efontSize \x3d \x221\x2e1em\x22\x3b\x0a            \x0a            var headline \x3d document\x2egetElementsByClassName\x28\x27mf\x2dheadline\x27\x29\x3b\x0a            if \x28headline\x2elength\x29 \x7b\x0a                headline\x5b0\x5d\x2estyle\x2edisplay \x3d \x22none\x22\x3b\x0a            \x7d\x0a\x0a            var tagline \x3d document\x2egetElementsByClassName\x28\x27mf\x2dtagline\x27\x29\x3b\x0a            if \x28tagline\x2elength\x29 \x7b\x0a                tagline\x5b0\x5d\x2estyle\x2edisplay \x3d \x22none\x22\x3b\x0a            \x7d\x0a\x0a            if \x28message\x29 \x7b\x0a                document\x2egetElementById\x28\x27mauticform\x5fnewsletteronebitcode\x5ffocus\x5f\x27 \x2b messageType\x29\x2einnerHTML \x3d message\x3b\x0a            \x7d\x0a\x0a            setTimeout\x28function \x28\x29 \x7b\x0a                if \x28headline\x2elength\x29 \x7b\x0a                                        headline\x5b0\x5d\x2estyle\x2edisplay \x3d \x22block\x22\x3b\x0a                                    \x7d\x0a                if \x28tagline\x2elength\x29 \x7b\x0a                    tagline\x5b0\x5d\x2estyle\x2edisplay \x3d \x22inherit\x22\x3b\x0a                \x7d\x0a\x0a                innerForm\x5b0\x5d\x2estyle\x2edisplay \x3d \x22inherit\x22\x3b\x0a                document\x2egetElementById\x28\x27mauticform\x5fnewsletteronebitcode\x5ffocus\x5f\x27 \x2b messageType\x29\x2einnerHTML \x3d \x27\x27\x3b\x0a            \x7d\x2c \x28messageType \x3d\x3d \x27error\x27\x29 \x3f 1500 \x3a 5000\x29\x3b\x0a        \x7d\x0a        if \x28typeof MauticFormCallback \x3d\x3d \x27undefined\x27\x29 \x7b\x0a            var MauticFormCallback \x3d \x7b\x7d\x3b\x0a        \x7d\x0a        MauticFormCallback\x5b\x22newsletteronebitcode\x5ffocus\x22\x5d \x3d \x7b\x0a            onMessageSet\x3a function \x28data\x29 \x7b\x0a                if \x28data\x2emessage\x29 \x7b\x0a                    MauticFocusHandler\x28data\x2etype\x29\x3b\x0a                \x7d\x0a            \x7d\x2c\x0a            onErrorMark\x3a function \x28data\x29 \x7b\x0a                if \x28data\x2evalidationMessage\x29 \x7b\x0a                    MauticFocusHandler\x28\x27error\x27\x2c data\x2evalidationMessage\x29\x3b\x0a\x0a                    return true\x3b\x0a                \x7d\x0a            \x7d\x2c\x0a            onResponse\x3a function \x28data\x29 \x7b\x0a                if \x28data\x2edownload\x29 \x7b\x0a                    \x2f\x2f Hit the download in the iframe\x0a                    document\x2egetElementById\x28\x27mauticiframe\x5fnewsletteronebitcode\x5ffocus\x27\x29\x2esrc \x3d data\x2edownload\x3b\x0a\x0a                    \x2f\x2f Register a callback for a redirect\x0a                    if \x28data\x2eredirect\x29 \x7b\x0a                        setTimeout\x28function \x28\x29 \x7b\x0a                            window\x2etop\x2elocation \x3d data\x2eredirect\x3b\x0a                        \x7d\x2c 2000\x29\x3b\x0a                    \x7d\x0a\x0a                    return true\x3b\x0a                \x7d else if \x28data\x2eredirect\x29 \x7b\x0a                    window\x2etop\x2elocation \x3d data\x2eredirect\x3b\x0a\x0a                    return true\x3b\x0a                \x7d\x0a\x0a                return false\x3b\x0a            \x7d\x0a        \x7d\x3c\x2fscript\x3e \x3cdiv\x0aid\x3d\x22mauticform\x5fwrapper\x5fnewsletteronebitcode\x5ffocus\x22 class\x3d\x22mauticform\x5fwrapper\x22\x3e\x3cform\x0aautocomplete\x3d\x22false\x22 role\x3d\x22form\x22 method\x3d\x22post\x22 action\x3d\x22https\x3a\x2f\x2fmd\x2eonebitcode\x2ecom\x2fform\x2fsubmit\x3fformId\x3d1\x22 id\x3d\x22mauticform\x5fnewsletteronebitcode\x5ffocus\x22  data\x2dmautic\x2dform\x3d\x22newsletteronebitcode\x5ffocus\x22 enctype\x3d\x22multipart\x2fform\x2ddata\x22\x3e\x3cdiv\x0aclass\x3d\x22mauticform\x2derror\x22 id\x3d\x22mauticform\x5fnewsletteronebitcode\x5ffocus\x5ferror\x22\x3e\x3c\x2fdiv\x3e\x3cdiv\x0aclass\x3d\x22mauticform\x2dmessage\x22 id\x3d\x22mauticform\x5fnewsletteronebitcode\x5ffocus\x5fmessage\x22\x3e\x3c\x2fdiv\x3e\x3cdiv\x0aclass\x3d\x22mauticform\x2dinnerform\x22\x3e\x3cdiv\x0aid\x3d\x22mauticform\x5fnewsletteronebitcode\x5ffocus\x5femail\x22  data\x2dvalidate\x3d\x22email\x22 data\x2dvalidation\x2dtype\x3d\x22email\x22 class\x3d\x22mauticform\x2drow mauticform\x2demail mauticform\x2dfield\x2d1 mauticform\x2drequired\x22\x3e\x0a\x3cinput\x0aid\x3d\x22mauticform\x5finput\x5fnewsletteronebitcode\x5ffocus\x5femail\x22 name\x3d\x22mauticform\x5bemail\x5d\x22 value\x3d\x22\x22 class\x3d\x22mauticform\x2dinput\x22 type\x3d\x22email\x22 \x2f\x3e\x0a\x3cspan\x0aclass\x3d\x22mauticform\x2derrormsg\x22 style\x3d\x22display\x3a none\x3b\x22\x3eIsso é obrigatório\x2e\x3c\x2fspan\x3e\x3c\x2fdiv\x3e\x3cdiv\x0aid\x3d\x22mauticform\x5fnewsletteronebitcode\x5ffocus\x5fsubmit\x22  class\x3d\x22mauticform\x2drow mauticform\x2dbutton\x2dwrapper mauticform\x2dfield\x2d2\x22\x3e\x0a\x3cbutton\x0atype\x3d\x22submit\x22 name\x3d\x22mauticform\x5bsubmit\x5d\x22 id\x3d\x22mauticform\x5finput\x5fnewsletteronebitcode\x5ffocus\x5fsubmit\x22 name\x3d\x22mauticform\x5bsubmit\x5d\x22 value\x3d\x22\x22 class\x3d\x22mauticform\x2dbutton btn btn\x2ddefault\x22 value\x3d\x221\x22\x3eEnviar\x3c\x2fbutton\x3e\x3c\x2fdiv\x3e\x3c\x2fdiv\x3e\x3cinput\x0atype\x3d\x22hidden\x22 name\x3d\x22mauticform\x5bformId\x5d\x22 id\x3d\x22mauticform\x5fnewsletteronebitcode\x5ffocus\x5fid\x22 value\x3d\x221\x22\x2f\x3e\x0a\x3cinput\x0atype\x3d\x22hidden\x22 name\x3d\x22mauticform\x5breturn\x5d\x22 id\x3d\x22mauticform\x5fnewsletteronebitcode\x5ffocus\x5freturn\x22 value\x3d\x22\x22\x2f\x3e\x0a\x3cinput\x0atype\x3d\x22hidden\x22 name\x3d\x22mauticform\x5bformName\x5d\x22 id\x3d\x22mauticform\x5fnewsletteronebitcode\x5ffocus\x5fname\x22 value\x3d\x22newsletteronebitcode\x5ffocus\x22\x2f\x3e\x3cinput\x0atype\x3d\x22hidden\x22 name\x3d\x22mauticform\x5bfocusId\x5d\x22 id\x3d\x22mauticform\x5fnewsletteronebitcode\x5ffocus\x5ffocus\x5fid\x22 value\x3d\x222\x22\x2f\x3e\x3c\x2fform\x3e\x3c\x2fdiv\x3e\x3c\x2fdiv\x3e\x3c\x2fdiv\x3e\x3c\x2fdiv\x3e\x3c\x2fdiv\x3e\x3cimg\x0asrc\x3d\x22\x2f\x2fmd\x2eonebitcode\x2ecom\x2ffocus\x2f2\x2fviewpixel\x2egif\x22 alt\x3d\x22Mautic Focus\x22 style\x3d\x22display\x3a none\x3b\x22\x2f\x3e\x3c\x2fdiv\x3e");
Focus.iframeDoc.close();var animate = true;Focus.iframe.onload = function() {
if (Focus.debug)
console.log('iframe loaded for '+Focus.iframe.getAttribute('src'));// Resize iframe
if (Focus.enableIframeResizer()) {
// Give iframe chance to resize
setTimeout(function () {
if (animate) {
Focus.addClass(Focus.iframe, "mf-animate");
}
Focus.addClass(Focus.iframe, "mf-loaded");
}, 35);
} else {
if (animate) {
Focus.addClass(Focus.iframe, "mf-animate");
}
Focus.addClass(Focus.iframe, "mf-loaded");
}
}// Set body margin to 0
Focus.iframeDoc.getElementsByTagName('body')[0].style.margin = 0;// Find elements that should be moved to parent
var move = Focus.iframeDoc.getElementsByClassName('mf-move-to-parent');
for (var i = 0; i < move.length; i++) {
var bodyFirstChild = document.body.firstChild;
Focus.addClass(move[i], 'mf-moved-2');
bodyFirstChild.parentNode.insertBefore(move[i], Focus.iframe);
}// Find elements that should be copied to parent
var copy = Focus.iframeDoc.getElementsByClassName('mf-copy-to-parent');
for (var i = 0; i < copy.length; i++) {
var bodyFirstChild = document.body.firstChild;
var clone = copy[i].cloneNode(true);
Focus.addClass(clone, 'mf-moved-2');
bodyFirstChild.parentNode.insertBefore(clone, Focus.iframe);
}// Get the main focus element
var focus = Focus.iframeDoc.getElementsByClassName('mautic-focus');
Focus.iframeFocus = focus[0];// Insert style into iframe head
Focus.insertFocusStyleIntoIframeHead();// Register events
Focus.registerClickEvents();
// Add cookie of last engagement
if (Focus.debug)
console.log('mautic_focus_2 cookie set for ' + now);Focus.cookies.removeItem('mautic_focus_2');
Focus.cookies.setItem('mautic_focus_2', now, Infinity, '/');
return true;
},// Enable iframe resizer
enableIframeResizer: function () {
if (typeof Focus.iframeResizerEnabled !== 'undefined') {
return true;
}Focus.iframeHeight = 0;
Focus.iframeWidth = 0;
Focus.iframeResizeInterval = setInterval(function () {
if (Focus.iframeHeight !== Focus.iframe.style.height) {
var useHeight = ((window.innerHeight < Focus.iframeFocus.offsetHeight) ?
window.innerHeight : Focus.iframeFocus.offsetHeight);useHeight += 10;
useHeight = useHeight + 'px';if (Focus.debug) {
console.log('window inner height = ' + window.innerHeight);
console.log('iframe offset height = ' + Focus.iframeFocus.offsetHeight);
console.log('iframe height set to ' + useHeight)
}Focus.iframe.style.height = useHeight;
Focus.iframeHeight = useHeight;
}if (Focus.iframeWidth !== Focus.iframe.style.width) {
if (Focus.debug) {
console.log('window inner width = ' + window.innerWidth);
console.log('iframe offset width = ' +  Focus.iframeFocus.offsetWidth);
}if (window.innerWidth <  Focus.iframeFocus.offsetWidth) {
// Responsive iframe
Focus.addClass(Focus.iframeFocus, 'mf-responsive');
Focus.addClass(Focus.iframe, 'mf-responsive');
Focus.iframe.style.width = window.innerWidth + 'px';
Focus.iframe.width = window.innerWidth;
if (Focus.debug)
console.log('iframe set to responsive width: ');} else {
Focus.iframe.style.width =  Focus.iframeFocus.offsetWidth + 'px';
Focus.iframe.width =  Focus.iframeFocus.offsetWidth + 'px';
Focus.removeClass(Focus.iframeFocus, 'mf-responsive');
Focus.removeClass(Focus.iframe, 'mf-responsive');if (Focus.debug)
console.log('iframe not a responsive width');
}Focus.iframeWidth = Focus.iframe.style.width;
}
}, 35);Focus.iframeResizerEnabled = true;return true;
return false;
},// Disable iframe resizer
disableIFrameResizer: function () {
if (typeof Focus.iframeResizerEnabled !== 'undefined') {
delete(Focus.iframeResizerEnabled);
}clearInterval(Focus.iframeResizeInterval);
},// Create iframe to load into body
createIframe: function () {
if (Focus.debug)
console.log('createIframe()');Focus.iframe = document.createElement('iframe');
Focus.iframe.style.border = 0;
Focus.iframe.style.width = "100%";
Focus.iframe.style.height = "100%";
Focus.iframe.src = "about:blank";
Focus.iframe.scrolling = "no";
Focus.iframe.className = "mf-notification-iframe mf-notification-iframe-bottom-right";var bodyFirstChild = document.body.firstChild;
bodyFirstChild.parentNode.insertBefore(Focus.iframe, bodyFirstChild);Focus.iframeDoc = Focus.iframe.contentWindow.document;
},// Execute event at current position
engageVisitorAtScrollPosition: function (event) {
var visualHeight = "innerHeight" in window
? window.innerHeight
: document.documentElement.offsetHeight;var scrollPos = window.pageYOffset,
atPos = 0;scrollPos += (visualHeight / 2);
atPos = (document.body.scrollHeight / 2);
if (Focus.debug)
console.log('scrolling: ' + scrollPos + ' >= ' + atPos);if (scrollPos >= atPos) {
window.removeEventListener('scroll', Focus.engageVisitorAtScrollPosition);
Focus.engageVisitor();
}
},// Create cookie noting visitor has been converted if applicable
convertVisitor: function () {
if (Focus.ignoreConverted) {
if (Focus.debug)
console.log('Visitor converted');Focus.cookies.setItem('mautic_focus_2', -1, Infinity);
} else if (Focus.debug) {
console.log('Visitor converted but ignoreConverted not enabled');
}
},// Element has class
hasClass: function (element, hasClass) {
return ( (" " + element.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + hasClass + " ") > -1 );
},// Add class to element
addClass: function (element, addClass) {
if (!Focus.hasClass(element, addClass)) {
element.className += " " + addClass;
}
},// Remove class from element
removeClass: function (element, removeClass) {
element.className = element.className.replace(new RegExp('\\b' + removeClass + '\\b'), '');
},// Cookie handling
cookies: {
/**
* :: cookies.js ::
* https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
* http://www.gnu.org/licenses/gpl-3.0-standalone.html
*/
getItem: function (sKey) {
if (!sKey) {
return null;
}
return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
},
setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
return false;
}this.removeItem(sKey);var sExpires = "";
if (vEnd) {
switch (vEnd.constructor) {
case Number:
sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
break;
case String:
sExpires = "; expires=" + vEnd;
break;
case Date:
sExpires = "; expires=" + vEnd.toUTCString();
break;
}
}
document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
return true;
},
removeItem: function (sKey, sPath, sDomain) {
if (!this.hasItem(sKey)) {
return false;
}
document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
return true;
},
hasItem: function (sKey) {
if (!sKey) {
return false;
}
return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
},
keys: function () {
var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) {
aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
}
return aKeys;
}
}
};return Focus;
}// Initialize
MauticFocus2().initialize();
})(window);