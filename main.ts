input.onButtonPressed(Button.A, function () {
    ship.move(-1)
})
input.onButtonPressed(Button.B, function () {
    ship.move(1)
})
let ship: game.LedSprite = null
ship = game.createSprite(2, 4)
basic.forever(function () {
	
})
