namespace SpriteKind {
    export const Clickable = SpriteKind.create()
}
info.setScore(0)
clicker_game.setPpc(1)
let spud = clicker_game.instanceSpud(sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . f . . . f f f f . . . . . . . 
    . f f f f 4 4 4 4 f f . . . . . 
    . f 4 4 4 4 4 4 4 4 4 f . . . . 
    . f 4 4 4 4 4 4 4 4 4 f . . . . 
    . f 4 4 4 4 4 4 4 4 4 f . . . . 
    . f 4 4 4 4 4 4 4 4 4 f . . . . 
    . f 4 4 4 4 4 4 4 4 4 f . . . . 
    . f 4 4 4 4 4 4 4 4 4 f . . . . 
    . f 4 4 4 4 4 4 4 4 4 f . . . . 
    . f 4 4 4 4 4 4 4 4 4 f . . . . 
    . f 4 4 4 4 4 4 4 4 4 f . . . . 
    . f 4 4 4 4 4 4 4 4 4 f . . . . 
    . . f 4 4 4 4 4 4 4 4 f . . . . 
    . . . f 4 4 4 4 f f f . . . . . 
    . . . . f f f f . . . . . . . . 
    `, SpriteKind.Clickable))
let farmUpgrade = upgrade.addUpgrade(
sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . 7 7 7 7 . . . . . . . . 
    . . . . 7 7 7 7 e e e e e e . . 
    . . . e e e 7 e e e e e e e e . 
    . . e e e e 7 e e e e e e e e . 
    . . e e e e 7 e e e e e e e e e 
    . . e e e e e e e e e e e e e e 
    . . . e e e e e e e e e e e e e 
    . . . . . e e e e e e e e . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Clickable),
0,
0,
0,
""
)
ui.setCursor(sprites.create(img`
    f f f f f f f f f f f . . . . . 
    f 1 1 1 1 1 1 1 1 f . . . . . . 
    f 1 1 1 1 1 1 1 f f . . . . . . 
    f 1 1 1 1 1 1 1 f . . . . . . . 
    f 1 1 1 1 1 1 1 1 f f . . . . . 
    f 1 1 1 1 1 f 1 1 1 f . . . . . 
    f 1 1 1 f f f f 1 f f . . . . . 
    f 1 1 f . . . . f f . . . . . . 
    f 1 f . . . . . . . . . . . . . 
    f f . . . . . . . . . . . . . . 
    f . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player))
