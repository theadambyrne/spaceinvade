var b = new Bullet(10, 200)
function render() {
	clear()
	player.draw()
	for (let i = 0; i < invaders.length; i++) {
		invaders[i].draw()
		invaders[i].move()
	}
}

function clear() {
	ctx.fillStyle = "black"
	ctx.fillRect(0, 0, canvas.clientWidth, canvas.height)
}