class heroi{
    constructor(nome, tipo){
        this.nome = nome
        this.tipo = tipo
    }

    atacar(){
        console.log(`O ${this.nome} atacou usando ${this.tipo}`)
        
    }
}

let heroiMago = new heroi("Mago", "magia")
let heroiGuerreiro = new heroi("Guerreiro", "espada")
let heroiMonge = new heroi("Monge", "artes marciais")
let heroiNinja = new heroi("Ninja", "shuriken")

heroiMago.atacar()
heroiGuerreiro.atacar()
heroiMonge.atacar()
heroiNinja.atacar()