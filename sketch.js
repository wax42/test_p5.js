"use strict";

var GetSize = ()=> {
	return ([Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
			Math.max(document.documentElement.clientHeight, window.innerHeight || 0)]);
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
}

function draw() {
	ellipse(50, 50, 80, 80);
	text('a', 40, 40);
}
