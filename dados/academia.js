/**
 * Sistema para gestão de academia
 * Estudo de array como estrutura de dados
 * @author Professor José de Assis
 */

//Importação de pacotes
const prompt = require('prompt-sync')()

//Variáveis globais
let nome, idade, peso, altura, vip
let matricula = 1 //contador de matrícula
let opcaoMenu, opcaoConsulta, opcaoRelatorio

//Array principal (estrutura de dados)
let alunos = []
/*
    Estrutura de dados:
    [0] matricula
    [1] nome
    [2] idade
    [3] peso
    [4] altura
    [5] vip
*/


//Main >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function mainAcademia() {
    //menu principal 
    do {
        console.clear()
        console.log(" _____           _           _           __ _____")
        console.log("|  _  |___ ___ _| |___ _____|_|___    __|  |   __|")
        console.log("|     |  _| .'| . | -_|     | | .'|  |  |  |__   |")
        console.log("|__|__|___|__,|___|___|_|_|_|_|__,|  |_____|_____|")
        console.log("")
        console.log("1. Cadastrar aluno")
        console.log("2. Consultar alunos")
        console.log("3. Alterar aluno")
        console.log("4. Excluir aluno")
        console.log("5. Ficha do aluno")
        console.log("6. Relatórios")
        console.log("0. Sair")
        console.log("")

        opcaoMenu = Number(prompt("escolha:"))

        switch (opcaoMenu) {
            case 1:
                cadastrarAluno()
                break
            case 2:
                consultarAlunos()
                break
            case 3:
                editarAluno()
                break
            case 4:
                excluirAluno()
                break
            case 5:
                gerarFichaAluno()
                break
            case 6:
                gerarRelatorios()
                break
            case 0:
                console.log("Encerrando o sistema...")
                break
            default:
                console.log("Opção inválida!")
                prompt("ENTER...")
        }

    } while (opcaoMenu !== 0)
}
//Main (fim) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//CRUD - Create >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function cadastrarAluno() {
    console.clear()
    console.log("=== CADASTRO DE ALUNO ===")
    console.log("")

    //lógica principal
    //captura dos dados
    nome = prompt("Nome: ")
    idade = Number(prompt("Idade: "))
    peso = Number(prompt("Peso: "))
    altura = Number(prompt("Altura: "))
    vip = prompt("Aluno VIP (s/n): ")
    if (vip === "s") {
        vip = true
    } else {
        vip = false
    }

    //adicionar os dados na matriz
    alunos.push([
        matricula,
        nome,
        idade,
        peso,
        altura,
        vip
    ])

    matricula++ //auto incremento da matrícula

    console.log("")
    console.log("Aluno cadastrado com sucesso!")
    prompt("ENTER...")
}
//CRUD - Create (fim) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//CRUD - Read >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function consultarAlunos() {
    //Sub menu
    do {
        console.clear()
        console.log("=== CONSULTA DE ALUNOS ===")
        console.log("")
        console.log("1. Buscar aluno")
        console.log("2. Listar alunos")
        console.log("0. Voltar")
        console.log("")
        opcaoConsulta = Number(prompt("Escolha: "))

        switch (opcaoConsulta) {
            case 1:
                buscarAluno()
                break
            case 2:
                listarAlunos()
                break
            case 0:
                break
            default:
                console.log("")
                console.log("Opção inválida!")
                prompt("ENTER...")
        }

    } while (opcaoConsulta !== 0)

    //Buscar aluno
    function buscarAluno() {
        console.clear()
        console.log("=== BUSCAR ALUNO ===")
        console.log("")

        prompt("ENTER...")
    }

    //Listar alunos
    function listarAlunos() {
        console.clear()
        console.log("=== LISTA DE ALUNOS ===")
        console.log("")

        //validação se nenhum aluno cadastrado
        if (alunos.length === 0) {
            console.log("nenhum aluno cadastrado")
        } else {
            console.table(alunos)
            //ordenar  .............................
            let alunoOrdenados = [...alunos]
            alunoOrdenados.sort((a,z) => {
                return a[1].localcompare(z[1])
            })
        }


        prompt("ENTER...")
    }
}
//CRUD - Read (fim) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//CRUD - Update >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function editarAluno() {
    console.clear()
    console.log("=== ALTERAR ALUNO ===")
    console.log("")

    prompt("ENTER...")
}
//CRUD - Update (fim) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//CRUD - Delete >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function excluirAluno() {
    console.clear()
    console.log("=== EXCLUIR ALUNO ===")
    console.log("")

    prompt("ENTER...")
}
//CRUD - Delete (fim) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//Ficha do aluno >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function gerarFichaAluno() {
    console.clear()
    console.log("=== FICHA DO ALUNO ===")
    console.log("")

    prompt("ENTER...")
}
//Ficha do aluno (fim) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//Relatórios >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function gerarRelatorios() {
    do {
        //submenu
        console.clear()
        console.log("=== RELATÓRIOS ===")
        console.log("")
        console.log("1. Alunos VIP")
        console.log("2. Média de idade")
        console.log("3. % IMC dos alunos")
        console.log("0. Voltar")
        console.log("")
        opcaoRelatorio = Number(prompt("Escolha: "))

        switch (opcaoRelatorio) {
            case 1:
                gerarRelatorioVip()
                break
            case 2:
                gerarRelatorioMediaIdade()
                break
            case 3:
                gerarRelatorioImc()
                break
            case 0:
                break
            default:
                console.log("")
                console.log("Opção inválida!")
                prompt("ENTER...")
        }
    } while (opcaoRelatorio !== 0)

    //Relatório de alunos VIP
    function gerarRelatorioVip() {
        console.clear()
        console.log("=== ALUNOS VIP ===")
        console.log("")

        prompt("ENTER...")
    }

    //Relatório média de idade dos alunos
    function gerarRelatorioMediaIdade() {
        console.clear()
        console.log("=== MÉDIA DE IDADES ===")
        console.log("")

        prompt("ENTER...")
    }

    //Relatório de percentual de IMC
    function gerarRelatorioImc() {
        console.clear()
        console.log("=== % IMC DOS ALUNOS ===")
        console.log("")

        prompt("ENTER...")
    }
}
//Relatórios (fim) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//Iniciar o sistema
mainAcademia()