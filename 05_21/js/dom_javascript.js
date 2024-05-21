// Quando a página Web é Carregada o navegador cria um Documento Object Model (DOM)
// O DOM possui uma árvore de objetos
document.getElementById("saudacao").innerHTML = "Boa tarde Terça Feira"
// Adicionando uma saudação a uma div com id saudacao

//document.getElementsByTagName("h1")[0].innerHTML = "teste"

// Pegando um array com todos os elementos h1
let h1s = document.getElementsByTagName("h1")
h1s[0].innerText = "Introdução"
h1s[1].innerText = "SENAI_Porto"

// Pegando um array com cada elemento com a classe "descricao"
let descricao = document.getElementsByClassName("descricao")

for (let i = 0; i < descricao.length; i++) {
    descricao[i].innerText = "Div " + i
}

function alterandoClasse() {
    let conteudo = document.getElementById("conteudo")
    conteudo.className = "alterada"
}

function adicionandoClasse(){
    let texto = document.getElementById("texto")
    texto.classList.add("vermelho")
}

function removendoClasse(){
    let texto = document.getElementById("texto")
    texto.classList.remove("vermelho")
}