//rubicon code
rubicontag.cmd.push(function() {

    rubicontag.defineSlot('/23408374/idg-ti-corporativa', [[728, 90],[970, 90],[970, 250]], 'top').setPosition('atf').setFPI('adunit', 'idg-ti-corporativa').setFPI('pos', 'top');
    rubicontag.defineSlot('/23408374/idg-ti-corporativa', [300, 250], 'x20').setPosition('atf').setFPI('adunit', 'idg-ti-corporativa').setFPI('pos', 'x20');
    rubicontag.defineSlot('/23408374/idg-ti-corporativa', [300, 250], 'x22').setPosition('btf').setFPI('adunit', 'idg-ti-corporativa').setFPI('pos', 'x22');
    rubicontag.defineSlot('/23408374/idg-ti-corporativa', [300, 100], 'x70').setPosition('btf').setFPI('adunit', 'idg-ti-corporativa').setFPI('pos', 'x70');
    rubicontag.defineSlot('/23408374/idg-ti-corporativa', [300, 600], 'x69').setPosition('btf').setFPI('adunit', 'idg-ti-corporativa').setFPI('pos', 'x69');
    rubicontag.defineSlot('/23408374/idg-ti-corporativa', [728, 90], 'top1').setPosition('btf').setFPI('adunit', 'idg-ti-corporativa').setFPI('pos', 'top1');
    rubicontag.defineSlot('/23408374/idg-ti-corporativa', [160,600], 'x60').setPosition('btf').setFPI('adunit', 'idg-ti-corporativa').setFPI('pos', 'x60');

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


googletag.cmd.push(function() {
//Adslot top declaration
gptadslots[1]= googletag.defineSlot('/23408374/idg-ti-corporativa', [[728,90], [728,300],[970, 90],[970, 250]],'top').setTargeting('pos',['top']).setTargeting("topicos",topicos).addService(googletag.pubads());
//Adslot x20 declaration
gptadslots[2]= googletag.defineSlot('/23408374/idg-ti-corporativa', [[300,250]],'x20').setTargeting('pos',['x20']).setTargeting("topicos",topicos).addService(googletag.pubads());
//Adslot x22 declaration
gptadslots[3]= googletag.defineSlot('/23408374/idg-ti-corporativa', [[300,250]],'x22').setTargeting('pos',['x22']).addService(googletag.pubads());
//Adslot x01 declaration
gptadslots[4]= googletag.defineSlot('/23408374/idg-ti-corporativa', [[750,450]],'x01').setTargeting('pos',['x01']).addService(googletag.pubads());
//Adslot x50 declaration
//gptadslots[5]= googletag.defineSlot('/23408374/idg-ti-corporativa', [[300,100]],'x50').setTargeting('pos',['x50']).addService(googletag.pubads());
//Adslot x70 declaration
gptadslots[5]= googletag.defineSlot('/23408374/idg-ti-corporativa', [[300,100]],'x70').setTargeting('pos',['x70']).addService(googletag.pubads());
//Adslot x69 declaration
gptadslots[6]= googletag.defineSlot('/23408374/idg-ti-corporativa', [[300,600],[300,1050]],'x69').setTargeting('pos',['x69']).addService(googletag.pubads());
//Adslot top1 declaration
gptadslots[7]= googletag.defineSlot('/23408374/idg-ti-corporativa', [[728,90]],'top1').setTargeting('pos',['top1']).addService(googletag.pubads());
//Adslot x60 declaration
gptadslots[8]= googletag.defineSlot('/23408374/idg-ti-corporativa', [[160,600]],'x60').setTargeting('pos',['x60']).addService(googletag.pubads());



//Adslot x21 declaration
//gptadslots[10]= googletag.defineSlot('/23408374/idg-ti-corporativa', [[300,250]],'x21').setTargeting('pos',['x21']).addService(googletag.pubads());
//Terra
gptadslots[9]= googletag.defineSlot('/1211/br.terra.idgnow.cobranded/home', [300, 250], 'div-gpt-ad-1450187252138-0').addService(googletag.pubads());
//out of page
gptadslots[10]= googletag.defineOutOfPageSlot('/23408374/idg-ti-corporativa', 'x02').setTargeting('pos',['x02']).addService(googletag.pubads());

try {
window.googletag.pubads().setTargeting("gender",_ttprofiles.getGender);
window.googletag.pubads().setTargeting("age",_ttprofiles.getAge);
window.googletag.pubads().setTargeting("interests",_ttprofiles.getSubjects);
window.googletag.pubads().setTargeting("team",_ttprofiles.getTeam);
window.googletag.pubads().setTargeting("cluster",_ttprofiles.getProfiles);
window.googletag.pubads().setTargeting("device",_ttprofiles.getEquipment);
window.googletag.pubads().setTargeting("renda",_ttprofiles.getSocialClass);
window.googletag.pubads().setTargeting("msegments",_ttprofiles.getMicrosegments);
window.googletag.pubads().setTargeting("customaud",_ttprofiles.getCustomAudience);

} catch(e){ console.log('tail - falhou'); }

    if (isSync){ googletag.pubads().enableSyncRendering(); }
else{ googletag.pubads().enableSingleRequest();
googletag.pubads().enableAsyncRendering(); }
googletag.enableServices();
});

setTimeout(gptrun, 4000);