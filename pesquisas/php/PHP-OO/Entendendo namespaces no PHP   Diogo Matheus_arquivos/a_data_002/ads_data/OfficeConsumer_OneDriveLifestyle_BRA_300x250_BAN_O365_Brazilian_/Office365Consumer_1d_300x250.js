(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Office365Consumer_1d_300x250_atlas_", frames: [[333,726,109,36],[333,384,109,36],[111,650,109,36],[0,346,109,36],[222,650,109,36],[222,460,109,36],[333,498,109,36],[222,726,109,36],[0,688,109,36],[333,650,109,36],[333,764,109,36],[0,764,109,36],[333,574,109,36],[222,764,109,36],[0,802,109,36],[0,574,109,36],[0,422,109,36],[222,498,109,36],[0,498,109,36],[111,422,109,36],[0,612,109,36],[111,384,109,36],[222,384,109,36],[222,422,109,36],[111,574,109,36],[333,422,109,36],[111,612,109,36],[222,536,109,36],[111,498,109,36],[222,612,109,36],[333,460,109,36],[0,384,109,36],[222,346,109,36],[0,650,109,36],[333,346,109,36],[333,612,109,36],[111,764,109,36],[0,726,109,36],[333,536,109,36],[111,840,109,36],[0,536,109,36],[111,460,109,36],[0,460,109,36],[222,688,109,36],[222,802,109,36],[111,536,109,36],[333,802,109,36],[222,574,109,36],[111,346,109,36],[0,840,109,36],[111,802,109,36],[333,688,109,36],[111,726,109,36],[111,688,109,36],[444,496,22,23],[444,521,22,23],[444,346,22,23],[468,475,22,23],[468,375,22,23],[468,600,22,23],[452,275,22,23],[468,325,22,23],[468,425,22,23],[444,421,22,23],[476,25,22,23],[468,450,22,23],[444,446,22,23],[452,125,22,23],[476,0,22,23],[468,525,22,23],[444,596,22,23],[468,500,22,23],[476,50,22,23],[444,396,22,23],[452,175,22,23],[476,75,22,23],[452,50,22,23],[452,75,22,23],[476,250,22,23],[476,275,22,23],[452,0,22,23],[468,550,22,23],[452,100,22,23],[452,150,22,23],[476,300,22,23],[452,200,22,23],[452,250,22,23],[468,350,22,23],[476,225,22,23],[452,225,22,23],[468,625,22,23],[444,546,22,23],[452,300,22,23],[444,571,22,23],[476,100,22,23],[476,200,22,23],[476,125,22,23],[476,175,22,23],[468,575,22,23],[444,471,22,23],[444,371,22,23],[444,621,22,23],[452,25,22,23],[468,400,22,23],[476,150,22,23],[0,0,450,344]]}
];



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



(lib.ASSEMBLY300x250ARM_00000 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00001 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00002 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00003 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00004 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00005 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00006 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00007 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00008 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00009 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00010 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00011 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00012 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00013 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00014 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00015 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00016 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00017 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00018 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00019 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00020 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00021 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00022 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00023 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00024 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00025 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00026 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00027 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00028 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00029 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00030 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00031 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00032 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00033 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00034 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00035 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00036 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00037 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00038 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00039 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00040 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00041 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00042 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00043 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00044 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00045 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00046 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00047 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00048 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00049 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00050 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00051 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00052 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250ARM_00053 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00000 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00001 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00002 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00003 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00004 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00005 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00006 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00007 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00008 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00009 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00010 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00011 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00012 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00013 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00014 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00015 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00016 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00017 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00018 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00019 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00020 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00021 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00022 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00023 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00024 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00025 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00026 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00027 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00028 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00029 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00030 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00031 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00032 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00033 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00034 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00035 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00036 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00037 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00038 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00039 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00040 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00041 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00042 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00043 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00044 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00045 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00046 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00047 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00048 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00049 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.ASSEMBLY300x250HAND_00050 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.Ofc17_Owen_005 = function() {
	this.spriteSheet = ss["Office365Consumer_1d_300x250_atlas_"];
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("ABNA/YgaAagnAIghgOYgigOgWghAAgkYAAglAXghAigNYAigNAnAJAZAbIgWAUYgRgSgagGgWAJYgXAJgPAWAAAYYAAAYAOAWAXAKYAWAJAagFARgSg");
	this.shape.setTransform(1.3,0.1,0.877,0.877,135,0,0,1.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgmgTIBNAAIgnAmg");
	this.shape_1.setTransform(-5.3,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-7.8,18.4,15.8);


(lib.sequenceHand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_8
	this.instance = new lib.ASSEMBLY300x250HAND_00050();
	this.instance.parent = this;
	this.instance.setTransform(-1,74);

	this.instance_1 = new lib.ASSEMBLY300x250HAND_00049();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,74);

	this.instance_2 = new lib.ASSEMBLY300x250HAND_00048();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1,74);

	this.instance_3 = new lib.ASSEMBLY300x250HAND_00047();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1,74);

	this.instance_4 = new lib.ASSEMBLY300x250HAND_00046();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1,74);

	this.instance_5 = new lib.ASSEMBLY300x250HAND_00045();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-1,74);

	this.instance_6 = new lib.ASSEMBLY300x250HAND_00044();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-1,74);

	this.instance_7 = new lib.ASSEMBLY300x250HAND_00043();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-1,74);

	this.instance_8 = new lib.ASSEMBLY300x250HAND_00042();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-1,74);

	this.instance_9 = new lib.ASSEMBLY300x250HAND_00041();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-1,74);

	this.instance_10 = new lib.ASSEMBLY300x250HAND_00040();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-1,74);

	this.instance_11 = new lib.ASSEMBLY300x250HAND_00039();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-1,74);

	this.instance_12 = new lib.ASSEMBLY300x250HAND_00038();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-1,74);

	this.instance_13 = new lib.ASSEMBLY300x250HAND_00037();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-1,74);

	this.instance_14 = new lib.ASSEMBLY300x250HAND_00036();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-1,74);

	this.instance_15 = new lib.ASSEMBLY300x250HAND_00035();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-1,74);

	this.instance_16 = new lib.ASSEMBLY300x250HAND_00034();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-1,74);

	this.instance_17 = new lib.ASSEMBLY300x250HAND_00033();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-1,74);

	this.instance_18 = new lib.ASSEMBLY300x250HAND_00032();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-1,74);

	this.instance_19 = new lib.ASSEMBLY300x250HAND_00031();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-1,74);

	this.instance_20 = new lib.ASSEMBLY300x250HAND_00030();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-1,74);

	this.instance_21 = new lib.ASSEMBLY300x250HAND_00029();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-1,74);

	this.instance_22 = new lib.ASSEMBLY300x250HAND_00028();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-1,74);

	this.instance_23 = new lib.ASSEMBLY300x250HAND_00027();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-1,74);

	this.instance_24 = new lib.ASSEMBLY300x250HAND_00026();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-1,74);

	this.instance_25 = new lib.ASSEMBLY300x250HAND_00025();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-1,74);

	this.instance_26 = new lib.ASSEMBLY300x250HAND_00024();
	this.instance_26.parent = this;
	this.instance_26.setTransform(-1,74);

	this.instance_27 = new lib.ASSEMBLY300x250HAND_00023();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-1,74);

	this.instance_28 = new lib.ASSEMBLY300x250HAND_00022();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-1,74);

	this.instance_29 = new lib.ASSEMBLY300x250HAND_00021();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-1,74);

	this.instance_30 = new lib.ASSEMBLY300x250HAND_00020();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-1,74);

	this.instance_31 = new lib.ASSEMBLY300x250HAND_00019();
	this.instance_31.parent = this;
	this.instance_31.setTransform(-1,74);

	this.instance_32 = new lib.ASSEMBLY300x250HAND_00018();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-1,74);

	this.instance_33 = new lib.ASSEMBLY300x250HAND_00017();
	this.instance_33.parent = this;
	this.instance_33.setTransform(-1,74);

	this.instance_34 = new lib.ASSEMBLY300x250HAND_00016();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-1,74);

	this.instance_35 = new lib.ASSEMBLY300x250HAND_00015();
	this.instance_35.parent = this;
	this.instance_35.setTransform(-1,74);

	this.instance_36 = new lib.ASSEMBLY300x250HAND_00014();
	this.instance_36.parent = this;
	this.instance_36.setTransform(-1,74);

	this.instance_37 = new lib.ASSEMBLY300x250HAND_00013();
	this.instance_37.parent = this;
	this.instance_37.setTransform(-1,74);

	this.instance_38 = new lib.ASSEMBLY300x250HAND_00012();
	this.instance_38.parent = this;
	this.instance_38.setTransform(-1,74);

	this.instance_39 = new lib.ASSEMBLY300x250HAND_00011();
	this.instance_39.parent = this;
	this.instance_39.setTransform(-1,74);

	this.instance_40 = new lib.ASSEMBLY300x250HAND_00010();
	this.instance_40.parent = this;
	this.instance_40.setTransform(-1,74);

	this.instance_41 = new lib.ASSEMBLY300x250HAND_00009();
	this.instance_41.parent = this;
	this.instance_41.setTransform(-1,74);

	this.instance_42 = new lib.ASSEMBLY300x250HAND_00008();
	this.instance_42.parent = this;
	this.instance_42.setTransform(-1,74);

	this.instance_43 = new lib.ASSEMBLY300x250HAND_00007();
	this.instance_43.parent = this;
	this.instance_43.setTransform(-1,74);

	this.instance_44 = new lib.ASSEMBLY300x250HAND_00006();
	this.instance_44.parent = this;
	this.instance_44.setTransform(-1,74);

	this.instance_45 = new lib.ASSEMBLY300x250HAND_00005();
	this.instance_45.parent = this;
	this.instance_45.setTransform(-1,74);

	this.instance_46 = new lib.ASSEMBLY300x250HAND_00004();
	this.instance_46.parent = this;
	this.instance_46.setTransform(-1,74);

	this.instance_47 = new lib.ASSEMBLY300x250HAND_00003();
	this.instance_47.parent = this;
	this.instance_47.setTransform(-1,74);

	this.instance_48 = new lib.ASSEMBLY300x250HAND_00002();
	this.instance_48.parent = this;
	this.instance_48.setTransform(-1,74);

	this.instance_49 = new lib.ASSEMBLY300x250HAND_00001();
	this.instance_49.parent = this;
	this.instance_49.setTransform(-1,74);

	this.instance_50 = new lib.ASSEMBLY300x250HAND_00000();
	this.instance_50.parent = this;
	this.instance_50.setTransform(-1,74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_22}]},3).to({state:[{t:this.instance_23}]},3).to({state:[{t:this.instance_24}]},3).to({state:[{t:this.instance_25}]},3).to({state:[{t:this.instance_26}]},3).to({state:[{t:this.instance_27}]},3).to({state:[{t:this.instance_28}]},3).to({state:[{t:this.instance_29}]},3).to({state:[{t:this.instance_30}]},3).to({state:[{t:this.instance_31}]},3).to({state:[{t:this.instance_32}]},3).to({state:[{t:this.instance_33}]},3).to({state:[{t:this.instance_34}]},3).to({state:[{t:this.instance_35}]},3).to({state:[{t:this.instance_36}]},3).to({state:[{t:this.instance_37}]},3).to({state:[{t:this.instance_38}]},3).to({state:[{t:this.instance_39}]},3).to({state:[{t:this.instance_40}]},3).to({state:[{t:this.instance_41}]},3).to({state:[{t:this.instance_42}]},3).to({state:[{t:this.instance_43}]},3).to({state:[{t:this.instance_44}]},3).to({state:[{t:this.instance_45}]},3).to({state:[{t:this.instance_46}]},3).to({state:[{t:this.instance_47}]},3).to({state:[{t:this.instance_48}]},3).to({state:[{t:this.instance_49}]},3).to({state:[{t:this.instance_50}]},3).to({state:[{t:this.instance_49}]},3).to({state:[{t:this.instance_48}]},3).to({state:[{t:this.instance_47}]},3).to({state:[{t:this.instance_46}]},3).to({state:[{t:this.instance_45}]},3).to({state:[{t:this.instance_44}]},3).to({state:[{t:this.instance_43}]},3).to({state:[{t:this.instance_42}]},3).to({state:[{t:this.instance_41}]},3).to({state:[{t:this.instance_40}]},3).to({state:[{t:this.instance_39}]},3).to({state:[{t:this.instance_38}]},3).to({state:[{t:this.instance_37}]},3).to({state:[{t:this.instance_36}]},3).to({state:[{t:this.instance_35}]},3).to({state:[{t:this.instance_34}]},3).to({state:[{t:this.instance_33}]},3).to({state:[{t:this.instance_32}]},3).to({state:[{t:this.instance_31}]},3).to({state:[{t:this.instance_30}]},3).to({state:[{t:this.instance_29}]},3).to({state:[{t:this.instance_28}]},3).to({state:[{t:this.instance_27}]},3).to({state:[{t:this.instance_26}]},3).to({state:[{t:this.instance_25}]},3).to({state:[{t:this.instance_24}]},3).to({state:[{t:this.instance_23}]},3).to({state:[{t:this.instance_22}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance}]},3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,74,22,23);


(lib.sequenceArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ASSEMBLY300x250ARM_00000();
	this.instance.parent = this;
	this.instance.setTransform(81,0);

	this.instance_1 = new lib.ASSEMBLY300x250ARM_00001();
	this.instance_1.parent = this;
	this.instance_1.setTransform(81,0);

	this.instance_2 = new lib.ASSEMBLY300x250ARM_00002();
	this.instance_2.parent = this;
	this.instance_2.setTransform(81,0);

	this.instance_3 = new lib.ASSEMBLY300x250ARM_00003();
	this.instance_3.parent = this;
	this.instance_3.setTransform(81,0);

	this.instance_4 = new lib.ASSEMBLY300x250ARM_00004();
	this.instance_4.parent = this;
	this.instance_4.setTransform(81,0);

	this.instance_5 = new lib.ASSEMBLY300x250ARM_00005();
	this.instance_5.parent = this;
	this.instance_5.setTransform(81,0);

	this.instance_6 = new lib.ASSEMBLY300x250ARM_00006();
	this.instance_6.parent = this;
	this.instance_6.setTransform(81,0);

	this.instance_7 = new lib.ASSEMBLY300x250ARM_00007();
	this.instance_7.parent = this;
	this.instance_7.setTransform(81,0);

	this.instance_8 = new lib.ASSEMBLY300x250ARM_00008();
	this.instance_8.parent = this;
	this.instance_8.setTransform(81,0);

	this.instance_9 = new lib.ASSEMBLY300x250ARM_00009();
	this.instance_9.parent = this;
	this.instance_9.setTransform(81,0);

	this.instance_10 = new lib.ASSEMBLY300x250ARM_00010();
	this.instance_10.parent = this;
	this.instance_10.setTransform(81,0);

	this.instance_11 = new lib.ASSEMBLY300x250ARM_00011();
	this.instance_11.parent = this;
	this.instance_11.setTransform(81,0);

	this.instance_12 = new lib.ASSEMBLY300x250ARM_00012();
	this.instance_12.parent = this;
	this.instance_12.setTransform(81,0);

	this.instance_13 = new lib.ASSEMBLY300x250ARM_00013();
	this.instance_13.parent = this;
	this.instance_13.setTransform(81,0);

	this.instance_14 = new lib.ASSEMBLY300x250ARM_00014();
	this.instance_14.parent = this;
	this.instance_14.setTransform(81,0);

	this.instance_15 = new lib.ASSEMBLY300x250ARM_00015();
	this.instance_15.parent = this;
	this.instance_15.setTransform(81,0);

	this.instance_16 = new lib.ASSEMBLY300x250ARM_00016();
	this.instance_16.parent = this;
	this.instance_16.setTransform(81,0);

	this.instance_17 = new lib.ASSEMBLY300x250ARM_00017();
	this.instance_17.parent = this;
	this.instance_17.setTransform(81,0);

	this.instance_18 = new lib.ASSEMBLY300x250ARM_00018();
	this.instance_18.parent = this;
	this.instance_18.setTransform(81,0);

	this.instance_19 = new lib.ASSEMBLY300x250ARM_00019();
	this.instance_19.parent = this;
	this.instance_19.setTransform(81,0);

	this.instance_20 = new lib.ASSEMBLY300x250ARM_00020();
	this.instance_20.parent = this;
	this.instance_20.setTransform(81,0);

	this.instance_21 = new lib.ASSEMBLY300x250ARM_00021();
	this.instance_21.parent = this;
	this.instance_21.setTransform(81,0);

	this.instance_22 = new lib.ASSEMBLY300x250ARM_00022();
	this.instance_22.parent = this;
	this.instance_22.setTransform(81,0);

	this.instance_23 = new lib.ASSEMBLY300x250ARM_00023();
	this.instance_23.parent = this;
	this.instance_23.setTransform(81,0);

	this.instance_24 = new lib.ASSEMBLY300x250ARM_00024();
	this.instance_24.parent = this;
	this.instance_24.setTransform(81,0);

	this.instance_25 = new lib.ASSEMBLY300x250ARM_00025();
	this.instance_25.parent = this;
	this.instance_25.setTransform(81,0);

	this.instance_26 = new lib.ASSEMBLY300x250ARM_00026();
	this.instance_26.parent = this;
	this.instance_26.setTransform(81,0);

	this.instance_27 = new lib.ASSEMBLY300x250ARM_00027();
	this.instance_27.parent = this;
	this.instance_27.setTransform(81,0);

	this.instance_28 = new lib.ASSEMBLY300x250ARM_00028();
	this.instance_28.parent = this;
	this.instance_28.setTransform(81,0);

	this.instance_29 = new lib.ASSEMBLY300x250ARM_00029();
	this.instance_29.parent = this;
	this.instance_29.setTransform(81,0);

	this.instance_30 = new lib.ASSEMBLY300x250ARM_00030();
	this.instance_30.parent = this;
	this.instance_30.setTransform(81,0);

	this.instance_31 = new lib.ASSEMBLY300x250ARM_00031();
	this.instance_31.parent = this;
	this.instance_31.setTransform(81,0);

	this.instance_32 = new lib.ASSEMBLY300x250ARM_00032();
	this.instance_32.parent = this;
	this.instance_32.setTransform(81,0);

	this.instance_33 = new lib.ASSEMBLY300x250ARM_00033();
	this.instance_33.parent = this;
	this.instance_33.setTransform(81,0);

	this.instance_34 = new lib.ASSEMBLY300x250ARM_00034();
	this.instance_34.parent = this;
	this.instance_34.setTransform(81,0);

	this.instance_35 = new lib.ASSEMBLY300x250ARM_00035();
	this.instance_35.parent = this;
	this.instance_35.setTransform(81,0);

	this.instance_36 = new lib.ASSEMBLY300x250ARM_00036();
	this.instance_36.parent = this;
	this.instance_36.setTransform(81,0);

	this.instance_37 = new lib.ASSEMBLY300x250ARM_00037();
	this.instance_37.parent = this;
	this.instance_37.setTransform(81,0);

	this.instance_38 = new lib.ASSEMBLY300x250ARM_00038();
	this.instance_38.parent = this;
	this.instance_38.setTransform(81,0);

	this.instance_39 = new lib.ASSEMBLY300x250ARM_00039();
	this.instance_39.parent = this;
	this.instance_39.setTransform(81,0);

	this.instance_40 = new lib.ASSEMBLY300x250ARM_00040();
	this.instance_40.parent = this;
	this.instance_40.setTransform(81,0);

	this.instance_41 = new lib.ASSEMBLY300x250ARM_00041();
	this.instance_41.parent = this;
	this.instance_41.setTransform(81,0);

	this.instance_42 = new lib.ASSEMBLY300x250ARM_00042();
	this.instance_42.parent = this;
	this.instance_42.setTransform(81,0);

	this.instance_43 = new lib.ASSEMBLY300x250ARM_00043();
	this.instance_43.parent = this;
	this.instance_43.setTransform(81,0);

	this.instance_44 = new lib.ASSEMBLY300x250ARM_00044();
	this.instance_44.parent = this;
	this.instance_44.setTransform(81,0);

	this.instance_45 = new lib.ASSEMBLY300x250ARM_00045();
	this.instance_45.parent = this;
	this.instance_45.setTransform(81,0);

	this.instance_46 = new lib.ASSEMBLY300x250ARM_00046();
	this.instance_46.parent = this;
	this.instance_46.setTransform(81,0);

	this.instance_47 = new lib.ASSEMBLY300x250ARM_00047();
	this.instance_47.parent = this;
	this.instance_47.setTransform(81,0);

	this.instance_48 = new lib.ASSEMBLY300x250ARM_00048();
	this.instance_48.parent = this;
	this.instance_48.setTransform(81,0);

	this.instance_49 = new lib.ASSEMBLY300x250ARM_00049();
	this.instance_49.parent = this;
	this.instance_49.setTransform(81,0);

	this.instance_50 = new lib.ASSEMBLY300x250ARM_00050();
	this.instance_50.parent = this;
	this.instance_50.setTransform(81,0);

	this.instance_51 = new lib.ASSEMBLY300x250ARM_00051();
	this.instance_51.parent = this;
	this.instance_51.setTransform(81,0);

	this.instance_52 = new lib.ASSEMBLY300x250ARM_00052();
	this.instance_52.parent = this;
	this.instance_52.setTransform(81,0);

	this.instance_53 = new lib.ASSEMBLY300x250ARM_00053();
	this.instance_53.parent = this;
	this.instance_53.setTransform(81,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_22}]},3).to({state:[{t:this.instance_23}]},3).to({state:[{t:this.instance_24}]},3).to({state:[{t:this.instance_25}]},3).to({state:[{t:this.instance_26}]},3).to({state:[{t:this.instance_27}]},3).to({state:[{t:this.instance_28}]},3).to({state:[{t:this.instance_29}]},3).to({state:[{t:this.instance_30}]},3).to({state:[{t:this.instance_31}]},3).to({state:[{t:this.instance_32}]},3).to({state:[{t:this.instance_33}]},3).to({state:[{t:this.instance_34}]},3).to({state:[{t:this.instance_35}]},3).to({state:[{t:this.instance_36}]},3).to({state:[{t:this.instance_37}]},3).to({state:[{t:this.instance_38}]},3).to({state:[{t:this.instance_39}]},3).to({state:[{t:this.instance_40}]},3).to({state:[{t:this.instance_41}]},3).to({state:[{t:this.instance_42}]},3).to({state:[{t:this.instance_43}]},3).to({state:[{t:this.instance_44}]},3).to({state:[{t:this.instance_45}]},3).to({state:[{t:this.instance_46}]},3).to({state:[{t:this.instance_47}]},3).to({state:[{t:this.instance_48}]},3).to({state:[{t:this.instance_49}]},3).to({state:[{t:this.instance_50}]},3).to({state:[{t:this.instance_51}]},3).to({state:[{t:this.instance_52}]},3).to({state:[{t:this.instance_53}]},3).to({state:[{t:this.instance_52}]},3).to({state:[{t:this.instance_51}]},3).to({state:[{t:this.instance_50}]},3).to({state:[{t:this.instance_49}]},3).to({state:[{t:this.instance_48}]},3).to({state:[{t:this.instance_47}]},3).to({state:[{t:this.instance_46}]},3).to({state:[{t:this.instance_45}]},3).to({state:[{t:this.instance_44}]},3).to({state:[{t:this.instance_43}]},3).to({state:[{t:this.instance_42}]},3).to({state:[{t:this.instance_41}]},3).to({state:[{t:this.instance_40}]},3).to({state:[{t:this.instance_39}]},3).to({state:[{t:this.instance_38}]},3).to({state:[{t:this.instance_37}]},3).to({state:[{t:this.instance_36}]},3).to({state:[{t:this.instance_35}]},3).to({state:[{t:this.instance_34}]},3).to({state:[{t:this.instance_33}]},3).to({state:[{t:this.instance_32}]},3).to({state:[{t:this.instance_31}]},3).to({state:[{t:this.instance_30}]},3).to({state:[{t:this.instance_29}]},3).to({state:[{t:this.instance_28}]},3).to({state:[{t:this.instance_27}]},3).to({state:[{t:this.instance_26}]},3).to({state:[{t:this.instance_25}]},3).to({state:[{t:this.instance_24}]},3).to({state:[{t:this.instance_23}]},3).to({state:[{t:this.instance_22}]},3).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_20}]},3).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_17}]},3).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_15}]},3).to({state:[{t:this.instance_14}]},3).to({state:[{t:this.instance_13}]},3).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(81,0,109,36);


(lib.cta_arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBIIA4g1IiBAAIAAgkICBAAIg5g2IAuAAIBNBHIhNBIg");
	this.shape.setTransform(0.2,0,0.576,0.576);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_arrow, new cjs.Rectangle(-5.4,-4.1,11.3,8.4), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.cta, null, null);


(lib.mc_pc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Ofc17_Owen_005();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_pc, new cjs.Rectangle(0,0,450,344), null);


(lib.hit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{out:0,over:1,down:2,hit:3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.MSFT_Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEBA00").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape.setTransform(-34.4,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#03A5EA").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_1.setTransform(-45.7,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7CBB01").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_2.setTransform(-34.4,-4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F25022").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_3.setTransform(-45.7,-4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7C7E80").s().p("AANApIAAgvIggAAIAABKIgVAAIAAhKIgQAAIAAgSIAQAAIAAgMQAAgJADgJQAFgIAHgDQAIgEAKgBQAGAAAFACIABAAIAAATIgBAAQgFgCgEgBQgGABgEAEQgDADgBAJIAAALIAgAAIAAgUIABgBIAUgGIABAAIAAAbIAWAAIAAASIgWAAIAAArQAAAJADADQADADAHABIAIgDIABgBIAAASIAAABIgHACIgJABQgcgBAAgdg");
	this.shape_4.setTransform(44.4,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7C7E80").s().p("AgiAjQgMgMAAgWQAAgXAMgMQANgOAWAAQAWAAAMANQAMAMAAAXQABAVgNAOQgNAOgWAAQgVgBgNgNgAgRgWQgHAIAAAPQAAAOAHAHQAGAJALAAQANAAAGgJQAGgHAAgPQAAgNgGgJQgHgHgMgBQgLAAgGAIg");
	this.shape_5.setTransform(33.8,3.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7C7E80").s().p("AgSAvIgMgEIAAgVIABAAQAFAEAHADQAGACAGAAQAOAAAAgJQAAgDgCgDIgFgDIgKgGQgJgDgEgEQgEgCgDgFQgCgFAAgHQAAgNAKgHQAKgJAPAAIAKABIAKAEIABAAIAAAUIgBgBQgEgDgGgCIgLgBQgGAAgCACQgEACAAAFQAAAEADADQACADAKAEQANAGAFAFQAGAGAAAKQAAAMgKAIQgKAJgQAAIgNgCg");
	this.shape_6.setTransform(25,3.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7C7E80").s().p("AgiAjQgMgMAAgWQAAgXANgMQAMgOAWAAQAWAAAMANQAMANAAAWQABAVgNAOQgOAOgVAAQgVgBgNgNgAgRgWQgHAIAAAPQAAAOAHAHQAGAJAMAAQALAAAHgJQAGgIAAgOQAAgNgHgJQgGgHgMgBQgLAAgGAIg");
	this.shape_7.setTransform(16.1,3.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7C7E80").s().p("AgaAvIAAhcIAWAAIAAARIAAAAQADgIAEgEQAHgGAIAAQAFAAADABIABAAIAAAXIgBgBIgFgCIgHgBQgIAAgGAHQgEAJAAAKIAAAvg");
	this.shape_8.setTransform(8.5,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7C7E80").s().p("AgNAqQgLgFgFgLQgGgKAAgNQAAgOAGgMQAGgMALgGQALgGAPgBIAMACIAKADIAAABIAAAUIgBAAQgKgIgLAAQgMAAgHAJQgIAIAAAOQAAANAIAIQAGAJANAAQAFAAAGgCIAKgGIABgBIAAAUIAAAAQgLAHgPAAQgNAAgKgHg");
	this.shape_9.setTransform(0.6,3.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7C7E80").s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgDAFgBQAGABAEADQADADAAAFQAAAFgEAEQgDADgGABQgFgBgDgDg");
	this.shape_10.setTransform(-5.6,-4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7C7E80").s().p("AgKAuIAAhbIAVAAIAABbg");
	this.shape_11.setTransform(-5.6,3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7C7E80").s().p("AAwBAIABhoIgBAAIgCALIgnBdIgOAAIgmhcIgDgMIgBAAIABBoIgVAAIAAh/IAgAAIAlBhIAohhIAeAAIAAB/g");
	this.shape_12.setTransform(-15.8,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MSFT_Logo, new cjs.Rectangle(-50.8,-9.3,100.9,21.5), null);


(lib.cta_glare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.478)","rgba(255,255,255,0)"],[0,0.51,1],-125.2,-0.1,-58.4,-0.1).s().p("Ao9CXIAAktIR6AAIAAEtg");
	this.shape.setTransform(57.4,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.478)","rgba(255,255,255,0)"],[0,0.51,1],58.5,-0.9,125.3,-0.9).s().p("Ao9CXIAAktIR6AAIAAEtg");
	this.shape_1.setTransform(57.4,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},7).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.circle_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.circle_bg, null, null);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBIIA4g1IiBAAIAAgkICBAAIg5g2IAuAAIBNBHIhNBIg");
	this.shape.setTransform(5.6,4.2,0.576,0.576);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(0,0,11.3,8.4), null);


(lib.replay_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"out":0,"over":1,"down":2,"hit":3});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 6
	this.instance = new lib.Tween7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-18.1,16.7,1.754,1.754);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-18.6,y:16.6,alpha:1},1).to({_off:true},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,2.9,32.2,27.7);


(lib.logos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.MSFT_Logo();
	this.instance.parent = this;
	this.instance.setTransform(6.5,8.3,1.827,1.827,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// white bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgrfA5OMAAAhybMBW/AAAMAAABybg");
	this.shape.setTransform(132,301.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logos, new cjs.Rectangle(-146.4,-64.4,556.7,732.4), null);


(lib.cta_arrowmo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_52 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(52).call(this.frame_52).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhIBJQgegfAAgqQAAgpAegfQAfgeApAAQAqAAAfAeQAeAfAAApQAAAqgeAfQgfAegqAAQgpAAgfgeg");

	// Layer 4
	this.instance = new lib.arrow();
	this.instance.parent = this;
	this.instance.setTransform(-18.1,0.1,1,1,0,0,0,5.6,4.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({x:2.2},8,cjs.Ease.get(1)).wait(1).to({x:2},0).wait(1).to({x:1.4},0).wait(1).to({x:0.4},0).wait(1).to({x:-0.4},0).wait(1).to({x:-0.9},0).wait(1).to({x:-1},0).wait(1).to({x:-0.9},0).wait(1).to({x:-0.6},0).wait(1).to({x:-0.1},0).wait(1).to({x:0.3},0).wait(1).to({x:0.5},0).wait(1).to({x:0.6},0).wait(2).to({x:0.4},0).wait(1).to({x:0.3},0).wait(1).to({x:0.1},0).wait(1).to({x:0},0).wait(3).to({x:0.1},0).wait(2).to({x:0.2},0).wait(11));

	// Layer 2
	this.instance_1 = new lib.arrow();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.2,0.1,1,1,0,0,0,5.6,4.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-1.1},8,cjs.Ease.get(1)).wait(2).to({x:19.9},8,cjs.Ease.get(-1)).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.4,-4.1,11.3,8.4);


(lib.mc_pc_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_658 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(658).call(this.frame_658).wait(2));

	// Layer_6
	this.instance = new lib.sequenceHand("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(246.4,106.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(660));

	// Layer_5
	this.instance_1 = new lib.sequenceArm("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(164,203.2,1.01,1.01,0,0,0,135.6,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(660));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ay4fqMAAAg6SIa6gDICUdFIH7iHQAXgGAKADQAKAEgEAOIhNDfQhKDRgIAUQgIAUgIAIQgJAKgPAEIjoA3IABAeIgDARIgEAaQgDAOgFAKQgDAIgLAQIgRAZIgJAJIgEAGQgCADAAAGIgDAlIABAGIABABIAAAKIABAAIAwPHIDEgEIABAJIAAAMIANDrgAKD/iQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAgBIABgBIABgBIABAAIAAACIgBABIgDAEg");
	mask.setTransform(214.2,160);

	// Layer 3
	this.instance_2 = new lib.Ofc17_Owen_005();
	this.instance_2.parent = this;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(660));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(93.3,0,241.8,344);


(lib.arrowMain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.arrow = new lib.cta_arrow();
	this.arrow.parent = this;
	this.arrow.setTransform(10.8,10.8);

	this.arrow_1 = new lib.cta_arrowmo();
	this.arrow_1.parent = this;
	this.arrow_1.setTransform(10.8,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arrow}]}).to({state:[{t:this.arrow_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.3,6.6,11.3,8.4);


(lib.CTA_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.arrow = new lib.arrowMain();
	this.arrow.parent = this;
	this.arrow.setTransform(70.7,0.6,0.92,0.92,0,0,0,10.9,10.6);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

	// CTA_text
	this.cta_glare = new lib.cta_glare();
	this.cta_glare.parent = this;
	this.cta_glare.setTransform(0.1,0.1,1,1,0,0,0,57.4,15.1);

	this.timeline.addTween(cjs.Tween.get(this.cta_glare).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D83B01").s().p("Ar5CXIAAktIXzAAIAAEtg");
	this.shape.setTransform(14,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CTA_btn, new cjs.Rectangle(-62.1,-14.9,152.3,30.3), null);


(lib.mainMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// replay
	this.replay_btn = new lib.replay_btn();
	this.replay_btn.parent = this;
	this.replay_btn.setTransform(283.6,4.3,0.348,0.348,0,0,180,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.replay_btn).wait(1));

	// hit
	this.hit = new lib.hit();
	this.hit.parent = this;
	this.hit.setTransform(1.8,1.4,0.496,0.496,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(1));

	// bgImageOverlap
	this.device_3 = new lib.mc_pc_2();
	this.device_3.parent = this;
	this.device_3.setTransform(-18.5,-3.4,0.8,0.8,0,0,0,-2.5,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.device_3).wait(1));

	// CTA text
	this.txtCta = new lib.cta();
	this.txtCta.parent = this;
	this.txtCta.setTransform(220.7,225.2,0.496,0.496,0,0,0,2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.txtCta).wait(1));

	// circle Bonus
	this.bg_circle = new lib.circle_bg();
	this.bg_circle.parent = this;
	this.bg_circle.setTransform(158.4,183.2);

	this.timeline.addTween(cjs.Tween.get(this.bg_circle).wait(1));

	// CTA
	this.cta = new lib.CTA_btn();
	this.cta.parent = this;
	this.cta.setTransform(217.4,223.2,0.943,0.943,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// MSFT Logo
	this.msft_logo = new lib.logos();
	this.msft_logo.parent = this;
	this.msft_logo.setTransform(188.4,20.4,0.348,0.348,0,0,0,0.7,2.6);

	this.timeline.addTween(cjs.Tween.get(this.msft_logo).wait(1));

	// bgImage
	this.device_2 = new lib.mc_pc();
	this.device_2.parent = this;
	this.device_2.setTransform(-17,-2.2,0.8,0.8,0,0,0,-0.7,0.7);

	this.timeline.addTween(cjs.Tween.get(this.device_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.mainMC, new cjs.Rectangle(-16.5,-36.9,360.1,324.2), null);


// stage content:
(lib.Office365Consumer_1d_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {		var mc = exportRoot.mainMC	;
		this.initBanner = function (data) {

			Object.keys = function(obj) {
				var keys = [];

				for (var i in obj) {
				  if (obj.hasOwnProperty(i)) {
					keys.push(i);
				  }
				}
				return keys
			}
			var keys = Object.keys(data)
			
				for (var i in keys) {
					var id = keys[i].substr(0, 4);
						if (id == "head") {
							exportRoot['' + keys[i]] = new Array()
							exportRoot.fillHead(data[keys[i]], exportRoot['' + keys[i]])
						} else if (id == "smal" && data[keys[i]].length > 1) {
							exportRoot['' + keys[i]] = new Array()
							exportRoot.fillHead(data[keys[i]], exportRoot['' + keys[i]])
						} else if (id == "cost" && data[keys[i]].length > 1) {
							exportRoot.fillPriceMc(data[keys[i]])
						} else if (id == "CTA" && data[keys[i]].length > 1) {
							exportRoot.fillCta(data[keys[i]])
						} else if (id == "CTAa") {
							mc.cta.arrow.visible = data[keys[i]][0]
							mc.cta.arrow.x += data[keys[i]][1]
							mc.cta.arrow.y += data[keys[i]][2]
						}
				}
		}
		
		
		this.fillHead = function (txtDetails, aVar) {
			var text = txtDetails[0]
			var size = txtDetails[1]
			var xOffset = txtDetails[2]
			var yOffset = txtDetails[3]
			var lineSpacing = txtDetails[4]
			var lineWidth = txtDetails[5]
			var align = txtDetails[6]
		
			var aSentenceLine = this.getTheSentences(text, size, xOffset, yOffset, lineSpacing, lineWidth, align)
		
			for (var i = 0; i < aSentenceLine.length; i++) {
				var mc = new createjs.MovieClip();
				mc.y = (i * parseInt(lineSpacing))
				mc.y += yOffset
				mc.y += parseInt(size)
				mc.x += xOffset
		
				var txtWidth = 0
				for (var j = 0; j < aSentenceLine[i].length; j++) {
					var text = new createjs.Text(aSentenceLine[i][j].txt, "normal " + size + " Segoe Pro", aSentenceLine[i][j].color);
					text.textAlign = "Left"
					text.x = txtWidth
					text.textBaseline = "alphabetic"
					txtWidth += (text.getTransformedBounds().width)
					mc.addChild(text)
				}
				if (align == "center") mc.x = mc.x - mc.getTransformedBounds().width / 2
				if (align == "right") mc.x = mc.x - mc.getTransformedBounds().width
				stage.addChild(mc);
				aVar.push(mc)
			}
		}
		
		this.fillPriceMc = function (txtDetails) {
		
			var text = txtDetails[0]
			var size = txtDetails[1]
			var xOffset = txtDetails[2]
			var yOffset = txtDetails[3]
			var lineSpacing = txtDetails[4]
			var lineWidth = txtDetails[5]
			var align = txtDetails[6]
		
			var aSentenceLine = this.getTheSentences(text, size, xOffset, yOffset, lineSpacing, lineWidth, align)
		
			for (var i = 0; i < aSentenceLine.length; i++) {
				var mc = new createjs.MovieClip();
				mc.y = (i * parseInt(lineSpacing))
				mc.y += yOffset
				mc.y += (parseInt(size) * 0.90)
				mc.x += xOffset
		
				var txtWidth = 0
				for (var j = 0; j < aSentenceLine[i].length; j++) {
					var text = new createjs.Text(aSentenceLine[i][j].txt, "normal " + size + " Segoe Pro", aSentenceLine[i][j].color);
					text.textAlign = "Left"
					text.x = txtWidth
					text.textBaseline = "alphabetic"
					txtWidth += (text.getTransformedBounds().width)
					mc.addChild(text)
				}
				if (align == "center") mc.x = mc.x - mc.getTransformedBounds().width / 2
				if (align == "right") mc.x = mc.x - mc.getTransformedBounds().width
		
				this.mainMC.bg_circle.addChild(mc);
			}
		}
		
		
		this.fillCta = function (txtDetails) {
			var text = txtDetails[0]
			var size = txtDetails[1]
			var xOffset = txtDetails[2]
			var yOffset = txtDetails[3]
			var lineSpacing = txtDetails[4]
			var lineWidth = txtDetails[5]
			var align = txtDetails[6]
		
		
			var aSentenceLine = this.getTheSentences(text, size, xOffset, yOffset, lineSpacing, lineWidth, align)
		
			for (var i = 0; i < aSentenceLine.length; i++) {
				var mc = new createjs.MovieClip();
				mc.y = (i * parseInt(lineSpacing))
				mc.y += yOffset
				mc.y += (parseInt(size) * 0.90)
				mc.x += xOffset
		
				var txtWidth = 0
				for (var j = 0; j < aSentenceLine[i].length; j++) {
					var text = new createjs.Text(aSentenceLine[i][j].txt, "normal " + size + " Segoe Pro", aSentenceLine[i][j].color);
					text.textAlign = "Left"
					text.x = txtWidth
					text.textBaseline = "alphabetic"
					txtWidth += (text.getTransformedBounds().width)
					mc.addChild(text)
				}
				if (align == "center") mc.x = mc.x - mc.getTransformedBounds().width / 2
				if (align == "right") mc.x = mc.x - mc.getTransformedBounds().width
				mc.y = mc.y - (mc.getTransformedBounds().height / 2)
				this.mainMC.txtCta.addChild(mc);
			}
		}
		
		this.getTheSentences = function (text, size, xOffset, yOffset, lineSpacing, lineWidth, align) {
			var sentences = new Array()
			var aSentenceLine = new Array()
			var aStr = text.substr(0);
			sentences = aStr.split("|");
			var lastColor = "#000000"
			// Figure out the setence lines
		
			for (var i = 0; i < sentences.length; i++) {
				var aS = sentences[i].substr(0);
				var aSplit = new Array()
				aSplit = aS.split("<");
				aSplit = aSplit.filter(Boolean)
				var wholeSentence = new Array()
		
				for (var j = 0; j < aSplit.length; j++) {
		
					var checkColor = aSplit[j].indexOf("#")
					var color = (checkColor == -1) ? lastColor : aSplit[j].substr(0, 7);
					lastColor = color
					var txt = (checkColor == -1) ? aSplit[j].substr(0) : aSplit[j].substr(8);
					var subSentence = {
						color: color,
						txt: txt
					};
					wholeSentence.push(subSentence)
				}
				aSentenceLine.push(wholeSentence)
			}
			return aSentenceLine
		}
		
		exportRoot.tlFH = new TimelineLite();
		exportRoot.tlSH = new TimelineLite();
		
		
		var tl1 = new TimelineLite();
		var mc = exportRoot.mainMC
		
		this.runBanner = function() {
			
			for (var i = 0; i < exportRoot.headline1.length; i++) {
				exportRoot.tlFH.from(exportRoot.headline1[i], 0.6, {	x: "+=300",	alpha: 0, ease:Power4.easeOut}, "-=0.4");
			}
			exportRoot.tlFH.stop()
			/*
			for (var i = 0; i < headline2.length; i++) {
				exportRoot.tlSH.from(headline2[i], 0.6, {	x: "+=300",	alpha: 0,ease: Back.easeOut.config(0.5)}, "-=0.4");
			}
			exportRoot.tlSH.stop()
			*/
			beginAnimation()
		}
		mc.msft_logo.x +=700
		mc.device_2.scaleX = 0.8; mc.device_2.scaleY = 0.8;mc.device_2.y -=0
		mc.device_3.scaleX = 0.8; mc.device_3.scaleY = 0.8; mc.device_3.y -=0
		mc.bg_circle.x += 300; mc.bg_circle.alpha = 0
		mc.txtCta.x += 300; mc.txtCta.alpha = 0
		mc.cta.x += 300; mc.cta.alpha = 0
		
		
		function beginAnimation() {
			
			TweenLite.delayedCall(1.5, function(){exportRoot.tlFH.play()})
			TweenLite.delayedCall(2, function(){exportRoot.tlSH.play()})
		
		    
			tl1.to(mc.msft_logo, 1.3, { x: "-=700",	 ease:Power2.easeOut}, "+1")
			tl1.to(mc.device_2, 1.0, { x: "-=104", y: "+=0", scaleX: 0.8, scaleY: 0.8,  ease:Power1.easeInOut}, "-=1.2")
			tl1.to(mc.device_3, 1.0, { x: "-=104", y: "+=0", scaleX: 0.8, scaleY: 0.8,  ease:Power1.easeInOut}, "-=1.2")
			tl1.to(mc.bg_circle, 0.7, { alpha: 1,	x: "-=300",	 ease:Power4.easeOut}, "+=0.5")
			
			tl1.to(mc.txtCta, 0.7, { alpha: 1,	x: "-=300",	 ease:Power4.easeOut}, "-=0.5");
			tl1.to(mc.cta, 0.7, {	alpha: 1,	x: "-=300",	 ease:Power4.easeOut}, "-=0.7");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mainMC
	this.mainMC = new lib.mainMC();
	this.mainMC.parent = this;
	this.mainMC.setTransform(0,0.1,1,1,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.mainMC).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(133.5,88.1,360.1,324.2);
// library properties:
lib.properties = {
	id: '90A26FE74B042E4A89CA750D1DA2DF1F',
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Office365Consumer_1d_300x250_atlas_.png", id:"Office365Consumer_1d_300x250_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['90A26FE74B042E4A89CA750D1DA2DF1F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;