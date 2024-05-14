// A funcao pop remove apenas o ultimo elemento da tabela
/*function removerCarro(arrayCarro){
    arrayCarro.pop()
    console.log(arrayCarro)
}*/




//Inicializando um array vazio
let carros = []
//Criando um carro uno
let uno = new Carro("fiat", "XXY-4502", "vermelho", 2012)
carros.push(uno) //Acrescentando o uno no array de carros

//Criando um carro fusca
let fusca = new Carro("Volkswagen", "uuu-8978", "branco", 1980)
carros.push(fusca) //Acrescentando o fusca no array de carros

//Criando um carro strada
let strada = new Carro("fiat", "xxx-1456", "preto", 2014)
carros.push(strada) //Acrescentando o fusca no array de carros

//Criando um carro onix
let onix = new Carro("chevrolet", "pps-1458", "cinza", 2023)
carros.push(onix) //Acrescentando o fusca no array de carros

console.log(carros)

// removerCarro(carros)