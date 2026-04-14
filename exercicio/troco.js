/**
 * calculo do troco
 * exemplo de uso da biblioteca prompt-sync
 * @utor jhoseline
 * 
 */
//importaão de pacote
const prompt = require("prompt-sync")()

//variaveis 
let compra,pago, troco


console.clear()
console.log ("calculo do troco")

//entrada
compra = Number(prompt("digite o valor da compra:"))
pago = Number(prompt("digite o valor pago:"))


//saida
troco= (pago - compra)

console.log(`troco: R$ ${troco.toFixed(2)}`)
