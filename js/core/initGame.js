let initPlayer = {
	bananas: new Decimal(6),
	antimatter: new Decimal(0),
	seeds: new Decimal(0),
	growing: new Decimal(0),
	trees: new Decimal(0),
	money: new Decimal(0),
	freespace: new Decimal(1),
	lastTick: Date.now()
};
var player = initPlayer;
let time = 30;
let m = 15;
var el = {
	bananaamt: document.getElementById("bananaamt"),
	amamt: document.getElementById("antimatteramt"),
	seedamt: document.getElementById("seedamt"),
	treeamt: document.getElementById("treeamt"),
	growingamt: document.getElementById("growingamt"),
	moneyamt: document.getElementById("moneyamt"),
	freespaceamt: document.getElementById("freespaceamt")
};
