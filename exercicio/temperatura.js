/**
 * exercicio conversão de temperatura 
 * @utor jhoseline
 * 
 *
 */
//importaão de pacote
const prompt =require("prompt-sync")()

//variaveis
let c, f
console.log()
console.log("conversão de temperatura fahrenhei ->")


//entrada
f= Number(prompt("digite a temperatura em fahrenheit:"))
// processamento
c=(f-32)* 5/9

//saida
console.log(`${f}° f equivalem a ${c.toFixed(1)}° c`)