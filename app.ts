const soma = (a: number, b: number) => {
    console.log(a + b)
}

soma(10, 30)

// Objetos e interfaces

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string // "?" torna a propiedade opcional
}

const pessoa: Pessoa = {
    nome: 'João',
    idade: 19
}

const outraPessoa: Pessoa = {
    nome: 'Paulo',
    idade: 26,
    profissao: 'Desenvolvedor'
}

const arrayPessoa: Array<Pessoa> = [
    pessoa,
    outraPessoa
]

const arrayNum: number[] = [
    1, 2, 5
]

const arrayString: Array<string> = [
    '2', '3', '4'
]


// Estrutura de decisões e repetições

const num: number = 15

const arrayNumber: number[] = [
    1, 4, 6, 5, 7
]

if (arrayNumber.includes(0)) {
    console.log('Num igual a 3')
} else {
    console.log('Num igual a 15')
}

const typeUser = {
    admin: 'Seja bem vindo adm',
    student: 'Voce é um estudante',
    viewer: 'Voce pode visualizar'
}

function validateUser(user: string) {
    console.log(typeUser[user as keyof typeof typeUser])
}

const usuario = 'student'

validateUser(usuario)

// estrutura de repetição

// for (let i = 0; i <= 5; i++){
//     console.log(i)
// }

// let n = 2

// while(n < 6) {
//     console.log(n)
//     n++
// }

const array: Array<number> = [1, 2, 3, 4, 5, 6]

array.push(8)
array.pop() // remove o ultimo array

array.forEach(num => {
    if (num > 2) {
        console.log(num)
    }
})

// console.log('array como elemento novo adicionado:', array)


const stringArray: Array<string> = ['a', 'b', 'c', 'd']