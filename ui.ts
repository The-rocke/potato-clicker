import Button = button.Button
import Spud = button.Spud
import Upgrade = upgrade.Upgrade
import UpgradeButton = upgrade.UpgradeButton

//% block="UI" weight=102 color=#678f6c icon="\uf00b"
//% groups=["UIManager", "Button"]
namespace ui {
    const buttonArr: Button[] = []
    let cursor: Sprite = null

    /** Instances a new clickable Spud object
     * @param sprite - The texture of the Spud
     */
    //% block="Instance|clickable|Spud $sprite $tiggerEvent " group="Button"
    //% group="Button"
    export function instanceSpud(sprite: Sprite): void {
        let button = new Spud(sprite)
        buttonArr.push(button)
    }

    export function addUpgradeButton(sprite: Sprite, upgrade: Upgrade, basePrice: number): void {
        let button = new UpgradeButton(sprite, upgrade, basePrice)
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