//% blockNamespace=clicker_game 
namespace upgrade {
    export class Upgrade extends Button {
        ppsBonus: number
        basePrice: number
        upgradeType: string

        constructor(sprite: Sprite,
                ppsBonus: number, basePrice: number, upgradeType: string) {
            super(sprite)
            this.ppsBonus = ppsBonus
            this.basePrice = basePrice
            this.upgradeType = upgradeType
        }
        
        // On click event
        trigger() {
            if(clicker_game.scoreF >= this.basePrice) {
                clicker_game.increasePps(this.ppsBonus)
                clicker_game.modifyScore(this.basePrice*-1)
            }
        }
    }

    /**Adds a new upgrade (and the corresponding button)
     * @param ppsBonus - The increased potatoes per second it provides
     * @param upgradeType - The 'type' of upgrade it is
     * @param sprite - The texture of the button
     * @param basePrice - The price of the upgrade (before modifications)
     */
    //% block="Add Upgrade| sprite:$sprite| ppsBonus:$ppsBonus basePrice:$basePrice type:$upgradeType"
    //% group="Upgrade"
    export function addUpgrade(sprite: Sprite, 
            ppsBonus: number, basePrice: number, upgradeType: string) {
        ui.addUpgradeButton(sprite, ppsBonus, basePrice, upgradeType)
    }
}