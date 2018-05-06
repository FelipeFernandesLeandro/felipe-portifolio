function setup() {
	createCanvas(200, 200);
	loadJSON('https://api.github.com/users/FelipeFernandesLeandro/repos');
}
function gotData(data) {
	println(data);
}
function draw() {
	background(0);
}