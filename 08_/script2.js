
function sobrePessoa(nome, idade, profissao) {
    return {
        nomePessoa: nome,
        idadePessoa: idade,
        profissaoPessoa: profissao,
        fazAniversario: function () {
            this.idadePessoa += 1;
        },
    }
}

let pessoa1 = sobrePessoa("Erick", 31, "Programador");
let pessoa2 = sobrePessoa("Grasiely", 29, "Educadora");

console.log(pessoa1.nomePessoa);
console.log(pessoa1.profissaoPessoa);
console.log(pessoa1.idadePessoa);
pessoa1.fazAniversario();
console.log(`${pessoa1.nomePessoa} fez aniversário, agora ele tem ${pessoa1.idadePessoa} anos de idade.`);
console.log(`${pessoa2.nomePessoa} é ${pessoa2.profissaoPessoa}`);
