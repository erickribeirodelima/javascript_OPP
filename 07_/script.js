// Constructor functions

function Ninja(nome, arma) {
    this.nome = nome;
    this.arma = arma;
    this.atirarArma = function() {
        console.log("Atirou a " + this.arma);
    };
}

let ninja1 = new Ninja('Naruto', 'shuriken');

console.log(ninja1.nome);
ninja1.atirarArma();

let ninja2 = new Ninja('sasuke', 'kunai');

console.log(ninja2.nome);
console.log(`${ninja2.nome} tem uma ${ninja2.arma} como arma.`)
ninja2.atirarArma();
