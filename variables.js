let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
let score = 0
var shot = ""
let player = new Ship(280, 430)
let invaders = []
for (let i = 0; i < 5; i++) {
	invaders.push(new Invader(((canvas.width / 40) * i) + (i * 70) + 5, 10))
}