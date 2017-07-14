(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1160,
	height: 786,
	fps: 32,
	color: "#FFFFFF",
	manifest: [
		{src:"images/tierra.jpg?1490887839424", id:"tierra"},
		{src:"sounds/chuchu.mp3?1490887839424", id:"chuchu"},
		{src:"sounds/malpepo.mp3?1490887839424", id:"malpepo"},
		{src:"sounds/muybien.mp3?1490887839424", id:"muybien"}
	]
};



// symbols:



(lib.tierra = function() {
	this.initialize(img.tierra);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1160,786);


(lib.Símbolo15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiVEEIgGgFQgTgXAAgcQAAggAZgXICWiVIigiZQgRgWAAgcQAAgcASgWIAGgGQAWgVAfAAQAbAAAWARIDDDCIAAABQAgAbAAApQAAAkgXAaIjGDEIABAAQgXAXggAAQgdAAgWgVg");
	this.shape.setTransform(2.5,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B8B30E").s().p("AgBACIgBgFIAFADQgDAEAAAAIgBgCg");
	this.shape_1.setTransform(-24.7,25.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B8B30E").s().p("AAAgCIACAAIgDAFQgBgDACgCg");
	this.shape_2.setTransform(-34,10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B8B30E").s().p("AgDgDIAJAFIgLABQADgBgBgFg");
	this.shape_3.setTransform(44.3,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B8B30E").s().p("AgCABIAFgEIgDAHg");
	this.shape_4.setTransform(45.2,3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B8B30E").s().p("AgFAAIAEgHQAAACADAAQAFAAAAADQgGAAACADQACAGgFABQgGgGABgCg");
	this.shape_5.setTransform(-20.4,-29.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B8B30E").s().p("AgBgJIADASIgCABg");
	this.shape_6.setTransform(-9.6,-39.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B8B30E").s().p("AgDAAIAFgDQAGADgEAAIgEAEQgHgBAEgDg");
	this.shape_7.setTransform(6.4,-36.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B8B30E").s().p("AAAgFQABAGABABIgDAEg");
	this.shape_8.setTransform(9.5,-36.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B8B30E").s().p("AgEABQAAAAAAAAQgBgBAAAAQAAAAAAAAQABAAAAgBIAJgBQABABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgEACIgBABIgDgCg");
	this.shape_9.setTransform(6.6,-39.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B8B30E").s().p("AgFgCQABgBAEACIAGADQgBAAgBAAQgBAAAAAAQgBAAAAABQAAAAAAAAg");
	this.shape_10.setTransform(18.4,-36);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B8B30E").s().p("AgCAAIAFgDIgDAHg");
	this.shape_11.setTransform(21.8,-33.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B8B30E").s().p("AAAADQgNgCANgCQAMgFgHAGQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBABAAAAQgBABAAAAQgBABAAAAQAAAAAAAAIAAgBg");
	this.shape_12.setTransform(17.6,-41.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B8B30E").s().p("AgBAAIACAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAg");
	this.shape_13.setTransform(24.3,-34.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B8B30E").s().p("AgDABQgDgBACgEQAGABACABQAEACgGAEIABABIgGgEg");
	this.shape_14.setTransform(23.4,-35.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B8B30E").s().p("AgCABQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQABgBADACIgDADIgCgCg");
	this.shape_15.setTransform(27.3,-29.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B8B30E").s().p("AgDgCIAHACIgBAAIgBADQgCgEgDgBg");
	this.shape_16.setTransform(23.2,-38.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B8B30E").s().p("ABNHIQAHgIgNgCQAAAEgGAHQgHAHgEgFQAHAAAAgFQABgEgEgCIgPABIAGAOQgLABgXgBIgPgBIgzgJQgWgFgMgBQABgFgPgGQgOgFAFgKIABACQAIABgFgIQgFgIgGAAQADADgJAIQgHAHAMAEIgUAEQgHAKgJAAQgHgBgLgIIgTgPQgMgIgJAAQADgBABgCQgJAAgJgHQgIgFgHgHIgKgMQgEgFgDAAIAEgJQgUAAgGgDQgIgDgKgQIADgCQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBQgJACgGgBQgIgCgHgKIACgBIgTgUQAHgGgEgGIgNgKQgLgIgDgFQgFgIAHgIQgGAAgKgIIgPgNQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQgMgBgBgQIAAgMQgBgHgCgDQgEgDgEACQgCABgDAFQADgLgPgOIgKgKQgFgEABgDQgBgHAGgBIALgEQgDgHgMADQgIACADgNQAEAHABgDQABgDAOgRQAMgNgEgEIgEAGQgGgGAJgSQADgHAAgCQgBgEgHAAIgJACIADgNIgBgFQgDgFAFgOIACABQAAgDACgLQABgGgJgDIgCAEIACgcQgBgBgBgEQAAgEACgBQgIgBADgSIAGgVQAAAHAEAAIAIgCQgHgHAAgEQAAgEAHgGQgPgFgGgEQgJgIADgNIACAGQAAAAAAABQAAAAABAAQAAABABAAQAAAAABAAQADgBgCgHQABgBADADQADADADAAQgHgKAGgKQAHgOABgHQABAFAEAAIAIgBQgJgFALgHIAFgFQABgCgJgBQAPgNAUglIAQgWQAJgJAGAAQAFAAABgHIADgMIAFAGQABgLACgHQAEgIABgMQABAJAEACQADACAKgBIgCgVIAKAHQABgHAMgGIgBACIADABIgCgDQgDgIAGgLIAGgIQADgFgBgDQAIAFAFgHQAFgHAGAFQABgFACgEQgFgEgCgDQgDgDAFAAIABgBIAIAGQAFgHAGgEIgHgBIAIABIACgBIgBABQAIAAADgHQAIABAIgFQAFgEAIgJQAJgJAFgCQAJgEAKAEQgDgBgDABQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAAAABQAIgDAUgBQAQgBAFgFIgDgJQAXgNALgBIgCgKQAJAAAZgIQAIgCAKABQAIACAEAHQACgEAMABQANADAEgBIACAIQAKACARgDQAPAKAUAAIARgBQAKAAAHACIgBADIAXAAQgBAAAAAAQgBABABAAQAAAAAAAAQABgBABAAQAHgCAEACQAFgBAHADQAHAEAFAGIANAFQgKgBACAHQADAMgBABIALgDQAAADgDACQgBAAAAAAQgBABAAAAQAAABABAAQAAABABABIAPABQALACAGgDQAAgEgDgEQgBAAABgBIAEgCQAGAEABgBQABgBABgEQACAIAHAIQAFAGABAJQAAgJAMAHQAOAJABgJQAAAJACABQACABgBAHQgFgHgNgBIgVABIAEAMQgHAGgHgKQgGgLgDAAQAEAAADAEQADADgBADIAEgMQgDgDgFgDIgJgCIgTABQADAEgHACQgIACABAFIAHACQABADgEACIgJACQgFgGgLgFIgTgJIgSgGQgIgEgCgEQADADAFABQAGAAAEgCIgJgIQADABAIAHQAGAGAIABIAGgMQAEgJgDgIQgHgHgGAAQgFABgHAEQgIAFgEABQgIACgKgDIACgFQABgGgLABQgQADgLAKQgLAKgBANQAZgLABANIgPAEQgIADgBAFQgDgIAHAAQAGgBgEgGQgEgBgDADIgEAEQADgEgEgEIgFgGQgJAAgOgEIgKgDIgNgBQgDgHAAgDQgIADgGANQgHAMAEAGQgFABgGgCQgFgBgFADQAIAFgDAAQgIAAAAAHQgFABAAgDQgCgGgBgBQgFAGABAFQgEgFADgOQADgPgFgFQgGgHgMgEQgLgFgEAAQgBAKAIAZQAIAaAHAKQAAAFgGgFQgHgGgCAAQgIgFgGAJQgFAKgFgBIAFgJQgCgCgGAFQgHAFAAADIgCgOQgCgLgDgCQgHABgFAGQgDAEgDAJQgEAPAFAKIAPgTIAEgEQABAEgBADIgEAHQgGAJADAHIgWAGQAKgIgHgEQgFADgCgBIgHgDIAGgoIAGgpIgGAGIgFAHIgGgFQgJALAAAcQABAMAEAYQgHACgHgMQgGgJAAgGQgJAFABATQABATgIAEIAJAAQgBACgJAFQgGAEACABQgGgCgGgGQgGgFAAgEIABAbQAAgCgHgIIgIgKQgEADAGALQAEAIAEACIgOAAIgPgDQgCADAJAGQAIAFADAAQgDAKgJADQACgJgQgOIgXgVIAVA+IgIgKIgIgIQAHAJgJATIgJAPIgIANIABgCQgDgFgGAGQgDADgBADQgJACAIAMQAIANgKACQAIgLgNgGQABAGgFAMQgCALANACIgHAFQgDACgFgCIADAYQAAgBgBAAQAAgBAAAAQgBAAgBgBQAAAAgBAAQgDAAgCADQACgEgBgOQgCgLAIAAIgOgFQgIgDgEgFQgDAPAJATIAHAPIAJAOIgOARIAFACIgPABIAEAFIgFgCQABAFACABQgKgBgNgLIAKgEQgMgLgHAGIACADQgHgGgEABIAEATIAMgGQAQAaALgIIgKALIALAOIAIAQIgHgBQgDgCgCACQAIAHgLALIgGAIQgBAEAEABQACAGAHABQAGAAACADQgFAAAAABIALAHQgCABgEgCQgDgCgDAFIALARQAEAIgCAJQACAIAJgGQAIgGAAAHIgMAGQgFAEABAGIAJADQAGABADAEIgMADIACAJQAAADgGACQAJAGgCAGQAGAFAJgKIALgOQgBADgBAMQgBAHgHAGIgHgHQgEAMAKAFQAEACAAACQAAACgHAHQgCgFgGgDQgFgCgEAFIALAHQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAABQAIAEAJABIgBAAIAJAOIAAAAIgCAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAABABABIAMAHQgDgBgCADQgBADABAEQADAIAOgCQAMgCgCAIIgDgCIgBAIQAHgFAHADQADACAGAGQAMANALgJQgCAIgDgBQgIgCgJAAIABAMQgEgGgFgBQAAAKALAEQAFACAMAAQAAABgHAIQgFAFAIAEQAKAFADgKQAEgJAEACIgDAQQAHABAEACIAHAGIALAPQAEABACgCQADAFAFABIALABQAOAAADAFQgCABABAFIABAHIATAAQgFAAgEAFIgHAJQADABAFgBIAGAAQgHADABAEIAXgFIgEgDIAKABQAHACADAFIgHAIQgBgHgEABIgIAGQAIACgBACQgCAEACADQAGACAFgFQAFgEAAgGIAKAGQAGABAIgEIgFAKIAKgBIgLALQAGAEADgBQACgBACgEQACgFACgBQAEgBAGADIgCAJQADAAAIgIQAFgFADAHQADgCgDgHQgDgGAKABQADAIALAEQAEgDgEgEQgDgEgDAAQAMAAAHAPQAHANALgGQgCgCAAgDIAAgGQAAgEAAgBQgCgCgGAAQAEgCAIAGQAJAFAFgGIgGAMQABAAAIgGIAAAKQAEgGAEgBIAJABQAFAAACgBQADgDACgHQgCAKAGgEQAIgFACACQgDAGgOAEQgLACAAAIQADADAEgDQAEgCADACQgHAGgCAFQALAEAKgJIANgOIgRAGQAAgIAEgBQAFgBABgGQAGAEAGgFQAHgEADABIgCACQAJgCAMAKQANAKACgBQAHgBAFgHQAFgIgGgDIgJACQgLACACgOQAFAHAFgBQAEgBAFgEQAEgGAFgCQAHgEAJABQgDAHAGAEQAFAEgDAFQAHgFABgEIACgKIAHAGIABgSQABgFAIgLQgCAFAHACQAHACgBADQAJgFACgJIAAABQAGgHALgDIAHgDQAEgEADgFIgFgDQAEgJAIgJIAdghQAFgGAGgMIgIAFIAEgJQAEgKAHgBQgBAFgCABQAEACAFAAQAGABACgEIgFgGIAHABQACgFgFgBQgFgCACgEQANAEAKgTQAFgKADgEQAGgGAHAAQgGgHgFAJQgFAIgEgHIAFgCQADgBACgEIgJgCIALgQIAKgNQAIgLADgUIACABQAFgGAAgFQgBgEgGgFQADAAADADQACACADgBQgHgIABgGQABgFAGgGIAIgLQADgFgGgEQAJABATgIIAOgFQAGgBAFAEIgCgIQAGABAAANQAAAOAGADIgQAXIAHADQAFABABgCQgBAGABABQACACAFgFIgNAWQgHAMgDAKIgQAsQgRA3gbAZQgCAEAJAAQgKACADAGQAEAKAAABIgYADQAAAFAEACIAGADQgFAJgKAJIgSAOIgRANQgIAIgEAIQgFAAgEgFQgDgEgFADQAMACgLANIgHAJQgDADAEACQgGgCgHABIgLAFQgNAFgGgPQgIAEADAGQACAFAEAAQgMAHgFAEIgMAPQgDgBgLAFIgVAKQggAMgKgIQAGAFgCACQgHADgDADIALAJIgUAEQgFADAAgCQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgBgBAAQgBgEgFAAQgHABgFAFIgHAJIACABIgIADQgBAAAGgIgABnG/IAEABQAAgBAAgBQABAAAAgBQAAAAAAAAQgBgBAAAAIgEADgAlcCLQABADAHgBQADgCgDgDIgGgDIgCAGgAl9hNQAHgFgDgDQgEADAAAFgACUmjIABgBIgDgCgADNlvIAAAAIAAAAg");
	this.shape_17.setTransform(-0.9,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B8B30E").s().p("AgJgMIATAMQgEAAgBADQgBADACAIg");
	this.shape_18.setTransform(-29.2,-24);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B8B30E").s().p("AgCACQAKgJgJAKg");
	this.shape_19.setTransform(4.5,39.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B8B30E").s().p("AgCgBIAFABIAAACg");
	this.shape_20.setTransform(18.9,-40.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B8B30E").s().p("AgIAAQAIgFAJAGQgFgBgIACg");
	this.shape_21.setTransform(3.2,-45.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B8B30E").s().p("AABADIgHgHQAGACAHAEQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIgDgCg");
	this.shape_22.setTransform(4.9,-44.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B8B30E").s().p("AAAgBQAAgCAEADIgHADIADgEg");
	this.shape_23.setTransform(-20.5,30.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B8B30E").s().p("AgCgCIAFAEIgDABg");
	this.shape_24.setTransform(-41.1,-7.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B8B30E").s().p("AgHAAQgEgEAHABIANADQgGAAgDAEg");
	this.shape_25.setTransform(-26.1,-38);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B8B30E").s().p("AgCgBIAGgBIgEAEg");
	this.shape_26.setTransform(26.9,-36.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B8B30E").s().p("AgGABIAOgCIgIADg");
	this.shape_27.setTransform(28.6,-34.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B8B30E").s().p("AgCABIgEADIAAgJIANAIIgGADIAAAAQgBAAgCgFg");
	this.shape_28.setTransform(32.5,-26.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B8B30E").s().p("AgDAMQADABABgGQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgEAAQAEgHAFgJIgCAGQgBAHAAAFIACABQABAGgEAAIgEgBg");
	this.shape_29.setTransform(35,-21.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B8B30E").s().p("AgNAJQABgGAHgCIALgBIADgBIgEgBQAAAAgBAAQAAAAAAAAQAAABABAAQAAABABAAQgKgJgDgDIAQAKIAAAAIAAAAIAAAAIAFAIIgJgGQADAHgHAAQgDgBAGAHQgDgBgEABIgBAAQgFAAgEgEg");
	this.shape_30.setTransform(31.1,-30.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B8B30E").s().p("AAFAHIABAAIgNgNQAEgDAHACQABAMADAEg");
	this.shape_31.setTransform(29.4,-33.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B8B30E").s().p("AAAATQAAgJgHgCQgHgCgEAFQgBAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIADgDIgLgCQADgFANgCQAKgBAAgFQACAEgBAFQAAACAIADQAHAAgCgHIgFgNQALACAFgEQgCAOgIAKQgIANgHAAIgBAAg");
	this.shape_32.setTransform(25.8,-32);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B8B30E").s().p("AgCgBIAFABIgBACIgEgDg");
	this.shape_33.setTransform(34.8,-27.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B8B30E").s().p("AAAgDQACgBgBAIg");
	this.shape_34.setTransform(32,-31.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B8B30E").s().p("AgDgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIAGAFQgFAAgCgEg");
	this.shape_35.setTransform(34,-28.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B8B30E").s().p("AgGgGQAGAGAFAAQABABAAABQABAAAAABQAAAAAAABQAAAAAAABIgFACQgDgGgFgHg");
	this.shape_36.setTransform(33.3,-29.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B8B30E").s().p("AgBAAIACAAIABABg");
	this.shape_37.setTransform(36,-24.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B8B30E").s().p("AgEgEIAJAFQgCgBgDAEg");
	this.shape_38.setTransform(36.9,-23.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B8B30E").s().p("AgBgCIAJACQgFAAgDAAQgEADgEAAQABgGAGABg");
	this.shape_39.setTransform(37.4,-21.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B8B30E").s().p("AgBACIADgGQABAEgDAFg");
	this.shape_40.setTransform(36.8,-25.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B8B30E").s().p("AgJgHQAMACAHAFQgDAAgBADQgCAFgDAAQgBgLgJgEg");
	this.shape_41.setTransform(35.4,-30.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B8B30E").s().p("AgDgCIAIAEIgDABQgCAAgDgFg");
	this.shape_42.setTransform(38.2,-23.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B8B30E").s().p("AgCADIACgEQABgEADAAQgCACAAADIAAAGg");
	this.shape_43.setTransform(39.1,-23.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B8B30E").s().p("AgEAAQAEACABgCIABgGQAGAJgEADIgCABQgCAAgEgHg");
	this.shape_44.setTransform(41.3,-16.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B8B30E").s().p("AAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgEAAAAAAIACgCIAHAFIgFgCg");
	this.shape_45.setTransform(41,-18.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B8B30E").s().p("AgEAAQACgEACgBQABgBAEAFQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAFgBABg");
	this.shape_46.setTransform(42.2,-18.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B8B30E").s().p("AAAAAQABgDAAADIgBACIAAgCg");
	this.shape_47.setTransform(43.3,-15.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B8B30E").s().p("AgCgCIADgBIACAFIgBACg");
	this.shape_48.setTransform(42.9,-15.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B8B30E").s().p("AgCAQIACgCQAAgFgFgLQgGgKAGgGQgBAHAGALIAJATg");
	this.shape_49.setTransform(41.9,-10.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B8B30E").s().p("AABADIgFgGIAIAHg");
	this.shape_50.setTransform(42.5,-6.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B8B30E").s().p("AAAACQgEgBABgBIADAAQADgBABADIgEAAg");
	this.shape_51.setTransform(45.6,0.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B8B30E").s().p("AkhEjQh5h5AAiqQAAipB5h5QB4h4CpAAQCqAAB4B4QB5B5AACpQAACqh5B5Qh4B4iqAAQipAAh4h4g");
	this.shape_52.setTransform(-0.9,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-46.4,92.1,92.8);


(lib.Símbolo14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF1818").s().p("Ah6B3IDyjwIACADIjxDwg");
	this.shape.setTransform(28.8,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF1818").s().p("Ah6h2IADgDIDxDwIgCADg");
	this.shape_1.setTransform(28.8,43.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BF1818").s().p("AirABIAAgBIFXAAIAAABg");
	this.shape_2.setTransform(28.8,43.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BF1818").s().p("AgBCrIAAlVIADAAIAAFVg");
	this.shape_3.setTransform(28.8,43.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8CBE23").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAQhFAAgygyg");
	this.shape_4.setTransform(28.8,43.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BF1818").s().p("Ah5B3IDxjwIADADIjyDwg");
	this.shape_5.setTransform(-37.8,43.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BF1818").s().p("Ah5h2IACgDIDyDwIgDADg");
	this.shape_6.setTransform(-37.8,43.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BF1818").s().p("AirABIAAgBIFXAAIAAABg");
	this.shape_7.setTransform(-37.8,43.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BF1818").s().p("AAACrIAAlVIABAAIAAFVg");
	this.shape_8.setTransform(-37.8,43.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8CBE23").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAQhFAAgygyg");
	this.shape_9.setTransform(-37.8,43.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E8471E").s().p("AnsAqQgRAAgMgNQgNgMABgRQAAgQAMgMQAMgNARAAIPZAAQARAAAMANQAMAMAAAQQAAARgMAMQgMANgRAAg");
	this.shape_10.setTransform(-5.1,39.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E8471E").s().p("AKKBFQqKhUqJBUQgUACgQgLQgQgMgDgUQgCgUAMgNQAMgQAUgDQKWhYKXBYQAUADAMAQQANANgDAUQgDAUgQAMQgNAJgQAAIgHAAg");
	this.shape_11.setTransform(-5.7,-53.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#993300").s().p("AguHdInTgRQgWgEgemZIgamWIhdhdQMPgsF0AYQC6ANAcAVIhTBfIhRK/QgSA/gVASIgEADIABgBQAJACgfAWQgUAPjLAAQhxAAingFg");
	this.shape_12.setTransform(-5.9,-4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.3,-60.9,141.1,121.9);


(lib.Símbolo13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.txt10 = new cjs.Text("963", "45px 'Calibri'");
	this.txt10.name = "txt10";
	this.txt10.textAlign = "center";
	this.txt10.lineHeight = 57;
	this.txt10.setTransform(-2.8,-47.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3E600").s().p("Ak6AwQgUgBgOgOQgOgNAAgUQAAgSAOgOQAOgOAUgBIJ1AAQAUABAOAOQAOAOAAASQAAAUgOANQgOAOgUABg");
	this.shape.setTransform(-2.1,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF1818").s().p("Ah6B3IDyjwIACADIjxDwg");
	this.shape_1.setTransform(28.8,43.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BF1818").s().p("Ah6h2IADgDIDxDwIgCADg");
	this.shape_2.setTransform(28.8,43.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BF1818").s().p("AirABIAAgBIFXAAIAAABg");
	this.shape_3.setTransform(28.8,43.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BF1818").s().p("AgBCrIAAlVIADAAIAAFVg");
	this.shape_4.setTransform(28.8,43.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8CBE23").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAQhFAAgygyg");
	this.shape_5.setTransform(28.8,43.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BF1818").s().p("Ah5B3IDxjwIADADIjyDwg");
	this.shape_6.setTransform(-37.8,43.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BF1818").s().p("Ah5h2IACgDIDyDwIgDADg");
	this.shape_7.setTransform(-37.8,43.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BF1818").s().p("AirABIAAgBIFXAAIAAABg");
	this.shape_8.setTransform(-37.8,43.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BF1818").s().p("AAACrIAAlVIABAAIAAFVg");
	this.shape_9.setTransform(-37.8,43.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8CBE23").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAQhFAAgygyg");
	this.shape_10.setTransform(-37.8,43.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E8471E").s().p("AnsAqQgRAAgMgNQgNgMABgRQAAgQAMgMQAMgNARAAIPZAAQARAAAMANQAMAMAAAQQAAARgMAMQgMANgRAAg");
	this.shape_11.setTransform(-5.1,39.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E8471E").s().p("AKKBFQqKhUqJBUQgUACgQgLQgQgMgDgUQgCgUAMgNQAMgQAUgDQKWhYKXBYQAUADAMAQQANANgDAUQgDAUgQAMQgNAJgQAAIgHAAg");
	this.shape_12.setTransform(-5.7,-53.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F07E1B").s().p("AguHdInTgRQgWgEgemZIgamWIhdhdQMPgsF0AYQC6ANAcAVIhTBfIhRK/QgSA/gVASIgEACIABAAQAJACgfAWQgUAPjLAAQhxAAingFg");
	this.shape_13.setTransform(-5.9,-4.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A0C6").s().p("AgXBbQgKgKABgOIAAiFQgBgOAKgKQALgKAMAAQAOAAAJAKQALAKAAAOIAACFQAAAOgLAKQgJAKgOAAQgMAAgLgKg");
	this.shape_14.setTransform(73,15.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00A0C6").s().p("AicAtQgTAAgNgOQgNgNAAgSQAAgRANgNQANgOATAAIE5AAQATAAANAOQANANAAARQAAASgNANQgNAOgTAAg");
	this.shape_15.setTransform(50.4,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.txt10}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.3,-60.9,152.6,121.9);


(lib.Símbolo12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.txt9 = new cjs.Text("966", "45px 'Calibri'");
	this.txt9.name = "txt9";
	this.txt9.textAlign = "center";
	this.txt9.lineHeight = 57;
	this.txt9.setTransform(-1.5,-46.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8471E").s().p("Ak6AvQgUAAgOgOQgOgOAAgTQAAgTAOgNQAOgPAUAAIJ1AAQAUAAAOAPQAOANAAATQAAATgOAOQgOAOgUAAg");
	this.shape.setTransform(0.7,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF1818").s().p("Ah6B3IDyjwIADADIjyDwg");
	this.shape_1.setTransform(30.9,43.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BF1818").s().p("Ah6h2IADgDIDyDwIgDADg");
	this.shape_2.setTransform(30.9,43.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BF1818").s().p("AirABIAAgCIFXAAIAAACg");
	this.shape_3.setTransform(30.9,43.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BF1818").s().p("AgBCrIAAlVIADAAIAAFVg");
	this.shape_4.setTransform(31,43.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F07E1A").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAQhFAAgygyg");
	this.shape_5.setTransform(30.9,43.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BF1818").s().p("Ah6B3IDyjwIADADIjyDwg");
	this.shape_6.setTransform(-30.5,43.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BF1818").s().p("Ah6h2IADgDIDyDwIgDADg");
	this.shape_7.setTransform(-30.5,43.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BF1818").s().p("AirABIAAgCIFXAAIAAACg");
	this.shape_8.setTransform(-30.5,43.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BF1818").s().p("AAACrIAAlVIABAAIAAFVg");
	this.shape_9.setTransform(-30.5,43.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F07E1A").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAQhFAAgygyg");
	this.shape_10.setTransform(-30.5,43.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A0C6").s().p("AnsAqQgRAAgMgNQgMgMAAgRQAAgQAMgNQAMgMARAAIPZAAQARAAAMAMQAMANAAAQQAAARgMAMQgMANgRAAg");
	this.shape_11.setTransform(0.4,39.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8CBE23").s().p("AKKBFQqKhUqJBUQgUACgQgLQgQgMgDgUQgCgUAMgOQAMgQAUgCQKWhYKXBYQAUACAMAQQANAOgDAUQgDAUgQAMQgNAJgQAAIgHAAg");
	this.shape_12.setTransform(-0.2,-53.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F3E600").s().p("AguHdInTgRQgWgEgfmZIgamWIhchdQMQgtFzAZQC6ANAcAVIhTBfIhRK/QgSA/gVASIgEADIABgBQAJACggAWQgTAPjLAAQhxAAingFg");
	this.shape_13.setTransform(-1.1,-4.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8CBE23").s().p("AgWBbQgKgKAAgOIAAiFQAAgOAKgKQAJgKANAAQANAAAKAKQAKAKAAAOIAACFQAAAPgKAJQgJAKgOAAQgNAAgJgKg");
	this.shape_14.setTransform(72.9,18.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8CBE23").s().p("AicAtQgTAAgNgOQgNgNAAgSQAAgRANgNQANgNATAAIE5AAQATAAANANQANANAAARQAAASgNANQgNAOgTAAg");
	this.shape_15.setTransform(50.3,18.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E8471E").s().p("AgWBbQgKgKAAgOIAAiFQAAgOAKgKQAKgKAMAAQAOAAAJAKQAKAKAAAOIAACFQAAAOgKAKQgJAKgOAAQgMAAgKgKg");
	this.shape_16.setTransform(-72.8,11.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E8471E").s().p("AicAsQgTAAgNgMQgNgOAAgSQAAgRANgOQANgNATAAIE5AAQATAAANANQANAOAAARQAAASgNAOQgNAMgTAAg");
	this.shape_17.setTransform(-50.3,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.txt9}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.2,-60.9,152.5,121.9);


(lib.Símbolo11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.txt8 = new cjs.Text("969", "45px 'Calibri'");
	this.txt8.name = "txt8";
	this.txt8.textAlign = "center";
	this.txt8.lineHeight = 57;
	this.txt8.setTransform(-1.7,-46.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF1818").s().p("Ah6B3IDyjwIADADIjyDwg");
	this.shape.setTransform(32.6,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF1818").s().p("Ah6h2IADgDIDyDwIgDADg");
	this.shape_1.setTransform(32.6,43.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BF1818").s().p("AirABIAAgCIFXAAIAAACg");
	this.shape_2.setTransform(32.6,43.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BF1818").s().p("AAACrIAAlVIABAAIAAFVg");
	this.shape_3.setTransform(32.6,43.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCBE0E").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAQhFAAgygyg");
	this.shape_4.setTransform(32.6,43.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BF1818").s().p("Ah6B3IDyjwIADADIjyDwg");
	this.shape_5.setTransform(-34,43.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BF1818").s().p("Ah6h2IADgDIDyDwIgDADg");
	this.shape_6.setTransform(-34,43.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BF1818").s().p("AirABIAAgCIFXAAIAAACg");
	this.shape_7.setTransform(-34,43.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BF1818").s().p("AAACrIAAlVIABAAIAAFVg");
	this.shape_8.setTransform(-34,43.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCBE0E").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAQhFAAgygyg");
	this.shape_9.setTransform(-34,43.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E52621").s().p("AnrAqQgRAAgNgNQgMgMAAgRQAAgQAMgNQANgMARAAIPXAAQASAAAMAMQANANAAAQQAAARgNAMQgMANgSAAg");
	this.shape_10.setTransform(-1.3,39.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3E600").s().p("AKKBFQpNhMrGBMQgUACgQgLQgQgMgCgUQgDgUAMgOQAMgQAUgCQKWhYKXBYQAUACAMAQQANAOgDAUQgDAUgQAMQgNAJgQAAIgHAAg");
	this.shape_11.setTransform(-1.9,-53.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A0C6").s().p("Ak6AvQgUAAgOgOQgOgOAAgTQAAgTAOgNQAOgPAUAAIJ1AAQAUAAAOAPQAOANAAATQAAATgOAOQgOAOgUAAg");
	this.shape_12.setTransform(1.8,15.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8CBE23").s().p("AguHdInTgRQgWgEgfmZIgamWIhchdQMPgtF0AZQC6ANAcAVIhTBfIhRK/QgSA/gVASIgEADIABgBQAJACggAWQgUAPjNAAQhwAAilgFg");
	this.shape_13.setTransform(-1,-3.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F3E600").s().p("AgWBbQgKgKAAgOIAAiFQAAgOAKgKQAKgKAMAAQAOAAAJAKQAKAKAAAOIAACFQAAAOgKAKQgJAKgOAAQgMAAgKgKg");
	this.shape_14.setTransform(-73.7,17.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F3E600").s().p("AicAsQgTAAgNgMQgNgNAAgTQAAgRANgNQANgOATAAIE5AAQATAAANAOQANANAAARQAAASgNAOQgNAMgTAAg");
	this.shape_15.setTransform(-51.1,17.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A0C6").s().p("AgWBbQgKgKAAgOIAAiFQAAgOAKgKQAJgKANAAQANAAAKAKQAKAKAAAOIAACFQAAAOgKAKQgKAKgNAAQgNAAgJgKg");
	this.shape_16.setTransform(73.7,16.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A0C6").s().p("AicAtQgTAAgNgOQgNgNAAgSQAAgRANgNQANgOATAAIE5AAQATAAANAOQANANAAARQAAASgNANQgNAOgTAAg");
	this.shape_17.setTransform(51.2,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.txt8}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-60.9,154.1,121.9);


(lib.Símbolo10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.txt7 = new cjs.Text("972", "45px 'Calibri'");
	this.txt7.name = "txt7";
	this.txt7.textAlign = "center";
	this.txt7.lineHeight = 57;
	this.txt7.setTransform(-13.2,-47.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CBE23").s().p("Ak6AvQgUAAgOgNQgOgOAAgUQAAgSAOgPQAOgOAUABIJ1AAQAUgBAOAOQAOAPAAASQAAAUgOAOQgOANgUAAg");
	this.shape.setTransform(-6.1,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF1818").s().p("Ah6B3IDyjwIADADIjyDwg");
	this.shape_1.setTransform(24.7,43.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BF1818").s().p("Ah6h2IADgDIDyDwIgDADg");
	this.shape_2.setTransform(24.7,43.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BF1818").s().p("AirABIAAgBIFXAAIAAABg");
	this.shape_3.setTransform(24.7,43.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BF1818").s().p("AgBCrIAAlVIADAAIAAFVg");
	this.shape_4.setTransform(24.8,43.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3E600").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAQhFAAgygyg");
	this.shape_5.setTransform(24.7,43.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BF1818").s().p("Ah6B3IDyjwIADADIjyDwg");
	this.shape_6.setTransform(-41.8,43.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BF1818").s().p("Ah6h2IADgDIDyDwIgDADg");
	this.shape_7.setTransform(-41.8,43.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BF1818").s().p("AirABIAAgBIFXAAIAAABg");
	this.shape_8.setTransform(-41.8,43.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BF1818").s().p("AgBCrIAAlVIACAAIAAFVg");
	this.shape_9.setTransform(-41.8,43.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F3E600").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAQhFAAgygyg");
	this.shape_10.setTransform(-41.8,43.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FCBE0E").s().p("AnrAqQgRAAgNgMQgNgNAAgRQAAgQANgMQANgNARAAIPXAAQASAAANANQALAMABAQQgBARgLANQgNAMgSAAg");
	this.shape_11.setTransform(-9.2,39.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F07E1B").s().p("AKKBFQqKhUqJBUQgUACgQgLQgQgMgDgUQgDgUANgOQAMgQAUgCQKWhYKXBYQAUACAMAQQAMAOgDAUQgCAUgQAMQgNAJgQAAIgHAAg");
	this.shape_12.setTransform(-9.7,-53.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A0C6").s().p("AguHdInTgRQgWgEgemZIgamWIhdhdQMQgtFzAZQC6ANAcAVIhTBfIhRK/QgSA/gVASIgEADIABgBQAJACgfAWQgUAPjLAAQhxAAingFg");
	this.shape_13.setTransform(-11,-3.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8CBE23").s().p("AgWBbQgKgJAAgPIAAiFQAAgOAKgKQAKgKAMAAQAOAAAJAKQAKAKAAAOIAACFQAAAOgKAKQgJAKgOAAQgMAAgKgKg");
	this.shape_14.setTransform(-78.5,17.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8CBE23").s().p("AicAtQgTAAgNgOQgNgNAAgSQAAgRANgOQANgMATAAIE5AAQATAAANAMQANAOAAARQAAASgNANQgNAOgTAAg");
	this.shape_15.setTransform(-55.9,17.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E8471E").s().p("AAoBVQgOgBgJgLIhVhmQgJgLACgNQABgOALgJQAKgJAOABQAOABAJALIBVBmQAJALgBANQgCAOgKAJQgKAIgNAAIgCAAg");
	this.shape_16.setTransform(75.6,-1.1,1,1,15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E8471E").s().p("Ah7CSQgTgCgMgPQgMgOABgTQACgSAOgMIDxjIQAOgMATABQASACAMAOQAMAPgCASQgBATgPAMIjwDIQgMALgQAAIgEAAg");
	this.shape_17.setTransform(55.2,8.4,1,1,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.txt7}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.8,-60.9,163.7,121.9);


(lib.Símbolo9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.txt6 = new cjs.Text("975", "45px 'Calibri'");
	this.txt6.name = "txt6";
	this.txt6.textAlign = "center";
	this.txt6.lineHeight = 57;
	this.txt6.setTransform(6.1,-43.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00A0C6").s().p("AAoBVQgOgBgIgLIhWhlQgJgLABgNQABgOAKgKQALgJAOACQAOABAKAKIBVBlQAJALgBAOQgBAOgLAJQgJAIgNAAIgDAAg");
	this.shape.setTransform(-69.1,32.9,1,1,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00A0C6").s().p("Ag9BgQgTgCgMgOQgMgOABgTQACgSAOgMIB1hlQAOgMATABQASABAMAPQAMAOgBATQgCASgOANIh1BkQgMALgQAAIgEAAg");
	this.shape_1.setTransform(-56,26.6,1,1,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3E600").s().p("Ak6AvQgUAAgOgOQgOgNAAgUQAAgSAOgOQAOgOAUAAIJ1AAQAUAAAOAOQAOAOAAASQAAAUgOANQgOAOgUAAg");
	this.shape_2.setTransform(8.6,20.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BF1818").s().p("Ah6B3IDyjwIADADIjyDwg");
	this.shape_3.setTransform(39.4,48.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BF1818").s().p("Ah6h2IADgDIDyDwIgDADg");
	this.shape_4.setTransform(39.4,48.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BF1818").s().p("AirABIAAgBIFXAAIAAABg");
	this.shape_5.setTransform(39.4,48.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BF1818").s().p("AgBCrIAAlVIACAAIAAFVg");
	this.shape_6.setTransform(39.4,48.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8CBE23").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAQhFAAgygyg");
	this.shape_7.setTransform(39.4,48.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BF1818").s().p("Ah6B3IDyjwIACADIjxDwg");
	this.shape_8.setTransform(-27.1,48.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BF1818").s().p("Ah6h2IADgDIDxDwIgCADg");
	this.shape_9.setTransform(-27.1,48.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BF1818").s().p("AirABIAAgBIFXAAIAAABg");
	this.shape_10.setTransform(-27.2,48.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BF1818").s().p("AAACrIAAlVIABAAIAAFVg");
	this.shape_11.setTransform(-27.1,48.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8CBE23").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAQhFAAgygyg");
	this.shape_12.setTransform(-27.2,48.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E8471E").s().p("AnrAqQgSAAgMgNQgNgMAAgRQAAgQANgMQAMgNASAAIPXAAQASAAAMANQANAMAAAQQAAARgNAMQgMANgSAAg");
	this.shape_13.setTransform(5.5,43.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E8471E").s().p("AKKBFQqKhVqJBVQgUACgQgLQgQgMgDgUQgDgUANgOQAMgQAUgCQKWhYKXBYQAUACAMAQQAMAOgCAUQgDAUgQAMQgNAJgQAAIgHAAg");
	this.shape_14.setTransform(4.9,-49.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F07E1B").s().p("AguHdInTgRQgWgEgfmZIgamWIhchdQMPgtF0AZQC6ANAcAVIhTBfIhRK/QgSA/gVASIgEADIABgBQAJACggAWQgUAPjNAAQhwAAilgFg");
	this.shape_15.setTransform(4.7,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8CBE23").s().p("AhCAhQgOAAgKgKQgKgJAAgOQAAgMAKgKQAKgKAOAAICFAAQAOAAAKAKQAKAKAAAMQAAAOgKAJQgKAKgOAAg");
	this.shape_16.setTransform(5.9,-61.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8CBE23").s().p("AgeC9QgOgNAAgTIAAk5QAAgTAOgNQANgNARAAQATAAAMANQANANAAATIAAE5QAAATgNANQgMANgTAAQgRAAgNgNg");
	this.shape_17.setTransform(5.9,-39.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.txt6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.4,-65.3,151,130.6);


(lib.Símbolo8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.txt5 = new cjs.Text("978", "45px 'Calibri'");
	this.txt5.name = "txt5";
	this.txt5.textAlign = "center";
	this.txt5.lineHeight = 57;
	this.txt5.setTransform(-1.5,-47.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3E600").s().p("AhCAhQgOAAgKgKQgKgJAAgOQAAgMAKgKQAKgKAOAAICFAAQAOAAAKAKQAKAKAAAMQAAAOgKAJQgKAKgOAAg");
	this.shape.setTransform(3.1,49.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3E600").s().p("AgeBUQgNgNgBgTIAAhnQABgTANgNQANgNARAAQASAAAOANQANANgBATIAABnQABATgNANQgOANgSAAQgRAAgNgNg");
	this.shape_1.setTransform(3.1,37.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E8471E").s().p("Ak6AwQgUAAgOgOQgOgOAAgUQAAgTAOgOQAOgOAUABIJ1AAQAUgBAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAg");
	this.shape_2.setTransform(2.3,15.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BF1818").s().p("Ah6B3IDyjwIADADIjyDwg");
	this.shape_3.setTransform(32.5,43.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BF1818").s().p("Ah6h2IADgDIDyDwIgDADg");
	this.shape_4.setTransform(32.5,43.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BF1818").s().p("AirABIAAgBIFXAAIAAABg");
	this.shape_5.setTransform(32.5,43.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BF1818").s().p("AAACrIAAlVIABAAIAAFVg");
	this.shape_6.setTransform(32.5,43.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F07E1A").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAQhFAAgygyg");
	this.shape_7.setTransform(32.5,43.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BF1818").s().p("Ah6B3IDyjwIADADIjyDwg");
	this.shape_8.setTransform(-28.9,43.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BF1818").s().p("Ah6h2IADgDIDyDwIgDADg");
	this.shape_9.setTransform(-28.9,43.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BF1818").s().p("AirABIAAgBIFXAAIAAABg");
	this.shape_10.setTransform(-29,43.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BF1818").s().p("AAACrIAAlVIABAAIAAFVg");
	this.shape_11.setTransform(-28.9,43.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F07E1A").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAQhFAAgygyg");
	this.shape_12.setTransform(-29,43.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A0C6").s().p("AnrAqQgSAAgMgMQgNgNAAgRQAAgQANgMQAMgNASAAIPXAAQASAAAMANQANAMAAAQQAAARgNANQgMAMgSAAg");
	this.shape_13.setTransform(2,39.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8CBE23").s().p("AKKBFQqKhVqJBVQgUACgQgLQgQgMgDgUQgDgUANgOQAMgQAUgCQKWhYKXBYQAUACAMAQQAMAOgCAUQgDAUgQAMQgNAJgQAAIgHAAg");
	this.shape_14.setTransform(1.4,-53.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F3E600").s().p("AguHdInTgRQgWgEgemZIgamWIhdhdQMPgtF0AZQC6ANAcAVIhTBfIhRK/QgSA/gVASIgEADIABgBQAJACgfAWQgUAPjOAAQhwAAilgFg");
	this.shape_15.setTransform(0.5,-4.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8CBE23").s().p("AgvBQQgOABgKgLQgKgKABgNQAAgOAKgKIBehdQAKgKAOAAQAOABAKAJQAKALgBANQAAAOgKAKIheBdQgKAKgMAAIgCgBg");
	this.shape_16.setTransform(-63.8,-32.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8CBE23").s().p("ABOCQIjbjfQgNgOAAgSQAAgTANgNQANgNATAAQATABANANIDbDfQANANAAASQAAATgNANQgOANgSAAQgTAAgNgNg");
	this.shape_17.setTransform(-48,-16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.txt5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-60.9,144,121.9);


(lib.Símbolo7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.txt4 = new cjs.Text("981", "45px 'Calibri'");
	this.txt4.name = "txt4";
	this.txt4.textAlign = "center";
	this.txt4.lineHeight = 57;
	this.txt4.setTransform(-0.2,-46.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF1818").s().p("Ah5B3IDxjwIACADIjxDwg");
	this.shape.setTransform(33.2,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF1818").s().p("Ah5h2IACgDIDxDwIgCADg");
	this.shape_1.setTransform(33.2,43.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BF1818").s().p("AirABIAAgBIFXAAIAAABg");
	this.shape_2.setTransform(33.2,43.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BF1818").s().p("AgBCrIAAlVIADAAIAAFVg");
	this.shape_3.setTransform(33.2,43.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FCBE0E").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAQhFAAgygyg");
	this.shape_4.setTransform(33.2,43.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BF1818").s().p("Ah6B3IDyjwIADADIjyDwg");
	this.shape_5.setTransform(-33.3,43.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BF1818").s().p("Ah6h2IADgDIDyDwIgDADg");
	this.shape_6.setTransform(-33.3,43.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BF1818").s().p("AirABIAAgBIFXAAIAAABg");
	this.shape_7.setTransform(-33.3,43.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BF1818").s().p("AAACrIAAlVIABAAIAAFVg");
	this.shape_8.setTransform(-33.3,43.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCBE0E").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAQhFAAgygyg");
	this.shape_9.setTransform(-33.3,43.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E52621").s().p("AnsAqQgRAAgMgNQgNgMAAgRQAAgQANgMQAMgNARAAIPZAAQARAAAMANQAMAMAAAQQAAARgMAMQgMANgRAAg");
	this.shape_10.setTransform(-0.7,39.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3E600").s().p("AKKBFQpKhMrJBMQgUACgQgLQgQgMgDgUQgCgUAMgOQAMgQAUgCQKWhYKXBYQAUACAMAQQAMAOgCAUQgDAUgQAMQgNAJgQAAIgHAAg");
	this.shape_11.setTransform(-1.3,-53.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00A0C6").s().p("Ak6AwQgUAAgOgOQgOgOAAgUQAAgTAOgOQAOgOAUABIJ1AAQAUgBAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAg");
	this.shape_12.setTransform(2.4,15.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A0C6").s().p("AgvBQQgOAAgKgKQgJgJAAgOQAAgOAJgLIBfhcQAKgKAOAAQAOAAAKALQAKAJgBAOQAAAPgKAJIheBdQgKAKgMAAIgCgBg");
	this.shape_13.setTransform(65.2,36.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00A0C6").s().p("AAWBXIhrhuQgNgNAAgTQAAgTAOgNQANgNASAAQATAAANAOIBrBuQANAOAAASQAAATgNANQgOANgTAAQgSgBgNgNg");
	this.shape_14.setTransform(55.1,26.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8CBE23").s().p("AguHdInTgRQgWgEgemZIgamWIhdhdQMQgtFzAZQC6ANAcAVIhTBfIhRK/QgSA/gVASIgEADIABgBQAJACgfAWQgUAPjOAAQhwAAilgFg");
	this.shape_15.setTransform(-0.4,-3.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F3E600").s().p("AgWBbQgKgKAAgOIAAiFQAAgOAKgKQAJgKANAAQAOAAAJAKQAKAKAAAOIAACFQAAAOgKAKQgKAKgNAAQgNAAgJgKg");
	this.shape_16.setTransform(-70,17.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F3E600").s().p("AicAtQgTgBgNgNQgNgNAAgSQAAgRANgOQANgNATABIE5AAQATgBANANQANAOAAARQAAASgNANQgNANgTABg");
	this.shape_17.setTransform(-47.5,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.txt4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.3,-60.9,146.8,121.9);


(lib.Símbolo6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.txt3 = new cjs.Text("984", "45px 'Calibri'");
	this.txt3.name = "txt3";
	this.txt3.textAlign = "center";
	this.txt3.lineHeight = 57;
	this.txt3.setTransform(-5.5,-46.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CBE23").s().p("Ak6AwQgUAAgOgPQgOgNAAgUQAAgSAOgOQAOgOAUgBIJ1AAQAUABAOAOQAOAOAAASQAAAUgOANQgOAPgUAAg");
	this.shape.setTransform(-1.3,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF1818").s().p("Ah5B3IDxjwIACADIjxDwg");
	this.shape_1.setTransform(29.6,43.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BF1818").s().p("Ah5h2IACgDIDxDwIgCADg");
	this.shape_2.setTransform(29.6,43.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BF1818").s().p("AirABIAAgBIFXAAIAAABg");
	this.shape_3.setTransform(29.5,43.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BF1818").s().p("AgBCrIAAlUIADAAIAAFUg");
	this.shape_4.setTransform(29.6,43.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3E600").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAQhFAAgygyg");
	this.shape_5.setTransform(29.5,43.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BF1818").s().p("Ah6B3IDyjwIADADIjyDwg");
	this.shape_6.setTransform(-37,43.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BF1818").s().p("Ah6h2IADgDIDyDwIgDADg");
	this.shape_7.setTransform(-37,43.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BF1818").s().p("AiqABIAAgBIFWAAIAAABg");
	this.shape_8.setTransform(-37,43.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BF1818").s().p("AAACrIAAlUIABAAIAAFUg");
	this.shape_9.setTransform(-37,43.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F3E600").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAQhFAAgygyg");
	this.shape_10.setTransform(-37,43.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FCBE0E").s().p("AnrAqQgSAAgMgNQgNgMAAgRQAAgQANgMQAMgNASAAIPXAAQASAAAMANQANAMAAAQQAAARgNAMQgMANgSAAg");
	this.shape_11.setTransform(-4.4,39.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F07E1B").s().p("AKKBFQqKhUqJBUQgUACgQgLQgQgMgDgUQgDgUANgOQAMgQAUgCQKWhYKXBYQAUACAMAQQAMAOgCAUQgDAUgQAMQgNAJgQAAIgHAAg");
	this.shape_12.setTransform(-4.9,-53.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00A0C6").s().p("AguHdInTgRQgWgEgemZIgamWIhdhdQMQgsFzAYQC6ANAcAVIhSBfIhSK/QgSA/gVASIgEACIABAAQAJACgfAWQgUAPjLAAQhxAAingFg");
	this.shape_13.setTransform(-6.2,-3.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A0C635").s().p("AgWBbQgLgKABgOIAAiFQgBgOALgKQAKgKAMAAQAOAAAJAKQAKAKAAAOIAACFQAAAOgKAKQgJAKgOAAQgMAAgKgKg");
	this.shape_14.setTransform(-73.6,17.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A0C635").s().p("AicAtQgTgBgNgNQgNgNAAgSQAAgRANgOQANgNATABIE5AAQATgBANANQANAOAAARQAAASgNANQgNANgTABg");
	this.shape_15.setTransform(-51.1,17.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E8471E").s().p("AgWBbQgKgKAAgOIAAiFQAAgOAKgKQAJgKANAAQANAAAKAKQAKAKAAAOIAACFQAAAOgKAKQgKAKgNAAQgNAAgJgKg");
	this.shape_16.setTransform(73.7,15.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E8471E").s().p("AicAtQgSAAgOgOQgNgNAAgSQAAgRANgNQAOgOASAAIE5AAQATAAANAOQANANAAARQAAASgNANQgNAOgTAAg");
	this.shape_17.setTransform(51.2,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.txt3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-60.9,154.1,121.9);


(lib.Símbolo5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.txt2 = new cjs.Text("987", "45px 'Calibri'");
	this.txt2.name = "txt2";
	this.txt2.textAlign = "center";
	this.txt2.lineHeight = 57;
	this.txt2.lineWidth = 100;
	this.txt2.setTransform(-8.6,-49.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3E600").s().p("Ak6AvQgUAAgOgOQgOgOAAgTQAAgSAOgOQAOgOAUAAIJ1AAQAUAAAOAOQAOAOAAASQAAATgOAOQgOAOgUAAg");
	this.shape.setTransform(-1.3,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF1818").s().p("Ah6B3IDyjwIADADIjyDwg");
	this.shape_1.setTransform(29.5,43.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BF1818").s().p("Ah6h2IADgDIDyDwIgDADg");
	this.shape_2.setTransform(29.5,43.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BF1818").s().p("AirACIAAgDIFXAAIAAADg");
	this.shape_3.setTransform(29.5,43.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BF1818").s().p("AgBCrIAAlUIACAAIAAFUg");
	this.shape_4.setTransform(29.6,43.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8CBE23").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAQhFAAgygyg");
	this.shape_5.setTransform(29.5,43.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BF1818").s().p("Ah6B3IDyjwIADADIjyDwg");
	this.shape_6.setTransform(-37,43.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BF1818").s().p("Ah6h2IADgDIDyDwIgDADg");
	this.shape_7.setTransform(-37,43.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BF1818").s().p("AirACIAAgDIFXAAIAAADg");
	this.shape_8.setTransform(-37,43.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BF1818").s().p("AAACrIAAlUIABAAIAAFUg");
	this.shape_9.setTransform(-37,43.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8CBE23").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAQhFAAgygyg");
	this.shape_10.setTransform(-37,43.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E8471E").s().p("AnrAqQgSAAgMgNQgMgMAAgRQAAgQAMgMQAMgNASAAIPYAAQARAAAMANQAMAMAAAQQAAARgMAMQgMANgRAAg");
	this.shape_11.setTransform(-4.4,39.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E8471E").s().p("AKKBFQqKhVqJBVQgUACgQgMQgQgMgDgTQgDgUANgOQAMgQAUgCQKWhYKXBYQAUACAMAQQAMAOgDAUQgCATgQAMQgNAKgQAAIgHAAg");
	this.shape_12.setTransform(-4.9,-53.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F07E1B").s().p("AguHdInTgRQgWgEgfmZIgamWIhchdQMPgsF0AYQC6ANAcAVIhTBfIhRK/QgSA/gVASIgFADIACAAQAJABggAXQgUAOjHAAQhxAAiqgFg");
	this.shape_13.setTransform(-5.1,-4.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F3E600").s().p("AgWBbQgKgKAAgOIAAiFQAAgOAKgKQAKgKAMAAQAOAAAJAKQAKAKAAAOIAACFQAAAOgKAKQgJAKgOAAQgMAAgKgKg");
	this.shape_14.setTransform(-73.7,17.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F3E600").s().p("AicAsQgTAAgNgNQgNgNAAgSQAAgRANgNQANgNATgBIE5AAQATABANANQANANAAARQAAASgNANQgNANgTAAg");
	this.shape_15.setTransform(-51.1,17.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00A0C6").s().p("AgWBbQgKgKAAgOIAAiFQAAgOAKgKQAJgKANAAQAOAAAJAKQAKAKAAAOIAACFQAAAOgKAKQgKAKgNAAQgNAAgJgKg");
	this.shape_16.setTransform(73.7,15.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00A0C6").s().p("AicAsQgTABgNgNQgNgOAAgSQAAgRANgNQANgNATgBIE5AAQATABANANQANANAAARQAAATgNANQgNANgTgBg");
	this.shape_17.setTransform(51.2,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.txt2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-60.9,154.1,121.8);


(lib.Símbolo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.txt1 = new cjs.Text("901", "45px 'Calibri'");
	this.txt1.name = "txt1";
	this.txt1.textAlign = "center";
	this.txt1.lineHeight = 57;
	this.txt1.lineWidth = 100;
	this.txt1.setTransform(-6.3,-46.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8471E").s().p("Ak6AvQgUAAgOgOQgOgOAAgTQAAgTAOgNQAOgOAUAAIJ1AAQAUAAAOAOQAOANAAATQAAATgOAOQgOAOgUAAg");
	this.shape.setTransform(-1.3,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF1818").s().p("Ah6B3IDyjwIADADIjyDwg");
	this.shape_1.setTransform(29,43.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BF1818").s().p("Ah6h2IADgDIDyDwIgDADg");
	this.shape_2.setTransform(29,43.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BF1818").s().p("AirACIAAgDIFXAAIAAADg");
	this.shape_3.setTransform(28.9,43.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BF1818").s().p("AAACqIAAlUIABAAIAAFUg");
	this.shape_4.setTransform(29,43.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F07E1A").s().p("Ah3B4QgygxAAhHQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABHgyAxQgyAyhGAAQhFAAgygyg");
	this.shape_5.setTransform(28.9,43.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BF1818").s().p("Ah6B3IDyjwIADADIjyDwg");
	this.shape_6.setTransform(-32.5,43.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BF1818").s().p("Ah6h2IADgDIDyDwIgDADg");
	this.shape_7.setTransform(-32.5,43.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BF1818").s().p("AirACIAAgDIFXAAIAAADg");
	this.shape_8.setTransform(-32.5,43.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BF1818").s().p("AAACqIAAlUIABAAIAAFUg");
	this.shape_9.setTransform(-32.5,43.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F07E1A").s().p("Ah3B4QgygxAAhHQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABHgyAxQgyAyhGAAQhFAAgygyg");
	this.shape_10.setTransform(-32.5,43.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00A0C6").s().p("AnrAqQgSAAgMgNQgNgMAAgRQAAgQANgMQAMgNASAAIPXAAQASAAANANQAMAMgBAQQABARgMAMQgNANgSAAg");
	this.shape_11.setTransform(-1.6,39.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8CBE23").s().p("AKKBFQqKhUqJBUQgUACgQgLQgQgMgCgUQgDgUAMgNQAMgQAUgDQKWhYKXBYQAUADAMAQQANAOgDATQgDAUgQAMQgNAJgQAAIgHAAg");
	this.shape_12.setTransform(-2.2,-53.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F3E600").s().p("AguHdInTgRQgWgEgfmZIgamWIhchdQMPgsF0AYQC6ANAcAVIhTBfIhRK/QgSA/gVASIgFADIACAAQAJABggAXQgUAOjHAAQhxAAiqgFg");
	this.shape_13.setTransform(-3.1,-4.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E8471E").s().p("AgWBbQgKgKAAgOIAAiFQAAgOAKgKQAKgKAMAAQAOAAAJAKQAKAKAAAOIAACFQAAAOgKAKQgJAKgOAAQgMAAgKgKg");
	this.shape_14.setTransform(-70.9,17.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E8471E").s().p("AicAtQgTAAgNgOQgNgNAAgSQAAgRANgNQANgOATAAIE5AAQATAAANAOQANANAAARQAAASgNANQgNAOgTAAg");
	this.shape_15.setTransform(-48.3,17.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8CBE23").s().p("AgWBbQgKgKAAgOIAAiFQAAgOAKgKQAKgKAMAAQAOAAAJAKQAKAKAAAOIAACFQAAAOgKAKQgJAKgOAAQgMAAgKgKg");
	this.shape_16.setTransform(70.9,18.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8CBE23").s().p("AicAtQgTAAgNgOQgOgNAAgSQAAgRAOgNQANgOATAAIE5AAQASAAAOAOQANANAAARQAAASgNANQgNAOgTAAg");
	this.shape_17.setTransform(48.4,18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.txt1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.2,-60.9,148.5,121.9);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmBWIgGgBIgEgCIgBgEIAAiaIABgEIADgCIAGgBIAJgBIAJABIAHABIACACIABAEIAAATQAGgJAFgFQAEgGAFgEIAKgEQAEgBAGAAIAEAAIAGABIAFABIADACIACACIAAADIABAFIAAAKIAAALIgBAGQgBABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgEABIgDAAIgDgCIgFgBIgGgBQgDAAgEACQgEABgEADQgEADgEAGIgHANIAABfIgBAEIgEACIgHABIgLAAIgLAAg");
	this.shape.setTransform(55.8,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjBVQgLgEgIgGQgHgHgFgJQgEgKAAgMQAAgOAGgJQAFgLAKgEQALgHAQgDQAQgDASgBIAQAAIAAgJQAAgHgCgFQgBgHgEgDQgDgEgGgCQgFgBgHAAQgLAAgIACIgQAGIgLAFQgEADgDAAIgEgBIgDgEIgBgGIgBgHIABgJQACgDACgDIAIgFIAPgGIASgEQAJgCAJAAQASAAAOAEQANAEAIAHQAIAIAFALQADAMAAAQIAABoQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIgGACIgLABIgLgBQgFAAgBgCQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAAgNQgKAKgNAGQgMAGgNAAQgMAAgKgDgAgGANQgHACgEACQgFAEgDAFQgCAEAAAFQAAALAHAFQAFAGAMAAQAHAAAIgFQAHgFAJgJIAAgbIgRAAQgLAAgGACg");
	this.shape_1.setTransform(39.2,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBSQgOgGgJgLQgKgLgFgPQgFgQAAgVQAAgVAGgRQAGgRALgMQAKgLAPgFQAOgGAPAAIAOABIANAEIAKAEIAHAFIADADIABAEIABAFIAAAHQAAALgCAEQgCAEgCAAQgDAAgEgDIgIgFIgLgGQgGgCgJAAQgQAAgIANQgJAOAAAYQAAAMACAKQACAJAFAHQAEAGAFAEQAHADAJAAQAJAAAHgDIALgGIAIgGQAEgDACAAIADABIABADIABAGIABAKIgBAIIAAAFIgBADIgDAEIgHAEIgMAGIgOADQgIACgIAAQgQAAgOgGg");
	this.shape_2.setTransform(23.4,6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKB3IgGgBIgEgDIgBgDIAAiaIABgDIAEgCIAGgCIAKgBIAKABIAHACQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIAAADIAACaIAAADIgEADIgHABIgKAAIgKAAgAgThNQgFgFAAgNQAAgNAFgFQAFgFAOAAQAOAAAGAFQAFAFAAAMQAAAOgFAFQgGAFgOAAQgOAAgFgFg");
	this.shape_3.setTransform(11.3,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRB6IgGgBQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgBgDIAAh9IgUAAQgEAAgBgEQgCgEAAgKIABgIIABgGIADgDIACAAIAUAAIAAgOQAAgQADgMQADgMAHgIQAGgIAJgEQALgEAOAAIANABIAJACIAFADIADADIABAGIAAAJIAAAIIgBAEIgCADIgCAAIgDAAIgDgCIgGgBIgHgBQgFABgDABQgDABgCAEQgDADgBAFIgBANIAAAPIAcAAIAEAAIABADIACAGIAAAIQAAAKgCAEQgBAEgEAAIgcAAIAAB9IgBADIgDACIgIABIgIABIgLgBg");
	this.shape_4.setTransform(1.5,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKB3IgGgBIgEgDIgBgDIAAiaIABgDIAEgCIAGgCIAKgBIAKABIAHACQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIAAADIAACaIAAADIgEADIgHABIgKAAIgKAAgAgThNQgFgFAAgNQAAgNAFgFQAFgFAOAAQAOAAAGAFQAFAFAAAMQAAAOgFAFQgGAFgOAAQgOAAgFgFg");
	this.shape_5.setTransform(-8.9,2.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmBWIgGgBIgEgCIgBgEIAAiaIABgEIADgCIAGgBIAJgBIAJABIAHABIACACIABAEIAAATQAGgJAFgFQAEgGAFgEIAKgEQAEgBAGAAIAEAAIAGABIAFABIADACIACACIAAADIAAAFIABAKIgBALIAAAGQgBABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgEABIgDAAIgDgCIgFgBIgGgBQgDAAgEACQgEABgEADQgEADgEAGIgHANIAABfIgBAEIgEACIgHABIgLAAIgLAAg");
	this.shape_6.setTransform(-18.9,6.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcBTQgQgGgLgKQgKgLgFgRQgGgPABgXQgBgSAGgRQAFgRALgLQAKgNAPgFQAPgHARAAQATAAAOAGQAOAGAJAKQAJAKAEAOQAFAOAAARIAAAHQgBAGgDAEQgEAEgGAAIhdAAQgBAKADAIQADAIAFAGQAEAGAJADQAHACALAAQALABAJgCIAPgDIALgFIAGgBIADABIACABIABAGIAAAHIAAAGIgBAFIAAADIgCACQgCACgFACIgMAEIgTAEQgKABgMAAQgSAAgQgFgAgLg1QgGAEgEAFQgFAFgCAIQgCAHAAAIIA/AAQABgSgIgLQgIgKgQAAQgHAAgGACg");
	this.shape_7.setTransform(-35.2,6.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOBUIgJgBIgFgDIgCgFIgviLIgCgHIgBgDIAAgDIABgDQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAGgBIALgBIAMABIAHABQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAIACAEIAiBxIABAFIABgFIAjhxIACgEQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAIAHgBIALgBIAKABIAHABIADACIABADIAAACIgBADIAAADIgCAFIgvCLIgCAFIgFADIgJABIgPABIgOgBg");
	this.shape_8.setTransform(-52.8,6.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B8B30E").s().p("AAEABIgNgBIAIAAIALgBQABADgEAAIgDgBg");
	this.shape_9.setTransform(-87.3,28.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B8B30E").s().p("AAAgEIACADIgDAFg");
	this.shape_10.setTransform(-102.6,26.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B8B30E").s().p("AAAgGIACABIgDAMQAAgKABgDg");
	this.shape_11.setTransform(-104.3,6.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B8B30E").s().p("AgCgHIAHALIgIAEQACgCgBgNg");
	this.shape_12.setTransform(113.5,21.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B8B30E").s().p("AgDACIAHgLIgIATg");
	this.shape_13.setTransform(113.5,25.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B8B30E").s().p("AgOAFQgFgFAFgBIAQgEQgCACAJABQALACgEAAQgMAAgDACQgBAEgGAAIgIgBg");
	this.shape_14.setTransform(-29,-28.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B8B30E").s().p("AgBAHIADgNIAAANg");
	this.shape_15.setTransform(1.5,-32.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B8B30E").s().p("AgJABIANgDQANABgGABIgLADIgEAAQgMAAAHgCg");
	this.shape_16.setTransform(36.7,-29.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B8B30E").s().p("AgDgDQAEADAEAAIgJAEg");
	this.shape_17.setTransform(43.5,-30.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B8B30E").s().p("AgIACQgBAAgBgBQgBAAAAAAQAAgBAAAAQAAAAABAAIAVgBQABAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgJACIgEABIgFgBg");
	this.shape_18.setTransform(35.6,-32.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B8B30E").s().p("AgMAAQgBAAAJAAIARAAQgGAAABABg");
	this.shape_19.setTransform(61.7,-32.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B8B30E").s().p("AgFACIAGgEIAFAFg");
	this.shape_20.setTransform(70.5,-32.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B8B30E").s().p("AgCAAQASgHgGAHQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAEgEgBIgJABQgIAAANgEg");
	this.shape_21.setTransform(55.6,-35.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B8B30E").s().p("AADAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAIgLABIAIgBg");
	this.shape_22.setTransform(73.7,-33.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B8B30E").s().p("AgMAAIARgCQAIAAgCAEIACAAIgQABQgIAAgBgDg");
	this.shape_23.setTransform(71.4,-33.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B8B30E").s().p("AgFAAQAEgBAIAAIAAACIgHABQgJgBAEgBg");
	this.shape_24.setTransform(85.2,-31.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B8B30E").s().p("AgHAAIAPgBQgBAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIABACQgIgCgHAAg");
	this.shape_25.setTransform(67.1,-36);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B8B30E").s().p("AoEFyQhFgHgUADQAEgBACgCQgcAFgvgFQgqgEgEABIgEgHQgfAIgOACQgOABglgEIADgCQAAgBgEgCQgMAGgJACQgPADgWgBIABgCIg1ABQAAgHgOgBIgRAAIgVAAQgagDgPgIQgSgLAAgLQgNgCgSgRQgPgPgMgTQABgBAAgEQgQgPABgfIACgZQADgOgBgGQgCgJgDAAQgCABgEAGQAGgQgHgkQgHgjACgEQAAgMAFAAQAIAAAAgBQgBgPgJAAQgGAAAFgXQACANABgCQAAgGAOgZQAMgTgDgJIgEAKQgDgOAIggQAGgagIgDIgHADQAFgagCgKQgCgMAEgZIACABIABgcQABgMgGgIIgCAJIACgUIADgNIAEgOIAJgSQAAgEAEgHQAEgIAEgCQgDgCAHgLQAIgLAMgJQAVgRAYgHQgQAHADADQACABAJAAQAIgKAKgDQAKgDAQACQABgaArAAIgJACQgBABgBAAQgBAAAAABQAAAAAAAAQAAABABAAQAFADAKgEQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQgEADACACQANgGAWABQAdACAOgCQgHADACACIAHAGQACgHAWAFQASAFgHgJQAjAFBTABQBIAAAOAGQAFADANgDIAVgDIgBAGQARgGANgCQARgCATgFQgMAFADADQACADAOAFIAbgNIAGAJQAKgDAZADIgDAAIABACIACgCQAHgFAWgEQAdgEADgCQAGAGAQgCQAPgBAFAGQAFgDAKgCQgFgEAAgDQAAgDAIABIACAAIAFAHQATgCALAAIgLgEIAOAEIAEAAIgDAAQANADALgDQASAFAugGQAsgHAXAIQgPgDgDADQAPAAAmAEQAeAEAMgDIgCgHQAsgFAXAAIABgIIBAgBQAqgCAMAKQAEgEAWACQAcACAHgBIAEAGQAXACAcgEQAcAIAogDIBAgEIAAACIAqgEQgBAAgBABQAAAAAAAAQAAAAABAAQABAAABgBQAMgDAHABQAWgFAdAHIAaAAQgRADAHAEQANAHABACIARgGQADACgFACQgDACAGABIAcgEQAWgCAGgEQgCgDgJgCIAEgDQAOABABgBIgCgEQALAFATACQAOACAKAFQgIgGAaABQAfAAgIgHQAJAGAFAAQAEgBAGAFQgQgCgVAFIgiAIIAUAHQgHAHgVgEQgYgFgEABQAFgCALABQAIACACABIgFgIQgSgDgUAEIghAHQAJABgMADQgOAEAIAEIAPgBQAEACgGACIgOAEQgXgDhAAAQg4gBgJgEQAHACAMgBQAKgBAHgCIgWgEIAaADQASADAPgBQgBgBAEgJQAEgHgMgFQgagFgWAJQgaAKgegBIABgEQgBgEgTACQgfAEgVAJQgUAJAAAJQA1gKAFAIIgfAGQgRADgBADQgJgFAQgBQAOgBgMgFQgHABgHACIgJADQAFgDgIgDQgKgCgCgCQgUAAgfgDIg1gDQgHgEABgDQgQACgPAJQgRAKAGAEIgYgBQgLgCgLACIANAEIgEAAQgRgBgCAFQgMABgBgDQgBgEgDgBQgMAFAAACQgGgEALgKQAMgLgIgEQgGgEgagGIgZgHQgIAHADAUQACAUAJAJQAAADgJgEIgSgGQgOgFgTAFQgVAFgJgBIARgGQgDgCgRACQgRACgEACIAGgKQAGgIgGgDQgcgBgZAKQgYAKACAIIA9gKQABADgVAFQgWAFABAFIg4gDQAegCgKgFQgOAAgDgBIgMgFQAVgHAggRQAegRAOgKIgdAGIgHgFQgYAEgcAUQgHAFgXATQgPgBAAgKQAAgIAGgEQgVgBgWANQgVAMgWgBIAQAEIgbAAQgSgBACACQgHgEgDgGQgDgGAEgCIgkAQQADgCAAgIQAAgIABgBQgLgBgHAJQgGAIAGACIgYgHQgHgCgOgHQgHAAAEAIQAEAIAGABQgUAEgVgEQATgDgCgQIgCgYIhHArIAEgJQAEgIgBgBQgEAJgvADQglACgogBIAGAAQAHgEgSgBQgKgBgHAAIgBAAQgNgEgRAJQgRAJgOgGQAeABgCgKIgoAEQgXACAGAJIgRgDQgHgBAAgFIgxAJQAAAAABgBQABAAAAgBQAAAAABgBQAAAAAAgBQgBgCgKgBQALABAdgFQAVgEAJAGIgDgMQgCgFAIgFQgiADggAKIgzASIgrgGIgBAFIgJgJIgIAFQAAAAgBAAQAAAAAAgBQAAgBABAAQAAgBABgBQgGADgDADQgFgHANgPIAOAEQAHgHABgCQACgFgKgBIgGADQAKgJgGAAIgGABIgZALIgFADQAIgBAMADQgQAKgGALQgFALAMgCIgTAHIgEABIgEAJIgGAQIgEAKQgCAHgCAKQgBAAgDgDQAAgBgBAAQgBgBAAAAQgBAAAAAAQgBABAAAAQAAAIgDALIgGASIgDAKIgCAIQgBAJADACQACANAEACQAFADABAGQgDgBAAAEIAHARQAAABgBAAQAAAAAAAAQgBAAgBgBQAAgBgBgCQgCgFgCAMQAFAeABANQACATgCAUQABAVAHgLQAGgJgBAPQgHAGgCAEQgFAFAAAOIAHALQADAHACALIgKgCIABAXQgBAJgFAAQAFATgDANQADARAJgSIALgZQgCAIgDAaQgDARgGAJIgDgYQgGAZAGAUQAEAOgLALQABgNgDgLQgEgKgDAHIAFAZQgBABgCgGQgBgEgBAGIAIAVIACAFIAAAAIAAAFIADALIADAMIgBgBQAAAAgBAAQAAABAAAAQAAABAAABQAAABABABIABADIANAOQgEgEAAAFQAAAEAEAHQAGAIAHADQAEABAHgBIAJAAQAEABAFAGQgEAAgCgCIAHAJQAEgGAJABIAKABIALAAIAFABIAHgBQAIAAAHgBQAOgDABgGQANAFgIABQgRAEgOAEIAXAGQgRgBgKACQATAGAXgEQAIgCAYgHQADABABAHQAAAGATgCQAagCgJgIQgJgHALgBIAUALQAWgFAaACIArADQAIAAAEgDQAQADAggGQAfgFALABQgDACAIADIALAFIAngGQgJACgEADIgFAJIAQgCIANgDIgGADQgBABAAAAQAAABAAAAQAAABABAAQABABABAAIAtgKIgMgCIAYgBQASgBAKADQgCADgHAEQgJgEgHACQgEABgIAFQASgBAAACQgBADAGACQAPAAAIgFQAHgFgFgEQAWADAHgBQAMAAARgEIgFAIIAXgCIgSAKQAWACAFgHQAFgHAZACIAAAIQAFgBARgHQAKgEAJAFQAIgCgMgFQgIgDAYgBQAKAFAaADQAKgDgLgDQgHgCgGAAQAcgBATALQARAKAegFQgHgCACgHQABgFgbAAQAKgBAYAEQAWAEANgEIgQAJQAJAAAOgEIgCAHQAOgGAaACQAXACAJgIQgHAHAOgCQAVgDAFACQgLAEghABQgaAAgCAHQAGACAKgCQALgBAFACQgTAFgDACQAXAEAXgFIAjgJIgoADQACgHAKAAQAMAAAFgFQALAEAOgCQASgCAHABIgJABQAZAAAVAKQAVAKAFAAQAOABAPgEQAQgEgIgDIgUgCQgbgBAPgJQAMAJAdgEQAlgGAaAGQgMAEAHAEQAIAFgKACQARgBAHgCIAOgGIAHAGIAXgLQAGgDAegEQgJACALAEQALAEgGACQAWABAQgGIgCABQAYgBAWADQASACAZgDIgFgDQAjgFBBgBQBRAAAVgCIgWgDIAagBQAYgCAMADIgPACQABADAFADQAHAEALAAIAFgGIAHAFQALAAgDgEQgEgEAMAAQAHAIAyABQA1AAAKAHQAIgGgWAAQgVgBAIgFQAPAEAKABIgFgHIBTAGIBMACIgDACQAbADAIgOQACABgDAEQgDADAEAAQAIgJAMgGIAVgKQAagOgBgPQAEADAIgDQAHgDAIgGIAMgIQAGgBACAIIACgSQAHAGgLAbIgJAUQgFALAAAEIgHAHIgQAMIgSALIgIAEQABAAAAAGQABAEAFgDQgNAIgCACQgDADANgDQgaAKgcADIgOABIglgBQgegCg+ABIhbACQgzAAgngEQgFAAABACIAEAEQgNgFgHAEIgNAHIgggNQgIACACAEIACAFQgZABhAgFQg1gDgbAEQgHgCAAgFQABgEgLgBQAPAHggACQgfADAFADQgKgFghgEQgagCAFgLQgRgBgCAFQgCAEAHACQgxgBgaAHQgEgBhHgBQhCAAgPgIQAJAFgGABIgWADIAPAIIglgBQgKACAAgCQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAgBQgCgDgJgBQgOgBgJADQgJAFgHACIAEABIgSABIANgFQAQgGgZgCQgZAOgMgHQAPABACgEQACgCgIgDIgeAAIAKALIiDgFQhWgEgyABQAAgEgfgCQgegBAEgIIAEACQAQgBgNgFQgOgFgOABQAHACgLAHQgKAGAaABIgkAHQgIALgeAAIgYgBgAAWFrIAGACIAEgDIgCAAIgIABgAvAkyIALACQAGABADgCIgLgCIgJABg");
	this.shape_26.setTransform(-0.6,0.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B8B30E").s().p("AAFgKIAKARQgJgCgFABQgHAAgIAFg");
	this.shape_27.setTransform(-53.4,-29.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B8B30E").s().p("AgDAAQAPgBgNACg");
	this.shape_28.setTransform(-6.9,32);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B8B30E").s().p("AgQAAQANgDAUADQgKAAgRABIgGgBg");
	this.shape_29.setTransform(27.7,-35.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B8B30E").s().p("AgCgCQAAgBAAAAQAAAAABAAQAAAAABABQAAAAAAABIAEAFIgBAAQgDAAgCgGg");
	this.shape_30.setTransform(-111.1,27.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B8B30E").s().p("AADACIgRgEQAOABAOABQgBADgEAAIgGgBg");
	this.shape_31.setTransform(31,-35.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B8B30E").s().p("AgEAAQAAgCAJAAIgJAFQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAg");
	this.shape_32.setTransform(-70.7,29.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B8B30E").s().p("AgEADIAKgGIgGAGg");
	this.shape_33.setTransform(-99,-31.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B8B30E").s().p("AgIAEIgEgFQgBgEAJADIASAHQgMgDgKACg");
	this.shape_34.setTransform(-29.8,-36);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B8B30E").s().p("AgEABIAJgCIgBADg");
	this.shape_35.setTransform(75.6,-35.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B8B30E").s().p("AAJgDIgEAFIgNACg");
	this.shape_36.setTransform(79.7,-35.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B8B30E").s().p("AgPAAIAagDIAFAAIgCADQgEABgKgBIAAADg");
	this.shape_37.setTransform(96.5,-33.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B8B30E").s().p("AALAVIgJgGIAEAAQAAAAAAAAQABAAAAgBQAAAAgBgBQAAgBgBgBQgFgGgFgDQgFgNgBgJIAFAJIAMAVIADACQAFAJgCAAIgBAAg");
	this.shape_38.setTransform(107.3,-28.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B8B30E").s().p("AgFABIAMgGQgYACgLgCIAlgDIgBAAIAVADIgVABQAOACgKACQgHADAUgCIgMAGQgGADgMAAQgHgEAHgFgAAJgHIABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQgBgBAAAAg");
	this.shape_39.setTransform(88.3,-34.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B8B30E").s().p("AARADIgngBQACgCAQgDQARAFAKABIgJABg");
	this.shape_40.setTransform(83.1,-35.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B8B30E").s().p("AgQAQIADgCIgXADQgDgFATgHQARgFgFgCQAGACAEABQAGACARgCQAKgBgPgEQgUgEgBgCQALgDAEgBQADgCABgDQAOAKAEAJQAFAMgNACQgOgEgOADQgNABgCAGQgBgBAAAAQgBAAAAgBQAAAAAAgBQABAAAAgBg");
	this.shape_41.setTransform(78.9,-33.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B8B30E").s().p("AAFAAIAEAAIgQABQAGgBAGAAg");
	this.shape_42.setTransform(97.8,-35.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B8B30E").s().p("AgHAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIATAAQgGABgFAAIgGgBg");
	this.shape_43.setTransform(95.8,-35.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B8B30E").s().p("AgRAAQAUAAAHgBQAIAAAAABIgCACQgSAAgPgCg");
	this.shape_44.setTransform(93.1,-35.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B8B30E").s().p("AAEAFIgPgMIAXALQgFgCgBACIAAAEg");
	this.shape_45.setTransform(107.3,-31.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B8B30E").s().p("AAAACIgCABQgBABAAAAQAAAAgBgBQAAAAgBAAQgBAAAAgBQgDgHAAgCQAAAAABAAQAAAAABAAQAAAAABAAQABAAABABQAEAFAKAJQgIgIgCACg");
	this.shape_46.setTransform(110.7,-26.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B8B30E").s().p("AAAACIgGgIQAKAGADAHg");
	this.shape_47.setTransform(104.6,-34);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B8B30E").s().p("AgSACQAWgFALAAQgEAAAFADQAFACgEADQgSgFgRACg");
	this.shape_48.setTransform(94.3,-37);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B8B30E").s().p("AgIgGIAPAKIACADIgBAAQgDAAgNgNg");
	this.shape_49.setTransform(109.5,-30);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B8B30E").s().p("AgEAAIAAgFQgBgFACgBQgBACAEAIIAGANg");
	this.shape_50.setTransform(111.1,-29.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B8B30E").s().p("AgBABIACgLQABgBgBAKIAAANg");
	this.shape_51.setTransform(111.5,-5.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B8B30E").s().p("AgCgHQACAJAAgCIADgMQABAXgDACIgBAAQgBAAgBgUg");
	this.shape_52.setTransform(114,-13.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B8B30E").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgCgDABgCIABgDIACARIgCgJg");
	this.shape_53.setTransform(114.2,-17.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B8B30E").s().p("AgDgDQADgIAAAAQACAAACALQgBgCgCAEIgBAKg");
	this.shape_54.setTransform(115.2,-17);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B8B30E").s().p("AAAgHQAAABAAAAQAAABAAAAQAAABAAgBQABAAAAAAIAAAKIgBADg");
	this.shape_55.setTransform(114.9,-11.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B8B30E").s().p("AgDAeIADgDQAAgIgCgdQgCgWAEgHQAAAMAAAZIAEAqg");
	this.shape_56.setTransform(112.7,-1.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B8B30E").s().p("AAAAHIgCgPIAFARg");
	this.shape_57.setTransform(112.7,5.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B8B30E").s().p("AAAADQgCgBAAgDIACgCQACAAABAHIgDgBg");
	this.shape_58.setTransform(114.5,20.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B8B30E").s().p("AvDFJQg4AAgngoQgognAAg4IAAmDQAAg4AognQAngoA4AAIeHAAQA4AAAnAoQAoAnAAA4IAAGDQAAA4goAnQgnAog4AAg");
	this.shape_59.setTransform(0.6,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165,-37.5,330.1,75.2);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhgAwQgMAAgFgLQgFgLAAgaQAAgZAFgLQAFgLAMAAIDBAAQAGAAAEADQAEACACAFQAEAGABAJIABAWQAAAagGALQgEALgMAAg");
	this.shape.setTransform(-0.3,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B8B30E").s().p("AgBACIgBgFIAFADQgDAEAAAAIgBgCg");
	this.shape_1.setTransform(-24.7,25.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B8B30E").s().p("AAAgCIACAAIgDAFQgBgDACgCg");
	this.shape_2.setTransform(-34,10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B8B30E").s().p("AgDgDIAJAFIgLABQADgBgBgFg");
	this.shape_3.setTransform(44.3,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B8B30E").s().p("AgCABIAFgEIgDAHg");
	this.shape_4.setTransform(45.2,3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B8B30E").s().p("AgFAAIAEgHQAAACADAAQAFAAAAADQgGAAACADQACAGgFABQgGgGABgCg");
	this.shape_5.setTransform(-20.4,-29.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B8B30E").s().p("AgBgJIADASIgCABg");
	this.shape_6.setTransform(-9.6,-39.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B8B30E").s().p("AgDAAIAFgDQAGADgEAAIgEAEQgHgBAEgDg");
	this.shape_7.setTransform(6.4,-36.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B8B30E").s().p("AAAgFQABAGABABIgDAEg");
	this.shape_8.setTransform(9.5,-36.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B8B30E").s().p("AgEABQAAAAAAAAQgBgBAAAAQAAAAAAAAQABAAAAgBIAJgBQABABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgEACIgBABIgDgCg");
	this.shape_9.setTransform(6.6,-39.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B8B30E").s().p("AgFgCQABgBAEACIAGADQgBAAgBAAQgBAAAAAAQgBAAAAABQAAAAAAAAg");
	this.shape_10.setTransform(18.4,-36);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B8B30E").s().p("AgCAAIAFgDIgDAHg");
	this.shape_11.setTransform(21.8,-33.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B8B30E").s().p("AAAADQgNgCANgCQAMgFgHAGQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBABAAAAQgBABAAAAQgBABAAAAQAAAAAAAAIAAgBg");
	this.shape_12.setTransform(17.6,-41.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B8B30E").s().p("AgBAAIACAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAg");
	this.shape_13.setTransform(24.3,-34.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B8B30E").s().p("AgDABQgDgBACgEQAGABACABQAEACgGAEIABABIgGgEg");
	this.shape_14.setTransform(23.4,-35.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B8B30E").s().p("AgCABQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQABgBADACIgDADIgCgCg");
	this.shape_15.setTransform(27.3,-29.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B8B30E").s().p("AgDgCIAHACIgBAAIgBADQgCgEgDgBg");
	this.shape_16.setTransform(23.2,-38.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B8B30E").s().p("ABNHIQAHgIgNgCQAAAEgGAHQgHAHgEgFQAHAAAAgFQABgEgEgCIgPABIAGAOQgLABgXgBIgPgBIgzgJQgWgFgMgBQABgFgPgGQgOgFAFgKIABACQAIABgFgIQgFgIgGAAQADADgJAIQgHAHAMAEIgUAEQgHAKgJAAQgHgBgLgIIgTgPQgMgIgJAAQADgBABgCQgJAAgJgHQgIgFgHgHIgKgMQgEgFgDAAIAEgJQgUAAgGgDQgIgDgKgQIADgCQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBQgJACgGgBQgIgCgHgKIACgBIgTgUQAHgGgEgGIgNgKQgLgIgDgFQgFgIAHgIQgGAAgKgIIgPgNQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQgMgBgBgQIAAgMQgBgHgCgDQgEgDgEACQgCABgDAFQADgLgPgOIgKgKQgFgEABgDQgBgHAGgBIALgEQgDgHgMADQgIACADgNQAEAHABgDQABgDAOgRQAMgNgEgEIgEAGQgGgGAJgSQADgHAAgCQgBgEgHAAIgJACIADgNIgBgFQgDgFAFgOIACABQAAgDACgLQABgGgJgDIgCAEIACgcQgBgBgBgEQAAgEACgBQgIgBADgSIAGgVQAAAHAEAAIAIgCQgHgHAAgEQAAgEAHgGQgPgFgGgEQgJgIADgNIACAGQAAAAAAABQAAAAABAAQAAABABAAQAAAAABAAQADgBgCgHQABgBADADQADADADAAQgHgKAGgKQAHgOABgHQABAFAEAAIAIgBQgJgFALgHIAFgFQABgCgJgBQAPgNAUglIAQgWQAJgJAGAAQAFAAABgHIADgMIAFAGQABgLACgHQAEgIABgMQABAJAEACQADACAKgBIgCgVIAKAHQABgHAMgGIgBACIADABIgCgDQgDgIAGgLIAGgIQADgFgBgDQAIAFAFgHQAFgHAGAFQABgFACgEQgFgEgCgDQgDgDAFAAIABgBIAIAGQAFgHAGgEIgHgBIAIABIACgBIgBABQAIAAADgHQAIABAIgFQAFgEAIgJQAJgJAFgCQAJgEAKAEQgDgBgDABQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAAAABQAIgDAUgBQAQgBAFgFIgDgJQAXgNALgBIgCgKQAJAAAZgIQAIgCAKABQAIACAEAHQACgEAMABQANADAEgBIACAIQAKACARgDQAPAKAUAAIARgBQAKAAAHACIgBADIAXAAQgBAAAAAAQgBABABAAQAAAAAAAAQABgBABAAQAHgCAEACQAFgBAHADQAHAEAFAGIANAFQgKgBACAHQADAMgBABIALgDQAAADgDACQgBAAAAAAQgBABAAAAQAAABABAAQAAABABABIAPABQALACAGgDQAAgEgDgEQgBAAABgBIAEgCQAGAEABgBQABgBABgEQACAIAHAIQAFAGABAJQAAgJAMAHQAOAJABgJQAAAJACABQACABgBAHQgFgHgNgBIgVABIAEAMQgHAGgHgKQgGgLgDAAQAEAAADAEQADADgBADIAEgMQgDgDgFgDIgJgCIgTABQADAEgHACQgIACABAFIAHACQABADgEACIgJACQgFgGgLgFIgTgJIgSgGQgIgEgCgEQADADAFABQAGAAAEgCIgJgIQADABAIAHQAGAGAIABIAGgMQAEgJgDgIQgHgHgGAAQgFABgHAEQgIAFgEABQgIACgKgDIACgFQABgGgLABQgQADgLAKQgLAKgBANQAZgLABANIgPAEQgIADgBAFQgDgIAHAAQAGgBgEgGQgEgBgDADIgEAEQADgEgEgEIgFgGQgJAAgOgEIgKgDIgNgBQgDgHAAgDQgIADgGANQgHAMAEAGQgFABgGgCQgFgBgFADQAIAFgDAAQgIAAAAAHQgFABAAgDQgCgGgBgBQgFAGABAFQgEgFADgOQADgPgFgFQgGgHgMgEQgLgFgEAAQgBAKAIAZQAIAaAHAKQAAAFgGgFQgHgGgCAAQgIgFgGAJQgFAKgFgBIAFgJQgCgCgGAFQgHAFAAADIgCgOQgCgLgDgCQgHABgFAGQgDAEgDAJQgEAPAFAKIAPgTIAEgEQABAEgBADIgEAHQgGAJADAHIgWAGQAKgIgHgEQgFADgCgBIgHgDIAGgoIAGgpIgGAGIgFAHIgGgFQgJALAAAcQABAMAEAYQgHACgHgMQgGgJAAgGQgJAFABATQABATgIAEIAJAAQgBACgJAFQgGAEACABQgGgCgGgGQgGgFAAgEIABAbQAAgCgHgIIgIgKQgEADAGALQAEAIAEACIgOAAIgPgDQgCADAJAGQAIAFADAAQgDAKgJADQACgJgQgOIgXgVIAVA+IgIgKIgIgIQAHAJgJATIgJAPIgIANIABgCQgDgFgGAGQgDADgBADQgJACAIAMQAIANgKACQAIgLgNgGQABAGgFAMQgCALANACIgHAFQgDACgFgCIADAYQAAgBgBAAQAAgBAAAAQgBAAgBgBQAAAAgBAAQgDAAgCADQACgEgBgOQgCgLAIAAIgOgFQgIgDgEgFQgDAPAJATIAHAPIAJAOIgOARIAFACIgPABIAEAFIgFgCQABAFACABQgKgBgNgLIAKgEQgMgLgHAGIACADQgHgGgEABIAEATIAMgGQAQAaALgIIgKALIALAOIAIAQIgHgBQgDgCgCACQAIAHgLALIgGAIQgBAEAEABQACAGAHABQAGAAACADQgFAAAAABIALAHQgCABgEgCQgDgCgDAFIALARQAEAIgCAJQACAIAJgGQAIgGAAAHIgMAGQgFAEABAGIAJADQAGABADAEIgMADIACAJQAAADgGACQAJAGgCAGQAGAFAJgKIALgOQgBADgBAMQgBAHgHAGIgHgHQgEAMAKAFQAEACAAACQAAACgHAHQgCgFgGgDQgFgCgEAFIALAHQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAABQAIAEAJABIgBAAIAJAOIAAAAIgCAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAABABABIAMAHQgDgBgCADQgBADABAEQADAIAOgCQAMgCgCAIIgDgCIgBAIQAHgFAHADQADACAGAGQAMANALgJQgCAIgDgBQgIgCgJAAIABAMQgEgGgFgBQAAAKALAEQAFACAMAAQAAABgHAIQgFAFAIAEQAKAFADgKQAEgJAEACIgDAQQAHABAEACIAHAGIALAPQAEABACgCQADAFAFABIALABQAOAAADAFQgCABABAFIABAHIATAAQgFAAgEAFIgHAJQADABAFgBIAGAAQgHADABAEIAXgFIgEgDIAKABQAHACADAFIgHAIQgBgHgEABIgIAGQAIACgBACQgCAEACADQAGACAFgFQAFgEAAgGIAKAGQAGABAIgEIgFAKIAKgBIgLALQAGAEADgBQACgBACgEQACgFACgBQAEgBAGADIgCAJQADAAAIgIQAFgFADAHQADgCgDgHQgDgGAKABQADAIALAEQAEgDgEgEQgDgEgDAAQAMAAAHAPQAHANALgGQgCgCAAgDIAAgGQAAgEAAgBQgCgCgGAAQAEgCAIAGQAJAFAFgGIgGAMQABAAAIgGIAAAKQAEgGAEgBIAJABQAFAAACgBQADgDACgHQgCAKAGgEQAIgFACACQgDAGgOAEQgLACAAAIQADADAEgDQAEgCADACQgHAGgCAFQALAEAKgJIANgOIgRAGQAAgIAEgBQAFgBABgGQAGAEAGgFQAHgEADABIgCACQAJgCAMAKQANAKACgBQAHgBAFgHQAFgIgGgDIgJACQgLACACgOQAFAHAFgBQAEgBAFgEQAEgGAFgCQAHgEAJABQgDAHAGAEQAFAEgDAFQAHgFABgEIACgKIAHAGIABgSQABgFAIgLQgCAFAHACQAHACgBADQAJgFACgJIAAABQAGgHALgDIAHgDQAEgEADgFIgFgDQAEgJAIgJIAdghQAFgGAGgMIgIAFIAEgJQAEgKAHgBQgBAFgCABQAEACAFAAQAGABACgEIgFgGIAHABQACgFgFgBQgFgCACgEQANAEAKgTQAFgKADgEQAGgGAHAAQgGgHgFAJQgFAIgEgHIAFgCQADgBACgEIgJgCIALgQIAKgNQAIgLADgUIACABQAFgGAAgFQgBgEgGgFQADAAADADQACACADgBQgHgIABgGQABgFAGgGIAIgLQADgFgGgEQAJABATgIIAOgFQAGgBAFAEIgCgIQAGABAAANQAAAOAGADIgQAXIAHADQAFABABgCQgBAGABABQACACAFgFIgNAWQgHAMgDAKIgQAsQgRA3gbAZQgCAEAJAAQgKACADAGQAEAKAAABIgYADQAAAFAEACIAGADQgFAJgKAJIgSAOIgRANQgIAIgEAIQgFAAgEgFQgDgEgFADQAMACgLANIgHAJQgDADAEACQgGgCgHABIgLAFQgNAFgGgPQgIAEADAGQACAFAEAAQgMAHgFAEIgMAPQgDgBgLAFIgVAKQggAMgKgIQAGAFgCACQgHADgDADIALAJIgUAEQgFADAAgCQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgBgBAAQgBgEgFAAQgHABgFAFIgHAJIACABIgIADQgBAAAGgIgABnG/IAEABQAAgBAAgBQABAAAAgBQAAAAAAAAQgBgBAAAAIgEADgAlcCLQABADAHgBQADgCgDgDIgGgDIgCAGgAl9hNQAHgFgDgDQgEADAAAFgACUmjIABgBIgDgCgADNlvIAAAAIAAAAg");
	this.shape_17.setTransform(-0.9,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B8B30E").s().p("AgJgMIATAMQgEAAgBADQgBADACAIg");
	this.shape_18.setTransform(-29.2,-24);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B8B30E").s().p("AgCACQAKgJgJAKg");
	this.shape_19.setTransform(4.5,39.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B8B30E").s().p("AgCgBIAFABIAAACg");
	this.shape_20.setTransform(18.9,-40.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B8B30E").s().p("AgIAAQAIgFAJAGQgFgBgIACg");
	this.shape_21.setTransform(3.2,-45.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B8B30E").s().p("AABADIgHgHQAGACAHAEQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIgDgCg");
	this.shape_22.setTransform(4.9,-44.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B8B30E").s().p("AAAgBQAAgCAEADIgHADIADgEg");
	this.shape_23.setTransform(-20.5,30.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B8B30E").s().p("AgCgCIAFAEIgDABg");
	this.shape_24.setTransform(-41.1,-7.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B8B30E").s().p("AgHAAQgEgEAHABIANADQgGAAgDAEg");
	this.shape_25.setTransform(-26.1,-38);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B8B30E").s().p("AgCgBIAGgBIgEAEg");
	this.shape_26.setTransform(26.9,-36.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B8B30E").s().p("AgGABIAOgCIgIADg");
	this.shape_27.setTransform(28.6,-34.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B8B30E").s().p("AgCABIgEADIAAgJIANAIIgGADIAAAAQgBAAgCgFg");
	this.shape_28.setTransform(32.5,-26.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B8B30E").s().p("AgDAMQADABABgGQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgEAAQAEgHAFgJIgCAGQgBAHAAAFIACABQABAGgEAAIgEgBg");
	this.shape_29.setTransform(35,-21.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B8B30E").s().p("AgNAJQABgGAHgCIALgBIADgBIgEgBQAAAAgBAAQAAAAAAAAQAAABABAAQAAABABAAQgKgJgDgDIAQAKIAAAAIAAAAIAAAAIAFAIIgJgGQADAHgHAAQgDgBAGAHQgDgBgEABIgBAAQgFAAgEgEg");
	this.shape_30.setTransform(31.1,-30.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B8B30E").s().p("AAFAHIABAAIgNgNQAEgDAHACQABAMADAEg");
	this.shape_31.setTransform(29.4,-33.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B8B30E").s().p("AAAATQAAgJgHgCQgHgCgEAFQgBAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIADgDIgLgCQADgFANgCQAKgBAAgFQACAEgBAFQAAACAIADQAHAAgCgHIgFgNQALACAFgEQgCAOgIAKQgIANgHAAIgBAAg");
	this.shape_32.setTransform(25.8,-32);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B8B30E").s().p("AgCgBIAFABIgBACIgEgDg");
	this.shape_33.setTransform(34.8,-27.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B8B30E").s().p("AAAgDQACgBgBAIg");
	this.shape_34.setTransform(32,-31.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B8B30E").s().p("AgDgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIAGAFQgFAAgCgEg");
	this.shape_35.setTransform(34,-28.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B8B30E").s().p("AgGgGQAGAGAFAAQABABAAABQABAAAAABQAAAAAAABQAAAAAAABIgFACQgDgGgFgHg");
	this.shape_36.setTransform(33.3,-29.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B8B30E").s().p("AgBAAIACAAIABABg");
	this.shape_37.setTransform(36,-24.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B8B30E").s().p("AgEgEIAJAFQgCgBgDAEg");
	this.shape_38.setTransform(36.9,-23.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B8B30E").s().p("AgBgCIAJACQgFAAgDAAQgEADgEAAQABgGAGABg");
	this.shape_39.setTransform(37.4,-21.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B8B30E").s().p("AgBACIADgGQABAEgDAFg");
	this.shape_40.setTransform(36.8,-25.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B8B30E").s().p("AgJgHQAMACAHAFQgDAAgBADQgCAFgDAAQgBgLgJgEg");
	this.shape_41.setTransform(35.4,-30.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B8B30E").s().p("AgDgCIAIAEIgDABQgCAAgDgFg");
	this.shape_42.setTransform(38.2,-23.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B8B30E").s().p("AgCADIACgEQABgEADAAQgCACAAADIAAAGg");
	this.shape_43.setTransform(39.1,-23.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B8B30E").s().p("AgEAAQAEACABgCIABgGQAGAJgEADIgCABQgCAAgEgHg");
	this.shape_44.setTransform(41.3,-16.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B8B30E").s().p("AAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgEAAAAAAIACgCIAHAFIgFgCg");
	this.shape_45.setTransform(41,-18.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B8B30E").s().p("AgEAAQACgEACgBQABgBAEAFQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAFgBABg");
	this.shape_46.setTransform(42.2,-18.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B8B30E").s().p("AAAAAQABgDAAADIgBACIAAgCg");
	this.shape_47.setTransform(43.3,-15.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B8B30E").s().p("AgCgCIADgBIACAFIgBACg");
	this.shape_48.setTransform(42.9,-15.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B8B30E").s().p("AgCAQIACgCQAAgFgFgLQgGgKAGgGQgBAHAGALIAJATg");
	this.shape_49.setTransform(41.9,-10.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B8B30E").s().p("AABADIgFgGIAIAHg");
	this.shape_50.setTransform(42.5,-6.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B8B30E").s().p("AAAACQgEgBABgBIADAAQADgBABADIgEAAg");
	this.shape_51.setTransform(45.6,0.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B8B30E").s().p("AkhEjQh5h5AAiqQAAipB5h5QB4h4CpAAQCqAAB4B4QB5B5AACpQAACqh5B5Qh4B4iqAAQipAAh4h4g");
	this.shape_52.setTransform(-0.9,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-69.6,92.1,121.2);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWDfIgPgDQgGgDgCgEQgDgDAAgFIAAifIiRAAQgEAAgEgCQgDgDgDgFQgDgFgBgJQgCgJAAgNQAAgLABgJQABgJADgFQADgGADgCQADgDAEAAICTAAIAAieQAAgFADgEQACgEAGgCQAGgDAJgBQAJgCANAAQANAAAKACQAJABAGADQAFACADAEQACAEAAAFIAACeICTAAQAEAAAEADQADACADAGQACAFACAJQABAJAAALQAAANgBAJQgCAJgDAFQgCAFgEADQgEACgEAAIiSAAIAACfQAAAFgCADQgDAEgFADIgPADQgKACgNAAQgNAAgJgCg");
	this.shape.setTransform(-1.1,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B8B30E").s().p("AgBACIgBgFIAFADQgDAEAAAAIgBgCg");
	this.shape_1.setTransform(-24.7,25.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B8B30E").s().p("AAAgCIACAAIgDAFQgBgDACgCg");
	this.shape_2.setTransform(-34,10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B8B30E").s().p("AgDgDIAJAFIgLABQADgBgBgFg");
	this.shape_3.setTransform(44.3,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B8B30E").s().p("AgCABIAFgEIgDAHg");
	this.shape_4.setTransform(45.2,3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B8B30E").s().p("AgFAAIAEgHQAAACADAAQAFAAAAADQgGAAACADQACAGgFABQgGgGABgCg");
	this.shape_5.setTransform(-20.4,-29.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B8B30E").s().p("AgBgJIADASIgCABg");
	this.shape_6.setTransform(-9.6,-39.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B8B30E").s().p("AgDAAIAFgDQAGADgEAAIgEAEQgHgBAEgDg");
	this.shape_7.setTransform(6.4,-36.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B8B30E").s().p("AAAgFQABAGABABIgDAEg");
	this.shape_8.setTransform(9.5,-36.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B8B30E").s().p("AgEABQAAAAAAAAQgBgBAAAAQAAAAAAAAQABAAAAgBIAJgBQABABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIgEACIgBABIgDgCg");
	this.shape_9.setTransform(6.6,-39.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B8B30E").s().p("AgFgCQABgBAEACIAGADQgBAAgBAAQgBAAAAAAQgBAAAAABQAAAAAAAAg");
	this.shape_10.setTransform(18.4,-36);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B8B30E").s().p("AgCAAIAFgDIgDAHg");
	this.shape_11.setTransform(21.8,-33.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B8B30E").s().p("AAAADQgNgCANgCQAMgFgHAGQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBABAAAAQgBABAAAAQgBABAAAAQAAAAAAAAIAAgBg");
	this.shape_12.setTransform(17.6,-41.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B8B30E").s().p("AgBAAIACAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAg");
	this.shape_13.setTransform(24.3,-34.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B8B30E").s().p("AgDABQgDgBACgEQAGABACABQAEACgGAEIABABIgGgEg");
	this.shape_14.setTransform(23.4,-35.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B8B30E").s().p("AgCABQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQABgBADACIgDADIgCgCg");
	this.shape_15.setTransform(27.3,-29.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B8B30E").s().p("AgDgCIAHACIgBAAIgBADQgCgEgDgBg");
	this.shape_16.setTransform(23.2,-38.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B8B30E").s().p("ABNHIQAHgIgNgCQAAAEgGAHQgHAHgEgFQAHAAAAgFQABgEgEgCIgPABIAGAOQgLABgXgBIgPgBIgzgJQgWgFgMgBQABgFgPgGQgOgFAFgKIABACQAIABgFgIQgFgIgGAAQADADgJAIQgHAHAMAEIgUAEQgHAKgJAAQgHgBgLgIIgTgPQgMgIgJAAQADgBABgCQgJAAgJgHQgIgFgHgHIgKgMQgEgFgDAAIAEgJQgUAAgGgDQgIgDgKgQIADgCQAAAAAAgBQABAAAAAAQAAgBAAgBQAAAAAAgBQgJACgGgBQgIgCgHgKIACgBIgTgUQAHgGgEgGIgNgKQgLgIgDgFQgFgIAHgIQgGAAgKgIIgPgNQABAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQgMgBgBgQIAAgMQgBgHgCgDQgEgDgEACQgCABgDAFQADgLgPgOIgKgKQgFgEABgDQgBgHAGgBIALgEQgDgHgMADQgIACADgNQAEAHABgDQABgDAOgRQAMgNgEgEIgEAGQgGgGAJgSQADgHAAgCQgBgEgHAAIgJACIADgNIgBgFQgDgFAFgOIACABQAAgDACgLQABgGgJgDIgCAEIACgcQgBgBgBgEQAAgEACgBQgIgBADgSIAGgVQAAAHAEAAIAIgCQgHgHAAgEQAAgEAHgGQgPgFgGgEQgJgIADgNIACAGQAAAAAAABQAAAAABAAQAAABABAAQAAAAABAAQADgBgCgHQABgBADADQADADADAAQgHgKAGgKQAHgOABgHQABAFAEAAIAIgBQgJgFALgHIAFgFQABgCgJgBQAPgNAUglIAQgWQAJgJAGAAQAFAAABgHIADgMIAFAGQABgLACgHQAEgIABgMQABAJAEACQADACAKgBIgCgVIAKAHQABgHAMgGIgBACIADABIgCgDQgDgIAGgLIAGgIQADgFgBgDQAIAFAFgHQAFgHAGAFQABgFACgEQgFgEgCgDQgDgDAFAAIABgBIAIAGQAFgHAGgEIgHgBIAIABIACgBIgBABQAIAAADgHQAIABAIgFQAFgEAIgJQAJgJAFgCQAJgEAKAEQgDgBgDABQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAAAABQAIgDAUgBQAQgBAFgFIgDgJQAXgNALgBIgCgKQAJAAAZgIQAIgCAKABQAIACAEAHQACgEAMABQANADAEgBIACAIQAKACARgDQAPAKAUAAIARgBQAKAAAHACIgBADIAXAAQgBAAAAAAQgBABABAAQAAAAAAAAQABgBABAAQAHgCAEACQAFgBAHADQAHAEAFAGIANAFQgKgBACAHQADAMgBABIALgDQAAADgDACQgBAAAAAAQgBABAAAAQAAABABAAQAAABABABIAPABQALACAGgDQAAgEgDgEQgBAAABgBIAEgCQAGAEABgBQABgBABgEQACAIAHAIQAFAGABAJQAAgJAMAHQAOAJABgJQAAAJACABQACABgBAHQgFgHgNgBIgVABIAEAMQgHAGgHgKQgGgLgDAAQAEAAADAEQADADgBADIAEgMQgDgDgFgDIgJgCIgTABQADAEgHACQgIACABAFIAHACQABADgEACIgJACQgFgGgLgFIgTgJIgSgGQgIgEgCgEQADADAFABQAGAAAEgCIgJgIQADABAIAHQAGAGAIABIAGgMQAEgJgDgIQgHgHgGAAQgFABgHAEQgIAFgEABQgIACgKgDIACgFQABgGgLABQgQADgLAKQgLAKgBANQAZgLABANIgPAEQgIADgBAFQgDgIAHAAQAGgBgEgGQgEgBgDADIgEAEQADgEgEgEIgFgGQgJAAgOgEIgKgDIgNgBQgDgHAAgDQgIADgGANQgHAMAEAGQgFABgGgCQgFgBgFADQAIAFgDAAQgIAAAAAHQgFABAAgDQgCgGgBgBQgFAGABAFQgEgFADgOQADgPgFgFQgGgHgMgEQgLgFgEAAQgBAKAIAZQAIAaAHAKQAAAFgGgFQgHgGgCAAQgIgFgGAJQgFAKgFgBIAFgJQgCgCgGAFQgHAFAAADIgCgOQgCgLgDgCQgHABgFAGQgDAEgDAJQgEAPAFAKIAPgTIAEgEQABAEgBADIgEAHQgGAJADAHIgWAGQAKgIgHgEQgFADgCgBIgHgDIAGgoIAGgpIgGAGIgFAHIgGgFQgJALAAAcQABAMAEAYQgHACgHgMQgGgJAAgGQgJAFABATQABATgIAEIAJAAQgBACgJAFQgGAEACABQgGgCgGgGQgGgFAAgEIABAbQAAgCgHgIIgIgKQgEADAGALQAEAIAEACIgOAAIgPgDQgCADAJAGQAIAFADAAQgDAKgJADQACgJgQgOIgXgVIAVA+IgIgKIgIgIQAHAJgJATIgJAPIgIANIABgCQgDgFgGAGQgDADgBADQgJACAIAMQAIANgKACQAIgLgNgGQABAGgFAMQgCALANACIgHAFQgDACgFgCIADAYQAAgBgBAAQAAgBAAAAQgBAAgBgBQAAAAgBAAQgDAAgCADQACgEgBgOQgCgLAIAAIgOgFQgIgDgEgFQgDAPAJATIAHAPIAJAOIgOARIAFACIgPABIAEAFIgFgCQABAFACABQgKgBgNgLIAKgEQgMgLgHAGIACADQgHgGgEABIAEATIAMgGQAQAaALgIIgKALIALAOIAIAQIgHgBQgDgCgCACQAIAHgLALIgGAIQgBAEAEABQACAGAHABQAGAAACADQgFAAAAABIALAHQgCABgEgCQgDgCgDAFIALARQAEAIgCAJQACAIAJgGQAIgGAAAHIgMAGQgFAEABAGIAJADQAGABADAEIgMADIACAJQAAADgGACQAJAGgCAGQAGAFAJgKIALgOQgBADgBAMQgBAHgHAGIgHgHQgEAMAKAFQAEACAAACQAAACgHAHQgCgFgGgDQgFgCgEAFIALAHQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAABQAIAEAJABIgBAAIAJAOIAAAAIgCAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAABABABIAMAHQgDgBgCADQgBADABAEQADAIAOgCQAMgCgCAIIgDgCIgBAIQAHgFAHADQADACAGAGQAMANALgJQgCAIgDgBQgIgCgJAAIABAMQgEgGgFgBQAAAKALAEQAFACAMAAQAAABgHAIQgFAFAIAEQAKAFADgKQAEgJAEACIgDAQQAHABAEACIAHAGIALAPQAEABACgCQADAFAFABIALABQAOAAADAFQgCABABAFIABAHIATAAQgFAAgEAFIgHAJQADABAFgBIAGAAQgHADABAEIAXgFIgEgDIAKABQAHACADAFIgHAIQgBgHgEABIgIAGQAIACgBACQgCAEACADQAGACAFgFQAFgEAAgGIAKAGQAGABAIgEIgFAKIAKgBIgLALQAGAEADgBQACgBACgEQACgFACgBQAEgBAGADIgCAJQADAAAIgIQAFgFADAHQADgCgDgHQgDgGAKABQADAIALAEQAEgDgEgEQgDgEgDAAQAMAAAHAPQAHANALgGQgCgCAAgDIAAgGQAAgEAAgBQgCgCgGAAQAEgCAIAGQAJAFAFgGIgGAMQABAAAIgGIAAAKQAEgGAEgBIAJABQAFAAACgBQADgDACgHQgCAKAGgEQAIgFACACQgDAGgOAEQgLACAAAIQADADAEgDQAEgCADACQgHAGgCAFQALAEAKgJIANgOIgRAGQAAgIAEgBQAFgBABgGQAGAEAGgFQAHgEADABIgCACQAJgCAMAKQANAKACgBQAHgBAFgHQAFgIgGgDIgJACQgLACACgOQAFAHAFgBQAEgBAFgEQAEgGAFgCQAHgEAJABQgDAHAGAEQAFAEgDAFQAHgFABgEIACgKIAHAGIABgSQABgFAIgLQgCAFAHACQAHACgBADQAJgFACgJIAAABQAGgHALgDIAHgDQAEgEADgFIgFgDQAEgJAIgJIAdghQAFgGAGgMIgIAFIAEgJQAEgKAHgBQgBAFgCABQAEACAFAAQAGABACgEIgFgGIAHABQACgFgFgBQgFgCACgEQANAEAKgTQAFgKADgEQAGgGAHAAQgGgHgFAJQgFAIgEgHIAFgCQADgBACgEIgJgCIALgQIAKgNQAIgLADgUIACABQAFgGAAgFQgBgEgGgFQADAAADADQACACADgBQgHgIABgGQABgFAGgGIAIgLQADgFgGgEQAJABATgIIAOgFQAGgBAFAEIgCgIQAGABAAANQAAAOAGADIgQAXIAHADQAFABABgCQgBAGABABQACACAFgFIgNAWQgHAMgDAKIgQAsQgRA3gbAZQgCAEAJAAQgKACADAGQAEAKAAABIgYADQAAAFAEACIAGADQgFAJgKAJIgSAOIgRANQgIAIgEAIQgFAAgEgFQgDgEgFADQAMACgLANIgHAJQgDADAEACQgGgCgHABIgLAFQgNAFgGgPQgIAEADAGQACAFAEAAQgMAHgFAEIgMAPQgDgBgLAFIgVAKQggAMgKgIQAGAFgCACQgHADgDADIALAJIgUAEQgFADAAgCQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgBgBAAQgBgEgFAAQgHABgFAFIgHAJIACABIgIADQgBAAAGgIgABnG/IAEABQAAgBAAgBQABAAAAgBQAAAAAAAAQgBgBAAAAIgEADgAlcCLQABADAHgBQADgCgDgDIgGgDIgCAGgAl9hNQAHgFgDgDQgEADAAAFgACUmjIABgBIgDgCgADNlvIAAAAIAAAAg");
	this.shape_17.setTransform(-0.9,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B8B30E").s().p("AgJgMIATAMQgEAAgBADQgBADACAIg");
	this.shape_18.setTransform(-29.2,-24);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B8B30E").s().p("AgCACQAKgJgJAKg");
	this.shape_19.setTransform(4.5,39.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B8B30E").s().p("AgCgBIAFABIAAACg");
	this.shape_20.setTransform(18.9,-40.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B8B30E").s().p("AgIAAQAIgFAJAGQgFgBgIACg");
	this.shape_21.setTransform(3.2,-45.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B8B30E").s().p("AABADIgHgHQAGACAHAEQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIgDgCg");
	this.shape_22.setTransform(4.9,-44.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B8B30E").s().p("AAAgBQAAgCAEADIgHADIADgEg");
	this.shape_23.setTransform(-20.5,30.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B8B30E").s().p("AgCgCIAFAEIgDABg");
	this.shape_24.setTransform(-41.1,-7.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B8B30E").s().p("AgHAAQgEgEAHABIANADQgGAAgDAEg");
	this.shape_25.setTransform(-26.1,-38);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B8B30E").s().p("AgCgBIAGgBIgEAEg");
	this.shape_26.setTransform(26.9,-36.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B8B30E").s().p("AgGABIAOgCIgIADg");
	this.shape_27.setTransform(28.6,-34.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B8B30E").s().p("AgCABIgEADIAAgJIANAIIgGADIAAAAQgBAAgCgFg");
	this.shape_28.setTransform(32.5,-26.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B8B30E").s().p("AgDAMQADABABgGQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgEAAQAEgHAFgJIgCAGQgBAHAAAFIACABQABAGgEAAIgEgBg");
	this.shape_29.setTransform(35,-21.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B8B30E").s().p("AgNAJQABgGAHgCIALgBIADgBIgEgBQAAAAgBAAQAAAAAAAAQAAABABAAQAAABABAAQgKgJgDgDIAQAKIAAAAIAAAAIAAAAIAFAIIgJgGQADAHgHAAQgDgBAGAHQgDgBgEABIgBAAQgFAAgEgEg");
	this.shape_30.setTransform(31.1,-30.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B8B30E").s().p("AAFAHIABAAIgNgNQAEgDAHACQABAMADAEg");
	this.shape_31.setTransform(29.4,-33.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B8B30E").s().p("AAAATQAAgJgHgCQgHgCgEAFQgBAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIADgDIgLgCQADgFANgCQAKgBAAgFQACAEgBAFQAAACAIADQAHAAgCgHIgFgNQALACAFgEQgCAOgIAKQgIANgHAAIgBAAg");
	this.shape_32.setTransform(25.8,-32);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B8B30E").s().p("AgCgBIAFABIgBACIgEgDg");
	this.shape_33.setTransform(34.8,-27.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B8B30E").s().p("AAAgDQACgBgBAIg");
	this.shape_34.setTransform(32,-31.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B8B30E").s().p("AgDgBQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABAAIAGAFQgFAAgCgEg");
	this.shape_35.setTransform(34,-28.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B8B30E").s().p("AgGgGQAGAGAFAAQABABAAABQABAAAAABQAAAAAAABQAAAAAAABIgFACQgDgGgFgHg");
	this.shape_36.setTransform(33.3,-29.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B8B30E").s().p("AgBAAIACAAIABABg");
	this.shape_37.setTransform(36,-24.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B8B30E").s().p("AgEgEIAJAFQgCgBgDAEg");
	this.shape_38.setTransform(36.9,-23.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B8B30E").s().p("AgBgCIAJACQgFAAgDAAQgEADgEAAQABgGAGABg");
	this.shape_39.setTransform(37.4,-21.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B8B30E").s().p("AgBACIADgGQABAEgDAFg");
	this.shape_40.setTransform(36.8,-25.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B8B30E").s().p("AgJgHQAMACAHAFQgDAAgBADQgCAFgDAAQgBgLgJgEg");
	this.shape_41.setTransform(35.4,-30.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B8B30E").s().p("AgDgCIAIAEIgDABQgCAAgDgFg");
	this.shape_42.setTransform(38.2,-23.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B8B30E").s().p("AgCADIACgEQABgEADAAQgCACAAADIAAAGg");
	this.shape_43.setTransform(39.1,-23.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B8B30E").s().p("AgEAAQAEACABgCIABgGQAGAJgEADIgCABQgCAAgEgHg");
	this.shape_44.setTransform(41.3,-16.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B8B30E").s().p("AAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgEAAAAAAIACgCIAHAFIgFgCg");
	this.shape_45.setTransform(41,-18.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B8B30E").s().p("AgEAAQACgEACgBQABgBAEAFQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAFgBABg");
	this.shape_46.setTransform(42.2,-18.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B8B30E").s().p("AAAAAQABgDAAADIgBACIAAgCg");
	this.shape_47.setTransform(43.3,-15.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B8B30E").s().p("AgCgCIADgBIACAFIgBACg");
	this.shape_48.setTransform(42.9,-15.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B8B30E").s().p("AgCAQIACgCQAAgFgFgLQgGgKAGgGQgBAHAGALIAJATg");
	this.shape_49.setTransform(41.9,-10.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B8B30E").s().p("AABADIgFgGIAIAHg");
	this.shape_50.setTransform(42.5,-6.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B8B30E").s().p("AAAACQgEgBABgBIADAAQADgBABADIgEAAg");
	this.shape_51.setTransform(45.6,0.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B8B30E").s().p("AkhEjQh5h5AAiqQAAipB5h5QB4h4CpAAQCqAAB4B4QB5B5AACpQAACqh5B5Qh4B4iqAAQipAAh4h4g");
	this.shape_52.setTransform(-0.9,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-66.8,92.1,121.2);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCFF00").s().p("AmEGEQihihAAjjQAAjiChihQChihDjAAQDjAAChChQChChAADiQAADjihChQihChjjAAQjjAAihihg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10).to({_off:true},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-55,110,110);


(lib.Símbolo2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 8
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#999999").s().p("Ag/BKIghhTIAihDIBGgYIA+AhIAbA+IgaBKIg/Agg");
	this.shape_53.setTransform(-0.9,6.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C0C0C0").s().p("AgoAtIgRgtIASgvIAogLIAkATIAVAnIgSArIgoAQg");
	this.shape_54.setTransform(3.2,5.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#999999").s().p("AhBBAIgdg9IAahAIBGghIBAAYIAcBHIgcBBIhCAdg");
	this.shape_55.setTransform(0.2,10);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C9C9C9").s().p("AgjAfIgNgfIANgjIAjgOIAhAKIAQAnIgSAhIgjARg");
	this.shape_56.setTransform(1,3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C9C9C9").s().p("AggAnIgQgpIAQgkIAggJIAjAJIAOApIgRAhIggAMg");
	this.shape_57.setTransform(2.4,4.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A8A8A8").s().p("AgzA/Igcg+IAag0IAygiIA8AgIAXA+IgaA4Ig0AVg");
	this.shape_58.setTransform(0.6,1.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#DEDEDE").s().p("AgUASIgJgSIAKgYIATgHIAUAIIAKAWIgKAWIgUALg");
	this.shape_59.setTransform(-0.4,1.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#999999").s().p("Ag/BOIgghHIAfhFIBEgnIA6AeIAiBOIghBDIg4Abg");
	this.shape_60.setTransform(8.5,-6.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#999999").s().p("AhCBHIgehPIAbg+IBHgeIA6AiIAlA9IgeBEIg8Amg");
	this.shape_61.setTransform(1.7,-17.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#999999").s().p("AhGBTIgYhWIAag+IBKggIAzAdIAmBEIglBLIhAAXg");
	this.shape_62.setTransform(10.8,-13.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#999999").s().p("Ag7A9IghhEIAZhEIBBgbIBEAjIAbBDIgbA+Ig8Apg");
	this.shape_63.setTransform(1.8,-13.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#999999").s().p("AhBBSIgchWIAgg5IA5gmIBDAnIAeA8IgeBQIhGATg");
	this.shape_64.setTransform(-1.3,-10.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#999999").s().p("AhBBIIgahBIAXhJIBAgbIBHAdIAZBDIgiA/Ig6Acg");
	this.shape_65.setTransform(-0.3,-18.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#999999").s().p("AhFBMIgbg8IAbhSIBMgeIA4AmIAiA8IggBJIhEAWg");
	this.shape_66.setTransform(3.5,-20.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#999999").s().p("AhBBCIgdhAIAcg6IBKgvIA+ApIAZBJIghA6Ig3Ajg");
	this.shape_67.setTransform(3.6,-20.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#999999").s().p("Ag6BBIggg8IAdhJIA7gmIA/AeIAeBMIgeA+Ig+Atg");
	this.shape_68.setTransform(1.7,-13.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#999999").s().p("Ag/BDIgeg+IAahBIA7gkIBKAUIAcBMIgaBKIhLAYg");
	this.shape_69.setTransform(14,-25);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#999999").s().p("Ag9BEIgdhCIAdhRIA9gSIA/AQIAbBEIgfBUIhEAcg");
	this.shape_70.setTransform(3,-21.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#999999").s().p("Ag8BNIgjhSIAhhEIA3gZIBHAgIAfBHIgdBKIhEAUg");
	this.shape_71.setTransform(9.7,-18.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#999999").s().p("AhFA1IgXgzIAWhIIBMgdIA2AVIAhBGIgkBKIg3Aig");
	this.shape_72.setTransform(9.5,-26.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#999999").s().p("Ag6BAIgnhCIAghGIA9gSIBBAaIAlA6IgkBGIg2Abg");
	this.shape_73.setTransform(3.1,-21.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#999999").s().p("Ag+BOIgjhVIAng0IAzgrIBDAhIAmBJIgdA4IhBArg");
	this.shape_74.setTransform(6.4,-19.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#999999").s().p("Ag6BEIgkg7IAlhWIA7gYIA/AnIAeBEIgaA6IhEAmg");
	this.shape_75.setTransform(13.4,-23.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#999999").s().p("Ag7A6Iggg6IAbhJIBHgXIA3AjIAeA9IgVBMIhEAVg");
	this.shape_76.setTransform(-2.1,-15);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#999999").s().p("Ag4BOIgohGIAhhPIA8ghIBBAoIAjBAIgdBKIhEAfg");
	this.shape_77.setTransform(12.7,-35);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#999999").s().p("AhBA7Igdg0IAchVIA/gRIBAANIAiBOIghBHIhKAdg");
	this.shape_78.setTransform(7.4,-31.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#C0C0C0").s().p("AgrAkIgNgmIARgjIAhgWIAtALIASAwIgYAsIgpAQg");
	this.shape_79.setTransform(3,-22.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#999999").s().p("AhABCIgghCIAgg9IA7glIBDAgIAjBHIgmA+IhCAgg");
	this.shape_80.setTransform(10.1,-32.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B5B5B5").s().p("AgxA2IgPg5IAPgsIA1gaIAtAUIAQA1IgRAyIg0AYg");
	this.shape_81.setTransform(1.7,-29.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D8D8D8").s().p("AgVAbIgNgXIAMgZIAWgQIAZALIALAeIgJAZIgbAJg");
	this.shape_82.setTransform(10.2,-41.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E3E3E3").s().p("AgPAWIgKgUIAJgVIAQgJIASAKIAIASIgJAWIgRAHg");
	this.shape_83.setTransform(12.5,-41.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E3E3E3").s().p("AgPAUIgKgTIAKgVIAPgEIARADIAJASIgKAWIgPAGg");
	this.shape_84.setTransform(1.2,-39.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#999999").s().p("AhABJIgfhSIAghEIBHgXIA9AhIAbA9IgaBLIg/Afg");
	this.shape_85.setTransform(-1,5.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C9C9C9").s().p("AgiAnIgOgnIAPgoIAigJIAeARIASAgIgPAlIgiANg");
	this.shape_86.setTransform(3.2,3.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#A8A8A8").s().p("Ag3A2IgYg0IAVg2IA8gcIA2AUIAYA8IgYA4Ig4AZg");
	this.shape_87.setTransform(0,7.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D1D1D1").s().p("AgdAaIgMgaIAMgdIAdgMIAbAIIAPAhIgQAcIgdAOg");
	this.shape_88.setTransform(0.9,1.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D1D1D1").s().p("AgbAhIgOgjIAOgeIAbgIIAdAIIANAiIgPAcIgbALg");
	this.shape_89.setTransform(2.4,3.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#B5B5B5").s().p("AgrA1IgYg0IAXgsIAqgdIAyAbIAUA0IgWAxIgtARg");
	this.shape_90.setTransform(0.5,-0.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E3E3E3").s().p("AgRAQIgIgQIAJgUIAQgGIARAHIAJATIgJASIgRAJg");
	this.shape_91.setTransform(-0.5,0.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#999999").s().p("Ag/BPIgghIIAfhFIBEgnIA6AeIAiBOIghBEIg4Aag");
	this.shape_92.setTransform(8.6,-7.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#999999").s().p("AhCBHIgehQIAbg+IBHgdIA6AiIAlA9IgeBEIg8Amg");
	this.shape_93.setTransform(1.5,-19.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#999999").s().p("AhHBSIgXhVIAZg+IBLggIAzAdIAmBEIglBLIhBAWg");
	this.shape_94.setTransform(11,-15.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#999999").s().p("Ag7A9IgghFIAXhDIBCgbIBDAjIAbBDIgaA+Ig8Apg");
	this.shape_95.setTransform(1.7,-15.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#999999").s().p("AhBBTIgbhXIAfg4IA5gnIBDAoIAeA7IgeBQIhGAUg");
	this.shape_96.setTransform(-1.6,-11.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#999999").s().p("AhABIIgbhBIAYhJIBAgaIBGAcIAZBDIghA/Ig7Abg");
	this.shape_97.setTransform(-0.6,-20.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#999999").s().p("AhFBMIgbg9IAbhRIBMgeIA4AmIAiA9IggBIIhEAWg");
	this.shape_98.setTransform(3.4,-22.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#999999").s().p("AhBBBIgcg/IAbg6IBKgvIA9ApIAaBJIgiA6Ig2Ajg");
	this.shape_99.setTransform(3.6,-22);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#999999").s().p("Ag6BBIggg8IAdhJIA6gmIA/AeIAfBMIgeA9Ig/Aug");
	this.shape_100.setTransform(1.6,-15);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#999999").s().p("Ag/BCIgeg9IAahBIA7gkIBKAUIAcBMIgaBLIhLAWg");
	this.shape_101.setTransform(14.3,-26.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#999999").s().p("Ag8BEIgdhDIAdhQIA8gSIBAAPIAbBFIghBUIhCAcg");
	this.shape_102.setTransform(2.9,-23.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#999999").s().p("Ag9BNIghhSIAghEIA2gZIBHAgIAgBIIgdBJIhEAUg");
	this.shape_103.setTransform(9.8,-19.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#999999").s().p("AhFA2IgXg0IAWhHIBMgeIA2AWIAhBFIgkBKIg3Aig");
	this.shape_104.setTransform(9.6,-28.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#999999").s().p("Ag6BBIgnhDIAhhGIA8gTIBBAbIAlA6IgkBGIg1Acg");
	this.shape_105.setTransform(3,-23);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#999999").s().p("Ag9BPIgkhWIAng0IAzgrIBDAhIAmBKIgeA3IhAArg");
	this.shape_106.setTransform(6.4,-21);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#999999").s().p("Ag5BFIgmg8IAnhWIA6gYIA/AoIAfBDIgaA6IhFAmg");
	this.shape_107.setTransform(13.6,-25);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#999999").s().p("Ag7A5Iggg6IAahIIBHgXIA4AjIAeA9IgVBMIhEAWg");
	this.shape_108.setTransform(-2.5,-16.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#A8A8A8").s().p("AgwBDIghg8IAbhDIAzgcIA3AiIAeA2IgYA/Ig6Aag");
	this.shape_109.setTransform(13,-38.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#999999").s().p("AhAA7Igdg0IAbhVIA/gRIBAANIAiBOIgiBHIhIAdg");
	this.shape_110.setTransform(7.4,-33.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#C9C9C9").s().p("AgkAeIgLggIAOgdIAcgTIAmAJIAPApIgVAlIgiAOg");
	this.shape_111.setTransform(2.9,-24.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#999999").s().p("AhABCIgghCIAgg9IA6glIBEAhIAjBHIgnA9IhBAfg");
	this.shape_112.setTransform(10.3,-34.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#C0C0C0").s().p("AgpAuIgOgxIAOglIAtgWIAmARIAOAtIgPAqIgsAVg");
	this.shape_113.setTransform(1.6,-31.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#DEDEDE").s().p("AgSAXIgLgTIAKgWIATgNIAVAJIAJAaIgHAUIgXAIg");
	this.shape_114.setTransform(10.2,-43.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#999999").s().p("Ag/BKIghhTIAihEIBGgXIA+AhIAbA9IgbBLIg/Agg");
	this.shape_115.setTransform(-1.2,4.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#D1D1D1").s().p("AgdAhIgLghIAMgiIAdgIIAaAPIAOAbIgMAfIgdAMg");
	this.shape_116.setTransform(3.2,2.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B5B5B5").s().p("AguAtIgVgsIASgtIAzgYIAuARIAUAzIgUAvIgwAWg");
	this.shape_117.setTransform(-0.2,5.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#D8D8D8").s().p("AgYAWIgKgWIAKgYIAYgLIAXAHIAMAcIgNAYIgYAMg");
	this.shape_118.setTransform(0.8,0);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D8D8D8").s().p("AgXAcIgLgdIALgZIAXgHIAZAHIAKAcIgMAYIgXAJg");
	this.shape_119.setTransform(2.3,2.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#C0C0C0").s().p("AgkAtIgUgsIATglIAjgZIArAXIAQAtIgSAoIgmAPg");
	this.shape_120.setTransform(0.4,-2.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#999999").s().p("Ag+BPIghhIIAfhFIBEgnIA6AdIAiBPIghBEIg3Abg");
	this.shape_121.setTransform(8.7,-9.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#999999").s().p("AhCBHIgehQIAbg9IBHgeIA6AiIAlA9IgeBEIg8Amg");
	this.shape_122.setTransform(1.4,-21.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#999999").s().p("AhGBTIgYhXIAag9IBKggIAzAdIAmBEIglBLIhAAXg");
	this.shape_123.setTransform(11.2,-17.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#999999").s().p("Ag7A8IghhEIAYhDIBCgbIBEAjIAaBDIgaA+Ig8Apg");
	this.shape_124.setTransform(1.6,-17.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#999999").s().p("AhBBUIgbhYIAfg4IA5gnIBCAnIAfA8IgeBQIhGATg");
	this.shape_125.setTransform(-1.9,-13.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#999999").s().p("AhABIIgbhBIAXhJIBAgaIBHAcIAZBDIgiA/Ig6Abg");
	this.shape_126.setTransform(-0.8,-22.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#999999").s().p("AhFBMIgbg8IAbhSIBNgeIA3AnIAiA8IggBIIhFAWg");
	this.shape_127.setTransform(3.3,-24.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#999999").s().p("AhBBCIgchAIAag6IBLgvIA+AqIAYBIIghA5Ig2Akg");
	this.shape_128.setTransform(3.5,-23.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#999999").s().p("Ag5BBIghg8IAdhJIA7gmIA+AeIAeBMIgdA9Ig+Aug");
	this.shape_129.setTransform(1.5,-16.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#999999").s().p("Ag/BCIgeg8IAahCIA7glIBKAVIAcBMIgaBKIhLAYg");
	this.shape_130.setTransform(14.6,-28.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#999999").s().p("Ag9BEIgchCIAchRIA9gSIA/APIAbBFIggBUIhDAcg");
	this.shape_131.setTransform(2.7,-25.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#999999").s().p("Ag8BNIgihTIAghDIA2gZIBHAgIAgBIIgdBJIhEAUg");
	this.shape_132.setTransform(9.9,-21.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#999999").s().p("AhFA1IgXgzIAWhIIBMgdIA1AWIAiBFIgkBKIg3Aig");
	this.shape_133.setTransform(9.8,-30.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#999999").s().p("Ag5BAIgohCIAhhGIA9gSIBAAaIAkA6IgjBGIg1Abg");
	this.shape_134.setTransform(2.9,-24.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#999999").s().p("Ag9BPIgkhWIAng0IAygrIBDAhIAnBKIgeA4IhAAqg");
	this.shape_135.setTransform(6.3,-22.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#999999").s().p("Ag5BFIglg8IAlhWIA8gYIA+AoIAeBDIgaA6IhEAmg");
	this.shape_136.setTransform(13.9,-26.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#999999").s().p("Ag7A5Iggg5IAbhJIBHgXIA3AjIAeA9IgVBNIhEAUg");
	this.shape_137.setTransform(-2.8,-18.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#B5B5B5").s().p("AgoA4IgcgyIAXg5IArgYIAuAdIAZAuIgUA1IgxAXg");
	this.shape_138.setTransform(13.3,-41.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#999999").s().p("AhBA6IgdgzIAbhVIBAgRIBAANIAhBOIghBHIhJAdg");
	this.shape_139.setTransform(7.5,-35.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#D1D1D1").s().p("AgeAaIgKgbIANgZIAXgQIAgAHIANAjIgSAgIgcALg");
	this.shape_140.setTransform(2.8,-26.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#999999").s().p("AhABCIgghCIAgg9IA6glIBEAhIAjBHIgnA9IhBAgg");
	this.shape_141.setTransform(10.5,-36.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#C9C9C9").s().p("AgjAnIgLgpIAMggIAlgSIAgAOIAMAmIgMAkIgmARg");
	this.shape_142.setTransform(1.5,-34.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#E3E3E3").s().p("AgPATIgJgQIAJgSIAPgLIASAIIAHAVIgGASIgTAGg");
	this.shape_143.setTransform(10.2,-44.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#999999").s().p("AhABKIgfhTIAhhEIBGgWIA9AfIAbA+IgaBMIg+Aeg");
	this.shape_144.setTransform(-1.4,3.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#D8D8D8").s().p("AgZAcIgJgcIAKgcIAYgHIAXAMIAMAXIgKAaIgZAKg");
	this.shape_145.setTransform(3.2,0.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#C0C0C0").s().p("AgnAnIgSgmIAQgmIArgUIAmAOIARArIgRAoIgoASg");
	this.shape_146.setTransform(-0.3,3.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#DEDEDE").s().p("AgVASIgIgSIAIgVIAVgIIAUAFIAKAYIgMAUIgUAKg");
	this.shape_147.setTransform(0.7,-1.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#DEDEDE").s().p("AgUAXIgJgYIAJgWIAUgFIAVAGIAJAYIgLATIgTAIg");
	this.shape_148.setTransform(2.3,0.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#C9C9C9").s().p("AgfAnIgQgmIAQgfIAdgVIAlATIANAmIgPAiIggANg");
	this.shape_149.setTransform(0.3,-4.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#999999").s().p("Ag+BPIghhJIAghFIBDgmIA5AdIAjBPIgiBEIg2Abg");
	this.shape_150.setTransform(8.8,-10.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#999999").s().p("AhHBUIgXhXIAZg+IBLgfIAzAcIAmBEIglBMIhBAVg");
	this.shape_151.setTransform(11.5,-18.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#999999").s().p("Ag7A9IgghFIAYhDIBBgbIBEAjIAaBDIgaA+Ig8Aqg");
	this.shape_152.setTransform(1.5,-18.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#999999").s().p("AhBBTIgbhYIAfg3IA5gmIBCAnIAfA7IgfBQIhFATg");
	this.shape_153.setTransform(-2.2,-14.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#999999").s().p("AhABIIgahBIAWhJIBAgaIBHAcIAYBDIghA/Ig6Abg");
	this.shape_154.setTransform(-1.1,-24.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#999999").s().p("AhFBNIgbg9IAbhSIBMgeIA4AmIAiA9IggBIIhEAWg");
	this.shape_155.setTransform(3.2,-26.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#999999").s().p("AhBBBIgdg/IAbg6IBMgvIA9AqIAYBIIghA6Ig1Aig");
	this.shape_156.setTransform(3.4,-25.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#999999").s().p("Ag5BAIghg7IAdhKIA6glIA/AdIAfBNIgfA9Ig+Avg");
	this.shape_157.setTransform(1.3,-18.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#999999").s().p("Ag/BCIgeg8IAahBIA6glIBKAUIAdBMIgaBKIhLAYg");
	this.shape_158.setTransform(14.9,-30.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#999999").s().p("Ag8BEIgdhCIAchRIA9gSIA/APIAbBFIggBUIhDAbg");
	this.shape_159.setTransform(2.5,-27.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#999999").s().p("AhFA1IgXgzIAWhIIBMgdIA2AVIAhBGIglBKIg2Aig");
	this.shape_160.setTransform(9.9,-32.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#999999").s().p("Ag5BBIgohDIAhhGIA8gSIBBAbIAlA5IgkBGIg1Abg");
	this.shape_161.setTransform(2.8,-26.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#999999").s().p("Ag9BPIgkhXIAngyIAygsIBEAgIAmBLIgdA3IhAArg");
	this.shape_162.setTransform(6.3,-24.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#999999").s().p("Ag5BFIglg8IAlhXIA7gXIA/AoIAeBDIgZA5IhFAog");
	this.shape_163.setTransform(14.2,-28.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#999999").s().p("Ag7A5Igfg5IAahJIBHgXIA3AjIAdA9IgUBMIhEAVg");
	this.shape_164.setTransform(-3.1,-19.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#C0C0C0").s().p("AgiAwIgYgrIAUgwIAkgUIAoAYIAVAnIgRAtIgqATg");
	this.shape_165.setTransform(13.5,-44.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#999999").s().p("AhBA7Igcg0IAbhVIA/gRIBAANIAiBOIgiBHIhJAdg");
	this.shape_166.setTransform(7.5,-37.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#D8D8D8").s().p("AgaAWIgIgXIAKgVIAUgOIAbAGIAMAeIgQAbIgYAKg");
	this.shape_167.setTransform(2.7,-28.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#D1D1D1").s().p("AgdAhIgKgjIAKgaIAggQIAbAMIAKAgIgKAeIggAPg");
	this.shape_168.setTransform(1.4,-36.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#999999").s().p("Ag/BKIgghUIAhhDIBHgXIA8AhIAbA9IgaBLIg+Agg");
	this.shape_169.setTransform(-1.6,1.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#DEDEDE").s().p("AgUAXIgJgXIAJgYIAVgFIASAKIALATIgJAWIgVAIg");
	this.shape_170.setTransform(3.1,-0.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#C9C9C9").s().p("AghAhIgPggIANggIAlgRIAgAMIAPAkIgPAiIgiAPg");
	this.shape_171.setTransform(-0.4,1.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#E3E3E3").s().p("AgRAQIgHgQIAHgSIARgGIARAEIAIAUIgJARIgRAIg");
	this.shape_172.setTransform(0.6,-2.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#E3E3E3").s().p("AgQAUIgIgUIAIgTIAQgFIASAFIAHAUIgJARIgQAHg");
	this.shape_173.setTransform(2.3,-0.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#D1D1D1").s().p("AgZAhIgPghIAOgaIAZgSIAeARIAMAgIgNAdIgbALg");
	this.shape_174.setTransform(0.3,-6.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#999999").s().p("Ag+BPIghhIIAghGIBDgmIA5AdIAjBPIgiBEIg2Abg");
	this.shape_175.setTransform(8.9,-12);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#999999").s().p("AhCBIIgehRIAbg9IBHgeIA6AjIAlA8IgeBEIg7Amg");
	this.shape_176.setTransform(1.1,-25);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#999999").s().p("AhHBTIgXhXIAZg9IBMggIAxAdIAnBEIgmBLIhAAXg");
	this.shape_177.setTransform(11.7,-20.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#999999").s().p("Ag7A8IgghEIAYhDIBBgbIBEAjIAaBDIgaA+Ig8Aqg");
	this.shape_178.setTransform(1.4,-20.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#999999").s().p("AhABUIgchYIAfg4IA5gnIBCAoIAfA7IgfBRIhGASg");
	this.shape_179.setTransform(-2.5,-16.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#999999").s().p("AhABIIgbhAIAYhKIA/gaIBHAcIAZBDIgiA+Ig6Acg");
	this.shape_180.setTransform(-1.4,-26.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#999999").s().p("AhFBNIgbg9IAbhSIBMgeIA4AnIAiA8IggBJIhFAVg");
	this.shape_181.setTransform(3.1,-28.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#999999").s().p("AhBBBIgcg/IAbg6IBLgvIA9AqIAYBJIghA4Ig2Akg");
	this.shape_182.setTransform(3.3,-27.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#999999").s().p("Ag5BBIggg8IAchJIA7gnIA+AfIAeBMIgdA9Ig/Avg");
	this.shape_183.setTransform(1.2,-19.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#999999").s().p("Ag/BCIgeg8IAahBIA6gmIBLAVIAcBMIgaBLIhLAXg");
	this.shape_184.setTransform(15.3,-32.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#999999").s().p("Ag8BEIgdhCIAdhRIA8gSIA/AOIAbBGIghBTIhCAdg");
	this.shape_185.setTransform(2.3,-29.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#999999").s().p("Ag8BNIgihTIAghEIA2gYIBHAgIAgBIIgdBKIhFATg");
	this.shape_186.setTransform(10.2,-25);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#999999").s().p("AhFA0IgXgyIAWhIIBNgdIA1AVIAhBFIglBLIg2Aig");
	this.shape_187.setTransform(10,-34.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#999999").s().p("Ag6BAIgnhCIAhhGIA8gSIBBAaIAlA5IgkBHIg1Abg");
	this.shape_188.setTransform(2.7,-28.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#999999").s().p("Ag9BPIgkhWIAogzIAxgsIBDAhIAnBKIgeA3Ig/Arg");
	this.shape_189.setTransform(6.3,-26.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#999999").s().p("Ag5BEIglg7IAlhXIA8gYIA+ApIAeBDIgaA5IhEAng");
	this.shape_190.setTransform(14.5,-30.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#999999").s().p("Ag7A5Iggg6IAahJIBHgWIA4AjIAeA9IgVBNIhEAUg");
	this.shape_191.setTransform(-3.4,-21.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#C9C9C9").s().p("AgcApIgVgkIARgpIAegSIAiAVIASAhIgPAmIgjAQg");
	this.shape_192.setTransform(13.8,-47.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#A8A8A8").s().p("Ag3AxIgYgrIAXhIIA2gPIA2ALIAcBCIgcA9Ig+AZg");
	this.shape_193.setTransform(7.5,-41.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#DEDEDE").s().p("AgWATIgGgUIAIgRIARgMIAXAFIAJAZIgNAXIgUAIg");
	this.shape_194.setTransform(2.6,-29.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#A8A8A8").s().p("Ag1A4Igcg4IAcgzIAwggIA6AcIAdA8IghA0Ig3Abg");
	this.shape_195.setTransform(11,-41.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#D8D8D8").s().p("AgYAcIgJgdIAJgXIAagNIAXAKIAJAbIgJAaIgbAMg");
	this.shape_196.setTransform(1.3,-37.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#999999").s().p("Ag/BKIgghTIAhhEIBHgXIA8AhIAbA9IgaBLIg+Agg");
	this.shape_197.setTransform(-1.8,0.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#E3E3E3").s().p("AgRAUIgHgUIAIgUIAQgFIAQAJIAJAQIgIATIgRAHg");
	this.shape_198.setTransform(3.1,-1.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#D1D1D1").s().p("AgcAcIgMgbIALgbIAfgPIAbALIAMAeIgMAdIgdANg");
	this.shape_199.setTransform(-0.5,0.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#D8D8D8").s().p("AgVAbIgNgbIAMgVIAVgQIAaAPIAKAaIgLAZIgXAJg");
	this.shape_200.setTransform(0.2,-7.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#999999").s().p("Ag+BQIghhJIAghFIBDgnIA5AdIAjBQIgiBDIg2Abg");
	this.shape_201.setTransform(9,-13.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#999999").s().p("AhCBIIgehRIAbg9IBHgeIA6AiIAlA8IgeBFIg7Amg");
	this.shape_202.setTransform(0.9,-26.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#999999").s().p("AhGBUIgYhYIAag9IBLgfIAxAcIAnBEIgmBLIhAAWg");
	this.shape_203.setTransform(11.9,-22.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#999999").s().p("Ag6A8IghhEIAYhEIBBgaIBEAjIAaBEIgaA9Ig7Apg");
	this.shape_204.setTransform(1.3,-22.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#999999").s().p("AhBBUIgbhZIAfg3IA5gmIBCAnIAfA7IgfBRIhGASg");
	this.shape_205.setTransform(-2.8,-18.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#999999").s().p("AhABIIgahAIAWhKIBAgaIBHAdIAYBCIghA+Ig6Acg");
	this.shape_206.setTransform(-1.7,-28);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#999999").s().p("AhGBNIgag8IAahTIBNgeIA3AnIAjA8IggBIIhFAWg");
	this.shape_207.setTransform(3,-30.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#999999").s().p("AhBBBIgcg/IAbg6IBLgvIA9AqIAYBJIghA4Ig1Akg");
	this.shape_208.setTransform(3.2,-29.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#999999").s().p("Ag5BAIggg7IAchJIA7gnIA+AeIAeBNIgeA9Ig+Avg");
	this.shape_209.setTransform(1.1,-21.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#999999").s().p("Ag/BDIgeg9IAahBIA5gmIBLAVIAdBMIgaBLIhMAWg");
	this.shape_210.setTransform(15.6,-35);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#999999").s().p("Ag8BDIgdhCIAdhRIA8gRIA/AOIAbBFIggBVIhEAcg");
	this.shape_211.setTransform(2.1,-31.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#999999").s().p("Ag8BNIgihTIAghDIA2gZIBHAhIAgBHIgdBKIhFATg");
	this.shape_212.setTransform(10.3,-26.8);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#999999").s().p("AhFA0IgXgyIAWhIIBMgdIA1AVIAiBFIglBLIg2Aig");
	this.shape_213.setTransform(10.1,-36.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#A8A8A8").s().p("AgwA3Igig5IAcg7IAzgPIA3AWIAfAxIgeA7IgtAXg");
	this.shape_214.setTransform(2.6,-31.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#999999").s().p("Ag9BQIgkhXIAogzIAxgsIBDAhIAnBKIgeA3Ig/Arg");
	this.shape_215.setTransform(6.3,-28);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#999999").s().p("Ag5BEIglg6IAmhYIA6gYIA+ApIAfBDIgZA5IhFAng");
	this.shape_216.setTransform(14.8,-32.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#999999").s().p("Ag6A5Iggg5IAahJIBHgXIA3AjIAeA9IgVBNIhEAUg");
	this.shape_217.setTransform(-3.8,-22.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#D1D1D1").s().p("AgYAjIgRgfIAOgjIAagOIAcASIAPAbIgMAhIgeANg");
	this.shape_218.setTransform(14,-49.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#B5B5B5").s().p("AguAqIgVglIAUg9IAtgMIAuAJIAYA4IgYAzIg1AVg");
	this.shape_219.setTransform(7.5,-44.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#E3E3E3").s().p("AgSAQIgGgQIAIgPIAOgKIATAEIAIAVIgLAUIgRAGg");
	this.shape_220.setTransform(2.5,-31.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#B5B5B5").s().p("AgtAvIgYgvIAYgrIApgbIAwAXIAaAzIgcAsIgvAXg");
	this.shape_221.setTransform(11.2,-44.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#DEDEDE").s().p("AgUAYIgIgZIAIgTIAWgMIATAJIAIAXIgIAWIgXALg");
	this.shape_222.setTransform(1.2,-39.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#999999").s().p("Ag/BKIgghTIAhhFIBHgWIA8AgIAbA+IgaBMIg+Afg");
	this.shape_223.setTransform(-2,-1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#D8D8D8").s().p("AgXAXIgLgWIAJgXIAagMIAXAJIALAZIgLAYIgYALg");
	this.shape_224.setTransform(-0.6,-1.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#DEDEDE").s().p("AgSAXIgKgXIAJgSIATgNIAVAMIAIAXIgJAVIgUAHg");
	this.shape_225.setTransform(0.1,-9.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#999999").s().p("Ag+BQIghhJIAghFIBDgnIA5AdIAjBQIgiBDIg1Abg");
	this.shape_226.setTransform(9.1,-14.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#999999").s().p("AhCBIIgehSIAbg9IBHgdIA6AjIAlA7IgeBEIg7Ang");
	this.shape_227.setTransform(0.8,-28.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#999999").s().p("AhHBUIgXhYIAZg9IBMgfIAxAcIAnBEIgmBLIhAAWg");
	this.shape_228.setTransform(12.2,-24.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#999999").s().p("Ag6A8IghhEIAYhDIBBgbIBEAjIAaBDIgaA+Ig7Aqg");
	this.shape_229.setTransform(1.2,-24);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#999999").s().p("AhABUIgchZIAgg3IA3gnIBDAoIAfA7IgfBRIhGASg");
	this.shape_230.setTransform(-3.2,-19.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#999999").s().p("AhABIIgahAIAWhKIBAgaIBHAcIAYBDIgiA+Ig5Acg");
	this.shape_231.setTransform(-2,-29.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#999999").s().p("AhGBMIgag7IAahTIBOgeIA2AnIAjA7IggBJIhFAWg");
	this.shape_232.setTransform(2.9,-32.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#999999").s().p("AhBBBIgcg/IAag5IBMgwIA9AqIAYBJIghA4Ig1Akg");
	this.shape_233.setTransform(3.2,-31.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#999999").s().p("Ag5BBIggg8IAchJIA6gnIA/AeIAeBNIgeA9Ig+Avg");
	this.shape_234.setTransform(1,-23);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#999999").s().p("Ag/BCIgeg8IAahBIA6glIBKAUIAdBMIgaBLIhLAWg");
	this.shape_235.setTransform(15.9,-37.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#999999").s().p("Ag8BEIgdhCIAdhSIA8gRIA+AOIAcBFIghBVIhCAcg");
	this.shape_236.setTransform(1.9,-33.1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#A8A8A8").s().p("AgyBCIgehHIAbg5IAugVIA8AbIAbA9IgYA+Ig6ARg");
	this.shape_237.setTransform(10.3,-30.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#999999").s().p("AhFA0IgXgyIAWhIIBMgdIA1AVIAiBFIglBKIg2Ajg");
	this.shape_238.setTransform(10.3,-39);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#B5B5B5").s().p("AgpAuIgcgwIAXgyIAsgNIAuATIAaAqIgZAyIgmAUg");
	this.shape_239.setTransform(2.5,-34.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#999999").s().p("Ag9BQIgkhYIAogyIAxgsIBDAgIAnBLIgeA3Ig/Arg");
	this.shape_240.setTransform(6.2,-29.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#999999").s().p("Ag4BFIgmg8IAmhXIA7gYIA9ApIAfBEIgaA4IhEAng");
	this.shape_241.setTransform(15.1,-34.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#999999").s().p("Ag6A5Iggg5IAahJIBHgXIA2AjIAeA9IgUBNIhEAUg");
	this.shape_242.setTransform(-4.1,-24.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#D8D8D8").s().p("AgUAeIgPgbIAMgdIAXgMIAXAPIANAXIgKAcIgaAMg");
	this.shape_243.setTransform(14.2,-51.4);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#C0C0C0").s().p("AgnAjIgSgfIARg0IAngKIAmAIIAVAwIgVArIgsASg");
	this.shape_244.setTransform(7.6,-47.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#C0C0C0").s().p("AgmAoIgUgoIAUgkIAjgXIApAUIAVArIgYAlIgnATg");
	this.shape_245.setTransform(11.4,-47.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#E3E3E3").s().p("AgRAUIgGgVIAGgQIASgKIARAIIAGATIgGASIgTAKg");
	this.shape_246.setTransform(1.1,-40.9);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#999999").s().p("Ag/BLIgghVIAhhEIBHgWIA8AhIAbA8IgZBNIg/Afg");
	this.shape_247.setTransform(-2.2,-2.4);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#DEDEDE").s().p("AgTAUIgJgTIAHgTIAWgLIAUAIIAJAVIgJAVIgVAJg");
	this.shape_248.setTransform(-0.7,-2.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#E3E3E3").s().p("AgPAUIgIgUIAIgPIAPgLIASAKIAGATIgHASIgQAGg");
	this.shape_249.setTransform(0.1,-10.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#999999").s().p("Ag+BPIghhIIAghFIBDgnIA5AcIAjBQIgiBEIg2Abg");
	this.shape_250.setTransform(9.2,-16.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#999999").s().p("AhCBIIgehSIAbg8IBHgeIA6AjIAkA7IgdBEIg7Ang");
	this.shape_251.setTransform(0.7,-30.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#999999").s().p("AhHBUIgXhYIAZg8IBMghIAxAdIAnBEIgnBMIg/AWg");
	this.shape_252.setTransform(12.5,-26.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#999999").s().p("Ag6A8IghhEIAYhEIBBgbIBEAkIAaBEIgaA9Ig7Aqg");
	this.shape_253.setTransform(1.1,-25.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#999999").s().p("AhABVIgchZIAgg4IA3gnIBDApIAfA6IgfBRIhGASg");
	this.shape_254.setTransform(-3.6,-21.4);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#999999").s().p("AhABIIgahAIAXhKIA/gaIBHAcIAYBDIgiA+Ig5Acg");
	this.shape_255.setTransform(-2.3,-31.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#999999").s().p("AhGBNIgag8IAahTIBOgeIA2AnIAjA8IghBIIhEAWg");
	this.shape_256.setTransform(2.8,-34.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#999999").s().p("AhBBBIgcg/IAbg5IBLgwIA8AqIAZBJIgiA4Ig1Akg");
	this.shape_257.setTransform(3.1,-33.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#999999").s().p("Ag5BAIggg7IAdhJIA5gnIA+AeIAfBNIgeA9Ig+Avg");
	this.shape_258.setTransform(0.9,-24.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#999999").s().p("Ag/BDIgeg9IAahBIA5glIBLAUIAdBMIgaBLIhMAWg");
	this.shape_259.setTransform(16.3,-39.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#999999").s().p("Ag8BEIgdhCIAdhSIA8gRIA/AOIAbBFIghBVIhDAbg");
	this.shape_260.setTransform(1.7,-35.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#B5B5B5").s().p("AgrA4IgZg8IAYgxIAmgRIAzAXIAYA0IgWA1IgwANg");
	this.shape_261.setTransform(10.4,-33);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#C0C0C0").s().p("AgiAoIgYgoIAUgsIAkgKIAnAQIAXAjIgXAqIgfAQg");
	this.shape_262.setTransform(2.5,-37.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#999999").s().p("Ag8BQIglhYIAogyIAxgtIBDAiIAnBKIgeA3Ig/Arg");
	this.shape_263.setTransform(6.2,-31.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#999999").s().p("Ag4BFIgmg7IAmhYIA6gXIA+AoIAfBDIgZA5IhFAog");
	this.shape_264.setTransform(15.4,-36.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#999999").s().p("Ag6A4Iggg4IAahJIBHgXIA2AjIAeA9IgUBNIhEAUg");
	this.shape_265.setTransform(-4.5,-26.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#DEDEDE").s().p("AgRAZIgMgWIAKgZIATgKIATANIALATIgJAYIgVAJg");
	this.shape_266.setTransform(14.4,-53.3);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#C9C9C9").s().p("AggAeIgQgaIAPgsIAggJIAhAGIARApIgRAlIgmAPg");
	this.shape_267.setTransform(7.6,-50);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#C9C9C9").s().p("AggAiIgRgiIARgfIAegTIAiARIASAkIgUAgIghAQg");
	this.shape_268.setTransform(11.6,-50.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#999999").s().p("Ag/BKIgghUIAihEIBGgWIA9AhIAaA8IgaBNIg+Afg");
	this.shape_269.setTransform(-2.5,-3.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#E3E3E3").s().p("AgRARIgHgRIAGgPIATgKIAQAHIAIASIgIARIgRAIg");
	this.shape_270.setTransform(-0.8,-3.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#999999").s().p("Ag+BQIghhIIAghGIBEgnIA4AdIAjBQIgiBDIg1Abg");
	this.shape_271.setTransform(9.3,-18);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#999999").s().p("AhCBIIgdhSIAag9IBHgdIA5AjIAlA7IgdBEIg7Ang");
	this.shape_272.setTransform(0.5,-32.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#999999").s().p("AhGBVIgYhZIAag9IBLgfIAxAcIAmBEIgmBMIg/AVg");
	this.shape_273.setTransform(12.8,-27.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#999999").s().p("Ag6A7IghhEIAYhDIBBgaIBEAjIAaBDIgaA9Ig7Arg");
	this.shape_274.setTransform(1,-27.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#999999").s().p("AhABVIgbhaIAfg2IA3goIBDApIAeA6IgeBSIhGARg");
	this.shape_275.setTransform(-3.9,-23.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#999999").s().p("AhFBNIgbg7IAbhUIBNgeIA2AnIAjA8IggBJIhFAVg");
	this.shape_276.setTransform(2.7,-36.4);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#999999").s().p("AhBBBIgcg/IAbg5IBLgwIA8AqIAZBJIgiA5Ig0Ajg");
	this.shape_277.setTransform(3,-35.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#999999").s().p("Ag5BAIggg7IAdhKIA5gmIA+AeIAfBNIgeA8Ig+Awg");
	this.shape_278.setTransform(0.7,-26.4);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#999999").s().p("Ag/BCIgeg8IAahBIA5glIBLAUIAdBMIgaBLIhMAWg");
	this.shape_279.setTransform(16.6,-41.3);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#999999").s().p("Ag8BEIgdhCIAdhSIA8gRIA+ANIAbBGIggBVIhDAbg");
	this.shape_280.setTransform(1.5,-37.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#C0C0C0").s().p("AgkAwIgVgzIAUgqIAggOIArAUIAUArIgSAtIgpALg");
	this.shape_281.setTransform(10.4,-35.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#999999").s().p("AhFA0IgWgyIAVhIIBMgdIA1AVIAiBFIgmBKIg1Ajg");
	this.shape_282.setTransform(10.6,-43.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#C9C9C9").s().p("AgcAhIgWgiIARglIAggIIAhAOIATAdIgTAjIgbAPg");
	this.shape_283.setTransform(2.4,-39.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#A8A8A8").s().p("AgzBEIgfhKIAigrIApgmIA5AcIAhA/IgZAuIg2Amg");
	this.shape_284.setTransform(6.1,-35);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#999999").s().p("Ag5BEIglg6IAmhYIA7gYIA+AqIAeBCIgaA5IhDAng");
	this.shape_285.setTransform(15.7,-38.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#A8A8A8").s().p("AgxAwIgbgwIAWg+IA8gTIAuAeIAZAzIgRBBIg5ARg");
	this.shape_286.setTransform(-4.8,-29.4);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#E3E3E3").s().p("AgOAVIgLgTIAJgUIAQgJIAQALIAKAQIgIAUIgSAIg");
	this.shape_287.setTransform(14.6,-54.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#D1D1D1").s().p("AgcAZIgNgWIANglIAbgHIAcAFIAPAiIgPAfIggANg");
	this.shape_288.setTransform(7.6,-52.3);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#D1D1D1").s().p("AgbAdIgPgdIAPgaIAZgQIAdAOIAQAeIgRAbIgcAPg");
	this.shape_289.setTransform(11.7,-52.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#999999").s().p("Ag/BLIgghVIAihEIBHgWIA7AhIAbA8IgaBNIg9Afg");
	this.shape_290.setTransform(-2.7,-5.3);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#999999").s().p("Ag+BQIgghIIAfhGIBDgnIA4AdIAjBQIgiBDIg1Abg");
	this.shape_291.setTransform(9.4,-19.5);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#999999").s().p("AhCBIIgdhSIAag9IBHgdIA5AjIAlA7IgdBEIg7Aog");
	this.shape_292.setTransform(0.3,-34.9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#999999").s().p("AhHBVIgWhZIAZg9IBLggIAwAdIAnBEIgmBMIhAAVg");
	this.shape_293.setTransform(13,-29.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#999999").s().p("Ag6A7IgghEIAWhDIBCgbIBDAkIAaBDIgaA9Ig6Arg");
	this.shape_294.setTransform(0.9,-29.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#999999").s().p("AhABVIgbhaIAfg2IA3gnIBCAoIAgA6IggBSIhGARg");
	this.shape_295.setTransform(-4.3,-24.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#999999").s().p("AhGBNIgag7IAahUIBOgdIA2AmIAjA8IggBIIhFAVg");
	this.shape_296.setTransform(2.6,-38.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#999999").s().p("AhABBIgdg+IAbg6IBLgwIA8AqIAZBKIgiA4Ig0Ajg");
	this.shape_297.setTransform(2.9,-37.6);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#999999").s().p("Ag4BAIghg7IAdhJIA5gnIA+AeIAeBNIgdA8Ig+Awg");
	this.shape_298.setTransform(0.6,-28.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#999999").s().p("Ag+BCIgfg8IAahBIA6glIBKATIAcBNIgZBLIhMAWg");
	this.shape_299.setTransform(17,-43.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#999999").s().p("Ag7BEIgdhCIAchSIA8gRIA/ANIAaBFIggBWIhDAbg");
	this.shape_300.setTransform(1.2,-39.3);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#C9C9C9").s().p("AgeAoIgSgrIAQgjIAcgMIAkARIARAkIgPAnIgjAJg");
	this.shape_301.setTransform(10.4,-37.9);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#A8A8A8").s().p("Ag7AsIgSgqIARg9IBBgZIAsARIAeA7IggA/IgtAeg");
	this.shape_302.setTransform(10.6,-47.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#D1D1D1").s().p("AgYAcIgSgcIAPgfIAagIIAcAMIAQAZIgQAeIgXAMg");
	this.shape_303.setTransform(2.3,-41.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#B5B5B5").s().p("AgsA6IgahAIAegjIAighIAwAYIAcA2IgVAnIgtAgg");
	this.shape_304.setTransform(6.1,-38);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#999999").s().p("Ag4BEIgmg6IAmhYIA7gYIA9AqIAfBDIgaA4IhEAog");
	this.shape_305.setTransform(16.1,-40.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#B5B5B5").s().p("AgpAoIgXgoIASg1IAzgQIAoAaIAUArIgOA4IgxAOg");
	this.shape_306.setTransform(-5.1,-32.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#D8D8D8").s().p("AgXAVIgLgSIAKggIAYgGIAXAFIAMAdIgMAaIgbALg");
	this.shape_307.setTransform(7.7,-54.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#D8D8D8").s().p("AgXAYIgMgYIAMgWIAVgOIAZANIANAZIgPAXIgXAMg");
	this.shape_308.setTransform(11.9,-54.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#A8A8A8").s().p("Ag1A/IgchIIAdg5IA8gSIAzAbIAWAzIgVBCIg1Aag");
	this.shape_309.setTransform(-2.9,-8.3);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#999999").s().p("Ag9BQIgihIIAghGIBEgnIA3AdIAkBQIgiBDIg1Abg");
	this.shape_310.setTransform(9.5,-21.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#999999").s().p("AhCBIIgehSIAbg9IBHgdIA5AjIAmA7IgeBEIg7Ang");
	this.shape_311.setTransform(0.1,-37);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#999999").s().p("AhGBVIgYhZIAZg8IBNghIAvAcIAnBFIgmBMIg/AVg");
	this.shape_312.setTransform(13.3,-31.7);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#999999").s().p("Ag6A7IgghEIAXhDIBBgbIBDAkIAaBEIgZA8Ig7Arg");
	this.shape_313.setTransform(0.8,-31.3);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#999999").s().p("AhBBVIgbhaIAgg2IA3goIBCApIAgA6IggBTIhGARg");
	this.shape_314.setTransform(-4.6,-26.6);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#999999").s().p("AhABIIgahAIAXhJIA/gaIBHAcIAXBCIghA+Ig5Abg");
	this.shape_315.setTransform(-3.3,-37.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#999999").s().p("AhGBNIgag7IAahUIBOgeIA2AoIAjA7IghBJIhEAVg");
	this.shape_316.setTransform(2.5,-40.7);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#999999").s().p("AhABBIgdg/IAbg4IBLgxIA9ArIAYBJIgiA4Ig0Ajg");
	this.shape_317.setTransform(2.8,-39.7);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#999999").s().p("Ag4BAIghg7IAdhKIA5gmIA+AdIAeBOIgeA9Ig9Awg");
	this.shape_318.setTransform(0.4,-29.9);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#999999").s().p("Ag/BCIgdg7IAZhBIA5gmIBLATIAdBNIgaBLIhMAWg");
	this.shape_319.setTransform(17.4,-45.8);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#999999").s().p("Ag7BDIgdhBIAchTIA8gRIA+AOIAbBFIghBWIhCAbg");
	this.shape_320.setTransform(0.9,-41.4);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#D1D1D1").s().p("AgaAiIgPgkIAOgeIAYgLIAeAPIAPAfIgNAgIgeAJg");
	this.shape_321.setTransform(10.5,-39.9);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#B5B5B5").s().p("AgyAkIgPgjIAPgzIA3gVIAkAOIAaAyIgbA2IgnAZg");
	this.shape_322.setTransform(10.7,-50.6);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#D8D8D8").s().p("AgVAYIgOgYIAMgaIAWgHIAXAKIAOAVIgNAaIgUAKg");
	this.shape_323.setTransform(2.2,-43.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#C0C0C0").s().p("AglAxIgWg1IAZgfIAdgbIApAUIAYAtIgSAhIgnAbg");
	this.shape_324.setTransform(6,-40.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#A8A8A8").s().p("AgvA6IghgxIAihMIAxgTIAzAjIAaA5IgUAvIg7Aig");
	this.shape_325.setTransform(16.4,-43.8);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#C0C0C0").s().p("AgiAiIgVgiIAQgtIArgNIAiAVIASAlIgMAwIgqALg");
	this.shape_326.setTransform(-5.3,-34.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#DEDEDE").s().p("AgTASIgKgQIAJgaIAUgFIATADIALAZIgLAWIgWAJg");
	this.shape_327.setTransform(7.7,-56.3);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#DEDEDE").s().p("AgTAVIgLgVIALgSIASgMIAUAKIAMAWIgNATIgUAKg");
	this.shape_328.setTransform(12,-56.2);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#B5B5B5").s().p("AgsA2IgYg+IAYgwIA0gQIAqAYIATArIgSA4IgsAWg");
	this.shape_329.setTransform(-3.1,-11);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#999999").s().p("Ag9BQIgihIIAhhGIBDgnIA3AcIAkBRIgiBDIg1Abg");
	this.shape_330.setTransform(9.6,-22.7);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#999999").s().p("AhCBIIgehTIAbg7IBHgfIA5AkIAmA7IgeBEIg6Aog");
	this.shape_331.setTransform(-0.1,-39.1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#999999").s().p("AhHBVIgWhZIAYg8IBMggIAwAcIAoBEIgoBMIg/AVg");
	this.shape_332.setTransform(13.6,-33.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#999999").s().p("Ag5A7IghhEIAXhDIBBgbIBDAkIAaBEIgZA8Ig7Arg");
	this.shape_333.setTransform(0.6,-33.2);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#999999").s().p("AhABWIgchcIAgg1IA3gnIBCAoIAgA6IggBSIhGARg");
	this.shape_334.setTransform(-5,-28.3);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#999999").s().p("AhABIIgZhAIAVhJIA/gaIBIAcIAXBCIghA+Ig5Abg");
	this.shape_335.setTransform(-3.6,-39.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#999999").s().p("AhGBOIgag8IAahUIBPgeIA1AoIAjA7IghBJIhEAVg");
	this.shape_336.setTransform(2.3,-42.9);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#999999").s().p("AhABBIgdg+IAbg5IBMgxIA8ArIAYBJIgiA3Ig0Akg");
	this.shape_337.setTransform(2.7,-41.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#999999").s().p("Ag4BAIggg6IAchKIA6gnIA9AdIAeBOIgeA9Ig9Awg");
	this.shape_338.setTransform(0.3,-31.7);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#999999").s().p("Ag+BCIgfg7IAahBIA5gmIBLATIAcBNIgZBLIhMAWg");
	this.shape_339.setTransform(17.8,-48);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#999999").s().p("Ag7BDIgdhBIAdhTIA7gQIA+ANIAbBFIghBWIhCAcg");
	this.shape_340.setTransform(0.6,-43.6);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#D8D8D8").s().p("AgWAdIgMgeIAMgaIATgJIAaAMIANAaIgMAcIgYAHg");
	this.shape_341.setTransform(10.5,-41.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#C0C0C0").s().p("AgqAfIgOgeIANgrIAvgSIAfAMIAWArIgYAtIggAVg");
	this.shape_342.setTransform(10.7,-53.7);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#DEDEDE").s().p("AgRAUIgNgUIAKgWIAUgGIATAJIAMASIgMAVIgQAJg");
	this.shape_343.setTransform(2.2,-45.2);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#C9C9C9").s().p("AgeAqIgUguIAvgxIAhARIAVAnIgPAcIghAXg");
	this.shape_344.setTransform(5.9,-43);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#B5B5B5").s().p("AgoAxIgcgqIAdg/IApgRIAsAeIAXAwIgSAoIgyAdg");
	this.shape_345.setTransform(16.8,-46.9);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#C9C9C9").s().p("AgdAdIgRgdIANgmIAlgLIAcASIAPAfIgKAoIgkAKg");
	this.shape_346.setTransform(-5.6,-37);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#E3E3E3").s().p("AgQAPIgIgNIAHgWIARgFIAQADIAJAWIgJASIgSAIg");
	this.shape_347.setTransform(7.7,-58);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#E3E3E3").s().p("AgQASIgJgSIAJgPIAQgKIARAJIAJARIgLARIgQAJg");
	this.shape_348.setTransform(12.2,-57.8);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#C0C0C0").s().p("AgmAuIgTg0IAUgqIArgNIAkAUIARAlIgQAvIgmATg");
	this.shape_349.setTransform(-3.3,-13.4);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#999999").s().p("Ag9BRIghhJIAfhFIBEgoIA3AdIAkBRIgjBDIg0Aag");
	this.shape_350.setTransform(9.8,-24.4);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#999999").s().p("AhCBIIgdhTIAag7IBHgfIA4AkIAmA7IgdBEIg6Ang");
	this.shape_351.setTransform(-0.3,-41.2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#999999").s().p("AhGBVIgXhZIAZg9IBMggIAvAdIAnBEIgmBMIhAAVg");
	this.shape_352.setTransform(13.9,-35.7);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#999999").s().p("Ag5A7IghhEIAXhDIBAgbIBFAkIAZBEIgZA8Ig7Arg");
	this.shape_353.setTransform(0.5,-35.2);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#999999").s().p("AhABWIgbhbIAfg1IA3gpIBCAqIAfA5IgfBTIhGARg");
	this.shape_354.setTransform(-5.4,-30.2);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#999999").s().p("Ag/BJIgbhAIAWhKIA/gaIBIAcIAXBCIgiA+Ig4Abg");
	this.shape_355.setTransform(-3.9,-42);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#999999").s().p("AhFBNIgbg7IAbhTIBNgeIA2AnIAjA7IggBJIhFAUg");
	this.shape_356.setTransform(2.2,-45.1);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#999999").s().p("AhABBIgdg+IAbg5IBMgxIA7ArIAZBKIgiA2Ig0Akg");
	this.shape_357.setTransform(2.7,-44);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#999999").s().p("Ag4BAIggg6IAdhKIA4goIA+AeIAeBOIgeA8Ig9Axg");
	this.shape_358.setTransform(0.2,-33.5);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#999999").s().p("Ag+BCIgeg7IAZhBIA5gmIBLATIAcBNIgZBMIhMAVg");
	this.shape_359.setTransform(18.2,-50.3);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#A8A8A8").s().p("AgyA6IgZg4IAYhGIAzgPIA1ALIAWA8IgcBIIg3AYg");
	this.shape_360.setTransform(0.4,-47.4);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#DEDEDE").s().p("AgSAZIgLgaIALgWIAQgHIAVAKIALAWIgJAXIgVAGg");
	this.shape_361.setTransform(10.6,-43.4);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#C9C9C9").s().p("AgjAaIgMgZIALglIAngPIAbAKIASAlIgUAmIgbASg");
	this.shape_362.setTransform(10.7,-56.4);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#E3E3E3").s().p("AgPARIgKgRIAJgTIAQgEIAQAHIAKAPIgKASIgOAHg");
	this.shape_363.setTransform(2.2,-46.7);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#D1D1D1").s().p("AgaAkIgQgnIAngqIAcAPIASAgIgNAYIgcAUg");
	this.shape_364.setTransform(5.9,-45.1);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#C0C0C0").s().p("AgiAqIgXgkIAYg2IAigOIAmAaIATAoIgPAiIgrAZg");
	this.shape_365.setTransform(17.1,-49.7);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#D1D1D1").s().p("AgYAYIgPgYIALggIAfgKIAYAQIANAaIgJAiIgeAJg");
	this.shape_366.setTransform(-5.8,-39);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#C9C9C9").s().p("AggAnIgRgsIASgkIAkgLIAfARIAOAgIgNAnIggARg");
	this.shape_367.setTransform(-3.5,-15.6);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#999999").s().p("Ag9BRIgihJIAhhFIBDgoIA3AcIAkBSIgiBDIg1Aag");
	this.shape_368.setTransform(9.9,-26);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#999999").s().p("AhCBIIgehTIAbg8IBIgdIA3AjIAnA6IgeBEIg6Apg");
	this.shape_369.setTransform(-0.5,-43.4);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#999999").s().p("AhGBWIgXhaIAYg8IBNggIAvAcIAnBEIgnBMIg/AVg");
	this.shape_370.setTransform(14.2,-37.7);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#999999").s().p("Ag5A7IghhEIAXhDIBAgbIBEAlIAaBDIgaA8Ig6Arg");
	this.shape_371.setTransform(0.4,-37.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#999999").s().p("AhABVIgbhaIAgg1IA1gpIBDAqIAfA5IgfBTIhGARg");
	this.shape_372.setTransform(-5.8,-32);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#999999").s().p("AhABIIgZhAIAVhJIA/gaIBHAcIAYBCIgiA+Ig4Abg");
	this.shape_373.setTransform(-4.3,-44.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#999999").s().p("AhGBNIgag6IAahVIBPgdIA1AnIAjA7IghBJIhFAUg");
	this.shape_374.setTransform(2.1,-47.4);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#999999").s().p("AhABBIgdg+IAag5IBNgxIA8ArIAXBKIghA3IgzAkg");
	this.shape_375.setTransform(2.6,-46.1);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#999999").s().p("Ag4BAIggg6IAchLIA5gnIA9AeIAfBOIgeA8Ig9Axg");
	this.shape_376.setTransform(0.1,-35.3);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#999999").s().p("Ag+BCIgeg7IAZhBIA4gmIBMATIAcBNIgZBLIhNAWg");
	this.shape_377.setTransform(18.7,-52.6);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#B5B5B5").s().p("AgqAxIgVgwIAVg8IAqgLIAtAJIATAyIgYA+IgvAUg");
	this.shape_378.setTransform(0.1,-50.7);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#E3E3E3").s().p("AgPAVIgJgWIAIgSIAOgGIATAJIAIASIgIATIgRAGg");
	this.shape_379.setTransform(10.6,-44.8);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#D1D1D1").s().p("AgeAWIgKgVIAJgfIAigNIAXAJIAOAeIgQAhIgXAPg");
	this.shape_380.setTransform(10.7,-58.8);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#D8D8D8").s().p("AgVAeIgPggIAigkIAYANIAPAbIgMAUIgXARg");
	this.shape_381.setTransform(5.8,-47);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#C9C9C9").s().p("AgcAjIgUgeIAUguIAdgMIAgAWIAQAiIgNAeIgjAUg");
	this.shape_382.setTransform(17.4,-52.2);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#D8D8D8").s().p("AgVAVIgMgVIAKgbIAagIIAUAOIALAVIgHAdIgaAHg");
	this.shape_383.setTransform(-6,-40.8);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#D1D1D1").s().p("AgbAhIgOglIAPgfIAfgJIAZAPIAMAaIgKAiIgcAOg");
	this.shape_384.setTransform(-3.6,-17.5);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#999999").s().p("Ag9BRIgihJIAhhGIBDgnIA3AcIAkBRIgjBEIgzAbg");
	this.shape_385.setTransform(10.1,-27.7);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#999999").s().p("AhCBIIgdhUIAag7IBIgeIA3AkIAmA6IgdBFIg6Ang");
	this.shape_386.setTransform(-0.8,-45.6);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#999999").s().p("AhHBWIgWhbIAYg7IBNggIAuAcIAoBEIgnBMIg/AVg");
	this.shape_387.setTransform(14.5,-39.8);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#999999").s().p("Ag5A7IghhEIAXhEIBBgaIBDAkIAaBEIgaA8Ig6Arg");
	this.shape_388.setTransform(0.3,-39.1);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#999999").s().p("AhABWIgbhbIAgg1IA1gpIBDAqIAfA5IgfBTIhGAQg");
	this.shape_389.setTransform(-6.1,-33.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#999999").s().p("AhABIIgZg/IAWhKIA+gaIBIAcIAXBDIgiA9Ig4Abg");
	this.shape_390.setTransform(-4.6,-46.2);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#999999").s().p("AhGBNIgag6IAahVIBPgeIA1AoIAjA7IghBJIhFAVg");
	this.shape_391.setTransform(1.9,-49.7);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#999999").s().p("AhABAIgdg+IAbg4IBMgyIA8AsIAXBJIgiA3IgyAkg");
	this.shape_392.setTransform(2.5,-48.3);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#999999").s().p("Ag3BAIghg6IAchKIA5goIA9AeIAfBOIgeA8Ig8Axg");
	this.shape_393.setTransform(-0.1,-37.2);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#999999").s().p("Ag+BCIgeg7IAZhBIA4gmIBMASIAcBOIgZBLIhNAWg");
	this.shape_394.setTransform(19.1,-55);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#C0C0C0").s().p("AgjApIgSgoIASgzIAjgJIAmAIIAQAqIgUA1IgoAQg");
	this.shape_395.setTransform(-0.2,-53.7);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#D8D8D8").s().p("AgZATIgIgSIAIgaIAcgLIASAHIANAaIgOAcIgTAMg");
	this.shape_396.setTransform(10.7,-60.9);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#DEDEDE").s().p("AgSAZIgMgbIAcgeIAVALIAMAXIgKARIgUAOg");
	this.shape_397.setTransform(5.8,-48.6);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#D1D1D1").s().p("AgYAeIgRgZIASgnIAYgKIAbASIAOAdIgMAYIgeASg");
	this.shape_398.setTransform(17.7,-54.4);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#DEDEDE").s().p("AgRARIgLgRIAJgXIAVgHIARAMIAKASIgGAYIgWAHg");
	this.shape_399.setTransform(-6.2,-42.4);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#D8D8D8").s().p("AgXAcIgMggIANgZIAagIIAWAMIAKAXIgJAcIgYAMg");
	this.shape_400.setTransform(-3.7,-19.2);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#999999").s().p("Ag9BRIgihJIAhhGIBEgnIA2AcIAkBSIgjBDIgzAbg");
	this.shape_401.setTransform(10.3,-29.4);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#999999").s().p("AhCBIIgdhTIAag8IBIgeIA3AkIAmA6IgdBEIg5Apg");
	this.shape_402.setTransform(-1,-47.9);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#999999").s().p("AhHBWIgWhaIAYg8IBNggIAuAcIAoBEIgoBNIg+AUg");
	this.shape_403.setTransform(14.9,-41.9);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#999999").s().p("Ag5A6IghhEIAXhDIBBgaIBDAkIAaBEIgZA8Ig6Arg");
	this.shape_404.setTransform(0.2,-41.2);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#999999").s().p("AhABXIgbhdIAfg0IA2gpIBDAqIAfA5IgfBUIhHAPg");
	this.shape_405.setTransform(-6.5,-35.8);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#999999").s().p("AhABIIgZg/IAWhKIA+gaIBIAcIAXBCIgiA+Ig4Abg");
	this.shape_406.setTransform(-5,-48.4);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#999999").s().p("AhGBOIgag6IAahWIBPgdIA1AoIAjA6IghBJIhFAUg");
	this.shape_407.setTransform(1.8,-52);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#A8A8A8").s().p("Ag2A3IgYg1IAWgvIBBgrIAyAlIAUA/IgdAuIgrAfg");
	this.shape_408.setTransform(2.4,-52);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#999999").s().p("Ag3BAIghg6IAdhKIA4goIA9AeIAfBOIgeA8Ig9Axg");
	this.shape_409.setTransform(-0.2,-39.1);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#999999").s().p("Ag+BCIgeg7IAZhBIA4gmIBLASIAdBOIgZBMIhNAVg");
	this.shape_410.setTransform(19.6,-57.4);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#C9C9C9").s().p("AgeAjIgPgjIAPgqIAegIIAgAGIAOAkIgRAsIgiAPg");
	this.shape_411.setTransform(-0.4,-56.4);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#DEDEDE").s().p("AgVAPIgHgPIAHgVIAXgKIAQAGIALAXIgMAWIgQAMg");
	this.shape_412.setTransform(10.8,-62.9);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#E3E3E3").s().p("AgPAWIgKgXIAXgaIARAJIALATIgIAPIgRAMg");
	this.shape_413.setTransform(5.7,-50.2);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#D8D8D8").s().p("AgUAZIgOgVIAOghIAVgJIAXARIALAYIgJAUIgaAQg");
	this.shape_414.setTransform(17.9,-56.4);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#E3E3E3").s().p("AgPAOIgIgOIAHgUIASgFIAOAJIAIAQIgFAVIgTAFg");
	this.shape_415.setTransform(-6.4,-43.8);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#DEDEDE").s().p("AgTAYIgKgbIALgWIAVgGIATALIAIATIgIAXIgTAKg");
	this.shape_416.setTransform(-3.8,-20.7);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#999999").s().p("Ag9BRIgihIIAhhGIBEgpIA2AdIAkBSIgjBDIgzAag");
	this.shape_417.setTransform(10.5,-31.1);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#999999").s().p("AhCBIIgdhTIAag8IBIgdIA3AjIAmA6IgdBEIg6Apg");
	this.shape_418.setTransform(-1.2,-50.2);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#999999").s().p("AhHBWIgWhbIAZg7IBMggIAtAcIApBEIgoBNIg/AUg");
	this.shape_419.setTransform(15.2,-44);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#999999").s().p("Ag5A6IghhEIAXhDIBBgaIBDAkIAaBEIgaA7Ig5Asg");
	this.shape_420.setTransform(0.1,-43.2);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#999999").s().p("AhABXIgbhdIAgg0IA1gpIBDAqIAfA5IgeBTIhHAQg");
	this.shape_421.setTransform(-7,-37.7);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#999999").s().p("Ag/BIIgag/IAVhKIA/gaIBHAcIAYBCIgiA+Ig4Abg");
	this.shape_422.setTransform(-5.4,-50.6);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#B5B5B5").s().p("AguAvIgUgtIASgoIA3gkIArAgIARA0IgZAnIgkAag");
	this.shape_423.setTransform(2.4,-55.2);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#999999").s().p("Ag3BAIghg6IAchKIA5goIA9AeIAfBOIgeA8Ig9Axg");
	this.shape_424.setTransform(-0.3,-41.1);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#A8A8A8").s().p("Ag1A4IgZgyIAWg3IAvggIBAAPIAYBCIgVBAIhCASg");
	this.shape_425.setTransform(20,-61.3);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#D1D1D1").s().p("AgZAdIgNgcIANgkIAZgHIAbAFIAMAfIgPAlIgcANg");
	this.shape_426.setTransform(-0.6,-58.8);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#E3E3E3").s().p("AgSANIgGgNIAGgSIAUgIIANAFIAKATIgLATIgOAKg");
	this.shape_427.setTransform(10.8,-64.6);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#DEDEDE").s().p("AgQAVIgNgSIANgcIARgHIATAOIAKAUIgIARIgWAOg");
	this.shape_428.setTransform(18.2,-58.2);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#E3E3E3").s().p("AgQAUIgJgWIAKgTIASgFIAQAJIAHAQIgHAUIgQAIg");
	this.shape_429.setTransform(-4,-22.1);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#999999").s().p("Ag8BSIgjhKIAihFIBCgpIA2AdIAkBSIgiBDIgzAbg");
	this.shape_430.setTransform(10.6,-32.9);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#999999").s().p("AhCBIIgdhUIAag7IBIgeIA3AkIAmA6IgdBEIg5Apg");
	this.shape_431.setTransform(-1.5,-52.5);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#999999").s().p("AhGBXIgXhcIAZg7IBMggIAuAcIAoBEIgnBNIg/AUg");
	this.shape_432.setTransform(15.5,-46.1);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#999999").s().p("Ag5A6IghhEIAXhDIBAgaIBEAkIAaBEIgaA7Ig5Asg");
	this.shape_433.setTransform(0,-45.3);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#999999").s().p("AhABXIgbhdIAgg0IA1gpIBDAqIAfA5IgfBUIhGAQg");
	this.shape_434.setTransform(-7.4,-39.6);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#999999").s().p("Ag/BIIgag/IAWhKIA+gaIBHAcIAYBDIgiA9Ig4Aag");
	this.shape_435.setTransform(-5.8,-52.9);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#999999").s().p("AhFBOIgag6IAZhWIBQgeIA0ApIAiA6IggBJIhFAVg");
	this.shape_436.setTransform(1.5,-56.8);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#C0C0C0").s().p("AgnAoIgRgmIAQgiIAugfIAkAbIAPAtIgVAhIgfAWg");
	this.shape_437.setTransform(2.3,-58.1);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#999999").s().p("Ag3BAIghg6IAdhKIA4goIA9AeIAfBOIgeA7Ig9Ayg");
	this.shape_438.setTransform(-0.4,-43);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#B5B5B5").s().p("AgtAwIgVgrIASguIAogcIA2ANIAVA4IgSA3Ig4APg");
	this.shape_439.setTransform(20.5,-64.7);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#D8D8D8").s().p("AgVAZIgLgYIALgfIAVgGIAXAFIAKAaIgMAfIgYALg");
	this.shape_440.setTransform(-0.8,-60.9);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#E3E3E3").s().p("AgOASIgKgPIAKgYIAPgGIAQAMIAIARIgGAOIgTAMg");
	this.shape_441.setTransform(18.4,-59.8);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#999999").s().p("Ag9BSIgihJIAhhGIBEgpIA2AdIAkBTIgjBCIgzAbg");
	this.shape_442.setTransform(10.8,-34.7);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#999999").s().p("AhCBIIgdhUIAag7IBIgdIA2AkIAnA5IgdBEIg5Aog");
	this.shape_443.setTransform(-1.7,-54.9);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#999999").s().p("AhHBXIgWhcIAYg7IBNggIAtAcIApBEIgoBNIg/AUg");
	this.shape_444.setTransform(15.8,-48.3);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#999999").s().p("Ag4A6IgihEIAXhDIBBgaIBDAkIAZBEIgZA7Ig5Asg");
	this.shape_445.setTransform(-0.1,-47.4);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#999999").s().p("AhABXIgbhdIAggzIA1gqIBDArIAfA4IgfBUIhHAPg");
	this.shape_446.setTransform(-7.7,-41.6);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#999999").s().p("Ag/BJIgahAIAWhKIA+gaIBHAcIAYBDIgiA9Ig4Abg");
	this.shape_447.setTransform(-6.2,-55.2);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#C9C9C9").s().p("AghAiIgOghIANgcIAngbIAfAYIAMAlIgSAcIgaATg");
	this.shape_448.setTransform(2.2,-60.6);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#A8A8A8").s().p("AguA2IgcgxIAYg/IAwgiIAzAZIAaBDIgZAyIgzArg");
	this.shape_449.setTransform(-0.5,-46.5);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#C0C0C0").s().p("AglAoIgTgkIAPgnIAigYIAvALIARAwIgPAvIgvAMg");
	this.shape_450.setTransform(20.8,-67.8);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#DEDEDE").s().p("AgRAVIgKgVIAJgZIASgFIATADIAJAXIgLAaIgTAJg");
	this.shape_451.setTransform(-1,-62.8);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#999999").s().p("Ag8BSIgihJIAghGIBEgpIA1AdIAkBTIgiBCIgzAbg");
	this.shape_452.setTransform(11,-36.5);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#999999").s().p("AhCBIIgdhUIAag7IBIgeIA2AkIAnA6IgdBEIg5Apg");
	this.shape_453.setTransform(-2,-57.3);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#999999").s().p("AhHBXIgWhcIAZg7IBMggIAtAcIApBEIgoBNIg/AUg");
	this.shape_454.setTransform(16.1,-50.5);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#999999").s().p("Ag4A6IghhEIAWhDIBBgaIBDAkIAZBEIgZA7Ig5Asg");
	this.shape_455.setTransform(-0.3,-49.6);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#999999").s().p("AhABYIgaheIAfg0IA0goIBEAqIAeA4IgeBUIhHAPg");
	this.shape_456.setTransform(-8.1,-43.6);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#999999").s().p("Ag/BIIgZg/IAUhKIA/gZIBHAbIAYBDIgiA8Ig4Abg");
	this.shape_457.setTransform(-6.6,-57.5);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#999999").s().p("AhGBOIgZg5IAZhXIBPgdIA0AoIAjA7IghBIIhEAUg");
	this.shape_458.setTransform(1.2,-61.7);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#D1D1D1").s().p("AgbAcIgNgbIAMgYIAggWIAaATIALAgIgPAYIgWAQg");
	this.shape_459.setTransform(2.2,-62.9);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#B5B5B5").s().p("AgnAuIgYgpIAVg2IAogdIArAWIAWA4IgVArIgrAkg");
	this.shape_460.setTransform(-0.6,-49.7);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#C9C9C9").s().p("AggAiIgPgeIANghIAdgVIAnAKIAOAoIgNAoIgnALg");
	this.shape_461.setTransform(21.2,-70.5);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#E3E3E3").s().p("AgOASIgIgSIAHgWIAPgDIAQACIAHATIgJAXIgQAIg");
	this.shape_462.setTransform(-1.2,-64.5);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#999999").s().p("Ag8BSIgihJIAghGIBEgpIA1AdIAkBSIgjBDIgyAag");
	this.shape_463.setTransform(11.2,-38.3);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#999999").s().p("AhGBXIgXhcIAZg7IBNggIAsAcIAoBEIgnBNIg/AUg");
	this.shape_464.setTransform(16.4,-52.7);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#999999").s().p("Ag4A5IghhDIAWhEIBBgaIBDAlIAZBDIgZA8Ig5Atg");
	this.shape_465.setTransform(-0.4,-51.7);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#999999").s().p("AhABYIgbheIAhgzIA0gqIBDArIAfA4IgfBVIhHAOg");
	this.shape_466.setTransform(-8.5,-45.7);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#A8A8A8").s().p("Ag1A9IgWg1IASg/IA1gVIA9AWIATA5IgdAzIgvAXg");
	this.shape_467.setTransform(-7,-61.3);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#A8A8A8").s().p("Ag7BDIgWgxIAWhJIBDgaIAsAjIAeAxIgcA+Ig7ARg");
	this.shape_468.setTransform(1,-65.6);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#D8D8D8").s().p("AgXAYIgLgXIAKgUIAcgTIAWARIAIAaIgMAUIgTAOg");
	this.shape_469.setTransform(2.1,-65);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#C0C0C0").s().p("AghAnIgTgjIARguIAigYIAkASIATAwIgSAkIgkAfg");
	this.shape_470.setTransform(-0.6,-52.4);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#D1D1D1").s().p("AgaAdIgOgaIALgbIAZgSIAgAIIANAiIgLAiIghAJg");
	this.shape_471.setTransform(21.5,-73);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#999999").s().p("Ag8BSIgihJIAhhFIBDgqIA1AdIAkBTIgiBDIgyAag");
	this.shape_472.setTransform(11.3,-40.2);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#999999").s().p("AhCBIIgdhUIAag7IBIgeIA2AkIAnA6IgeBEIg4Apg");
	this.shape_473.setTransform(-2.4,-62.2);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#999999").s().p("AhHBYIgVhdIAXg6IBNghIAtAcIAoBEIgoBOIg+ATg");
	this.shape_474.setTransform(16.7,-55);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#999999").s().p("Ag4A5IghhEIAWhCIBBgaIBDAkIAZBEIgZA6Ig5Atg");
	this.shape_475.setTransform(-0.5,-53.9);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#999999").s().p("AhABYIgbheIAggzIA1gqIBCArIAgA4IgfBVIhIAPg");
	this.shape_476.setTransform(-8.8,-47.7);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#B5B5B5").s().p("AguA1IgSguIAQg1IAsgTIA0AUIARAvIgZAsIgoAUg");
	this.shape_477.setTransform(-7.3,-64.8);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#B5B5B5").s().p("AgyA5IgTgpIATg/IA5gWIAlAeIAaApIgYA1IgyAPg");
	this.shape_478.setTransform(0.8,-69);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#DEDEDE").s().p("AgTAUIgJgTIAIgRIAXgQIATAOIAHAWIgLARIgPAMg");
	this.shape_479.setTransform(2,-66.8);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#C9C9C9").s().p("AgcAhIgRgeIAPgmIAdgVIAfAPIAPApIgPAeIgeAbg");
	this.shape_480.setTransform(-0.7,-54.9);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#D8D8D8").s().p("AgWAYIgLgVIAJgYIAUgOIAcAGIALAdIgKAcIgcAIg");
	this.shape_481.setTransform(21.8,-75.2);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#999999").s().p("Ag8BSIgihJIAhhGIBDgoIA1AcIAkBTIgjBDIgxAag");
	this.shape_482.setTransform(11.5,-42.1);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#999999").s().p("AhCBIIgdhUIAag7IBIgeIA2AlIAnA5IgdBEIg4Apg");
	this.shape_483.setTransform(-2.7,-64.7);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#999999").s().p("AhHBYIgWhdIAYg7IBOggIAsAcIAoBEIgnBNIg/AUg");
	this.shape_484.setTransform(16.9,-57.3);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#999999").s().p("Ag4A5IghhEIAWhCIBAgaIBDAkIAaBEIgaA6Ig3Atg");
	this.shape_485.setTransform(-0.6,-56.2);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#999999").s().p("Ag/BYIgbheIAfgzIA1gqIBDArIAfA4IgfBVIhIAOg");
	this.shape_486.setTransform(-9.2,-49.8);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#C0C0C0").s().p("AgmAtIgQgnIANgtIAmgQIArARIAPAoIgWAmIghAQg");
	this.shape_487.setTransform(-7.7,-67.9);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#C0C0C0").s().p("AgrAwIgPgjIAPg0IAxgTIAfAZIAWAjIgUAtIgqAMg");
	this.shape_488.setTransform(0.7,-72.1);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#E3E3E3").s().p("AgRARIgHgRIAHgNIATgOIAQAMIAHATIgKAOIgNAKg");
	this.shape_489.setTransform(2,-68.5);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#D1D1D1").s().p("AgXAcIgPgZIANghIAYgSIAaAOIANAiIgNAaIgZAWg");
	this.shape_490.setTransform(-0.7,-57.1);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#DEDEDE").s().p("AgTAVIgJgTIAHgTIASgNIAXAGIAJAYIgIAYIgXAHg");
	this.shape_491.setTransform(22,-77.2);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#999999").s().p("Ag8BTIgihKIAhhFIBDgqIA1AdIAkBTIgjBDIgxAag");
	this.shape_492.setTransform(11.7,-44);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#A8A8A8").s().p("Ag3A9IgZhIIAWgxIA9gaIAtAfIAhAxIgZA5IgvAjg");
	this.shape_493.setTransform(-2.9,-68.7);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#999999").s().p("AhHBYIgVheIAYg6IBNggIArAcIApBEIgoBNIg+AUg");
	this.shape_494.setTransform(17.2,-59.6);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#999999").s().p("Ag4A5IghhEIAWhDIBAgaIBEAlIAZBEIgZA7Ig4Atg");
	this.shape_495.setTransform(-0.8,-58.5);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#999999").s().p("Ag/BZIgbhfIAfgzIA0gpIBDAqIAfA4IgeBUIhHAQg");
	this.shape_496.setTransform(-9.5,-51.9);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#C9C9C9").s().p("AggAmIgNghIAKgmIAhgNIAkAOIAMAiIgSAfIgcAOg");
	this.shape_497.setTransform(-8,-70.6);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#C9C9C9").s().p("AgjApIgOgeIAOgtIAogPIAbAVIASAeIgRAmIgjAKg");
	this.shape_498.setTransform(0.5,-74.8);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#D8D8D8").s().p("AgTAYIgNgWIALgbIAVgPIAVALIAMAdIgMAWIgVATg");
	this.shape_499.setTransform(-0.8,-59.1);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#E3E3E3").s().p("AgPARIgJgPIAHgRIAPgKIATAFIAIAUIgHAVIgTAFg");
	this.shape_500.setTransform(22.2,-79);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#999999").s().p("Ag7BTIgjhJIAhhGIBDgqIA0AdIAlBTIgjBDIgxAag");
	this.shape_501.setTransform(11.9,-46);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#B5B5B5").s().p("AgvA0IgVg9IATgqIAzgWIAnAaIAcAqIgVAwIgoAfg");
	this.shape_502.setTransform(-3.2,-72.3);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#999999").s().p("AhHBYIgVhdIAYg7IBNggIArAcIApBEIgoBNIg/AUg");
	this.shape_503.setTransform(17.5,-61.9);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#999999").s().p("Ag3A5IgihEIAWhDIBAgaIBEAlIAZBEIgZA6Ig4Aug");
	this.shape_504.setTransform(-1,-60.8);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#999999").s().p("AhABZIgahgIAggyIAzgpIBDArIAfA3IgfBVIhHAOg");
	this.shape_505.setTransform(-9.9,-54.1);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#D1D1D1").s().p("AgbAgIgLgcIAJggIAbgLIAfAMIAKAcIgPAbIgYAMg");
	this.shape_506.setTransform(-8.2,-73);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#D1D1D1").s().p("AgeAjIgLgaIALglIAigNIAWASIAQAYIgOAhIgeAIg");
	this.shape_507.setTransform(0.3,-77.3);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#DEDEDE").s().p("AgQAUIgLgSIAJgXIASgNIASAKIAKAYIgKATIgSAQg");
	this.shape_508.setTransform(-0.8,-60.8);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#999999").s().p("Ag8BTIgihJIAhhGIBDgqIA0AdIAlBTIgjBDIgxAag");
	this.shape_509.setTransform(12.1,-47.9);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#C0C0C0").s().p("AgnAsIgSg0IAPgjIAsgSIAgAWIAZAjIgSApIgjAZg");
	this.shape_510.setTransform(-3.4,-75.5);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#A8A8A8").s().p("Ag8BLIgShPIAUgyIBCgbIAkAXIAjA6IgiBCIg1AQg");
	this.shape_511.setTransform(17.7,-65.8);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#A8A8A8").s().p("AgvAwIgcg5IASg5IA3gWIA5AgIAVA5IgVAxIgvAng");
	this.shape_512.setTransform(-1.2,-64.6);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#999999").s().p("Ag/BZIgbhgIAggyIAzgpIBDAqIAfA4IgfBVIhHAOg");
	this.shape_513.setTransform(-10.3,-56.3);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#D8D8D8").s().p("AgXAcIgJgYIAIgbIAXgKIAaALIAIAYIgNAWIgUAKg");
	this.shape_514.setTransform(-8.5,-75.2);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#D8D8D8").s().p("AgZAdIgKgVIAKggIAcgLIATAQIAOAUIgNAcIgYAHg");
	this.shape_515.setTransform(0.2,-79.5);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#E3E3E3").s().p("AgNARIgJgQIAIgTIAOgLIAPAIIAIAVIgIAPIgPAPg");
	this.shape_516.setTransform(-0.9,-62.4);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#999999").s().p("Ag8BTIgihJIAhhGIBDgqIA0AdIAlBUIgjBCIgxAag");
	this.shape_517.setTransform(12.3,-49.9);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#C9C9C9").s().p("AghAlIgQgrIAOgeIAlgQIAbATIAVAdIgPAjIgdAWg");
	this.shape_518.setTransform(-3.6,-78.4);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#B5B5B5").s().p("AgzBAIgPhEIARgqIA4gXIAeAUIAeAxIgdA4IgtAOg");
	this.shape_519.setTransform(17.9,-69.1);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#B5B5B5").s().p("AgoApIgXgxIAPgwIAvgTIAvAbIASAwIgSArIgnAgg");
	this.shape_520.setTransform(-1.3,-68);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#DEDEDE").s().p("AgTAXIgIgUIAGgXIAUgIIAWAJIAHAUIgLATIgRAJg");
	this.shape_521.setTransform(-8.7,-77.1);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#DEDEDE").s().p("AgVAZIgJgTIAJgaIAYgKIAQAOIALARIgKAXIgVAHg");
	this.shape_522.setTransform(0.1,-81.5);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#999999").s().p("Ag7BTIgjhJIAhhGIBDgqIA0AcIAlBVIgjBCIgwAag");
	this.shape_523.setTransform(12.5,-51.9);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#D1D1D1").s().p("AgcAgIgNglIAMgaIAegNIAYAQIARAZIgMAeIgZASg");
	this.shape_524.setTransform(-3.8,-80.9);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#C0C0C0").s().p("AgrA2IgNg5IAPgjIAugUIAaARIAaApIgZAwIglALg");
	this.shape_525.setTransform(18.1,-72.2);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#C0C0C0").s().p("AghAiIgVgpIAOgpIAngPIAoAXIAPAoIgOAkIgiAcg");
	this.shape_526.setTransform(-1.5,-71.1);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#999999").s().p("Ag/BaIgbhhIAggyIAzgqIBDAsIAfA2IgfBWIhHAPg");
	this.shape_527.setTransform(-11.2,-60.7);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#E3E3E3").s().p("AgQAUIgHgRIAGgTIAQgHIATAHIAGARIgKAQIgOAHg");
	this.shape_528.setTransform(-8.9,-78.9);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#E3E3E3").s().p("AgSAVIgHgPIAHgWIAUgJIAOAMIAKAOIgJAUIgRAFg");
	this.shape_529.setTransform(0,-83.3);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#999999").s().p("Ag7BTIgjhJIAihGIBCgqIA0AdIAlBUIgkBDIgvAZg");
	this.shape_530.setTransform(12.7,-54);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#D8D8D8").s().p("AgYAbIgLgfIAKgWIAagLIAUANIAPAWIgLAZIgVAPg");
	this.shape_531.setTransform(-4,-83.2);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#C9C9C9").s().p("AgkAuIgLgwIAMgeIAogRIAVAOIAWAjIgVApIggAJg");
	this.shape_532.setTransform(18.2,-74.9);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#C9C9C9").s().p("AgcAdIgRgjIALgiIAhgNIAiATIANAiIgNAeIgcAYg");
	this.shape_533.setTransform(-1.6,-73.8);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#A8A8A8").s().p("Ag2BMIgWhSIAbgqIArgjIA4AkIAbAvIgaBIIg9AMg");
	this.shape_534.setTransform(-11.7,-64.3);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#999999").s().p("Ag7BUIgjhKIAhhGIBEgqIAzAdIAlBUIgjBDIgwAZg");
	this.shape_535.setTransform(12.8,-56);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#DEDEDE").s().p("AgUAXIgJgaIAIgTIAWgJIAQAMIAOARIgKAVIgRANg");
	this.shape_536.setTransform(-4.2,-85.3);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#D1D1D1").s().p("AgeAoIgKgqIALgZIAhgPIASANIATAdIgTAiIgaAJg");
	this.shape_537.setTransform(18.4,-77.3);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#D1D1D1").s().p("AgXAZIgPgdIAKgeIAcgLIAcAQIALAdIgLAaIgXAUg");
	this.shape_538.setTransform(-1.8,-76.2);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#B5B5B5").s().p("AguBBIgThGIAYgjIAkgfIAvAgIAYAnIgXA+IgzAKg");
	this.shape_539.setTransform(-12.1,-67.6);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#999999").s().p("Ag7BTIgjhJIAhhGIBEgqIAzAdIAlBUIgkBDIgvAZg");
	this.shape_540.setTransform(13,-58.1);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#E3E3E3").s().p("AgRATIgIgWIAHgPIATgIIAOAKIALAPIgIARIgPALg");
	this.shape_541.setTransform(-4.4,-87.2);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#D8D8D8").s().p("AgaAiIgIgjIAJgWIAcgMIAQAKIAQAZIgQAdIgWAHg");
	this.shape_542.setTransform(18.6,-79.4);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#D8D8D8").s().p("AgTAVIgNgZIAIgZIAYgJIAYAOIAJAYIgJAWIgUARg");
	this.shape_543.setTransform(-1.9,-78.4);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#C0C0C0").s().p("AgmA3IgQg7IATgeIAfgaIAoAbIATAhIgTA1IgrAIg");
	this.shape_544.setTransform(-12.5,-70.5);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#999999").s().p("Ag7BUIgjhKIAihFIBDgrIAyAcIAlBVIgjBDIgvAZg");
	this.shape_545.setTransform(13.2,-60.3);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#DEDEDE").s().p("AgWAcIgHgdIAIgSIAYgKIANAJIANAUIgNAZIgTAGg");
	this.shape_546.setTransform(18.7,-81.3);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#DEDEDE").s().p("AgQASIgLgVIAHgVIAUgIIAUAMIAIAUIgHASIgSAPg");
	this.shape_547.setTransform(-2,-80.3);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#C9C9C9").s().p("AggAvIgOgyIARgaIAagWIAiAYIAQAbIgQAtIglAHg");
	this.shape_548.setTransform(-12.8,-73.1);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#999999").s().p("Ag7BUIgjhJIAhhGIBEgrIAyAcIAlBVIgjBDIgvAZg");
	this.shape_549.setTransform(13.4,-62.4);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#E3E3E3").s().p("AgSAYIgGgZIAHgPIATgJIALAIIAMARIgMAVIgOAFg");
	this.shape_550.setTransform(18.8,-83.1);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#E3E3E3").s().p("AgNAPIgKgRIAGgSIARgHIARAKIAHARIgHAQIgOAMg");
	this.shape_551.setTransform(-2.1,-82.1);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#D1D1D1").s().p("AgbAoIgMgqIAOgWIAWgTIAdATIAOAYIgOAmIgfAGg");
	this.shape_552.setTransform(-13.2,-75.4);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#999999").s().p("Ag6BUIgkhJIAihGIBDgrIAyAcIAmBVIgkBDIguAZg");
	this.shape_553.setTransform(13.6,-64.6);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#D8D8D8").s().p("AgXAiIgKgkIAMgSIATgQIAYAQIAMAUIgMAgIgaAFg");
	this.shape_554.setTransform(-13.5,-77.4);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#A8A8A8").s().p("AgxBIIgeg/IAcg7IA5glIAqAYIAgBJIgeA4IgnAWg");
	this.shape_555.setTransform(13.8,-68.2);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#DEDEDE").s().p("AgTAdIgJgeIAKgPIARgPIATAPIAKAQIgKAbIgVAEg");
	this.shape_556.setTransform(-13.7,-79.3);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#B5B5B5").s().p("AgpA9Igag1IAYgyIAwgfIAkAUIAbA9IgaAwIghASg");
	this.shape_557.setTransform(14,-71.4);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#E3E3E3").s().p("AgQAZIgHgaIAJgNIANgMIARANIAIANIgIAYIgSADg");
	this.shape_558.setTransform(-14,-81);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#C0C0C0").s().p("AgjA0IgWguIAVgqIAogaIAfARIAXA0IgWApIgcAPg");
	this.shape_559.setTransform(14.2,-74.3);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#C9C9C9").s().p("AgeAsIgSgmIARgkIAigXIAaAPIAUAsIgTAiIgXAOg");
	this.shape_560.setTransform(14.3,-76.8);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#D1D1D1").s().p("AgZAlIgPggIAOgeIAdgUIAVANIARAlIgQAdIgUALg");
	this.shape_561.setTransform(14.5,-79.1);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#D8D8D8").s().p("AgVAgIgNgcIANgZIAYgRIASALIAOAfIgNAZIgRAKg");
	this.shape_562.setTransform(14.5,-81.1);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#DEDEDE").s().p("AgRAbIgMgYIALgVIAUgOIAQAJIAMAbIgMAVIgOAIg");
	this.shape_563.setTransform(14.7,-82.9);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#E3E3E3").s().p("AgPAXIgJgUIAJgSIARgMIANAIIAKAWIgKASIgMAHg");
	this.shape_564.setTransform(14.7,-84.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]}).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112,p:{x:10.3,y:-34.1}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]},1).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132,p:{x:9.9,y:-21.6}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122,p:{x:1.4,y:-21.2}},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_168},{t:this.shape_112,p:{x:10.7,y:-38.1}},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_132,p:{x:10,y:-23.3}},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_122,p:{x:1.2,y:-23.1}},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169}]},1).to({state:[{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213,p:{x:10.1,y:-36.9}},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197}]},1).to({state:[{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231,p:{x:-2,y:-29.9}},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223}]},1).to({state:[{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_213,p:{x:10.4,y:-41.2}},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255,p:{x:-2.3,y:-31.8}},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247}]},1).to({state:[{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_231,p:{x:-2.6,y:-33.8}},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269}]},1).to({state:[{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_255,p:{x:-3,y:-35.8}},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290}]},1).to({state:[{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309}]},1).to({state:[{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329}]},1).to({state:[{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349}]},1).to({state:[{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367}]},1).to({state:[{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384}]},1).to({state:[{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407,p:{x:1.8,y:-52}},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400}]},1).to({state:[{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_407,p:{x:1.6,y:-54.4}},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416}]},1).to({state:[{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429}]},1).to({state:[{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_407,p:{x:1.4,y:-59.2}},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442}]},1).to({state:[{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453,p:{x:-2,y:-57.3}},{t:this.shape_452}]},1).to({state:[{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_453,p:{x:-2.2,y:-59.7}},{t:this.shape_463}]},1).to({state:[{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472}]},1).to({state:[{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482}]},1).to({state:[{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492}]},1).to({state:[{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505,p:{x:-9.9,y:-54.1}},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501}]},1).to({state:[{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509}]},1).to({state:[{t:this.shape_522},{t:this.shape_521},{t:this.shape_505,p:{x:-10.8,y:-58.5}},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517}]},1).to({state:[{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523}]},1).to({state:[{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530}]},1).to({state:[{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535}]},1).to({state:[{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540}]},1).to({state:[{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545}]},1).to({state:[{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549}]},1).to({state:[{t:this.shape_554},{t:this.shape_553}]},1).to({state:[{t:this.shape_556},{t:this.shape_555}]},1).to({state:[{t:this.shape_558},{t:this.shape_557}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-45.5,34.9,65.1);


// stage content:



(lib.pag90cuatro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var root=this;
		
		root.inicio.text="968";
		
		
		// cargar vagones con sus valores iniciales
		
			var cargarVago=[root.vagon1.txt1,root.vagon2.txt2,root.vagon3.txt3,root.vagon4.txt4,root.vagon5.txt5,root.vagon6.txt6,root.vagon7.txt7,root.vagon8.txt8,root.vagon9.txt9,root.vagon10.txt10];
		
			function init_vagones(ini){
				var i;
				for (i=0; i<cargarVago.length; i++) { 
					cargarVago[i].text=ini;
					ini=ini-3;
				}
			}
			init_vagones(968);
		//--------------------------------------------------------------------------------
		
		//generando numeros aleatorios para el objeto ini	
		
			var usados=new Array();
			var longi=0;
		
		
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
		//---------------------------------------------------------------------
			
			
		root.mas.addEventListener("click",botonMas);
		
		root.menos.addEventListener("click",botonMenos);
		root.verificar.addEventListener("click",botonVerificar);
		
		var cont=968;
		var a,b=0;
		var valor=965;
			
		
		
			
		function botonMas(event) {
			cont++;
			root.inicio.text=cont;
		}
		function botonMenos(event) {
			cont--;
			root.inicio.text=cont;
		}
		
		var vagones=[root.vagon1,root.vagon2,root.vagon3,root.vagon4,root.vagon5,root.vagon6,root.vagon7,root.vagon8,root.vagon9,root.vagon10];
		
		function turno(num){
			//alert(c);
			if(c<9){
			   setTimeout(function(){vagones[num].alpha=1;root.inicio.text=cont=aleatorio(valor-5,valor+5);},450);
		    }else
			{
				setTimeout(function(){vagones[num].alpha=1;root.inicio.text=cont=aleatorio(valor-5,valor+5);root.luz.alpha=1;root.sig1.alpha=1;root.menos.alpha=0;root.mas.alpha=0;root.verificar.alpha=0;},450);
			    
				    setTimeout(function(){playSound("chuchu");},1000);
					setTimeout(function(){playSound("chuchu");},3000);
					setTimeout(function(){playSound("chuchu");},5000);
			}
		}
		
		var c=0;	
		function botonVerificar(event){
		   
			if(valor==cont){
		        		
				playSound("muybien");
				
				c++;
		        turno(c);
		
				valor=valor-3;
				
			}else{
				playSound("malpepo");
			}
			
			
		}
		root.sig1.addEventListener("click",botonSig1);
		
		
		function botonSig1(event){
			 window.open("pag90cinco.html","_self");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Capa 2
	this.sig1 = new lib.Símbolo15();
	this.sig1.setTransform(1087.9,714.8);
	this.sig1.alpha = 0;
	new cjs.ButtonHelper(this.sig1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.sig1).wait(1));

	// Capa 6
	this.luz = new lib.Symbol26();
	this.luz.setTransform(1086.7,718,0.727,0.727);
	this.luz.alpha = 0;
	this.luz.shadow = new cjs.Shadow("#CCFF00",0,0,60);

	this.timeline.addTween(cjs.Tween.get(this.luz).wait(1));

	// Capa 4
	this.inicio = new cjs.Text("", "bold 50px 'Calibri'", "#FFFFFF");
	this.inicio.name = "inicio";
	this.inicio.textAlign = "center";
	this.inicio.lineHeight = 63;
	this.inicio.lineWidth = 104;
	this.inicio.setTransform(591.8,547.2);

	this.vagonIni = new lib.Símbolo14();
	this.vagonIni.setTransform(600.5,593,1,1,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.vagonIni},{t:this.inicio}]}).wait(1));

	// Capa 3
	this.verificar = new lib.Símbolo3();
	this.verificar.setTransform(592.6,710.5);
	new cjs.ButtonHelper(this.verificar, 0, 1, 1);

	this.menos = new lib.Símbolo2();
	this.menos.setTransform(398.3,709.6);
	new cjs.ButtonHelper(this.menos, 0, 1, 1);

	this.mas = new lib.Símbolo1();
	this.mas.setTransform(782.5,708);
	new cjs.ButtonHelper(this.mas, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mas},{t:this.menos},{t:this.verificar}]}).wait(1));

	// Capa 1
	this.vagon10 = new lib.Símbolo13();
	this.vagon10.setTransform(363,447.5,0.959,0.959);
	this.vagon10.alpha = 0;

	this.vagon9 = new lib.Símbolo12();
	this.vagon9.setTransform(509.4,451,0.959,0.959);
	this.vagon9.alpha = 0;

	this.vagon8 = new lib.Símbolo11();
	this.vagon8.setTransform(657.5,451,0.959,0.959);
	this.vagon8.alpha = 0;

	this.vagon7 = new lib.Símbolo10();
	this.vagon7.setTransform(810.6,450.6,0.959,0.959);
	this.vagon7.alpha = 0;

	this.vagon6 = new lib.Símbolo9();
	this.vagon6.setTransform(957.2,416.4,0.959,0.959);
	this.vagon6.alpha = 0;

	this.vagon5 = new lib.Símbolo8();
	this.vagon5.setTransform(959.7,302.1,0.959,0.959);
	this.vagon5.alpha = 0;

	this.vagon4 = new lib.Símbolo7();
	this.vagon4.setTransform(831.2,229.9,0.959,0.959);
	this.vagon4.alpha = 0;

	this.vagon3 = new lib.Símbolo6();
	this.vagon3.setTransform(685.7,231.3,0.959,0.959);
	this.vagon3.alpha = 0;

	this.vagon2 = new lib.Símbolo5();
	this.vagon2.setTransform(536.9,232.4,0.959,0.959);
	this.vagon2.alpha = 0;

	this.vagon1 = new lib.Símbolo4();
	this.vagon1.setTransform(391.6,231.8,0.959,0.959);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8471E").s().p("AgCAQQgXgFgNgTQAFgGACgBQALAQATAEQASAEARgKIAEAGQgQALgRAAIgHAAg");
	this.shape.setTransform(154.5,269.8,0.959,0.959);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF1818").s().p("AhCBRICBikIAEADIiBCkg");
	this.shape_1.setTransform(145.2,277,0.959,0.959);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BF1818").s().p("Ag+BVIB5irIAEADIh4Cqg");
	this.shape_2.setTransform(146,277.6,0.959,0.959);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BF1818").s().p("Ag3BWIBriuIAEADIhrCug");
	this.shape_3.setTransform(146.7,278.3,0.959,0.959);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BF1818").s().p("AgsBdIBUi7IAFACIhVC7g");
	this.shape_4.setTransform(148.1,278.9,0.959,0.959);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BF1818").s().p("AghBhIA+jCIAFABIg+DCg");
	this.shape_5.setTransform(149.6,279.5,0.959,0.959);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BF1818").s().p("AgWBjIAojHIAFAAIgnDKg");
	this.shape_6.setTransform(150.9,279.7,0.959,0.959);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BF1818").s().p("AgOBkIAYjIIAFABIgYDIg");
	this.shape_7.setTransform(152.1,280.3,0.959,0.959);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BF1818").s().p("AgHhkIAFgBIAKDKIgGABg");
	this.shape_8.setTransform(155.7,280.7,0.959,0.959);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BF1818").s().p("AgBBlIAAjJIADAAIAADJg");
	this.shape_9.setTransform(154.1,280.6,0.959,0.959);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E8471E").s().p("AAOBmQgzgJgYgiIBQijIAGADQALADASgEIAIDPIgPAAQgQAAgRgDg");
	this.shape_10.setTransform(150.6,280.4,0.959,0.959);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E8471E").s().p("AgpBYIgngcICEikQAMAPAKAFQAFACACgBIglC3QgNAFgPAAQgZAAgggRg");
	this.shape_11.setTransform(146.4,278.7,0.959,0.959);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E8471E").s().p("AgXBhIgrgUIBli0QAOAMALADQAFABACgBIgEC2QgUAKgZAAQgSAAgXgHg");
	this.shape_12.setTransform(147.9,279.3,0.959,0.959);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F07E1B").s().p("AjIDKIAAmSIGSAAIAAGSgAitCuIFbAAIAAlbIlbAAg");
	this.shape_13.setTransform(262.8,208.4,0.959,0.959);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BF1818").s().p("AjIDJIGNmVIAFAEImOGVg");
	this.shape_14.setTransform(259.8,266.2,0.959,0.959);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BF1818").s().p("AjIjIIAEgEIGOGVIgFAEg");
	this.shape_15.setTransform(259.8,266.2,0.959,0.959);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BF1818").s().p("AkZADIAAgFIIzAAIAAAFg");
	this.shape_16.setTransform(259.9,266.2,0.959,0.959);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BF1818").s().p("AgBEfIAAo+IAEAAIAAI+g");
	this.shape_17.setTransform(259.8,266.2,0.959,0.959);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F3E600").s().p("AjKDMQhVhVABh3QgBh2BVhUQBVhUB1gBQB3ABBUBUQBVBUAAB2QAAB3hVBVQhUBTh3AAQh2AAhUhTg");
	this.shape_18.setTransform(259.8,266.2,0.959,0.959);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BF1818").s().p("Ah6B3IDyjwIADADIjyDwg");
	this.shape_19.setTransform(213.1,274.8,0.959,0.959);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BF1818").s().p("Ah6h2IADgDIDyDwIgDADg");
	this.shape_20.setTransform(213.1,274.8,0.959,0.959);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BF1818").s().p("AirABIAAgBIFXAAIAAABg");
	this.shape_21.setTransform(213.1,274.8,0.959,0.959);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BF1818").s().p("AAACrIAAlVIABAAIAAFVg");
	this.shape_22.setTransform(213.1,274.8,0.959,0.959);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F3E600").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAQhFAAgygyg");
	this.shape_23.setTransform(213.1,274.8,0.959,0.959);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BF1818").s().p("Ah6B3IDyjwIADADIjyDwg");
	this.shape_24.setTransform(177.9,274.8,0.959,0.959);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BF1818").s().p("Ah6h2IADgDIDyDwIgDADg");
	this.shape_25.setTransform(177.9,274.8,0.959,0.959);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BF1818").s().p("AirABIAAgBIFXAAIAAABg");
	this.shape_26.setTransform(177.9,274.8,0.959,0.959);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BF1818").s().p("AAACrIAAlVIABAAIAAFVg");
	this.shape_27.setTransform(177.9,274.8,0.959,0.959);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F3E600").s().p("Ah3B4QgygyAAhGQAAhFAygyQAygyBFAAQBGAAAyAyQAyAyAABFQAABGgyAyQgyAyhGAAQhFAAgygyg");
	this.shape_28.setTransform(177.9,274.8,0.959,0.959);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BF1818").s().p("AjeIdQg3AAgngkQgngkAAgzIAAtAQAAgjg7gyQgWgTgCgFQgEgJAZAAIJQgGIBigCQBPAAApAHQB9AXjSBgIAANAQAAAzgnAkQgnAkg3AAgAjRAoIGOAAIAAlsImOAAg");
	this.shape_29.setTransform(263.9,222.8,0.959,0.959);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E8471E").s().p("Ag8DtQApgLAahDQAchEAAhbQAAhagchEQgahDgpgLIANgCQAuABAdBFQAgBGABBiQgBBiggBHQgdBFguAAIgNgBg");
	this.shape_30.setTransform(162.4,248.2,0.959,0.959);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F07E1B").s().p("AhLCpQghhGAAhjQAAhhAhhGQAghHArAAQAsAAAhBHQAfBGAABhQAABjgfBGQghBGgsAAQgrAAgghGg");
	this.shape_31.setTransform(157.1,248.4,0.959,0.959);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8CBE23").s().p("AmEDvQg1gBglggQgmgiAAguIAAj7QAAguAmgiQAlggA1gBIMJAAQA2ABAkAgQAmAiAAAuIAAD7QAAAugmAiQgkAgg2ABg");
	this.shape_32.setTransform(198.5,248.3,0.959,0.959);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F3E600").s().p("AhcANQgHAAgGgEQgEgEAAgFQAAgEAEgEQAGgEAHAAIC5AAQAHAAAGAEQAEAEAAAEQAAAFgEAEQgGAEgHAAg");
	this.shape_33.setTransform(199.7,195.5,0.959,0.959);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00A0C6").s().p("AgiBZIhJixIDXgCIhPC1g");
	this.shape_34.setTransform(199.9,204.4,0.959,0.959);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00A0C6").s().p("AhdAQIgagfIDvgEIgSAng");
	this.shape_35.setTransform(199.5,193.6,0.959,0.959);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00A0C6").s().p("AgYBZQgKgLAAgPIAAh9QAAgPAKgKQALgLANAAQAOAAALALQAKAKAAAPIAAB9QAAAPgKALQgLAKgOAAQgNAAgLgKg");
	this.shape_36.setTransform(199.7,218.8,0.959,0.959);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F3E600").s().p("AglAuQgQgTAAgbQAAgaAQgTQAQgTAVAAQAWAAAQATQAQATAAAaQAAAbgQATQgQATgWAAQgVAAgQgTg");
	this.shape_37.setTransform(173.8,213.4,0.959,0.959);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00A0C6").s().p("AgJAjQgEgFgBgGIAAgvQABgHAEgDQAEgFAFAAQAGAAAEAFQAFADgBAHIAAAvQABAGgFAFQgEAEgGAAQgFAAgEgEg");
	this.shape_38.setTransform(173.9,223.1,0.959,0.959);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F3E600").s().p("AgWBbQgKgKAAgOIAAiFQAAgOAKgKQAJgKANAAQANAAAKAKQAKAKAAAOIAACFQAAAOgKAKQgKAKgNAAQgNAAgJgKg");
	this.shape_39.setTransform(315.6,248.3,0.959,0.959);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F3E600").s().p("AicAtQgTAAgNgOQgNgNAAgSQAAgRANgNQANgOATAAIE5AAQATAAANAOQANANAAARQAAASgNANQgNAOgTAAg");
	this.shape_40.setTransform(294,248.3,0.959,0.959);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F3E600").s().p("Ap3AhIAAhBITvAAIAABBg");
	this.shape_41.setTransform(214.4,274.1,0.959,0.959);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.vagon1},{t:this.vagon2},{t:this.vagon3},{t:this.vagon4},{t:this.vagon5},{t:this.vagon6},{t:this.vagon7},{t:this.vagon8},{t:this.vagon9},{t:this.vagon10}]}).wait(1));

	// Capa 5
	this.instance = new lib.Símbolo2_1();
	this.instance.setTransform(214.9,208.4,0.568,0.569,0,0,0,30.1,22.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// fondo
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgKANQgEgDABgKQgBgJAEgDQADgDAHAAQAIAAAEADQACADAAAJQABAKgEADQgDADgIAAQgHAAgDgDg");
	this.shape_42.setTransform(822.2,121.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("Ag4ByIgCgBIgCgBIgBgCIAAgFIAAgDIABgEIACgBIACgBIAzAAIAAi5IgwAeIgFACIgDgBIgBgDIgBgEIABgFIAAgDIACgBIACgCIA2gjIACgBIACAAIAAAAIAEgBIAFABIADABIACABIAAABIAADNIAsAAIACABIACABIABAEIABADIgBAFIgBACIgCABIgCABg");
	this.shape_43.setTransform(809.3,111.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAdByIgEgBIgBgBIAAgCIAAg0IhgAAIgDAAIgCgCIgCgDIAAgEIAAgEIABgDIABgDIACgEIBWiPIACgCIADgCIAGgBIAGAAIAHAAIAGABIACACIABACIAACUIAdAAQAEAAABACQACADAAAEQAAAEgCADQgBACgEAAIgdAAIAAA0IAAACIgBABIgEABIgFAAIgFAAgAg4AoIBQAAIAAiGIgBAAg");
	this.shape_44.setTransform(790.4,112);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgkBzIgMgCIgJgDIgGgDIgCgDIgBgGIAAgFIABgCIABgBIACgBIAGACIAIADIANADIAQABQATAAALgHQANgIAJgMQAIgMAFgQQAEgQAAgSQgKAFgOAFQgNAEgRAAQgTAAgNgFQgNgFgIgJQgIgIgDgMQgDgMAAgNQAAgOAEgNQAEgOAJgKQAJgLAOgGQAOgGASAAQANAAALADQAKAEAIAHQAIAGAGAKQAFAKAEAMQADAMACAOQABAOAAAQQAAAOgBAPQgCAPgFAOQgEAOgHAMQgIAMgKAIQgLAJgOAFQgNAFgSAAIgPgBgAgWhcQgKAEgFAIQgGAIgDAKQgDAJAAAKQAAALADAJQACAKAGAGQAFAHAKACQAJAEANAAQANAAAOgFQAOgCAKgHQAAgZgDgRQgEgRgGgKQgHgLgKgFQgJgEgLAAQgNAAgJAFg");
	this.shape_45.setTransform(772.1,112);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgEB6IgDAAIgCgCIAAgCIAAjrIAAgCIACgCIADAAIAEgBIAEABIADAAIACACIABACIAADrIgBACIgCACIgDAAIgEABIgEgBg");
	this.shape_46.setTransform(751.1,111.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgZBQQgPgGgJgLQgKgKgFgQQgFgQAAgVQAAgSAFgRQAFgQAKgLQAKgLANgGQAOgFAPAAQASAAAMAFQANAGAIAKQAIAKAEAOQAEANAAAPIAAAEQAAAHgEAAQgDADgDAAIhqAAQAAAOADAMQACAMAHAJQAHAIAKAEQALAFAOAAQALAAAJgBIAPgFIAKgEIAGgDIACACIACABIABADIAAAEIAAADIgBACIgBABIgBACIgGAEIgMAEIgRAEQgJACgMAAQgQgBgOgFgAgSg+QgJAEgGAIQgGAHgEAKQgDAJAAALIBeAAQABgZgMgPQgNgOgXABQgKgBgJAFg");
	this.shape_47.setTransform(738.2,115.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgdBTQgKgEgHgGQgHgGgDgJQgEgIAAgLQAAgOAFgJQAGgKAKgGQAKgFAOgDQAOgDAPAAIAaAAIAAgOQAAgKgCgIQgDgIgEgFQgFgFgIgDQgHgDgLABQgJgBgIADIgPAGIgKAFQgEADgCAAIgCAAIgCgCIAAgCIgBgEIABgGQAAgCADgCQACgDAFgDIANgFIAQgEIAPgBQAQAAALADQAMAFAHAGQAHAIADALQADALAAANIAABqIgCADIgCABIgGABIgFgBIgDgBIgBgDIAAgSQgLAMgNAGQgNAGgMABQgMAAgKgDgAgKAGQgJADgGAEQgHAFgDAFQgDAGAAAJQAAANAJAIQAJAJAPAAQALgBALgGQALgHAMgNIAAglIgdAAQgLAAgKACg");
	this.shape_48.setTransform(712.2,115.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAWBqQgMAAgHgDQgHgDgFgHQgGgGgBgKQgDgKAAgNIAAhhIgYAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQgBgDAAgEIAAgEIABgDIACgCIACAAIAYAAIAAgnIAAgCIACgBIAEgBIAEgBIAFABIADABIABABIAAACIAAAnIArAAIADAAIACACIAAADIABAEQAAAEgBADQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgrAAIAABeQAAASAFAJQAFAKAOAAIAHgBIAHgCIAEgCIAEgBIABABIABABIABADIAAADIgBAGQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgFACIgFACIgHACIgIAAg");
	this.shape_49.setTransform(698,113);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgTBVIgOgEIgKgEIgGgFQgCgBgBgDIAAgHIAAgEIAAgDIACgCIACgBQACABADACIAKAFQAGADAHADQAIACAKAAQAGAAAGgBQAHgCAFgEQAFgEADgFQADgFAAgIQAAgHgEgGQgEgEgFgEQgGgEgHgCIgNgGIgPgGQgIgEgFgFQgGgFgEgHQgDgHAAgLQAAgIADgIQAEgIAGgHQAHgGAKgEQAKgDAMAAIAMABIALACIAIAEIAGADIACACIABACIAAADIAAADIAAAEIgBADIgBACIgCAAIgEgBIgIgFIgLgEQgFgCgJAAQgGAAgGACQgHACgDAEQgFADgCAEQgBAGAAAFQAAAIADAFQADAFAGAEQAGAEAIADIAMAGIAPAGQAIACAGAFQAGAGADAHQADAHAAAJQAAAMgEAJQgEAJgIAGQgIAHgLADQgLADgLABIgPgBg");
	this.shape_50.setTransform(685.4,115.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgdBTQgKgEgHgGQgHgGgDgJQgEgIAAgLQAAgOAFgJQAGgKAKgGQAKgFAOgDQAOgDAPAAIAaAAIAAgOQAAgKgCgIQgDgIgEgFQgFgFgIgDQgHgDgLABQgJgBgIADIgPAGIgKAFQgEADgCAAIgCAAIgCgCIAAgCIgBgEIABgGQAAgCADgCQACgDAFgDIANgFIAQgEIAPgBQAQAAALADQAMAFAHAGQAHAIADALQADALAAANIAABqIgCADIgCABIgGABIgFgBIgDgBIgBgDIAAgSQgLAMgNAGQgNAGgMABQgMAAgKgDgAgKAGQgJADgGAEQgHAFgDAFQgDAGAAAJQAAANAJAIQAJAJAPAAQALgBALgGQALgHAMgNIAAglIgdAAQgLAAgKACg");
	this.shape_51.setTransform(669.5,115.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAwB6IgDAAIgBgCIgBgCIAAheQAAgPgDgJQgCgIgEgGQgFgHgHgEQgHgDgKAAQgKAAgLAJQgNAIgNAPIAAByIgBACIgBACIgEAAIgFABIgFgBIgDAAIgBgCIgBgCIAAjrIABgCIABgCIADAAIAFgBIAFABIAEAAIABACIABACIAABkQANgPANgGQANgIALABQAPAAALAEQALAGAGAJQAHAJADAMQADAKAAAQIAABhIAAACIgCACIgEAAIgEABIgGgBg");
	this.shape_52.setTransform(652.2,111.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgeBxQgNgEgKgHQgKgHgFgKQgFgLAAgNQAAgLAEgJQAEgKAHgHQAHgIAKgHIAXgKIgUgMQgJgHgFgHQgHgHgCgIQgEgJAAgJQAAgLAFgKQADgKAJgHQAIgIANgFQANgEAQAAQAPAAANAEQALAEAIAHQAJAHADAJQAFAKAAAKQgBAJgDAJQgDAIgGAIQgGAIgIAGIgUANIAXALQALAGAHAIQAHAHADAJQAEAIAAAKQAAAPgFALQgGALgJAIQgKAHgOAEQgOAEgQAAQgQAAgOgDgAgWARQgKAGgHAHQgFAGgEAHQgCAHAAAJQgBASANALQAOAKAYAAQAaAAANgKQAMgLAAgSQABgJgEgHQgDgHgHgGQgGgGgLgGIgWgNIgVAMgAgfhYQgLAKAAARQAAAHADAHQACAGAGAGQAFAGAJAGIASALQAUgKALgMQALgNAAgPQAAgIgDgGQgCgHgHgFQgFgEgIgDQgIgCgKAAQgUAAgLAJg");
	this.shape_53.setTransform(625.6,112);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgZBwQgKgDgIgGQgIgHgFgJQgGgJgDgMQgDgNgCgOQgBgPAAgRQAAgNABgPQACgPAEgOQAFgOAHgLQAHgNAKgIQAKgJAOgFQAMgFATAAIANABIAMACIAJACIAFADIACACIABACIAAACIABADIAAAEIgBACIgBACIgDABIgFgCIgIgCIgMgDIgQgBQgRAAgLAHQgNAHgIANQgJANgEAQQgEAQAAASIALgFIANgGIAPgDQAIgCAHABQAUAAAMAEQANAGAIAJQAIAHADALQADAMAAANQAAAPgEANQgEANgJALQgKAKgOAIQgOAGgSAAQgOAAgKgEgAgKgDIgOADIgOAEIgLAGQAAAZAEAQQADARAGAKQAGALAKAFQAJADALAAQANABAJgFQAKgGAGgHQAGgIADgKQADgKAAgKQAAgKgDgKQgCgJgFgGQgGgHgJgBQgJgEgNAAQgGAAgHACg");
	this.shape_54.setTransform(607.6,112);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgkBzIgMgCIgJgDIgGgDIgCgDIgBgGIAAgFIABgCIABgBIACgBIAGACIAIADIANADIAQABQATAAALgHQANgIAJgMQAIgMAFgQQAEgQAAgSQgKAFgOAFQgNAEgRAAQgTAAgNgFQgNgFgIgJQgIgIgDgMQgDgMAAgNQAAgOAEgNQAEgOAJgKQAJgLAOgGQAOgGASAAQANAAALADQAKAEAIAHQAIAGAGAKQAFAKAEAMQADAMACAOQABAOAAAQQAAAOgBAPQgCAPgFAOQgEAOgHAMQgIAMgKAIQgLAJgOAFQgNAFgSAAIgPgBgAgWhcQgKAEgFAIQgGAIgDAKQgDAJAAAKQAAALADAJQACAKAGAGQAFAHAKACQAJAEANAAQANAAAOgFQAOgCAKgHQAAgZgDgRQgEgRgGgKQgHgLgKgFQgJgEgLAAQgNAAgJAFg");
	this.shape_55.setTransform(588.9,112);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgDB6IgEAAIgCgCIAAgCIAAjrIAAgCIACgCIAEAAIADgBIAEABIADAAIACACIABACIAADrIgBACIgCACIgDAAIgEABIgDgBg");
	this.shape_56.setTransform(568,111.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgZBQQgPgGgJgLQgKgKgFgQQgFgQAAgVQAAgSAFgRQAFgQAKgLQAKgLANgGQAOgFAPAAQASAAAMAFQANAGAIAKQAIAKAEAOQAEANAAAPIAAAEQAAAHgEAAQgDADgDAAIhqAAQAAAOADAMQACAMAHAJQAHAIAKAEQALAFAOAAQALAAAJgBIAPgFIAKgEIAGgDIACACIACABIABADIAAAEIAAADIgBACIgBABIgBACIgGAEIgMAEIgRAEQgJACgMAAQgQgBgOgFgAgSg+QgJAEgGAIQgGAHgEAKQgDAJAAALIBeAAQABgZgMgPQgNgOgXABQgKgBgJAFg");
	this.shape_57.setTransform(555,115.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgZBQQgPgGgJgLQgKgKgFgQQgFgQAAgVQAAgSAFgRQAFgQAKgLQAKgLANgGQAOgFAPAAQASAAAMAFQANAGAIAKQAIAKAEAOQAEANAAAPIAAAEQAAAHgEAAQgDADgDAAIhqAAQAAAOADAMQACAMAHAJQAHAIAKAEQALAFAOAAQALAAAJgBIAPgFIAKgEIAGgDIACACIACABIABADIAAAEIAAADIgBACIgBABIgBACIgGAEIgMAEIgRAEQgJACgMAAQgQgBgOgFgAgSg+QgJAEgGAIQgGAHgEAKQgDAJAAALIBeAAQABgZgMgPQgNgOgXABQgKgBgJAFg");
	this.shape_58.setTransform(529.1,115.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AghB1QgNgIgHgLQgIgLgDgPQgEgQAAgRQAAgVAEgQQAFgOAIgLQAJgMANgGQAMgGARAAQANAAALAGQAMAGAMANIAAhgIABgCIABgBIADgBIAFAAIAGAAIADABIABABIABACIAADrIAAACIgCABIgDABIgEAAIgFAAIgDgBIgCgBIAAgCIAAgYQgNAOgOAJQgNAHgOAAQgRAAgMgGgAgWgXQgIAFgGAKQgFAIgDALQgCANAAAMQAAANACANQACAMAFAJQAFAKAJAHQAIAFANAAQAEAAAGgCQAGgCAGgDQAHgFAHgGIAOgQIAAhFQgNgOgMgJQgNgIgLAAQgMAAgJAGg");
	this.shape_59.setTransform(510.3,111.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgUBVIgMgEIgKgEIgHgFQgCgBAAgDIgCgHIABgEIABgDIABgCIACgBQACABAEACIAJAFQAFADAIADQAHACALAAQAGAAAHgBQAGgCAFgEQAFgEADgFQADgFgBgIQAAgHgDgGQgDgEgGgEQgGgEgHgCIgNgGIgPgGQgIgEgFgFQgGgFgEgHQgDgHAAgLQAAgIADgIQAEgIAGgHQAGgGALgEQAKgDAMAAIAMABIALACIAIAEIAFADIADACIABACIABADIAAADIAAAEIgCADIgBACIgCAAIgEgBIgHgFIgLgEQgHgCgIAAQgGAAgHACQgFACgFAEQgDADgCAEQgDAGAAAFQAAAIAEAFQADAFAGAEQAGAEAHADIAOAGIAPAGQAHACAGAFQAFAGAEAHQADAHAAAJQABAMgFAJQgEAJgIAGQgIAHgKADQgLADgLABIgRgBg");
	this.shape_60.setTransform(494.5,115.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgZBQQgPgGgJgLQgKgKgFgQQgFgQAAgVQAAgSAFgRQAFgQAKgLQAKgLANgGQAOgFAPAAQASAAAMAFQANAGAIAKQAIAKAEAOQAEANAAAPIAAAEQAAAHgEAAQgDADgDAAIhqAAQAAAOADAMQACAMAHAJQAHAIAKAEQALAFAOAAQALAAAJgBIAPgFIAKgEIAGgDIACACIACABIABADIAAAEIAAADIgBACIgBABIgBACIgGAEIgMAEIgRAEQgJACgMAAQgQgBgOgFgAgSg+QgJAEgGAIQgGAHgEAKQgDAJAAALIBeAAQABgZgMgPQgNgOgXABQgKgBgJAFg");
	this.shape_61.setTransform(478.7,115.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AghB1QgNgIgHgLQgIgLgDgPQgEgQAAgRQAAgVAEgQQAFgOAIgLQAJgMANgGQAMgGARAAQANAAALAGQAMAGAMANIAAhgIABgCIABgBIADgBIAFAAIAGAAIADABIABABIABACIAADrIAAACIgCABIgDABIgEAAIgFAAIgDgBIgCgBIAAgCIAAgYQgNAOgOAJQgNAHgOAAQgRAAgMgGgAgWgXQgIAFgGAKQgFAIgDALQgCANAAAMQAAANACANQACAMAFAJQAFAKAJAHQAIAFANAAQAEAAAGgCQAGgCAGgDQAHgFAHgGIAOgQIAAhFQgNgOgMgJQgNgIgLAAQgMAAgJAGg");
	this.shape_62.setTransform(459.9,111.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgTBVIgOgEIgKgEIgGgFQgCgBgBgDIAAgHIAAgEIAAgDIACgCIACgBQACABADACIAKAFQAFADAIADQAIACAJAAQAHAAAGgBQAHgCAFgEQAFgEADgFQADgFAAgIQAAgHgEgGQgEgEgFgEQgGgEgHgCIgNgGIgPgGQgIgEgFgFQgGgFgDgHQgEgHAAgLQAAgIADgIQAEgIAGgHQAHgGAKgEQAKgDAMAAIAMABIALACIAIAEIAGADIACACIABACIAAADIAAADIAAAEIAAADIgCACIgCAAIgEgBIgIgFIgKgEQgGgCgJAAQgGAAgGACQgHACgDAEQgFADgBAEQgCAGAAAFQgBAIAEAFQADAFAGAEQAGAEAIADIAMAGIAPAGQAIACAFAFQAHAGADAHQADAHABAJQgBAMgEAJQgEAJgIAGQgHAHgLADQgMADgLABIgPgBg");
	this.shape_63.setTransform(436,115.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgZBQQgPgGgJgLQgKgKgFgQQgFgQAAgVQAAgSAFgRQAFgQAKgLQAKgLANgGQAOgFAPAAQASAAAMAFQANAGAIAKQAIAKAEAOQAEANAAAPIAAAEQAAAHgEAAQgDADgDAAIhqAAQAAAOADAMQACAMAHAJQAHAIAKAEQALAFAOAAQALAAAJgBIAPgFIAKgEIAGgDIACACIACABIABADIAAAEIAAADIgBACIgBABIgBACIgGAEIgMAEIgRAEQgJACgMAAQgQgBgOgFgAgSg+QgJAEgGAIQgGAHgEAKQgDAJAAALIBeAAQABgZgMgPQgNgOgXABQgKgBgJAFg");
	this.shape_64.setTransform(420.1,115.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AglBUIgDAAIgCgCIgBgCIAAidIABgCIACgCIACAAIAGAAIAEAAIADAAIACACIAAACIAAAZQAHgKAGgGQAFgGAFgEQAEgDAFgBIALgBIAFAAIAHABIAGABIADACIABABIABACIAAADIAAAEIAAAFIAAACIgBACIgCABIgEgBIgEgCIgHgBIgHgBQgFAAgFACQgEACgEAFQgEAEgGAHIgLASIAABqIgBACIgCACIgDAAIgFABIgFgBg");
	this.shape_65.setTransform(406.2,115);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAWBqQgMAAgIgDQgGgDgFgHQgFgGgCgKQgDgKAAgNIAAhhIgYAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQgBgDAAgEIAAgEIABgDIACgCIACAAIAYAAIAAgnIABgCIABgBIADgBIAFgBIAFABIAEABIAAABIAAACIAAAnIAsAAIACAAIABACIABADIABAEQAAAEgCADQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgsAAIAABeQAAASAFAJQAFAKAOAAIAHgBIAGgCIAFgCIAEgBIABABIABABIABADIAAADIgBAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAIgEACIgGACIgIACIgHAAg");
	this.shape_66.setTransform(392.7,113);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAxBUIgEAAIgCgCIAAgCIAAhcQAAgPgCgJQgCgKgFgGQgEgHgIgEQgHgDgJAAQgKAAgNAJQgMAIgNARIAABwIgBACIgCACIgCAAIgGABIgEgBIgEAAIgCgCIAAgCIAAidIAAgCIACgCIADAAIAFAAIAFAAIADAAIABACIAAACIAAAWQAOgPANgGQAOgIALABQAQAAAKAEQALAGAHAJQAGAJADAMQADAMAAAQIAABfIgBACIgBACIgDAAIgGABIgEgBg");
	this.shape_67.setTransform(369.6,115);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgZBQQgPgGgJgLQgKgKgFgQQgFgQAAgVQAAgSAFgRQAFgQAKgLQAKgLANgGQAOgFAPAAQASAAAMAFQANAGAIAKQAIAKAEAOQAEANAAAPIAAAEQAAAHgEAAQgDADgDAAIhqAAQAAAOADAMQACAMAHAJQAHAIAKAEQALAFAOAAQALAAAJgBIAPgFIAKgEIAGgDIACACIACABIABADIAAAEIAAADIgBACIgBABIgBACIgGAEIgMAEIgRAEQgJACgMAAQgQgBgOgFgAgSg+QgJAEgGAIQgGAHgEAKQgDAJAAALIBeAAQABgZgMgPQgNgOgXABQgKgBgJAFg");
	this.shape_68.setTransform(351.2,115.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgUBVIgMgEIgKgEIgHgFQgCgBAAgDIgBgHIAAgEIABgDIABgCIACgBQACABAEACIAJAFQAGADAHADQAHACAKAAQAHAAAHgBQAGgCAFgEQAFgEADgFQADgFgBgIQABgHgEgGQgDgEgGgEQgGgEgHgCIgNgGIgPgGQgHgEgGgFQgGgFgDgHQgEgHAAgLQAAgIADgIQAEgIAGgHQAHgGAKgEQAKgDAMAAIAMABIALACIAIAEIAFADIADACIABACIABADIAAADIAAAEIgBADIgCACIgCAAIgEgBIgHgFIgLgEQgHgCgIAAQgGAAgHACQgFACgFAEQgDADgCAEQgCAGgBAFQAAAIAEAFQAEAFAFAEQAGAEAHADIANAGIAQAGQAHACAFAFQAGAGAEAHQAEAHAAAJQAAAMgFAJQgEAJgIAGQgIAHgKADQgLADgMABIgQgBg");
	this.shape_69.setTransform(327.2,115.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgZBQQgPgGgJgLQgKgKgFgQQgFgQAAgVQAAgSAFgRQAFgQAKgLQAKgLANgGQAOgFAPAAQASAAAMAFQANAGAIAKQAIAKAEAOQAEANAAAPIAAAEQAAAHgEAAQgDADgDAAIhqAAQAAAOADAMQACAMAHAJQAHAIAKAEQALAFAOAAQALAAAJgBIAPgFIAKgEIAGgDIACACIACABIABADIAAAEIAAADIgBACIgBABIgBACIgGAEIgMAEIgRAEQgJACgMAAQgQgBgOgFgAgSg+QgJAEgGAIQgGAHgEAKQgDAJAAALIBeAAQABgZgMgPQgNgOgXABQgKgBgJAFg");
	this.shape_70.setTransform(311.4,115.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AglBUIgEAAIgBgCIgBgCIAAidIABgCIABgCIAEAAIAEAAIAGAAIACAAIACACIAAACIAAAZQAHgKAGgGQAGgGAEgEQAEgDAFgBIAKgBIAGAAIAHABIAFABIAEACIACABIAAACIABADIAAAEIAAAFIgBACIgBACIgCABIgEgBIgEgCIgGgBIgIgBQgFAAgEACQgFACgEAFQgEAEgFAHIgNASIAABqIgBACIgBACIgDAAIgGABIgEgBg");
	this.shape_71.setTransform(297.5,115);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAWBqQgMAAgHgDQgHgDgFgHQgFgGgDgKQgCgKAAgNIAAhhIgYAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQgBgDAAgEIAAgEIABgDIACgCIACAAIAYAAIAAgnIAAgCIACgBIAEgBIAEgBIAGABIACABIABABIAAACIAAAnIArAAIADAAIACACIABADIAAAEQAAAEgBADQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgrAAIAABeQAAASAFAJQAFAKAOAAIAIgBIAGgCIAEgCIAEgBIABABIABABIABADIAAADIAAAGQgBABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIgFACIgFACIgHACIgIAAg");
	this.shape_72.setTransform(283.9,113);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgZBQQgPgGgJgLQgKgKgFgQQgFgQAAgVQAAgSAFgRQAFgQAKgLQAKgLANgGQAOgFAPAAQASAAAMAFQANAGAIAKQAIAKAEAOQAEANAAAPIAAAEQAAAHgEAAQgDADgDAAIhqAAQAAAOADAMQACAMAHAJQAHAIAKAEQALAFAOAAQALAAAJgBIAPgFIAKgEIAGgDIACACIACABIABADIAAAEIAAADIgBACIgBABIgBACIgGAEIgMAEIgRAEQgJACgMAAQgQgBgOgFgAgSg+QgJAEgGAIQgGAHgEAKQgDAJAAALIBeAAQABgZgMgPQgNgOgXABQgKgBgJAFg");
	this.shape_73.setTransform(261.2,115.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AghB1QgNgIgHgLQgIgLgDgPQgEgQAAgRQAAgVAEgQQAFgOAIgLQAJgMANgGQAMgGARAAQANAAALAGQAMAGAMANIAAhgIABgCIABgBIADgBIAFAAIAGAAIADABIABABIABACIAADrIAAACIgCABIgDABIgEAAIgFAAIgDgBIgCgBIAAgCIAAgYQgNAOgOAJQgNAHgOAAQgRAAgMgGgAgWgXQgIAFgGAKQgFAIgDALQgCANAAAMQAAANACANQACAMAFAJQAFAKAJAHQAIAFANAAQAEAAAGgCQAGgCAGgDQAHgFAHgGIAOgQIAAhFQgNgOgMgJQgNgIgLAAQgMAAgJAGg");
	this.shape_74.setTransform(242.4,111.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AggBPQgPgFgJgLQgJgMgFgPQgFgQAAgTQAAgRAFgQQAFgQAKgMQAKgMAOgGQAPgGARAAQATgBAOAGQAOAGAJALQAJALAFAPQAFAQAAAUQAAARgFAQQgFAQgKALQgJAMgPAHQgPAGgRABQgTAAgNgHgAgXg9QgKAFgHAJQgGAJgDAMQgEANAAANQAAANADAMQADANAGAJQAGAJAKAFQALAGAOAAQAOAAAKgFQAKgGAHgIQAGgKAEgMQADgMAAgOQAAgMgDgMQgDgNgGgJQgGgJgKgGQgLgFgPAAQgMgBgLAGg");
	this.shape_75.setTransform(216.1,115.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AghB1QgNgIgHgLQgIgLgDgPQgEgQAAgRQAAgVAEgQQAFgOAIgLQAJgMANgGQAMgGARAAQANAAALAGQAMAGAMANIAAhgIABgCIABgBIADgBIAFAAIAGAAIADABIABABIABACIAADrIAAACIgCABIgDABIgEAAIgFAAIgDgBIgCgBIAAgCIAAgYQgNAOgOAJQgNAHgOAAQgRAAgMgGgAgWgXQgIAFgGAKQgFAIgDALQgCANAAAMQAAANACANQACAMAFAJQAFAKAJAHQAIAFANAAQAEAAAGgCQAGgCAGgDQAHgFAHgGIAOgQIAAhFQgNgOgMgJQgNgIgLAAQgMAAgJAGg");
	this.shape_76.setTransform(196.8,111.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAwBUIgDAAIgCgCIAAgCIAAhcQAAgPgDgJQgCgKgEgGQgEgHgIgEQgHgDgKAAQgKAAgLAJQgNAIgNARIAABwIgBACIgCACIgDAAIgFABIgEgBIgEAAIgCgCIAAgCIAAidIAAgCIACgCIADAAIAFAAIAFAAIADAAIACACIAAACIAAAWQAOgPANgGQANgIALABQAPAAALAEQALAGAGAJQAHAJADAMQADAMAAAQIAABfIAAACIgCACIgEAAIgEABIgGgBg");
	this.shape_77.setTransform(178.7,115);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgdBTQgKgEgHgGQgHgGgDgJQgEgIAAgLQAAgOAFgJQAGgKAKgGQAKgFAOgDQAOgDAPAAIAaAAIAAgOQAAgKgCgIQgDgIgEgFQgFgFgIgDQgHgDgLABQgJgBgIADIgPAGIgKAFQgEADgCAAIgCAAIgCgCIAAgCIgBgEIABgGQAAgCADgCQACgDAFgDIANgFIAQgEIAPgBQAQAAALADQAMAFAHAGQAHAIADALQADALAAANIAABqIgCADIgCABIgGABIgFgBIgDgBIgBgDIAAgSQgLAMgNAGQgNAGgMABQgMAAgKgDgAgKAGQgJADgGAEQgHAFgDAFQgDAGAAAJQAAANAJAIQAJAJAPAAQALgBALgGQALgHAMgNIAAglIgdAAQgLAAgKACg");
	this.shape_78.setTransform(160.3,115.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAWBqQgLAAgJgDQgGgDgFgHQgFgGgCgKQgDgKAAgNIAAhhIgYAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQgCgDAAgEIAAgEIACgDIABgCIACAAIAYAAIAAgnIABgCIABgBIADgBIAFgBIAFABIAEABIAAABIAAACIAAAnIAsAAIACAAIABACIABADIABAEQAAAEgCADQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgsAAIAABeQAAASAFAJQAFAKAOAAIAHgBIAGgCIAFgCIAEgBIABABIABABIABADIAAADIgBAGQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgDACIgHACIgHACIgHAAg");
	this.shape_79.setTransform(146.2,113);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAwBUIgDAAIgBgCIgBgCIAAhcQAAgPgDgJQgCgKgEgGQgFgHgHgEQgHgDgKAAQgJAAgMAJQgNAIgNARIAABwIgBACIgBACIgEAAIgFABIgFgBIgDAAIgBgCIgBgCIAAidIABgCIABgCIADAAIAFAAIAFAAIADAAIACACIAAACIAAAWQAOgPANgGQANgIALABQAPAAALAEQALAGAHAJQAGAJADAMQADAMAAAQIAABfIAAACIgCACIgEAAIgEABIgGgBg");
	this.shape_80.setTransform(131.2,115);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AggBPQgPgFgJgLQgJgMgFgPQgFgQAAgTQAAgRAFgQQAFgQAKgMQAKgMAOgGQAPgGARAAQATgBAOAGQAOAGAJALQAJALAFAPQAFAQAAAUQAAARgFAQQgFAQgKALQgJAMgPAHQgPAGgRABQgTAAgNgHgAgXg9QgKAFgHAJQgGAJgDAMQgEANAAANQAAANADAMQADANAGAJQAGAJAKAFQALAGAOAAQAOAAAKgFQAKgGAHgIQAGgKAEgMQADgMAAgOQAAgMgDgMQgDgNgGgJQgGgJgKgGQgLgFgPAAQgMgBgLAGg");
	this.shape_81.setTransform(112.4,115.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgVBQQgMgGgJgLQgJgKgFgQQgEgPAAgVQAAgWAGgQQAFgRAKgKQAJgKAOgGQANgEAMAAQAIgBAHACIANAEIALAFIAHAGIADADIABACIABAEIAAAEIgBAHQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgEgDIgJgHQgGgEgHgDQgJgEgKABQgVgBgMATQgNARAAAfQAAARADANQADAMAHAJQAGAIAJAEQAJAEAJAAQALAAAIgEIAOgHIAKgHQAEgEABAAIACABIACACIABADIAAAFIAAADIgBADIgBADIgDADIgHAGQgGADgGACIgPAFIgPACQgPgBgNgFg");
	this.shape_82.setTransform(95.7,115.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgTBVIgOgEIgKgEIgGgFQgCgBgBgDIgBgHIABgEIAAgDIACgCIACgBQACABADACIAKAFQAFADAIADQAIACAKAAQAGAAAGgBQAHgCAFgEQAFgEADgFQACgFABgIQgBgHgDgGQgEgEgFgEQgGgEgHgCIgNgGIgPgGQgHgEgGgFQgGgFgEgHQgDgHAAgLQAAgIADgIQADgIAHgHQAGgGALgEQAKgDAMAAIAMABIALACIAIAEIAGADIACACIABACIAAADIAAADIAAAEIgBADIgBACIgCAAIgEgBIgHgFIgMgEQgFgCgJAAQgGAAgHACQgFACgFAEQgEADgCAEQgCAGAAAFQABAIADAFQAEAFAFAEQAGAEAHADIAOAGIAOAGQAHACAHAFQAFAGAEAHQAEAHgBAJQABAMgFAJQgEAJgIAGQgIAHgLADQgKADgLABIgQgBg");
	this.shape_83.setTransform(80.8,115.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgZBQQgPgGgJgLQgKgKgFgQQgFgQAAgVQAAgSAFgRQAFgQAKgLQAKgLANgGQAOgFAPAAQASAAAMAFQANAGAIAKQAIAKAEAOQAEANAAAPIAAAEQAAAHgEAAQgDADgDAAIhqAAQAAAOADAMQACAMAHAJQAHAIAKAEQALAFAOAAQALAAAJgBIAPgFIAKgEIAGgDIACACIACABIABADIAAAEIAAADIgBACIgBABIgBACIgGAEIgMAEIgRAEQgJACgMAAQgQgBgOgFgAgSg+QgJAEgGAIQgGAHgEAKQgDAJAAALIBeAAQABgZgMgPQgNgOgXABQgKgBgJAFg");
	this.shape_84.setTransform(64.9,115.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AhIBxQgDAAgEgCQgDgCAAgHIAAjLQAAgGADgDQAEgCADAAIAwAAQAbAAAUAIQAUAIANAOQANAPAHAUQAHAUAAAZQAAAbgHAWQgHAWgOAOQgOAPgVAIQgUAHgbAAgAg9BeIAkAAQAXAAAOgGQAQgFALgMQAKgMAGgSQAFgTAAgXQAAgUgFgRQgFgRgKgMQgLgMgQgHQgOgHgZAAIgjAAg");
	this.shape_85.setTransform(45.9,112);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#B8B30E").s().p("AgyCpQgYgNgOgYQgOgYgGgcQgGgdAAggQAAgTAEgZQAEgbAIgaQAIgbANgYQANgWAUgQQATgOAZgCQAOACAOADQAPACANAIQANAGALANQAPARAIAZQAIAYADAbQACAbgBAbQgBAZgEAVQgDAWgHAYQgHAYgLAVQgMAVgSAOQgTANgbAAQggAAgYgOgAgCiDQgUAFgLAQQgLAQgGAWQgFAVgCAWQgBAXAAARQAAAMADAUQADATAHAUQAGATAMANQALANAQABQAMgBAKgGQAJgHAHgLQAGgKAEgNIAEgTIAEgpQADgWgBgbQAAgagEgXQgFgYgLgOQgLgPgTgBIgGAAIgEABg");
	this.shape_86.setTransform(720.1,50.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B8B30E").s().p("AgyCpQgYgNgOgYQgOgYgGgcQgGgdAAggQAAgTAEgZQAEgbAIgaQAIgbANgYQANgWAUgQQATgOAZgCQAOACAOADQAPACANAIQANAGALANQAPARAIAZQAIAYADAbQACAbgBAbQgBAZgEAVQgDAWgHAYQgHAYgLAVQgMAVgSAOQgTANgbAAQggAAgYgOgAgCiDQgUAFgLAQQgLAQgGAWQgFAVgCAWQgBAXAAARQAAAMADAUQADATAHAUQAGATAMANQALANAQABQAMgBAKgGQAJgHAHgLQAGgKAEgNIAEgTIAEgpQADgWgBgbQAAgagEgXQgFgYgLgOQgLgPgTgBIgGAAIgEABg");
	this.shape_87.setTransform(694.2,50.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#B8B30E").s().p("AgyCpQgYgNgOgYQgOgYgGgcQgGgdAAggQAAgTAEgZQAEgbAIgaQAIgbANgYQANgWAUgQQATgOAZgCQAOACAOADQAPACANAIQANAGALANQAPARAIAZQAIAYADAbQACAbgBAbQgBAZgEAVQgDAWgHAYQgHAYgLAVQgMAVgSAOQgTANgbAAQggAAgYgOgAgCiDQgUAFgLAQQgLAQgGAWQgFAVgCAWQgBAXAAARQAAAMADAUQADATAHAUQAGATAMANQALANAQABQAMgBAKgGQAJgHAHgLQAGgKAEgNIAEgTIAEgpQADgWgBgbQAAgagEgXQgFgYgLgOQgLgPgTgBIgGAAIgEABg");
	this.shape_88.setTransform(668.3,50.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B8B30E").s().p("AAZCxIg1AAIg0gCIgCgxIABgBQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAIAZAAIAZgBIAGAAIAAgDIAAgdIAAg6IgCg1IgDg5IgYARIgFgJIgKgQIgFgKIAqghIABgCIABgBIAEgwIA8AHIAAACQgCAGgBASIgBAsIAAA5IAAA6IABA2IABAoIABAPIAxAEIgCAPIgEAnQgYgCgcgBg");
	this.shape_89.setTransform(645.7,51.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#B8B30E").s().p("AhPC+IgCgBIAAgCIAAgCIACgUIACgcIACgrIAEhBIAEhdQADhBAUgeQATgfAlABIAFAAIAFAAQATABALAIQAMAJAFAOQAHAOACAQQADAPABAPIAAACIAAAJIAAAWIAAAtIgBBLIgCB3IgDACIgTAAIgKAAIgMgCIgBgMIgCgjIgEhEIgEAAIgYAAIgeABIgBARIAAAWIABAjIACA0IgBACIgBABgAgKh3QgIALgDAbIgBAaIgBAWIAAAcIAAAHIAAALIABAHIAAACIAMAAIAkABIABgBIAAgCIAFhZIAAgIQAAgXgIgNQgHgOgKgCIgDAAQgGAAgIAKg");
	this.shape_90.setTransform(612.6,51.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#B8B30E").s().p("AgRCyIgEgBQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgBhJgEhJIgEiPQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgFAAIgPABQgHACgHAAIgEgBIgCgDIAAg5ICVAAIAAA/Ig0AAIgBACIAAAdIAGB9QADA/AAA/IgBAGQgBADgDABg");
	this.shape_91.setTransform(594.1,51.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B8B30E").s().p("AgxCiQgRgNgJgYIgBgCIgEgNQgCgHAAgHQAAgGAHgEQAHgCAGgBIAGgBIAKgBIAJgBIACAAIACAAIABACIAEARQADAKAFAIQAGAHAKABQAHAAAJgFQAJgFAGgIQAGgIAAgKQAAgZgMgTQgMgTgQgPIgjgbQgRgOgMgSQgMgRgBgYQABgVAKgUQAKgTATgNQASgMAZgBIAEABIAFACQANADAJAEQAIAEAHAHQAGAHAGANIADAJIABAHIgeAiIgBAAIgCABQgEgBgEgGIgJgOQgFgJgGgGQgFgGgKgBQgKAAgEAGQgEAGAAAKQAAASALAPQAMAPAPANQARAOARAQQASAOAMAVQANAVADAeQABAagLAXQgMAYgVAPQgVAOgaABQgcAAgQgOg");
	this.shape_92.setTransform(575.2,50.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#B8B30E").s().p("AhQC+IgBgBIAAgCIAAgCIABgUIADgcIACgrIADhBIAFhdQADhBATgeQAUgfAlABIAFAAIAFAAQASABAMAIQAMAJAFAOQAHAOACAQQADAPABAPIAAACIAAAJIAAAWIAAAtIgBBLIgCB3IgDACIgSAAIgLAAIgNgCIAAgMIgCgjIgEhEIgEAAIgYAAIgeABIAAARIAAAWIAAAjIACA0IgBACIgBABgAgKh3QgIALgDAbIgBAaIgBAWIAAAcIAAAHIAAALIABAHIAAACIAMAAIAjABIABgBIABgCIAFhZIAAgIQAAgXgIgNQgHgOgKgCIgDAAQgGAAgIAKg");
	this.shape_93.setTransform(555.7,51.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#B8B30E").s().p("AhuC9IgCAAQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIAAgDIAChHIADhPIAFhbIAFh0IACgKQACgGAGAAIAwABIACABIAAADIgBAEIgBAFQgDAygEAtQgEAugBAuIAAADQAAAAAAAAQABABAAAAQAAAAAAAAQABABAAAAIBgAFIADAAIACgCQAHgtACgwIADheIABgFQACgDADAAIAXACIAZABIABADIAAANIgHFXIgZAAIgdgBIAAgEQAAgZACgZQACgZAAgZIAAgFIgBgGIh5ABQgCAdACAaIAEA3IAAAAIgBADQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgjABIgNAAg");
	this.shape_94.setTransform(533,50.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#B8B30E").s().p("AgxCiQgRgNgJgYIgBgCIgEgNQgCgHAAgHQAAgGAHgEQAHgCAGgBIAGgBIAKgBIAJgBIACAAIACAAIABACIAEARQADAKAFAIQAGAHAKABQAHAAAJgFQAJgFAGgIQAGgIAAgKQAAgZgMgTQgMgTgQgPIgjgbQgRgOgMgSQgMgRgBgYQABgVAKgUQAKgTATgNQASgMAZgBIAEABIAFACQANADAJAEQAIAEAHAHQAGAHAGANIADAJIABAHIgeAiIgBAAIgCABQgEgBgEgGIgJgOQgFgJgGgGQgFgGgKgBQgKAAgEAGQgEAGAAAKQAAASALAPQAMAPAPANQARAOARAQQASAOAMAVQANAVADAeQABAagLAXQgMAYgVAPQgVAOgaABQgcAAgQgOg");
	this.shape_95.setTransform(496.2,50.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#B8B30E").s().p("AgpCuQgTgMgOgUQgOgUgEgWQgFgjgBgkQgBghAFglQACgZAHgXQAGgYAMgVQAMgVAUgRQAKgIANgDQAMgDANAAQAbAAARAQQASAPAJAaQAKAbACAiQAEAhgCAkIgCAtQgCAZgGAYQgFAZgLAVQgLAUgSANQgRAMgaABQgVgBgUgMgAgKh+QgOAUgJAkQgJAkAAAuIAAAQQgBAXACATQABAUAGAPQAGAOAOAIQAMAGAIgEQAKgDAHgJQAIgKADgKIACgLIAFgjIAHhEIAAgIQgBg8gJgcQgJgcgOgCIgCAAQgMAAgLARg");
	this.shape_96.setTransform(475,51.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#B8B30E").s().p("AiDC1QgCgEAAgEIABgiIABg2IADhCQACghADgiQACgiAEgdQAEgdAFgTQAFgTAGgFIAFgBIAFAAQAVABANANQANAMAIAUQAHAUAEAWIAIAmIABAHIACAFIADgDIACgDIAQgjIATghIASgcQAKgOANgJQANgJASAAQAIAAAEAGQAFAHACAJIAEASIABAOQAEBIACBGQACBIAABHIAAAEQgCAEgHACQgHACgIAAIgRABIgLgCIgCgBIAAgGIgCgoIgBg2IgCg7IgCgzIgBgoIgiBLIgTAlIgJAPIgCACIgCACIgdgCQgMgRgIgTIgQgkIgEgJIgFgIIgDBrQgBA3ABA3IgBACIgBADQAAABgHAAIgRACIgRAAIgLABQgEgBgCgDg");
	this.shape_97.setTransform(448.8,51.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#B8B30E").s().p("AhQC+IgBgBIAAgCIAAgCIABgUIACgcIADgrIAEhBIAEhdQADhBAUgeQASgfAmABIAFAAIAGAAQARABAMAIQALAJAHAOQAGAOADAQQACAPAAAPIAAACIABAJIAAAWIAAAtIgBBLIgCB3IgDACIgTAAIgLAAIgLgCIgBgMIgCgjIgFhEIgCAAIgZAAIgdABIgCARIAAAWIACAjIACA0IgBACIgBABgAgJh3QgJALgCAbIgCAaIgBAWIgBAcIABAHIAAALIAAAHIABACIANAAIAjABIAAgBIABgCIAFhZIAAgIQAAgXgHgNQgIgOgKgCIgDAAQgGAAgHAKg");
	this.shape_98.setTransform(424.4,51.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#B8B30E").s().p("AgRCyIgEgBQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAgBgBQAAhJgDhJIgGiPQAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgFAAIgOABQgIACgIAAIgCgBIgCgDIAAg5ICTAAIAAA/IgzAAIgCACIAAAdIAHB9QADA/AAA/IgBAGQAAADgEABg");
	this.shape_99.setTransform(405.8,51.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#B8B30E").s().p("AhaCyIgBgHIgCgQIgCgTIgBgPIgRj1IgBgMIgBgUIgBgPIAAgEIABgCIABgBIApADIAPABIADAAQAFAAAJAQQAKAQAMAZIAYA4IAaA6IAXAxIACgWIABgpIABg1IACgzIADgnQADgPADAAIAQAAQALAAAUAEIABADIAAADIAAABIgCASIgBAbIgBAuIAABJIgBBwIAAAfIAAALIgBAMIAAAGIgCABIgTABQgKAAgLgCIiAj6IgBAAIAAABIAAAHIACAQIAEAkIAIBGIAMB3IAAAFQgCACgEAAIgQAAIggABg");
	this.shape_100.setTransform(383.8,50.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#B8B30E").s().p("AgpCuQgTgMgOgUQgOgUgEgWQgFgjgBgkQgBghAFglQACgZAHgXQAGgYAMgVQAMgVAUgRQAKgIANgDQAMgDANAAQAbAAARAQQASAPAJAaQAKAbACAiQAEAhgCAkIgCAtQgCAZgGAYQgFAZgLAVQgLAUgSANQgRAMgaABQgVgBgUgMgAgKh+QgOAUgJAkQgJAkAAAuIAAAQQgBAXACATQABAUAGAPQAGAOAOAIQAMAGAIgEQAKgDAHgJQAIgKADgKIACgLIAFgjIAHhEIAAgIQgBg8gJgcQgJgcgOgCIgCAAQgMAAgLARg");
	this.shape_101.setTransform(359.4,51.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#B8B30E").s().p("AgSCcQgcgTgPgfQgQgfgFglQgGgmAFgjQAFglAPgfQAOggAXgTQAYgSAdgCQAIAAAIACIAPAGIABABIABABIAAAtIgJAAQgXAAgPAQQgOAPgIAYQgJAYgBAbQgBAaAGAbQAFAaAMAVQANATAUAJQAMAFAMAAIAagBIAAAvIgCABIgDACQgJADgIACQgJABgKAAQgmgBgZgSg");
	this.shape_102.setTransform(338,50.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#B8B30E").s().p("AgxCiQgRgNgJgYIgBgCIgEgNQgCgHAAgHQAAgGAHgEQAHgCAGgBIAGgBIAKgBIAJgBIACAAIACAAIABACIAEARQADAKAFAIQAGAHAKABQAHAAAJgFQAJgFAGgIQAGgIAAgKQAAgZgMgTQgMgTgQgPIgjgbQgRgOgMgSQgMgRgBgYQABgVAKgUQAKgTATgNQASgMAZgBIAEABIAFACQANADAJAEQAIAEAHAHQAGAHAGANIADAJIABAHIgeAiIgBAAIgCABQgEgBgEgGIgJgOQgFgJgGgGQgFgGgKgBQgKAAgEAGQgEAGAAAKQAAASALAPQAMAPAPANQARAOARAQQASAOAMAVQANAVADAeQABAagLAXQgMAYgVAPQgVAOgaABQgcAAgQgOg");
	this.shape_103.setTransform(317.9,50.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#B8B30E").s().p("AgwC5QgEgBgCgEQgCgFAAgFIgBgHIgXlJIAAgJIBqgIIAFgBIAGABQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAIADAVQACAKAAALIAAAGQgCACgJABIgXACIgWACIgPACIAAAFIAAANIABAcIACAhQABARADALQACALADAAIA/gJIABAAIABgBIAKAvIhLAKIAAAGQAAASABASIADAjIABAHQABAEAEAAIALgBIAWgEIAXgDIAQgBQAEAAABACQABADAAADIADAMIACAOIABANIAAADQAAABAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgYACIgjAEQgUADgjACIgDABIgFAAIgDAAIgBABIgBAAg");
	this.shape_104.setTransform(298.5,51.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#B8B30E").s().p("AhcCzIAIlcIABgFQABgEACgBIAcgBQAcABAaAKQAcALAVASIABACIABABQAKAIAIAPQAHAOAFARQAFASACARQACAQAAAOQABAfgFAjQgEAhgNAdQgMAdgZATQgZATgmADIg9ABgAgahnIgDA3IgCA/IgBA/IgBAvQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIACABIACAAQAXgDALgLQANgLAHgRQAGgRACgTQADgTgBgSIAAgNQABgagEgYQgDgYgLgUQgKgUgTgQIgFgEIgGgCIgDAAIgCAgg");
	this.shape_105.setTransform(278.3,49.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#B8B30E").s().p("AgTC7QAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAgBIgCgVIgBglIgCgqIgBgmIgBgWIgBgLIgBgLIAAgEIgEgEIgIABIgIAAQgbAAgQgNQgRgNgGgWQgHgVAAgaIAAgMIAAgNIABgVIADgWQABgLACgEIAbgBQAOgBANAAIAEAAIACABIABABIABAKIAABCIAAAFIAAAFIAAAGQAAAJABAGQACAGAFACQAFADAMACIBWgJQAFgDABgFIAEgKIgCglIAAgnIA5ABIABAaIABAbIAAAFQAAAWgFAVQgEAUgMASQgGAHgKAFIgWAHIgTAFQgJADgBACIAAC2IgBAAIgzADIgDAAg");
	this.shape_106.setTransform(240,51.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#B8B30E").s().p("AgxCiQgRgNgJgYIgBgCIgEgNQgCgHAAgHQAAgGAHgEQAHgCAGgBIAGgBIAKgBIAJgBIACAAIACAAIABACIAEARQADAKAFAIQAGAHAKABQAHAAAJgFQAJgFAGgIQAGgIAAgKQAAgZgMgTQgMgTgQgPIgjgbQgRgOgMgSQgMgRgBgYQABgVAKgUQAKgTATgNQASgMAZgBIAEABIAFACQANADAJAEQAIAEAHAHQAGAHAGANIADAJIABAHIgeAiIgBAAIgCABQgEgBgEgGIgJgOQgFgJgGgGQgFgGgKgBQgKAAgEAGQgEAGAAAKQAAASALAPQAMAPAPANQARAOARAQQASAOAMAVQANAVADAeQABAagLAXQgMAYgVAPQgVAOgaABQgcAAgQgOg");
	this.shape_107.setTransform(202.4,50.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#B8B30E").s().p("AgpCuQgTgMgOgUQgOgUgEgWQgFgjgBgkQgBghAFglQACgZAHgXQAGgYAMgVQAMgVAUgRQAKgIANgDQAMgDANAAQAbAAARAQQASAPAJAaQAKAbACAiQAEAhgCAkIgCAtQgCAZgGAYQgFAZgLAVQgLAUgSANQgRAMgaABQgVgBgUgMgAgKh+QgOAUgJAkQgJAkAAAuIAAAQQgBAXACATQABAUAGAPQAGAOAOAIQAMAGAIgEQAKgDAHgJQAIgKADgKIACgLIAFgjIAHhEIAAgIQgBg8gJgcQgJgcgOgCIgCAAQgMAAgLARg");
	this.shape_108.setTransform(181.2,51.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#B8B30E").s().p("AiDC1QgCgEAAgEIABgiIABg2IADhCQACghADgiQACgiAEgdQAEgdAFgTQAFgTAGgFIAFgBIAFAAQAVABANANQANAMAIAUQAHAUAEAWIAIAmIABAHIACAFIADgDIACgDIAQgjIATghIASgcQAKgOANgJQANgJASAAQAIAAAEAGQAFAHACAJIAEASIABAOQAEBIACBGQACBIAABHIAAAEQgCAEgHACQgHACgIAAIgRABIgLgCIgCgBIAAgGIgCgoIgBg2IgCg7IgCgzIgBgoIgiBLIgTAlIgJAPIgCACIgCACIgdgCQgMgRgIgTIgQgkIgEgJIgFgIIgDBrQgBA3ABA3IgBACIgBADQAAABgHAAIgRACIgRAAIgLABQgEgBgCgDg");
	this.shape_109.setTransform(155,51.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#B8B30E").s().p("AhPC+IgCgBIAAgCIAAgCIACgUIACgcIACgrIADhBIAFhdQADhBATgeQAUgfAlABIAFAAIAFAAQASABAMAIQAMAJAFAOQAHAOACAQQADAPABAPIAAACIAAAJIAAAWIAAAtIgBBLIgCB3IgDACIgTAAIgKAAIgNgCIAAgMIgCgjIgEhEIgEAAIgYAAIgeABIgBARIAAAWIABAjIACA0IgBACIgBABgAgKh3QgIALgDAbIgBAaIgBAWIAAAcIAAAHIAAALIABAHIAAACIAMAAIAjABIACgBIAAgCIAFhZIAAgIQAAgXgIgNQgHgOgKgCIgDAAQgGAAgIAKg");
	this.shape_110.setTransform(130.6,51.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#B8B30E").s().p("AgRCyIgEgBQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBhJgEhJIgEiPQgBgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgFAAIgPABQgHACgHAAIgEgBIgCgDIAAg5ICVAAIAAA/Ig0AAIgBACIAAAdIAGB9QADA/AAA/IAAAGQgCADgDABg");
	this.shape_111.setTransform(112,51.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#B8B30E").s().p("AhaCyIgBgHIgCgQIgCgTIgBgPIgRj1IgBgMIgBgUIgBgPIAAgEIABgCIABgBIApADIAPABIADAAQAFAAAJAQQAKAQAMAZIAYA4IAaA6IAXAxIACgWIABgpIABg1IACgzIADgnQADgPADAAIAQAAQALAAAUAEIABADIAAADIAAABIgCASIgBAbIgBAuIAABJIgBBwIAAAfIAAALIgBAMIAAAGIgCABIgTABQgKAAgLgCIiAj6IgBAAIAAABIAAAHIACAQIAEAkIAIBGIAMB3IAAAFQgCACgEAAIgQAAIggABg");
	this.shape_112.setTransform(90,50.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#B8B30E").s().p("AgpCuQgTgMgOgUQgOgUgEgWQgFgjgBgkQgBghAFglQACgZAHgXQAGgYAMgVQAMgVAUgRQAKgIANgDQAMgDANAAQAbAAARAQQASAPAJAaQAKAbACAiQAEAhgCAkIgCAtQgCAZgGAYQgFAZgLAVQgLAUgSANQgRAMgaABQgVgBgUgMgAgKh+QgOAUgJAkQgJAkAAAuIAAAQQgBAXACATQABAUAGAPQAGAOAOAIQAMAGAIgEQAKgDAHgJQAIgKADgKIACgLIAFgjIAHhEIAAgIQgBg8gJgcQgJgcgOgCIgCAAQgMAAgLARg");
	this.shape_113.setTransform(65.6,51.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#B8B30E").s().p("AgSCcQgcgTgPgfQgQgfgFglQgGgmAFgjQAFglAPgfQAOggAXgTQAYgSAdgCQAIAAAIACIAPAGIABABIABABIAAAtIgJAAQgXAAgPAQQgOAPgIAYQgJAYgBAbQgBAaAGAbQAFAaAMAVQANATAUAJQAMAFAMAAIAagBIAAAvIgCABIgDACQgJADgIACQgJABgKAAQgmgBgZgSg");
	this.shape_114.setTransform(44.2,50.6);

	this.instance_1 = new lib.tierra();
	this.instance_1.setTransform(0.7,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(580.7,393.6,1193,824.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;