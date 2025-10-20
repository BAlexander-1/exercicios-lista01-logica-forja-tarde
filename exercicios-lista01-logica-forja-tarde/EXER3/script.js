function escreva(){
    var nota = parseFloat(document.getElementById("nota").value)
    var nota2 = parseFloat(document.getElementById("nota2").value)
    var nota3 = parseFloat(document.getElementById("nota3").value)

    var media = document.getElementById("res")
    var conta = (nota + nota2 + nota3) / 3
    
    if(conta >= 7){
        media.textContent = conta.toFixed(2) + " - " + "APROVADO"
    }else {
        media.textContent = conta.toFixed(2) + " - " + "REPROVADO"
    }
}