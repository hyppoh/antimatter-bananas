let initPlayer = {
	bananas: new Decimal(6),
	antimatter: new Decimal(0),
	seeds: new Decimal(0),
	growing: new Decimal(0),
	trees: new Decimal(0),
	money: new Decimal(0),
	space: new Decimal(1),
	treespace: new Decimal(1),
	bananaspace: new Decimal (1),
	lastTick: Date.now()
};
var player = initPlayer;
let time = 30;
let m = 3;