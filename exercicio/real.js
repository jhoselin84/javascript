/**
 * calculo de conversão de real para dolar 
 * @uthor jhoseline
 * 
 */
 // importação de pacote
 const prompt= require(`prompt-sync`)()

 //variaveis 
 let reais, dolar, cambio

 console.clear()
 console.log(`digite um valor em reais:`)
 
 //entrada
 reais=Number(prompt(`digite o valor:R$`))
 console.log(reais)

 cambio=Number(prompt(`digite o cambio do dolar:$`))
 console.log(cambio)

 //saida
 dolar= (reais /cambio)
 console.log(`quantidade de reais:R$${reais.toFixed(2)}`)