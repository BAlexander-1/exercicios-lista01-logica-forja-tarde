function escreva(){
    var nome = document.getElementById("nome").value
    var desc = document.getElementById("desc").value
    var idade = parseFloat(document.getElementById("idade").value)
    var gen = document.getElementById("gen").value
    var hob = document.getElementById("hob").value



    var printNome = document.getElementById("printNome")
    var printDescri = document.getElementById("printDescri")
    var printIdade = document.getElementById("printIdade")
    var printGen = document.getElementById("printGen")
    var printHob = document.getElementById("printHob")

  printNome.textContent = nome
  printDescri.textContent = desc
  printIdade.textContent = idade
  printGen.textContent = gen
  printHob.textContent = hob
}
