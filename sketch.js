"use strict";

var GetSize = ()=> {
	return ([Math.max(window.innerWidth || 0),
			Math.max(window.innerHeight || 0)]);
}

//canvas resize on viewport change
function canvas_resize() {
    var win_size = GetSize();
    resizeCanvas(win_size[0], win_size[1], true);
}

//window resize on viewport change >> hook
function windowResized() {
    canvas_resize();
}

function setup() {
	// noLoop();
	canvas_resize();
	let ws = new WebSocket("ws://127.0.0.1:8082");
	ws.onopen = ()=> {
		console.log("hello server");
	}
	ws.send("hello from client");
}

function draw() {
	ellipse(GetSize()[0]/2, GetSize()[1]/2, GetSize()[0], GetSize()[1]);
}
