/**
 * calculadora js- exemplo de uso de funçoes
 * @uthor jhoseline
 */

//importaão de pacotes 
const prompt = require(`prompt-sync`)()

//variaveis  globais 
let num1, num2, opcao, resultado

//funçoes das operaçoes(com parametros)recomedado antes da função principal
function somar(num1, num2) {
    return num1 + num2
}

function subtrair(num1, num2) {
    return num1 - num2
}

function multiplicar(num1, num2) {
    return num1 * num2
}
function dividir(num1, num2) {
    // validação
    if (num2 === 0) {
        console.log("erro! impossivel dividir por 0")
    } else {
        return num1 / num2

    }
}
function raizquadrada(num1) {
    return Math.sqrt(num1)
}

//====================================================
//funcao principal(main)
function iniciarCalculadora() {
    // gerando um loop infinito (UX)
    do {
        mostraMenu()
        opcao = Number(prompt("escolha uma opção:"))
        switch (opcao) {
            case 0:
                console.log("calculadora encerrada:")
                return // encerra o loop infinito
            case 1:
                num1 = Number(prompt("digite o primeiro numero:"))
                num2 = Number(prompt("digite o segundo  numero:"))
                resultado = somar(num1, num2)
                break

            case 2:
                num1 = Number(prompt("digite o primeiro numero:"))
                num2 = Number(prompt("digite o segundo  numero:"))
                resultado = subtrair(num1, num2)
                break

            case 3:
                num1 = Number(prompt("digite o primeiro numero:"))
                num2 = Number(prompt("digite o segundo  numero:"))
                resultado = multiplicar(num1, num2)
                break

                case 4:
                num1 = Number(prompt("digite o primeiro numero:"))
                num2 = Number(prompt("digite o segundo  numero:"))
                resultado = dividir(num1*num2)
                break
            case 5:
                num1 = Number(prompt("digite o primeiro numero:"))
                num2 = Number(prompt("digite o segundo  numero:"))
                resultado = raizquadrada(num1)

                break
            default:
                console.log("opção invalida")
                prompt("digite [enter] para continuar")
                continue // continua dentro do swtch case

        }
        //exibir resultado
        console.log(`resultado:${resultado.toFixed(2)}`)
        prompt("presione [enter] para constinuar ")

    } while (true)
}


//fução menu
function mostraMenu() {
    console.clear()
    console.log("=== calculadora js===")
    console.log("1. Somar")
    console.log("2. subtrair")
    console.log("3. multiplicar")
    console.log("4. dividir")
    console.log("5. raiz quadrada")
    console.log("0. sair ")
}

//executar a função principal
iniciarCalculadora()

