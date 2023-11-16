// class User {
//     name: string
//     age: number

//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//     }

//     info(): string {
//         return `Meu nome é ${this.name} e minha idade é de ${this.age}`
//     }
// }

// const person = new User('João', 20)
// console.log(person.info());

// utilizando o public

class User {
    constructor(public name: string, public age: number) {}

    info(): string {
        return `Meu nome é ${this.name} e minha idade é de ${this.age}`
    }
}

const person = new User('João', 20)
console.log(person.info());

