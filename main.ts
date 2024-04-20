namespace SpriteKind {
    export const Clickable = SpriteKind.create()
}
let spud = sprites.create(img`
    . . . . . f f . . . . . . . . . 
    . . . f f f f f f f f . . . . . 
    . . f 4 4 4 4 4 4 4 4 f f f . . 
    . f 4 4 4 4 4 4 4 4 4 4 4 f f . 
    f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
    f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
    f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
    f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
    . f 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
    . f 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
    . . f 4 4 4 4 4 4 4 4 4 4 4 4 f 
    . . f f 4 4 4 4 4 4 4 4 4 4 4 f 
    . . . f f 4 4 4 4 4 4 4 4 4 f . 
    . . . . f 4 4 4 4 4 f f f f . . 
    . . . . . f 4 4 f f . . . . . . 
    . . . . . f f f . . . . . . . . 
    `, SpriteKind.Clickable)
spud.setPosition(25, 50)
spud.changeScale(2, ScaleAnchor.Middle)
ui.setCursor(sprites.create(img`
    f . . . . . . f f f f . . . . . 
    f f f f f f f 1 1 1 f . . . . . 
    f 1 1 1 1 1 1 1 1 f . . . . . . 
    f 1 1 1 1 1 1 1 f . . . . . . . 
    f f 1 1 1 1 1 1 f f f . . . . . 
    . f 1 1 f f 1 1 1 1 f f . . . . 
    . f 1 f f . f f 1 f f . . . . . 
    . f f . . . . f f f . . . . . . 
    . f f . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
ui.instanceSpud(spud)
