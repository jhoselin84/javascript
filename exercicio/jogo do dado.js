const { random } = require("colors")

/**
 * jogo do dado 
 * exemplo de uso da estrutura do while
 * @uthor jhoseline
 */
 const prompt = require("prompt-sync")()
 let novoJogo="n"

 do {
    console.clear()
 console.log("jogo do dado")
 prompt ("precione [enter] para lançar o dado...")
 console.log(`face do dado:${Math.ceil(Math.random()*6)}`)
 novoJogo= prompt("deseja jogar novamente (s/n)?")
} while (novoJogo==="s")

 

