input.onButtonPressed(Button.A, function () {
    ship.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    shoot = game.createSprite(ship.get(LedSpriteProperty.X), ship.get(LedSpriteProperty.X))
})
input.onButtonPressed(Button.B, function () {
    ship.move(1)
})
let shoot: game.LedSprite = null
let ship: game.LedSprite = null
ship = game.createSprite(2, 4)
