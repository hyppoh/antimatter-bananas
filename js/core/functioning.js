function salvage() {
	if (player.bananas.lt(1)) return;
	player.bananas = player.bananas.sub(1);
	player.seeds = player.seeds.add(Math.round(Math.random()*2));
}
function plant() {
	if (player.seeds.lt(1) || player.trees.add(player.growing.add(1)).gt(player.treespace.mul(30))) return;
	player.seeds = player.seeds.sub(1);
	player.growing = player.growing.add(1);
}
function destroy() {
	if (player.trees.lt(1)) return;
	player.trees = player.trees.sub(1);
	player.bananas = player.bananas.add(Math.round(Math.random()*5));
	player.seeds = player.seeds.add(Math.round(Math.random()*2))
}
function salvageDozen() {
	if (player.bananas.lt(12)) return;
	player.bananas = player.bananas.sub(12);
	player.antimatter = player.antimatter.add(0.00012);
	player.seeds = player.seeds.add((Math.round(Math.random()*12)+6));
}
function sellDozen() {
	if (player.bananas.lte(12)) return;
	player.bananas = player.bananas.sub(12);
	player.money = player.money.add(6);
}
function toSci(num, places, placesafter1000) {
	if (places == undefined) places = 0;
	if (placesafter1000 == undefined) placesafter1000 = 2;
	num = new Decimal(num);
	return (num.e < 3) ? (num.m*Math.pow(10, num.e)).toFixed(places) : `${num.m.toFixed(placesafter1000)}e${num.e}`
}
function toSci(num, places, placesafter1000) {
	if (places == undefined) places = 0;
	if (placesafter1000 == undefined) placesafter1000 = 2;
	num = new Decimal(num);
	return (num.e < 3) ? (num.m*Math.pow(10, num.e)).toFixed(places) : `${num.m.toFixed(placesafter1000)}e${num.e}`
}
function buyBananaSpace() {
	if (player.money.lte(100)) return;
	player.money = player.money.sub(100);
	player.bananaspace = player.bananaspace.add(1);
}
function buyTreeSpace() {
	if (player.money.lte(100)) return;
	player.money = player.money.sub(100);
	player.treespace = player.treespace.add(1);
}
setInterval(() => {
	var toSub = 0;
	if (player.growing.gt(0)) {
		var tosub = player.growing.ceil().pow(0.2).ceil().max(2).min(player.growing.max(0)).max(0).ceil().div(20);
	}
	player.growing = player.growing.sub(tosub).max(0);
	player.trees = player.trees.add(tosub);
	player.trees = player.trees.min(player.treespace.mul(30));
	player.bananas = player.bananas.add(player.trees.div(60)).min(player.bananaspace.mul(200));
}, 50);