function toSci(num, places, placesafter1000) {
	if (places == undefined) places = 0;
	if (placesafter1000 == undefined) placesafter1000 = 2;
	num = new Decimal(num);
	return (Math.abs(num.e) < 3) ? (num.m*Math.pow(10, num.e)).toFixed(places) : `${num.m.toFixed(placesafter1000)}e${num.e}`
}
var mainVue = new Vue({
	el: "#main",
	data: {
		player: player
	},
	methods: {
		toSci: function (num, places, placesafter1000) {
			if (places == undefined) places = 0;
			if (placesafter1000 == undefined) placesafter1000 = 2;
			num = new Decimal(num);
			return (Math.abs(num.e) < 3) ? (num.m*Math.pow(10, num.e)).toFixed(places) : `${num.m.toFixed(placesafter1000)}e${num.e}`
		}
	}
});
setTimeout(mainVue.$forceUpdate, 100);
