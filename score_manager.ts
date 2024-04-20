//% block="Clicker" weight=102 color=#c7a844 icon="\uf245"
namespace score_manager {
    let scoreF: number = 0 // Floating point value of score
    let ppc: number = 0.5 // Potatoes per click
    let ppsMods: number // Potatoes per second modifiers

    export function onSpudClick() {
        scoreF += ppc
        updateScoreDisplay()
    }

    function updateScoreDisplay() {
        let roundedScore = Math.floor(scoreF)
        info.setScore(roundedScore)
    }
}