/**
 * Estudo das funçoes
 * @uthor jhoseline
 */

 //função literal(simples) 
 function hello(){
    console.clear()
    console.log("hello function")
    console.log("tipo:" + typeof (hello)) //apoio ao entendimento da logica

 }

 //para executar uma funçao basta chamar o nome da função,não esquecendo dos parenteses
 hello()


 //função anõnima >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 const hello2 = function (){
    console.clear()
    console.log ("hello function assigned")
    console.log("tipo:" + typeof (hello2))//apoio ao entendimento da logica
 }

 hello2()

 //função anõnima simplificada >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 const hello3 =()=> {
    console.clear()
    console.log ("hello function assigned")
    console.log("tipo:" + typeof (hello3))//apoio ao entendimento da logica
 }
 hello()

  //função  comparametro >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 function somar(num1, num2) {
    console.log("tipo:" + typeof (somar))//apoio ao entendimento da logica
     return(console.log (num1,num2))
}

 //neste caso dentro de parenteses ,fornecemos os numero que serao somados na função
  somar(2,3)

  //função  anonima com parametros 
  const somarA=function(num1,num2) {
    console.log("tipo:" + typeof (somarA))//apoio ao entendimento da logica
    return(console.log (num1+num2))
  }
 
  //função anomima simplificada com parametros >>>>
  const somarAF =(num1,num2)=>{
    console.log("TIPO:" + typeof(SOMARaf))//apoio ao entendimento da logica
     return(console.log (num1+num2))
  }
  somarAF(8,8)

 //função anonima super simplificada com parametros >>>.
 //cuidado neste caso o retorno e implicito
   const somarAFS =(num1,num2)=> (console.log(num1,num2))
   somarAFS(2, 7)
