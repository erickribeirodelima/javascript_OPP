// Objeto dentro de objeto

let pessoa = {
    nome: "Erick",
    caracteristicas: {
        olhos: "verdes",
        cabelo: "raspado",
        brincos: false,
        oculos: true,
    }
};

if (pessoa.caracteristicas.oculos === true){
    console.log(`${pessoa.nome} usa óculos.`);
} else {
    console.log(`${pessoa.nome} não usa óculos.`);
}
