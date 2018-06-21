//rubicon code
var _ttprofiles = window._ttprofiles || [];
rubicontag.cmd.push(function() {

    rubicontag.defineSlot('/23408374/cio-tecnologia', [[728, 90],[970, 90],[970, 250]], 'top').setPosition('atf').setFPI('adunit', 'cio-tecnologia').setFPI('pos', 'top');
    rubicontag.defineSlot('/23408374/cio-tecnologia', [300, 250], 'x20').setPosition('atf').setFPI('adunit', 'cio-tecnologia').setFPI('pos', 'x20');
    rubicontag.defineSlot('/23408374/cio-tecnologia', [300, 250], 'x21').setPosition('btf').setFPI('adunit', 'cio-tecnologia').setFPI('pos', 'x21');
    rubicontag.defineSlot('/23408374/cio-tecnologia', [300, 250], 'x22').setPosition('btf').setFPI('adunit', 'cio-tecnologia').setFPI('pos', 'x22');
    rubicontag.defineSlot('/23408374/cio-tecnologia', [300, 600], 'x69').setPosition('btf').setFPI('adunit', 'cio-tecnologia').setFPI('pos', 'x69');
    rubicontag.defineSlot('/23408374/cio-tecnologia', [728, 90], 'top1').setPosition('btf').setFPI('adunit', 'cio-tecnologia').setFPI('pos', 'top1');

// tail    
try {
    rubicontag.setFPV("tt_Age", _ttprofiles.getAge);
    rubicontag.setFPV("tt_Gender", _ttprofiles.getGender);
    rubicontag.setFPV("tt_LifeSty", _ttprofiles.getProfiles.join(','));
    rubicontag.setFPV("tt_Intere", _ttprofiles.getSubjects.join(','));
    rubicontag.setFPV("tt_TimeFut", _ttprofiles.getTeam);
    rubicontag.setFPV("tt_SubSegs", _ttprofiles.getMicrosegments.join(','));
    rubicontag.setFPV("tt_Renda", _ttprofiles.getSocialClass);
    rubicontag.setFPV('tt_CustomAudience', _ttprofiles.getCustomAudience.join(','));
} catch (e) { console.log('tail - falhou'); }
rubicontag.run(gptrun);

});

var gptadslots=[];
googletag.cmd.push(function() {
gptadslots[1]= googletag.defineSlot('/23408374/cio-tecnologia', [[728,90],[970,250],[970,90]],'top').setTargeting('pos',['top']).addService(googletag.pubads());
gptadslots[2]= googletag.defineSlot('/23408374/cio-tecnologia', [[300,250]],'x20').setTargeting('pos',['x20']).addService(googletag.pubads());
gptadslots[3]= googletag.defineSlot('/23408374/cio-tecnologia', [[750,450]],'x01').setTargeting('pos',['x01']).addService(googletag.pubads());
gptadslots[4]= googletag.defineSlot('/23408374/cio-tecnologia', [[120,600]],'x60').setTargeting('pos',['x60']).addService(googletag.pubads());
gptadslots[5]= googletag.defineSlot('/23408374/cio-tecnologia', [[728,90]],'top1').setTargeting('pos',['top1']).addService(googletag.pubads());
gptadslots[6]= googletag.defineSlot('/23408374/cio-tecnologia', [[300,250]],'x21').setTargeting('pos',['x21']).addService(googletag.pubads());
gptadslots[7]= googletag.defineSlot('/23408374/cio-tecnologia', [[300,600]],'x69').setTargeting('pos',['x69']).addService(googletag.pubads());
gptadslots[8]= googletag.defineSlot('/23408374/cio-tecnologia', [[300,250]],'x22').setTargeting('pos',['x22']).addService(googletag.pubads());

//rubicon
for (var i = 0; i < gptadslots.length; i++) {
        rubicontag && rubicontag.setTargetingForGPTSlot && rubicontag.setTargetingForGPTSlot(gptadslots[i]);
}

//out of page
gptadslots[9]= googletag.defineOutOfPageSlot('/23408374/cio-tecnologia', 'x02').setTargeting('pos',['x02']).addService(googletag.pubads());

var _ttprofiles = window._ttprofiles || [];
window.googletag.pubads().setTargeting("gender",_ttprofiles.getGender);
window.googletag.pubads().setTargeting("age",_ttprofiles.getAge);
window.googletag.pubads().setTargeting("interests",_ttprofiles.getSubjects);
window.googletag.pubads().setTargeting("team",_ttprofiles.getTeam);
window.googletag.pubads().setTargeting("cluster",_ttprofiles.getProfiles);
window.googletag.pubads().setTargeting("device",_ttprofiles.getEquipment);
window.googletag.pubads().setTargeting("renda",_ttprofiles.getSocialClass);
window.googletag.pubads().setTargeting("msegments",_ttprofiles.getMicrosegments);
window.googletag.pubads().setTargeting("customaud",_ttprofiles.getCustomAudience);

if (isSync){ googletag.pubads().enableSyncRendering(); }
else{ googletag.pubads().enableSingleRequest();
googletag.pubads().enableAsyncRendering(); }
googletag.enableServices();
});

setTimeout(gptrun, 2000);
//gptrun();