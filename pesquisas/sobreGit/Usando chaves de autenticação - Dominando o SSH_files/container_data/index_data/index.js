(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.img_1 = function() {
	this.initialize(img.img_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);


(lib.txt_legal = function() {
	this.initialize(img.txt_legal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,280);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.txt_legal_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt_legal();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_legal_1, new cjs.Rectangle(0,0,336,280), null);


(lib.txt_cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdBLQgLgCgIgDIADgQIASAEQAKABALAAQASAAAJgGQAEgDACgFQACgGAAgHIgBgIQgBgEgDgDQgCgDgFgCQgFgCgHgBIgPgDQgUgCgJgJQgJgLAAgQIAAgCQAAgVAPgLQAHgFAKgCQAKgDANAAQAMAAAKACIAQAEIgDARIgRgEQgJgBgKAAQgIAAgHABQgGACgEACQgEADgDAFQgCAFAAAHQAAAKAGAFQAFAFANACIAQACQATADAJAJQAFAEACAIQACAHAAAJIAAACQAAALgDAIQgEAIgHAGQgOALgaAAQgMAAgMgCg");
	this.shape.setTransform(63.2,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJBLIAAiVIAUAAIAACVg");
	this.shape_1.setTransform(54.2,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAqBLIgOgqIg4AAIgOAqIgVAAIA0iVIAWAAIA1CVgAAXAPIgXhEIgXBEIAuAAg");
	this.shape_2.setTransform(44.3,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAtBLIAAhxIglBMIgPAAIglhLIAABwIgUAAIAAiVIAVAAIArBbIAshbIAVAAIAACVg");
	this.shape_3.setTransform(28.9,3.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAqBLIgOgqIg4AAIgOAqIgVAAIA0iVIAWAAIA1CVgAAXAPIgXhEIgXBEIAuAAg");
	this.shape_4.setTransform(8.1,3.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyBLIAAiVIA2AAQAMAAAIADQAIADAFAFQAGAFACAGQACAHAAAIIAAAEQAAAKgEAIQgFAIgKAEQALADAGAJQADAFACAFQABAGAAAGIAAAFQAAAKgDAHQgEAIgGAEQgGAFgJACQgJADgLAAgAgeA6IAiAAIALgBQAFgBADgDQAEgDABgEQACgFAAgGIAAgFQAAgZgbAAIghAAgAgegKIAhAAQALAAAGgGQAHgFAAgKIAAgEQAAgMgHgFQgGgGgNAAIgfAAg");
	this.shape_5.setTransform(-5.1,3.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKBLIAAiVIAVAAIAACVg");
	this.shape_6.setTransform(-14.9,3.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAqBLIgOgqIg4AAIgOAqIgVAAIA0iVIAWAAIA1CVgAAXAPIgXhEIgXBEIAuAAg");
	this.shape_7.setTransform(-24.9,3.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdBLQgLgCgIgDIADgQIASAEQAKABALAAQASAAAJgGQAEgDACgFQACgGAAgHIgBgIQgBgEgDgDQgCgDgFgCQgFgCgHgBIgPgDQgUgCgJgJQgJgLAAgQIAAgCQAAgVAPgLQAHgFAKgCQAKgDANAAQAMAAAKACIAQAEIgDARIgRgEQgJgBgKAAQgIAAgHABQgGACgEACQgEADgDAFQgCAFAAAHQAAAKAGAFQAFAFANACIAQACQATADAJAJQAFAEACAIQACAHAAAJIAAACQAAALgDAIQgEAIgHAGQgOALgaAAQgMAAgMgCg");
	this.shape_8.setTransform(-38,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_cta, new cjs.Rectangle(-46,-13,117.6,31.9), null);


(lib.txt_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#646567").s().p("AgLAMQgFgEAAgIQAAgHAFgEQADgEAIAAQAIAAAFAEQADAEAAAHQAAAIgDAEQgFAEgIAAQgIAAgDgEg");
	this.shape.setTransform(228.8,219.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#646567").s().p("AgkBdQgOgCgKgEIAEgVIAXAGQANACANAAQAXAAAKgIQAFgEACgHQADgGAAgJIgBgKQgCgFgDgEQgDgEgGgCQgGgDgIgBIgUgDQgYgDgLgMQgLgNAAgUIAAgCQAAgaASgNQAIgHANgDQANgDAPAAQAQAAAMADIAVAFIgFAUQgJgDgLgCQgLgBgNAAQgKAAgJABQgIACgFAEQgFADgDAGQgCAGAAAJQAAAMAGAHQAHAGAQACIAUADQAYADALAMQAGAFADAJQACAJAAALIAAADQAAAOgEAKQgEAKgJAHQgSANggAAQgPAAgPgCg");
	this.shape_1.setTransform(217.8,211.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#646567").s().p("AgTBfQgJgBgHgDQgHgDgFgFQgGgEgEgGQgIgLgDgQQgDgPAAgUIAAgVQAAgUADgPQADgRAIgKQAJgMAOgFQAHgDAJgCQAJgBAKgBQAVAAAOAHQAOAFAIAMQAEAFADAHIAEAOQADAQAAAUIAAAVQAAAUgDAPQgBAJgDAGIgHAMQgFAGgFAEQgGAFgHADQgOAFgVABQgKAAgJgCgAgThHQgJADgFAHQgGAHgDAMQgDAMAAAUIAAAVQAAAUADAMQADAMAFAHQAGAHAJADQAIADALgBQAMABAIgDQAJgDAGgHQAFgHADgMQADgMAAgUIAAgVQAAgUgDgMQgCgMgGgHQgGgHgJgDQgIgCgMAAQgLAAgIACg");
	this.shape_2.setTransform(201.5,211.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#646567").s().p("AhEBcIAAi3IA8AAQAWAAAPAFQAPAHAJALIAIALIAFAPQADAPAAASIAAATQAAASgEAQQgDAPgJALQgKAKgPAGQgHAEgKABQgJACgKgBgAgqBHIAgAAQAMAAAKgEQAKgCAHgIQAHgGADgNQAEgLAAgSIAAgRQAAgSgEgLQgDgMgHgIQgGgHgKgDQgKgDgNAAIggAAg");
	this.shape_3.setTransform(183.9,211.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#646567").s().p("AgMBcIAAi3IAZAAIAAC3g");
	this.shape_4.setTransform(171.3,211.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#646567").s().p("AgMBcIAAiiIg8AAIADgVICOAAIgDAVIg5AAIAACig");
	this.shape_5.setTransform(160,211.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#646567").s().p("AAsBcIhXiOIAACOIgXAAIAAi3IAXAAIBWCNIAAiNIAYAAIAAC3g");
	this.shape_6.setTransform(143.3,211.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#646567").s().p("Ag5BcIAAi3IBzAAIgDAVIhWAAIAAA5IBRAAIgEAVIhNAAIAAA/IBZAAIgDAVg");
	this.shape_7.setTransform(127.2,211.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#646567").s().p("AgkBdQgOgCgKgEIAEgVIAXAGQANACANAAQAXAAAKgIQAFgEACgHQADgGAAgJIgBgKQgCgFgDgEQgDgEgGgCQgGgDgIgBIgUgDQgYgDgLgMQgLgNAAgUIAAgCQAAgaASgNQAIgHANgDQANgDAPAAQAQAAAMADIAVAFIgFAUQgJgDgLgCQgLgBgNAAQgKAAgJABQgIACgFAEQgFADgDAGQgCAGAAAJQAAAMAGAHQAHAGAQACIAUADQAYADALAMQAGAFADAJQACAJAAALIAAADQAAAOgEAKQgEAKgJAHQgSANggAAQgPAAgPgCg");
	this.shape_8.setTransform(111.7,211.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#646567").s().p("AgkBdQgOgCgKgEIAEgVIAXAGQANACANAAQAXAAAKgIQAFgEACgHQADgGAAgJIgBgKQgCgFgDgEQgDgEgGgCQgGgDgIgBIgUgDQgYgDgLgMQgLgNAAgUIAAgCQAAgaASgNQAIgHANgDQANgDAPAAQAQAAAMADIAVAFIgFAUQgJgDgLgCQgLgBgNAAQgKAAgJABQgIACgFAEQgFADgDAGQgCAGAAAJQAAAMAGAHQAHAGAQACIAUADQAYADALAMQAGAFADAJQACAJAAALIAAADQAAAOgEAKQgEAKgJAHQgSANggAAQgPAAgPgCg");
	this.shape_9.setTransform(90.3,211.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#646567").s().p("AgTBfQgJgBgHgDQgHgDgFgFQgGgEgEgGQgIgLgDgQQgDgPAAgUIAAgVQAAgUADgPQADgRAIgKQAJgMAOgFQAHgDAJgCQAJgBAKgBQAVAAAOAHQAOAFAIAMQAEAFADAHIAEAOQADAQAAAUIAAAVQAAAUgDAPQgBAJgDAGIgHAMQgFAGgFAEQgGAFgHADQgOAFgVABQgKAAgJgCgAgThHQgJADgFAHQgGAHgDAMQgDAMAAAUIAAAVQAAAUADAMQADAMAFAHQAGAHAJADQAIADALgBQAMABAIgDQAJgDAGgHQAFgHADgMQADgMAAgUIAAgVQAAgUgDgMQgCgMgGgHQgGgHgJgDQgIgCgMAAQgLAAgIACg");
	this.shape_10.setTransform(74,211.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#646567").s().p("AgkBdQgOgCgKgEIAEgVIAXAGQANACANAAQAXAAAKgIQAFgEACgHQADgGAAgJIgBgKQgCgFgDgEQgDgEgGgCQgGgDgIgBIgUgDQgYgDgLgMQgLgNAAgUIAAgCQAAgaASgNQAIgHANgDQANgDAPAAQAQAAAMADIAVAFIgFAUQgJgDgLgCQgLgBgNAAQgKAAgJABQgIACgFAEQgFADgDAGQgCAGAAAJQAAAMAGAHQAHAGAQACIAUADQAYADALAMQAGAFADAJQACAJAAALIAAADQAAAOgEAKQgEAKgJAHQgSANggAAQgPAAgPgCg");
	this.shape_11.setTransform(183.8,181.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#646567").s().p("AgTBfQgJgCgHgDQgHgCgFgFQgGgEgEgGQgIgLgDgQQgDgPAAgUIAAgVQAAgUADgPQADgQAIgLQAJgMAOgFQAHgDAJgCQAJgBAKgBQAVAAAOAHQAOAFAIAMQAEAFADAHIAEAOQADAQAAAUIAAAVQAAAUgDAPQgBAJgDAGIgHAMQgFAGgFAEQgGAFgHACQgOAGgVABQgKAAgJgCgAgThHQgJADgFAHQgGAHgDAMQgDAMAAAUIAAAVQAAAUADAMQADAMAFAHQAGAHAJADQAIADALgBQAMABAIgDQAJgDAGgHQAFgHADgMQADgMAAgUIAAgVQAAgUgDgMQgCgMgGgHQgGgHgJgDQgIgCgMAAQgLAAgIACg");
	this.shape_12.setTransform(167.4,181.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#646567").s().p("AhEBcIAAi3IA8AAQAWAAAPAFQAPAHAJALIAIAMIAFAOQADAPAAASIAAATQAAASgEAQQgDAPgJALQgKAKgPAHQgHACgKACQgJACgKgBgAgqBHIAgAAQAMAAAKgEQAKgCAHgIQAHgGADgNQAEgLAAgSIAAgRQAAgRgEgMQgDgMgHgHQgGgIgKgDQgKgDgNAAIggAAg");
	this.shape_13.setTransform(149.8,181.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#646567").s().p("AgTBfQgJgCgHgDQgHgCgFgFQgGgEgEgGQgIgLgDgQQgDgPAAgUIAAgVQAAgUADgPQADgQAIgLQAJgMAOgFQAHgDAJgCQAJgBAKgBQAVAAAOAHQAOAFAIAMQAEAFADAHIAEAOQADAQAAAUIAAAVQAAAUgDAPQgBAJgDAGIgHAMQgFAGgFAEQgGAFgHACQgOAGgVABQgKAAgJgCgAgThHQgJADgFAHQgGAHgDAMQgDAMAAAUIAAAVQAAAUADAMQADAMAFAHQAGAHAJADQAIADALgBQAMABAIgDQAJgDAGgHQAFgHADgMQADgMAAgUIAAgVQAAgUgDgMQgCgMgGgHQgGgHgJgDQgIgCgMAAQgLAAgIACg");
	this.shape_14.setTransform(131.7,181.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#646567").s().p("AgMBcIAAiiIg8AAIADgVICOAAIgDAVIg5AAIAACig");
	this.shape_15.setTransform(114.9,181.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#646567").s().p("AA3BcIAAiLIgtBeIgTAAIguhdIAACKIgYAAIAAi3IAZAAIA2BwIA3hwIAZAAIAAC3g");
	this.shape_16.setTransform(90.4,181.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#646567").s().p("Ag5BcIAAi3IBzAAIgDAUIhWAAIAAA6IBQAAIgCAVIhOAAIAAA/IBZAAIgDAVg");
	this.shape_17.setTransform(73,181.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#646567").s().p("AAlBcIgnhKIglAAIAABKIgaAAIAAi3IBGAAQAPAAAKADQALAFAGAGQAGAIAEAJQACAKAAALIAAAFQAAAKgBAHQgDAJgEAGQgJAMgTAGIArBMgAgngCIAmAAQAQAAAJgHQAFgEADgGQABgHAAgIIAAgDQAAgIgBgHQgCgGgFgEQgDgEgHgCQgGgCgJAAIgnAAg");
	this.shape_18.setTransform(184.4,150.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#646567").s().p("AgMBcIAAi3IAZAAIAAC3g");
	this.shape_19.setTransform(172.2,150.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#646567").s().p("AgiBZQgGgCgFgDQgGgEgDgFQgIgKgDgOQgDgPAAgUIAAhtIAZAAIAABsQAAARACALQADALAFAHQAGAGAIADQAIACALAAQANAAAIgCQAJgDAEgGQAFgHACgLQACgMAAgPIAAhtIAaAAIAABtQAAATgDAPQgDAOgIAKIgJAJIgMAGQgOAFgUABQgUAAgOgGg");
	this.shape_20.setTransform(159.8,151);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#646567").s().p("Ag3BcIAAi3IAaAAIAACiIBVAAIgDAVg");
	this.shape_21.setTransform(144.8,150.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#646567").s().p("AgTBfQgJgCgHgDQgHgDgFgEQgGgEgEgGQgIgLgDgQQgDgPAAgUIAAgVQAAgUADgPQADgQAIgLQAJgMAOgGQAHgCAJgCQAJgCAKAAQAVABAOAFQAOAGAIAMQAEAFADAHIAEAOQADAQAAAUIAAAVQAAAUgDAPQgBAJgDAGIgHAMQgFAGgFAEQgGAEgHADQgOAHgVAAQgKgBgJgBgAgThHQgJADgFAGQgGAIgDAMQgDAMAAAUIAAAVQAAAUADAMQADAMAFAHQAGAHAJADQAIACALAAQAMAAAIgCQAJgDAGgHQAFgHADgMQADgMAAgUIAAgVQAAgUgDgMQgCgMgGgIQgGgGgJgDQgIgDgMABQgLgBgIADg");
	this.shape_22.setTransform(128.1,150.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#646567").s().p("AgOBcIhBi3IAcAAIAzCbIA1ibIAbAAIhCC3g");
	this.shape_23.setTransform(110.5,150.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#646567").s().p("Ag5BcIAAi3IBzAAIgDAUIhWAAIAAA7IBQAAIgCAUIhOAAIAAA/IBZAAIgDAVg");
	this.shape_24.setTransform(94.7,150.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#646567").s().p("Ag5B1IAAi4IBzAAIgDAVIhWAAIAAA5IBQAAIgCAVIhOAAIAAA/IBZAAIgDAWgAgYhTIAlghIAeAAIgqAhg");
	this.shape_25.setTransform(73,148.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#646567").s().p("AgTBfQgJgCgHgDQgHgDgFgEQgGgEgEgGQgIgKgDgRQgDgPAAgUIAAgVQAAgUADgPQADgQAIgMQAJgKAOgHQAHgDAJgBQAJgCAKAAQAVABAOAFQAOAHAIAKQAEAGADAHIAEAOQADAQAAAUIAAAVQAAAUgDAPQgBAJgDAGIgHAMQgFAGgFAEQgGAEgHADQgOAHgVAAQgKgBgJgBgAgThHQgJADgFAGQgGAIgDAMQgDAMAAAUIAAAVQAAAUADAMQADAMAFAHQAGAHAJADQAIACALAAQAMAAAIgCQAJgDAGgHQAFgHADgMQADgMAAgUIAAgVQAAgUgDgMQgCgMgGgIQgGgGgJgDQgIgDgMABQgLgBgIADg");
	this.shape_26.setTransform(268.8,120.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#646567").s().p("AgOBcIhBi3IAcAAIAzCbIA1ibIAbAAIhCC3g");
	this.shape_27.setTransform(251.2,120.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#646567").s().p("AgTBfQgJgCgHgDQgHgDgFgEQgGgEgEgGQgIgKgDgRQgDgPAAgUIAAgVQAAgUADgPQADgQAIgMQAJgKAOgHQAHgDAJgBQAJgCAKAAQAVABAOAFQAOAHAIAKQAEAGADAHIAEAOQADAQAAAUIAAAVQAAAUgDAPQgBAJgDAGIgHAMQgFAGgFAEQgGAEgHADQgOAHgVAAQgKgBgJgBgAgThHQgJADgFAGQgGAIgDAMQgDAMAAAUIAAAVQAAAUADAMQADAMAFAHQAGAHAJADQAIACALAAQAMAAAIgCQAJgDAGgHQAFgHADgMQADgMAAgUIAAgVQAAgUgDgMQgCgMgGgIQgGgGgJgDQgIgDgMABQgLgBgIADg");
	this.shape_28.setTransform(233.6,120.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#646567").s().p("AAsBcIhXiNIAACNIgXAAIAAi3IAXAAIBWCOIAAiOIAYAAIAAC3g");
	this.shape_29.setTransform(215.8,120.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#646567").s().p("AgTBfQgJgCgHgDQgHgDgFgEQgGgEgEgGQgIgKgDgRQgDgPAAgUIAAgVQAAgUADgPQADgQAIgMQAJgKAOgHQAHgDAJgBQAJgCAKAAQAVABAOAFQAOAHAIAKQAEAGADAHIAEAOQADAQAAAUIAAAVQAAAUgDAPQgBAJgDAGIgHAMQgFAGgFAEQgGAEgHADQgOAHgVAAQgKgBgJgBgAgThHQgJADgFAGQgGAIgDAMQgDAMAAAUIAAAVQAAAUADAMQADAMAFAHQAGAHAJADQAIACALAAQAMAAAIgCQAJgDAGgHQAFgHADgMQADgMAAgUIAAgVQAAgUgDgMQgCgMgGgIQgGgGgJgDQgIgDgMABQgLgBgIADg");
	this.shape_30.setTransform(191.4,120.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#646567").s().p("AgRAhIANgkQgEgCgCgEQgCgDAAgFQAAgHAEgDQAEgEAGAAQAIAAAEAEQAEADAAAHIgBAHIgEAKIgPAhg");
	this.shape_31.setTransform(172.2,129.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#646567").s().p("Ag5BcIAAi3IBzAAIgDAUIhWAAIAAA7IBRAAIgEAUIhNAAIAAA/IBZAAIgDAVg");
	this.shape_32.setTransform(161.8,120.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#646567").s().p("AgMBcIAAiiIg8AAIADgVICOAAIgDAVIg5AAIAACig");
	this.shape_33.setTransform(146,120.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#646567").s().p("AAsBcIhXiNIAACNIgXAAIAAi3IAXAAIBWCOIAAiOIAYAAIAAC3g");
	this.shape_34.setTransform(129.3,120.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#646567").s().p("Ag5BcIAAi3IBzAAIgDAUIhWAAIAAA7IBQAAIgCAUIhOAAIAAA/IBZAAIgDAVg");
	this.shape_35.setTransform(113.2,120.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#646567").s().p("AgJBeQgKgCgHgDQgIgDgFgEQgHgEgDgGQgFgGgCgGQgDgHgCgIQgDgPAAgTIAAgTQAAgTADgQIAGgPQADgHAFgFQAJgMAQgGQAIgDAKgBQAJgCAMAAQANAAAMACQALACAHADIgFAUIgQgEQgJgBgLAAQgQAAgKADQgKADgIAHQgHAHgDANQgCANAAATIAAARQAAATACAMQADANAGAHQAHAHAKADQAKACAPAAQANAAAMgCIAAg5IggAAIAEgUIA0AAIAABeIgLADIgNACIgPACIgNAAQgMAAgKgBg");
	this.shape_36.setTransform(96.9,120.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#646567").s().p("AA0BcIgRgzIhGAAIgRAzIgaAAIBAi3IAcAAIBBC3gAAcATIgchVIgcBVIA4AAg");
	this.shape_37.setTransform(73.6,120.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#646567").s().p("AA0BdIgRg0IhGAAIgRA0IgaAAIBAi5IAcAAIBBC5gAAcATIgchVIgcBVIA4AAg");
	this.shape_38.setTransform(237.1,89.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#646567").s().p("AAlBdIgnhLIgmAAIAABLIgZAAIAAi5IBGAAQAPAAAKAEQALAFAGAHQAHAGADALQACAJAAALIAAAFQAAAKgBAHQgDAJgEAGQgJANgTAEIArBOgAgogCIAnAAQARAAAIgIQAFgEACgFQACgGAAgJIAAgEQAAgIgCgGQgBgGgFgEQgDgEgHgCQgGgCgIAAIgpAAg");
	this.shape_39.setTransform(221.1,89.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#646567").s().p("AA0BdIgRg0IhGAAIgRA0IgaAAIBAi5IAcAAIBBC5gAAcATIgchVIgcBVIA4AAg");
	this.shape_40.setTransform(203.7,89.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#646567").s().p("Ag9BdIAAi5IBFAAQAOAAALAEQAKAFAHAHQAGAHADAKQADAKAAALIAAAGQAAAMgDAKQgEAKgHAGQgHAIgLADQgMAFgPAAIgmAAIAABHgAgjAAIAkAAQASAAAIgHQAJgHAAgRIAAgGQAAgRgIgJQgEgDgGgCQgHgDgJAAIglAAg");
	this.shape_41.setTransform(187.7,89.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#646567").s().p("AgRAhIANgkQgEgCgCgEQgCgDAAgFQAAgHAEgEQAEgDAGAAQAIAAAEADQAEAEAAAHIgBAHIgEAKIgPAhg");
	this.shape_42.setTransform(169.1,99.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#646567").s().p("Ag5BdIAAi5IBzAAIgDAVIhWAAIAAA7IBQAAIgDAUIhNAAIAAA/IBZAAIgDAWg");
	this.shape_43.setTransform(158.7,89.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#646567").s().p("AghBZQgHgCgFgDQgFgEgFgFQgHgKgDgPQgDgPAAgTIAAhuIAaAAIAABtQAAAQABAMQADALAFAGQAGAHAIADQAIADAMAAQAMAAAIgDQAJgDAEgHQAFgGACgLQACgMAAgQIAAhtIAaAAIAABuQAAATgDAOQgDAPgIAKIgJAJIgMAGQgOAFgUAAQgUABgNgGg");
	this.shape_44.setTransform(141.9,90);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#646567").s().p("AAqBuIgSgdIgLACIgNAAQgKAAgJgBQgJgCgHgDQgHgDgFgEQgGgEgEgGQgIgLgDgQQgDgPAAgTIAAgXQAAgTADgQQADgQAIgLQAJgLAOgGQAHgDAJgBQAJgCAKAAQAVAAAOAGQAOAGAIALQAEAGADAHIAEAOQADAQAAATIAAAXQAAAMgBAMQgCALgDAJQgDAKgFAHQgGAIgIAFIAXAlgAgThUQgJADgFAGQgGAIgDAMQgDAMAAATIAAAXQAAASADANQADAMAFAHQAGAHAJADQAIACALAAIALAAIgRgfIAXAAIAOAXQAHgHAEgNQADgIABgaIAAgXQAAgTgDgMQgCgMgGgIQgGgGgJgDQgIgDgMAAQgLAAgIADg");
	this.shape_45.setTransform(124,91.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#646567").s().p("AAlBdIgnhLIgmAAIAABLIgZAAIAAi5IBGAAQAPAAAKAEQALAFAGAHQAHAGADALQACAJAAALIAAAFQAAAKgBAHQgDAJgEAGQgJANgTAEIArBOgAgogCIAnAAQARAAAIgIQAFgEACgFQACgGAAgJIAAgEQAAgIgCgGQgBgGgFgEQgDgEgHgCQgGgCgIAAIgpAAg");
	this.shape_46.setTransform(107.6,89.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#646567").s().p("AgTBfQgJgBgHgEQgHgDgFgEQgGgEgEgGQgIgKgDgRQgDgPAAgTIAAgWQAAgUADgQQADgPAIgMQAJgKAOgHQAHgDAJgBQAJgBAKAAQAVAAAOAFQAOAHAIAKQAEAGADAHIAEAOQADAQAAAUIAAAWQAAATgDAPQgBAIgDAHIgHAMQgFAGgFAEQgGAEgHADQgOAHgVgBQgKAAgJgBgAgThHQgJADgFAGQgGAIgDAMQgDANAAATIAAAWQAAATADAMQADAMAFAHQAGAHAJADQAIADALAAQAMAAAIgDQAJgDAGgHQAFgHADgMQADgMAAgTIAAgWQAAgUgDgMQgCgMgGgIQgGgGgJgDQgIgCgMgBQgLABgIACg");
	this.shape_47.setTransform(89.8,89.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#646567").s().p("Ag9BdIAAi5IBFAAQAOAAALAEQAKAFAHAHQAGAHADAKQADAKAAALIAAAGQAAAMgDAKQgEAKgHAGQgHAIgLADQgMAFgPAAIgmAAIAABHgAgjAAIAkAAQASAAAIgHQAJgHAAgRIAAgGQAAgRgIgJQgEgDgGgCQgHgDgJAAIglAAg");
	this.shape_48.setTransform(73.4,89.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_2, new cjs.Rectangle(0,0,434,280), null);


(lib.txt_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#646567").s().p("AgQAQQgGgFAAgLQAAgKAGgFQAGgGAKAAQAKAAAGAGQAHAFAAAKQAAALgHAFQgGAGgKAAQgKAAgGgGg");
	this.shape.setTransform(261.5,197.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#646567").s().p("AArBcIgOgtIg7AAIgOAtIgmAAIA+i3IAoAAIA/C3gAAVAQIgVhGIgWBGIArAAg");
	this.shape_1.setTransform(249.2,190.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#646567").s().p("AgEBeQgJgBgHgDQgIgDgGgEQgGgEgEgFIgJgMIgFgOQgDgQAAgVIAAgSQAAgTADgPIAFgPIAJgNQAJgMAQgGQAPgHAXAAQANAAAMACIASAFIgHAeIgOgDIgRgCQgMAAgKADQgHACgFAGQgGAHgCAKQgDALAAAQIAAARQAAAQADALQACAKAFAGQAFAGAIACQAJACAOAAIARgBIAUgCIgHAfIgUADIgTABg");
	this.shape_2.setTransform(233.1,190.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#646567").s().p("AAbBcIghhDIgZAAIAABDIgmAAIAAi3IBMAAQAPAAALADQALAFAHAHQAGAIAEAKQADAKAAAMIAAAFQAAAngiAMIAoBIgAgfgGIAfAAQAMAAAHgFQADgEABgEQACgGAAgGIAAgEQAAgZgZgBIgfAAg");
	this.shape_3.setTransform(217.7,190.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#646567").s().p("AArBcIgOgtIg7AAIgOAtIgmAAIA+i3IAoAAIA/C3gAAVAQIgVhGIgWBGIArAAg");
	this.shape_4.setTransform(199.9,190.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#646567").s().p("AAxBcIAAh2IgjBMIgbAAIgjhMIAAB2IglAAIAAi3IAoAAIAtBlIAvhlIAnAAIAAC3g");
	this.shape_5.setTransform(180.6,190.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#646567").s().p("AArBcIgOgtIg7AAIgOAtIgmAAIA+i3IAoAAIA/C3gAAVAQIgVhGIgWBGIArAAg");
	this.shape_6.setTransform(154.8,190.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#646567").s().p("AgmBdQgPgCgLgEIAGgeIAYAEQAMADAOAAQARAAAJgGQAEgDACgFQACgEAAgHQAAgHgCgEQgCgEgDgCQgEgDgGgBIgMgDIgMgCQgJgBgIgDQgJgDgGgGQgGgFgEgJQgFgKAAgOQAAg4BIAAQAPAAAMACQANACAKAEIgGAeIgUgEQgLgCgMAAQgTAAgIAFQgEACgCAFQgCAEAAAGQAAAKAFAFQAGAFAOACIANACIASAFQAJACAIAGQAHAFAFAKQAEAKAAAPQAAAegTAOQgJAHgNAEQgOADgRAAQgQAAgPgCg");
	this.shape_7.setTransform(138.2,190.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#646567").s().p("AgmBdQgPgCgLgEIAGgeIAYAEQAMADAOAAQARAAAJgGQAEgDACgFQACgEAAgHQAAgHgCgEQgCgEgDgCQgEgDgGgBIgMgDIgMgCQgJgBgIgDQgJgDgGgGQgGgFgEgJQgFgKAAgOQAAg4BIAAQAPAAAMACQANACAKAEIgGAeIgUgEQgLgCgMAAQgTAAgIAFQgEACgCAFQgCAEAAAGQAAAKAFAFQAGAFAOACIANACIASAFQAJACAIAGQAHAFAFAKQAEAKAAAPQAAAegTAOQgJAHgNAEQgOADgRAAQgQAAgPgCg");
	this.shape_8.setTransform(123.1,190.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#646567").s().p("AgUBfQgJgBgIgEQgPgGgJgLIgGgNIgGgPQgCgPAAgTIAAgVQgBgTAEgQQADgQAKgLQADgFAHgFIAMgHQAPgHAWAAQAXABAQAGQAPAHAHALQAFAGADAGQADAHABAIQAEAQAAASIAAAVQgBATgDAPQgBAIgEAHQgDAHgEAGQgJALgPAGQgPAHgWAAQgLAAgJgCgAgOg9QgHACgFAGQgFAFgCALQgCAKgBARIAAAVQABARACAKQACALAEAFQAFAGAHACQAGACAJAAQAIAAAHgCQAHgCAEgGQAGgGABgKQADgKAAgRIAAgVQAAgRgCgKQgCgLgFgFQgFgGgGgCQgHgCgJAAQgIAAgGACg");
	this.shape_9.setTransform(106.5,190.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#646567").s().p("AAlBcIhIh5IAAB5IgkAAIAAi3IAjAAIBIB5IAAh5IAlAAIAAC3g");
	this.shape_10.setTransform(88.2,190.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#646567").s().p("AArBcIgOgtIg7AAIgOAtIgmAAIA+i3IAoAAIA/C3gAAVAQIgVhGIgWBGIArAAg");
	this.shape_11.setTransform(253,159.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#646567").s().p("AAmBcIhIh5IAAB5IgmAAIAAi3IAjAAIBIB5IAAh5IAmAAIAAC3g");
	this.shape_12.setTransform(235.4,159.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#646567").s().p("Ag9B1IAAi4IB7AAIgEAfIhQAAIAAAsIBMAAIgEAfIhIAAIAAAvIBUAAIgEAfgAgbhSIAjgiIAqAAIgqAig");
	this.shape_13.setTransform(213.1,157.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#646567").s().p("AgSBcIAAiYIg3AAIAEgfICPAAIgEAfIgyAAIAACYg");
	this.shape_14.setTransform(197.3,159.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#646567").s().p("AArBcIgOgtIg7AAIgOAtIgmAAIA+i3IAoAAIA/C3gAAVAQIgVhGIgWBGIArAAg");
	this.shape_15.setTransform(180.7,159.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#646567").s().p("AgMAMQgDgEAAgIQAAgHADgEQAEgEAIAAQAJAAAEAEQADAEAAAHQAAAIgDAEQgEAEgJAAQgIAAgEgEg");
	this.shape_16.setTransform(162.5,167.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#646567").s().p("AAlBcIgnhKIgmAAIAABKIgZAAIAAi3IBGAAQAPAAAKADQAKAFAHAGQAHAIADAJQACAKAAALIAAAFQAAAKgCAHQgCAJgEAGQgJAMgTAGIArBMgAgogCIAoAAQAQAAAIgHQAFgEACgGQACgHAAgIIAAgDQAAgIgCgHQgCgGgDgEQgFgEgGgCQgGgCgIAAIgpAAg");
	this.shape_17.setTransform(151.9,159.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#646567").s().p("AA0BcIgRgzIhGAAIgRAzIgaAAIBAi3IAcAAIBBC3gAAcATIgchVIgcBVIA4AAg");
	this.shape_18.setTransform(134.8,159.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#646567").s().p("AgJBeQgJgCgIgDQgIgDgFgEQgHgEgDgGQgFgGgDgGQgCgHgCgIQgDgPAAgTIAAgTQAAgTAEgQIAEgPQAEgHAFgFQAJgMAQgGQAIgDAKgBQAJgCAMAAQAMAAANACQALACAHADIgEAUIgRgEQgJgBgKAAQgRAAgJADQgMADgGAHQgHAHgEANQgDANAAATIAAARQAAATADAMQADANAGAHQAHAHAKADQAKACAPAAQANAAAMgCIAAg5IggAAIAEgUIA0AAIAABeIgLADIgNACIgPACIgNAAQgNAAgJgBg");
	this.shape_19.setTransform(118.3,159.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#646567").s().p("AghBZQgHgCgFgDQgFgEgEgFQgIgKgDgOQgDgPAAgUIAAhtIAaAAIAABsQAAARABALQADALAFAHQAFAGAJADQAIACAMAAQAMAAAIgCQAJgDAEgGQAFgHACgLQACgMAAgPIAAhtIAaAAIAABtQAAATgDAPQgDAOgIAKIgJAJIgMAGQgOAFgUABQgUAAgNgGg");
	this.shape_20.setTransform(101.5,160);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#646567").s().p("Ag3BcIAAi3IAaAAIAACiIBVAAIgDAVg");
	this.shape_21.setTransform(86.8,159.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#646567").s().p("AgTBfQgJgCgHgDQgHgDgFgEQgGgEgEgGQgIgKgDgRQgDgPAAgUIAAgVQAAgUADgPQADgQAIgMQAJgKAOgHQAHgDAJgBQAJgCAKAAQAVABAOAFQAOAHAIAKQAEAGADAHIAEAOQADAQAAAUIAAAVQAAAUgDAPQgBAJgDAGIgHAMQgFAGgFAEQgGAEgHADQgOAHgVAAQgKgBgJgBgAgThHQgJADgFAGQgGAIgDAMQgDAMAAAUIAAAVQAAAUADAMQADAMAFAHQAGAHAJADQAIACALAAQAMAAAIgCQAJgDAGgHQAFgHADgMQADgMAAgUIAAgVQAAgUgDgMQgCgMgGgIQgGgGgJgDQgIgDgMABQgLgBgIADg");
	this.shape_22.setTransform(247.5,129.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#646567").s().p("AhEBcIAAi3IA8AAQAWgBAPAHQAPAGAJALIAIAMIAFAOQADAPAAARIAAAUQAAATgEAOQgDAPgJAMQgKAKgPAHQgHADgKABQgJABgKAAgAgqBGIAgAAQAMAAAKgCQAKgEAHgGQAHgIADgMQAEgLAAgSIAAgRQAAgSgEgLQgDgMgHgHQgGgIgKgDQgKgDgNAAIggAAg");
	this.shape_23.setTransform(230.2,129.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#646567").s().p("AgTBfQgJgCgHgDQgHgDgFgEQgGgEgEgGQgIgKgDgRQgDgPAAgUIAAgVQAAgUADgPQADgQAIgMQAJgKAOgHQAHgDAJgBQAJgCAKAAQAVABAOAFQAOAHAIAKQAEAGADAHIAEAOQADAQAAAUIAAAVQAAAUgDAPQgBAJgDAGIgHAMQgFAGgFAEQgGAEgHADQgOAHgVAAQgKgBgJgBgAgThHQgJADgFAGQgGAIgDAMQgDAMAAAUIAAAVQAAAUADAMQADAMAFAHQAGAHAJADQAIACALAAQAMAAAIgCQAJgDAGgHQAFgHADgMQADgMAAgUIAAgVQAAgUgDgMQgCgMgGgIQgGgGgJgDQgIgDgMABQgLgBgIADg");
	this.shape_24.setTransform(212.4,129.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#646567").s().p("AgMBcIAAiiIg8AAIADgVICOAAIgDAVIg5AAIAACig");
	this.shape_25.setTransform(195.9,129.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#646567").s().p("AA3BcIAAiLIgtBeIgTAAIguhdIAACKIgYAAIAAi3IAZAAIA2BwIA3hwIAZAAIAAC3g");
	this.shape_26.setTransform(172,129.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#646567").s().p("Ag5BcIAAi3IBzAAIgDAUIhWAAIAAA7IBRAAIgEAUIhNAAIAAA/IBZAAIgDAVg");
	this.shape_27.setTransform(154.9,129.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#646567").s().p("AA0B1IgRg0IhGAAIgRA0IgaAAIBAi4IAcAAIBBC4gAAcArIgchVIgcBVIA4AAgAgShTIAlghIAeAAIgqAhg");
	this.shape_28.setTransform(132.4,126.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#646567").s().p("AgMBcIAAiiIg8AAIADgVICOAAIgDAVIg5AAIAACig");
	this.shape_29.setTransform(116.3,129.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#646567").s().p("AgkBdQgOgCgKgEIAEgVIAXAGQANACANAAQAXAAAKgIQAFgEACgHQADgGAAgJIgBgKQgCgFgDgEQgDgEgGgCQgGgDgIgBIgUgDQgYgDgLgMQgLgNAAgUIAAgCQAAgaASgNQAIgHANgDQANgDAPAAQAQAAAMADIAVAFIgFAUQgJgDgLgCQgLgBgNAAQgKAAgJABQgIACgFAEQgFADgDAGQgCAGAAAJQAAAMAGAHQAHAGAQACIAUADQAYADALAMQAGAFADAJQACAJAAALIAAADQAAAOgEAKQgEAKgJAHQgSANggAAQgPAAgPgCg");
	this.shape_30.setTransform(101.3,129.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#646567").s().p("Ag5BcIAAi3IBzAAIgDAUIhWAAIAAA7IBRAAIgEAUIhNAAIAAA/IBZAAIgDAVg");
	this.shape_31.setTransform(87,129.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#646567").s().p("AgTBfQgJgBgHgEQgHgDgFgEQgGgEgEgGQgIgKgDgRQgDgPAAgTIAAgWQAAgUADgQQADgPAIgMQAJgKAOgHQAHgDAJgBQAJgBAKAAQAVAAAOAFQAOAHAIAKQAEAGADAHIAEAOQADAQAAAUIAAAWQAAATgDAPQgBAIgDAHIgHAMQgFAGgFAEQgGAEgHADQgOAHgVgBQgKAAgJgBgAgThHQgJADgFAGQgGAIgDAMQgDANAAATIAAAWQAAATADAMQADAMAFAHQAGAHAJADQAIADALAAQAMAAAIgDQAJgDAGgHQAFgHADgMQADgMAAgTIAAgWQAAgUgDgMQgCgMgGgIQgGgGgJgDQgIgCgMgBQgLABgIACg");
	this.shape_32.setTransform(235.3,98.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#646567").s().p("AgOBdIhBi5IAcAAIAzCcIA1icIAbAAIhCC5g");
	this.shape_33.setTransform(218,98.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#646567").s().p("AgTBfQgJgBgHgEQgHgDgFgEQgGgEgEgGQgIgKgDgRQgDgPAAgTIAAgWQAAgUADgQQADgPAIgMQAJgKAOgHQAHgDAJgBQAJgBAKAAQAVAAAOAFQAOAHAIAKQAEAGADAHIAEAOQADAQAAAUIAAAWQAAATgDAPQgBAIgDAHIgHAMQgFAGgFAEQgGAEgHADQgOAHgVgBQgKAAgJgBgAgThHQgJADgFAGQgGAIgDAMQgDANAAATIAAAWQAAATADAMQADAMAFAHQAGAHAJADQAIADALAAQAMAAAIgDQAJgDAGgHQAFgHADgMQADgMAAgTIAAgWQAAgUgDgMQgCgMgGgIQgGgGgJgDQgIgCgMgBQgLABgIACg");
	this.shape_34.setTransform(200.7,98.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#646567").s().p("AAsBdIhXiOIAACOIgXAAIAAi5IAXAAIBWCPIAAiPIAYAAIAAC5g");
	this.shape_35.setTransform(183.2,98.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#646567").s().p("AgTBfQgJgBgHgEQgHgDgFgEQgGgEgEgGQgIgKgDgRQgDgPAAgTIAAgWQAAgUADgQQADgPAIgMQAJgKAOgHQAHgDAJgBQAJgBAKAAQAVAAAOAFQAOAHAIAKQAEAGADAHIAEAOQADAQAAAUIAAAWQAAATgDAPQgBAIgDAHIgHAMQgFAGgFAEQgGAEgHADQgOAHgVgBQgKAAgJgBgAgThHQgJADgFAGQgGAIgDAMQgDANAAATIAAAWQAAATADAMQADAMAFAHQAGAHAJADQAIADALAAQAMAAAIgDQAJgDAGgHQAFgHADgMQADgMAAgTIAAgWQAAgUgDgMQgCgMgGgIQgGgGgJgDQgIgCgMgBQgLABgIACg");
	this.shape_36.setTransform(159.4,98.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#646567").s().p("AgRAhIANgkQgEgCgCgEQgCgDAAgFQAAgHAEgEQAEgDAGAAQAIAAAEADQAEAEAAAHIgBAHIgEAKIgPAhg");
	this.shape_37.setTransform(140.8,108.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#646567").s().p("AgMBdIAAi5IAZAAIAAC5g");
	this.shape_38.setTransform(134.5,98.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#646567").s().p("AghBZQgHgCgFgDQgGgEgEgFQgHgKgDgPQgDgPAAgTIAAhuIAaAAIAABtQAAAQACAMQACALAFAGQAGAHAIADQAIADAMAAQAMAAAIgDQAIgDAFgHQAFgGACgLQACgMAAgQIAAhtIAaAAIAABuQAAATgDAOQgDAPgIAKIgJAJIgMAGQgOAFgUAAQgUABgNgGg");
	this.shape_39.setTransform(122.4,99);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#646567").s().p("AAqBuIgSgdIgLACIgNAAQgKAAgJgBQgJgCgHgDQgHgDgFgEQgGgEgEgGQgIgLgDgQQgDgPAAgTIAAgXQAAgTADgQQADgQAIgLQAJgLAOgGQAHgDAJgBQAJgCAKAAQAVAAAOAGQAOAGAIALQAEAGADAHIAEAOQADAQAAATIAAAXQAAAMgBAMQgCALgDAJQgDAKgFAHQgGAIgIAFIAXAlgAgThUQgJADgFAGQgGAIgDAMQgDAMAAATIAAAXQAAASADANQADAMAFAHQAGAHAJADQAIACALAAIALAAIgRgfIAXAAIAOAXQAHgHAEgNQADgIABgaIAAgXQAAgTgDgMQgCgMgGgIQgGgGgJgDQgIgDgMAAQgLAAgIADg");
	this.shape_40.setTransform(104.8,100.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#646567").s().p("AA0BdIgRg0IhGAAIgRA0IgaAAIBAi5IAcAAIBBC5gAAcATIgchVIgcBVIA4AAg");
	this.shape_41.setTransform(87.6,98.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_1, new cjs.Rectangle(0,0,336,280), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,336,280), null);


(lib.fundo_cta2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2D234").s().p("ArdDnQhZAAAAhaIAAkZQAAhaBZAAIW7AAQBaAAAABaIAAEZQAABahaAAg");
	this.shape.setTransform(3.5,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fundo_cta2, new cjs.Rectangle(-78.8,-22.1,164.7,46.2), null);


(lib.fundo_cta1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#782B90").s().p("ArdDnQhZAAAAhaIAAkZQAAhaBZAAIW7AAQBaAAAABaIAAEZQAABahaAAg");
	this.shape.setTransform(3.5,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fundo_cta1, new cjs.Rectangle(-78.8,-22.1,164.7,46.2), null);


(lib.borda_verde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B6D065").ss(7.9,1,1).p("Ego1gXlMBSCAAAQDJAACOCLQCOCKAADEMAAAAnyEgwxAXmMAAAgnyQAAjECOiKQCOiLDJAA");
	this.shape.setTransform(335.1,171.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.borda_verde, new cjs.Rectangle(19,16.2,632.3,309.9), null);


(lib.bg_cinza = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_cinza, new cjs.Rectangle(0,0,336,280), null);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.img_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(0,0,336,280), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MASK (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_8 = new cjs.Graphics().p("ArdDnQhZAAAAhaIAAkZQAAhaBZAAIW7AAQBaAAAABaIAAEZQAABahaAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_graphics_8,x:3.5,y:1}).wait(26).to({graphics:null,x:0,y:0}).wait(21));

	// Camada 2
	this.instance = new lib.txt_cta();
	this.instance.parent = this;
	this.instance.setTransform(-127.7,-1.4);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({x:-8.7},15,cjs.Ease.get(1)).to({_off:true},11).wait(21));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("ArdDnQhZAAAAhaIAAkZQAAhaBZAAIW7AAQBaAAAABaIAAEZQAABahaAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:3.5,y:1}).wait(34).to({graphics:null,x:0,y:0}).wait(21));

	// Camada 1 Cópia
	this.instance_1 = new lib.fundo_cta1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-239.2,0,1,1,0,0,0,-74.2,0);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({x:-74.2},15,cjs.Ease.get(1)).to({_off:true},17).wait(21));

	// Camada 1
	this.instance_2 = new lib.fundo_cta2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-238.9,0,1,1,0,0,0,-74.2,0);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-74.2},15,cjs.Ease.get(1)).to({_off:true},19).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.8,-22.1,0,46.2);


// stage content:
(lib.google_retangulogrande336x280_amc_maquina = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_309 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(309).call(this.frame_309).wait(1));

	// borda
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("A6K1yMA0VAAAMAAAArlMg0VAAAg");
	this.shape.setTransform(167.5,139.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(310));

	// txt_legal
	this.instance = new lib.txt_legal_1();
	this.instance.parent = this;
	this.instance.setTransform(168,140,1,1,0,0,0,168,140);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(284).to({_off:false},0).to({alpha:1},7).wait(19));

	// bt
	this.instance_1 = new lib.cta("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(162.7,170.4,0.893,0.893);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(276).to({_off:false},0).wait(34));

	// logo
	this.instance_2 = new lib.logo_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(504,140,1,1,0,0,0,168,140);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(269).to({_off:false},0).to({x:168,alpha:1},13,cjs.Ease.get(1)).wait(28));

	// txt_2
	this.instance_3 = new lib.txt_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(454,140,1,1,0,0,0,168,140);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(159).to({_off:false},0).to({x:168,alpha:1},16,cjs.Ease.get(1)).wait(82).to({x:-112,alpha:0},14,cjs.Ease.get(-1)).wait(39));

	// txt_1
	this.instance_4 = new lib.txt_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(116,140,1,1,0,0,0,168,140);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(59).to({_off:false},0).to({x:168,alpha:1},14,cjs.Ease.get(1)).wait(76).to({x:-112,alpha:0},16,cjs.Ease.get(-1)).wait(145));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_44 = new cjs.Graphics().p("EgSBA56MAAAhE6MAkDAAAMAAABE6g");
	var mask_graphics_45 = new cjs.Graphics().p("EgSBA3TMAAAhE6MAkDAAAMAAABE6g");
	var mask_graphics_46 = new cjs.Graphics().p("EgSBA0sMAAAhE6MAkDAAAMAAABE6g");
	var mask_graphics_47 = new cjs.Graphics().p("EgSBAyGMAAAhE6MAkDAAAMAAABE6g");
	var mask_graphics_48 = new cjs.Graphics().p("EgSBAvfMAAAhE6MAkDAAAMAAABE6g");
	var mask_graphics_49 = new cjs.Graphics().p("EgSBAs4MAAAhE6MAkDAAAMAAABE6g");
	var mask_graphics_50 = new cjs.Graphics().p("EgSBAqSMAAAhE6MAkDAAAMAAABE6g");
	var mask_graphics_51 = new cjs.Graphics().p("EgSBAnrMAAAhE6MAkDAAAMAAABE6g");
	var mask_graphics_52 = new cjs.Graphics().p("EgSBAlEMAAAhE6MAkDAAAMAAABE6g");
	var mask_graphics_53 = new cjs.Graphics().p("EgSBAidMAAAhE5MAkDAAAMAAABE5g");
	var mask_graphics_54 = new cjs.Graphics().p("EgTQAidMAAAhE5MAmhAAAMAAABE5g");
	var mask_graphics_55 = new cjs.Graphics().p("EgUeAidMAAAhE5MAo9AAAMAAABE5g");
	var mask_graphics_56 = new cjs.Graphics().p("EgVsAidMAAAhE5MArZAAAMAAABE5g");
	var mask_graphics_57 = new cjs.Graphics().p("EgW6AidMAAAhE5MAt1AAAMAAABE5g");
	var mask_graphics_58 = new cjs.Graphics().p("EgYJAidMAAAhE5MAwTAAAMAAABE5g");
	var mask_graphics_59 = new cjs.Graphics().p("EgZXAidMAAAhE5MAyvAAAMAAABE5g");
	var mask_graphics_60 = new cjs.Graphics().p("EgalAidMAAAhE5MA1LAAAMAAABE5g");
	var mask_graphics_61 = new cjs.Graphics().p("EgbzAidMAAAhE5MA3nAAAMAAABE5g");
	var mask_graphics_62 = new cjs.Graphics().p("EgdCAidMAAAhE5MA6FAAAMAAABE5g");
	var mask_graphics_63 = new cjs.Graphics().p("EgeQAidMAAAhE5MA8hAAAMAAABE5g");
	var mask_graphics_64 = new cjs.Graphics().p("EgfeAidMAAAhE5MA+9AAAMAAABE5g");
	var mask_graphics_65 = new cjs.Graphics().p("EggsAidMAAAhE5MBBZAAAMAAABE5g");
	var mask_graphics_66 = new cjs.Graphics().p("Egh7AidMAAAhE5MBD3AAAMAAABE5g");
	var mask_graphics_67 = new cjs.Graphics().p("EgjJAidMAAAhE5MBGTAAAMAAABE5g");
	var mask_graphics_68 = new cjs.Graphics().p("EgkXAidMAAAhE5MBIvAAAMAAABE5g");
	var mask_graphics_69 = new cjs.Graphics().p("EgllAidMAAAhE5MBLLAAAMAAABE5g");
	var mask_graphics_70 = new cjs.Graphics().p("Egm0AidMAAAhE5MBNpAAAMAAABE5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(44).to({graphics:mask_graphics_44,x:-82.5,y:370.6}).wait(1).to({graphics:mask_graphics_45,x:-77,y:353.9}).wait(1).to({graphics:mask_graphics_46,x:-71.4,y:337.2}).wait(1).to({graphics:mask_graphics_47,x:-65.8,y:320.6}).wait(1).to({graphics:mask_graphics_48,x:-60.3,y:303.9}).wait(1).to({graphics:mask_graphics_49,x:-54.7,y:287.2}).wait(1).to({graphics:mask_graphics_50,x:-49.1,y:270.6}).wait(1).to({graphics:mask_graphics_51,x:-43.6,y:253.9}).wait(1).to({graphics:mask_graphics_52,x:-38,y:237.2}).wait(1).to({graphics:mask_graphics_53,x:-32.5,y:220.5}).wait(1).to({graphics:mask_graphics_54,x:-24.6,y:220.5}).wait(1).to({graphics:mask_graphics_55,x:-16.8,y:220.5}).wait(1).to({graphics:mask_graphics_56,x:-9,y:220.5}).wait(1).to({graphics:mask_graphics_57,x:-1.2,y:220.5}).wait(1).to({graphics:mask_graphics_58,x:6.7,y:220.5}).wait(1).to({graphics:mask_graphics_59,x:14.5,y:220.5}).wait(1).to({graphics:mask_graphics_60,x:22.3,y:220.5}).wait(1).to({graphics:mask_graphics_61,x:30.1,y:220.5}).wait(1).to({graphics:mask_graphics_62,x:38,y:220.5}).wait(1).to({graphics:mask_graphics_63,x:45.8,y:220.5}).wait(1).to({graphics:mask_graphics_64,x:53.6,y:220.5}).wait(1).to({graphics:mask_graphics_65,x:61.4,y:220.5}).wait(1).to({graphics:mask_graphics_66,x:69.3,y:220.5}).wait(1).to({graphics:mask_graphics_67,x:77.1,y:220.5}).wait(1).to({graphics:mask_graphics_68,x:84.9,y:220.5}).wait(1).to({graphics:mask_graphics_69,x:92.7,y:220.5}).wait(1).to({graphics:mask_graphics_70,x:100.6,y:220.5}).wait(1).to({graphics:null,x:0,y:0}).wait(239));

	// borda_verde
	this.instance_5 = new lib.borda_verde();
	this.instance_5.parent = this;
	this.instance_5.setTransform(168,140,1,1,0,0,0,168,140);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({_off:false},0).wait(103).to({x:-32},16,cjs.Ease.get(-1)).wait(106).to({x:-168},13,cjs.Ease.get(1)).wait(28));

	// bg
	this.instance_6 = new lib.bg_cinza();
	this.instance_6.parent = this;
	this.instance_6.setTransform(168,140,1,1,0,0,0,168,140);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).to({alpha:1},21).wait(245));

	// img_1
	this.instance_7 = new lib.bg_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(168.1,140.1,1.2,1.2,0,0,0,168,140);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1,x:168,y:140,alpha:1},24,cjs.Ease.get(1)).wait(286));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(134.5,112.1,403.2,336);
// library properties:
lib.properties = {
	width: 336,
	height: 280,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/img_1.jpg", id:"img_1"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/txt_legal.png", id:"txt_legal"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;