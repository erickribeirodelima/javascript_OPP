let nome = prompt("Digite seu nome completo:");

document.body.innerHTML += `<p>Seu nome completo é: <strong>${nome}</strong></p>`;
document.body.innerHTML += `<p>Seu nome tem <strong>${nome.length}</strong> caracteres.</p>`;
document.body.innerHTML += `<p>A segunda letra do seu nome é: <strong>${nome[1]}</strong></p>`;
document.body.innerHTML += `<p>Qual o primeiro índice da letra 'i' do seu nome? <strong>${nome.indexOf('i')}</strong></p>`;
document.body.innerHTML += `<p>Qual o último índice da letra 'i' do seu nome? <strong>${nome.lastIndexOf('i')}</strong></p>`;
document.body.innerHTML += `<p>As últimas letras do seu nome são: <strong>${nome.slice(-3)}</strong></p>`;
document.body.innerHTML += `<p>As palavras do seu nome são: <strong>${nome.split(' ')}</strong></p>`;
document.body.innerHTML += `<p>Seu nome em letras maiúsculas: <strong>${nome.toUpperCase()}</strong></p>`;
document.body.innerHTML += `<p>Seu nome em letras minúsculas: <strong>${nome.toLowerCase()}</strong></p>`;
