function randomizeArray(arr, itens){
    var lenarray = arr.length;
    if (lenarray <= itens){ var qtd = lenarray;}
    else{ var qtd = itens; }

    resArr = [];
    for (var i=0; i < qtd; i++){
        idx = Math.floor(Math.random()*lenarray);
        escolhido = arr[idx];
        resArr.push(escolhido);
        
        // retira objetos sorteados
        a = [];
        for (var j=0; j<arr.length; j++){
            if (arr[j] != escolhido && arr[j] != undefined){ a.push(arr[j]); }
            else{ lenarray = lenarray - 1; }
        }
        arr = a;

    }
    return resArr
}

function acrescimoArray(arr, peso){
    var arrAdd = [];
    for (var i=0; i< peso; i++){
        for (var j=0; j < arr.length; j++){
            arrAdd.push(arr[j]);
        }
    }
    return arrAdd;
}

function sortear(arrLink, nitens){
    var nItensIni = nitens;
    var resLinks = [];
    var arrSorteavel = [];
    var arrPesos = [];

    for (var peso in arrLink){
    
        // peso=10 always on
        if (peso == '10'){
            lenarray10 = arrLink['10'].length;
            if (lenarray10 <= nitens){ 
                links10 = randomizeArray(arrLink['10'], lenarray10);
                for (var i=0; i < links10.length; i++){
                    resLinks.push(links10[i]);
                    //alert(links10[i]['Title']);
                }
                nitens = nitens-lenarray10;
            }
            else{
                links10 = randomizeArray(arrLink['10'], nitens);
                for (var i=0; i < links10.length; i++){
                    resLinks.push(links10[i]);
                }
                nitens=0;
            }
        }

        else {
            if (peso == '1'){
                // peso=1
                linksNB = arrLink[peso];
            }
            else {
                // acrescimo no sorteio
                linksNB = acrescimoArray(arrLink[peso], peso);
                //alert(linksNB);
            }
            for (var i=0; i < linksNB.length; i++){
                arrSorteavel.push(linksNB[i]);
            }
        }
    }

    linksSorteados = randomizeArray(arrSorteavel, nitens);
    for (var i=0; i < linksSorteados.length; i++){
        if (linksSorteados[i] != undefined){
            resLinks.push(linksSorteados[i]);
            //alert(linksSorteados[i]['Title']);
        }
    }
    resLinks = randomizeArray(resLinks, nItensIni)
    //for (var i=0; i < resLinks.length; i++){
    //    alert(resLinks[i]['Title']);
    //}
    return resLinks
   
}
function randomizeTabs(){
    //var arr = ['aba-eb','aba-pcwe','aba-wp','aba-cz'];
    var arr = ['aba-rec','aba-eb','aba-webc','aba-wp','aba-cz'];
    var listaTabsNB = {'rec':{'abaid':'aba-rec','divid':'divRECNBusiness','htmlaba':'<li class="optRecomendados"><a id="aba-rec" href="javascript:void(0);" onclick="showHideAbasNB(\'aba-rec\');" title="Recomendados">Recomendados</a></li>'},'eb':{'abaid':'aba-eb','divid':'divEBNBusiness','htmlaba':'<li class="optExecutive"><a id="aba-eb" href="javascript:void(0);" onclick="showHideAbasNB(\'aba-eb\');" title="Executive Briefing">Executive Briefing</a></li>'},'pcwe':{'abaid':'aba-pcwe','divid':'divPCWENBusiness','htmlaba':'<li class="optPcworld"><a id="aba-pcwe" href="javascript:void(0);" onclick="showHideAbasNB(\'aba-pcwe\');" title="PC World Extra">PC World Extra</a></li>'},'webc':{'abaid':'aba-webc','divid':'divWebcastsNBusiness','htmlaba':'<li class="optWebcast"><a id="aba-webc" href="javascript:void(0);" onclick="showHideAbasNB(\'aba-webc\');" title="Webcasts">Webcasts</a></li>'},'wp':{'abaid':'aba-wp','divid':'divWPNBusiness','htmlaba':'<li class="optWhitepapers"><a id="aba-wp" href="javascript:void(0);" onclick="showHideAbasNB(\'aba-wp\');" title="White Papers">White Papers</a></li>'},'cz':{'abaid':'aba-cz','divid':'divCZNBusiness','htmlaba':'<li class="optCompanyzone"><a id="aba-cz" href="javascript:void(0);" onclick="showHideAbasNB(\'aba-cz\');" title="Company Zones">Company Zones</a></li>'}};
    
    var lenarray = arr.length;
    var qtd = lenarray;
    resArr = [];
    for (var i=0; i < qtd; i++){
        idx = Math.floor(Math.random()*lenarray);
        escolhido = arr[idx];
        resArr.push(escolhido);
        
        // retira objetos sorteados
        a = [];
        for (var j=0; j<arr.length; j++){
            if (arr[j] != escolhido){ a.push(arr[j]); }
            else{ lenarray = lenarray - 1; }
        }
        arr = a;
    }

    // Rec aberto (sem sorteio)
    resArr = ['aba-wp','aba-rec','aba-eb','aba-webc','aba-cz'];

    var menuNB = document.getElementById('tabsNB');
    var html= '';
    for (var j=0; j < qtd; j++){
        if (resArr[j]=='aba-rec'){
            html = html + listaTabsNB.rec.htmlaba;
        }
        else if (resArr[j]=='aba-eb'){
            html = html + listaTabsNB.eb.htmlaba;
        }
        else if (resArr[j]=='aba-pcwe'){
            html = html + listaTabsNB.pcwe.htmlaba;
        }
        else if (resArr[j]=='aba-webc'){
            html = html + listaTabsNB.webc.htmlaba;
        }
        else if (resArr[j]=='aba-wp'){
            html = html + listaTabsNB.wp.htmlaba;
        }
        else if (resArr[j]=='aba-cz'){
            html = html + listaTabsNB.cz.htmlaba;
        }
    }
    menuNB.innerHTML = html
    showHideAbasNB(resArr[0]);
}

function showHideAbasNB(evt){

    divRECNB = document.getElementById('divRECNBusiness');
    divEBNB = document.getElementById('divEBNBusiness');
    //divPCWENB = document.getElementById('divPCWENBusiness');
    divWEBCNB = document.getElementById('divWebcastsNBusiness');
    divWPNB = document.getElementById('divWPNBusiness');
    divCZNB = document.getElementById('divCZNBusiness');

    abaRECNB = document.getElementById('aba-rec');
    abaEBNB = document.getElementById('aba-eb');
    //abaPCWENB = document.getElementById('aba-pcwe');
    abaWEBCNB = document.getElementById('aba-webc');
    abaWPNB = document.getElementById('aba-wp');
    abaCZNB = document.getElementById('aba-cz');

    if (evt == 'aba-rec') {
        abaRECNB.className = "activeTab";
    } else {
        abaRECNB.className = "";
    }
    if (evt == 'aba-eb') {
        abaEBNB.className = "activeTab";
    } else {
        abaEBNB.className = "";
    }
    //if (evt == 'aba-pcwe') {
    //    abaPCWENB.className = "activeTab";
    //} else {
    //    abaPCWENB.className = "";
    //}
    if (evt == 'aba-webc') {
        abaWEBCNB.className = "activeTab";
    } else {
        abaWEBCNB.className = "";
    }
    if (evt == 'aba-wp') {
        abaWPNB.className = "activeTab";
    } else {
        abaWPNB.className = "";
    }
    if (evt == 'aba-cz') {
        abaCZNB.className = "activeTab";
    } else {
        abaCZNB.className = "";
    }

    if (evt == 'aba-eb'){
        divRECNB.style.display = "none";
        divEBNB.style.display = "block";
        //divPCWENB.style.display = "none";
        divWEBCNB.style.display = "none";
        divWPNB.style.display = "none";
        divCZNB.style.display = "none";
    }
    else if (evt == 'aba-rec'){
        divRECNB.style.display = "block";
        divEBNB.style.display = "none";
        //divPCWENB.style.display = "none";
        divWEBCNB.style.display = "none";
        divWPNB.style.display = "none";
        divCZNB.style.display = "none";
    }
    else if (evt == 'aba-pcwe'){
        divRECNB.style.display = "none";
        divEBNB.style.display = "none";
        //divPCWENB.style.display = "block";
        divWEBCNB.style.display = "none";
        divWPNB.style.display = "none";
        divCZNB.style.display = "none";
    }
    else if (evt == 'aba-webc'){
        divRECNB.style.display = "none";
        divEBNB.style.display = "none";
        //divPCWENB.style.display = "none";
        divWEBCNB.style.display = "block";
        divWPNB.style.display = "none";
        divCZNB.style.display = "none";
    }
    else if (evt == 'aba-wp'){
        divRECNB.style.display = "none";
        divEBNB.style.display = "none";
        //divPCWENB.style.display = "none";
        divWEBCNB.style.display = "none";
        divWPNB.style.display = "block";
        divCZNB.style.display = "none";
    }
    else{
        divRECNB.style.display = "none";
        divEBNB.style.display = "none";
        //divPCWENB.style.display = "none";
        divWEBCNB.style.display = "none";
        divWPNB.style.display = "none";
        divCZNB.style.display = "block";
    }
}