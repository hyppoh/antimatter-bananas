function save() {
	localStorage.setItem("hyppobananassave", JSON.stringify(player));
	console.log("Game saved.");
}
setInterval(function() {
	save();
}, 10000);