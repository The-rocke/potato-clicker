namespace SpriteKind {
    export const Clickable = SpriteKind.create()
}
info.setScore(0)
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
upgrade.addUpgrade(
2,
"Farm",
sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f b b b b b b b b b b b b b b f 
    f b b b b b b b b b b b b b b f 
    f b b b b b b 7 b b b b b b b f 
    f b b b b 7 7 7 b b b b b b b f 
    f b b b b b b 7 7 7 b b b b b f 
    f b b b b b 7 7 7 7 b b b b b f 
    f b b b b b 7 b b b b b b b b f 
    f b e e e e 7 e e e e e b b b f 
    f b e e e e 7 e e e e e e b b f 
    f b e e e e 7 e e e e e e b b f 
    f f e e e e e e e e e e e b b f 
    f b e e e e e e e e e e b b b f 
    f b b b e e e e e e e b b b b f 
    f b b b b b b b b b b b b b b f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Clickable),
0
)
