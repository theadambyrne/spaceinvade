window.addEventListener("keydown", function (e) {
	var key = e.keyCode
	switch (key) {
		case 37:
			player.left()
			break;
		case 39:
			player.right()
			break;
		case 32:
			player.shoot()
	}
})

setInterval(render, 100)
