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