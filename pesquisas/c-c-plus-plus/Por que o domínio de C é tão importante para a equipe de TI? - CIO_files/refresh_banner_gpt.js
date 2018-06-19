function refreshBanners(){
    // faz refresh dos banners
    // top = gptadslots[1] 
    // x20 = gptadslots[2]
    // x21 = gptadslots[3]
   googletag.cmd.push(function() {
     googletag.pubads().refresh([gptadslots[1], gptadslots[2], gptadslots[3]]);
   });
}

// always start auto-refresh onLoad
//if (isSync) {
if (1==1) {
    var RefreshID = setInterval(function(){window.location.href=window.location.href},600000);
}
else{
    var RefreshID = setInterval(refreshBanners,480000);
}


function StopRefresh(){
    try {
        clearInterval(RefreshID);
    }
        catch (e) {}
}

function RestartRefresh(){
    if (isSync) {
        RefreshID = setInterval(function(){window.location.href=window.location.href},480000);
    }
    else{
        RefreshID = setInterval(refreshBanners,480000);
    }
}