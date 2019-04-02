class Ship {
	constructor(x, y) {
		this.x = x
		this.y = y
		this.speed = 20
	}
	draw() {
		ctx.fillStyle = "blue"
		ctx.fillRect(this.x, this.y, 40, 40)
	}
	left() {
		if (this.x < 0 || this.x == 0) {
			//stop at edge
		} else {
			this.x -= this.speed
		}
	}
	right() {
		if (this.x > (canvas.width - 40) || this.x == canvas.width - 40) {
			//stop at edge
		} else {
			this.x += this.speed
		}
	}
	shoot() {
		shot = new Bullet(this.x, this.y)
		for (let i = 0; i < 60; i++) {
			shot.draw()
		}
		for (let i = 0; i < invaders.length; i++) {
			for (let ix = 0; ix < invaders[i].xs.length; ix++) {
				if (shot.x == invaders[i].xs[ix]) {
					score += 1
					document.getElementById("ts").innerHTML = score
				}
			}
		}
	}
}

class Bullet {
	constructor(x, y) {
		this.x = x + 20
		this.y = y
	}
	draw() {
		ctx.beginPath()
		ctx.strokeStyle = "red"
		ctx.moveTo(this.x, this.y)
		ctx.lineTo(this.x, 0)
		ctx.stroke()

	}
}

class Invader {
	constructor(x, y) {
		this.x = x
		this.y = y
		this.speed = Math.random() * 30
		this.xs = []
		this.dir = true
		for (let i = 0; i < 45; i++) {
			this.xs.push(i + this.x)
		}
		setInterval(this.move, 50)
	}
	draw() {
		ctx.fillStyle = "gray"
		ctx.fillRect(this.x, this.y, 45, 45)
	}
	move() {
		if (this.x < 0 || this.x == 0) { this.speed *= -1 }
		else if (this.x > (canvas.width - 40) || this.x == canvas.width - 40) { this.speed *= -1 }
		this.x += this.speed
	}
}