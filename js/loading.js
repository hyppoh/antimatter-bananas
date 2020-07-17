function load(save) {
	if (typeof save !== "object") return;
	if (save === null) return;
	Object.keys(initPlayer).forEach(function (key, index) {
		if (save[key] === undefined) {
			save[key] = initPlayer[key];
		} else if (typeof save[key] === "string" && typeof initPlayer[key] === "object") {
			save[key] = new Decimal(save[key]);
		} else if (typeof initPlayer[key] === "object" && typeof save[key] === "object") {
			Object.keys(initPlayer).forEach(function (key2, index2) {
				if (save[key] === undefined) {
					save[key] = initPlayer[key];
				} else if (typeof save[key][key2] === "string" && typeof initPlayer[key][key2] === "object") {
					save[key][key2] = new Decimal(save[key][key2]);
				} else if (typeof save[key] != typeof initPlayer[key]) {
					save[key][key2] = initPlayer[key][key2];
				}
			});
		} else if (typeof save[key] != typeof initPlayer[key]) {
			save[key] = initPlayer[key];
		}
	});
	player = save;
}
var parsedsave = JSON.parse(localStorage.getItem("hyppobananassave"));
if (localStorage.getItem("hyppobananassave") !== null) {
	load(parsedsave);
}