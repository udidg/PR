(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,437,99);


(lib.pic = function() {
	this.initialize(img.pic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.takanon = function() {
	this.initialize(img.takanon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,14);


(lib.txt03 = function() {
	this.initialize(img.txt03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,609,56);


(lib.txt04 = function() {
	this.initialize(img.txt04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,193,27);


(lib.txt101 = function() {
	this.initialize(img.txt101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,147,57);


(lib.txt102 = function() {
	this.initialize(img.txt102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,49);


(lib.txt103 = function() {
	this.initialize(img.txt103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,56);


(lib.txt201 = function() {
	this.initialize(img.txt201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,56);


(lib.txt202 = function() {
	this.initialize(img.txt202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,134,56);


(lib.txt301 = function() {
	this.initialize(img.txt301);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,56);


(lib.txt302 = function() {
	this.initialize(img.txt302);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,49);// helper functions:

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


(lib.triange02copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003087").s().p("Eh81BOIMAQ4icPMDozAAAMgQ4CcPg");
	this.shape.setTransform(-4933.2,-977.7,4.108,4.108);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8215.2,-3031.5,8303.3,4107.6);


(lib.triange02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#239DDC").s().p("EoIeFFtMBGXqLZMPKmAAAMhGXKLZg");
	this.shape.setTransform(-5162.9,-937.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8494,-3022.3,8582.1,4169.1);


(lib.triange01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC9300").s().p("Eh81BOIMAQ4icPMDozAAAMgQ4CcPg");
	this.shape.setTransform(-2930.9,2050.2,4.1,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6207.1,0,6552.4,4100.4);


(lib.takanon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.takanon();
	this.instance.parent = this;
	this.instance.setTransform(-8,-3,2.738,2.738);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.takanon_1, new cjs.Rectangle(-8,-3,235.5,38.4), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE0061").s().p("Eh1cBeIMAAAi8PMDq4AAAMAAAC8Pg");
	this.shape.setTransform(751.7,602.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,1503.3,1204.8), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE0061").s().p("EhciBNRMAAAiahMC5FAAAMAAACahg");
	this.shape.setTransform(592.3,494.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,1184.6,988.9), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.txt04();
	this.instance.parent = this;
	this.instance.setTransform(-12,-49,3.961,3.961);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003087").s().p("EgzZALHIAA2NMBmzAAAIAAWNg");
	this.shape.setTransform(369.6,-0.6,1.361,1.361);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-78.1,-97.3,895.5,193.5), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,3.466,3.466);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,1514.6,343.1), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgyKAZ7MAAAgz1MDPYAAAMAAAAz1g");
	mask.setTransform(1006.2,90);

	// Layer 2
	this.instance = new lib.txt03();
	this.instance.parent = this;
	this.instance.setTransform(968,7,3.466,3.466);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EhdRATmMAAAgnLMC6jAAAMAAAAnLg");
	mask_1.setTransform(1540.3,-151.3);

	// Layer 1
	this.instance_1 = new lib.txt03();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-112,-220,3.466,3.466);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(943.3,-220,1069.1,421.1), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt103();
	this.instance.parent = this;
	this.instance.setTransform(-16,16,3.72,3.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-16,16,561.7,208.3), null);


(lib.Symbol3copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt302();
	this.instance.parent = this;
	this.instance.setTransform(74,40,3.681,3.681);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy2, new cjs.Rectangle(74,40,375.5,180.4), null);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt202();
	this.instance.parent = this;
	this.instance.setTransform(-10,12,3.72,3.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy, new cjs.Rectangle(-10,12,498.5,208.3), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt102();
	this.instance.parent = this;
	this.instance.setTransform(-123,40,3.72,3.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-123,40,569.2,182.3), null);


(lib.Symbol2copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt301();
	this.instance.parent = this;
	this.instance.setTransform(75,31,3.681,3.681);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy2, new cjs.Rectangle(75,31,485.9,206.1), null);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt201();
	this.instance.parent = this;
	this.instance.setTransform(360,0,3.72,3.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(360,0,238,208.3), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt101();
	this.instance.parent = this;
	this.instance.setTransform(0,0,3.72,3.72);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,546.8,212.1), null);


(lib.picfr01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pic();
	this.instance.parent = this;
	this.instance.setTransform(219,-100,8.577,8.577);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.picfr01, new cjs.Rectangle(219,-100,2573.2,5146.5), null);


(lib.bgblue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#239DDC").s().p("Eh0ZBOIMAAAicPMDozAAAMAAACcPg");
	this.shape.setTransform(745,500);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1490,1000);


(lib._05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// triangle01
	this.instance = new lib.triange01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(10029.1,357.4,1,1.187,0,0,0,44,301.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:175},10,cjs.Ease.get(1)).to({_off:true},81).wait(6));

	// triangle02
	this.instance_1 = new lib.triange02copy2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8647.7,919.8,1,1.187,180,0,0,44,301.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({x:875.5,y:924.5},8,cjs.Ease.get(1)).wait(71).to({startPosition:0},0).to({_off:true},8).wait(6));

	// Layer 3
	this.instance_2 = new lib.Symbol9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1608.6,2387,2.243,4.071,0,0,0,751.6,602.4);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},6,cjs.Ease.get(1)).to({alpha:0},7,cjs.Ease.get(-1)).to({_off:true},78).wait(6));

	// Layer 4
	this.instance_3 = new lib.takanon_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(884.8,4684.5,1.905,1.905,0,0,0,100.6,16.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(25).to({_off:false},0).to({x:587.9,alpha:1},8,cjs.Ease.get(1)).to({x:620.1},4,cjs.Ease.get(-1)).to({_off:true},54).wait(6));

	// Layer 8
	this.instance_4 = new lib.Symbol7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(2111.5,3220.8,1.655,1.655,0,0,0,227.1,33);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off:false},0).to({x:1171.3,alpha:1},9,cjs.Ease.get(1)).to({x:1253.9},5,cjs.Ease.get(-1)).to({_off:true},61).wait(6));

	// Layer 7
	this.instance_5 = new lib.Symbol6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1710.8,2317.8,1.187,1.187,0,0,0,405.6,92);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(11).to({_off:false},0).to({regX:405.5,x:1036.4,alpha:1},9,cjs.Ease.get(1)).to({regX:405.6,x:1095.7},5,cjs.Ease.get(-1)).to({_off:true},66).wait(6));

	// Layer 6
	this.instance_6 = new lib.Symbol5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(622.9,1789.7,1.773,1.773,0,0,0,436.7,41.6);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).to({x:-384,alpha:1},9,cjs.Ease.get(1)).to({x:-295.5},5,cjs.Ease.get(-1)).to({_off:true},72).wait(6));

	// Layer 2
	this.instance_7 = new lib.bgblue("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1312,2637.5,2.17,4.884,0,0,0,604.5,540);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(88).to({startPosition:0},0).to({_off:true},3).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,-65.6,10407.9,4949.8);


(lib._01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// triangle01
	this.instance = new lib.triange01("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(9827.4,380,1,1.198,0,0,0,44,301.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:384.4},11,cjs.Ease.get(1)).wait(62).to({x:9966.5},0).to({x:384.4},11,cjs.Ease.get(1)).wait(64).to({x:9966.5},0).to({x:384.4},11,cjs.Ease.get(1)).wait(59).to({startPosition:0},0).wait(8).to({startPosition:0},0).to({x:-1444.4},7,cjs.Ease.get(-1)).wait(1));

	// triangle02
	this.instance_1 = new lib.triange02("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2317.2,947.7,1,1.198,180,0,0,44,301);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({regY:301.1,x:905.5,y:952.3},11,cjs.Ease.get(1)).to({_off:true},58).wait(4).to({_off:false,x:-8706.6,y:915.1},0).to({x:905.5,y:952.3},11,cjs.Ease.get(1)).to({_off:true},60).wait(4).to({_off:false,x:-8706.6,y:915.1},0).to({x:905.5,y:952.3},11,cjs.Ease.get(1)).wait(55).to({startPosition:0},0).to({x:-1563.9,y:949.9},8,cjs.Ease.get(-1)).to({x:-8918.1},7,cjs.Ease.get(-1)).wait(1));

	// Layer 3
	this.instance_2 = new lib.Symbol4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(4248.7,1124.2,2.81,2.81,0,0,0,284.6,94.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({x:1935.8,alpha:1},10,cjs.Ease.get(1)).to({x:2107.2},5,cjs.Ease.get(-1)).to({_off:true},39).wait(157));

	// Layer 6
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(4388.4,733.1,2.81,2.81,0,0,0,234.3,96.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.Symbol3copy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(4259.9,775.9,2.81,2.81,0,0,0,234.3,96.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.Symbol3copy2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(4388.4,733.1,2.81,2.81,0,0,0,234.3,96.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(18).to({_off:false},0).to({x:2075.5,alpha:1},10,cjs.Ease.get(1)).to({x:2246.9},5,cjs.Ease.get(-1)).to({_off:true},44).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(87).to({_off:false},0).to({x:1946.9,alpha:1},10,cjs.Ease.get(1)).to({x:2118.3},5,cjs.Ease.get(-1)).to({_off:true},50).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(158).to({_off:false},0).to({x:2075.5,alpha:1},10,cjs.Ease.get(1)).to({x:2246.9},5,cjs.Ease.get(-1)).to({_off:true},53).wait(8));

	// Layer 10
	this.instance_6 = new lib.Symbol2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(4242.5,339.1,2.81,2.81,0,0,0,286.4,85.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Symbol2copy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(4114,381.9,2.81,2.81,0,0,0,286.4,85.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.Symbol2copy2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(4242.5,339.1,2.81,2.81,0,0,0,286.4,85.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(13).to({_off:false},0).to({x:1929.6,alpha:1},10,cjs.Ease.get(1)).to({x:2101},5,cjs.Ease.get(-1)).to({_off:true},49).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(82).to({_off:false},0).to({x:1801,alpha:1},10,cjs.Ease.get(1)).to({x:1972.4},5,cjs.Ease.get(-1)).to({_off:true},55).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(153).to({_off:false},0).to({x:1929.6,alpha:1},10,cjs.Ease.get(1)).to({x:2101},5,cjs.Ease.get(-1)).to({_off:true},58).wait(8));

	// Layer 8
	this.instance_9 = new lib.Symbol8();
	this.instance_9.parent = this;
	this.instance_9.setTransform(1648.7,2482.9,2.575,5.019,0,0,0,592.3,494.4);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(73).to({_off:false},0).to({alpha:1},8,cjs.Ease.get(1)).to({alpha:0},7,cjs.Ease.get(-1)).to({_off:true},138).wait(8));

	// Layer 2
	this.instance_10 = new lib.picfr01();
	this.instance_10.parent = this;
	this.instance_10.setTransform(876.6,534.7,0.936,0.936,0,0,0,585.8,488.2);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(11).to({_off:false},0).to({alpha:1},10,cjs.Ease.get(1)).to({_off:true},205).wait(8));

	// Layer 7
	this.instance_11 = new lib.bgblue("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(1287.6,2672.6,2.13,4.949,0,0,0,604.5,540);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(157).to({_off:false},0).to({alpha:1},11,cjs.Ease.get(1)).wait(66));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DE0061").s().p("EjtVF9YMAAAr6vMHarAAAMAAAL6vg");
	this.shape.setTransform(1642.5,2442.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(234));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(123.5,1.5,10005.2,4929.5);


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhMBvQgagtAAhAQAAg1ARgnQAQgnAbgUQAVgPAWAAQAkAAAdAmQAlAuAABOQAAA3gQAnQgQAmgZASQgZARgWAAQgtAAgeg2gAgbiGQgRAUgGApQgGAqAAAoQAABBAQAqQAOAiAaAAQAMABANgMQAOgMAHgaQALgpAAhIQAAg2gMglQgIgagNgMQgKgIgOAAQgOAAgNAPg");
	this.shape.setTransform(24.5,-112.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhMBvQgagtAAhAQAAg1ARgnQAQgnAbgUQAVgPAWAAQAkAAAdAmQAlAuAABOQAAA3gQAnQgQAmgZASQgZARgWAAQgtAAgeg2gAgbiGQgRAUgGApQgGAqAAAoQAABBAQAqQAOAiAaAAQAMABANgMQAOgMAHgaQALgpAAhIQAAg2gMglQgIgagNgMQgKgIgOAAQgOAAgNAPg");
	this.shape_1.setTransform(0.5,-112.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("Ag3CQQgtgqAAhDQAAgqARgmQASgnAggeQAfgdAcgKQAegLAYAAIAOAAIAAAJQgfADgTAJQgUAJgTAUQgSASgMAYQgNAXgJAgQAigXAhAAQAhAAAXAaQAZAaAAApQAAAngZAiQgcAngwAAQggAAgXgVgAgVgQQgKAEgTAMQgFAfAAATQAAAXAIAbQAJAaAQAPQAMALAQAAQAVAAAQgTQAQgTAAgkQAAgogQgdQgQgcgdgBQgIAAgLAEg");
	this.shape_2.setTransform(-23.4,-112.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AANBrIAAgIQAKAAAGgFQAFgDAAgGQAAgFgPgWIgfguIgiAuQgQAWAAAEQAAAFAFAFQAFAEALABIAAAIIhGAAIAAgIQAIgBAGgFQAJgHAVgcIAtg6Igog8QgSgZgJgGQgKgHgOAAIAAgIIBlAAIAAAIQgKAAgDAEQgEADAAAFQAAAGAIAMIAIALIAOAZIASgZQAQgXAAgGQAAgFgEgDQgEgEgIAAIAAgIIBIAAIAAAIQgLABgJAGQgLAIgUAaIgdAnIA1BMQAUAdAIAFQAJAGANABIAAAIg");
	this.shape_3.setTransform(-47.5,-107.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AhMBvQgagtAAhAQAAg1ARgnQAQgnAbgUQAVgPAWAAQAkAAAdAmQAlAuAABOQAAA3gQAnQgQAmgZASQgZARgWAAQgtAAgeg2gAgbiGQgRAUgGApQgGAqAAAoQAABBAQAqQAOAiAaAAQAMABANgMQAOgMAHgaQALgpAAhIQAAg2gMglQgIgagNgMQgKgIgOAAQgOAAgNAPg");
	this.shape_4.setTransform(-71.5,-112.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AhMBvQgagtAAhAQAAg1ARgnQAQgnAbgUQAVgPAWAAQAkAAAdAmQAlAuAABOQAAA3gQAnQgQAmgZASQgZARgWAAQgtAAgeg2gAgbiGQgRAUgGApQgGAqAAAoQAABBAQAqQAOAiAaAAQAMABANgMQAOgMAHgaQALgpAAhIQAAg2gMglQgIgagNgMQgKgIgOAAQgOAAgNAPg");
	this.shape_5.setTransform(-95.5,-112.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AhOCdQgLgIAAgJQAAgHAFgFQAGgFAHAAQAGAAAGACQAEABAOAIQAPAHAFABQAJACAJABQAXAAASgTQASgSAAgZQAAgTgIgRQgHgOgHgGQgKgKgRgHQgRgIgSAAIgIAAIAAgHQATgCARgKQATgMAIgPQAJgPAAgTQAAgYgPgPQgPgPgWAAQgkAAgZAnIgHgEQANggAVgSQAVgRAeAAQAmAAAUAZQAQASAAAWQAAAigsAmQAdALAPAUQAPAVAAAeQAAApgaAeQgiAnhAAAQggAAgMgIg");
	this.shape_6.setTransform(-120.5,-112.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(324));

	// 05
	this.instance = new lib._05("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(33.4,57.8,0.128,0.128,0,0,0,603.9,540.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(233).to({_off:false},0).wait(91));

	// 01
	this.instance_1 = new lib._01("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.4,57.8,0.128,0.128,0,0,0,603.9,540.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},255).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.5,158.5,1358.1,761.3);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/logo.png?1502007174052", id:"logo"},
		{src:"images/pic.jpg?1502007174052", id:"pic"},
		{src:"images/takanon.png?1502007174052", id:"takanon"},
		{src:"images/txt03.png?1502007174052", id:"txt03"},
		{src:"images/txt04.png?1502007174052", id:"txt04"},
		{src:"images/txt101.png?1502007174052", id:"txt101"},
		{src:"images/txt102.png?1502007174052", id:"txt102"},
		{src:"images/txt103.png?1502007174053", id:"txt103"},
		{src:"images/txt201.png?1502007174053", id:"txt201"},
		{src:"images/txt202.png?1502007174053", id:"txt202"},
		{src:"images/txt301.png?1502007174053", id:"txt301"},
		{src:"images/txt302.png?1502007174053", id:"txt302"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;