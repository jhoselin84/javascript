/**
 * exemplo de uso da estrutura swich case 
 * @uthor jhoseline
 */
const prompt = require("prompt-sync")()

let opcao
 console.clear()
 console.log("menu de opçoes:")
 console.log("")
 console.log("1.cadastro de cliente:")
 console.log("2.cadastro de produtos:")
 console.log("3.relatorios")
 opcao= Number(prompt("digite a opcao desejada:"))

 // uso da estrutura switch case para tratamento de valor digitado.
 //bs:esta estrutura aceita variaveis numericas do tipo numeros inteiros e carateres unicos ,
 //dentro da estrutura o default e opcional 
 
 switch (opcao){
     case 1:
     console.clear()
     console.log("tela de cadatro de clientes")   
        break
     case 2:
     console.clear()
     console.log("tela de cadatro de produtos")   
        break
     case 3:
     console.clear()
     console.log("impressão de relatorios")   
        break   
     default:
        console.clear()
        console.log("opção invalida")   
        break   
        
 }
 
 
 
 
 
 