//uma linha
//q1
var bonjuor = "bonjour"
console.log(bonjuor)


//q2
const frutass = ['maca', 'banana']
for (const lista of frutass) {
    console.log(frutass)
}

//q3

const frutas = ['maçã', 'banana', 'laranja']
console.log(frutas[2])


//q4
function pontencia(y, x) {
    return x ** y
}
console.log("o resultado do numero ao quadrado é:" + (5 ** 2))


//q5
let a = 1
let b = 2
let c = 5
var soma = a + b
console.log(soma)
if (soma < c) {
    console.log("é menor")

}


//q6
// junta o valor 5 e 10, formanddo 510


let numero = "5"
soma = numero + 10
console.log(soma)


//como avarieval numero guarda uma string, a operacao + apenas concatena com o numero 10, colocando um elemento na frente do outro 




//q7
let A = 5
let B = 2
let C = 1
if (A == B) {
    c = A + B
} else {
    c = A * B
}
console.log(c)



//q8
//com a declaração feita me var, o valor de conrador é lido fora do bloco e exibido normalmente. Com a declaração usando let a tentativa de ler o valor de contador fora do bloco for causa um erro de variavel nao definida

//q9
let numero5 = 5
console.log("o antecessor é :" + (numero5 - 1))
console.log(" o sucessor é :" + (numero5 + 1))

//q10
var x = 10;
function minhaFuncao() {
    var y = 5;
    console.log(x + y);
}
minhaFuncao();



//q11
var numero1 = "5";

if (numero1 === 5) {
    console.log("o numero é igual a 5.");
} else if (numero1 == 5) {
    console.log("O numero é igual a 5, com conversão de tipo.");
} else {
    console.log(" o numero não é igual a 5.");
}

//q12

const questao = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const pares = []
for (item of questao) {
    if (item % 2 == 0) {
        pares.push(item)


    }
}
console.log(pares)


//13
function notas(a, b, c) {
    return (a + b + c) / 3
}
let media = notas(7, 7, 5)
if (media >= 7) {
    console.log("aprovado")
} else if (media >= 5) {
    console.log("recuperação")
} else {
    console.log("reprovado")
}


//14
function imc(p, h) {
    return p / (h ** 2)
}

let body = imc(64, 1.63)
if (body > 40) {
    console.log("Seu imc é: " + body + ",resultado: obesidade mórbida")
} else if (body > 30) {
    console.log(" seu imc é: " + body + ", resultado: obesidade")
} else if (body > 25) {
    console.log(" seu imc é: " + body + ", resultado: sobrepeso")
} else if (body > 18.5) {
    console.log("Seu imc é:" + body + ", resultado: peso ideal")
} else {
    console.log("seu imc é: " + body + ", resultado: abaixo do peso")
}


//q15
var tabua = 6
for (let b = 1; b < 11; b++) {
    console.log(tabua * b)
}


//q16
//function divisão(n,d){
//  return n/d
//}
//let calculo= divisão(10,2)

let n1 = 10
let n2 = 1

let divisão = n1 / n2
console.log(divisão)

try {
    if (n2 == 0) throw new RangeError('resultado igual a 0')
    else { console.log('o resultado da divisãoé:' + divisão) }
} catch (erro) {
    console.error(' o cath recebeu o error' + erro)
}
//q17
function calculaGasolina(distancia) {
    const preco_gasolina = 5.24
    const autonomia = 9.8
    let valor = ((distancia / autonomia) * preco_gasolina).toFixed(2)
    console.log(`para fazer ${distancia}kms voce deve abastecer ${valor * 2}R$`)
}
calculaGasolina(2900)
calculaGasolina(300)

//18
function fatorial(num) {
    try {
        if (num < 0) {
            throw new RangerError('Não é possivel calcular o fatorial de números');

        } else if (num === 0) {
            console.log('o fatorial da zero é 1');
        } else {
            let resultado = 1;
            for (let i = 1; i <= num; i++) {
                resultado *= i;
            }
            console.log(`o fatorial de ${num} é ${resultado}`);
        }

    } catch (error) {
        console.error('Erro foi:' + error.message);
    }
}

fatorial(5);
fatorial(0);
fatorial(1);
fatorial(-10);





//const Ay= [12, 36, 52, 77]
;const Ay1 = []//
for (item of questao) {
    if (item % 2 == 0) {
        pares.push(item)//


    }
}
console.log(pares)//





//19
const arrayq19 = [12, 36, 52, 77]
const arrayresult= []

arrayq19.forEach((item) =>{
    let resultado = item + 7
    arrayresult.push(resultado)
})
console.log(arrayresult)



//20
let identidade = false
let motorista = false
if (identidade || motorista) {
    console.log('Esta apto a fazer a prova')
} else {
    console.log('Nao esta apto a fazer a prova')
}



//q21
var frutas1 = ["maça", "banana", "laranja"];
console.log(frutas1[3])


// a saida sera unidefined pois acessamos uma posicão que nao esta definida no array





