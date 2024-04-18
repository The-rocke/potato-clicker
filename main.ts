namespace SpriteKind {
    export const Clickable = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (canClick) {
        info.changeScoreBy(1)
        score += clickVal
        cursor.sayText(score.toString())
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Clickable, function (sprite, otherSprite) {
    canClick = true
})
let cursor: Sprite = null
let canClick = false
let clickVal = 0
let score = 0
clickVal = 1
canClick = false
let spud = sprites.create(img`
    . . . f f f f f f f f f f f f . 
    . f f f 4 4 4 4 4 4 4 4 4 4 f f 
    f f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
    f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
    f 4 4 4 4 4 4 4 4 4 4 4 4 4 f . 
    f 4 4 4 4 4 4 4 4 4 4 4 4 f . . 
    f 4 4 4 4 4 4 4 4 4 4 4 4 f . . 
    f 4 4 4 4 4 4 4 4 4 4 4 f . . . 
    f 4 4 4 4 4 4 4 4 4 4 4 f . . . 
    . f 4 4 4 4 4 4 4 4 4 4 f . . . 
    . f 4 4 4 4 4 4 4 4 4 f f . . . 
    . f f 4 4 4 4 4 4 4 4 f . . . . 
    . . f 4 4 4 4 4 4 4 f f . . . . 
    . . f f 4 4 4 4 4 f f . . . . . 
    . . . f f f 4 4 f f . . . . . . 
    . . . . . f f f f . . . . . . . 
    `, SpriteKind.Clickable)
spud.setPosition(0, 58)
spud.setStayInScreen(true)
spud.setScale(2, ScaleAnchor.Middle)
cursor = sprites.create(img`
    f f f . . . . . . . . . . . . . 
    f 1 f f f f f f f . . . . . . . 
    f 1 1 1 1 1 1 1 1 f f f f . . . 
    f 1 1 1 1 1 1 1 1 1 1 1 f f . . 
    f 1 1 1 1 1 1 1 1 1 1 1 f . . . 
    f f 1 1 1 1 1 1 1 1 1 f f . . . 
    . f 1 1 1 1 1 1 1 1 f f . . . . 
    . f f 1 1 1 1 1 1 1 f . . . . . 
    . . f f 1 1 1 1 1 f . . . . . . 
    . . . f 1 1 1 1 f . . . . . . . 
    . . . f f 1 1 f . . . . . . . . 
    . . . . f 1 f f . . . . . . . . 
    . . . . . f f . . . . . . . . . 
    . . . . . f . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
cursor.setStayInScreen(true)
controller.moveSprite(cursor, 100, 100)
