function load(save) {
	if (typeof save !== "object") return;
	if (save === null) return;
	player = runParse(save, initPlayer);
}
function runParse(obj, obj2) {
	Object.keys(obj2).forEach(function (key, index) {
		if (key != "proto") {
			if (obj[key] === undefined) {
				obj[key] = obj2[key];
			} else if (typeof obj[key] === "string" && typeof obj2[key] === "object") {
				obj[key] = new Decimal(obj[key]);
			} else if (typeof obj2[key] === "object" && typeof obj[key] === "object") {
				obj[key] = runParse(obj[key], obj2[key]);
			} else if (typeof obj[key] != typeof obj2[key]) {
				obj[key] = obj2[key];
			}
		}
	});
	return (obj);
}
var parsedsave = JSON.parse(localStorage.getItem("hyppobananassave"));
if (localStorage.getItem("hyppobananassave") !== null) {
	load(parsedsave);
}