//% blockNamespace=clicker_game 
namespace upgrade {
    export class Upgrade extends Button {
        ppsBonus: number
        basePrice: number // Initial price
        priceMod: number // Percentage price is increased by with each purchase
        upgradeType: string

        price: number = 0
        upgradesOwned: int32 = 0

        constructor(sprite: Sprite,
                ppsBonus: number, basePrice: number, priceMod: number, upgradeType: string) {
            super(sprite)
            this.ppsBonus = ppsBonus
            this.basePrice = basePrice
            this.priceMod = priceMod
            this.upgradeType = upgradeType

            this.price = basePrice
        }
        
        // On click event
        trigger() {
            if(clicker_game.scoreF >= this.price) {
                this.purchaseUpgrade()
            }
        }

        purchaseUpgrade() {
            clicker_game.increasePps(this.ppsBonus)
            clicker_game.modifyScore(this.price * -1)
            this.upgradesOwned++
            this.price = this.basePrice * this.upgradesOwned * (this.priceMod-1)
        }
    }

    /**Adds a new upgrade (and the corresponding button)
     * @param ppsBonus - The increased potatoes per second it provides
     * @param upgradeType - The 'type' of upgrade it is
     * @param priceMod - Modifier to price with each purchasse
     * @param sprite - The texture of the button
     * @param basePrice - The price of the upgrade (before modifications)
     */
    //% block="Add Upgrade| sprite:$sprite| ppsBonus:$ppsBonus basePrice:$basePrice priceMod:$priceMod type:$upgradeType"
    //% group="Upgrade"
    export function addUpgrade(sprite: Sprite, 
            ppsBonus: number, basePrice: number, priceMod: number, upgradeType: string) {
        ui.addUpgradeButton(sprite, ppsBonus, basePrice, priceMod, upgradeType)
    }
}