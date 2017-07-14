(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1160,
	height: 786,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/tierra.jpg?1490713289282", id:"tierra"},
		{src:"sounds/malpepo.mp3?1490713289282", id:"malpepo"},
		{src:"sounds/muybien.mp3?1490713289282", id:"muybien"}
	]
};



// symbols:



(lib.tierra = function() {
	this.initialize(img.tierra);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1160,786);


(lib.Símbolo9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#339900").ss(6,1,1).p("AiNAHIBQCqIDLlh");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.2,-20.7,34.5,41.5);


(lib.Símbolo8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC0000").ss(6,1,1).p("ACECMIh4h/IgMgNIAAAAIAMANAAAAAIh+CMAAAAAIiDiGAB/iLIh/CL");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-17,32.5,34);


(lib.Símbolo6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjBVQgLgEgIgGQgHgGgFgKQgEgJAAgNQAAgOAFgJQAFgLALgEQALgHAQgDQAQgEASAAIAQAAIAAgJQAAgHgBgFQgCgGgEgEQgDgEgGgCQgFgBgHAAQgLAAgJACIgPAGIgLAFQgEACgDABIgEgBIgCgEIgCgGIAAgHIABgJQABgDACgDIAIgFIAPgGIASgEQAKgCAIAAQATAAANAEQANADAIAIQAJAIADALQAEAMAAAQIAABoQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgGADIgLAAIgMAAQgEgBAAgCQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgNQgKAKgNAGQgMAGgNAAQgNAAgJgDgAgGANQgHABgEADQgGAEgBAEQgDAFAAAFQAAALAGAFQAHAGALAAQAHAAAIgFQAHgEAJgKIAAgbIgRAAQgLAAgGACg");
	this.shape.setTransform(62.8,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAABnQgKgDgGgHQgHgHgDgKQgCgLAAgOIAAhPIgTAAQgDAAgCgEQgCgEAAgKIAAgIIACgGIACgDIADAAIATAAIAAgjQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAIAHgBIAKgBIAKABIAGABIAEACIABAEIAAAjIAiAAIADAAIACADIABAGIABAIQAAAKgCAEQgCAEgDAAIgiAAIAABIQAAANAEAGQAEAHALAAIAGgBIAEgBIAFgCIACAAIACAAIABADIABAFIABAIIgBAMIgDAGIgEADIgHACIgJABIgKABQgOAAgHgEg");
	this.shape_1.setTransform(47.9,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBSQgOgGgJgLQgKgLgFgPQgFgQAAgVQAAgVAGgRQAGgRALgMQAKgLAPgFQAOgGAPAAIAOABIANAEIAKAEIAHAFIADADIABAEIABAFIAAAHQAAALgCAEQgCAEgCAAQgDAAgEgDIgIgFIgLgGQgGgCgJAAQgQAAgIANQgJAOAAAYQAAAMACAKQACAJAFAHQAEAGAFAEQAHADAJAAQAJAAAHgDIALgGIAIgGQAEgDACAAIADABIABADIABAGIABAKIgBAIIAAAFIgBADIgDAEIgHAEIgMAGIgOADQgIACgIAAQgQAAgOgGg");
	this.shape_2.setTransform(34.6,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjBVQgLgEgIgGQgHgGgFgKQgEgJAAgNQAAgOAGgJQAFgLAKgEQALgHAQgDQAQgEASAAIAQAAIAAgJQAAgHgCgFQgBgGgEgEQgDgEgGgCQgFgBgHAAQgLAAgIACIgQAGIgLAFQgEACgDABIgEgBIgDgEIgBgGIgBgHIABgJQACgDACgDIAIgFIAPgGIASgEQAJgCAJAAQASAAAOAEQANADAIAIQAIAIAFALQADAMAAAQIAABoQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgGADIgLAAIgLAAQgFgBgBgCQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgNQgKAKgNAGQgMAGgNAAQgMAAgKgDgAgGANQgHABgEADQgFAEgDAEQgCAFAAAFQAAALAHAFQAFAGAMAAQAHAAAIgFQAHgEAJgKIAAgbIgRAAQgLAAgGACg");
	this.shape_3.setTransform(17.6,4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAoBVIgHgBIgEgCIgDgDIgbg4IgdA4IgCADIgDACIgHABIgMAAIgNAAIgGgCQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQgBgCACgDIArhLIgohIIgBgGQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIAHgCIAOgBIAMABIAHABIAEABIACADIAaA0IAcg0IACgDIADgBIAGgBIALgBIANABIAGABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAADgCAEIgnBHIArBMIACAFIgDADIgIACIgNAAIgNAAg");
	this.shape_4.setTransform(0.9,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcBTQgQgGgLgKQgKgLgFgQQgGgRABgWQgBgSAGgRQAFgRALgMQAKgMAPgGQAPgGARAAQATAAAOAGQAOAGAJAKQAJAKAEAOQAFAOAAARIAAAHQgBAGgDAEQgEAEgGAAIhdAAQAAAKACAIQADAIAFAGQAEAGAJADQAHACAKAAQAMABAJgCIAPgDIALgFIAGgBIADAAIACACIABAGIAAAHIAAAGIAAAFIgBADIgCADQgCABgEACIgOAEIgSAEQgKABgMAAQgSAAgQgFgAgLg1QgGAEgEAFQgEAFgDAIQgCAHAAAIIA/AAQABgSgIgLQgIgKgRAAQgGAAgGACg");
	this.shape_5.setTransform(-16.4,4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AApBWIgGgBIgEgCIgBgEIAAhXQAAgMgBgGQgCgHgDgEQgDgFgGgCQgFgDgGAAQgHAAgIAHQgJAFgJANIAABlIgBAEIgDACIgHABIgLAAIgLAAIgGgBIgFgCIgBgEIAAiaIABgDIAEgDIAFgBIAJgBIAKABIAGABIACADIABADIAAASQANgOAOgHQAMgIAOABQAQgBALAGQALAFAHAJQAGAJAEAMQADAMAAASIAABeIgBAEIgEACIgHABIgLAAIgLAAg");
	this.shape_6.setTransform(-35,4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJB3IgHgBIgEgDIgBgDIAAiaIABgDIAEgCIAHgCIAJgBIAKABIAHACQABAAAAAAQABAAAAABQABAAAAAAQAAAAAAABIABADIAACaIgBADIgDADIgHABIgKAAIgJAAgAgThNQgFgFAAgNQAAgNAGgFQAFgFANAAQAOAAAFAFQAGAFAAAMQAAAOgGAFQgFAFgOAAQgOAAgFgFg");
	this.shape_7.setTransform(-49.1,0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B8B30E").s().p("AAEABIgNgBIAIAAIALgBQABADgEAAIgDgBg");
	this.shape_8.setTransform(-78,26.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B8B30E").s().p("AAAgEIACADIgDAFg");
	this.shape_9.setTransform(-93.4,24.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B8B30E").s().p("AAAgGIACABIgDAMQAAgKABgDg");
	this.shape_10.setTransform(-95.1,4.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B8B30E").s().p("AgCgHIAHALIgIAEQACgCgBgNg");
	this.shape_11.setTransform(122.7,19.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B8B30E").s().p("AgDACIAHgLIgIATg");
	this.shape_12.setTransform(122.8,23.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B8B30E").s().p("AgOAFQgFgFAFgBIAQgEQgCACAJABQALACgEAAQgMAAgDACQgBAEgGAAIgIgBg");
	this.shape_13.setTransform(-19.7,-30.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B8B30E").s().p("AgBAHIADgNIAAANg");
	this.shape_14.setTransform(10.7,-34.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B8B30E").s().p("AgJABIANgDQANABgGABIgLADIgEAAQgMAAAHgCg");
	this.shape_15.setTransform(45.9,-32);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B8B30E").s().p("AgDgDQAEADAEAAIgJAEg");
	this.shape_16.setTransform(52.7,-32.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B8B30E").s().p("AgIACQgBAAgBgBQgBAAAAAAQAAgBAAAAQAAAAABAAIAVgBQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgJACIgEABIgFgBg");
	this.shape_17.setTransform(44.9,-34.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B8B30E").s().p("AgMAAQgBAAAJAAIARAAQgGAAABABg");
	this.shape_18.setTransform(70.9,-34.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B8B30E").s().p("AgFACIAGgEIAFAFg");
	this.shape_19.setTransform(79.7,-34.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B8B30E").s().p("AgCAAQASgHgGAHQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAEgEgBIgJABQgIAAANgEg");
	this.shape_20.setTransform(64.9,-37.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B8B30E").s().p("AADAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAIgLABIAIgBg");
	this.shape_21.setTransform(82.9,-35.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B8B30E").s().p("AgMAAIARgCQAIAAgCAEIACAAIgQABQgIAAgBgDg");
	this.shape_22.setTransform(80.6,-35.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B8B30E").s().p("AgFAAQAEgBAIAAIAAACIgHABQgJgBAEgBg");
	this.shape_23.setTransform(94.5,-34.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B8B30E").s().p("AgHAAIAPgBQgBAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIABACQgIgCgHAAg");
	this.shape_24.setTransform(76.4,-38.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B8B30E").s().p("AoEFyQhFgHgUADQAEgBACgCQgcAFgvgFQgqgEgEABIgEgHQgfAIgOACQgOABglgEIADgCQAAgBgEgCQgMAGgJACQgPADgWgBIABgCIg1ABQAAgHgOgBIgRAAIgVAAQgagDgPgIQgSgLAAgLQgNgCgSgRQgPgPgMgTQABgBAAgEQgQgPABgfIACgZQADgOgBgGQgCgJgDAAQgCABgEAGQAGgQgHgkQgHgjACgEQAAgMAFAAQAIAAAAgBQgBgPgJAAQgGAAAFgXQACANABgCQAAgGAOgZQAMgTgDgJIgEAKQgDgOAIggQAGgagIgDIgHADQAFgagCgKQgCgMAEgZIACABIABgcQABgMgGgIIgCAJIACgUIADgNIAEgOIAJgSQAAgEAEgHQAEgIAEgCQgDgCAHgLQAIgLAMgJQAVgRAYgHQgQAHADADQACABAJAAQAIgKAKgDQAKgDAQACQABgaArAAIgJACQgBABgBAAQgBAAAAABQAAAAAAAAQAAABABAAQAFADAKgEQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgEADACACQANgGAWABQAdACAOgCQgHADACACIAHAGQACgHAWAFQASAFgHgJQAjAFBTABQBIAAAOAGQAFADANgDIAVgDIgBAGQARgGANgCQARgCATgFQgMAFADADQACADAOAFIAbgNIAGAJQAKgDAZADIgDAAIABACIACgCQAHgFAWgEQAdgEADgCQAGAGAQgCQAPgBAFAGQAFgDAKgCQgFgEAAgDQAAgDAIABIACAAIAFAHQATgCALAAIgLgEIAOAEIAEAAIgDAAQANADALgDQASAFAugGQAsgHAXAIQgPgDgDADQAPAAAmAEQAeAEAMgDIgCgHQAsgFAXAAIABgIIBAgBQAqgCAMAKQAEgEAWACQAcACAHgBIAEAGQAXACAcgEQAcAIAogDIBAgEIAAACIAqgEQgBAAgBABQAAAAAAAAQAAAAABAAQABAAABgBQAMgDAHABQAWgFAdAHIAaAAQgRADAHAEQANAHABACIARgGQADACgFACQgDACAGABIAcgEQAWgCAGgEQgCgDgJgCIAEgDQAOABABgBIgCgEQALAFATACQAOACAKAFQgIgGAaABQAfAAgIgHQAJAGAFAAQAEgBAGAFQgQgCgVAFIgiAIIAUAHQgHAHgVgEQgYgFgEABQAFgCALABQAIACACABIgFgIQgSgDgUAEIghAHQAJABgMADQgOAEAIAEIAPgBQAEACgGACIgOAEQgXgDhAAAQg4gBgJgEQAHACAMgBQAKgBAHgCIgWgEIAaADQASADAPgBQgBgBAEgJQAEgHgMgFQgagFgWAJQgaAKgegBIABgEQgBgEgTACQgfAEgVAJQgUAJAAAJQA1gKAFAIIgfAGQgRADgBADQgJgFAQgBQAOgBgMgFQgHABgHACIgJADQAFgDgIgDQgKgCgCgCQgUAAgfgDIg1gDQgHgEABgDQgQACgPAJQgRAKAGAEIgYgBQgLgCgLACIANAEIgEAAQgRgBgCAFQgMABgBgDQgBgEgDgBQgMAFAAACQgGgEALgKQAMgLgIgEQgGgEgagGIgZgHQgIAHADAUQACAUAJAJQAAADgJgEIgSgGQgOgFgTAFQgVAFgJgBIARgGQgDgCgRACQgRACgEACIAGgKQAGgIgGgDQgcgBgZAKQgYAKACAIIA9gKQABADgVAFQgWAFABAFIg4gDQAegCgKgFQgOAAgDgBIgMgFQAVgHAggRQAegRAOgKIgdAGIgHgFQgYAEgcAUQgHAFgXATQgPgBAAgKQAAgIAGgEQgVgBgWANQgVAMgWgBIAQAEIgbAAQgSgBACACQgHgEgDgGQgDgGAEgCIgkAQQADgCAAgIQAAgIABgBQgLgBgHAJQgGAIAGACIgYgHQgHgCgOgHQgHAAAEAIQAEAIAGABQgUAEgVgEQATgDgCgQIgCgYIhHArIAEgJQAEgIgBgBQgEAJgvADQglACgogBIAGAAQAHgEgSgBQgKgBgHAAIgBAAQgNgEgRAJQgRAJgOgGQAeABgCgKIgoAEQgXACAGAJIgRgDQgHgBAAgFIgxAJQAAAAABgBQABAAAAgBQAAAAABgBQAAAAAAgBQgBgCgKgBQALABAdgFQAVgEAJAGIgDgMQgCgFAIgFQgiADggAKIgzASIgrgGIgBAFIgJgJIgIAFQAAAAgBAAQAAAAAAgBQAAgBABAAQAAgBABgBQgGADgDADQgFgHANgPIAOAEQAHgHABgCQACgFgKgBIgGADQAKgJgGAAIgGABIgZALIgFADQAIgBAMADQgQAKgGALQgFALAMgCIgTAHIgEABIgEAJIgGAQIgEAKQgCAHgCAKQgBAAgDgDQAAgBgBAAQgBgBAAAAQgBAAAAAAQgBABAAAAQAAAIgDALIgGASIgDAKIgCAIQgBAJADACQACANAEACQAFADABAGQgDgBAAAEIAHARQAAABgBAAQAAAAAAAAQgBAAgBgBQAAgBgBgCQgCgFgCAMQAFAeABANQACATgCAUQABAVAHgLQAGgJgBAPQgHAGgCAEQgFAFAAAOIAHALQADAHACALIgKgCIABAXQgBAJgFAAQAFATgDANQADARAJgSIALgZQgCAIgDAaQgDARgGAJIgDgYQgGAZAGAUQAEAOgLALQABgNgDgLQgEgKgDAHIAFAZQgBABgCgGQgBgEgBAGIAIAVIACAFIAAAAIAAAFIADALIADAMIgBgBQAAAAgBAAQAAABAAAAQAAABAAABQAAABABABIABADIANAOQgEgEAAAFQAAAEAEAHQAGAIAHADQAEABAHgBIAJAAQAEABAFAGQgEAAgCgCIAHAJQAEgGAJABIAKABIALAAIAFABIAHgBQAIAAAHgBQAOgDABgGQANAFgIABQgRAEgOAEIAXAGQgRgBgKACQATAGAXgEQAIgCAYgHQADABABAHQAAAGATgCQAagCgJgIQgJgHALgBIAUALQAWgFAaACIArADQAIAAAEgDQAQADAggGQAfgFALABQgDACAIADIALAFIAngGQgJACgEADIgFAJIAQgCIANgDIgGADQgBABAAAAQAAABAAAAQAAABABAAQABABABAAIAtgKIgMgCIAYgBQASgBAKADQgCADgHAEQgJgEgHACQgEABgIAFQASgBAAACQgBADAGACQAPAAAIgFQAHgFgFgEQAWADAHgBQAMAAARgEIgFAIIAXgCIgSAKQAWACAFgHQAFgHAZACIAAAIQAFgBARgHQAKgEAJAFQAIgCgMgFQgIgDAYgBQAKAFAaADQAKgDgLgDQgHgCgGAAQAcgBATALQARAKAegFQgHgCACgHQABgFgbAAQAKgBAYAEQAWAEANgEIgQAJQAJAAAOgEIgCAHQAOgGAaACQAXACAJgIQgHAHAOgCQAVgDAFACQgLAEghABQgaAAgCAHQAGACAKgCQALgBAFACQgTAFgDACQAXAEAXgFIAjgJIgoADQACgHAKAAQAMAAAFgFQALAEAOgCQASgCAHABIgJABQAZAAAVAKQAVAKAFAAQAOABAPgEQAQgEgIgDIgUgCQgbgBAPgJQAMAJAdgEQAlgGAaAGQgMAEAHAEQAIAFgKACQARgBAHgCIAOgGIAHAGIAXgLQAGgDAegEQgJACALAEQALAEgGACQAWABAQgGIgCABQAYgBAWADQASACAZgDIgFgDQAjgFBBgBQBRAAAVgCIgWgDIAagBQAYgCAMADIgPACQABADAFADQAHAEALAAIAFgGIAHAFQALAAgDgEQgEgEAMAAQAHAIAyABQA1AAAKAHQAIgGgWAAQgVgBAIgFQAPAEAKABIgFgHIBTAGIBMACIgDACQAbADAIgOQACABgDAEQgDADAEAAQAIgJAMgGIAVgKQAagOgBgPQAEADAIgDQAHgDAIgGIAMgIQAGgBACAIIACgSQAHAGgLAbIgJAUQgFALAAAEIgHAHIgQAMIgSALIgIAEQABAAAAAGQABAEAFgDQgNAIgCACQgDADANgDQgaAKgcADIgOABIglgBQgegCg+ABIhbACQgzAAgngEQgFAAABACIAEAEQgNgFgHAEIgNAHIgggNQgIACACAEIACAFQgZABhAgFQg1gDgbAEQgHgCAAgFQABgEgLgBQAPAHggACQgfADAFADQgKgFghgEQgagCAFgLQgRgBgCAFQgCAEAHACQgxgBgaAHQgEgBhHgBQhCAAgPgIQAJAFgGABIgWADIAPAIIglgBQgKACAAgCQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBQgCgDgJgBQgOgBgJADQgJAFgHACIAEABIgSABIANgFQAQgGgZgCQgZAOgMgHQAPABACgEQACgCgIgDIgeAAIAKALIiDgFQhWgEgyABQAAgEgfgCQgegBAEgIIAEACQAQgBgNgFQgOgFgOABQAHACgLAHQgKAGAaABIgkAHQgIALgeAAIgYgBgAAWFrIAGACIAEgDIgCAAIgIABgAvAkyIALACQAGABADgCIgLgCIgJABg");
	this.shape_25.setTransform(8.7,-1.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B8B30E").s().p("AAFgKIAKARQgJgCgFABQgHAAgIAFg");
	this.shape_26.setTransform(-44.1,-31.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B8B30E").s().p("AgDAAQAPgBgNACg");
	this.shape_27.setTransform(2.3,29.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B8B30E").s().p("AgQAAQANgDAUADQgKAAgRABIgGgBg");
	this.shape_28.setTransform(37,-37.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B8B30E").s().p("AgCgCQAAgBAAAAQAAAAABAAQAAAAABABQAAAAAAABIAEAFIgBAAQgDAAgCgGg");
	this.shape_29.setTransform(-101.8,24.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B8B30E").s().p("AADACIgRgEQAOABAOABQgBADgEAAIgGgBg");
	this.shape_30.setTransform(40.2,-37.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B8B30E").s().p("AgEAAQAAgCAJAAIgJAFQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAg");
	this.shape_31.setTransform(-61.4,27.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B8B30E").s().p("AgEADIAKgGIgGAGg");
	this.shape_32.setTransform(-89.8,-33.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B8B30E").s().p("AgIAEIgEgFQgBgEAJADIASAHQgMgDgKACg");
	this.shape_33.setTransform(-20.5,-38.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B8B30E").s().p("AgEABIAJgCIgBADg");
	this.shape_34.setTransform(84.8,-38);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B8B30E").s().p("AAJgDIgEAFIgNACg");
	this.shape_35.setTransform(88.9,-38);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B8B30E").s().p("AgPAAIAagDIAFAAIgCADQgEABgKgBIAAADg");
	this.shape_36.setTransform(105.7,-35.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B8B30E").s().p("AALAVIgJgGIAEAAQAAAAAAAAQABAAAAgBQAAAAgBgBQAAgBgBgBQgFgGgFgDQgFgNgBgJIAFAJIAMAVIADACQAFAJgCAAIgBAAg");
	this.shape_37.setTransform(116.6,-31);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B8B30E").s().p("AgFABIAMgGQgYACgLgCIAlgDIgBAAIAVADIgVABQAOACgKACQgHADAUgCIgMAGQgGADgMAAQgHgEAHgFgAAJgHIABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_38.setTransform(97.6,-36.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B8B30E").s().p("AARADIgngBQACgCAQgDQARAFAKABIgJABg");
	this.shape_39.setTransform(92.3,-37.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B8B30E").s().p("AgQAQIADgCIgXADQgDgFATgHQARgFgFgCQAGACAEABQAGACARgCQAKgBgPgEQgUgEgBgCQALgDAEgBQADgCABgDQAOAKAEAJQAFAMgNACQgOgEgOADQgNABgCAGQgBgBAAAAQgBAAAAgBQAAAAAAgBQABAAAAgBg");
	this.shape_40.setTransform(88.2,-35.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B8B30E").s().p("AAFAAIAEAAIgQABQAGgBAGAAg");
	this.shape_41.setTransform(107,-37.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B8B30E").s().p("AgHAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIATAAQgGABgFAAIgGgBg");
	this.shape_42.setTransform(105,-37.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B8B30E").s().p("AgRAAQAUAAAHgBQAIAAAAABIgCACQgSAAgPgCg");
	this.shape_43.setTransform(102.4,-37.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B8B30E").s().p("AAEAFIgPgMIAXALQgFgCgBACIAAAEg");
	this.shape_44.setTransform(116.5,-33.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B8B30E").s().p("AAAACIgCABQgBABAAAAQAAAAgBgBQAAAAgBAAQgBAAAAgBQgDgHAAgCQAAAAABAAQAAAAABAAQAAAAABAAQABAAABABQAEAFAKAJQgIgIgCACg");
	this.shape_45.setTransform(120,-28.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B8B30E").s().p("AAAACIgGgIQAKAGADAHg");
	this.shape_46.setTransform(113.8,-36.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B8B30E").s().p("AgSACQAWgFALAAQgEAAAFADQAFACgEADQgSgFgRACg");
	this.shape_47.setTransform(103.6,-39.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B8B30E").s().p("AgIgGIAPAKIACADIgBAAQgDAAgNgNg");
	this.shape_48.setTransform(118.8,-32.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B8B30E").s().p("AgEAAIAAgFQgBgFACgBQgBACAEAIIAGANg");
	this.shape_49.setTransform(120.3,-31.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B8B30E").s().p("AgBABIACgLQABgBgBAKIAAANg");
	this.shape_50.setTransform(120.8,-7.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B8B30E").s().p("AgCgHQACAJAAgCIADgMQABAXgDACIgBAAQgBAAgBgUg");
	this.shape_51.setTransform(123.2,-16);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B8B30E").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgCgDABgCIABgDIACARIgCgJg");
	this.shape_52.setTransform(123.5,-19.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B8B30E").s().p("AgDgDQADgIAAAAQACAAACALQgBgCgCAEIgBAKg");
	this.shape_53.setTransform(124.5,-19.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B8B30E").s().p("AAAgHQAAABAAAAQAAABAAAAQAAABAAgBQABAAAAAAIAAAKIgBADg");
	this.shape_54.setTransform(124.2,-14.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B8B30E").s().p("AgDAeIADgDQAAgIgCgdQgCgWAEgHQAAAMAAAZIAEAqg");
	this.shape_55.setTransform(122,-4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B8B30E").s().p("AAAAHIgCgPIAFARg");
	this.shape_56.setTransform(121.9,3.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B8B30E").s().p("AAAADQgCgBAAgDIACgCQACAAABAHIgDgBg");
	this.shape_57.setTransform(123.7,18);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B8B30E").s().p("AvDFJQg4AAgngoQgognAAg4IAAmDQAAg4AognQAngoA4AAIeHAAQA4AAAnAoQAoAnAAA4IAAGDQAAA4goAnQgnAog4AAg");
	this.shape_58.setTransform(9.9,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155.7,-39.7,330.1,75.2);


(lib.Símbolo5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkBVQgLgEgHgGQgHgGgFgKQgEgJAAgNQAAgOAGgJQAEgLAMgEQAKgHAQgDQAPgEAUAAIAPAAIAAgJQAAgHgCgFQgBgGgDgEQgEgEgFgCQgHgBgGAAQgLAAgIACIgQAGIgLAFQgFACgDABIgDgBIgDgEIgBgGIgBgHIABgJQABgDADgDIAJgFIAOgGIASgEQAJgCAJAAQASAAANAEQANADAJAIQAIAIAFALQADAMAAAQIAABoQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgFADIgLAAIgLAAQgEgBgCgCQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIAAgNQgJAKgMAGQgNAGgNAAQgMAAgLgDgAgGANQgHABgFADQgFAEgCAEQgCAFAAAFQAAALAHAFQAFAGAMAAQAHAAAIgFQAIgEAIgKIAAgbIgRAAQgLAAgGACg");
	this.shape.setTransform(34.4,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAABnQgJgDgHgHQgGgHgDgKQgEgLAAgOIAAhPIgSAAQgDAAgCgEQgCgEAAgKIABgIIABgGIACgDIADAAIASAAIAAgjQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQABgBABAAIAGgBIALgBIAIABIAIABIADACIABAEIAAAjIAiAAIADAAIACADIACAGIAAAIQAAAKgCAEQgBAEgEAAIgiAAIAABIQAAANAEAGQAEAHAKAAIAGgBIAGgBIADgCIADAAIACAAIACADIABAFIAAAIIgBAMIgDAGIgEADIgIACIgJABIgJABQgNAAgIgEg");
	this.shape_1.setTransform(19.5,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBSQgOgGgJgLQgKgLgFgPQgFgQAAgVQAAgVAGgRQAGgRALgMQAKgLAPgFQAOgGAPAAIAOABIANAEIAKAEIAHAFIADADIABAEIABAFIAAAHQAAALgCAEQgCAEgCAAQgDAAgEgDIgIgFIgLgGQgGgCgJAAQgQAAgIANQgJAOAAAYQAAAMACAKQACAJAFAHQAEAGAFAEQAHADAJAAQAJAAAHgDIALgGIAIgGQAEgDACAAIADABIABADIABAGIABAKIgBAIIAAAFIgBADIgDAEIgHAEIgMAGIgOADQgIACgIAAQgQAAgOgGg");
	this.shape_2.setTransform(6.2,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkBVQgKgEgIgGQgHgGgFgKQgEgJAAgNQAAgOAFgJQAFgLAMgEQAKgHAQgDQAPgEAUAAIAPAAIAAgJQAAgHgCgFQgBgGgDgEQgEgEgFgCQgHgBgGAAQgLAAgJACIgPAGIgLAFQgEACgEABIgDgBIgCgEIgCgGIgBgHIACgJQABgDACgDIAJgFIAOgGIASgEQAJgCAJAAQATAAAMAEQANADAJAIQAJAIADALQAEAMAAAQIAABoQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAIgFADIgLAAIgMAAQgDgBgBgCQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIAAgNQgJAKgMAGQgNAGgNAAQgNAAgKgDgAgFANQgIABgFADQgEAEgCAEQgDAFAAAFQAAALAGAFQAHAGALAAQAHAAAIgFQAHgEAJgKIAAgbIgRAAQgLAAgFACg");
	this.shape_3.setTransform(-10.8,4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAoBVIgHgBIgEgCIgDgDIgbg4IgdA4IgCADIgDACIgHABIgMAAIgNAAIgGgCQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQgBgCACgDIArhLIgohIIgBgGQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIAHgCIAOgBIAMABIAHABIAEABIACADIAaA0IAcg0IACgDIADgBIAGgBIALgBIANABIAGABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAADgCAEIgnBHIArBMIACAFIgDADIgIACIgNAAIgNAAg");
	this.shape_4.setTransform(-27.5,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcBTQgQgGgLgKQgKgLgFgQQgFgRgBgWQABgSAFgRQAGgRAKgMQAKgMAPgGQAPgGAQAAQAUAAAOAGQAOAGAJAKQAJAKAFAOQADAOAAARIAAAHQABAGgEAEQgDAEgHAAIheAAQABAKACAIQADAIAEAGQAGAGAIADQAHACALAAQALABAJgCIAPgDIAKgFIAIgBIACAAIACACIABAGIAAAHIAAAGIgBAFIgBADIgCADQAAABgGACIgMAEIgTAEQgKABgMAAQgSAAgQgFgAgLg1QgHAEgEAFQgDAFgDAIQgCAHgBAIIBAAAQABgSgIgLQgIgKgQAAQgHAAgGACg");
	this.shape_5.setTransform(-44.8,4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B8B30E").s().p("AAEABIgNgBIAIAAIALgBQABADgEAAIgDgBg");
	this.shape_6.setTransform(-92.3,26.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B8B30E").s().p("AAAgEIACADIgDAFg");
	this.shape_7.setTransform(-107.7,24.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B8B30E").s().p("AAAgGIACABIgDAMQAAgKABgDg");
	this.shape_8.setTransform(-109.4,4.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B8B30E").s().p("AgCgHIAHALIgIAEQACgCgBgNg");
	this.shape_9.setTransform(108.4,19.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B8B30E").s().p("AgDACIAHgLIgIATg");
	this.shape_10.setTransform(108.5,23.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B8B30E").s().p("AgOAFQgFgFAFgBIAQgEQgCACAJABQALACgEAAQgMAAgDACQgBAEgGAAIgIgBg");
	this.shape_11.setTransform(-34,-30.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B8B30E").s().p("AgBAHIADgNIAAANg");
	this.shape_12.setTransform(-3.6,-34.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B8B30E").s().p("AgJABIANgDQANABgGABIgLADIgEAAQgMAAAHgCg");
	this.shape_13.setTransform(31.6,-32);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B8B30E").s().p("AgDgDQAEADAEAAIgJAEg");
	this.shape_14.setTransform(38.4,-32.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B8B30E").s().p("AgIACQgBAAgBgBQgBAAAAAAQAAgBAAAAQAAAAABAAIAVgBQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgJACIgEABIgFgBg");
	this.shape_15.setTransform(30.6,-34.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B8B30E").s().p("AgMAAQgBAAAJAAIARAAQgGAAABABg");
	this.shape_16.setTransform(56.6,-34.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B8B30E").s().p("AgFACIAGgEIAFAFg");
	this.shape_17.setTransform(65.4,-34.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B8B30E").s().p("AgCAAQASgHgGAHQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAEgEgBIgJABQgIAAANgEg");
	this.shape_18.setTransform(50.6,-37.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B8B30E").s().p("AADAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAIgLABIAIgBg");
	this.shape_19.setTransform(68.6,-35.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B8B30E").s().p("AgMAAIARgCQAIAAgCAEIACAAIgQABQgIAAgBgDg");
	this.shape_20.setTransform(66.3,-35.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B8B30E").s().p("AgFAAQAEgBAIAAIAAACIgHABQgJgBAEgBg");
	this.shape_21.setTransform(80.2,-34.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B8B30E").s().p("AgHAAIAPgBQgBAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIABACQgIgCgHAAg");
	this.shape_22.setTransform(62.1,-38.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B8B30E").s().p("AoEFyQhFgHgUADQAEgBACgCQgcAFgvgFQgqgEgEABIgEgHQgfAIgOACQgOABglgEIADgCQAAgBgEgCQgMAGgJACQgPADgWgBIABgCIg1ABQAAgHgOgBIgRAAIgVAAQgagDgPgIQgSgLAAgLQgNgCgSgRQgPgPgMgTQABgBAAgEQgQgPABgfIACgZQADgOgBgGQgCgJgDAAQgCABgEAGQAGgQgHgkQgHgjACgEQAAgMAFAAQAIAAAAgBQgBgPgJAAQgGAAAFgXQACANABgCQAAgGAOgZQAMgTgDgJIgEAKQgDgOAIggQAGgagIgDIgHADQAFgagCgKQgCgMAEgZIACABIABgcQABgMgGgIIgCAJIACgUIADgNIAEgOIAJgSQAAgEAEgHQAEgIAEgCQgDgCAHgLQAIgLAMgJQAVgRAYgHQgQAHADADQACABAJAAQAIgKAKgDQAKgDAQACQABgaArAAIgJACQgBABgBAAQgBAAAAABQAAAAAAAAQAAABABAAQAFADAKgEQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgEADACACQANgGAWABQAdACAOgCQgHADACACIAHAGQACgHAWAFQASAFgHgJQAjAFBTABQBIAAAOAGQAFADANgDIAVgDIgBAGQARgGANgCQARgCATgFQgMAFADADQACADAOAFIAbgNIAGAJQAKgDAZADIgDAAIABACIACgCQAHgFAWgEQAdgEADgCQAGAGAQgCQAPgBAFAGQAFgDAKgCQgFgEAAgDQAAgDAIABIACAAIAFAHQATgCALAAIgLgEIAOAEIAEAAIgDAAQANADALgDQASAFAugGQAsgHAXAIQgPgDgDADQAPAAAmAEQAeAEAMgDIgCgHQAsgFAXAAIABgIIBAgBQAqgCAMAKQAEgEAWACQAcACAHgBIAEAGQAXACAcgEQAcAIAogDIBAgEIAAACIAqgEQgBAAgBABQAAAAAAAAQAAAAABAAQABAAABgBQAMgDAHABQAWgFAdAHIAaAAQgRADAHAEQANAHABACIARgGQADACgFACQgDACAGABIAcgEQAWgCAGgEQgCgDgJgCIAEgDQAOABABgBIgCgEQALAFATACQAOACAKAFQgIgGAaABQAfAAgIgHQAJAGAFAAQAEgBAGAFQgQgCgVAFIgiAIIAUAHQgHAHgVgEQgYgFgEABQAFgCALABQAIACACABIgFgIQgSgDgUAEIghAHQAJABgMADQgOAEAIAEIAPgBQAEACgGACIgOAEQgXgDhAAAQg4gBgJgEQAHACAMgBQAKgBAHgCIgWgEIAaADQASADAPgBQgBgBAEgJQAEgHgMgFQgagFgWAJQgaAKgegBIABgEQgBgEgTACQgfAEgVAJQgUAJAAAJQA1gKAFAIIgfAGQgRADgBADQgJgFAQgBQAOgBgMgFQgHABgHACIgJADQAFgDgIgDQgKgCgCgCQgUAAgfgDIg1gDQgHgEABgDQgQACgPAJQgRAKAGAEIgYgBQgLgCgLACIANAEIgEAAQgRgBgCAFQgMABgBgDQgBgEgDgBQgMAFAAACQgGgEALgKQAMgLgIgEQgGgEgagGIgZgHQgIAHADAUQACAUAJAJQAAADgJgEIgSgGQgOgFgTAFQgVAFgJgBIARgGQgDgCgRACQgRACgEACIAGgKQAGgIgGgDQgcgBgZAKQgYAKACAIIA9gKQABADgVAFQgWAFABAFIg4gDQAegCgKgFQgOAAgDgBIgMgFQAVgHAggRQAegRAOgKIgdAGIgHgFQgYAEgcAUQgHAFgXATQgPgBAAgKQAAgIAGgEQgVgBgWANQgVAMgWgBIAQAEIgbAAQgSgBACACQgHgEgDgGQgDgGAEgCIgkAQQADgCAAgIQAAgIABgBQgLgBgHAJQgGAIAGACIgYgHQgHgCgOgHQgHAAAEAIQAEAIAGABQgUAEgVgEQATgDgCgQIgCgYIhHArIAEgJQAEgIgBgBQgEAJgvADQglACgogBIAGAAQAHgEgSgBQgKgBgHAAIgBAAQgNgEgRAJQgRAJgOgGQAeABgCgKIgoAEQgXACAGAJIgRgDQgHgBAAgFIgxAJQAAAAABgBQABAAAAgBQAAAAABgBQAAAAAAgBQgBgCgKgBQALABAdgFQAVgEAJAGIgDgMQgCgFAIgFQgiADggAKIgzASIgrgGIgBAFIgJgJIgIAFQAAAAgBAAQAAAAAAgBQAAgBABAAQAAgBABgBQgGADgDADQgFgHANgPIAOAEQAHgHABgCQACgFgKgBIgGADQAKgJgGAAIgGABIgZALIgFADQAIgBAMADQgQAKgGALQgFALAMgCIgTAHIgEABIgEAJIgGAQIgEAKQgCAHgCAKQgBAAgDgDQAAgBgBAAQgBgBAAAAQgBAAAAAAQgBABAAAAQAAAIgDALIgGASIgDAKIgCAIQgBAJADACQACANAEACQAFADABAGQgDgBAAAEIAHARQAAABgBAAQAAAAAAAAQgBAAgBgBQAAgBgBgCQgCgFgCAMQAFAeABANQACATgCAUQABAVAHgLQAGgJgBAPQgHAGgCAEQgFAFAAAOIAHALQADAHACALIgKgCIABAXQgBAJgFAAQAFATgDANQADARAJgSIALgZQgCAIgDAaQgDARgGAJIgDgYQgGAZAGAUQAEAOgLALQABgNgDgLQgEgKgDAHIAFAZQgBABgCgGQgBgEgBAGIAIAVIACAFIAAAAIAAAFIADALIADAMIgBgBQAAAAgBAAQAAABAAAAQAAABAAABQAAABABABIABADIANAOQgEgEAAAFQAAAEAEAHQAGAIAHADQAEABAHgBIAJAAQAEABAFAGQgEAAgCgCIAHAJQAEgGAJABIAKABIALAAIAFABIAHgBQAIAAAHgBQAOgDABgGQANAFgIABQgRAEgOAEIAXAGQgRgBgKACQATAGAXgEQAIgCAYgHQADABABAHQAAAGATgCQAagCgJgIQgJgHALgBIAUALQAWgFAaACIArADQAIAAAEgDQAQADAggGQAfgFALABQgDACAIADIALAFIAngGQgJACgEADIgFAJIAQgCIANgDIgGADQgBABAAAAQAAABAAAAQAAABABAAQABABABAAIAtgKIgMgCIAYgBQASgBAKADQgCADgHAEQgJgEgHACQgEABgIAFQASgBAAACQgBADAGACQAPAAAIgFQAHgFgFgEQAWADAHgBQAMAAARgEIgFAIIAXgCIgSAKQAWACAFgHQAFgHAZACIAAAIQAFgBARgHQAKgEAJAFQAIgCgMgFQgIgDAYgBQAKAFAaADQAKgDgLgDQgHgCgGAAQAcgBATALQARAKAegFQgHgCACgHQABgFgbAAQAKgBAYAEQAWAEANgEIgQAJQAJAAAOgEIgCAHQAOgGAaACQAXACAJgIQgHAHAOgCQAVgDAFACQgLAEghABQgaAAgCAHQAGACAKgCQALgBAFACQgTAFgDACQAXAEAXgFIAjgJIgoADQACgHAKAAQAMAAAFgFQALAEAOgCQASgCAHABIgJABQAZAAAVAKQAVAKAFAAQAOABAPgEQAQgEgIgDIgUgCQgbgBAPgJQAMAJAdgEQAlgGAaAGQgMAEAHAEQAIAFgKACQARgBAHgCIAOgGIAHAGIAXgLQAGgDAegEQgJACALAEQALAEgGACQAWABAQgGIgCABQAYgBAWADQASACAZgDIgFgDQAjgFBBgBQBRAAAVgCIgWgDIAagBQAYgCAMADIgPACQABADAFADQAHAEALAAIAFgGIAHAFQALAAgDgEQgEgEAMAAQAHAIAyABQA1AAAKAHQAIgGgWAAQgVgBAIgFQAPAEAKABIgFgHIBTAGIBMACIgDACQAbADAIgOQACABgDAEQgDADAEAAQAIgJAMgGIAVgKQAagOgBgPQAEADAIgDQAHgDAIgGIAMgIQAGgBACAIIACgSQAHAGgLAbIgJAUQgFALAAAEIgHAHIgQAMIgSALIgIAEQABAAAAAGQABAEAFgDQgNAIgCACQgDADANgDQgaAKgcADIgOABIglgBQgegCg+ABIhbACQgzAAgngEQgFAAABACIAEAEQgNgFgHAEIgNAHIgggNQgIACACAEIACAFQgZABhAgFQg1gDgbAEQgHgCAAgFQABgEgLgBQAPAHggACQgfADAFADQgKgFghgEQgagCAFgLQgRgBgCAFQgCAEAHACQgxgBgaAHQgEgBhHgBQhCAAgPgIQAJAFgGABIgWADIAPAIIglgBQgKACAAgCQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBQgCgDgJgBQgOgBgJADQgJAFgHACIAEABIgSABIANgFQAQgGgZgCQgZAOgMgHQAPABACgEQACgCgIgDIgeAAIAKALIiDgFQhWgEgyABQAAgEgfgCQgegBAEgIIAEACQAQgBgNgFQgOgFgOABQAHACgLAHQgKAGAaABIgkAHQgIALgeAAIgYgBgAAWFrIAGACIAEgDIgCAAIgIABgAvAkyIALACQAGABADgCIgLgCIgJABg");
	this.shape_23.setTransform(-5.6,-1.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B8B30E").s().p("AAFgKIAKARQgJgCgFABQgHAAgIAFg");
	this.shape_24.setTransform(-58.4,-31.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B8B30E").s().p("AgDAAQAPgBgNACg");
	this.shape_25.setTransform(-12,29.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B8B30E").s().p("AgQAAQANgDAUADQgKAAgRABIgGgBg");
	this.shape_26.setTransform(22.7,-37.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B8B30E").s().p("AgCgCQAAgBAAAAQAAAAABAAQAAAAABABQAAAAAAABIAEAFIgBAAQgDAAgCgGg");
	this.shape_27.setTransform(-116.1,24.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B8B30E").s().p("AADACIgRgEQAOABAOABQgBADgEAAIgGgBg");
	this.shape_28.setTransform(25.9,-37.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B8B30E").s().p("AgEAAQAAgCAJAAIgJAFQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAg");
	this.shape_29.setTransform(-75.7,27.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B8B30E").s().p("AgEADIAKgGIgGAGg");
	this.shape_30.setTransform(-104.1,-33.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B8B30E").s().p("AgIAEIgEgFQgBgEAJADIASAHQgMgDgKACg");
	this.shape_31.setTransform(-34.8,-38.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B8B30E").s().p("AgEABIAJgCIgBADg");
	this.shape_32.setTransform(70.5,-38);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B8B30E").s().p("AAJgDIgEAFIgNACg");
	this.shape_33.setTransform(74.6,-38);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B8B30E").s().p("AgPAAIAagDIAFAAIgCADQgEABgKgBIAAADg");
	this.shape_34.setTransform(91.4,-35.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B8B30E").s().p("AALAVIgJgGIAEAAQAAAAAAAAQABAAAAgBQAAAAgBgBQAAgBgBgBQgFgGgFgDQgFgNgBgJIAFAJIAMAVIADACQAFAJgCAAIgBAAg");
	this.shape_35.setTransform(102.3,-31);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B8B30E").s().p("AgFABIAMgGQgYACgLgCIAlgDIgBAAIAVADIgVABQAOACgKACQgHADAUgCIgMAGQgGADgMAAQgHgEAHgFgAAJgHIABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_36.setTransform(83.3,-36.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B8B30E").s().p("AARADIgngBQACgCAQgDQARAFAKABIgJABg");
	this.shape_37.setTransform(78,-37.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B8B30E").s().p("AgQAQIADgCIgXADQgDgFATgHQARgFgFgCQAGACAEABQAGACARgCQAKgBgPgEQgUgEgBgCQALgDAEgBQADgCABgDQAOAKAEAJQAFAMgNACQgOgEgOADQgNABgCAGQgBgBAAAAQgBAAAAgBQAAAAAAgBQABAAAAgBg");
	this.shape_38.setTransform(73.9,-35.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B8B30E").s().p("AAFAAIAEAAIgQABQAGgBAGAAg");
	this.shape_39.setTransform(92.7,-37.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B8B30E").s().p("AgHAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIATAAQgGABgFAAIgGgBg");
	this.shape_40.setTransform(90.7,-37.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B8B30E").s().p("AgRAAQAUAAAHgBQAIAAAAABIgCACQgSAAgPgCg");
	this.shape_41.setTransform(88.1,-37.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B8B30E").s().p("AAEAFIgPgMIAXALQgFgCgBACIAAAEg");
	this.shape_42.setTransform(102.2,-33.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B8B30E").s().p("AAAACIgCABQgBABAAAAQAAAAgBgBQAAAAgBAAQgBAAAAgBQgDgHAAgCQAAAAABAAQAAAAABAAQAAAAABAAQABAAABABQAEAFAKAJQgIgIgCACg");
	this.shape_43.setTransform(105.7,-28.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B8B30E").s().p("AAAACIgGgIQAKAGADAHg");
	this.shape_44.setTransform(99.5,-36.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B8B30E").s().p("AgSACQAWgFALAAQgEAAAFADQAFACgEADQgSgFgRACg");
	this.shape_45.setTransform(89.3,-39.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B8B30E").s().p("AgIgGIAPAKIACADIgBAAQgDAAgNgNg");
	this.shape_46.setTransform(104.5,-32.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B8B30E").s().p("AgEAAIAAgFQgBgFACgBQgBACAEAIIAGANg");
	this.shape_47.setTransform(106,-31.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B8B30E").s().p("AgBABIACgLQABgBgBAKIAAANg");
	this.shape_48.setTransform(106.5,-7.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B8B30E").s().p("AgCgHQACAJAAgCIADgMQABAXgDACIgBAAQgBAAgBgUg");
	this.shape_49.setTransform(108.9,-16);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B8B30E").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgCgDABgCIABgDIACARIgCgJg");
	this.shape_50.setTransform(109.2,-19.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B8B30E").s().p("AgDgDQADgIAAAAQACAAACALQgBgCgCAEIgBAKg");
	this.shape_51.setTransform(110.2,-19.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B8B30E").s().p("AAAgHQAAABAAAAQAAABAAAAQAAABAAgBQABAAAAAAIAAAKIgBADg");
	this.shape_52.setTransform(109.9,-14.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B8B30E").s().p("AgDAeIADgDQAAgIgCgdQgCgWAEgHQAAAMAAAZIAEAqg");
	this.shape_53.setTransform(107.7,-4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B8B30E").s().p("AAAAHIgCgPIAFARg");
	this.shape_54.setTransform(107.6,3.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B8B30E").s().p("AAAADQgCgBAAgDIACgCQACAAABAHIgDgBg");
	this.shape_55.setTransform(109.4,18);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B8B30E").s().p("AvDFJQg4AAgngoQgognAAg4IAAmDQAAg4AognQAngoA4AAIeHAAQA4AAAnAoQAoAnAAA4IAAGDQAAA4goAnQgnAog4AAg");
	this.shape_56.setTransform(-4.4,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170,-39.7,330.1,75.2);


(lib.barrita = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_35 = function() {
		this.stop();
	}
	this.frame_41 = function() {
		this.stop();
	}
	this.frame_47 = function() {
		this.stop();
	}
	this.frame_53 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}
	this.frame_65 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(6).call(this.frame_11).wait(6).call(this.frame_17).wait(6).call(this.frame_23).wait(6).call(this.frame_29).wait(6).call(this.frame_35).wait(6).call(this.frame_41).wait(6).call(this.frame_47).wait(6).call(this.frame_53).wait(6).call(this.frame_59).wait(6).call(this.frame_65).wait(6));

	// Capa 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#339933").s().p("AiNAzIAAhlIEbAAIAABlg");
	this.shape.setTransform(0.2,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#339933").s().p("AiNBOIAAibIEbAAIAACbg");
	this.shape_1.setTransform(0.2,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#339933").s().p("AiNBoIAAjPIEbAAIAADPg");
	this.shape_2.setTransform(0.2,-1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#339933").s().p("AiNCDIAAkFIEbAAIAAEFg");
	this.shape_3.setTransform(0.2,-4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#339933").s().p("AiNCeIAAk7IEbAAIAAE7g");
	this.shape_4.setTransform(0.2,-7.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#339933").s().p("AiNC4IAAlwIEbAAIAAFwg");
	this.shape_5.setTransform(0.2,-9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#339933").s().p("AiNDWIAAmsIEbAAIAAGsg");
	this.shape_6.setTransform(0.2,-12.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#339933").s().p("AiND1IAAnpIEbAAIAAHpg");
	this.shape_7.setTransform(0.2,-15.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#339933").s().p("AiNETIAAokIEbAAIAAIkg");
	this.shape_8.setTransform(0.2,-18.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#339933").s().p("AiNEwIAApgIEbAAIAAJgg");
	this.shape_9.setTransform(0.2,-21.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#339933").s().p("AiNFOIAAqbIEbAAIAAKbg");
	this.shape_10.setTransform(0.2,-24.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#339933").s().p("AiNFuIAArbIEbAAIAALbg");
	this.shape_11.setTransform(0.2,-28);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#339933").s().p("AiNGPIAAscIEbAAIAAMcg");
	this.shape_12.setTransform(0.2,-31.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#339933").s().p("AiNGvIAAtcIEbAAIAANcg");
	this.shape_13.setTransform(0.2,-34.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#339933").s().p("AiNHPIAAudIEbAAIAAOdg");
	this.shape_14.setTransform(0.2,-37.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#339933").s().p("AiNHvIAAvdIEbAAIAAPdg");
	this.shape_15.setTransform(0.2,-40.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#339933").s().p("AiNISIAAwiIEbAAIAAQig");
	this.shape_16.setTransform(0.2,-44.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#339933").s().p("AiNI1IAAxpIEbAAIAARpg");
	this.shape_17.setTransform(0.2,-47.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#339933").s().p("AiNJXIAAytIEbAAIAAStg");
	this.shape_18.setTransform(0.2,-51.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#339933").s().p("AiNJ6IAAz0IEbAAIAAT0g");
	this.shape_19.setTransform(0.2,-54.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#339933").s().p("AiNKeIAA06IEbAAIAAU6g");
	this.shape_20.setTransform(0.2,-58.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#339933").s().p("AiNK/IAA19IEbAAIAAV9g");
	this.shape_21.setTransform(0.2,-61.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#339933").s().p("AiNLhIAA3BIEbAAIAAXBg");
	this.shape_22.setTransform(0.2,-65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#339933").s().p("AiNMEIAA4HIEbAAIAAYHg");
	this.shape_23.setTransform(0.2,-68.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#339933").s().p("AiNMlIAA5JIEbAAIAAZJg");
	this.shape_24.setTransform(0.2,-71.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#339933").s().p("AiNNHIAA6NIEbAAIAAaNg");
	this.shape_25.setTransform(0.2,-75.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#339933").s().p("AiNNpIAA7SIEbAAIAAbSg");
	this.shape_26.setTransform(0.2,-78.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#339933").s().p("AiNOLIAA8VIEbAAIAAcVg");
	this.shape_27.setTransform(0.2,-81.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#339933").s().p("AiNOtIAA9ZIEbAAIAAdZg");
	this.shape_28.setTransform(0.2,-85.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#339933").s().p("AiNPPIAA+dIEbAAIAAedg");
	this.shape_29.setTransform(0.2,-88.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#339933").s().p("AiNPyIAA/jIEbAAIAAfjg");
	this.shape_30.setTransform(0.2,-91.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#339933").s().p("AiNQOMAAAggbIEbAAMAAAAgbg");
	this.shape_31.setTransform(0.2,-94.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#339933").s().p("AiNQqMAAAghSIEbAAMAAAAhSg");
	this.shape_32.setTransform(0.2,-97.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#339933").s().p("AiNRFMAAAgiKIEbAAMAAAAiKg");
	this.shape_33.setTransform(0.2,-100.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#339933").s().p("AiNRhMAAAgjCIEbAAMAAAAjCg");
	this.shape_34.setTransform(0.2,-103.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#339933").s().p("AiNR9MAAAgj5IEbAAMAAAAj5g");
	this.shape_35.setTransform(0.2,-106.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#339933").s().p("AiNSaMAAAgk0IEbAAMAAAAk0g");
	this.shape_36.setTransform(0.2,-109.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#339933").s().p("AiNS3MAAAgltIEbAAMAAAAltg");
	this.shape_37.setTransform(0.2,-112);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#339933").s().p("AiNTUMAAAgmoIEbAAMAAAAmog");
	this.shape_38.setTransform(0.2,-114.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#339933").s().p("AiNTxMAAAgnhIEbAAMAAAAnhg");
	this.shape_39.setTransform(0.2,-117.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#339933").s().p("AiNUOMAAAgocIEbAAMAAAAocg");
	this.shape_40.setTransform(0.2,-120.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#339933").s().p("AiNUrMAAAgpWIEbAAMAAAApWg");
	this.shape_41.setTransform(0.2,-123.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#339933").s().p("AiNVIMAAAgqPIEbAAMAAAAqPg");
	this.shape_42.setTransform(0.2,-126.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#339933").s().p("AiNVmMAAAgrKIEbAAMAAAArKg");
	this.shape_43.setTransform(0.2,-129.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#339933").s().p("AiNWDMAAAgsFIEbAAMAAAAsFg");
	this.shape_44.setTransform(0.2,-132.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#339933").s().p("AiNWgMAAAgs+IEbAAMAAAAs+g");
	this.shape_45.setTransform(0.2,-135.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#339933").s().p("AiNW7MAAAgt2IEbAAMAAAAt2g");
	this.shape_46.setTransform(0.2,-138);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#339933").s().p("AiNXYMAAAguvIEbAAMAAAAuvg");
	this.shape_47.setTransform(0.2,-140.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#339933").s().p("AiNXzMAAAgvmIEbAAMAAAAvmg");
	this.shape_48.setTransform(0.2,-143.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#339933").s().p("AiNYQMAAAgweIEbAAMAAAAweg");
	this.shape_49.setTransform(0.2,-146.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#339933").s().p("AiNYsMAAAgxWIEbAAMAAAAxWg");
	this.shape_50.setTransform(0.2,-149.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#339933").s().p("AiNZKMAAAgySIEbAAMAAAAySg");
	this.shape_51.setTransform(0.2,-152.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#339933").s().p("AiNZnMAAAgzNIEbAAMAAAAzNg");
	this.shape_52.setTransform(0.2,-155.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#339933").s().p("AiNaFMAAAg0KIEbAAMAAAA0Kg");
	this.shape_53.setTransform(0.2,-158);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#339933").s().p("AiNajMAAAg1GIEbAAMAAAA1Gg");
	this.shape_54.setTransform(0.2,-160.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#339933").s().p("AiNbCMAAAg2DIEbAAMAAAA2Dg");
	this.shape_55.setTransform(0.2,-163.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.1,-1.7,28.5,10.3);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ahj7GIDHAAQAyAAAAAyMAAAA0pQAAAygyAAIjHAAQgyAAAAgyMAAAg0pQAAgyAyAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-174.5,32,349.1);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EhDDgfdMCGHAAAQDIAAAADIMAAAA4rQAADIjIAAMiGHAAAQjIAAAAjIMAAAg4rQAAjIDIAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhDDAfeQjIgBAAjHMAAAg4rQAAjHDIgBMCGHAAAQDIABAADHMAAAA4rQAADHjIABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450.2,-202.4,900.5,404.8);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhamA9aMAAAh6zMC1NAAAMAAAB6zg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-580,-393,1160,786);


// stage content:
(lib.pag0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var root=this;
		var num=40;
		
		root.mal.alpha=0;
		root.bien.alpha=0;
		
		createjs.Sound.muted = true;
		createjs.Sound.stop();
		
		var usados=new Array();
		var longi=0;
		
		var co=0;
		var num=0;
		function repetido(num){
			var repe=false;
			var i;
			for (i=0; i<usados.length; i++) { 
				if (num == usados[i]) {
				   repe = true; 
				} 
			}
			return repe;
		}
		function aleatorio(min,max) {
			if(usados.length!=(max-min+1)){
				var repe=true;
				while(repe!=false){
					var num=Math.floor(Math.random() * (max - min+1)) + min;
					repe=repetido(num);
				}
				usados.push(num);
				return num;
			}else{
				return 0;
			} 
		}
		function desorden(){
			
			 txt1=aleatorio(100,800);
			 txt2=aleatorio(1,50);
			root.aqui.text=txt1+" : "+txt2;
			co++;
		}
		desorden();
		
		
		var txt1,txt2;
		var alto=10;
		
		
		root.exacta.addEventListener("click",botonExacta);
		root.inexacta.addEventListener("click",botonInexacta);
		
		var cont=0;
		var a,b=0;
		function botonExacta(event) {
			createjs.Sound.muted = false;
			var res=txt1% txt2
			if(res==0){
				
				
				playSound("muybien");
				root.bien.alpha=1;
				setTimeout(function(){
						   root.bien.alpha=0;},450);
				if(cont<11){
					if(a==0){
						num=num+1;
						
					}
					a=0;	
					cont++;
					turno(cont);
				    setTimeout(desorden,400);
				}else{
					//alert("muy bien");
				}
				
		
			}else{
				a=1;
				playSound("malpepo");
				root.mal.alpha=1;
				setTimeout(function(){
						   root.mal.alpha=0;},450);
				if(cont>0){
					cont--;
					turno(cont);
				}
			}
			
		}
		function botonInexacta(event) {
			createjs.Sound.muted = false;
			var res=txt1% txt2
			if(res!=0){
				
				playSound("muybien");
				root.bien.alpha=1;
				setTimeout(function(){
						   root.bien.alpha=0;},450);
				if(cont<11){
					if(b==0){
						num++;
					}
					b=0;
					cont++;
					turno(cont);
					setTimeout(desorden,400);
				}else{
					//alert("muy bien");
				}
				
		
			}else{
				b=1;
				playSound("malpepo");
				root.mal.alpha=1;
				setTimeout(function(){
						   root.mal.alpha=0;},450);
				if(cont>0){
					cont--;
					turno(cont);
				}
			}
			
			
		}
		function turno(dato){
			switch(dato) {
		    case 0:
		        root.barra.gotoAndPlay(0);
		        break;
		    case 1:
		        root.barra.gotoAndPlay(2);
		        break;
		    case 2:
		        root.barra.gotoAndPlay(7);
		        break;
			case 3:
		        root.barra.gotoAndPlay(13);
		        break;
		    case 4:
		        root.barra.gotoAndPlay(19);
		        break;
			case 5:
		        root.barra.gotoAndPlay(25);
		        break;
		    case 6:
		        root.barra.gotoAndPlay(31);
		        break;
			case 7:
		        root.barra.gotoAndPlay(37);
		        break;
			case 8:
		        root.barra.gotoAndPlay(43);
		        break;
			case 9:
		        root.barra.gotoAndPlay(49);
		        break;
			case 10:
		        root.barra.gotoAndPlay(55);
		        break;
			case 11:
		        root.barra.gotoAndPlay(61);
			    setTimeout(function(){
						   root.gotoAndStop(1);
					       root.correcta.text="Has acertado "+num+" de "+(co-1);},450);
			 
			    
		        break;
		    
			}
		}
		//var barra=new lib.barrita();
		
		//root.barra.setBounds(0,578.25,29.8,500);
		//root.addChild(barra);
		root.barra.setBounds(15,50,400,100);
		
			
		//stage = new createjs.Stage("demoCanvas");
		    //Create a Shape DisplayObject.
		//    circle = new createjs.Shape();
		//    circle.graphics.beginFill("red").drawRect(0, 0, 40,40);
		    //Set position of Shape instance.
		    
		    //Add Shape instance to stage display list.
		//    stage.addChild(circle);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Capa 8
	this.bien = new lib.Símbolo9();
	this.bien.setTransform(903.6,268.5);

	this.mal = new lib.Símbolo8();
	this.mal.setTransform(903.4,267.2,1.208,1.207,0,0,0,0,-0.1);

	this.aqui = new cjs.Text("", "140px 'Calibri Light'");
	this.aqui.name = "aqui";
	this.aqui.textAlign = "center";
	this.aqui.lineHeight = 173;
	this.aqui.lineWidth = 780;
	this.aqui.setTransform(549.8,331);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.aqui},{t:this.mal},{t:this.bien}]}).to({state:[]},1).wait(1));

	// botones
	this.inexacta = new lib.Símbolo6();
	this.inexacta.setTransform(699.1,699.5);
	new cjs.ButtonHelper(this.inexacta, 0, 1, 1);

	this.exacta = new lib.Símbolo5();
	this.exacta.setTransform(461,699.5);
	new cjs.ButtonHelper(this.exacta, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.exacta},{t:this.inexacta}]}).to({state:[]},1).wait(1));

	// Barrapuntaje
	this.instance = new lib.Símbolo3();
	this.instance.setTransform(961.4,415);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// Capa 5
	this.barra = new lib.barrita();
	this.barra.setTransform(961.3,578.9);

	this.timeline.addTween(cjs.Tween.get(this.barra).to({_off:true},1).wait(1));

	// Capa 4
	this.instance_1 = new lib.Símbolo2();
	this.instance_1.setTransform(585.5,424.3,0.943,1,0,0,0,1.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	// titulo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B8B30E").s().p("AhPC/IgCgCIAAgCIAAgCIACgUIACgcIACgrIADhBIAFhdQADhBATgeQAUgfAlABIAFAAIAFAAQASABAMAIQAMAJAFAOQAHAOACAQQADAPABAPIAAACIAAAJIAAAWIAAAtIgBBLIgCB3IgDACIgTAAIgKAAIgNgCIAAgMIgCgjIgEhEIgEAAIgYAAIgeABIgBARIAAAWIABAjIACA0IgBACIgBACgAgKh3QgIALgDAbIgBAaIgBAWIAAAcIAAAHIAAALIABAHIAAACIAMAAIAjABIACgBIAAgCIAFhZIAAgIQAAgXgIgNQgHgOgKgCIgDAAQgGAAgIAKg");
	this.shape.setTransform(510.4,50.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B8B30E").s().p("AgRCyIgDgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBhJgEhJIgEiPQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgFAAIgPABQgHACgHAAIgEgBIgCgDIAAg5ICVAAIAAA/Ig0AAIgBACIAAAdIAGB9QADA/AAA/IAAAGQgCADgDABg");
	this.shape_1.setTransform(491.8,50.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B8B30E").s().p("AgSCcQgcgTgPgfQgQgfgFglQgGgmAFgjQAFgkAPggQAOgfAXgUQAYgSAdgCQAIAAAIACIAPAGIABABIABAAIAAAuIgJAAQgXABgPAPQgOAOgIAYQgJAYgBAcQgBAaAGAbQAFAbAMATQANAVAUAIQAMAEAMABIAagBIAAAvIgCABIgDABQgJAEgIACQgJABgKAAQgmgBgZgSg");
	this.shape_2.setTransform(472.9,49.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B8B30E").s().p("AhPC/IgCgCIAAgCIAAgCIACgUIACgcIACgrIADhBIAFhdQADhBATgeQAUgfAlABIAFAAIAFAAQASABAMAIQAMAJAFAOQAHAOACAQQADAPABAPIAAACIAAAJIAAAWIAAAtIgBBLIgCB3IgDACIgSAAIgLAAIgNgCIAAgMIgCgjIgEhEIgEAAIgYAAIgeABIAAARIAAAWIAAAjIACA0IgBACIgBACgAgKh3QgIALgDAbIgBAaIgBAWIAAAcIAAAHIAAALIABAHIAAACIAMAAIAjABIACgBIAAgCIAFhZIAAgIQAAgXgIgNQgHgOgKgCIgDAAQgGAAgIAKg");
	this.shape_3.setTransform(453.2,50.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B8B30E").s().p("Ag2CkIgGgCIgHgCIgGgCIgIgFIgLgGQgFgDAAgDQAAgLAJgRQAIgSALgVIAVgmQAKgRACgKIAAgBIgBgCIhXhhIgBgEIgBgDQABgDAGgHIAPgQQAIgIAGgEIAEADIAEAFIApArIApAqIA2htIAEgIQACgDAEAAIACABIACAAIAGACIAJAFIAHADQAEACAEADQAFADAAAFIAAACQgBAEgIAOIgTAiIgXApIgTAlIAFAHIAGAGIAbAcIAyA3IAEAEQACACAAADIAAABIgBAAIgLAPQgHAJgIAJQgIAIgFABIgCAAIgCgBIgFgFIgIgJIgFgFIgegkIgcgjIgBgBIgBgBIg5B0g");
	this.shape_4.setTransform(429.4,50.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B8B30E").s().p("AgwC5QgEgBgCgEQgCgFAAgFIgBgHIgXlJIAAgJIBqgIIAFgBIAGABQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIADAVQACAKAAALIAAAGQgCACgJABIgXACIgWACIgPACIAAAFIAAANIABAcIACAhQABARADALQACALADAAIA/gJIABAAIABgBIAKAvIhLAKIAAAGQAAASABASIADAjIABAHQABAEAEAAIALgBIAWgEIAXgDIAQgBQAEAAABACQABADAAADIADAMIACAOIABANIAAADQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgYACIgjAEQgUADgjACIgDABIgFAAIgDAAIgBABIgBAAg");
	this.shape_5.setTransform(405.8,50.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B8B30E").s().p("AhaCyIgBgHIgCgQIgCgTIgBgPIgRj1IgBgMIgBgUIgBgPIAAgEIABgCIABgBIApADIAPABIADAAQAFAAAJAQQAKAQAMAZIAYA4IAaA6IAXAxIACgWIABgpIABg1IACgzIADgnQADgPADAAIAQAAQALAAAUAEIABADIAAADIAAABIgCASIgBAbIgBAuIAABJIgBBwIAAAfIAAALIgBAMIAAAGIgCABIgTABQgKAAgLgCIiAj6IgBAAIAAABIAAAHIACAQIAEAkIAIBGIAMB3IAAAFQgCACgEAAIgQAAIggABg");
	this.shape_6.setTransform(383.1,49.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B8B30E").s().p("AgPCoQgDgKgDgaIgFg7IgEhIIgDhGIgDg/IAAgHIAAgJIACgJQADgFANgCQAOgCAVgBQAFABACAEIACAJQABgHABAMIACAoIACA/IACBIIACBIIABA7IAAAGIgCACIgFAAIgIABIgSABQgJgBgIABg");
	this.shape_7.setTransform(364.9,50.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B8B30E").s().p("AgwC5QgEgBgCgEQgCgFAAgFIgBgHIgXlJIAAgJIBqgIIAFgBIAGABQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIADAVQACAKAAALIAAAGQgCACgJABIgXACIgWACIgPACIAAAFIAAANIABAcIACAhQABARADALQACALADAAIA/gJIABAAIABgBIAKAvIhLAKIAAAGQAAASABASIADAjIABAHQABAEAEAAIALgBIAWgEIAXgDIAQgBQAEAAABACQABADAAADIADAMIACAOIABANIAAADQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgYACIgjAEQgUADgjACIgDABIgFAAIgDAAIgBABIgBAAg");
	this.shape_8.setTransform(336.4,50.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B8B30E").s().p("AhPC/IgCgCIAAgCIAAgCIACgUIACgcIACgrIAEhBIAEhdQADhBAUgeQATgfAlABIAFAAIAFAAQATABALAIQAMAJAFAOQAHAOACAQQADAPABAPIAAACIAAAJIAAAWIAAAtIgBBLIgCB3IgDACIgTAAIgKAAIgMgCIgBgMIgCgjIgEhEIgEAAIgYAAIgeABIgBARIAAAWIABAjIACA0IgBACIgBACgAgKh3QgIALgDAbIgBAaIgBAWIAAAcIAAAHIAAALIAAAHIABACIAMAAIAkABIABgBIAAgCIAFhZIAAgIQAAgXgIgNQgHgOgKgCIgDAAQgGAAgIAKg");
	this.shape_9.setTransform(303.5,50.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B8B30E").s().p("AgRCyIgEgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBhJgEhJIgEiPQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgFAAIgPABQgHACgHAAIgEgBIgCgDIAAg5ICVAAIAAA/Ig0AAIgBACIAAAdIAGB9QADA/AAA/IAAAGQgCADgDABg");
	this.shape_10.setTransform(284.9,50.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B8B30E").s().p("AgSCcQgcgTgPgfQgQgfgFglQgGgmAFgjQAFgkAPggQAOgfAXgUQAYgSAdgCQAIAAAIACIAPAGIABABIABAAIAAAuIgJAAQgXABgPAPQgOAOgIAYQgJAYgBAcQgBAaAGAbQAFAbAMATQANAVAUAIQAMAEAMABIAagBIAAAvIgCABIgDABQgJAEgIACQgJABgKAAQgmgBgZgSg");
	this.shape_11.setTransform(266,49.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B8B30E").s().p("AhPC/IgCgCIAAgCIAAgCIACgUIACgcIACgrIAEhBIAEhdQADhBAUgeQATgfAlABIAFAAIAFAAQATABALAIQAMAJAFAOQAHAOACAQQADAPABAPIAAACIAAAJIAAAWIAAAtIgBBLIgCB3IgDACIgTAAIgKAAIgMgCIgBgMIgCgjIgEhEIgEAAIgYAAIgeABIgBARIAAAWIABAjIACA0IgBACIgBACgAgKh3QgIALgDAbIgBAaIgBAWIAAAcIAAAHIAAALIAAAHIABACIAMAAIAkABIABgBIAAgCIAFhZIAAgIQAAgXgIgNQgHgOgKgCIgDAAQgGAAgIAKg");
	this.shape_12.setTransform(246.3,50.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B8B30E").s().p("Ag2CkIgGgCIgHgCIgGgCIgIgFIgLgGQgFgDAAgDQAAgLAJgRQAIgSALgVIAVgmQAKgRACgKIAAgBIgBgCIhXhhIgBgEIgBgDQABgDAGgHIAPgQQAIgIAGgEIAEADIAEAFIApArIApAqIA2htIAEgIQACgDAEAAIACABIACAAIAGACIAJAFIAHADQAEACAEADQAFADAAAFIAAACQgBAEgIAOIgTAiIgXApIgTAlIAFAHIAGAGIAbAcIAyA3IAEAEQACACAAADIAAABIgBAAIgLAPQgHAJgIAJQgIAIgFABIgCAAIgCgBIgFgFIgIgJIgFgFIgegkIgcgjIgBgBIgBgBIg5B0g");
	this.shape_13.setTransform(222.5,50.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B8B30E").s().p("AgwC5QgEgBgCgEQgCgFAAgFIgBgHIgXlJIAAgJIBqgIIAFgBIAGABQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIADAVQACAKAAALIAAAGQgCACgJABIgXACIgWACIgPACIAAAFIAAANIABAcIACAhQABARADALQACALADAAIA/gJIABAAIABgBIAKAvIhLAKIAAAGQAAASABASIADAjIABAHQABAEAEAAIALgBIAWgEIAXgDIAQgBQAEAAABACQABADAAADIADAMIACAOIABANIAAADQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgYACIgjAEQgUADgjACIgDABIgFAAIgDAAIgBABIgBAAg");
	this.shape_14.setTransform(198.9,50.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B8B30E").s().p("AhaCyIgBgHIgCgQIgCgTIgBgPIgRj1IgBgMIgBgUIgBgPIAAgEIABgCIABgBIApADIAPABIADAAQAFAAAJAQQAKAQAMAZIAYA4IAaA6IAXAxIACgWIABgpIABg1IACgzIADgnQADgPADAAIAQAAQALAAAUAEIABADIAAADIAAABIgCASIgBAbIgBAuIAABJIgBBwIAAAfIAAALIgBAMIAAAGIgCABIgTABQgKAAgLgCIiAj6IgBAAIAAABIAAAHIACAQIAEAkIAIBGIAMB3IAAAFQgCACgEAAIgQAAIggABg");
	this.shape_15.setTransform(162.4,49.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B8B30E").s().p("AgpDuQgTgMgOgTQgOgVgEgWQgFgjgBgkQgBgjAFglQACgXAHgXQAGgXAMgVQAMgWAUgQQAKgJANgDQAMgDANAAQAbAAARAQQASAPAJAaQAKAbACAiQAEAfgCAmIgCAtQgCAZgGAZQgFAYgLAVQgLAVgSAMQgRANgaAAQgVgBgUgMgAgKg9QgOATgJAkQgJAiAAAwIAAAQQgBAXACAUQABATAGAPQAGAOAOAIQAMAGAIgEQAKgDAHgJQAIgJADgLIACgLIAFgiIAHhHIAAgIQgBg6gJgcQgJgcgOgCIgCAAQgMAAgLASgAgRibIgOgDIgNgDQgFgCAAgCIAAgCIABgBIAEgFIAFgHIAFgGIAUgXIARgYIAHgMQAEgFAHAAQAFAAAHAEQAGAEAFAGQAFAGAAAHQgBAHgGAJQgGAJgJAJIgRARQgJAJgDAGIgCACIgEABIgJgBg");
	this.shape_16.setTransform(138,44.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B8B30E").s().p("AgQCoQgDgKgCgaIgFg7IgEhIIgEhGIgCg/IAAgHIABgJIABgJQAEgFANgCQANgCAVgBQAFABACAEIACAJQABgHAAAMIACAoIADA/IADBIIABBIIABA7IAAAGIgCACIgFAAIgIABIgTABQgHgBgKABg");
	this.shape_17.setTransform(121.5,50.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B8B30E").s().p("AgxCiQgRgNgJgYIgBgCIgEgNQgCgHAAgHQAAgGAHgEQAHgCAGgBIAGgBIAKgBIAJgBIACAAIACAAIABACIAEARQADAKAFAIQAGAHAKABQAHAAAJgFQAJgFAGgIQAGgIAAgKQAAgZgMgTQgMgTgQgPIgjgbQgRgOgMgSQgMgRgBgYQABgVAKgUQAKgTATgNQASgMAZgBIAEABIAFACQANADAJAEQAIAEAHAHQAGAHAGANIADAJIABAHIgeAiIgBAAIgCABQgEgBgEgGIgJgOQgFgJgGgGQgFgGgKgBQgKAAgEAGQgEAGAAAKQAAASALAPQAMAPAPANQARAOARAQQASAOAMAVQANAVADAeQABAagLAXQgMAYgVAPQgVAOgaABQgcAAgQgOg");
	this.shape_18.setTransform(106.4,50.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B8B30E").s().p("AgQCoQgDgKgCgaIgFg7IgEhIIgEhGIgCg/IAAgHIAAgJIACgJQADgFANgCQAOgCAVgBQAFABACAEIACAJQABgHAAAMIACAoIADA/IACBIIACBIIABA7IAAAGIgCACIgFAAIgIABIgSABQgIgBgKABg");
	this.shape_19.setTransform(91.5,50.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B8B30E").s().p("AgTCrIgIgRQgDgJgHgYIgPg3IgRhDIgQhEIgMg5QgEgYgBgJIAAgGIAKgCIAQgCIAQgCIALAAIAIACQADABABADIAoDnIAmjUIABgIQABgDADgDIANAAIAVABIAWADIABACIAAACQAAAMgFAMQgDANgBALIgCATIgJA3IgQBRQgJAvgOA4IgDALQgBADgCABIgLACIgCAAIgCAAIgKABIgdAAg");
	this.shape_20.setTransform(74.7,50.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B8B30E").s().p("AgPCoQgDgKgDgaIgFg7IgEhIIgDhGIgDg/IAAgHIABgJIABgJQAEgFANgCQANgCAWgBQAEABACAEIADAJQAAgHABAMIABAoIADA/IADBIIABBIIABA7IAAAGIgCACIgFAAIgIABIgTABQgIgBgJABg");
	this.shape_21.setTransform(57.9,50.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B8B30E").s().p("AhcCzIAIlcIABgFQABgEACgBIAcgBQAcABAaAKQAcALAVASIABACIABABQAKAIAIAPQAHAOAFARQAFASACARQACAQAAAOQABAfgFAjQgEAhgNAdQgMAdgZATQgZATgmADIg9ABgAgahnIgDA3IgCA/IgBA/IgBAvQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIACABIACAAQAXgDALgLQANgLAHgRQAGgRACgTQADgTgBgSIAAgNQABgagEgYQgDgYgLgUQgKgUgTgQIgFgEIgGgCIgDAAIgCAgg");
	this.shape_22.setTransform(42.1,48.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Capa 10
	this.correcta = new cjs.Text("", "55px 'Calibri Light'", "#FFFFFF");
	this.correcta.name = "correcta";
	this.correcta.textAlign = "center";
	this.correcta.lineHeight = 69;
	this.correcta.lineWidth = 814;
	this.correcta.setTransform(574.8,450.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhPHRQgQgRgBgfQAAgZAIgWQAIgXARgOQARgPAbgBQAaABARAUQAQASABAdQAAAWgHAWQgIAWgRAPQgOAPgaABQgegBgSgQgAgwEUQgMgCgJgEQgJgFAAgMQAAivAHisIANlcIADgMIABgJQAFgLAagEQAYgDAgAAIA2AAIAEACIAGACIAAAHIABAJQgBAcgDAjIgKBUIgRB+QgJBMgMBwQgLBwgPChIgUADIgaABIgHAAIgPgBg");
	this.shape_23.setTransform(820.3,346.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AkcFNIgIgJIAAgEIgBgHIAApzQABgJAGgDQAGgFAIgBIBsAAQAJACADAQQAEASAAAYIABAsQAAAVACAIQA9g6AxgbQAvgbAlgGQAkgJAYACQAzAAAjAcQAjAbATAsQATAsAEAvIAWGkIgBACIgCABIiAAFIgFgDIgDgCIgWk3QgNhZghghQggghgpALQgnAMgmAqQgnArgZA8QgZA6gCBCQABAzAEAyQADAyABAyIAAANQgcACgZABIg1ABg");
	this.shape_24.setTransform(773.8,359.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgwFNQhKgFgsgoQgrgogVg6QgVg6gIg8QgJg9AIhAQAIhBAdg6QAcg6A0gpQA0goBOgMQBjgPA3ATQA3ATAZA0QAaA1AKBWIAIAwIlfBPQgCAAgDAEQgEADgBADQgBADgBALQgBAMABAbQACAbAGAzQAHAlAeAPQAeAOAjgEQAcgGAegSIA7gkQAdgRAYgBQALAAAPANQAPAMAMAQQAMAQACAJIAAAHQgoA2gsAcQgsAbg1AIQgiAGgkAAQgWAAgYgCgAAjjdQgaAEgZALQgcALgSATQgNAMgNAZQgNAZgBAUIAAAFIALgCIACgBIADgBIAkgFIA7gLIBtgXIAAgBIgBgDIgEgVIgFgWIgDgMQgIgagSgEQgJgCgLAAQgLAAgNACg");
	this.shape_25.setTransform(710.7,360.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhlHlIgDgCIgBgCIgBgSIAAgZIgBgRIACgpIAFhmIAIiEIAIiFQAGg8AFgoQAFgnAGgBIAIAAIAhABIBRACQAIABACAFQACAGAAAFIgBAGIAAAGIgFBQQgEA9gKB2IgaEuQAAALgEAFQgDAFgLABQgZAAgcACIgMAAQgWAAgWgFgAgPkZQgVgGgPgMQgRgMgHgTIAAgSIgBgRQABgvAXggQAXggAfgJQAggKAeAQQAdARAOAxIAAAIIABALQAAAbgJAcQgJAbgTASQgTASgeABQgTAAgSgGg");
	this.shape_26.setTransform(666.1,342.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AizHuQgagCgZAAIgJAAIgIgFIgCgSQgJiYACiaIAEkuQABiYgLiYIABgXQABgMABgBIAHgEICLgLIAAH+QAkgnA0gUQAygSA2gDQBAAAApAbQApAcATAxQATAxAABDQAABJgXA/QgWA9gwApQgvAohLAGQgwABgkgIQglgHgpgZIAAAsQAAAYgDAWQAAAEgEgBIgHAAIgaABIgZgBgAAgBdIgIABQgRAAgaAGQgbAHgWASQgWAUgBAlIAABlQAyAeAqgBQArAAAggXQAhgVASghQARghgBghQgCgggYgWQgYgWg0gBIgJABg");
	this.shape_27.setTransform(621.7,347.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AizF4QgegBgcgEQgJgGAAgNQgBgNABgHIAAgIIABgmQABgXAIgQQAIgRAUgBIA3ABIBFACIBfABQAwgBAagbQAZgaAFgqIAGgqQADgaABgWQABgWgCgHQgXAaglAOQgjAPgmAGQgnAGghAAQgeAAgkgGQgkgHghgOQgigPgVgYQgWgXgCgjIAAgKQABhIAMhHQAMhHAQhFIAGgWQAEgNACgCIAIgIIAlAAIAzAAQAXABAcADIABAKIACAMQAAAmgEAvQgDAvgGAuQgFAugGAjIgBAHIgBAGQABAeAZAOQAXAOAkgBQAhAAAkgOQAjgOAYgaQAYgaACgkIAAgJIANhsIAHg1IACgYQAMgHAdgDQAbgCAdAAIAsABIAJAGQACADAAAGQgCATgEApIgGBYIgHBcIgFBHIgCAfQgCAzgGA2QgGA2gRAwQgRAxgjAlQgiAlg9AQIhnAMQg1AGg2AAIgMAAQgYAAgYgCg");
	this.shape_28.setTransform(522.6,366.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AiAEMQhFgTghgjQghgigJgzQgKgzABhEQACgwAGg5IALhsQAFgzAAgcIAEgFICQAAQAFABAAAFIgBAGQAABFgGBEQgGBEgBBFQgBBCAcAkQAcAkBIAAIAEAAQAyAAAagSQAagSAKgjQAJgjAAgxQgBgzgDg0QgDgzAAg0QAAgKAPgJQAPgHAVgGIAogJQATgDAJAAIAMAAQAHAKAFAbQAEAbADAiQADAiABAdIABAoIAAArQABA3gGAwQgGAvgVAqQgWAqguAnQhGAlhSACIgKAAQhKAAhKgUg");
	this.shape_29.setTransform(457.6,357.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AlYHYQgFgKAAgKIAChYIAEiOQAChRAFhbQAEhaAIhYQAHhZAKhLQAJhMANgxQAOgyAQgNIANgBIALAAQA5AAAiAiQAiAhATA1QATAzALA4IAVBlIADARQAAAGAEAIIAHgIIAGgJQAVguAYgrQAYgsAbgsQAUglAZgkQAagkAigYQAjgXAugCQAUACANAQQAMAQAGAZQAGAYADAXIADAlQALC7AEC6QAGC7gBC6IAAAMQgFAJgRAFQgSAEgXACQgWACgUgBQgUgBgJgCIgHgEIAAgOIgDhqIgEiNIgEiZIgFiKIgFhnQg2B9ggBGQghBFgRAeQgRAfgHAIQgGAIgBgCIgDAFIhRgFQgdgtgVgxIgrhhIgLgXQgEgKgHgKIgIEbQgECOACCOIgBAIIgCAHQgCACgTABIgqAEIgtACIgcABQgLgBgFgKg");
	this.shape_30.setTransform(387.2,346.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhaHgIgFgCIAAgIIgBgHQgBgdAFgjIAKhUIAQh+QAJhMAMhxQAMhvAOihIAVgDIAagBIAVABQAMABAJAFQAKAFAAALQAACvgHCtIgOFcIgCALIgBAKQgGAMgaACQgYAEgeAAQgggBgXABIgFgCgAgWlQQgSgTABgdQAAgVAHgXQAIgWARgPQAOgPAagBQAeAAARARQARARAAAfQABAYgIAXQgJAXgQAOQgSAPgaABQgagCgRgSg");
	this.shape_31.setTransform(335.2,346.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B8B30E").s().p("Eg7sAkqQiGAAhfhfQheheAAiGMAAAg/NQAAiGBeheQBfhfCGAAMB3ZAAAQCGAABfBfQBeBeAACGMAAAA/NQAACGheBeQhfBfiGAAg");
	this.shape_32.setTransform(579.7,404.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.correcta}]},1).wait(1));

	// muybien
	this.instance_2 = new lib.tierra();
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1));

	// Capa 3
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgOAQQgDgEAAgMQgBgKAFgEQAEgFAJAAQAKAAAFAEQADAEAAALQAAAMgDAEQgFAEgKAAQgJAAgFgEg");
	this.shape_33.setTransform(701.5,125.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgVBVIgNgDIgLgFIgFgDQgCgCgCgEIgBgIIABgFIABgFIACgCIACAAQABAAAEACIAKAGQAFADAIACQAIACAJAAQAGAAAFgBQAHgCAEgDQAFgDACgFQACgFAAgGQAAgHgEgEQgDgFgGgDQgFgEgHgDIgNgGIgOgGQgIgCgFgFQgGgGgDgIQgEgHABgLQAAgJADgJQAEgIAHgGQAHgHALgEQALgDAMgBIANABIAMADIAIAEIAFADIADACIABADIABADIAAAFIAAAFIgBAEIgCACIgCAAIgEgCIgIgEIgLgEQgHgCgIAAQgFAAgGACQgFABgEADQgEADgCAEQgBAFAAAFQgBAGAEAFQADAFAGADIALAHIAOAGIAQAGQAGACAGAFQAGAGADAHQAEAIAAAKQgBAMgEAJQgFAJgHAHQgJAHgLADQgMAEgLgBQgJAAgIgBg");
	this.shape_34.setTransform(689.8,119);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgfBTQgKgDgHgGQgIgHgEgJQgDgIAAgMQgBgNAGgKQAFgKALgFQAKgGAPgDQAPgDAQgBIAWAAIAAgLQgBgKgBgHQgCgHgFgEQgEgFgGgCQgIgDgJAAQgJAAgIADQgJACgHAEIgLAFQgDACgDAAIgCgBIgCgCIgBgDIAAgFIAAgHQAAgDADgBIAIgGIANgFIARgFQAJgCAHAAQARABAMADQAMAEAIAIQAHAHADALQAEALgBAPIAABpQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgDABIgIABIgHgBIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIAAgQQgKALgMAGQgNAHgMgBQgNABgKgEgAgIAJQgIACgHADQgFAEgDAGQgCAFgBAIQAAAMAJAIQAHAHAOAAQAKgBAKgFQAJgGALgMIAAgiIgZAAQgLABgIACg");
	this.shape_35.setTransform(673.7,119);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AABBnQgHgDgFgHQgGgGgCgKQgDgLAAgNIAAhbIgWAAQgDAAgCgDQgBgCAAgHIAAgFIABgEIADgCIACgBIAWAAIAAgmIAAgCIADgCIAEgBIAHAAIAIAAIACABIACACIABACIAAAmIAoAAIADABIACACIABAEIAAAFQAAAHgBACQgCADgDAAIgoAAIAABWQAAARAEAIQAFAIANAAIAHAAIAFgCIAFgCIADAAIACAAIABACIABADIAAAFIAAAIQgBABAAABQAAAAAAABQAAAAgBABQAAAAgBABIgEACIgGACIgIACIgIAAQgNAAgIgDg");
	this.shape_36.setTransform(659.3,116.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgVBRQgNgGgJgKQgJgLgEgQQgFgQAAgUQAAgWAGgRQAFgQALgLQAJgLAOgFQANgFAOgBIAPACIANAEQAGACAEADIAHAFIADADIABADIABAEIAAAFQAAAIgBACQgBABAAAAQAAABgBAAQAAAAgBAAQgBABAAAAQgDgBgDgCIgJgGQgFgEgIgDQgHgDgKAAQgTAAgLARQgMAQAAAcQAAAPADAMQADALAGAIQAFAIAJADQAGAEAKAAQAKAAAIgDQAHgDAGgEIAJgGQAEgEACAAIACABIACADIABADIAAAHIAAAFIgBAEIgBACIgDADIgHAGIgMAGIgOAEIgQABQgPAAgOgFg");
	this.shape_37.setTransform(646.1,119);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgfBTQgKgDgHgGQgIgHgDgJQgFgIAAgMQAAgNAGgKQAFgKALgFQAKgGAOgDQAQgDAQgBIAWAAIAAgLQAAgKgCgHQgCgHgEgEQgFgFgHgCQgHgDgJAAQgJAAgJADQgIACgGAEIgLAFQgEACgDAAIgCgBIgCgCIgBgDIgBgFIABgHQABgDACgBIAIgGIAOgFIAQgFQAJgCAHAAQARABAMADQAMAEAHAIQAIAHADALQADALABAPIAABpQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAIgEABIgHABIgHgBIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIAAgQQgKALgNAGQgMAHgNgBQgMABgKgEgAgIAJQgJACgFADQgGAEgDAGQgCAFAAAIQAAAMAIAIQAHAHAOAAQAKgBAJgFQAKgGALgMIAAgiIgZAAQgLABgIACg");
	this.shape_38.setTransform(629.2,119);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAuBUIgFgBIgDgBIgBgDIglg+IglA+IgCADIgDABIgFABIgHAAIgJgBIgEgBQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIACgFIAxhLIgvhLIgBgDQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQABgCAEAAIAJAAIAIAAIAFABIACACIACACIAiA6IAkg6IACgCIACgCIAFgBIAHAAIAIAAIAFABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIgCADIguBKIAxBMIABAFQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgFABIgJABIgIAAg");
	this.shape_39.setTransform(613.2,119);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgaBRQgPgFgKgLQgKgLgFgQQgFgQAAgWQAAgSAFgQQAFgRAKgLQAKgMAOgFQAOgHAQAAQASAAANAHQANAGAJAJQAIAKAEAOQAEAOAAAPIAAAGQAAAFgDACQgEADgEAAIhmAAQAAAOACAKQADALAGAHQAGAIAKADQAKAFAMAAQAMAAAJgCIAPgEIAKgEIAHgCIACAAIABADIABADIAAAFIAAAEIAAADIgBADIgCACIgFACIgNAFIgRAEQgKABgLAAQgSABgOgGgAgQg7QgIAFgGAGQgFAGgDAKQgDAJAAAJIBUAAQAAgXgKgNQgLgNgVAAQgJAAgIAEg");
	this.shape_40.setTransform(596.5,119);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAuBVIgFgBIgBgCIgBgCIAAhbQAAgNgCgJQgDgIgDgGQgEgGgHgDQgHgDgIAAQgJAAgKAIQgLAHgNAPIAABtIAAACIgCACIgFABIgHAAIgHAAIgFgBIgCgCIAAgCIAAicIAAgDIACgBIAEgBIAGgBIAHABIAEABIACABIABADIAAAVQANgPAOgHQAMgHAMAAQAQAAALAFQAKAFAHAJQAHAJADANQACALAAARIAABfIAAACIgCACIgFABIgHAAIgHAAg");
	this.shape_41.setTransform(578.2,118.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgFB0IgFgBIgCgBIgBgDIAAicIABgCIACgCIAFgBIAFAAIAHAAIAEABIACACIABACIAACcIgBADIgCABIgEABIgHABIgFgBgAgNhUQgDgEAAgKQAAgKADgEQAEgEAJAAQAKAAAEAEQADAEAAAKQAAAKgDAEQgEADgKAAQgJAAgEgDg");
	this.shape_42.setTransform(564.6,115.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgjBRQgOgHgKgKQgJgMgFgPQgFgQAAgUQAAgRAGgQQAEgRALgLQAJgMAPgHQAQgGASgBQATAAAPAHQAOAFAKALQAKALAFAQQAEAQABATQAAASgGAQQgFARgJAMQgLALgPAHQgQAHgRgBQgUAAgPgFgAgUg5QgKAFgGAJQgGAHgCAMQgDALAAANQAAAMACALQACAMAGAJQAGAIAIAFQAKAFANAAQAMAAAKgFQAIgEAGgIQAHgJACgLQADgLABgOQAAgLgDgMQgDgLgFgIQgGgJgIgFQgKgFgOAAQgLAAgJAEg");
	this.shape_43.setTransform(542.8,119);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgUBVIgOgDIgKgFIgHgDQgCgCgBgEIAAgIIAAgFIABgFIABgCIACAAQADAAADACIAKAGQAFADAIACQAIACAJAAQAGAAAFgBQAGgCAFgDQAEgDADgFQACgFAAgGQAAgHgDgEQgEgFgFgDQgGgEgHgDIgMgGIgPgGQgHgCgGgFQgGgGgDgIQgEgHAAgLQAAgJAFgJQADgIAHgGQAHgHALgEQALgDANgBIAMABIALADIAJAEIAGADIACACIABADIAAADIAAAFIAAAFIgBAEIgBACIgCAAIgFgCIgHgEIgMgEQgGgCgIAAQgFAAgGACQgGABgDADQgEADgBAEQgCAFgBAFQAAAGAEAFQAEAFAFADIALAHIAPAGIAPAGQAGACAGAFQAGAGADAHQADAIAAAKQAAAMgDAJQgFAJgJAHQgIAHgLADQgMAEgMgBQgIAAgHgBg");
	this.shape_44.setTransform(518.1,119);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgfBTQgKgDgHgGQgIgHgDgJQgEgIgBgMQAAgNAGgKQAGgKAKgFQAKgGAPgDQAOgDARgBIAWAAIAAgLQAAgKgCgHQgCgHgEgEQgFgFgGgCQgIgDgJAAQgJAAgIADQgJACgGAEIgLAFQgEACgDAAIgCgBIgCgCIgBgDIgBgFIABgHQABgDACgBIAIgGIANgFIARgFQAJgCAHAAQARABAMADQAMAEAHAIQAIAHADALQADALABAPIAABpQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAIgEABIgHABIgHgBIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIAAgQQgKALgMAGQgNAHgMgBQgNABgKgEgAgIAJQgJACgFADQgGAEgDAGQgDAFABAIQgBAMAJAIQAHAHAOAAQAJgBAKgFQAKgGALgMIAAgiIgZAAQgLABgIACg");
	this.shape_45.setTransform(501.9,119);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AABBnQgHgDgGgHQgFgGgDgKQgCgLAAgNIAAhbIgWAAQgDAAgCgDQgBgCAAgHIAAgFIABgEIACgCIADgBIAWAAIAAgmIAAgCIACgCIAFgBIAHAAIAHAAIADABIACACIABACIAAAmIApAAIACABIACACIABAEIAAAFQAAAHgCACQgBADgCAAIgpAAIAABWQAAARAFAIQAEAIANAAIAHAAIAFgCIAFgCIADAAIACAAIABACIABADIAAAFIgBAIQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBABIgEACIgGACIgIACIgIAAQgMAAgJgDg");
	this.shape_46.setTransform(487.5,116.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgVBRQgNgGgJgKQgJgLgEgQQgFgQAAgUQAAgWAGgRQAFgQALgLQAJgLAOgFQANgFAOgBIAPACIANAEQAGACAEADIAHAFIADADIABADIABAEIAAAFQAAAIgBACQgBABAAAAQAAABgBAAQgBAAAAAAQgBABAAAAQgDgBgDgCIgJgGQgFgEgIgDQgHgDgKAAQgTAAgLARQgMAQAAAcQAAAPADAMQADALAGAIQAFAIAJADQAGAEAKAAQAKAAAIgDQAHgDAGgEIAJgGQAEgEACAAIACABIACADIABADIAAAHIAAAFIgBAEIgBACIgDADIgHAGIgMAGIgOAEIgQABQgPAAgOgFg");
	this.shape_47.setTransform(474.4,119);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgfBTQgKgDgHgGQgHgHgFgJQgDgIgBgMQABgNAFgKQAGgKAKgFQAKgGAOgDQAPgDARgBIAVAAIAAgLQABgKgCgHQgCgHgFgEQgDgFgIgCQgGgDgKAAQgJAAgJADQgIACgHAEIgLAFQgEACgCAAIgDgBIgBgCIgBgDIAAgFIAAgHQAAgDADgBIAIgGIAOgFIAQgFQAJgCAHAAQARABAMADQAMAEAIAIQAHAHADALQADALAAAPIAABpQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgDABIgIABIgHgBIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgQQgLALgNAGQgMAHgNgBQgMABgKgEgAgIAJQgJACgFADQgGAEgDAGQgDAFAAAIQABAMAHAIQAIAHAOAAQAJgBALgFQAJgGAKgMIAAgiIgYAAQgLABgIACg");
	this.shape_48.setTransform(457.4,119);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAuBUIgFgBIgDgBIgBgDIglg+IglA+IgCADIgDABIgFABIgHAAIgJgBIgEgBQgBAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAIACgFIAxhLIgvhLIgBgDQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQABgCAEAAIAJAAIAIAAIAFABIACACIACACIAiA6IAkg6IACgCIACgCIAFgBIAHAAIAIAAIAFABQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABIgCADIguBKIAxBMIABAFQAAAAAAAAQAAABgBAAQAAAAAAAAQAAABgBAAIgFABIgJABIgIAAg");
	this.shape_49.setTransform(441.5,119);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgaBRQgPgFgKgLQgKgLgFgQQgFgQAAgWQAAgSAFgQQAFgRAKgLQAKgMAOgFQAOgHAQAAQASAAANAHQANAGAJAJQAIAKAEAOQAEAOAAAPIAAAGQAAAFgDACQgEADgEAAIhmAAQAAAOACAKQADALAGAHQAGAIAKADQAKAFAMAAQAMAAAJgCIAPgEIAKgEIAHgCIACAAIABADIABADIAAAFIAAAEIAAADIgBADIgCACIgFACIgNAFIgRAEQgKABgLAAQgSABgOgGgAgQg7QgIAFgGAGQgFAGgDAKQgDAJAAAJIBUAAQAAgXgKgNQgLgNgVAAQgJAAgIAEg");
	this.shape_50.setTransform(424.7,119);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAuBVIgFgBIgCgCIAAgCIAAhbQAAgNgCgJQgCgIgFgGQgDgGgHgDQgHgDgIAAQgJAAgKAIQgMAHgMAPIAABtIgBACIgBACIgFABIgHAAIgHAAIgFgBIgCgCIgBgCIAAicIABgDIACgBIAEgBIAGgBIAHABIAEABIACABIABADIAAAVQANgPAOgHQAMgHAMAAQAQAAALAFQALAFAGAJQAHAJADANQADALgBARIAABfIAAACIgCACIgFABIgHAAIgHAAg");
	this.shape_51.setTransform(398.3,118.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgjBRQgOgHgJgKQgKgMgFgPQgFgQABgUQAAgRAEgQQAGgRAKgLQAKgMAPgHQAPgGASgBQAUAAAOAHQAOAFAKALQAKALAFAQQAFAQgBATQAAASgEAQQgGARgKAMQgKALgPAHQgPAHgTgBQgTAAgPgFgAgUg5QgKAFgGAJQgGAHgDAMQgCALgBANQABAMACALQACAMAGAJQAFAIAKAFQAJAFANAAQAMAAAKgFQAJgEAGgIQAGgJADgLQADgLAAgOQgBgLgCgMQgCgLgGgIQgFgJgKgFQgJgFgOAAQgLAAgJAEg");
	this.shape_52.setTransform(379.3,119);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgUBVIgOgDIgKgFIgHgDQgBgCgBgEIgBgIIAAgFIABgFIABgCIACAAQACAAAEACIAKAGQAFADAIACQAIACAJAAQAFAAAHgBQAFgCAFgDQAEgDADgFQACgFAAgGQAAgHgDgEQgEgFgFgDQgGgEgHgDIgMgGIgPgGQgHgCgGgFQgFgGgEgIQgDgHgBgLQAAgJAFgJQADgIAHgGQAHgHALgEQALgDANgBIAMABIALADIAJAEIAGADIACACIABADIAAADIAAAFIAAAFIgBAEIgBACIgCAAIgFgCIgHgEIgMgEQgGgCgIAAQgFAAgGACQgGABgDADQgEADgBAEQgDAFAAAFQAAAGAEAFQADAFAGADIALAHIAPAGIAOAGQAIACAFAFQAGAGAEAHQACAIAAAKQAAAMgDAJQgGAJgIAHQgIAHgLADQgMAEgMgBQgIAAgHgBg");
	this.shape_53.setTransform(362.7,119);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgVBVIgNgDIgKgFIgHgDQgBgCgBgEIgBgIIAAgFIABgFIACgCIABAAQACAAAFACIAJAGQAFADAIACQAHACAKAAQAFAAAHgBQAFgCAFgDQAFgDACgFQACgFAAgGQAAgHgEgEQgDgFgGgDQgFgEgHgDIgNgGIgOgGQgHgCgGgFQgGgGgDgIQgDgHgBgLQAAgJAEgJQAEgIAHgGQAHgHALgEQALgDAMgBIANABIALADIAJAEIAGADIACACIABADIAAADIAAAFIAAAFIgBAEIgBACIgCAAIgFgCIgHgEIgMgEQgGgCgIAAQgGAAgFACQgFABgEADQgEADgCAEQgCAFAAAFQABAGADAFQAEAFAFADIALAHIAPAGIAOAGQAIACAFAFQAGAGAEAHQACAIAAAKQAAAMgDAJQgFAJgJAHQgIAHgLADQgLAEgNgBQgIAAgIgBg");
	this.shape_54.setTransform(340.5,119);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgaBRQgPgFgKgLQgKgLgFgQQgFgQAAgWQAAgSAFgQQAFgRAKgLQAKgMAOgFQAOgHAQAAQASAAANAHQANAGAJAJQAIAKAEAOQAEAOAAAPIAAAGQAAAFgDACQgEADgEAAIhmAAQAAAOACAKQADALAGAHQAGAIAKADQAKAFAMAAQAMAAAJgCIAPgEIAKgEIAHgCIACAAIABADIABADIAAAFIAAAEIAAADIgBADIgCACIgFACIgNAFIgRAEQgKABgLAAQgSABgOgGgAgQg7QgIAFgGAGQgFAGgDAKQgDAJAAAJIBUAAQAAgXgKgNQgLgNgVAAQgJAAgIAEg");
	this.shape_55.setTransform(324.5,119);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAuBVIgEgBIgCgCIgBgCIAAhbQgBgNgCgJQgCgIgDgGQgFgGgGgDQgGgDgJAAQgJAAgLAIQgKAHgMAPIAABtIgBACIgCACIgFABIgHAAIgHAAIgFgBIgCgCIAAgCIAAicIAAgDIACgBIAEgBIAGgBIAHABIAEABIACABIABADIAAAVQANgPAOgHQANgHALAAQAQAAAKAFQALAFAHAJQAHAJADANQACALABARIAABfIgBACIgDACIgEABIgHAAIgHAAg");
	this.shape_56.setTransform(306.2,118.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgjBRQgOgHgKgKQgJgMgFgPQgFgQAAgUQABgRAFgQQAEgRALgLQAJgMAPgHQAQgGASgBQATAAAPAHQAPAFAJALQAKALAFAQQAEAQABATQAAASgGAQQgFARgJAMQgLALgPAHQgQAHgRgBQgUAAgPgFgAgUg5QgKAFgGAJQgGAHgCAMQgDALAAANQAAAMACALQACAMAGAJQAGAIAIAFQAKAFANAAQAMAAAKgFQAIgEAGgIQAHgJACgLQADgLABgOQAAgLgDgMQgDgLgFgIQgGgJgIgFQgKgFgOAAQgLAAgJAEg");
	this.shape_57.setTransform(287.2,119);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgFB0IgFgBIgCgBIgBgDIAAicIABgCIACgCIAFgBIAFAAIAHAAIAEABIACACIABACIAACcIgBADIgCABIgEABIgHABIgFgBgAgNhUQgDgEAAgKQAAgKADgEQAEgEAJAAQAKAAAEAEQADAEAAAKQAAAKgDAEQgEADgKAAQgJAAgEgDg");
	this.shape_58.setTransform(273.6,115.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgUBVIgOgDIgKgFIgHgDQgCgCAAgEIgBgIIAAgFIABgFIABgCIACAAQACAAAFACIAJAGQAFADAIACQAIACAJAAQAFAAAHgBQAFgCAFgDQAEgDADgFQACgFAAgGQAAgHgDgEQgEgFgFgDQgGgEgHgDIgMgGIgPgGQgHgCgGgFQgFgGgEgIQgDgHgBgLQAAgJAFgJQADgIAHgGQAHgHALgEQALgDANgBIAMABIALADIAJAEIAGADIACACIABADIAAADIAAAFIAAAFIgBAEIgBACIgCAAIgFgCIgHgEIgMgEQgGgCgIAAQgFAAgGACQgGABgDADQgEADgBAEQgDAFAAAFQAAAGAEAFQADAFAGADIALAHIAPAGIAOAGQAIACAFAFQAGAGAEAHQACAIAAAKQAAAMgDAJQgGAJgIAHQgIAHgLADQgMAEgMgBQgIAAgHgBg");
	this.shape_59.setTransform(262.4,119);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgFB0IgFgBIgCgBIgBgDIAAicIABgCIACgCIAFgBIAFAAIAHAAIAEABIACACIABACIAACcIgBADIgCABIgEABIgHABIgFgBgAgNhUQgDgEAAgKQAAgKADgEQAEgEAJAAQAKAAAEAEQADAEAAAKQAAAKgDAEQgEADgKAAQgJAAgEgDg");
	this.shape_60.setTransform(251.2,115.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAABUIgHgBIgGAAQAAgBgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgCgEIg2iTIgBgFIgBgBIAAgCIABgCIACgCIAFgBIAGAAIAJAAIAEABIADACIABADIArCAIABACIAAgCIAsiAIACgDIACgCIAFgBIAHAAIAHAAIAEABIACACIABACIAAACIAAABIgBACIgBADIg1CTIgCAEIgEACIgGABIgIAAg");
	this.shape_61.setTransform(239,119);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgFB0IgFgBIgCgBIgBgDIAAicIABgCIACgCIAFgBIAFAAIAHAAIAEABIACACIABACIAACcIgBADIgCABIgEABIgHABIgFgBgAgNhUQgDgEAAgKQAAgKADgEQAEgEAJAAQAKAAAEAEQADAEAAAKQAAAKgDAEQgEADgKAAQgJAAgEgDg");
	this.shape_62.setTransform(226.7,115.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AglB0QgMgGgIgMQgHgLgEgQQgDgQAAgRQAAgUAEgRQAEgOAJgMQAJgLAMgGQANgHARAAQAMAAALAGQAMAGALAMIAAhcIABgCIACgCIAFgBIAGAAIAIAAIAEABIACACIABACIAADoIAAADIgCACIgFAAIgFABIgHgBIgEAAIgCgCIgBgDIAAgVQgMAOgOAIQgNAHgOAAQgRAAgNgHgAgUgTQgHAGgFAIQgFAHgCALQgCALAAALQAAAMACALQABAMAFAJQAFAJAHAFQAIAFALAAIAJgBQAGgCAFgEQAGgDAGgGQAGgGAHgJIAAg/QgMgNgLgHQgLgIgKAAQgLAAgIAFg");
	this.shape_63.setTransform(212.7,115.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgUBVIgOgDIgLgFIgFgDQgCgCgCgEIgBgIIABgFIABgFIACgCIACAAQACAAADACIAKAGQAFADAIACQAIACAJAAQAGAAAFgBQAHgCAEgDQAFgDACgFQACgFAAgGQAAgHgEgEQgDgFgGgDQgFgEgHgDIgNgGIgOgGQgIgCgFgFQgGgGgDgIQgEgHABgLQAAgJADgJQAEgIAHgGQAHgHALgEQALgDAMgBIANABIAMADIAIAEIAFADIADACIABADIABADIAAAFIAAAFIgBAEIgCACIgCAAIgEgCIgIgEIgLgEQgHgCgIAAQgFAAgGACQgGABgDADQgEADgBAEQgCAFAAAFQgBAGAEAFQADAFAGADIALAHIAOAGIAQAGQAGACAGAFQAGAGADAHQAEAIAAAKQAAAMgFAJQgFAJgHAHQgJAHgLADQgMAEgLgBQgJAAgHgBg");
	this.shape_64.setTransform(188.5,119);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgfBTQgKgDgHgGQgHgHgFgJQgDgIAAgMQgBgNAGgKQAFgKALgFQAKgGAPgDQAPgDAQgBIAVAAIAAgLQAAgKgBgHQgCgHgFgEQgEgFgGgCQgIgDgJAAQgJAAgIADQgJACgHAEIgLAFQgDACgDAAIgDgBIgBgCIgBgDIAAgFIAAgHQAAgDADgBIAIgGIANgFIARgFQAJgCAHAAQARABAMADQAMAEAIAIQAHAHADALQAEALgBAPIAABpQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgDABIgIABIgHgBIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIAAgQQgKALgMAGQgNAHgMgBQgNABgKgEgAgIAJQgIACgHADQgFAEgDAGQgCAFgBAIQAAAMAIAIQAIAHAOAAQAKgBAKgFQAJgGAKgMIAAgiIgYAAQgLABgIACg");
	this.shape_65.setTransform(172.4,119);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgFB6IgFgBIgCgCIgBgCIAAjoIABgDQAAAAAAgBQAAAAAAAAQABAAAAgBQABAAAAAAIAFgBIAFgBIAGABIAFABIACACIABADIAADoIgBACIgCACIgFABIgGABIgFgBg");
	this.shape_66.setTransform(160.2,115.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgFB0IgFgBIgCgBIgBgDIAAicIABgCIACgCIAFgBIAFAAIAHAAIAEABIACACIABACIAACcIgBADIgCABIgEABIgHABIgFgBgAgNhUQgDgEAAgKQAAgKADgEQAEgEAJAAQAKAAAEAEQADAEAAAKQAAAKgDAEQgEADgKAAQgJAAgEgDg");
	this.shape_67.setTransform(143.7,115.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgUBVIgOgDIgLgFIgGgDQgCgCgBgEIAAgIIAAgFIABgFIABgCIADAAQACAAADACIAKAGQAFADAIACQAHACAKAAQAGAAAFgBQAGgCAFgDQAEgDADgFQACgFAAgGQAAgHgDgEQgEgFgFgDQgGgEgHgDIgMgGIgPgGQgHgCgGgFQgFgGgEgIQgEgHAAgLQABgJAEgJQADgIAHgGQAHgHALgEQALgDANgBIAMABIAMADIAIAEIAFADIADACIABADIABADIAAAFIAAAFIgCAEIgBACIgCAAIgEgCIgIgEIgMgEQgGgCgIAAQgGAAgFACQgGABgDADQgEADgBAEQgCAFAAAFQAAAGADAFQAEAFAFADIALAHIAOAGIAQAGQAGACAGAFQAGAGADAHQADAIAAAKQAAAMgEAJQgEAJgIAHQgJAHgLADQgLAEgMgBQgJAAgHgBg");
	this.shape_68.setTransform(132.5,119);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgfBTQgKgDgHgGQgHgHgFgJQgEgIAAgMQABgNAFgKQAGgKAKgFQAKgGAOgDQAPgDARgBIAVAAIAAgLQABgKgCgHQgCgHgFgEQgDgFgIgCQgGgDgKAAQgJAAgJADQgIACgHAEIgLAFQgEACgCAAIgDgBIgBgCIgBgDIAAgFIAAgHQABgDACgBIAIgGIAOgFIAQgFQAJgCAHAAQARABAMADQAMAEAIAIQAHAHADALQADALAAAPIAABpQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgDABIgIABIgHgBIgEgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIAAgQQgLALgNAGQgMAHgNgBQgMABgKgEgAgIAJQgJACgFADQgGAEgDAGQgDAFAAAIQABAMAHAIQAIAHAOAAQAJgBAKgFQAKgGAKgMIAAgiIgYAAQgLABgIACg");
	this.shape_69.setTransform(108.2,119);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgVBRQgNgGgJgKQgJgLgEgQQgFgQAAgUQAAgWAGgRQAFgQALgLQAJgLAOgFQANgFAOgBIAPACIANAEQAGACAEADIAHAFIADADIABADIABAEIAAAFQAAAIgBACQgBABAAAAQgBABAAAAQAAAAgBAAQgBABAAAAQgDgBgDgCIgJgGQgFgEgIgDQgHgDgKAAQgTAAgLARQgMAQAAAcQAAAPADAMQADALAGAIQAFAIAJADQAGAEAKAAQAKAAAIgDQAHgDAGgEIAJgGQAEgEACAAIACABIACADIABADIAAAHIAAAFIgBAEIgBACIgDADIgHAGIgMAGIgOAEIgQABQgPAAgOgFg");
	this.shape_70.setTransform(92.7,119);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgFB0IgFgBIgCgBIgBgDIAAicIABgCIACgCIAFgBIAFAAIAHAAIAEABIACACIABACIAACcIgBADIgCABIgEABIgHABIgFgBgAgNhUQgDgEAAgKQAAgKADgEQAEgEAJAAQAKAAAEAEQADAEAAAKQAAAKgDAEQgEADgKAAQgJAAgEgDg");
	this.shape_71.setTransform(80.8,115.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AglB0QgMgGgIgMQgHgLgEgQQgDgQAAgRQAAgUAEgRQAEgOAJgMQAJgLAMgGQANgHARAAQAMAAALAGQAMAGALAMIAAhcIABgCIACgCIAFgBIAGAAIAIAAIAEABIACACIABACIAADoIAAADIgCACIgFAAIgFABIgHgBIgEAAIgCgCIgBgDIAAgVQgMAOgOAIQgNAHgOAAQgRAAgNgHgAgUgTQgHAGgFAIQgFAHgCALQgCALAAALQAAAMACALQABAMAFAJQAFAJAHAFQAIAFALAAIAJgBQAGgCAFgEQAGgDAGgGQAGgGAHgJIAAg/QgMgNgLgHQgLgIgKAAQgLAAgIAFg");
	this.shape_72.setTransform(66.8,115.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAuBVIgFgBIgBgCIgBgCIAAhbQAAgNgDgJQgCgIgDgGQgFgGgGgDQgGgDgJAAQgJAAgKAIQgLAHgNAPIAABtIAAACIgCACIgFABIgHAAIgHAAIgFgBIgCgCIAAgCIAAicIAAgDIACgBIAEgBIAGgBIAHABIAEABIACABIABADIAAAVQANgPAOgHQANgHALAAQAQAAALAFQAKAFAHAJQAHAJADANQACALABARIAABfIgBACIgCACIgFABIgHAAIgHAAg");
	this.shape_73.setTransform(48.5,118.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgGByIgEgBIgDgCIgBgCIAAjZIABgCIADgCIAFgBIAFAAIAHAAIAFABIACACIABACIAADZIgBACIgCACIgFABIgHAAIgGAAg");
	this.shape_74.setTransform(34.5,115.9);

	this.instance_3 = new lib.tierra();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]}).to({state:[]},1).wait(1));

	// Capa 2
	this.instance_4 = new lib.Símbolo1();
	this.instance_4.setTransform(580,393);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(580,393,1160,786);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;