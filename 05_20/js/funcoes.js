/*
Funções são blocos de cosntrução. Nós escrevemos um trecho de código que poderá ser reutilizado.
Para usar uma função, você deve defini-lá ema algum lugar e chamar no escopo onde precisar.
*/

function quadrado(numero){
    return numero * numero
}

let num1 = 5, num2 = 4

num1 = quadrado(num1)
num1 = quadrado(num2)

console.log(num1)
console.log(num2)

function minhaFuncao(objeto){
    objeto.fabrica = "Toyota"
}

let carro = {fabrica: "Honda", modelo: "Civic", ano:2019}
console.log(carro.fabrica)

let x,y
x = carro.fabrica
console.log(x)
minhaFuncao(carro)
y = carro.fabrica
console.log(y)

let elevadoQuadrado = function(numero){
 return numero * numero
}
let fatorial = function fac(numero){
    if(numero < 2){
        return 1
    }else{
        return numero * fac(numero-1)
    }
}

console.log(fatorial(5))

let numeros = [1,2,3,4,5]
console.log(numeros)

// let novosNumeros = numeros.map(num=>num*2)
let novosNumeros = numeros.map(function(num){
    return num * 2
})
console.log(novosNumeros)