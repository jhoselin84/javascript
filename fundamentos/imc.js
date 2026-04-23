/**
 * calculo do imc
 * exemplo de acadeamento da instrututa  if
 *@author jhoseline
 */
const prompt = require("prompt-sync")()

let peso, altura,imc

console.clear()
console.log("calcule do imc----------")

peso= Number(prompt("digite seu peso em kg:"))
altura=Number(prompt("digite sua altura em metros:"))


imc=peso/(altura*altura)
console.log(`imc; ${imc.toFixed(2)}`)
 
if (imc <18.5){
    console.log(`peso baixo`)
}else if(imc<25){
    console.log(`peso nornal`)   
}else if(ims<30){
    console.log(`sobre peso`)
}else if(imc<35){
  console.log(`sobrepeso`)  
}else if(imc<40){
  console.log(`obesidade I`) 
}else if(imc<40){
     console.log(`obesidade II`) 
}else {
     console.log(`obesidade III`)  
}
 
  