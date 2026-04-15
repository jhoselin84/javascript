/**
 * claculo da quantidade de lata 
 * @utor jhoseline
 * 
 */
 //importação de pacote


 const prompt=require(`prompt-sync`)()

 //variaveis 
 let latas, area,rendimento 

 console.clear()
 console.log(`calculo da quantidade de latas usadas`)

 //entrada
 rendimento=Number(promptrompt("digite o rendimento da lata em m²:"))
 console.log(rendimento)

 area=Number(prompt("digite o valor da area "))
 console.log(area)

 //saida
 latas=(area / rendimento)
 console.log(`quantidade de latas:${Math.ceil(latas)}`)
 