//** convertor de gasolina
// @uthor* jhoseline

//importaão de pacote
const prompt= require("prompt-sync")()

//variaveis 
let etanol, gasolina,

console.clear()
console.log ("etanol x gasolina")

//entrada 
 etanol=Number(prompt("digite o valaor do litro do etanol:"))
 gasolina=Number(prompt("digite o vaor do litro da gasolina:"))
 
 //processamento + saida
 if (etanol<0.7 * gasolina) {
    
 } else {
    console.log("abasteça com gasolina")
 }


