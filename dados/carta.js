/**
 * sorteio de uma carta 
 * exemplo de uso array para simplificar o codigo
 * @uthor jhoseline
 */

const prompt = require(`prompt-sync`)()
 //          [0]  [1]  [2]  [3]
let nipes = ["♠", "♥", "♦", "♣" ]
 //         [0] [1] [2] [3] [4] [5] [6] [7] [8] [9] [10][11] [12]
let faces =["A","2","3","4","5","6","7","8","9","10","J","Q","k"]

console.clear
console.log("sorteio de uma carta: ♠ ♥ ♦ ♣ ")
prompt("pressione a tecla [enter] para sortear uma carta")

let nipe = nipes[Math.floor(Math.random() * 4)]
let face = faces[Math.floor(Math.random() * 13)]

console.log(`${face}${nipe}`.read)
