/* Do not modify this file directly. It is compiled from other files. */
/* globals IntersectionObserver, jQuery */
var jetpackLazyImagesModule=function(t){function e(){if(i=document.querySelectorAll("img[data-lazy-src]"),u=i.length,s&&s.disconnect(),"IntersectionObserver"in window)for(s=new IntersectionObserver(r,h),a=0;a<i.length;a++)c=i[a],c.getAttribute("data-lazy-loaded")||s.observe(c);else n(i)}function n(t){var e;for(e=0;e<t.length;e++){o(t[e])}}function r(t){var e;for(0===u&&s.disconnect(),e=0;e<t.length;e++){var n=t[e];n.intersectionRatio>0&&(u--,s.unobserve(n.target),o(n.target))}}function o(e){var n,r,o,i,s=t(e);s.length&&(n=s.attr("data-lazy-src"))&&(r=s.attr("data-lazy-srcset"),o=s.attr("data-lazy-sizes"),i=s.clone(),i.removeAttr("data-lazy-src"),i.removeAttr("data-lazy-srcset"),i.removeAttr("data-lazy-sizes"),i.addClass("jetpack-lazy-image--handled"),i.attr("data-lazy-loaded",1),i.attr("src",n),r&&i.attr("srcset",r),o&&i.attr("sizes",o),s.replaceWith(i),i.trigger("jetpack-lazy-loaded-image"))}var i,s,c,a,h={rootMargin:"200px 0px",threshold:.01},u=0;t(document).ready(function(){e(),t("body").bind("post-load",e)})};/**
 * The following is an Intersection observer polyfill which is licensed under
 * the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE and can be found at:
 * https://github.com/w3c/IntersectionObserver/tree/master/polyfill
 */
/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */
!function(t,e){"use strict";function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||u(),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,r=this.intersectionRect,o=r.width*r.height;this.intersectionRatio=n?o/n:this.isIntersecting?1:0}function r(t,e){var n=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=i(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function o(){return t.performance&&performance.now&&performance.now()}function i(t,e){var n=null;return function(){n||(n=setTimeout(function(){t(),n=null},e))}}function s(t,e,n,r){"function"==typeof t.addEventListener?t.addEventListener(e,n,r||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function c(t,e,n,r){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,r||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function a(t,e){var n=Math.max(t.top,e.top),r=Math.min(t.bottom,e.bottom),o=Math.max(t.left,e.left),i=Math.min(t.right,e.right),s=i-o,c=r-n;return s>=0&&c>=0&&{top:n,bottom:r,left:o,right:i,width:s,height:c}}function h(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):u()}function u(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function l(t,e){for(var n=e;n;){if(n==t)return!0;n=d(n)}return!1}function d(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)return void("isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}));var p=[];r.prototype.THROTTLE_TIMEOUT=100,r.prototype.POLL_INTERVAL=null,r.prototype.USE_MUTATION_OBSERVER=!0,r.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},r.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},r.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},r.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},r.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},r.prototype._parseRootMargin=function(t){var e=t||"0px",n=e.split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return n[1]=n[1]||n[0],n[2]=n[2]||n[0],n[3]=n[3]||n[1],n},r.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},r.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,c(t,"resize",this._checkForIntersections,!0),c(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},r.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():u();this._observationTargets.forEach(function(r){var i=r.element,s=h(i),c=this._rootContainsTarget(i),a=r.entry,u=t&&c&&this._computeTargetAndRootIntersection(i,e),l=r.entry=new n({time:o(),target:i,boundingClientRect:s,rootBounds:e,intersectionRect:u});a?t&&c?this._hasCrossedThreshold(a,l)&&this._queuedEntries.push(l):a&&a.isIntersecting&&this._queuedEntries.push(l):this._queuedEntries.push(l)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},r.prototype._computeTargetAndRootIntersection=function(n,r){if("none"!=t.getComputedStyle(n).display){for(var o=h(n),i=o,s=d(n),c=!1;!c;){var u=null,l=1==s.nodeType?t.getComputedStyle(s):{};if("none"==l.display)return;if(s==this.root||s==e?(c=!0,u=r):s!=e.body&&s!=e.documentElement&&"visible"!=l.overflow&&(u=h(s)),u&&!(i=a(u,i)))break;s=d(s)}return i}},r.prototype._getRootRect=function(){var t;if(this.root)t=h(this.root);else{var n=e.documentElement,r=e.body;t={top:0,left:0,right:n.clientWidth||r.clientWidth,width:n.clientWidth||r.clientWidth,bottom:n.clientHeight||r.clientHeight,height:n.clientHeight||r.clientHeight}}return this._expandRectByRootMargin(t)},r.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100}),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},r.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,r=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==r)for(var o=0;o<this.thresholds.length;o++){var i=this.thresholds[o];if(i==n||i==r||i<n!=i<r)return!0}},r.prototype._rootIsInDom=function(){return!this.root||l(e,this.root)},r.prototype._rootContainsTarget=function(t){return l(this.root||e,t)},r.prototype._registerInstance=function(){p.indexOf(this)<0&&p.push(this)},r.prototype._unregisterInstance=function(){var t=p.indexOf(this);-1!=t&&p.splice(t,1)},t.IntersectionObserver=r,t.IntersectionObserverEntry=n}(window,document),jetpackLazyImagesModule(jQuery);