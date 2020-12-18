controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    speed += -70
    mySprite.setVelocity(0, speed)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    speed += -70
    mySprite.setVelocity(0, speed)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let tree: Sprite = null
let speed = 0
let mySprite: Sprite = null
game.showLongText("Usa la flecha arriba o botton A para evitar los obstaculos", DialogLayout.Bottom)
scene.setBackgroundColor(9)
let Obstacles = [sprites.duck.log6, sprites.duck.log7, sprites.duck.log4, sprites.duck.log8]
mySprite = sprites.create(img`
    ........................................
    ........................................
    ........22...........f...f..............
    ........dd...........ff.ff..............
    ........dd............f.f...............
    .......2222...........444...............
    .fffff.22ffffffffffff.4442..............
    .f2222fff22....4444444444...............
    .f222222ffffff..44444444................
    .f222222222222f..4444444................
    .f222222222222f..4.4.4.4................
    .ffffffffffffff..4.4.4.4................
    5f............5..4...4..................
    .55555555555555.........................
    ........................................
    ........................................
    `, SpriteKind.Player)
mySprite.setPosition(60, 64)
speed = 10
let count = 0
let floor = sprites.create(img`
    55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    `, SpriteKind.Enemy)
floor.setPosition(76, 120)
floor = sprites.create(img`
    55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
    `, SpriteKind.Enemy)
floor.setPosition(76, 1)
game.onUpdateInterval(2000, function () {
    tree = sprites.create(Obstacles[randint(0, 3)], SpriteKind.Enemy)
    tree.setPosition(170, 0)
    tree.setVelocity(-50, 0)
})
game.onUpdateInterval(2000, function () {
    count += 1
    if (count >= 10) {
        count = randint(1, 9)
        tree = sprites.create(Obstacles[randint(0, 3)], SpriteKind.Enemy)
        tree.setPosition(170, 50)
        tree.setVelocity(-50, 0)
    } else {
        tree = sprites.create(Obstacles[randint(0, 3)], SpriteKind.Enemy)
        tree.setPosition(170, 100)
        tree.setVelocity(-50, 0)
    }
})
forever(function () {
    mySprite.setVelocity(0, speed)
    pause(200)
    speed += 20
})
game.onUpdateInterval(500, function () {
    info.changeScoreBy(10)
})
