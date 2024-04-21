//% block="Clicker" weight=103 color=#c7a844 icon="\uf245"
namespace clicker_game {
    export let ppc: number = 0.5 // Potatoes per click
    export let pps: number = 0 // Potatoes per second
    export let scoreF: number = 0 // Floating point value of score
    let ppu: number = 0 // Potatoes per game update

    game.onUpdate(function () {
        scoreF += ppu
        updateScoreDisplay()
    })

    export function onSpudClick() {
        scoreF += ppc
        updateScoreDisplay()
    }

    export function increasePps(bonusPps: number) {
        pps += bonusPps
        recalculatePpu()
    }
    function recalculatePpu() {
        ppu = pps / 60
    }

    export function modifyScore(mod: number) {
        scoreF += mod
        updateScoreDisplay
    }

    function updateScoreDisplay() {
        info.setScore(Math.floor(scoreF))
    }
}