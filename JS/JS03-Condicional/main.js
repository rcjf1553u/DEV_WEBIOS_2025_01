let atividadeEntregue = true
let diaFinalEntrega = 19
let mensagemParabens = 'Parabéns, valeu fera'
if(atividadeEntregue == true){ // true
    console.log(mensagemParabens)
    if(diaFinalEntrega <= 13){
        console.log("Entregou a atividade na data e sua nota é 10!")
    }else{
        console.log("Entregou a atividade fora da data prevista e será retirado dois pontos da nota final")
    }

}else if(atividadeEntregue == false){ // false
    console.log("Ops, você ainda não entregou sua atividade")
}else{ // Resposta alternativa
    console.log("Você inseriu uma informação invalida")
}

let nota = 6.9
// se a nota for igual ou igual ou maior que 7 então o aluno passou na materia 
// se a nota for menor que 6,9 o aluno vai ficar de recuperação 
if(nota>=7){
  console.log("passou na materia")
}else{
  console.log("Vai ficar de recuperação")
}
let resultado = nota >= 7 ? console.log("passou na materia") : console.log("Vai ficar de recuperação")

console.log(resultado)