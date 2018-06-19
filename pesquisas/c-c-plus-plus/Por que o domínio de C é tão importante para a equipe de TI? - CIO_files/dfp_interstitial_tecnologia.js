//function interstitialShowHome(){$("#nd-interstitial").hide();$("#nd-site").show();}
if (isSync){ googletag.display('x01'); } else { googletag.cmd.push(function() { googletag.display('x01'); }); }