let usuario = prompt("Digite seu usuário:");
let senha = prompt("Digite sua senha:");

if(usuario === "erick" && senha === "1234"){
    document.body.innerHTML = `<p>Login efetuado com sucesso!</p>`;
} else {
    document.body.innerHTML = `<p>Senha ou usuario incorreto!</p>`
};
