class Count {
   public number: number
   public title: string

    constructor(title: string) {
        this.number = this.generateAccountNumber()
        this.title = title
    }
 
    generateAccountNumber():number {
        return Math.floor(Math.random()* 100000)+1
    } // tiro o this.number pois essa função ja gera um numero
}

class CountPF extends Count {
    cpf: number

    constructor(cpf: number, title: string){
        super(title)
        this.cpf = cpf
    }
}

class CountPJ extends Count {
    cpnj: number

    constructor(cnpj: number, title: string){
        super(title)
        this.cpnj = cnpj
    }
}

const cont = new CountPF(1234, 'teste')
const cont2 = new CountPJ(1234, 'teste')
console.log(cont);
console.log(cont2);


