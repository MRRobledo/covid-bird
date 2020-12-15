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
let level = 0
let tree: Sprite = null
let speed = 0
let mySprite: Sprite = null
game.showLongText("Usa la flecha arriba o botton A para evitar los obstaculos", DialogLayout.Bottom)
scene.setBackgroundColor(0)
let Obstacles = [sprites.duck.log6, sprites.duck.log7, sprites.duck.log4, sprites.duck.log8]
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 5 . . 5 . 5 5 . 5 . . 5 . . 
    . . 5 5 . 5 . 5 5 . 5 . 5 5 . . 
    . . . 5 7 7 7 7 7 7 7 7 5 . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 f f 7 7 7 7 f f 7 7 . . 
    . . 7 7 f f 7 7 7 7 f f 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 f f 7 7 7 7 7 . . 
    . . 7 7 7 7 f f f f 7 7 7 7 . . 
    . . 7 7 7 7 7 f f 7 7 7 7 7 . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
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
game.onUpdateInterval(2000 / 1, function () {
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
game.onUpdateInterval(2000 / 1, function () {
    tree = sprites.create(Obstacles[randint(0, 3)], SpriteKind.Enemy)
    tree.setPosition(170, 0)
    tree.setVelocity(-50, 0)
})
forever(function () {
    mySprite.setVelocity(0, speed)
    pause(200)
    speed += 20
})
game.onUpdateInterval(30000, function () {
    level += 1
})
game.onUpdateInterval(500, function () {
    info.changeScoreBy(10)
})
