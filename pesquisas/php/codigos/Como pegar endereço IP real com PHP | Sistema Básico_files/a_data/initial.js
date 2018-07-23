define("text!apps/adminbadge/css/app.css",[],function(){return'@media print{#shr-admin-badge{display:none !important}}#shr-badge-container-placeholder .shr-badge__button{cursor:wait}.shr-badge{z-index:2147483647;position:fixed;font-family:Arial,"Helvetica Neue",Helvetica,sans-serif !important;font-size:13px;}.shr-badge *{box-sizing:border-box}.shr-badge[class*="-left"]{transform:translateX(-40px);transition:all .3s cubic-bezier(.42,0,.19,1.64);}.shr-badge[class*="-left"] .shr-badge__button{padding-right:20px;}.shr-badge[class*="-left"] .shr-badge__button .shr-badge__button__logo{box-shadow:4px 0 0 0 #009f65,0 0 9px 0 rgba(0,0,0,0.5)}.shr-badge[class*="-left"] .shr-badge__menu{transition:all .4s ease-in-out;opacity:0}.shr-badge[class*="-left"]:hover,.shr-badge[class*="-left"].shr-hover{transform:translateX(0)}.shr-badge[class*="-right"]{transform:translateX(40px);transition:all .3s cubic-bezier(.42,0,.19,1.64);}.shr-badge[class*="-right"] .shr-badge__button{padding-left:20px;}.shr-badge[class*="-right"] .shr-badge__button .shr-badge__button__logo{box-shadow:-4px 0 0 0 #009f65,0 0 9px 0 rgba(0,0,0,0.5)}.shr-badge[class*="-right"] .shr-badge__menu{transition:all .4s ease-in-out;opacity:0}.shr-badge[class*="-right"]:hover{transform:translateX(0)}.shr-badge.shr-badge--active{transform:translateX(0) !important;}.shr-badge.shr-badge--active .shr-badge__menu{display:block;animation:menuin 300ms linear forwards;}.shr-badge.shr-badge--active .shr-badge__menu .shr-hideShadow{opacity:1}.shr-badge.shr-badge--active.shr-badge--upper-left .shr-badge__button .shr-badge__button__logo,.shr-badge.shr-badge--active.shr-badge--upper-right .shr-badge__button .shr-badge__button__logo{border-radius:4px 4px 0 0}.shr-badge.shr-badge--active.shr-badge--lower-left .shr-badge__button .shr-badge__button__logo,.shr-badge.shr-badge--active.shr-badge--lower-right .shr-badge__button .shr-badge__button__logo{border-radius:0 0 4px 4px}.shr-badge.shr-badge--upper-left{top:10px;left:0;}.shr-badge.shr-badge--upper-left .shr-badge__button .shr-badge__button__logo{border-radius:4px 4px 4px 0}.shr-badge.shr-badge--upper-left .shr-badge__menu{border-radius:0 4px 4px 4px;}.shr-badge.shr-badge--upper-left .shr-badge__menu .shr-hideShadow{top:-8px;left:0}.shr-badge.shr-badge--upper-right{top:10px;right:0;}.shr-badge.shr-badge--upper-right .shr-badge__button .shr-badge__button__logo{border-radius:4px 4px 0 4px;}.shr-badge.shr-badge--upper-right .shr-badge__button .shr-badge__button__logo img{left:29px !important}.shr-badge.shr-badge--upper-right .shr-badge__menu{right:0;border-radius:4px 0 4px 4px;}.shr-badge.shr-badge--upper-right .shr-badge__menu .shr-hideShadow{top:-8px;right:0}.shr-badge.shr-badge--lower-right{bottom:10px;right:0;}.shr-badge.shr-badge--lower-right .shr-badge__button .shr-badge__button__logo{border-radius:4px 0 4px 4px;}.shr-badge.shr-badge--lower-right .shr-badge__button .shr-badge__button__logo img{left:29px !important}.shr-badge.shr-badge--lower-right .shr-badge__menu{right:0;bottom:40px;border-radius:4px 4px 0 4px;}.shr-badge.shr-badge--lower-right .shr-badge__menu .shr-hideShadow{bottom:-8px;right:0}.shr-badge.shr-badge--lower-left{bottom:10px;left:0;}.shr-badge.shr-badge--lower-left .shr-badge__button .shr-badge__button__logo{border-radius:0 4px 4px 4px}.shr-badge.shr-badge--lower-left .shr-badge__menu{bottom:40px;border-radius:4px 4px 4px 0;}.shr-badge.shr-badge--lower-left .shr-badge__menu .shr-hideShadow{bottom:-8px;left:0}.shr-badge .shr-badge__display-none{display:none}.shr-badge .shr-badge__display-block{display:block}.shr-badge .shr-badge__button{cursor:pointer;position:relative;z-index:3;}.shr-badge .shr-badge__button .shr-badge__button__logo{background:#fff;width:40px;height:40px;border-radius:4px;}.shr-badge .shr-badge__button .shr-badge__button__logo img{margin:0 auto;display:block;position:absolute;left:9px;top:9px;height:20px;width:20px}.shr-badge .shr-badge__button .shr-badge__button__logo .shareaholic-animate{animation:rotation 1s linear infinite}.shr-badge .shr-badge__menu{position:absolute;background:#fff;display:none;box-shadow:0 0 10px 0 rgba(0,0,0,0.45);z-index:3;}.shr-badge .shr-badge__menu .shr-hideShadow{cursor:pointer;content:\'\';display:block;opacity:0;height:9px;background:#fff;z-index:3;position:absolute;transition:all .2s;width:40px}.shr-badge .shr-badge__menu ul.shr-badge__settings-menu{padding:0;margin:0;}.shr-badge .shr-badge__menu ul.shr-badge__settings-menu li.shr-badge__menu-divider{background:#ededed;display:block;width:100%;height:1px;padding:0}.shr-badge .shr-badge__menu ul.shr-badge__settings-menu li.shr-badge__menu-title{font-weight:bold;padding:8px 20px 8px 15px}.shr-badge .shr-badge__menu ul.shr-badge__settings-menu.shr-badge__settings-menu--options li:last-child a{border-radius:0 0 4px 4px}.shr-badge .shr-badge__menu ul.shr-badge__settings-menu.shr-badge__settings-menu--options li:first-child a{border-radius:4px 4px 0 0}.shr-badge .shr-badge__menu ul.shr-badge__settings-menu.shr-badge__settings-menu--options li{list-style:none;white-space:pre;}.shr-badge .shr-badge__menu ul.shr-badge__settings-menu.shr-badge__settings-menu--options li a{text-decoration:none;display:flex;color:inherit;padding:8px 20px 8px 15px;}.shr-badge .shr-badge__menu ul.shr-badge__settings-menu.shr-badge__settings-menu--options li a:hover{background:#eef6ff;color:#55acee}.shr-badge .shr-badge__menu ul.shr-badge__settings-menu.shr-badge__settings-menu--options li img{margin-right:8px;width:20px;height:20px}.shr-badge .shr-badge__menu ul.shr-badge__settings-menu.shr-badge__settings-menu--login{width:180px;}.shr-badge .shr-badge__menu ul.shr-badge__settings-menu.shr-badge__settings-menu--login li.shr-badge__menu-login{padding:8px 20px 8px 15px;}.shr-badge .shr-badge__menu ul.shr-badge__settings-menu.shr-badge__settings-menu--login li.shr-badge__menu-login span{margin-bottom:10px;display:block}@-moz-keyframes menuin{1%{opacity:0}100%{opacity:1}}@-webkit-keyframes menuin{1%{opacity:0}100%{opacity:1}}@-o-keyframes menuin{1%{opacity:0}100%{opacity:1}}@keyframes menuin{1%{opacity:0}100%{opacity:1}}.shr-animated{animation-duration:.4s;animation-fill-mode:both}.shr-slideInUp{animation-name:shr-slideInUp}.shr-slideOutDown{animation-name:shr-slideOutDown}.shr-fadeIn{animation-duration:.1s;animation-name:shr-fadeIn}.shr-fadeOut{animation-duration:.1s;animation-name:shr-fadeOut}.shr-loginModal-wrapper.shr-fadeIn .shr-loginModal-box{animation-name:shr-slideInUp;animation-delay:.12s}.shr-loginModal-wrapper.shr-fadeOut{animation-delay:.2s;}.shr-loginModal-wrapper.shr-fadeOut .shr-loginModal-box{animation-name:shr-slideOutDown}.shr-iframe-wrapper.shr-fadeIn .shr-iframe-content{animation-name:shr-slideInUp;animation-delay:.12s}.shr-iframe-wrapper.shr-fadeOut{animation-delay:.2s;}.shr-iframe-wrapper.shr-fadeOut .shr-iframe-content{animation-name:shr-slideOutDown}.shr-iframe-wrapper{font-family:Arial,"Helvetica Neue",Helvetica,sans-serif !important;position:fixed;top:0;left:0;width:100%;height:100%;transform:translate3d(0,100%,0);overflow:hidden;background:rgba(0,0,0,0.5);backface-visibility:hidden;z-index:2147483647;}.shr-iframe-wrapper .shr-iframe-content{position:absolute;top:0;left:0;height:100%;width:100%;backface-visibility:hidden;background:#f2f2f2;}.shr-iframe-wrapper .shr-iframe-content .shr-iframe-content__loading{position:absolute;top:50%;left:50%;width:166px;height:166px;transform:translate(-50%,-50%);}.shr-iframe-wrapper .shr-iframe-content .shr-iframe-content__loading img{width:70px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);animation:wink 3s ease-in-out infinite alternate}.shr-iframe-wrapper .shr-iframe-content .shr-iframe-content__loading:before{content:\'\';width:150px;height:150px;border:7.5px solid #01956d;border-top:7.5px solid transparent;border-radius:100%;display:block;animation:rotation 1s linear infinite}.shr-iframe-wrapper .shr-iframe-content .shr-iframe-close{position:absolute;z-index:3;top:0;right:0;width:100%;text-align:right;color:#333;background:#fff;border-bottom:1px solid #e0e0e0;display:none;}.shr-iframe-wrapper .shr-iframe-content .shr-iframe-close button{border:0;color:#000;height:30px;padding:0 .5rem;font-size:13px;background:#fff;cursor:pointer;display:flex;align-items:center;float:right;letter-spacing:normal;transition:none;}.shr-iframe-wrapper .shr-iframe-content .shr-iframe-close button:focus{outline:none}.shr-iframe-wrapper .shr-iframe-content .shr-iframe-close button:hover{color:#55acee;}.shr-iframe-wrapper .shr-iframe-content .shr-iframe-close button:hover svg path{fill:#55acee}.shr-iframe-wrapper .shr-iframe-content .shr-iframe-close button span{padding:0 4px 0 4px;text-transform:uppercase}.shr-iframe-wrapper.shr-fadeIn .shr-iframe-content .shr-iframe-close{display:block}.shr-iframe-wrapper iframe{width:100%;height:calc(100% - 30px);z-index:2;position:absolute;margin:0;padding:0;bottom:0;opacity:0;transition:all .3s;}.shr-iframe-wrapper iframe.shr-iframe-active{opacity:1}.shr-loginModal-wrapper{position:fixed;z-index:2147483647;top:0;right:0;color:#333;overflow:hidden;background:rgba(0,0,0,0.5);width:100%;height:100%;transform:translate3d(0,100%,0);backface-visibility:hidden;display:flex;align-items:center;justify-content:center;}.shr-loginModal-wrapper .shr-loginModal-box{width:340px;background:#fff;border-radius:4px;font-family:Arial,"Helvetica Neue",Helvetica,sans-serif !important;font-size:14px;box-shadow:0 0 14px 0 rgba(0,0,0,0.27);}.shr-loginModal-wrapper .shr-loginModal-box *{box-sizing:border-box}.shr-loginModal-wrapper .shr-loginModal-box .shr-loginModal-header{width:100%;position:relative;background:#2f353e;border-radius:4px 4px 0 0;}.shr-loginModal-wrapper .shr-loginModal-box .shr-loginModal-header .shr-loginModal-header__logo{margin:0 auto;display:block;width:210px;padding:20px 0}.shr-loginModal-wrapper .shr-loginModal-box .shr-loginModal-header .shr-loginModal-close{position:absolute;top:4px;right:0;background:transparent;border:0;cursor:pointer;}.shr-loginModal-wrapper .shr-loginModal-box .shr-loginModal-header .shr-loginModal-close:focus{outline:none}.shr-loginModal-wrapper .shr-loginModal-box .shr-loginModal-header .shr-loginModal-close img{width:20px;height:20px}.shr-loginModal-wrapper .shr-loginModal-box .shr-loginModal-body{padding:20px}.shr-loginModal-wrapper .shr-loginModal-box .shr-form-control{margin-bottom:20px;position:relative;}.shr-loginModal-wrapper .shr-loginModal-box .shr-form-control.shr-form-control--error .shr-form-error{display:block}.shr-loginModal-wrapper .shr-loginModal-box .shr-form-control.shr-form-control--error input{border-color:#f85e5e}.shr-loginModal-wrapper .shr-loginModal-box .shr-form-control .shr-form-error{display:none;background:#f85e5e;color:#fff;border-radius:5px;padding:.5em 1em;width:auto;max-width:200px;position:absolute;z-index:100;font-size:12px;right:0;bottom:46px;}.shr-loginModal-wrapper .shr-loginModal-box .shr-form-control .shr-form-error:after{border:solid 8px;border-color:#f85e5e transparent transparent transparent;border-bottom-style:solid;content:"";display:block;height:0;right:10px;position:absolute;z-index:99;top:94%}.shr-loginModal-wrapper .shr-loginModal-box .shr-form-control label{margin-bottom:10px;display:block;font-size:14px;font-style:normal;line-height:1em}.shr-loginModal-wrapper .shr-loginModal-box .shr-form-control input{display:block;width:100%;border-radius:3px;border:1px solid #ededed;padding:10px;font-size:14px;letter-spacing:normal;background-color:#fff;height:auto;line-height:1em}.shr-loginModal-wrapper .shr-loginModal-box .shr-form-control .shr-form-label-action{position:absolute;top:0;right:0;color:#55acee;font-size:12px}.shr-loginModal-wrapper .shr-loginModal-box .shr-loginModal-signup{text-align:center;margin-top:20px}.shr-badge__btn{text-align:center;background:#808080;color:#fff;padding:6px;text-decoration:none;border-radius:2px;border:0;cursor:pointer;}.shr-badge__btn.shr-badge__btn--primary{background-color:#55acee;}.shr-badge__btn.shr-badge__btn--primary:hover{background-color:#389eeb}.shr-badge__btn.shr-badge__btn--link{background-color:#fff;color:#55acee}.shr-badge__btn.shr-badge__btn--block{width:100%;display:block}.shr-badge__btn.shr-badge__btn--md{font-size:16px;padding:17px;letter-spacing:normal}.shr-badge__btn[disabled]{opacity:.65}.shr-badge__error-msg{background:#f85e5e;padding:10px;border-radius:4px;border:1px solid #f85e5e;color:#fff;margin-bottom:10px;font-size:13px;}.shr-badge__error-msg a{color:#fff;text-decoration:underline}@-moz-keyframes shr-slideInUp{from{transform:translate3d(0,100%,0);visibility:visible;opacity:0}to{transform:translate3d(0,0,0);opacity:1}}@-webkit-keyframes shr-slideInUp{from{transform:translate3d(0,100%,0);visibility:visible;opacity:0}to{transform:translate3d(0,0,0);opacity:1}}@-o-keyframes shr-slideInUp{from{transform:translate3d(0,100%,0);visibility:visible;opacity:0}to{transform:translate3d(0,0,0);opacity:1}}@keyframes shr-slideInUp{from{transform:translate3d(0,100%,0);visibility:visible;opacity:0}to{transform:translate3d(0,0,0);opacity:1}}@-moz-keyframes shr-slideOutDown{from{transform:translate3d(0,0,0);opacity:1}to{visibility:hidden;transform:translate3d(0,100%,0);opacity:0}}@-webkit-keyframes shr-slideOutDown{from{transform:translate3d(0,0,0);opacity:1}to{visibility:hidden;transform:translate3d(0,100%,0);opacity:0}}@-o-keyframes shr-slideOutDown{from{transform:translate3d(0,0,0);opacity:1}to{visibility:hidden;transform:translate3d(0,100%,0);opacity:0}}@keyframes shr-slideOutDown{from{transform:translate3d(0,0,0);opacity:1}to{visibility:hidden;transform:translate3d(0,100%,0);opacity:0}}@-moz-keyframes shr-fadeIn{from{opacity:0;transform:translate3d(0,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}@-webkit-keyframes shr-fadeIn{from{opacity:0;transform:translate3d(0,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}@-o-keyframes shr-fadeIn{from{opacity:0;transform:translate3d(0,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}@keyframes shr-fadeIn{from{opacity:0;transform:translate3d(0,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}@-moz-keyframes shr-fadeOut{0%{opacity:1;transform:translate3d(0,0,0)}99%{opacity:0;transform:translate3d(0,0,0)}100%{transform:translate3d(0,100%,0)}}@-webkit-keyframes shr-fadeOut{0%{opacity:1;transform:translate3d(0,0,0)}99%{opacity:0;transform:translate3d(0,0,0)}100%{transform:translate3d(0,100%,0)}}@-o-keyframes shr-fadeOut{0%{opacity:1;transform:translate3d(0,0,0)}99%{opacity:0;transform:translate3d(0,0,0)}100%{transform:translate3d(0,100%,0)}}@keyframes shr-fadeOut{0%{opacity:1;transform:translate3d(0,0,0)}99%{opacity:0;transform:translate3d(0,0,0)}100%{transform:translate3d(0,100%,0)}}@-moz-keyframes wink{from{opacity:0}to{opacity:1}}@-webkit-keyframes wink{from{opacity:0}to{opacity:1}}@-o-keyframes wink{from{opacity:0}to{opacity:1}}@keyframes wink{from{opacity:0}to{opacity:1}}@-moz-keyframes rotation{from{transform:rotate(0)}to{transform:rotate(359deg)}}@-webkit-keyframes rotation{from{transform:rotate(0)}to{transform:rotate(359deg)}}@-o-keyframes rotation{from{transform:rotate(0)}to{transform:rotate(359deg)}}@keyframes rotation{from{transform:rotate(0)}to{transform:rotate(359deg)}}'}),define("text!apps/adminbadge/templates/container.html",[],function(){return'<div ng-controller="AppBadgeCtrl" ng-hide="disableBadge">\n  <div id="shr-badge-container"\n       class="shr-badge shr-badge--{{position}} {{menuVisibility}}"\n       style="{{badgeInlineCSS}}"\n       data-pin-nopin="true"\n       data-offset="{{offset}}"\n       data-position="{{position}}">\n    <div class="shr-badge__button"\n         data-button\n         ng-click="toggleMenu()">\n      <div class="shr-badge__button__logo">\n        <img alt="" width="20" ng-src="{{::assetbase}}images/badge/logo.svg" data-pin-nopin="true" rel="noshare" />\n      </div>\n    </div>\n    <div class="shr-badge__menu" data-menu>\n      <ul class="shr-badge__settings-menu  shr-badge__settings-menu--options shr-badge__display-block" data-menu-options>\n        <div class="shr-hideShadow" ng-click="toggleMenu()"></div>\n        <li class="shr-badge__menu-title">Shareaholic Settings</li>\n        <li class="shr-badge__menu-divider"></li>\n        <li><a href ng-click="showIframe(\'/analytics\')"><img ng-src="{{::assetbase}}images/badge/analytics.svg" data-pin-nopin="true" rel="noshare" alt="Analytics" />Analytics</a></li>\n        <li><a href ng-click="showIframe(\'/apps\')"><img ng-src="{{::assetbase}}images/badge/apps.svg" data-pin-nopin="true" alt="Apps" rel="noshare" />Apps</a></li>\n        <li><a href ng-click="showIframe(\'/content-library\')"><img ng-src="{{::assetbase}}images/badge/contentlibrary.svg" data-pin-nopin="true" rel="noshare" alt="Content Library" />Content Library</a></li>\n        <li><a href ng-click="showIframe(\'/earnings\')"><img ng-src="{{::assetbase}}images/badge/earnings.svg" data-pin-nopin="true" alt="Earnings" rel="noshare" />Earnings</a></li>\n        <li><a href ng-click="showIframe(\'/settings\')"><img ng-src="{{::assetbase}}images/badge/settings.svg" data-pin-nopin="true" alt="Settings" rel="noshare" />Settings</a></li>\n        <li><a href="{{helpLink}}" target="_blank"><img ng-src="{{::assetbase}}images/badge/help.svg" data-pin-nopin="true" alt="Help" rel="noshare" />Help</a></li>\n        <li><a href ng-click="toggleMenu()"><img ng-src="{{::assetbase}}images/badge/close.svg" data-pin-nopin="true" alt="Close" rel="noshare" />Close</a></li>\n      </ul>\n    </div>\n  </div>\n\n  \x3c!--Login--\x3e\n  <div class="shr-loginModal-wrapper shr-animated {{loginVisibility}}" id="loginWrapper">\n    <div class="shr-loginModal-box shr-animated">\n      <div class="shr-loginModal-header">\n        <img alt="" class="shr-loginModal-header__logo" ng-src="{{::assetbase}}images/badge/shareaholic-logo.svg" data-pin-nopin="true" alt="Shareaholic Logo" rel="noshare" />\n        <button class="shr-loginModal-close" data-close-login ng-click="hideLogin()"><img ng-src="{{::assetbase}}images/badge/close-white.svg" data-pin-nopin="true" rel="noshare" alt="Close" /></button>\n      </div>\n      <div class="shr-loginModal-body">\n        <div class="shr-badge__error-msg" ng-show="wrongAccount">Your account "{{currentUser}}" does not have permission to this site. Try signing in with an account that has access to this site profile or request the admin of this site to add you to the team.</div>\n        <div class="shr-badge__error-msg" ng-show="anonymousSite">Your account does not have permission to this Shareaholic installation as yet. It is easy to fix this.\n          <a href="{{wpAdminLink}}" target="_top">Link this site profile</a> to your Shareaholic account to proceed.</div>\n        <form ng-submit="tryToLogin()" name="loginForm">\n          <div class="shr-form-control {{formErrorClass}}">\n            <label for="email">Username or Email</label>\n            <input type="text" ng-model="usernameOrEmail" tabindex="1" />\n            <span class="shr-form-error" ng-show="isLoginError">Incorrect username or password. Please try again.</span>\n          </div>\n          <div class="shr-form-control {{formErrorClass}}">\n            <label for="email">Password</label>\n            <a target="_blank" href="https://shareaholic.com/account/reset_password" class="shr-form-label-action">\n              Forgot password?\n            </a>\n            <input type="password" ng-model="password" tabindex="2" />\n          </div>\n          <button type="submit"\n                  tabindex="3"\n                  ng-disabled="loginForm.$pending"\n                  class="shr-badge__btn shr-badge__btn--primary shr-badge__btn--block shr-badge__btn--md">{{loginButtonText}}</button>\n          <div class="shr-loginModal-signup">\n            Don\'t have an account?\n            <a target="_blank" href="{{signUpLink}}" class="shr-badge__btn shr-badge__btn--link">Sign up</a>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  \x3c!--Iframe--\x3e\n  <div class="shr-iframe-wrapper shr-animated {{iframeVisibility}} shr-iframe-active" id="iframeWrapper">\n    <div class="shr-iframe-content shr-animated">\n      <div class="shr-iframe-content__loading">\n        <img alt="logo" class="icon" src="//apps.shareaholic.com/assets/shareaholic_logo_mark.svg" data-pin-nopin="true" rel="noshare" />\n      </div>\n      <iframe id="shr-admin-badge-iframe" frameborder="0" ng-src="{{iframeSrc}}" class="shr-iframe-active"></iframe>\n      <div class="shr-iframe-close">\n        <button data-iframe-close ng-click="hideIframe()"><span>Close</span><svg enable-background="new 0 0 32 32" height="20px" version="1.1" viewBox="0 0 32 32" width="20px" xml:space="preserve"\n                                                                                xmlns="http://www.w3.org/2000/svg"\n                                                                                xmlns:xlink="http://www.w3.org/1999/xlink">\n        <path d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z" fill="#121313" id="Close"/>\n        </svg>\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n'}),define("apps/adminbadge/app",["require","angular","when","utils/logger","utils/utils","utils/dom","text!./templates/container.html","utils/settings","utils/globalObject","data/DataStore"],function(a){function b(a,b){var d=b.getPageInfo(j);if(!a.enabled||f.isBot()||f.isMobile()||void 0!==d.drupal)return void e.log("We should not load badge...");if(f.isSafari()&&"undefined"===j.CSS.supports)return void e.log("We should not load badge on older versions of Safari...");if(d.wordpress&&d.wordpress.version){var l=d.wordpress.version;if(1!==f.compareVersions(l,"8.0.1"))return void e.log("Unsuported version of WordPress, not loading badge...")}var m=d.pageUri,n=m.protocol()+"://"+m.authority(),o=new k(i,b.getPageInfo(j));a.badgeInlineCSS="",a.offset&&(a.position.indexOf("upper")>-1?a.badgeInlineCSS="top: "+a.offset+"; bottom: initial;":a.position.indexOf("lower")>-1&&(a.badgeInlineCSS="bottom: "+a.offset+"; top: initial;"));var p="admin_badge";c.module(p,[]).controller("AppBadgeCtrl",["$scope","$sce",function(b,c){b.assetbase=a.assetbase,b.disableBadge=!0,b.menuHidden=!0,b.menuVisibility="",b.loginHidden=!0,b.loginVisibility="",b.iframeHidden=!0,b.iframeVisibility="",b.iframeSrc="",b.siteId=a.apiKey,b.position=a.position,b.offset=a.offset,b.badgeInlineCSS=a.badgeInlineCSS,b.loadedOn=n,b.helpLink=i.endpoints.user_navigation.help,b.origin=i.endpoints.user_navigation.base,b.baseUrl=b.origin+"/sites/"+b.siteId,b.signUpLink=i.endpoints.user_navigation.signup,b.rightUserLogged=!1,b.wrongAccount=!1,b.anonymousSite=!1,b.currentUser=null,setTimeout(function(){b.$apply(function(){b.disableBadge=!1})},1e3),b.checkUserAndSite=function(){o.get({type:"userSiteInfo"}).then(function(c){b.$apply(function(){if(c.user&&c.user.logged_in&&c.site.has_rights)b.iframeLoaded||b.preloadIframe(),b.rightUserLogged=!0,b.menuHidden=!1,b.menuVisibility="shr-badge--active";else if(c.user&&c.user.logged_in&&!c.site.has_rights)b.wrongAccount=!0,b.currentUser=c.user.username,b.showLogin();else if(c.site&&!1===c.site.claimed){if(void 0===d.wordpress)return void(b.disableBadge=!0);b.anonymousSite=!0,b.wpAdminLink=i.endpoints.local_recs_url.split("admin-ajax.php?")[0]+"admin.php?shareaholic_redirect_url="+encodeURIComponent(i.endpoints.user_navigation.signup.split("//")[1]+"?site_origin="+m.fragment("shareaholic-badge").toString().split("//")[1]+"&ssl="+("https"===m.protocol?"1":"0")+"&site_id="+a.apiKey),b.signUpLink=b.wpAdminLink,b.showLogin()}else b.showLogin()})})},b.isLoginError=!1,b.loginButtonText="Log in",b.usernameOrEmail=null,b.password=null,b.formErrorClass="",b.tryToLogin=function(){b.loginButtonText="Logging in...";var a={type:"loginUser",username:b.usernameOrEmail,password:b.password};o.get(a).then(function(a){e.log(a),b.$apply(function(){b.anonymousSite=!1,b.wrongAccount=!1,a.user_token?(b.hideLogin(),b.checkUserAndSite()):(b.isLoginError=!0,b.loginButtonText="Log in",b.formErrorClass="shr-form-control--error")})})},b.toggleMenu=function(){b.menuHidden?b.rightUserLogged?(b.menuHidden=!1,b.menuVisibility="shr-badge--active"):b.checkUserAndSite():(b.menuHidden=!0,b.menuVisibility="")},b.showLogin=function(){b.loginHidden=!1,b.loginVisibility="shr-fadeIn"},b.hideLogin=function(){b.loginButtonText="Log in",b.loginHidden=!0,b.loginVisibility="shr-fadeOut",b.formErrorClass="",b.isLoginError=!1},b.processReactMessage=function(a){e.log(a.data)},b.hideIframe=function(){b.iframeHidden=!0,b.iframeVisibility="shr-fadeOut"},b.preloadIframe=function(){b.iframeSrc=c.trustAsResourceUrl(b.baseUrl+"/apps?domain="+b.loadedOn),b.iframeLoaded=!0,j.addEventListener("message",b.processReactMessage,!1)},b.showIframe=function(a){b.iframeHidden=!1,b.iframeVisibility="shr-fadeIn",b.iframeLoaded?j.document.querySelector("#shr-admin-badge-iframe").contentWindow.postMessage({siteId:b.siteId,path:a},"*"):(b.iframeSrc=c.trustAsResourceUrl(b.baseUrl+a+"?domain="+b.loadedOn),b.iframeLoaded=!0,j.addEventListener("message",b.processReactMessage,!1)),b.toggleMenu()},"shareaholic-badge"===m.fragment()&&b.toggleMenu(),setTimeout(function(){var a=g.uiDOM("#shr-admin-badge");a.find(".shr-badge").last().attr("style",b.badgeInlineCSS),a.find("#shr-badge-container-placeholder").find(".shr-badge__button").removeClass("shr-badge__button")},1500)}]);var q="#shr-admin-badge",r=g.uiDOM(q);r.append(h);var s=r.find(".shr-badge").last();s.attr("style",a.badgeInlineCSS+" transition-duration:0s");var t=r.find("#shr-badge-container-placeholder");setTimeout(function(){t.hasClass("shareaholic-hovered-placeholder")&&s.addClass("shr-hover")}),s.hover(function(){s.off("mouseenter mouseleave"),s.removeClass("shr-hover"),t.hide(),setTimeout(function(){t.remove()},0)}),c.bootstrap(r[0],[p])}var c=a("angular"),d=a("when"),e=a("utils/logger"),f=a("utils/utils"),g=a("utils/dom"),h=a("text!./templates/container.html"),i=a("utils/settings"),j=a("utils/globalObject"),k=a("data/DataStore");return e=e.child({name:"Admin Badge",color:"#00BB00"}),{load:function(a,c){var f=d.defer();e.log("Loading admin badge",a);try{b(a,c),f.resolve()}catch(b){e.error("Could not render adminbadge: ",b),b.data=a,f.reject(b)}return f.promise}}}),define("apps/adminbadge/initial",["require","when","utils/logger","utils/globalObject","utils/utils","utils/dom","text!./css/app.css","./app"],function(a){"use strict";function b(b,c){var i=c.getPageInfo(e);if(!b.enabled||f.isBot()||f.isMobile()||void 0!==i.drupal||null===b.apiKey||void 0===b.apiKey||""===b.apiKey.trim())return void d.log("We should not load badge...");if(f.isSafari()&&"undefined"===e.CSS.supports)return void d.log("We should not load badge on older versions of Safari...");if(i.wordpress&&i.wordpress.version){var j=i.wordpress.version;if(1!==f.compareVersions(j,"8.0.1"))return void d.log("Unsuported version of WordPress, not loading badge...")}b.offset&&(b.position.indexOf("upper")>-1?b.badgeInlineCSS="top: "+b.offset+"; bottom: initial;":b.position.indexOf("lower")>-1&&(b.badgeInlineCSS="bottom: "+b.offset+"; top: initial;"));var k='<div id="shr-admin-badge" class="shareaholic-canvas-badge" data-app="admin-badge"><div id="shr-badge-container-placeholder" class="shr-badge shr-badge--'+b.position+' " style="'+b.badgeInlineCSS+'">    <div class="shr-badge__button">      <div class="shr-badge__button__logo">        <img width="20" alt="" data-pin-nopin="true" rel="noshare" src="//apps.shareaholic.com/v2/4de109d5343df5fb666bc3fa34a8e8fd534773c7/images/badge/logo.svg" />      </div>    </div>  </div></div>',l=g.uiDOM(k);g.appendToUiDom(l),l.find(".shr-badge__button").hover(function(){l.find(".shr-badge__button").off("mouseenter mouseleave"),a("./app").load(b,c).then(function(){})}),l.hover(function(){var a=l.find("#shr-badge-container-placeholder");a.hasClass("shareaholic-hovered-placeholder")||a.addClass("shareaholic-hovered-placeholder"),a.find("img").hasClass("shareaholic-animate")||a.find("img").addClass("shareaholic-animate")},function(){l.find("#shr-badge-container-placeholder").removeClass("shareaholic-hovered-placeholder")}),g.renderStyles(h)}var c=a("when"),d=a("utils/logger"),e=a("utils/globalObject"),f=a("utils/utils"),g=a("utils/dom"),h=a("text!./css/app.css");return{load:function(a,e){var f=c.defer();d.log("Loading admin badge",a);try{d.log("optimizing load"),b(a,e),f.resolve()}catch(a){d.error("Could not render adminbadge: ",a)}return f.promise}}});