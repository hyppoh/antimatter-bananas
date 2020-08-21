var initPlayer = {
	bananas: new Decimal(6),
	antimatter: new Decimal(0),
	seeds: new Decimal(0),
	pendingseeds: new Decimal(0),
	trees: new Decimal(0),
	money: new Decimal(0),
	freespace: new Decimal(1),
	lastTick: performance.now()
};
var player = initPlayer;
var time = 30;
var m = 15;
var el = {
	bananaamt: document.getElementById("bananaamt"),
	amamt: document.getElementById("antimatteramt"),	
	seedamt: document.getElementById("seedamt"),
	treeamt: document.getElementById("treeamt"),
	pendingamt: document.getElementById("pendingamt")
};
