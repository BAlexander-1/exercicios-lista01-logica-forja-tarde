function quadrado() {
    var lado1 = parseFloat(document.getElementById("lado1").value)
    var lado2 = parseFloat(document.getElementById("lado2").value)

    var area = document.getElementById("resposta")


    var conta = lado1 * lado2
    area.textContent = conta
}