var arrLink = listaMKTPlace;

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

function sortearMKTPlace(nitens){
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
                linksMktp = arrLink[peso];
            }
            else {
                // acrescimo no sorteio
                linksMktp = acrescimoArray(arrLink[peso], peso);
            }
            for (var i=0; i < linksMktp.length; i++){
                arrSorteavel.push(linksMktp[i]);
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
    return resLinks
}