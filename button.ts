//% blockNamespace="ui"
namespace button {
    // ALL BUTTONS INHERIT FROM BASE BUTTON CLASS
    export abstract class Button {
        sprite: Sprite

        constructor(sprite: Sprite) {
            this.sprite = sprite
        }

        trigger(): void {}
    }

    export class Spud extends Button {
        trigger() {

        }
    }
}