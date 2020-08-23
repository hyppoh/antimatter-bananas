function toSci(num, places, placesafter1000) {
	if (places == undefined) places = 0;
	if (placesafter1000 == undefined) placesafter1000 = 2;
	num = new Decimal(num);
	return (num.e < 3) ? (num.m*Math.pow(10, num.e)).toFixed(places) : `${num.m.toFixed(placesafter1000)}e${num.e}`
}
function updateUI() {
	el.bananasamt.innerText = `you have ${toSci(player.bananas)} bananas`;
	el.seedamt.innerText = `you have ${toSci(player.seeds.floor())} banana seeds`;
	el.growingamt.innerText = `you have ${toSci(player.growing)} seeds waiting to grow into trees`;
	el.amamt.innerText = `you have ${toSci(player.antimatter, 5)} antimatter`;
	el.treeamt.innerText = `you have ${toSci(player.trees)} banana trees to produce bananas for you`;
	el.moneyamt.innerText = `you have ${toSci(player.money)} money to spend`;
	el.treespaceamt.innerText = `you have ${toSci(player.treespace)} free space to use for planting`;
	el.bananaspaceamt.innerText = `you have ${toSci(player.bananaspace)} free space to use for store your bannas`;
	if (Date.now()-player.lastTick > m*1000) {
		player.bananas = player.bananas.add(player.trees);
		player.lastTick = Date.now();
	}
}
setInterval(updateUI, 33);
