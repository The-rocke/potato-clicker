//% blockNamespace=clicker_game 
namespace upgrade {
    export class UpgradeButton extends Button {
        upgrade: Upgrade
        basePrice: number

        constructor(sprite: Sprite, upgrade: Upgrade, basePrice: number) {
            super(sprite)
            this.upgrade = upgrade
            this.basePrice = basePrice
        }

        trigger() {
            if(clicker_game.scoreF >= this.basePrice) {
                clicker_game.increasePps(this.upgrade.ppsBonus)
                clicker_game.modifyScore(this.basePrice*-1)
            }
        }
    }

    export class Upgrade {
        ppsBonus: number // Added potatoes per second
        upgradeType: string // Type of upgrade

        constructor(ppsBonus: number, upgradeType: string) {
            this.ppsBonus = ppsBonus
            this.upgradeType = upgradeType
        }
    }

    /**Adds a new upgrade
     * @param ppsBonus - The increased potatoes per second it provides
     * @param upgradeType - The 'type' of upgrade it is
     * @param sprite - The texture of the button
     * @param basePrice - The price of the upgrade (before modifications)
     */
    //% block="Add|Upgrade $ppsBonus $upgradeType $sprite $basePrice"
    export function addUpgrade(ppsBonus: number, upgradeType: string, sprite: Sprite, basePrice: number) {
        let upgrade = new Upgrade(ppsBonus, upgradeType)
        ui.addUpgradeButton(sprite, upgrade, basePrice)
    }
}