// Function que retorna objeto

function criaCarro(modelo, ano, portas, aro, tetoSolar) {
    return {
        modeloCarro: modelo,
        anoCarro: ano,
        quantidadePortas: portas,
        tamanhoAro: aro,
        tetoSolar: tetoSolar,
        qualAnoCarro: function () {
            if (ano <= 2000) {
                console.log("Esse carro tem mais de 20 anos.");
            } else {
                console.log("Esse carro é acima dos anos 2000.");
            }
        },
        temTetoSolar: function () {
            if (tetoSolar === true) {
                console.log("Tem teto solar.");
            } else {
                console.log("Não tem teto solar.")
            }
        },
    }

};

let carro1 = criaCarro("BMW", 2010, 4, 15, true);
let carro2 = criaCarro("Corsa", 1997, 4, 13, false);

console.log(carro1.modeloCarro);
console.log(carro1.anoCarro);
carro1.qualAnoCarro();
carro1.temTetoSolar();

console.log(carro2.modeloCarro);
console.log(carro2.quantidadePortas);
carro2.qualAnoCarro();
carro2.temTetoSolar();