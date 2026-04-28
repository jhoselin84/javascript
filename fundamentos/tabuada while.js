/**
 * tabuada usando while
 * @uthor jhoseline
 */
const prompt= require(`prompt-sync`)()
 let tabuada
  
 console.clear()
 console.log("tabuada")
 tabuada=Number(prompt("digite a tabuada desejada :")) 


 let i= 1
 while(i<11){
  console.log(i)
  i++
 }

 do {
    console.log(`${tabuada}X${i}=${tabuada*i}`)
    i++
 } while(i<11)




 
    