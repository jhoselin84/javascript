/**
 * calculo do valor da corrida de taxi
 * @uthor jhoseline
 * 
 */
//importação de pacote 
const prompt(`prompt-sync`)()

//variaveis
let km,valorkm,valorfixo,total

console.clear()
console.log("digite os km percorido: km")

//entrada
km=Number(prompt("digite os km"))
console.log(km)

valorkm=Number(prompt("digite os o valor por km"))
console.log(km)

valorfixo=Number(prompt("digite o valor fixo"))
console.log(corrida)
 
//saida
total= valorfixo+(km * valorkm)

console.log(`total da corrida:${total.toFixed(1)}`)

