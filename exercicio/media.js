/**
 * calculo da media de 2 notas 
 * exemplo de uso da biblioteca prompt-sync
 * @utor jhoseline  
 */
//importar pacote
const prompt =require("prompt-sync")()

//variaveis 
let diciplina, nota1, nota2, media 
console.clear()
console.log("calculo da media de  2 nota")
 


//entrada de dados 
diciplina = prompt("digite o nome da diciplina: ")
console.log(diciplina)
//console.log(typeof(diciplina))

//number() converte para o tipo numero
nota1=number(prompt("digite a nota1:"))
//console.log(nota1)
//console.log(typeof(nota1))
nota2=number(prompt("digite a nota:"))

//processamento
media=(nota1+nota2)/2
//saida
console.log=(`media:${media.toFixed(1)}`)