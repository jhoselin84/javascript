/**
 * validação da obrigatoriedade de votar
 * @uthor jhoseline
 */

 //inportação de pacotes
 const prompt = require(`prompt-sync`)()

 //variavel
 let idade

 //ux (experienci do usuario)
 console.clear
 console.log("validação da obriagataoridade de votar")

 // entrada
 idade=Number(prompt("digite a sua idade:"))

 // processamento e saida
 if (idade<16) {
    console.log("proibido votar")
 } else if(idade===16||idade===17||idade>79){
    console.log("voto facultativo")
 } else{
     console.log("obrigatorio votar")
 }
