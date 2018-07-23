var tgmNum = Math.floor(Math.random() * 1000000),
		tgmSite = typeof (tgmSite) == "undefined" ? "" : tgmSite,
		tgmZone = typeof (tgmZone) == "undefined" ? "" : tgmZone,
		site = typeof (site) == "undefined" ? "" : site,
		zone = typeof (zone) == "undefined" ? "" : zone,
		tagman_po = "atomo",
		d = document,
		pv = 9,
		po = false,
		nv = navigator,
		nm = nv.mimeTypes,
		ug = nv.userAgent,
		tgd = top.document,
		tgH,
		pg = (nm && nm["application/x-shockwave-flash"]) ? nm["application/x-shockwave-flash"].enabledPlugin : 0;

if (pg) {
	w = nv.plugins["Shockwave Flash"].description.split(" ");
	for (i = 0; i < w.length; ++i) { if (isNaN(parseInt(w[i]))) continue; pv2 = w[i]; } po = pv2 >= pv;
}
else if (ug && ug.indexOf("MSIE") >= 0 && (nv.appVersion.indexOf("Win") != -1)) {
	document.write('<SCR' + 'IPT LANGUAGE=VBScript\>on error resume next \n' + 'po=(IsObject(CreateObject(\"ShockwaveFlash.ShockwaveFlash.\"&pv)))\n' + '</SCR' + 'IPT\>\n');
}

if ((tgd.location.protocol != "http:") && (tgd.location.protocol != "https:")) {
	tgH = "http://";
}
else {
	tgH = tgd.location.protocol + "//";
}

switch (tgGetLocal()) {
	case 'br':
		tgH += 'p2.trrsf.com.br/tagmanfe/';
		break;
	default:
		tgH += 'p2.trrsf.com/tagmanfe/';
}

function cTgm() {

	function createParams(args) {
		var params = '';

		for (i = 1; i < args.length; i++) {
			params += '&' + args[i];
		}

		return params;
	}

	this.ShowArea = function () {
		var args = this.ShowArea.arguments,
			params = createParams(args);

		this.writeScriptTag(this.getShowAreaUrl(args[0]) + params);
	};

	this.ShowAreaAsync = function (tgmArea, placeholder, adframe) {
	    var url = tgm.getShowAreaUrl(tgmArea, 'site=' + top.site, 'zone=' + top.zone);
	    if (!adframe) adframe = "adframe.html";
	    createAsyncIframe(placeholder, url, adframe);
	};

	this.ShowPage = function () {
		var args = this.ShowPage.arguments,
			params = createParams(args);

		this.writeScriptTag(this.getShowPageUrl(args[0]) + params);
	};

	this.getShowAreaUrl = function () {/* Busca a url para a chamada ao tagman. */
		var url = '';
		var args = this.getShowAreaUrl.arguments;

		if (this.page.noAds || this.page.noTagMan) {
			url = this.page.noAds ? this.page.showAreaUrl + 'NoAds' : '';
		}
		else {
			var len = args.length;
			url = this.page.showAreaUrl + this.page.getTgmKey() + '.' + args[0];
			if (len > 1) {
				url += createParams(args);
			}

			if (this.page.inTest && this.page.tgmKeyTest != '') {
				url += '&testKey=' + this.page.tgmKeyTest + '.' + args[0];
			}
		}

		return url;
	};

	this.getShowPageUrl = function () {
		var url = '';

		if (!this.page.noTagMan) {
			var args = this.getShowPageUrl.arguments,
				params = createParams(args),
				key = this.page.noAds ? 'NoAds' : this.page.getTgmKey() + params;

			url = (this.page.showAreaUrl + key).replace('ShowArea.aspx?', 'ShowPage.aspx?');
		}

		return url;
	};

	this.writeScriptTag = function (url) {
		document.write('<scr' + 'ipt type="text/javascript" src="' + url + '"></scr' + 'ipt>');
	};

	this.GetAamCookie = function (c_name) { /* CookiesAudienceManager */
	    var i, x, y, ARRcookies = document.cookie.split(";");
	    for (i = 0; i < ARRcookies.length; i++) {
	        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
	        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
	        x = x.replace(/^\s+|\s+$/g, "");
	        if (x == c_name) return unescape(y);
	    }
	};

	this.page = new cPage();

	function cPage() {
		var _this = this,
			params = [];

		this.inTest = false;
		this.noAds = false;
		this.noTagMan = false;
		this.rotate = true;
		this.showAreaUrl = tgH + 'ShowArea.aspx?key=';
		this.tgmKeyOriginal = tgmKey;
		this.tgmKeyTest = '';
		this.getTgmKey = function () { return (_this.inTest && this.tgmKeyTest != '') ? _this.tgmKeyTest : _this.tgmKeyOriginal; };

		function getPageParameter(name) {/*Busca parametros da pagina.*/
			var param = { exists: false, name: '', value: '' };

			for (var i = 0; i < params.length; i++) {
				if (params[i].toUpperCase().indexOf(name.toUpperCase() + '=') != -1) {
					var p = params[i].split('=');
					param.exists = true;
					param.name = p[0];
					param.value = p[1] ? p[1] : '';
					break;
				}
			}

			return param;
		}

		function init() {/* Inicializa pagina para o tagman. */
			params = tgd.location.search.replace('?', '').split('&');

			if (params.length > 0) {
				var key = getPageParameter('TGMKEY');

				_this.inTest = getPageParameter('INTERNALTEST').exists;

				if (_this.inTest) {

					if (key.exists) {
						var keyUpperCase = key.value.toUpperCase();

						if (keyUpperCase == 'NOADS') {
							_this.noAds = true;
						}
						else if (keyUpperCase == 'NOTAGMAN') {
							_this.noTagMan = true;
						}
					}

					var rotatingSeal = getPageParameter('SELOROTATIVO');

					if (rotatingSeal.exists) {/*Tratamento para o parametro SeloRotativo na URL de chamada.*/
						if (rotatingSeal.value == '0') {
							_this.rotate = false;
						}
					}
				}

				if (key.exists) {
					var keyUpperCase = key.value.toUpperCase();

					if (keyUpperCase != 'NOADS' && keyUpperCase != "NOTAGMAN") {
						_this.inTest = true;
						_this.tgmKeyTest = key.value;
						tgmKey = key.value;
					}
				}

				var tgmHost = getPageParameter('TGMHOST');
				if (tgmHost.exists) {
					if (tgmHost.value != '') {
						_this.showAreaUrl = tgmHost.value + '/ShowArea.aspx?key=';
					}
				}
			}
		}
		init();
	}
}

window.tgm = new cTgm();

function tgGetLocal() {
	var tgparts = tgmKey.split(".")
	return tgparts[0];
}
 
function get_aamCookie(c_name) {
	var i, x, y, ARRcookies = document.cookie.split(";");
	for (i = 0; i < ARRcookies.length; i++) {
		x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
		y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
		x = x.replace(/^\s+|\s+$/g, "");
		if (x == c_name) return unescape(y);
	}
}

function createAsyncIframe(placeholder, adAreaURL, adframe) {
    var fifHTML = '<iframe id="fif_' + placeholder + '" style="position:absolute" vspace="0" hspace="0" allowtransparency="true" scrolling="no" frameborder="no"></iframe>';
    ph = d.getElementById(placeholder);
    if (ph) {
        ph.innerHTML = fifHTML;
        fif = d.getElementById('fif_' + placeholder);
        try {
            fif.style.width = ph.style.width;
            fif.style.height = ph.style.height;
            fif.style.borderWidth = "0px";
            fif.style.padding = "0px";
        } catch (e) { }
        fif.fif_src = adAreaURL;
        fif.src = adframe;
    }
}	

(function (doc) {
	var _extras = {
		
		errors : [],

		sequence: {
			current : 0, 
			getNext: function(){
				return this.current++;
			} 
		},
		
		ppi: {
			seal: function () {

				var controller = {
					defaults: { interval: 4000 },

					log: function (ex) {
						_extras.errors.push({source:'seal', err: ex});
					},

					newId: function () {
						return "ppi-seal-" + _extras.sequence.getNext();
					},

					setVisibility: function (element, show) {
						element.style.display = show ? "inline" : "none";
						element.style.visibility = show ? "visible" : "hidden";
					},

					createContainer: function () {
						var id = this.newId();
						doc.write("<ul id='" + id + "' style='cursor: pointer;'></ul>");
						return doc.getElementById(id);
					},

					rotate: function rotate(seal) {
						if (seal.stores.length > 0) {
							var store = seal.stores.shift();
							var li = doc.createElement('li');
							var link = doc.createElement('a');
							var img = doc.createElement('img');

							img.setAttribute("src", store.img);
							link.setAttribute("target", "_blank");
							link.href = store.click;

							link.appendChild(img);
							li.appendChild(link);
							seal.container.appendChild(li);

							seal.list.push(li);
						}

						if (top.tgm.page.rotate && seal.positions > 1) {
							if (seal.list.length > 1) {
								controller.setVisibility(seal.list[seal.currentIndex++], false);
								if (seal.currentIndex >= seal.positions) { seal.currentIndex = 0; }
								controller.setVisibility(seal.list[seal.currentIndex], true);
							}

							setTimeout(function () { rotate(seal); }, seal.interval);
						}
					},

					randFirst: function (seal) {/* Sorteia a primeira loja a ser exibida e altera a lista. */
						if (seal.positions > 1) {
							var i = 0;
							var result = [];
							var startIndex = Math.floor(Math.random() * seal.positions);
							var first = seal.stores[startIndex];

							result.push(first);

							for (i = startIndex + 1; i < seal.positions; i++) {/* Adiciona elementos posteriores ao selecionado. */
								result.push(seal.stores[i]);
							}

							for (i = 0; i < startIndex; i++) {/* Adiciona elementos anteriores ao selecionado. */
								result.push(seal.stores[i]);
							}

							seal.stores = result;
						}
					}
				};

				this.interval = arguments[0] ? (arguments[0] * 1000) : controller.defaults.interval;;
				this.container = null, 			/* Container para rotacao. */
				this.stores = [], 					/* Lojas do objeto atual. */
				this.currentIndex = 0, 			/* Indice atual de exibicao no container. */
				this.startIndex = 0, 				/* Valor a ser sorteado para definir primeira loja a ser exibida. */
				this.positions = 0, 				/* Numero de posicoes no container. */
				this.list = [], 						/* Lista de elementos html mantidos pelo container. */

				this.add = function (store) {
					this.positions = this.stores.push(store);
				},
				this.start = function () {
					if (this.positions > 0) {
						try {
							this.container = controller.createContainer();
							if (this.container) {
								controller.randFirst(this);
								controller.rotate(this);
							}
						}
						catch (ex) {
							controller.log('[Erro:' + (ex.description ? ex.description : ex) + ']');
						}
					}
				}
			}
		}
	};

	window.tgm.extras = _extras;
	window.tgm_ppi_rotate = _extras.ppi.seal;

})(d);
