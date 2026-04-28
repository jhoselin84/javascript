/**
 * Estudo do laço for - tabuada 
 */

const prompt= require(`prompt-sync`)()
 let tabuada
  
 console.clear()
 console.log("tabuada")
 tabuada=Number(prompt("digite a tabuada desejada")) 

 for (let i =1; i <11; i++) {
    console.log(`${tabuada}X${i}=${tabuada*i}`)
    
 }













