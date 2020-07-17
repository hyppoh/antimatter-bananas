        let a = 6; // bananas
        let b = 0; // antimatter
        let c = 0; // seeds
        let d = 0; // banana trees
        let n = 60; // time seeds to grow in seconds
        let m = 10; // time banana trees produce 1 banana
		let lastTick = performance.now()
        let ignore = [
            document.getElementById("a"),
            document.getElementById("b"),
            document.getElementById("c"),
            document.getElementById("d"),
        ];
        function salvage() {
            if (a > 0) {
                a--;
                b+= 0.00001;
                c+=(Math.floor(Math.random()*2));
            };
        };
        function plant() {
            if (c > 0) {
                c--;
				setTimeout(()=>d++, n*1000)
            };
        };
		function destroy() {
            if (d > 0) {
                d--;
                a+=(Math.ceil(Math.random()*5))
            };
        };
        function salvageDozen() {
		if (a > 12) {
			a-= 12;
			b+= 0.00012;
			c+=(Math.ceil(Math.random()*24) + 12);
		};
	};	
        function u() {
            ignore[0].innerText = "you have " + a + " bananas";
            ignore[1].innerText = "you have " + c + " banana seeds";
            ignore[2].innerText = "you have " + b + " antimatter"
            ignore[3].innerText = "you have " + d + " banana trees";
			if (performance.now()-lastTick > m*1000) {
				a+=d
				lastTick = performance.now()
			}
        };
        if (d > 0) {
        	setTimeout(()=>{a+(Math.floor(Math.random()*2))}, m*1000);
        }
        if (b < 1) {
		b*= 100000;
		Math.round(b);
		b/= 100000;
	}
	setInterval(u, 50);
