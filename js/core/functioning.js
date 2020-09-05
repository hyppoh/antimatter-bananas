function salvage() {
	if (player.bananas.lt(1)) return;
	player.bananas = player.bananas.sub(1);
	player.antimatter = player.antimatter.add(0.00001);
	player.seeds = player.seeds.add(Math.round(Math.random()*2));
}
function plant() {
	if (player.seeds.lt(1)) return;
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
	if (player.bananas.lte(144)) return;
	player.bananas = player.bananas.sub(12);
	player.money = player.money.add(Math.round(Math.random()*7)+2);
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
	if (player.money.lte(2000)) return;
	player.money = player.money.sub(2000);
	player.treespace = player.treespace.add(1);
}
setInterval(() => {
	if (player.growing.gte(1)) {
		var tosub = player.growing.pow(0.5).ceil().max(8).min(player.growing);
		player.growing = player.growing.sub(tosub);
		player.trees = player.trees.add(tosub);		
		player.bananas = Decimal.min(player.bananas.add(player.trees), player.bananaspace.mul(200));
		player.trees = player.trees.min(player.treespace.mul(30).sub(player.growing));
	}
}, m*1000);
