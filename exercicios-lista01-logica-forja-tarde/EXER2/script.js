function escreva() {
    var idade = parseFloat(document.getElementById("idade").value)

    if (idade < 18) {
        printIdade.textContent = "Voce e menor de idade"
    } else {
        printIdade.textContent = "Voce e maior de idade"
    }
}