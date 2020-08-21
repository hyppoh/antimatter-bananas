function salvage() {
	if (player.bananas.lt(1)) return;
	player.bananas = player.bananas.sub(1);
	player.antimatter = player.antimatter.add(0.00001);
	player.seeds = player.seeds.add(Math.round(Math.random()*2));
}
function plant() {
	if (player.seeds.lt(1)) return;
	player.seeds = player.seeds.sub(1);
	player.growingseeds = player.growingseeds.add(1);
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
	if (player.bananas.gte(144)) return;
	player.bananas = player.bananas.sub(12)
	player.money = player.money.add(Math.round(Math.random()*7)+2)
}
setInterval(() => {
	if (player.growingseeds.gte(1)) {
		var tosub = player.growingseeds.pow(0.5).ceil().max(8).min(player.growingseeds);
		player.growingseeds = player.growingseeds.sub(tosub);
		player.trees = player.trees.add(tosub);
	}
}, m*1000);
