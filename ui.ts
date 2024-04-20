import Button = button.Button

//% block="UI" weight=102 color=#678f6c icon="\uf00b"
//% groups=["UIManager", "Button"]
namespace ui {
    const buttonArr: Button[] = []
    let cursor: Sprite = null

    /** Instances a new Button object
     * @param sprite - The texture of the button
     */
    //% block="Instance|Button $sprite $tiggerEvent " group="Button"
    //% group="Button"
    export function instanceButton(sprite: Sprite): void {
        let button = new Button(sprite)
        buttonArr.push(button)
    }

    /** Sets the player cursor recognised by UI objects
     * Must be set for UI elements to work
     * @param sprite - The sprite of the cursor
     */
    //% block="Set|player|cursor $sprite"
    //% group="UIManager"
    export function setCursor(sprite: Sprite): void {
        cursor = sprite
        controller.moveSprite(cursor)
    }

    // When the player clicks - checks if they clicked a button
    function onClick(): void {
        // Checks if player cursor has been set
        if (cursor == null) {
            return
        }
        // Iterates through each Button object
        for (let button of buttonArr) {
            // Checks if the button overlaps with the cursor
            if (button.sprite.overlapsWith(cursor)) {
                button.trigger()
            }
        }
    }

    controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        onClick()
    })
}