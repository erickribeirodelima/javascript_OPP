let pessoa = {
    nome: "Erick",
    sobrenome: "Ribeiro de Lima",
    idade: 31,
    aniversario() {
        this.idade += 1;
    },
    habilitacao: true,
    podeDirigir() {
        if(pessoa.idade >= 18 && pessoa.habilitacao === true){
            console.log(`${pessoa.nome} pode dirigir!`);
        } else if (pessoa.idade >= 18 && pessoa.habilitacao === false){
            console.log(`${pessoa.nome} não pode dirigir, pois não tem habilitação!`);
        } else {
            console.log(`${pessoa.nome} não pode dirigir, pois é menor de idade.`);
        }
    }
};

pessoa.podeDirigir();
