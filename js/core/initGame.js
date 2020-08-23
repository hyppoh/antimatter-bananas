let initPlayer = {
	bananas: new Decimal(6),
	antimatter: new Decimal(0),
	seeds: new Decimal(0),
	growing: new Decimal(0),
	trees: new Decimal(0),
	money: new Decimal(0),
	treespace: new Decimal(1),
	bananaspace: new Decimal (1),
	lastTick: Date.now()
};
player.bananas = Math.min(player.bananas, player.bananaspace * 200);
player.trees = Math.min(player.trees, player.treespace * 30 - player.growing);
var player = initPlayer;
let time = 30;
let m = 15;
var el = {
	bananasamt: document.getElementById("bananasamt"),
	amamt: document.getElementById("antimatteramt"),
	seedamt: document.getElementById("seedamt"),
	treeamt: document.getElementById("treeamt"),
	growingamt: document.getElementById("growingamt"),
	moneyamt: document.getElementById("moneyamt"),
	treespaceamt: document.getElementById("treespaceamt"),
	bananaspaceamt: document.getElementById("treespaceamt")
};
