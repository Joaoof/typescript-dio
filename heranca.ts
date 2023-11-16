class Count {
    number: number
    title: string

    constructor(number: number, title: string) {
        this.number = number
        this.title = title
    }
}

class CountPF extends Count {

}

class CountPJ extends Count {

}

const cont = new CountPF(1234, 'teste')
const cont2 = new CountPJ(1234, 'teste')
console.log(cont);


